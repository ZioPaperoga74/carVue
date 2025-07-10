<template>
  <div>
    <ul
      class="main-nav"
      :class="{ active: isActive }"
      :key="isUser + '-' + isAdmin"
    >
      <template v-for="item in filteredHeaderData">
        <li
          :key="item.tittle + '-' + isUser + '-' + isAdmin"
          :class="{ active: isActiveRoute(item.active_link) }"
          v-if="item.separateRoute === true && item.tittle === 'Home'"
        >
          <router-link :to="item.active_link">
            {{ item.tittle }}
          </router-link>
        </li>
        <li
          :key="item.tittle + '-submenu'"
          v-else-if="item.separateRoute === false"
          class="has-submenu"
          :class="{
            active:
              isActiveRoute(item.active_link) ||
              isActiveRoute(item.active_link1) ||
              isActiveRoute(item.active_link2) ||
              isActiveRoute(item.active_link3),
          }"
        >
          <a href="javascript:void(0);" @click="toggleTab(item)">
            {{ item.tittle }} <i class="fas fa-chevron-down"></i>
          </a>
          <ul class="submenu" :class="{ 'd-block': item.showAsTab }">
            <template v-for="menuItem in item.menu">
              <li
                :key="menuItem.menuValue"
                v-if="menuItem.hasSubRoute === false"
                :class="{ active: isActiveRoute(menuItem.active_link) }"
              >
                <router-link :to="{ path: menuItem.routes }">{{
                  menuItem.menuValue
                }}</router-link>
              </li>
              <li
                :key="menuItem.menuValue + '-submenu'"
                v-else-if="menuItem.hasSubRoute === true"
                class="has-submenu"
                :class="{ active: isActiveRoute(menuItem.active_link) }"
              >
                <a href="javascript:void(0);" @click="toggleTab(menuItem)">{{
                  menuItem.menuValue
                }}</a>
                <ul class="submenu" :class="{ 'd-block': menuItem.showAsTab }">
                  <template v-for="subMenu in menuItem.subMenus">
                    <li
                      :key="subMenu.menuValue"
                      v-if="subMenu.hasSubRoute === false"
                      :class="{ active: isActiveRoute(subMenu.active_link) }"
                    >
                      <router-link
                        :to="{ path: subMenu.routes }"
                        :target="subMenu.admin ? '_blank' : '_self'"
                      >
                        {{ subMenu.menuValue }}
                      </router-link>
                    </li>
                  </template>
                </ul>
              </li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import HeaderData from "@/assets/json/header-menu.json";
import { useAuth } from "@/composables/useAuth";

export default {
  data() {
    return {
      HeaderData: HeaderData,
      route_array: [],
      openDropdownIndex: null,
      isDropdownOpen: false,
      isDropdownOpen1: null,
      isSidebarOpen: false,
    };
  },
  computed: {
    // Filtra il menu in base all'autenticazione e ai ruoli
    filteredHeaderData() {
      return this.HeaderData.map((item) => {
        if (item.tittle === "Profilo") {
          if (!this.isAuthenticated) return null;

          // Filtra i sottomenu in base al ruolo
          const filteredMenu = item.menu.filter((menuItem) => {
            if (menuItem.menuValue === "User Dashboard") {
              return this.isUser;
            } else if (menuItem.menuValue === "Admin Dashboard") {
              return this.isAdmin;
            }
            return true;
          });

          if (filteredMenu.length === 0) return null;

          // Restituisci SEMPRE un nuovo oggetto, oppure null se da escludere
          return {
            ...item,
            menu: filteredMenu,
          };
        }
        return item;
      }).filter(Boolean); // <-- elimina i null
    },
  },
  methods: {
    openSubMenu() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.openDropdownIndex = null;
    },
    openSubMenu1(index) {
      this.isDropdownOpen1 = this.isDropdownOpen1 === index ? null : index;
    },
    toggleSubMenu(index) {
      this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
      this.isDropdownOpen = false;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
      document.documentElement.classList.remove("menu-opened");
    },
    toggleTab(item) {
      item.showAsTab = !item.showAsTab;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/menu/${imageName}`, import.meta.url).href;
    },
  },
  setup() {
    const route = useRoute();
    const isActive = ref(false);
    const { initUser, isAuthenticated, isUser, isAdmin, currentUser } =
      useAuth();

    // Inizializza l'utente al caricamento del componente
    initUser();

    const activateMenu = () => {
      isActive.value = true;
    };

    const deactivateMenu = () => {
      isActive.value = false;
    };

    // Function to check if current route matches the active link
    const isActiveRoute = (activeLink) => {
      return route.path === activeLink;
    };

    return {
      isActive,
      activateMenu,
      deactivateMenu,
      route,
      isActiveRoute,
      isAuthenticated,
      isUser,
      isAdmin,
      currentUser,
    };
  },
};
</script>
