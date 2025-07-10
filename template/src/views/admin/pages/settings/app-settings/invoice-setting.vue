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
              <h5 class="fw-bold">App Settings</h5>
            </div>
            <form action="#">
              <div class="card-body">
                <h6 class="fw-bold mb-3">Invoice Settings</h6>
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Invoice Logo <span class="text-danger">*</span></label
                      >
                      <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                        <div
                          class="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames"
                        >
                          <i class="ti ti-photo-up text-gray-4 fs-24"></i>
                        </div>
                        <div class="profile-upload">
                          <div class="profile-uploader d-flex align-items-center">
                            <div class="drag-upload-btn btn btn-md btn-dark">
                              <i class="ti ti-photo-up fs-14"></i>
                              Upload
                              <input
                                type="file"
                                class="form-control image-sign"
                                multiple
                              />
                            </div>
                          </div>
                          <div class="mt-2">
                            <p class="fs-14">Upload Image size 180*180, within 5MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-md-4 col-sm-12">
                    <label class="form-label"
                      >Invoice Prefix <span class="text-danger">*</span></label
                    >
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <div class="mb-3">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-md-4 col-sm-12">
                    <label class="form-label"
                      >Invoice Due <span class="text-danger">*</span></label
                    >
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <div class="mb-3 d-flex align-items-center">
                      <vue-select
                        :options="InvoiSet"
                        v-model="selected"
                        placeholder="Select"
                      />

                      <span class="ms-3 text-dark">Days</span>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-md-4 col-sm-12">
                    <label class="form-label"
                      >Invoice Round Off <span class="text-danger">*</span></label
                    >
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <div class="mb-3 d-flex align-items-center">
                      <vue-select
                        :options="InvoiOff"
                        v-model="selectedOne"
                        placeholder="Select"
                      />

                      <div class="ms-3">
                        <div class="form-check form-check-md form-switch">
                          <label class="form-check-label form-label m-0">
                            <input
                              class="form-check-input form-label"
                              type="checkbox"
                              role="switch"
                              checked
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-md-4 col-sm-12">
                    <label class="form-label"
                      >Show Company Details <span class="text-danger">*</span></label
                    >
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <div class="form-check form-check-md form-switch">
                      <label class="form-check-label form-label m-0">
                        <input
                          class="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          checked
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-md-4 col-sm-12">
                    <label class="form-label"
                      >Invoice Terms <span class="text-danger">*</span></label
                    >
                  </div>
                  <div class="col-md-8 col-sm-12">
                    <div class="editor mb-1"></div>
                    <p>Maximum 60 Words</p>
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
<script>
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      InvoiSet: [
        {label: "Select", value: "Select"}, 
        {label: "5", value: "5"}, 
        {label: "10", value: "10"}
      ],
      InvoiOff: [
        {label: "Select", value: "Select"}, 
        {label: "5", value: "5"},
        {label: "10", value: "10"}
      ],
    };
  },
};
</script>
