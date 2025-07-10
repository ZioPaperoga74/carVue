<template>
  <!-- Sidebar -->
  <div class="sidebar" id="sidebar">
    <!-- Logo -->
    <div class="sidebar-logo">
      <router-link
        to="/home/index-2"
        class="logo logo-normal"
        @click="reloadPage"
      >
        <img src="@/assets/admin/img/logo.svg" alt="Logo" />
      </router-link>
      <router-link to="/home/index-2" class="logo-small" @click="reloadPage">
        <img src="@/assets/admin/img/logo-small.svg" alt="Logo" />
      </router-link>
      <router-link to="/home/index-2" class="dark-logo" @click="reloadPage">
        <img src="@/assets/admin/img/logo-white.svg" alt="Logo" />
      </router-link>
    </div>
    <!-- /Logo -->
    <div class="sidebar-inner slimscroll">
      <simplebar id="scrollbar" class="h-100" ref="scrollbar">
        <div id="sidebar-menu" class="sidebar-menu">
          <div class="form-group">
            <!-- Search -->
            <div class="input-group input-group-flat d-inline-flex">
              <span class="input-icon-addon">
                <i class="ti ti-search"></i>
              </span>
              <input type="text" class="form-control" placeholder="Search" />
              <span class="group-text">
                <i class="ti ti-command"></i>
              </span>
            </div>
            <!-- /Search -->
          </div>
          <sidebar-menu></sidebar-menu>
        </div>
      </simplebar>
    </div>
  </div>
  <!-- /Sidebar -->
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

export default {
  components: {
    simplebar,
  },
  data() {
    return {};
  },
  methods: {
    reloadPage() {
      // Small delay to allow navigation then reload
      setTimeout(() => {
        window.location.reload();
      }, 100);
    },
  },
};
</script>
