<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <div class="page-wrapper">
    <div class="content me-4 pb-0">
      <!-- Breadcrumb -->
      <div
        class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3"
      >
        <div class="my-auto mb-2">
          <h2 class="mb-1">Settings</h2>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Settings</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <div class="row">
        <div class="col-xl-3">
          <!-- inner sidebar -->
          <adminsettings-sidebar></adminsettings-sidebar>
          <!-- /inner sidebar -->
        </div>
        <div class="col-xl-9">
          <div class="card">
            <div class="card-header">
              <h5>Website Settings</h5>
            </div>
            <div class="card-body pb-0">
              <div class="d-flex align-items-center justify-content-between">
                <h6 class="mb-3">Plugin Managers</h6>
                <a
                  href="javascript:void(0);"
                  class="btn btn-primary d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add_plugin"
                  ><i class="ti ti-plus me-1"></i>Add New Plugin</a
                >
              </div>
              <div class="plugin-content">
                <div class="row">
                  <div class="col-xl-6">
                    <div class="card">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <div class="d-flex align-items-center">
                            <div class="plugin-icons me-2">
                              <span
                                ><img
                                  src="@/assets/admin/img/icons/paypal-icons.svg"
                                  alt="image"
                                  class="img-fluid"
                              /></span>
                            </div>
                            <h6 class="fw-normal fs-13">Google</h6>
                          </div>
                          <span
                            class="badge badge-soft-purple d-inline-flex align-items-center"
                            >Version : 8.78.1</span
                          >
                        </div>
                        <p class="fs-13">
                          PayPal is a global digital payments platform that enables
                          secure, fast online transactions.
                        </p>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex justify-content-between align-items-center">
                          <span class="fs-14 text-gray-9 d-flex align-items-center"
                            ><i class="ti ti-trash me-1"></i>Delete</span
                          >
                          <div class="form-check form-check-md form-switch me-2">
                            <input
                              class="form-check-input form-label me-2"
                              type="checkbox"
                              role="switch"
                              checked
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="card">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <div class="d-flex align-items-center">
                            <div class="plugin-icons me-2">
                              <span
                                ><img
                                  src="@/assets/admin/img/icons/google-analytics-icon.svg"
                                  alt="image"
                                  class="img-fluid"
                              /></span>
                            </div>
                            <h6 class="fw-normal fs-13">Google Analytics</h6>
                          </div>
                          <span
                            class="badge badge-soft-purple d-inline-flex align-items-center"
                            >Version : GA4</span
                          >
                        </div>
                        <p class="fs-13">
                          Google Analytics tracks and analyzes website traffic and user
                          interactions to provide insights.
                        </p>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex justify-content-between align-items-center">
                          <span class="fs-14 text-gray-9 d-flex align-items-center"
                            ><i class="ti ti-trash me-1"></i>Delete</span
                          >
                          <div class="form-check form-check-md form-switch me-2">
                            <input
                              class="form-check-input form-label me-2"
                              type="checkbox"
                              role="switch"
                              checked
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer d-sm-flex align-items-center justify-content-between bg-white p-3">
      <p class="mb-0">
        <a href="javascript:void(0);">Privacy Policy</a>
        <a href="javascript:void(0);" class="ms-4">Terms of Use</a>
      </p>
      <p>
        &copy; 2025 Dreamsrent, Made with <span class="text-danger">❤</span> by
        <a href="javascript:void(0);" class="text-secondary">Dreams</a>
      </p>
    </div>
  </div>
  <plugin-modal></plugin-modal>
</template>
