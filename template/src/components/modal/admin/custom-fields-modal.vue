<template>
  <div class="modal fade" id="add_field">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Create Custom Field</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label"
                  >Module <span class="text-danger">*</span></label
                >
                <vue-select :options="DriverSel" v-model="selected" placeholder="Select" />
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Input Type <span class="text-danger">*</span></label
                >
                <vue-select :options="InpuType" v-model="selectedOne" placeholder="Select" />
              </div>
              <div class="mb-3">
                <label class="form-label">Label <span class="text-danger">*</span></label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Default Value <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
              <div class="d-flex align-items-center gap-2">
                <p class="text-gray-9 me-2 mb-0">Required</p>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault1"> Yes </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2"> No </label>
                </div>
              </div>
            </div>
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
            <button type="submit" class="btn btn-primary">Create New</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="edit_field">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Edit Custom Field</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label"
                  >Module <span class="text-danger">*</span></label
                >
                <vue-select
                  :options="EditDriverSel"
                  v-model="selectedTwo"
                  placeholder="Drivers"
                />
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Input Type <span class="text-danger">*</span></label
                >
                <vue-select
                  :options="EditInpuType"
                  v-model="selectedThree"
                  placeholder="Number"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Label <span class="text-danger">*</span></label>
                <input type="text" value="Total Rides" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Default Value <span class="text-danger">*</span></label
                >
                <input type="text" value="0" class="form-control" />
              </div>
              <div class="d-flex align-items-center gap-2">
                <p class="text-gray-9 me-2 mb-0">Required</p>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault3"> Yes </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                  />
                  <label class="form-check-label" for="flexRadioDefault4"> No </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-between">
          <div class="form-check form-check-md form-switch me-2">
            <label class="form-check-label form-label mt-0 mb-0">
              <input
                class="form-check-input form-label me-2"
                type="checkbox"
                role="switch"
                checked=""
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
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Delete  -->
  <div class="modal fade" id="delete_field">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <form>
            <span
              class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
            >
              <i class="ti ti-trash-x fs-26"></i>
            </span>
            <h4 class="mb-1">Delete Custom Fields</h4>
            <p class="mb-3">Are you sure you want to delete custom fields?</p>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="button" data-bs-dismiss="modal" class="btn btn-primary">
                Yes, Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete -->
</template>
<script>
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: "Drivers",
      selectedThree: "Number",
      DriverSel: [
        {label: "Select", value: "Select"}, 
        {label: "Drivers", value: "Drivers"}, 
        {label: "Maintenance", value: "Maintenance"}, 
      ],
      InpuType: [
        {label: "Select", value: "Select"}, 
        {label: "Number", value: "Number"}, 
      ],
      EditDriverSel: [
        {label: "Select", value: "Select"}, 
        {label: "Drivers", value: "Drivers"}, 
        {label: "Maintenance", value: "Maintenance"},
      ],
      EditInpuType: [
        {label: "Select", value: "Select"}, 
        {label: "Number", value: "Number"}, 
      ],
    };
  },
};
</script>
