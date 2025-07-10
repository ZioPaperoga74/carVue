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
              <div class="card-body pb-0">
                <div class="localization-content mb-3">
                  <div>
                    <h6 class="mb-3">Localization</h6>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Time Zone <span class="text-danger">*</span>
                      </p>
                      <div>
                        <vue-select
                          :options="LocalSel"
                          v-model="selected"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Start Week On <span class="text-danger">*</span>
                      </p>
                      <div>
                        <vue-select
                          :options="LocalSelOne"
                          v-model="selectedOne"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Date Format <span class="text-danger">*</span>
                      </p>
                      <div>
                        <vue-select
                          :options="LocalSelTwo"
                          v-model="selectedTwo"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Time Format <span class="text-danger">*</span>
                      </p>
                      <div>
                        <vue-select
                          :options="LocalSelThree"
                          v-model="selectedThree"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Default Language <span class="text-danger">*</span>
                      </p>
                      <div>
                        <vue-select
                          :options="LocalSelFour"
                          v-model="selectedFour"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Language Switcher <span class="text-danger">*</span>
                      </p>
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
                <div class="localization-content border-0">
                  <div>
                    <h6 class="mb-3">Currency Information</h6>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Currency <span class="text-danger">*</span>
                      </p>
                      <div>
                        <vue-select
                          :options="LocalSelFive"
                          v-model="selectedFive"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Currency Symbol <span class="text-danger">*</span>
                      </p>
                      <div>
                        <vue-select
                          :options="LocalSelSix"
                          v-model="selectedSix"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Currency Position <span class="text-danger">*</span>
                      </p>
                      <div>
                        <vue-select
                          :options="LocalSelSeven"
                          v-model="selectedSeven"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Decimal Seperator <span class="text-danger">*</span>
                      </p>
                      <div>
                        <vue-select
                          :options="LocalSelEight"
                          v-model="selectedEight"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="localization-list">
                      <p class="text-gray-9 fw-medium">
                        Thousand Seperator <span class="text-danger">*</span>
                      </p>
                      <div>
                        <vue-select
                          :options="LocalSelEightOne"
                          v-model="selectedNine"
                          placeholder="Select"
                        />
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
      selectedFour: [],
      selectedFive: [],
      selectedSix: [],
      selectedSeven: [],
      selectedEight: [],
      selectedNine: [],
      LocalSel: [
        {label: "Select", value: "Select"},
        {label: "(+5:30) GMT", value: "(+5:30) GMT"}, 
        {label: "(+11:30) INR", value: "(+11:30) INR"}
      ],
      LocalSelOne: [
        {label: "Select", value: "Select"}, 
        {label: "Monday", value: "Monday"}, 
        {label: "Tuesday", value: "Tuesday"}, 
        {label: "Wednesday", value: "Wednesday"}, 
        {label: "Thursday", value: "Thursday"}, 
        {label: "Friday", value: "Friday"}, 
      ],
      LocalSelTwo: [
        {label: "Select", value: "Select"}, 
        {label: "01 Jan 2025", value: "01 Jan 2025"}, 
        {label: "Jan 02 2025", value: "Jan 02 2025"}, 
        {label: "2025 Jan 02", value: "2025 Jan 02"}, 
        {label: "2025 02 Jan", value: "2025 02 Jan"}, 
      ],
      LocalSelThree: [
        {label: "Select", value: "Select"}, 
        {label: "12 hrs", value: "12 hrs"}, 
        {label: "24 hrs", value: "24 hrs"}
      ],
      LocalSelFour: [
        {label: "Select", value: "Select"}, 
        {label: "English", value: "English"}, 
        {label: "French", value: "French"}, 
        {label: "Gremany", value: "Gremany"}, 
      ],
      LocalSelFive: [
        {label: "Select", value: "Select"}, 
        {label: "USD", value: "USD"}, 
        {label: "EURO", value: "EURO"}
      ],
      LocalSelSix: [
        {label: "Select", value: "Select"}, 
        {label: "$", value: "$"}, 
        {label: "€", value: "€"}
      ],
      LocalSelSeven: [
        {label: "Select", value: "Select"}, 
        {label: "100$", value: "100$"}, 
        {label: "$100", value: "$100"}
      ],
      LocalSelEight: [
        {label: "Select", value: "Select"}, 
        {label: ".", value: "."}, 
        {label: ",", value: ","}
      ],
      LocalSelEightOne: [
        {label: "Select", value: "Select"}, 
        {label: ".", value: "."}, 
        {label: ",", value: ","}
      ],
    };
  },
};
</script>
