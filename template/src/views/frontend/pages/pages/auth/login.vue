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
                Back To Home</router-link
              >
            </div>
            <h1>Accedi</h1>
            <p class="account-subtitle">
              Inserisci le tue credenziali per accedere al tuo account.
            </p>
            <Form
              @submit="onSubmit"
              :validation-schema="schema"
              v-slot="{ errors }"
            >
              <div class="input-block">
                <label class="form-label"
                  >Email <span class="text-danger">*</span></label
                >
                <Field
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors.email }"
                  placeholder="Inserisci la tua email"
                />
                <div class="invalid-feedback">{{ errors.email }}</div>
                <div class="emailshow text-danger" id="email"></div>
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
                    :class="{ 'is-invalid': errors.password }"
                    placeholder="Inserisci la tua password"
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
                  <div class="emailshow text-danger" id="password"></div>
                </div>
              </div>

              <button
                class="btn btn-outline-light w-100 btn-size mt-1"
                :disabled="isLoading"
              >
                <span
                  v-if="isLoading"
                  class="spinner-border spinner-border-sm me-2"
                  role="status"
                ></span>
                {{ isLoading ? "Accesso in corso..." : "Accedi" }}
              </button>

              <!-- Social Login -->

              <!-- /Social Login -->
              <div class="text-center dont-have">
                Non hai ancora un account?
                <router-link to="/authentication/register"
                  >Registrati</router-link
                >
              </div>
            </Form>

            <div class="text-center mt-3">
              <router-link
                class="forgot-link"
                to="/authentication/forgot-password"
                style="color: #007bff; text-decoration: none; cursor: pointer"
                >Password dimenticata?</router-link
              >
            </div>
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
import { router } from "@/router";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useAuth } from "@/composables/useAuth";

export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      showPassword: false,
      password: null,
      emailError: "",
      passwordError: "",
    };
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
  },
  setup() {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required("L'email è obbligatoria")
        .email("Formato email non valido"),
      password: Yup.string()
        .min(8, "La password deve essere di almeno 8 caratteri")
        .required("La password è obbligatoria"),
    });

    const isLoading = ref(false);

    const { login } = useAuth();

    const onSubmit = async (values) => {
      // Pulisci errori precedenti
      document.getElementById("email").innerHTML = "";
      document.getElementById("password").innerHTML = "";

      isLoading.value = true;

      try {
        const result = await login(values.email, values.password);

        if (result.success) {
          console.log("Login successful:", result.user);
          // Reindirizza alla home page
          router.push("/home/index-2");
        } else {
          // Gestisci errori
          const error = result.error;
          if (error.status === 400) {
            if (error.data?.message?.includes("password")) {
              document.getElementById("password").innerHTML =
                "Password incorretta";
            } else {
              document.getElementById("email").innerHTML =
                "Email o password non validi";
            }
          } else if (error.status === 404) {
            document.getElementById("email").innerHTML = "Email non registrata";
          } else {
            document.getElementById("email").innerHTML =
              "Errore di connessione. Riprova più tardi.";
          }
        }
      } catch (error) {
        console.error("Login error:", error);
        document.getElementById("email").innerHTML =
          "Errore di connessione. Riprova più tardi.";
      } finally {
        isLoading.value = false;
      }
    };

    return {
      schema,
      onSubmit,
      isLoading,
      checked: ref(false),
    };
  },
};
</script>

<style scoped>
.forgot-link {
  color: #007bff !important;
  text-decoration: none !important;
  cursor: pointer !important;
  font-weight: 500;
  transition: color 0.2s ease;
}

.forgot-link:hover {
  color: #0056b3 !important;
  text-decoration: underline !important;
}
</style>
