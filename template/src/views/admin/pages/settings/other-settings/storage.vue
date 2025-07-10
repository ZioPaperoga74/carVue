<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <!-- Page Wrapper -->
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
              <h5>Other Settings</h5>
            </div>
            <div class="card-body pb-0">
              <div>
                <h6 class="mb-3">Storage</h6>
                <div class="row">
                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="d-flex align-items-center">
                            <span class="avatar avatar-lg bg-gray-100 me-2 flex-shrink-0">
                              <img
                                src="@/assets/admin/img/icons/storage-icon-03.svg"
                                class="w-auto h-auto"
                                alt="Img"
                              />
                            </span>
                            <h6 class="fw-medium fs-14">Local Storage</h6>
                          </div>
                          <div class="d-flex align-items-center">
                            <div class="form-check form-check-md form-switch">
                              <input
                                class="form-check-input me-2"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="d-flex align-items-center">
                            <span class="avatar avatar-lg bg-gray-100 me-2 flex-shrink-0">
                              <img
                                src="@/assets/admin/img/icons/aws.svg"
                                class="w-auto h-auto"
                                alt="Img"
                              />
                            </span>
                            <h6 class="fw-medium fs-14">AWS</h6>
                          </div>
                          <div class="d-flex align-items-center">
                            <a
                              href="javascript:void(0);"
                              class="btn btn-icon btn-sm me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#aws_settings"
                              ><i class="ti ti-settings fs-20"></i
                            ></a>
                            <div class="form-check form-check-md form-switch">
                              <input
                                class="form-check-input me-2"
                                type="checkbox"
                                role="switch"
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
  <!-- /Page Wrapper -->
  <storage-modal></storage-modal>
</template>
