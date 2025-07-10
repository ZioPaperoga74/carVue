<template>
  <div class="main-wrapper login-body">
    <header class="log-header">
      <router-link to="/home/index-2">
        <img
          class="img-fluid logo-dark"
          src="@/assets/img/logo.svg"
          alt="Logo"
        />
      </router-link>
    </header>
    <div class="login-wrapper">
      <div class="loginbox">
        <div class="login-auth">
          <div class="login-auth-wrap">
            <div class="sign-group">
              <router-link to="/home/index-2" class="btn sign-up">
                <i class="fe feather-corner-down-left"></i> Back To Home
              </router-link>
            </div>
            <h1>Reset Password</h1>
            <p class="account-subtitle">
              La nuova password deve essere diversa da quelle precedenti.
            </p>

            <div v-if="tokenError" class="alert alert-danger">
              {{ tokenError }}
            </div>
            <div v-if="successMessage" class="alert alert-success">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="alert alert-danger">
              {{ errorMessage }}
            </div>

            <form
              v-if="!successMessage && !tokenError"
              @submit.prevent="submit"
            >
              <div class="input-block">
                <label class="form-label">New Password *</label>
                <input
                  v-model="newPassword"
                  type="password"
                  class="form-control"
                  placeholder="Enter new password"
                  :disabled="isLoading"
                  required
                  minlength="8"
                />
              </div>

              <div class="input-block mt-3">
                <label class="form-label">Confirm Password *</label>
                <input
                  v-model="confirmPassword"
                  type="password"
                  class="form-control"
                  placeholder="Confirm new password"
                  :disabled="isLoading"
                  required
                  minlength="8"
                />
              </div>

              <div v-if="passwordError" class="alert alert-danger mt-3">
                {{ passwordError }}
              </div>

              <button
                type="submit"
                class="btn btn-outline-light w-100 btn-size mt-3"
                :disabled="isLoading || !isFormValid"
              >
                <span v-if="isLoading">
                  <i class="fas fa-spinner fa-spin me-2"></i>Updating...
                </span>
                <span v-else>Save Changes</span>
              </button>
            </form>

            <div v-if="successMessage" class="text-center mt-3">
              <router-link to="/pages/auth/login" class="btn btn-primary">
                Go to Login
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <auth-footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import PocketBase from "pocketbase";

const route = useRoute();
const router = useRouter();
const token = route.query.token || "";
const pb = new PocketBase("http://127.0.0.1:8090");

const newPassword = ref("");
const confirmPassword = ref("");
const isLoading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");
const tokenError = ref("");
const passwordError = ref("");

const isFormValid = computed(
  () =>
    newPassword.value.length >= 8 && newPassword.value === confirmPassword.value
);

async function submit() {
  tokenError.value = "";
  errorMessage.value = "";
  passwordError.value = "";

  if (!token) {
    tokenError.value = "Link non valido. Richiedi un nuovo reset.";
    return;
  }
  if (!isFormValid.value) {
    passwordError.value =
      "Le password devono corrispondere e fare almeno 8 caratteri.";
    return;
  }

  isLoading.value = true;
  try {
    // *** built-in confirmPasswordReset ***
    await pb
      .collection("users")
      .confirmPasswordReset(token, newPassword.value, confirmPassword.value);

    successMessage.value = "Password aggiornata con successo!";
    setTimeout(() => router.push("/pages/auth/login"), 1500);
  } catch (err) {
    console.error(err);
    errorMessage.value =
      err.data?.data?.token?.message ||
      err.message ||
      "Errore nel resettare la password.";
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
.alert {
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
}
.alert-success {
  background: #d1e7dd;
  border: 1px solid #badbcc;
  color: #0f5132;
}
.alert-danger {
  background: #f8d7da;
  border: 1px solid #f5c2c7;
  color: #842029;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
