<template>
  <!-- Dashboard Menu -->
  <div class="dashboard-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="dashboard-menu">
            <ul>
              <li>
                <router-link to="/user/user-wishlist">
                  <img src="@/assets/img/icons/wishlist-icon.svg" alt="Icon" />
                  <span>Preferiti</span>
                </router-link>
              </li>
              <li>
                <router-link to="/user/user-messages">
                  <img src="@/assets/img/icons/message-icon.svg" alt="Icon" />
                  <span>Messaggi</span>
                </router-link>
              </li>
              <li>
                <router-link to="/user/user-upload">
                  <img src="@/assets/img/icons/message-icon.svg" alt="Icon" />
                  <span>Carica Auto</span>
                </router-link>
              </li>
              <li>
                <router-link to="/user/user-uploaded-cars">
                  <img src="@/assets/img/icons/message-icon.svg" alt="Icon" />
                  <span>Auto Caricate</span>
                </router-link>
              </li>

              <li>
                <router-link
                  v-bind:class="{
                    active:
                      currentPath.includes('user-settings') ||
                      currentPath.includes('user-security') ||
                      currentPath.includes('user-preferences') ||
                      currentPath.includes('user-notifications') ||
                      currentPath.includes('user-integration'),
                  }"
                  to="/user/user-settings"
                >
                  <img src="@/assets/img/icons/settings-icon.svg" alt="Icon" />
                  <span>Impostazioni</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Dashboard Menu -->
</template>

<script>
export default {
  data() {
    return {
      currentPath: this.$route.path, // Initialize currentPath with the current route path
    };
  },
};
</script>
