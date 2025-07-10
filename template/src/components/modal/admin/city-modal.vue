<template>
  <!-- Add city -->
  <div class="modal fade" id="add_city">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Add City</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <div class="modal-body pb-1">
          <div class="mb-3">
            <label class="form-label">City Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >State Name <span class="text-danger">*</span></label
            >
            <vue-select :options="UntiedCit" v-model="selected" placeholder="Select" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Country Name <span class="text-danger">*</span></label
            >
            <vue-select :options="UntiedCou" v-model="selectedOne" placeholder="Select" />
          </div>
        </div>
        <div class="modal-footer">
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link to="city" class="btn btn-primary">Create New</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add city -->

  <!-- Edit city -->
  <div class="modal fade" id="edit_city">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Edit City</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <div class="modal-body pb-1">
          <div class="mb-3">
            <label class="form-label">City Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" value="Los Angles" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >State Name <span class="text-danger">*</span></label
            >
            <vue-select
              :options="EditUntiedCit"
              v-model="selectedTwo"
              placeholder="California"
            />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Country Name <span class="text-danger">*</span></label
            >
            <vue-select
              :options="EditUntiedCou"
              v-model="selectedThree"
              placeholder="United States"
            />
          </div>
        </div>
        <div class="modal-footer">
          <div class="d-flex justify-content-between align-items-center w-100">
            <div class="form-check form-check-md form-switch me-2">
              <label class="form-check-label form-label mt-0 mb-0">
                <input
                  class="form-check-input form-label me-2"
                  type="checkbox"
                  role="switch"
                  checked
                />
                Status
              </label>
            </div>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <router-link to="city" class="btn btn-primary">Save Changes</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit city -->

  <!-- Delete Modal  -->
  <div class="modal fade" id="delete_city">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete City</h4>
          <p class="mb-3">Are you sure you want to delete City?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link to="city" class="btn btn-primary">Yes, Delete</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal-->
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      UntiedCit: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "New York", value: "New York" },
        { label: "Texas", value: "Texas" },
        { label: "Baveria", value: "Baveria" },
      ],
      UntiedCou: [
        { label: "Select", value: "Select" },
        { label: "United States", value: "United States" },
        { label: "Germany", value: "Germany" },
        { label: "Canada", value: "Canada" },
        { label: "Australia", value: "Australia" },
      ],
      EditUntiedCit: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "New York", value: "New York" },
        { label: "Texas", value: "Texas" },
        { label: "Baveria", value: "Baveria" },
      ],
      EditUntiedCou: [
        { label: "Select", value: "Select" },
        { label: "United States", value: "United States" },
        { label: "Germany", value: "Germany" },
        { label: "Canada", value: "Canada" },
        { label: "Australia", value: "Australia" },
      ],
    };
  },
};
</script>
