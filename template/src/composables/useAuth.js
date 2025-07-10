import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

// Stato globale dell'utente
const currentUser = ref(null);
const isAuthenticated = ref(false);

// Fetch fresh user data da PocketBase
const fetchCurrentUser = async () => {
  if (currentUser.value && currentUser.value.id) {
    try {
      const fresh = await pb.collection("users").getOne(currentUser.value.id);
      currentUser.value = {
        ...currentUser.value,
        ...fresh,
      };
      localStorage.setItem("currentUser", JSON.stringify(currentUser.value));
    } catch (e) {
      console.error("Errore nel fetch dei dati utente aggiornati:", e);
    }
  }
};

export function useAuth() {
  const router = useRouter();

  // Inizializza l'utente dal localStorage al caricamento
  const initUser = () => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      try {
        currentUser.value = JSON.parse(userData);
        isAuthenticated.value = true;
        // Fetch fresh user data
        fetchCurrentUser();
      } catch (error) {
        console.error("Errore nel parsing dei dati utente:", error);
        logout();
      }
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);

      const userData = {
        id: authData.record.id,
        email: authData.record.email,
        name: authData.record.name,
        role: authData.record.role || "user", // Default a 'user' se non specificato
        token: authData.token,
      };

      currentUser.value = userData;
      isAuthenticated.value = true;
      localStorage.setItem("currentUser", JSON.stringify(userData));

      return { success: true, user: userData };
    } catch (error) {
      console.error("Errore di login:", error);
      return { success: false, error };
    }
  };

  // Logout
  const logout = () => {
    currentUser.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem("currentUser");
    pb.authStore.clear();
    router.push("/home/index-2");
  };

  // Verifica se l'utente ha un ruolo specifico
  const hasRole = (role) => {
    return currentUser.value?.role === role;
  };

  // Verifica se l'utente è admin
  const isAdmin = computed(() => {
    return currentUser.value?.role === "admin";
  });

  // Verifica se l'utente è user (solo se NON è admin)
  const isUser = computed(() => {
    return currentUser.value?.role === "user";
  });

  // Guardia per proteggere le route admin
  const requireAdmin = () => {
    if (!isAuthenticated.value) {
      router.push("/authentication/login");
      return false;
    }

    if (!isAdmin.value) {
      router.push("/user/user-dashboard");
      return false;
    }

    return true;
  };

  // Guardia per proteggere le route user
  const requireAuth = () => {
    if (!isAuthenticated.value) {
      router.push("/authentication/login");
      return false;
    }

    return true;
  };

  return {
    currentUser: computed(() => currentUser.value),
    isAuthenticated: computed(() => isAuthenticated.value),
    isAdmin,
    isUser,
    login,
    logout,
    initUser,
    fetchCurrentUser,
    hasRole,
    requireAdmin,
    requireAuth,
  };
}
