<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
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
            <form action="#">
              <div class="card-body pb-0">
                <h6 class="fw-bold mb-3">AI Configuration</h6>
                <div class="row align-items-center mb-3">
                  <div class="col-md-4">
                    <label class="form-label mb-0"
                      >API Key<span class="text-danger ms-1">*</span></label
                    >
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col-md-4">
                    <label class="form-label mb-0">Enable AI Chat Globally</label>
                  </div>
                  <div class="col-md-4">
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
                <div class="row align-items-center mb-3">
                  <div class="col-md-4">
                    <label class="form-label mb-0">Enable AI for Admin</label>
                  </div>
                  <div class="col-md-4">
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
                <div class="row align-items-center mb-3">
                  <div class="col-md-4">
                    <label class="form-label mb-0">Enable AI for Users</label>
                  </div>
                  <div class="col-md-4">
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
              <div class="card-footer">
                <div class="d-flex justify-content-end">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    >Cancel</a
                  >
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
              </div>
            </form>
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
</template>
