<template>
  <!-- Header -->
  <div class="header">
    <div class="main-header">
      <div class="header-left">
        <router-link to="/admin-template/index" class="logo">
          <img src="@/assets/admin/img/logo.svg" alt="Logo" />
        </router-link>
        <router-link to="/admin-template/index" class="dark-logo">
          <img src="@/assets/admin/img/logo-white.svg" alt="Logo" />
        </router-link>
      </div>

      <a id="mobile_btn" class="mobile_btn" href="#sidebar">
        <span class="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>

      <div class="header-user">
        <div class="nav user-menu nav-list">
          <div class="me-auto d-flex align-items-center" id="header-search">
            <a
              id="toggle_btn"
              href="javascript:void(0);"
              @click="toggleSidebar"
            >
              <i class="ti ti-menu-deep"></i>
            </a>
            <!-- <div class="add-dropdown">
              <router-link
                to="/admin-template/bookings/add-reservation"
                class="btn btn-dark d-inline-flex align-items-center"
              >
                <i class="ti ti-plus me-1"></i>New Reservation
              </router-link>
            </div> -->
          </div>

          <div class="d-flex align-items-center header-icons">
            <div class="notification_item">
              <a
                href="javascript:void(0);"
                class="btn btn-menubar position-relative"
                id="notification_popup"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i class="ti ti-bell"></i>
                <span class="badge bg-violet rounded-pill"></span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-end notification-dropdown"
              >
                <div class="topnav-dropdown-header pb-0">
                  <h5 class="notification-title">Notifications</h5>
                  <ul class="nav nav-tabs nav-tabs-bottom">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#active-notification"
                        data-bs-toggle="tab"
                        >Active<span
                          class="badge badge-xs rounded-pill bg-danger ms-2"
                          >5</span
                        ></a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#unread-notification"
                        data-bs-toggle="tab"
                        >Unread</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#archieve-notification"
                        data-bs-toggle="tab"
                        >Archieve</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="noti-content">
                  <div class="tab-content">
                    <div
                      class="tab-pane fade show active"
                      id="active-notification"
                    >
                      <div class="notification-list">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-lg offline me-2 flex-shrink-0"
                          >
                            <img
                              src="@/assets/admin/img/profiles/avatar-02.jpg"
                              alt="Profile"
                              class="rounded-circle"
                            />
                          </a>
                          <div class="flex-grow-1">
                            <p class="mb-1">
                              <a href="javascript:void(0);"
                                ><span class="text-gray-9">Jerry Manas</span>
                                Added New Task Creating
                                <span class="text-gray-9">Login Pages</span></a
                              >
                            </p>
                            <span class="fs-12 noti-time"
                              ><i class="ti ti-clock me-1"></i>4 Min Ago</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="notification-list">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-lg offline me-2 flex-shrink-0"
                          >
                            <img
                              src="@/assets/admin/img/profiles/avatar-05.jpg"
                              alt="Profile"
                              class="rounded-circle"
                            />
                          </a>
                          <div class="flex-grow-1">
                            <p class="mb-1">
                              <a href="javascript:void(0);"
                                ><span class="text-gray-9">Robert Fox </span>
                                Was Marked as Late Login
                                <span class="text-danger">09:55 AM</span></a
                              >
                            </p>
                            <span class="fs-12 noti-time"
                              ><i class="ti ti-clock me-1"></i>5 Min Ago</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="notification-list">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-lg me-2 flex-shrink-0"
                          >
                            <img
                              src="@/assets/admin/img/profiles/avatar-04.jpg"
                              alt="Profile"
                              class="rounded-circle"
                            />
                          </a>
                          <div class="flex-grow-1">
                            <p class="mb-1">
                              <a href="javascript:void(0);"
                                ><span class="text-gray-9">Jenny Wilson </span>
                                Completed
                                <span class="text-gray-9"
                                  >Created New Component</span
                                ></a
                              >
                            </p>
                            <div class="d-flex align-items-center">
                              <span class="fs-12 noti-time"
                                ><i class="ti ti-clock me-1"></i>15 Min
                                Ago</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="notification-list">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-lg me-2 flex-shrink-0"
                          >
                            <img
                              src="@/assets/admin/img/profiles/avatar-02.jpg"
                              alt="Profile"
                              class="rounded-circle"
                            />
                          </a>
                          <div class="flex-grow-1">
                            <p class="mb-1">
                              <a href="javascript:void(0);"
                                ><span class="text-gray-9">Jacob Johnson </span>
                                Added Manual Time
                                <span class="text-gray-9">2 Hrs</span></a
                              >
                            </p>
                            <div class="d-flex align-items-center">
                              <span class="fs-12 noti-time"
                                ><i class="ti ti-clock me-1"></i>20 Min
                                Ago</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="notification-list">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-lg me-2 flex-shrink-0"
                          >
                            <img
                              src="@/assets/admin/img/profiles/avatar-01.jpg"
                              alt="Profile"
                              class="rounded-circle"
                            />
                          </a>
                          <div class="flex-grow-1">
                            <p class="mb-1">
                              <a href="javascript:void(0);"
                                ><span class="text-gray-9">Annete Black </span>
                                Completed
                                <span class="text-gray-9"
                                  >Improved Workflow React</span
                                ></a
                              >
                            </p>
                            <div class="d-flex align-items-center">
                              <span class="fs-12 noti-time"
                                ><i class="ti ti-clock me-1"></i>22 Min
                                Ago</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="unread-notification">
                      <div class="notification-list">
                        <a href="javascript:void(0);">
                          <div class="d-flex align-items-center">
                            <span
                              class="avatar avatar-lg offline me-2 flex-shrink-0"
                            >
                              <img
                                src="@/assets/admin/img/profiles/avatar-02.jpg"
                                alt="Profile"
                                class="rounded-circle"
                              />
                            </span>
                            <div class="flex-grow-1">
                              <p class="mb-1">
                                <span class="text-gray-9">Jerry Manas</span>
                                Added New Task Creating
                                <span class="text-gray-9">Login Pages</span>
                              </p>
                              <span class="fs-12 noti-time"
                                ><i class="ti ti-clock me-1"></i>4 Min Ago</span
                              >
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="notification-list">
                        <a href="javascript:void(0);">
                          <div class="d-flex align-items-center">
                            <span
                              class="avatar avatar-lg offline me-2 flex-shrink-0"
                            >
                              <img
                                src="@/assets/admin/img/profiles/avatar-05.jpg"
                                alt="Profile"
                                class="rounded-circle"
                              />
                            </span>
                            <div class="flex-grow-1">
                              <p class="mb-1">
                                <span class="text-gray-9">Robert Fox </span> Was
                                Marked as Late Login
                                <span class="text-danger">09:55 AM</span>
                              </p>
                              <span class="fs-12 noti-time"
                                ><i class="ti ti-clock me-1"></i>5 Min Ago</span
                              >
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="notification-list">
                        <a href="javascript:void(0);">
                          <div class="d-flex align-items-center">
                            <span
                              class="avatar avatar-lg offline me-2 flex-shrink-0"
                            >
                              <img
                                src="@/assets/admin/img/profiles/avatar-06.jpg"
                                alt="Profile"
                                class="rounded-circle"
                              />
                            </span>
                            <div class="flex-grow-1">
                              <p class="mb-1">
                                <span class="text-gray-9">Robert Fox </span>
                                Created New Component
                              </p>
                              <span class="fs-12 noti-time"
                                ><i class="ti ti-clock me-1"></i>5 Min Ago</span
                              >
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="archieve-notification">
                      <div
                        class="d-flex justify-content-center align-items-center p-3"
                      >
                        <div class="text-center">
                          <img
                            src="@/assets/admin/img/icons/nodata.svg"
                            class="mb-2"
                            alt="nodata"
                          />
                          <p class="text-gray-5">No Data Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between topnav-dropdown-footer"
                >
                  <div class="d-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      class="link-primary text-decoration-underline me-3"
                      >Mark all as Read</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="link-danger text-decoration-underline"
                      >Clear All</a
                    >
                  </div>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary btn-sm d-inline-flex align-items-center"
                    >View All Notifications<i
                      class="ti ti-chevron-right ms-1"
                    ></i
                  ></a>
                </div>
              </div>
            </div>
            <!-- <div>
              <router-link
                to="/admin-template/reports/income-report"
                class="btn btn-menubar"
              >
                <i class="ti ti-chart-bar"></i>
              </router-link>
            </div> -->
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-menubar"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i class="ti ti-grid-dots"></i>
              </a>
              <div class="dropdown-menu p-3">
                <ul>
                  <li>
                    <router-link
                      to="/admin-template/rentals/add-car"
                      class="dropdown-item d-inline-flex align-items-center"
                    >
                      <i class="ti ti-car me-2"></i>Car
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/admin-template/bookings/add-quotations"
                      class="dropdown-item d-inline-flex align-items-center"
                    >
                      <i class="ti ti-file-symlink me-2"></i>Quotation
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/admin-template/rentals/pricing"
                      class="dropdown-item d-inline-flex align-items-center"
                    >
                      <i class="ti ti-file-dollar me-2"></i>Seasonal Pricing
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/admin-template/rentals/extra-services"
                      class="dropdown-item d-inline-flex align-items-center"
                    >
                      <i class="ti ti-script-plus me-2"></i>Extra Service
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/admin-template/rentals/inspections"
                      class="dropdown-item d-inline-flex align-items-center"
                    >
                      <i class="ti ti-dice-6 me-2"></i>Inspection
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/admin-template/rentals/maintenance"
                      class="dropdown-item d-inline-flex align-items-center"
                    >
                      <i class="ti ti-color-filter me-2"></i>Maintenance
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="dropdown profile-dropdown">
              <a
                href="javascript:void(0);"
                class="d-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <span class="avatar avatar-sm">
                  <img
                    src="@/assets/admin/img/profiles/avatar-05.jpg"
                    alt="Img"
                    class="img-fluid rounded-circle"
                  />
                </span>
              </a>
              <div class="dropdown-menu">
                <div class="profileset d-flex align-items-center">
                  <span class="user-img me-2">
                    <img
                      src="@/assets/admin/img/profiles/avatar-05.jpg"
                      alt=""
                    />
                  </span>
                  <div>
                    <h6 class="fw-semibold mb-1">Andrew Simmonds</h6>
                    <p class="fs-13">andrew@example.com</p>
                  </div>
                </div>

                <!-- <router-link
                  class="dropdown-item d-flex align-items-center"
                  to="/admin-template/account-settings/profile-setting"
                >
                  <i class="ti ti-settings me-2"></i>Settings
                </router-link> -->
                <div class="dropdown-divider my-2"></div>
                <router-link
                  class="dropdown-item logout d-flex align-items-center justify-content-between"
                  to="/admin-template/"
                >
                  <span><i class="ti ti-logout me-2"></i>Logout Account</span>
                  <i class="ti ti-chevron-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="dropdown mobile-user-menu">
        <a
          href="javascript:void(0);"
          class="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa fa-ellipsis-v"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-end">
          <a class="dropdown-item" href="javascript:void(0);">My Profile</a>
          <router-link
            class="dropdown-item"
            to="/admin-template/account-settings/profile-setting"
            >Settings</router-link
          >
          <router-link class="dropdown-item" to="/admin-template/"
            >Logout</router-link
          >
        </div>
      </div>
      <!-- /Mobile Menu -->
    </div>
  </div>
  <!-- /Header -->
