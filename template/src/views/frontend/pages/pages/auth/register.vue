<template>
  <div class="main-wrapper login-body">
    <!-- Header -->
    <header class="log-header">
      <router-link to="/home/index-2"
        ><img
          class="img-fluid logo-dark"
          src="@/assets/img/logo.svg"
          alt="Logo"
      /></router-link>
    </header>
    <!-- /Header -->
    <div class="login-wrapper">
      <div class="loginbox">
        <div class="login-auth">
          <div class="login-auth-wrap">
            <div class="sign-group">
              <router-link to="/home/index-2" class="btn sign-up"
                ><span
                  ><i class="fe feather-corner-down-left" aria-hidden="true"></i
                ></span>
                Torna alla Home</router-link
              >
            </div>
            <h1>Registrati qui</h1>
            <p class="account-subtitle">Ti invieremo una conferma all'email.</p>
            <Form
              @submit="onSubmit"
              :validation-schema="schema"
              v-slot="{ errors }"
            >
              <div class="input-block">
                <label class="form-label"
                  >Nome <span class="text-danger">*</span></label
                >
                <Field
                  name="name"
                  type="text"
                  class="form-control"
                  placeholder="Inserisci il tuo nome"
                  :class="{ 'is-invalid': errors.name }"
                />
                <div class="invalid-feedback">{{ errors.name }}</div>
              </div>
              <div class="input-block mt-3">
                <label class="form-label"
                  >Email <span class="text-danger">*</span></label
                >
                <Field
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder="Inserisci la tua email"
                  :class="{ 'is-invalid': errors.email }"
                />
                <div class="invalid-feedback">{{ errors.email }}</div>
                <div v-if="emailError" class="text-danger">
                  {{ emailError }}
                </div>
              </div>
              <div class="input-block mt-3">
                <label class="form-label"
                  >Password <span class="text-danger">*</span></label
                >
                <div class="pass-group">
                  <Field
                    name="password"
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control pass-input mt-2"
                    placeholder="Inserisci la password"
                    :class="{ 'is-invalid': errors.password }"
                  />
                  <span @click="toggleShow" class="toggle-password">
                    <i
                      :class="{
                        'fas fa-eye': showPassword,
                        'fas fa-eye-slash': !showPassword,
                      }"
                    ></i>
                  </span>
                  <div class="invalid-feedback">{{ errors.password }}</div>
                  <div v-if="passwordError" class="text-danger">
                    {{ passwordError }}
                  </div>
                </div>
              </div>
              <div class="input-block mt-3">
                <label class="form-label"
                  >Conferma Password <span class="text-danger">*</span></label
                >
                <div class="pass-group">
                  <Field
                    name="passwordConfirm"
                    :type="showPasswordConfirm ? 'text' : 'password'"
                    class="form-control pass-input mt-2"
                    placeholder="Conferma la password"
                    :class="{ 'is-invalid': errors.passwordConfirm }"
                  />
                  <span @click="toggleShowConfirm" class="toggle-password">
                    <i
                      :class="{
                        'fas fa-eye': showPasswordConfirm,
                        'fas fa-eye-slash': !showPasswordConfirm,
                      }"
                    ></i>
                  </span>
                  <div class="invalid-feedback">
                    {{ errors.passwordConfirm }}
                  </div>
                </div>
              </div>
              <button
                class="btn btn-outline-light w-100 btn-size mt-1"
                type="submit"
                :disabled="isLoading"
              >
                <span
                  v-if="isLoading"
                  class="spinner-border spinner-border-sm me-2"
                ></span>
                {{ isLoading ? "Registrazione..." : "Registrati" }}
              </button>

              <!-- /Social Login -->
              <div class="text-center dont-have">
                Hai gia un Account?
                <router-link to="/authentication/login">Accedi</router-link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <auth-footer></auth-footer>
    <!-- /Footer -->
  </div>
</template>
<script>
import { ref } from "vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { router } from "@/router";
import PocketBase from "pocketbase";
export default {
  components: {
    Form,
    Field,
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShowConfirm() {
      this.showPasswordConfirm = !this.showPasswordConfirm;
    },
  },
  setup() {
    const showPassword = ref(false);
    const showPasswordConfirm = ref(false);
    const emailError = ref("");
    const passwordError = ref("");
    const isLoading = ref(false);

    // Inizializza PocketBase
    const pb = new PocketBase("http://127.0.0.1:8090");

    const schema = Yup.object().shape({
      name: Yup.string()
        .required("Il nome è obbligatorio")
        .min(2, "Il nome deve avere almeno 2 caratteri"),
      email: Yup.string()
        .required("L'email è obbligatoria")
        .email("Inserisci un'email valida"),
      password: Yup.string()
        .min(8, "La password deve avere almeno 8 caratteri")
        .required("La password è obbligatoria"),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Le password devono coincidere")
        .required("La conferma password è obbligatoria"),
    });

    const onSubmit = async (values) => {
      try {
        isLoading.value = true;
        emailError.value = "";
        passwordError.value = "";

        // Prepara i dati per PocketBase
        const data = {
          name: values.name,
          email: values.email,
          password: values.password,
          passwordConfirm: values.passwordConfirm,
          emailVisibility: true,
          role: "user", // ruolo di default
        };

        // Crea l'utente con PocketBase
        const record = await pb.collection("users").create(data);

        // (Opzionale) Invia richiesta di verifica email
        await pb.collection("users").requestVerification(values.email);

        // Successo - reindirizza al login
        alert(
          "Registrazione completata! Controlla la tua email per verificare l'account."
        );
        router.push("/");
      } catch (error) {
        console.error("Errore durante la registrazione:", error);

        // Gestisci errori specifici
        if (error.response?.data) {
          const errorData = error.response.data;

          if (errorData.email) {
            emailError.value = "Questa email è già registrata";
          }
          if (errorData.password) {
            passwordError.value =
              errorData.password.message || "Errore con la password";
          }
          if (errorData.message) {
            alert("Errore: " + errorData.message);
          }
        } else {
          alert("Errore durante la registrazione. Riprova più tardi.");
        }
      } finally {
        isLoading.value = false;
      }
    };

    return {
      showPassword,
      showPasswordConfirm,
      schema,
      onSubmit,
      emailError,
      passwordError,
      isLoading,
    };
  },
};
</script>
