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
              <h5>System Settings</h5>
            </div>
            <form action="#">
              <div class="card-body">
                <div class="sms-gateway">
                  <h6 class="mb-3">GDPR Cookies</h6>
                  <div class="row mb-3 align-items-center">
                    <div class="col-xl-4 d-flex">
                      <div class="d-flex align-items-center justify-content-center">
                        <h6 class="fw-medium fs-14">
                          Cookies Content Text <span class="text-danger">*</span>
                        </h6>
                      </div>
                    </div>
                    <div class="col-xl-8">
                      <div>
                        <div class="editor"></div>
                        <p class="mt-2">Maximum 60 Words</p>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3 align-items-center">
                    <div class="col-xl-4 d-flex">
                      <div class="d-flex align-items-center justify-content-center">
                        <h6 class="fw-medium fs-14">
                          Cookies Position <span class="text-danger">*</span>
                        </h6>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div>
                        <vue-select
                          :options="GdprCookies"
                          v-model="selected"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3 align-items-center">
                    <div class="col-xl-4 d-flex">
                      <div class="d-flex align-items-center justify-content-center">
                        <h6 class="fw-medium fs-14">
                          Agree Button Text <span class="text-danger">*</span>
                        </h6>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3 align-items-center">
                    <div class="col-xl-4 d-flex">
                      <div class="d-flex align-items-center justify-content-center">
                        <h6 class="fw-medium fs-14">
                          Decline Button Text <span class="text-danger">*</span>
                        </h6>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3 align-items-center">
                    <div class="col-xl-4 d-flex">
                      <div class="d-flex align-items-center justify-content-center">
                        <h6 class="fw-medium fs-14">
                          Show Decline Button <span class="text-danger">*</span>
                        </h6>
                      </div>
                    </div>
                    <div class="col-xl-6">
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
                  <div class="row align-items-center">
                    <div class="col-xl-4 d-flex">
                      <div class="d-flex align-items-center justify-content-center">
                        <h6 class="fw-medium fs-14">
                          Links for Cookies Page <span class="text-danger">*</span>
                        </h6>
                      </div>
                    </div>
                    <div class="col-xl-8">
                      <div>
                        <input type="text" class="form-control" />
                      </div>
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
<script>
export default {
  data() {
    return {
      selected: [],
      GdprCookies: [
        {label: "Select", value: "Select"}, 
        {label: "Right", value: "Right"}, 
        {label: "Left", value: "Left"}
      ],
    };
  },
};
</script>
