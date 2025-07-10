<template>
  <!-- Header -->
  <header
    class="header"
    :class="{
      'header-four': route.path === '/home/index',
      'header-three': route.path === '/home/index-3',
      'header-two': route.path === '/home/index-4',
      'header-fixed': isFixed,
    }"
  >
    <div class="header-two-top" v-if="route.path === '/home/index-4'">
      <div class="container">
        <div class="header-top-items">
          <ul class="header-address">
            <li>
              <span><i class="bx bxs-phone"></i></span>(+088) 123 456 7890
            </li>
            <li>
              <span><i class="bx bx-map"></i></span>5617 Glassford Street New
              York, NY 10000, USA
            </li>
          </ul>
          <div class="header-top-right d-flex align-items-center">
            <div class="header-top-flag-drops d-flex align-items-center">
              <div class="header-top-drpodowns me-3">
                <div class="dropdown header-dropdown country-flag">
                  <a
                    class="dropdown-toggle nav-tog"
                    data-bs-toggle="dropdown"
                    href="javascript:void(0);"
                  >
                    <img src="@/assets/img/flags/us.png" alt="Img" />English
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item">
                      <img src="@/assets/img/flags/fr.png" alt="Img" />French
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                      <img src="@/assets/img/flags/es.png" alt="Img" />Spanish
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                      <img src="@/assets/img/flags/de.png" alt="Img" />German
                    </a>
                  </div>
                </div>
              </div>
              <div class="header-top-drpodowns">
                <div class="dropdown header-dropdown country-flag">
                  <a
                    class="dropdown-toggle nav-tog"
                    data-bs-toggle="dropdown"
                    href="javascript:void(0);"
                  >
                    <i class="bx bx-globe me-2"></i>USD
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item">
                      Euro
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                      INR
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="header-top-social-links">
              <ul>
                <li>
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa-brands fa-behance"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <nav class="navbar navbar-expand-lg header-nav">
        <div class="navbar-header">
          <a id="mobile_btn" href="javascript:void(0);" @click="toggleSidebar">
            <span class="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
          <router-link to="/home/index-2" class="navbar-brand logo">
            <img
              src="@/assets/img/logo.svg"
              class="img-fluid dark-logo"
              alt="Logo"
            />
          </router-link>
          <router-link to="/home/index-2" class="navbar-brand logo-small">
            <img
              src="@/assets/img/logo-small.png"
              class="img-fluid"
              alt="Logo"
            />
          </router-link>
        </div>
        <div class="main-menu-wrapper">
          <div class="menu-header">
            <router-link to="/home/index-2" class="menu-logo">
              <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
            </router-link>
            <a
              id="menu_close"
              class="menu-close"
              href="javascript:void(0);"
              @click="closeSidebar"
            >
              <i class="fas fa-times"></i>
            </a>
          </div>
          <menu-header></menu-header>
        </div>
        <ul
          class="nav header-navbar-rht"
          v-if="
            !isAuthenticated &&
            route.path !== '/home/index-2' &&
            !route.path.startsWith('/listing/') &&
            !route.path.startsWith('/pages/') &&
            !route.path.startsWith('/blog/') &&
            !route.path.startsWith('/user/')
          "
        >
          <li class="nav-item user-link">
            <router-link
              class="nav-link btn-secondary btn d-inline-flex align-items-center"
              to="/authentication/login"
              ><i class="bx bx-user me-1"></i>Sign In</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link header-reg d-inline-flex align-items-center"
              to="/authentication/register"
              ><span><i class="bx bx-lock"></i></span>Sign Up</router-link
            >
          </li>
        </ul>
        <ul
          class="nav header-navbar-rht"
          v-if="
            !isAuthenticated &&
            (route.path === '/home/index-2' ||
              route.path.startsWith('/listing/') ||
              route.path.startsWith('/pages/') ||
              route.path.startsWith('/blog/'))
          "
        >
          <li class="nav-item">
            <router-link
              class="nav-link header-login"
              to="/authentication/login"
              ><span><i class="fa-regular fa-user"></i></span
              >Accedi</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link header-reg"
              to="/authentication/register"
              ><span><i class="fa-solid fa-lock"></i></span
              >Registrati</router-link
            >
          </li>
        </ul>

        <ul class="nav header-navbar-rht" v-if="isAuthenticated">
          <!-- Notifications -->
          <li class="nav-item dropdown logged-item noti-nav noti-wrapper">
            <a
              href="#"
              class="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span class="bell-icon"
                ><img src="@/assets/img/icons/bell-icon.svg" alt="Bell"
              /></span>
              <span class="badge badge-pill"></span>
            </a>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span class="notification-title">Notifications</span>
                <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
              </div>
              <div class="noti-content">
                <ul class="notification-list">
                  <li class="notification-message">
                    <a href="#">
                      <div class="media d-flex">
                        <span class="avatar avatar-lg flex-shrink-0">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src="@/assets/img/profiles/avatar-01.jpg"
                          />
                        </span>
                        <div class="media-body flex-grow-1">
                          <p class="noti-details">
                            <span class="noti-title">Jonathan Doe </span> has
                            booked <span class="noti-title">your service</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="#">
                      <div class="media d-flex">
                        <span class="avatar avatar-lg flex-shrink-0">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src="@/assets/img/profiles/avatar-03.jpg"
                          />
                        </span>
                        <div class="media-body flex-grow-1">
                          <p class="noti-details">
                            <span class="noti-title">Julie Pennington</span> has
                            booked <span class="noti-title">your service</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">6 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="#">
                      <div class="media d-flex">
                        <span class="avatar avatar-lg flex-shrink-0">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src="@/assets/img/profiles/avatar-02.jpg"
                          />
                        </span>
                        <div class="media-body flex-grow-1">
                          <p class="noti-details">
                            <span class="noti-title">Tyrone Roberts</span> has
                            booked <span class="noti-title">your service</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">8 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="#">
                      <div class="media d-flex">
                        <span class="avatar avatar-lg flex-shrink-0">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src="@/assets/img/profiles/avatar-04.jpg"
                          />
                        </span>
                        <div class="media-body flex-grow-1">
                          <p class="noti-details">
                            <span class="noti-title">Patricia Manzi</span> has
                            booked <span class="noti-title">your service</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">12 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="#">
                      <div class="media d-flex">
                        <span class="avatar avatar-lg flex-shrink-0">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src="@/assets/img/profiles/avatar-01.jpg"
                          />
                        </span>
                        <div class="media-body flex-grow-1">
                          <p class="noti-details">
                            <span class="noti-title">Jonathan Doe</span> has
                            booked <span class="noti-title">your service</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="topnav-dropdown-footer">
                <a href="#">View all Notifications</a>
              </div>
            </div>
          </li>
          <!-- /Notifications -->

          <!-- User Menu -->
          <li class="nav-item dropdown has-arrow logged-item">
            <a
              href="#"
              class="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span class="user-img">
                <img
                  class="rounded-circle"
                  src="@/assets/img/profiles/avatar-14.jpg"
                  alt="Profile"
                />
              </span>
              <span class="user-text">{{ currentUser?.name || "Utente" }}</span>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <!-- <router-link class="dropdown-item" to="/user/user-dashboard">
                <i class="feather-user-check"></i> Dashboard
              </router-link> -->
              <router-link class="dropdown-item" to="/user/user-settings">
                <i class="feather-settings"></i> Impostazioni
              </router-link>
              <a
                class="dropdown-item"
                href="javascript:void(0)"
                @click="logout"
              >
                <i class="feather-power"></i> Logout
              </a>
            </div>
          </li>
          <!-- /User Menu -->
        </ul>
      </nav>
    </div>
  </header>
  <!-- /Header -->
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useAuth } from "@/composables/useAuth";

export default {
  data() {
    return {
      isFixed: false,
      isSidebarOpen: true,
    };
  },
  mounted() {
    // Attach scroll event listener
    window.addEventListener("scroll", this.onWindowScroll);
  },
  beforeUnmount() {
    // Clean up the scroll event listener
    window.removeEventListener("scroll", this.onWindowScroll);
  },
  methods: {
    onWindowScroll() {
      // Update isFixed based on the scroll position
      this.isFixed = window.pageYOffset > 50;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      document.documentElement.classList.toggle("menu-opened");
    },
    closeSidebar() {
      this.isSidebarOpen = false;
      document.documentElement.classList.remove("menu-opened");
    },
  },
  setup() {
    const route = useRoute();
    const { currentUser, isAuthenticated, logout, initUser } = useAuth();

    // Inizializza l'utente al caricamento
    initUser();

    return {
      route, // Pass the route object to the template
      currentUser,
      isAuthenticated,
      logout,
    };
  },
};
</script>
