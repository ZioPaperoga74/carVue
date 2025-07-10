import axios from "axios";

// Configurazione Brevo
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const SENDER_EMAIL = import.meta.env.VITE_SENDER_EMAIL;
const SENDER_NAME = import.meta.env.VITE_SENDER_NAME;

export const emailService = {
  async sendPasswordResetEmail(email, resetToken, resetUrl) {
    try {
      console.log("📧 Invio email di reset password a:", email);
      console.log("🔗 Reset URL:", resetUrl);
      console.log("🔑 Token:", resetToken);

      if (!BREVO_API_KEY) {
        console.error("❌ VITE_BREVO_API_KEY non configurata");
        throw new Error("Configurazione email non valida");
      }

      const resetLink = `${resetUrl}?token=${resetToken}`;

      const emailData = {
        sender: {
          name: SENDER_NAME || "MultiCars",
          email: SENDER_EMAIL || "supporto@multicars.online",
        },
        to: [
          {
            email: email,
            name: email.split("@")[0], // Usa la parte prima di @ come nome
          },
        ],
        subject: "Reset Password - MultiCars",
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #007bff; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0;">MultiCars</h1>
            </div>
            <div style="padding: 20px; background-color: #f8f9fa;">
              <h2 style="color: #333;">Reset Password</h2>
              <p style="color: #666; line-height: 1.6;">
                Hai richiesto il reset della tua password. Clicca sul link qui sotto per procedere:
              </p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${resetLink}" 
                   style="background-color: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
                  Reset Password
                </a>
              </div>
              <p style="color: #666; font-size: 14px;">
                Se non hai richiesto questo reset, ignora questa email. Il link scadrà tra 1 ora.
              </p>
              <p style="color: #666; font-size: 14px;">
                Se il pulsante non funziona, copia e incolla questo link nel tuo browser:<br>
                <a href="${resetLink}" style="color: #007bff;">${resetLink}</a>
              </p>
            </div>
            <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
              <p style="margin: 0;">© 2024 MultiCars. Tutti i diritti riservati.</p>
            </div>
          </div>
        `,
      };

      const response = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        emailData,
        {
          headers: {
            "api-key": BREVO_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Email inviata con successo:", response.data);

      return {
        success: true,
        messageId: response.data.messageId,
        resetUrl: resetLink,
      };
    } catch (error) {
      console.error("❌ Errore nell'invio dell'email:", error);

      if (error.response) {
        console.error("Dettagli errore:", error.response.data);
        throw new Error(
          `Errore nell'invio dell'email: ${
            error.response.data.message || "Errore sconosciuto"
          }`
        );
      } else {
        throw new Error("Errore di connessione nell'invio dell'email");
      }
    }
  },

  async sendPasswordResetConfirmation(email, userName) {
    try {
      console.log("📧 Invio email di conferma a:", email);
      console.log("👤 Nome utente:", userName);

      if (!BREVO_API_KEY) {
        console.error("❌ VITE_BREVO_API_KEY non configurata");
        throw new Error("Configurazione email non valida");
      }

      const emailData = {
        sender: {
          name: SENDER_NAME || "MultiCars",
          email: SENDER_EMAIL || "supporto@multicars.online",
        },
        to: [
          {
            email: email,
            name: userName || email.split("@")[0],
          },
        ],
        subject: "Password Aggiornata - MultiCars",
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #28a745; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0;">MultiCars</h1>
            </div>
            <div style="padding: 20px; background-color: #f8f9fa;">
              <h2 style="color: #333;">Password Aggiornata</h2>
              <p style="color: #666; line-height: 1.6;">
                Ciao ${userName || "utente"},
              </p>
              <p style="color: #666; line-height: 1.6;">
                La tua password è stata aggiornata con successo. Se non sei stato tu a fare questa modifica, 
                contatta immediatamente il supporto tecnico.
              </p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${window.location.origin}/authentication/login" 
                   style="background-color: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
                  Accedi Ora
                </a>
              </div>
              <p style="color: #666; font-size: 14px;">
                Grazie per aver scelto MultiCars!
              </p>
            </div>
            <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
              <p style="margin: 0;">© 2024 MultiCars. Tutti i diritti riservati.</p>
            </div>
          </div>
        `,
      };

      const response = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        emailData,
        {
          headers: {
            "api-key": BREVO_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Email di conferma inviata con successo:", response.data);

      return {
        success: true,
        messageId: response.data.messageId,
      };
    } catch (error) {
      console.error("❌ Errore nell'invio dell'email di conferma:", error);

      if (error.response) {
        console.error("Dettagli errore:", error.response.data);
        throw new Error(
          `Errore nell'invio dell'email di conferma: ${
            error.response.data.message || "Errore sconosciuto"
          }`
        );
      } else {
        throw new Error(
          "Errore di connessione nell'invio dell'email di conferma"
        );
      }
    }
  },
};