</template>

<script>
import { ref, onMounted, watch } from "vue";

export default {
  data() {
    return {};
  },
  mounted() {
    this.initMouseoverListener();
  },
  methods: {
    toggleSidebar() {
      const body = document.body;
      body.classList.toggle("mini-sidebar");
    },
    initMouseoverListener() {
      document.addEventListener("mouseover", this.handleMouseover);
    },
    handleMouseover(e) {
      e.stopPropagation();

      const body = document.body;
      const toggleBtn = document.getElementById("toggle_btn");

      if (body.classList.contains("mini-sidebar")) {
        const target = e.target.closest(".sidebar, .header-left");

        if (target) {
          body.classList.add("expand-menu");
        } else {
          body.classList.remove("expand-menu");
        }

        e.preventDefault();
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener("mouseover", this.handleMouseover);
  },
  setup() {
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      if (isDarkMode.value) {
        document.documentElement.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", null);
      } else {
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
      }
      isDarkMode.value = !isDarkMode.value;
    };

    const initializeDarkMode = () => {
      const darkMode = localStorage.getItem("dark-mode");
      isDarkMode.value = darkMode === "enabled";
    };

    onMounted(() => {
      initializeDarkMode();
    });

    watch(isDarkMode, (newVal) => {
      if (newVal) {
        document.documentElement.classList.add("dark-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
      }
    });

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
};
</script>
