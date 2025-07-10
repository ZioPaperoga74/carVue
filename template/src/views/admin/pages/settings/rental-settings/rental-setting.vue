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
              <h5>Rental Settings</h5>
            </div>
            <form action="#">
              <div class="card-body pb-0">
                <div class="localization-content mb-3">
                  <div>
                    <h6 class="mb-3">Reservation</h6>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">Booking</p>
                      <div>
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
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">Enquiries</p>
                      <div>
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
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">Reservation</p>
                      <div>
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
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Minimum Advance Reservation Time
                      </p>
                      <div>
                        <vue-select
                          :options="MinmumSel"
                          v-model="selected"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Maximum Advance Reservation Time
                      </p>
                      <div>
                        <vue-select
                          :options="MinmumSelOne"
                          v-model="selectedOne"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">Cancellation Buffer Time</p>
                      <div>
                        <vue-select
                          :options="MinmumSelTwo"
                          v-model="selectedTwo"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">Reschedule Buffer Time</p>
                      <div>
                        <vue-select
                          :options="MinmumSelThree"
                          v-model="selectedThree"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="localization-content border-0">
                  <div>
                    <h6 class="mb-3">Vehicles</h6>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">Seasonal Pricing</p>
                      <div>
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
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">Faq</p>
                      <div>
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
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">Damages</p>
                      <div>
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
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">Extra Service</p>
                      <div>
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
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">Pricing</p>
                      <div>
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
      MinmumSel: [
        {label: "Select", value: "Select"}, 
        {label: "1 Day", value: "1 Day"}, 
        {label: "1 Week", value: "1 Week"}, 
        {label: "1 Month", value: "1 Month"}
      ],
      MinmumSelOne: [        
        {label: "Select", value: "Select"}, 
        {label: "1 Day", value: "1 Day"}, 
        {label: "1 Week", value: "1 Week"}, 
        {label: "1 Month", value: "1 Month"}
      ],
      MinmumSelTwo: [
        {label: "Select", value: "Select"}, 
        {label: "2 Day", value: "2 Day"}, 
        {label: "2 Week", value: "2 Week"}, 
        {label: "2 Month", value: "2 Month"}
      ],
      MinmumSelThree: [
        {label: "Select", value: "Select"}, 
        {label: "2 Day", value: "2 Day"}, 
        {label: "2 Week", value: "2 Week"}, 
        {label: "2 Month", value: "2 Month"}
      ],
    };
  },
};
</script>
