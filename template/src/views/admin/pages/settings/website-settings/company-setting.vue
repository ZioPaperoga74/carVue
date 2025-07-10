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
            <form action="#">
              <div class="card-body">
                <div class="localization-content mb-3">
                  <div>
                    <h6 class="mb-3">Company Settings</h6>
                    <div class="mb-3">
                      <p class="fw-medium mb-0 text-gray-9 mb-1">Profile Photo</p>
                      <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                        <div
                          class="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 text-dark frames"
                        >
                          <img
                            src="@/assets/admin/img/settings/company-logo-01.jpg"
                            class="rounded-circle"
                            alt="img"
                          />
                          <span class="avatar-badge avatar-badge-end bg-white p-1"
                            ><i class="ti ti-trash text-danger fs-12"></i
                          ></span>
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
                </div>
                <div class="localization-content mb-3">
                  <h6 class="mb-3">Basic Information</h6>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Organization Name <span class="text-danger">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Owner Name <span class="text-danger">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Email Address <span class="text-danger">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Phone Number <span class="text-danger">*</span></label
                        >
                        <input type="text" id="phone" name="phone" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Industry <span class="text-danger">*</span></label
                        >
                        <vue-select :options="CarRet" v-model="selected" placeholder="Select" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Team Size <span class="text-danger">*</span></label
                        >
                        <vue-select
                          :options="TeamSiz"
                          v-model="selectedOne"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div class="localization-content mb-3">
                  <h6 class="mb-3">Address Information</h6>
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
                        <vue-select
                          :options="GermSel"
                          v-model="selectedTwo"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">State</label>
                        <vue-select
                          :options="StatSel"
                          v-model="selectedThree"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">City</label>
                        <vue-select
                          :options="CitySel"
                          v-model="selectedFour"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Postal Code</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div class="mb-0">
                  <h6 class="mb-1">Transfer Ownership</h6>
                  <p class="mb-2">
                    As the current owner of this workspace, you must select an existing
                    admin to transfer ownership.
                  </p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="d-flex align-items-end justify-content-between">
                        <div class="w-100 me-3">
                          <label class="form-label">Owner</label>
                          <vue-select
                            :options="DavidSel"
                            v-model="selectedFive"
                            placeholder="Select"
                          />
                        </div>
                        <a href="javascript:void(0);" class="btn btn-primary mb-1"
                          >Update</a
                        >
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="d-flex align-items-center justify-content-end">
                  <a href="javascript:void(0);" class="btn btn-light me-2">Cancel</a>
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
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      selectedFive: [],
      DavidSel: [
        {label: "Select", value: "Select"},
        {label: "Adrian Saurez", value: "Adrian Saurez"},
        {label: "Jessica David", value: "Jessica David"},
        {label: "Hendrita Margerate", value: "Hendrita Margerate"},
        {label: "Silvaa Andrew", value: "Silvaa Andrew"},
      ],
      StatSel: [
        {label: "Select", value: "Select"}, 
        {label: "California", value: "California"}, 
        {label: "New York", value: "New York"}, 
        {label: "Texas", value: "Texas"}
      ],
      CitySel: [
        {label: "Select", value: "Select"}, 
        {label: "Los Angeles", value: "Los Angeles"}, 
        {label: "New York City", value: "New York City"}, 
        {label: "Houston", value: "Houston"}
      ],
      GermSel: [
        {label: "Select", value: "Select"}, 
        {label: "United States", value: "United States"}, 
        {label: "Canada", value: "Canada"}, 
        {label: "Germany", value: "Germany"}
      ],
      TeamSiz: [
        {label: "Select", value: "Select"}, 
        {label: "1-10", value: "1-10"}, 
        {label: "11-15", value: "11-15"}, 
        {label: "50+", value: "50+"}
      ],
      CarRet: [
        {label: "Select", value: "Select"},
        {label: "Peer-to-Peer Car Renta", value: "Peer-to-Peer Car Renta"},
        {label: "Electric and Hybrid Vehicles", value: "Electric and Hybrid Vehicles"},
        {label: "Subscription Services", value: "Subscription Services"},
      ],
    };
  },
};
</script>
