<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <div class="page-wrapper">
    <div class="content me-0 pb-0">
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
          <div class="card profile-setting-section">
            <div class="card-header">
              <h5 class="fw-bold">Account Settings</h5>
            </div>
            <form action="#">
              <div class="card-body pb-1">
                <h6 class="fw-bold mb-3">Basic Information</h6>
                <div class="border-bottom mb-3">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label class="form-label">Profile Photo</label>
                        <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                          <div
                            class="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 text-dark frames"
                          >
                            <img
                              src="@/assets/admin/img/customer/customer-01.jpg"
                              class="img-fluid"
                              alt="brands"
                            />
                            <a
                              href="javascript:void(0);"
                              class="upload-img-trash btn btn-sm rounded-circle"
                            >
                              <i class="ti ti-trash fs-12"></i>
                            </a>
                          </div>
                          <div class="profile-upload">
                            <div class="profile-uploader d-flex align-items-center">
                              <div class="drag-upload-btn btn btn-md btn-dark">
                                <i class="ti ti-photo-up fs-14"></i>
                                Change
                                <input
                                  type="file"
                                  class="form-control image-sign"
                                  multiple
                                />
                              </div>
                            </div>
                            <div class="mt-2">
                              <p class="fs-14">Recommended size is 500px x 500px</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >First Name<span class="text-danger ms-1">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Last Name<span class="text-danger ms-1">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Email Address<span class="text-danger ms-1">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Phone Number<span class="text-danger ms-1">*</span></label
                        >
                        <input type="text" class="form-control" id="phone" name="name" />
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="fw-bold mb-3">Address Information</h6>
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">Address Line</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Country</label>
                      <vue-select :options="CanSel" v-model="selected" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">State</label>
                      <vue-select
                        :options="StatNewYo"
                        v-model="selectedOne"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">City</label>
                      <vue-select :options="Ange" v-model="selectedTwo" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Postal Code</label>
                      <input type="text" class="form-control" />
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
<script>
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      CanSel: [
        {label: "Select", value: "Select"}, 
        {label: "USA", value: "USA"}, 
        {label: "Canada", value: "Canada"}, 
        {label: "UK", value: "Canada"}, 
      ],
      StatNewYo: [
        {label: "Select", value: "Select"}, 
        {label: "California", value: "California"}, 
        {label: "New York", value: "New York"}, 
        {label: "Florida", value: "Florida"}, 
      ],
      Ange: [
        {label: "Select", value: "Select"}, 
        {label: "Los Angeles", value: "Los Angeles"}, 
        {label: "San Diego", value: "San Diego"}, 
        {label: "Fresno", value: "Fresno"}, 
      ],
    };
  },
};
</script>
