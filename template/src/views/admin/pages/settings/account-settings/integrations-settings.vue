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
              <h5>Account Settings</h5>
            </div>
            <div class="card-body pb-0">
              <div class="integration-content">
                <h6 class="mb-3">Integrations</h6>
                <div class="row">
                  <div class="col-xl-6 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                          <span class="me-2"
                            ><img
                              src="@/assets/admin/img/icons/email-icon.svg"
                              alt="image"
                              class="img-flui"
                          /></span>
                          <h6 class="fs-14 fw-medium">Gmail</h6>
                        </div>
                        <p>
                          Send booking confirmations, receipts & updates directly from
                          Gmail for professional communication.
                        </p>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center"
                            ><i class="ti ti-point-filled text-success me-1"></i
                            >Connected</span
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
                  <div class="col-xl-6 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                          <span class="me-2"
                            ><img
                              src="@/assets/admin/img/icons/calendar-icon.svg"
                              alt="image"
                              class="img-flui"
                          /></span>
                          <h6 class="fs-14 fw-medium">Google Calendar</h6>
                        </div>
                        <p>
                          Sync booking schedules & appointments with Google Calendar for
                          effortless management.
                        </p>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center"
                            ><i class="ti ti-point-filled text-success me-1"></i
                            >Connected</span
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
</template>
