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
            <h1>Test Forgot Password</h1>
            <p class="account-subtitle">
              Pagina di test per verificare il funzionamento del sistema di
              reset password.
            </p>

            <div class="alert alert-info">
              <h5>Link di Test:</h5>
              <ul>
                <li>
                  <router-link to="/authentication/forgot-password"
                    >Forgot Password (Router Link)</router-link
                  >
                </li>
                <li>
                  <a href="/authentication/forgot-password"
                    >Forgot Password (Direct Link)</a
                  >
                </li>
                <li>
                  <a href="/pages/auth/reset-password?token=test-token"
                    >Reset Password (Test Token)</a
                  >
                </li>
              </ul>
            </div>

            <div class="mt-3">
              <button @click="testForgotPassword" class="btn btn-primary me-2">
                Test Forgot Password
              </button>
              <button @click="testResetPassword" class="btn btn-secondary">
                Test Reset Password
              </button>
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
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const testForgotPassword = () => {
      router.push("/authentication/forgot-password");
    };

    const testResetPassword = () => {
      router.push("/pages/auth/reset-password?token=test-token");
    };

    return {
      testForgotPassword,
      testResetPassword,
    };
  },
};
</script>

<style scoped>
.alert {
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
}

.alert-info {
  background-color: #d1ecf1;
  border: 1px solid #bee5eb;
  color: #0c5460;
}

ul {
  margin: 0;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
