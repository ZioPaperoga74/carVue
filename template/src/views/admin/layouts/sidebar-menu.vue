<template>
  <ul>
    <li v-for="item in side_bar_data" :key="item.tittle">
      <div class="menu-title">
        <span>{{ item.tittle }}</span>
      </div>
      <ul>
        <li v-for="menu in item.menu" :key="menu.menuValue">
          <template v-if="!menu.hasSubRoute && !menu.hasSubRouteTwo">
            <router-link
              v-if="menu.route"
              :to="menu.route"
              :class="{ active: isMenuActive(menu) }"
            >
              <i :class="menu.Icon" class="fs-16"></i>
              <span>{{ menu.menuValue }}</span>
            </router-link>
          </template>
          <template v-else-if="menu.hasSubRoute">
            <li class="submenu">
              <a
                href="javascript:void(0);"
                @click="expandSubMenus(menu)"
                :class="{
                  subdrop: menu.showSubRoute && !openMenuItem,
                  active: isActive(menu),
                }"
              >
                <i :class="menu.Icon" class="fs-16"></i>
                <span>{{ menu.menuValue }}</span>
                <span class="menu-arrow"></span>
              </a>
              <ul :class="menu.showSubRoute ? 'd-block' : 'd-none'">
                <li v-for="(subMenu, index) in menu.subMenus" :key="index">
                  <router-link v-if="subMenu.route" :to="subMenu.route">{{
                    subMenu.menuValue
                  }}</router-link>
                </li>
              </ul>
            </li>
          </template>
          <template v-else-if="menu.hasSubRouteTwo">
            <li class="submenu">
              <a
                href="javascript:void(0);"
                @click="OpenMenu(menu)"
                :class="{
                  subdrop: openMenuItem === menu || isActive(menu),
                  active: isActive(menu),
                }"
              >
                <i :class="menu.Icon" class="fs-16"></i>
                <span>{{ menu.menuValue }}</span>
                <span class="menu-arrow"></span>
              </a>
              <ul
                :class="{
                  'd-block': openMenuItem === menu,
                  'd-none': openMenuItem !== menu,
                }"
              >
                <li v-for="subMenus in menu.subMenus" :key="subMenus.menuValue">
                  <template v-if="!subMenus.customSubmenuTwo">
                    <router-link
                      v-if="subMenus.route"
                      :to="subMenus.route"
                      router-link-active="active"
                      >{{ subMenus.menuValue }}</router-link
                    >
                  </template>
                  <template v-else>
                    <li class="submenu submenu-two">
                      <a
                        href="javascript:void(0);"
                        @click="openSubmenuOne(subMenus)"
                        :class="{
                          subdrop:
                            openSubmenuOneItem === subMenus ||
                            isSubActive(subMenus),
                          active: isSubActive(subMenus),
                        }"
                      >
                        {{ subMenus.menuValue
                        }}<span class="menu-arrow inside-submenu"></span>
                      </a>
                      <ul
                        :class="{
                          'd-block': openSubmenuOneItem === subMenus,
                          'd-none': openSubmenuOneItem !== subMenus,
                        }"
                      >
                        <li
                          v-for="subMenuTwo in subMenus.subMenusTwo"
                          :key="subMenuTwo.menuValue"
                        >
                          <router-link
                            v-if="subMenuTwo.route"
                            :to="subMenuTwo.route"
                            >{{ subMenuTwo.menuValue }}</router-link
                          >
                        </li>
                      </ul>
                    </li>
                  </template>
                </li>
              </ul>
            </li>
          </template>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import side_bar_data from "@/assets/admin/json/sidebar-menu.json";

export default {
  data() {
    return {
      side_bar_data: side_bar_data,
      openMenuItem: null,
      openSubmenuOneItem: null,
      multilevel: [false, false, false],
    };
  },
  computed: {
    isMenuActive() {
      return (menu) => {
        return (
          this.$route.path === menu.route ||
          this.$route.path === menu.active_link ||
          this.$route.path === menu.active_link1 ||
          this.$route.path === menu.active_link2 ||
          this.$route.path === menu.active_link3 ||
          this.$route.path === menu.active_link4 ||
          this.$route.path === menu.active_link5
        );
      };
    },
    isActive() {
      return (menu) => {
        let result = this.$route.path.split("/").filter((part) => part);
        let base = result[0];
        return (
          base === menu.active_link ||
          base === menu.active_link1 ||
          base === menu.active_link2
        );
      };
    },
    isSubActive() {
      return (menu) => {
        let result = this.$route.path.split("/").filter((part) => part);
        let base = result[0];
        return base === menu.active_link;
      };
    },
  },
  methods: {
    expandSubMenus(menu) {
      this.side_bar_data.forEach((item) => {
        item.menu.forEach((subMenu) => {
          if (subMenu !== menu) {
            subMenu.showSubRoute = false;
          }
        });
      });
      menu.showSubRoute = !menu.showSubRoute;
    },
    OpenMenu(menu) {
      this.side_bar_data.forEach((item) => {
        item.menu.forEach((subMenu) => {
          subMenu.showSubRoute = false;
        });
      });
      this.openMenuItem = this.openMenuItem === menu ? null : menu;
    },
    openSubmenuOne(subMenus) {
      this.openSubmenuOneItem =
        this.openSubmenuOneItem === subMenus ? null : subMenus;
    },
  },
};
</script>
