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
            <h1>Password Dimenticata</h1>
            <p class="account-subtitle">
              Inserisci la tua email e ti invieremo un link per reimpostare la
              password.
            </p>

            <div v-if="successMessage" class="alert alert-success">
              <i class="fas fa-check-circle me-2"></i>
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="alert alert-danger">
              <i class="fas fa-exclamation-triangle me-2"></i>
              {{ errorMessage }}
            </div>

            <form @submit.prevent="submit">
              <div class="input-block">
                <label class="form-label">
                  Indirizzo Email <span class="text-danger">*</span>
                </label>
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  placeholder="Inserisci il tuo indirizzo email"
                  :disabled="isLoading"
                  required
                />
              </div>
              <button
                type="submit"
                class="btn btn-outline-light w-100 btn-size mt-3"
                :disabled="isLoading"
              >
                <span v-if="isLoading">
                  <i class="fas fa-spinner fa-spin me-2"></i> Invio in corso...
                </span>
                <span v-else>Invia Link di Reset</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <auth-footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const email = ref("");
const isLoading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

async function submit() {
  errorMessage.value = "";
  successMessage.value = "";

  if (!email.value) {
    errorMessage.value = "Inserisci il tuo indirizzo email";
    return;
  }

  isLoading.value = true;
  try {
    await pb.collection("users").requestPasswordReset(email.value);
    successMessage.value =
      "Link di reset inviato con successo! Controlla la tua email.";
    email.value = "";
  } catch (err) {
    console.error(err);
    errorMessage.value =
      err.data?.message ||
      err.message ||
      "Errore nell’inviare la mail. Riprova più tardi.";
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
