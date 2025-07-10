<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content me-0 pb-0 me-lg-4">
      <!-- Breadcrumb -->
      <div
        class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3"
      >
        <div class="my-auto mb-2">
          <h4 class="mb-1">Settings</h4>
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

      <!-- Settings Prefix -->
      <div class="row">
        <div class="col-lg-3">
          <!-- inner sidebar -->
          <adminsettings-sidebar></adminsettings-sidebar>
          <!-- /inner sidebar -->
        </div>
        <div class="col-lg-9">
          <div class="card">
            <div class="card-header">
              <h5 class="fw-bold">Website Settings</h5>
            </div>
            <div class="card-body pb-0">
              <h6 class="fw-bold mb-3">Login & Register</h6>
              <div class="row">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3"
                      >
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="p-2 bg-light rounded-circle d-flex align-items-center justify-content-center me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#google_login"
                            ><img src="@/assets/admin/img/brands/google.svg" alt="img"
                          /></a>
                          <a
                            href="javascript:void(0);"
                            class="fs-13"
                            data-bs-toggle="modal"
                            data-bs-target="#google_login"
                            >Google</a
                          >
                        </div>
                        <span
                          class="badge badge-dark-transparent d-inline-flex align-items-center fs-12"
                          ><i class="ti ti-point-filled text-success"></i>Connected</span
                        >
                      </div>
                      <p class="fs-14">
                        Streamline your access using your Google account for secure and
                        efficient login.
                      </p>
                    </div>
                    <div class="card-footer py-2">
                      <div class="d-flex align-items-center justify-content-between">
                        <a
                          href="javascript:void(0);"
                          class="d-flex align-items-center fw-medium"
                          data-bs-toggle="modal"
                          data-bs-target="#google_login"
                          ><i class="ti ti-settings me-1"></i>Configure</a
                        >
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3"
                      >
                        <div class="d-flex align-items-center">
                          <span
                            class="p-2 bg-light rounded-circle d-flex align-items-center justify-content-center me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#facebook_login"
                            ><img src="@/assets/admin/img/brands/facebook.svg" alt="img"
                          /></span>
                          <a
                            href="javascript:void(0);"
                            class="fs-13"
                            data-bs-toggle="modal"
                            data-bs-target="#facebook_login"
                            >Facebook</a
                          >
                        </div>
                        <span
                          class="badge badge-dark-transparent d-inline-flex align-items-center fs-12"
                          ><i class="ti ti-point-filled text-success"></i>Connected</span
                        >
                      </div>
                      <p class="fs-14">
                        Quickly log in or register using your Facebook account, making it
                        easy to manage operations.
                      </p>
                    </div>
                    <div class="card-footer py-2">
                      <div class="d-flex align-items-center justify-content-between">
                        <a
                          href="javascript:void(0);"
                          class="d-flex align-items-center fw-medium"
                          data-bs-toggle="modal"
                          data-bs-target="#facebook_login"
                          ><i class="ti ti-settings me-1"></i>Configure</a
                        >
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
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
      <!-- /Settings Prefix -->
    </div>
    <!-- Footer-->
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
    <!-- /Footer-->
  </div>
  <!-- /Page Wrapper -->
  <login-modal></login-modal>
</template>
