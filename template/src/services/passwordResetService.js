import { emailService } from "./emailService.js";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export const passwordResetService = {
  /**
   * Richiede il reset della password
   * @param {string} email - Email dell'utente
   */
  async requestPasswordReset(email) {
    try {
      console.log("🔍 Cercando utente con email:", email);

      // Cerca l'utente in PocketBase
      const users = await pb.collection("users").getList(1, 1, {
        filter: `email = "${email}"`,
      });

      if (users.items.length === 0) {
        throw new Error("Utente non trovato con questa email");
      }

      const user = users.items[0];
      console.log("✅ Utente trovato:", user.email);

      // Genera un token di reset (validità 1 ora)
      const resetToken = this.generateResetToken();
      const resetExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 ora

      console.log("🔑 Token generato:", resetToken);
      console.log("⏰ Scadenza:", resetExpiry);

      // Salva il token di reset direttamente nell'utente
      await pb.collection("users").update(user.id, {
        passwordResetToken: resetToken,
        passwordResetExpires: resetExpiry.toISOString(),
      });

      console.log("💾 Token salvato nell'utente:", user.id);

      // Invia email di reset
      const resetUrl = `${window.location.origin}/authentication/reset-password`;
      const emailResult = await emailService.sendPasswordResetEmail(
        email,
        resetToken,
        resetUrl
      );

      console.log("📧 Email inviata:", emailResult);

      return {
        success: true,
        message: "Email di reset inviata con successo",
        resetUrl: emailResult.resetUrl, // Per test
      };
    } catch (error) {
      console.error("Errore nella richiesta di reset password:", error);
      throw error;
    }
  },

  /**
   * Verifica la validità del token di reset
   * @param {string} token - Token di reset
   */
  async verifyResetToken(token) {
    try {
      console.log("🔍 Verificando token:", token);

      // Usa la data corrente nel formato esatto di PocketBase (spazio tra data e ora, millisecondi .000Z)
      const now = new Date();
      const nowPB = now
        .toISOString()
        .replace("T", " ")
        .replace(/\.\d+Z$/, ".000Z");
      console.log("Ora PB per confronto:", nowPB);

      // Cerca l'utente con questo token e scadenza valida
      const users = await pb.collection("users").getList(1, 1, {
        filter: `passwordResetToken = "${token}" && passwordResetExpires > "${nowPB}"`,
      });

      console.log("Risultato query utenti:", users.items);

      if (users.items.length === 0) {
        console.log("❌ Token non valido o scaduto");
        return {
          valid: false,
          message:
            "Token di reset non valido o scaduto. Richiedi un nuovo reset.",
        };
      }

      const user = users.items[0];
      console.log("✅ Token valido trovato per utente:", user.email);
      console.log("Token salvato:", user.passwordResetToken);
      console.log("Scadenza salvata:", user.passwordResetExpires);

      return {
        valid: true,
        resetRecord: user,
      };
    } catch (error) {
      console.error("Errore nella verifica del token:", error);
      return { valid: false, message: "Errore nella verifica del token" };
    }
  },

  /**
   * Resetta la password dell'utente
   * @param {string} token - Token di reset
   * @param {string} newPassword - Nuova password
   */
  async resetPassword(token, newPassword) {
    try {
      console.log("🔄 Resetting password per token:", token);

      // Verifica il token
      const tokenVerification = await this.verifyResetToken(token);
      if (!tokenVerification.valid) {
        throw new Error(tokenVerification.message);
      }

      const user = tokenVerification.resetRecord;

      console.log("👤 Utente trovato:", user.email);
      console.log("User record:", user);
      // Aggiorna la password dell'utente usando l'API built-in di PocketBase
      await pb
        .collection("users")
        .confirmPasswordReset(token, newPassword, newPassword);

      console.log("✅ Password aggiornata con successo");
      console.log("✅ Token pulito");

      // Invia email di conferma
      await emailService.sendPasswordResetConfirmation(user.email, user.name);

      return {
        success: true,
        message: "Password aggiornata con successo",
      };
    } catch (error) {
      console.error("Errore nel reset della password:", error, error.data);
      throw error;
    }
  },

  /**
   * Genera un token di reset sicuro
   */
  generateResetToken() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 32; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
  },

  /**
   * Pulisce i token scaduti
   */
  async cleanupExpiredTokens() {
    try {
      console.log("🧹 Pulizia token scaduti");

      // Pulisci i token scaduti dagli utenti
      const usersWithExpiredTokens = await pb
        .collection("users")
        .getList(1, 50, {
          filter: `passwordResetExpires != "" && passwordResetExpires < "${new Date().toISOString()}"`,
        });

      for (const user of usersWithExpiredTokens.items) {
        await pb.collection("users").update(user.id, {
          passwordResetToken: "",
          passwordResetExpires: "",
        });
      }

      console.log("✅ Pulizia completata");
    } catch (error) {
      console.error("Errore nella pulizia dei token scaduti:", error);
    }
  },
};
