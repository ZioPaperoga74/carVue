<template>
  <!-- Add FAQ -->
  <div class="modal fade" id="add_FAQ">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Add FAQ</h5>
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
          <div class="mb-3">
            <label class="form-label">Category <span class="text-danger">*</span></label>
            <vue-select :options="RentSel" v-model="selected" placeholdeer="Select" />
          </div>
          <div class="mb-3">
            <label class="form-label">Question <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-0">
            <label class="form-label">Answer <span class="text-danger">*</span></label>
            <textarea class="form-control"></textarea>
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
            <router-link to="faq" class="btn btn-primary" data-bs-dismiss="modal"
              >Create New</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add FAQ -->

  <!-- Edit FAQ -->
  <div class="modal fade" id="edit_FAQ">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Edit FAQ</h4>
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
          <div class="mb-3">
            <label class="form-label">Category <span class="text-danger">*</span></label>
            <vue-select
              :options="EditRentSel"
              v-model="selectedOne"
              placeholdeer="Rental Policies"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Question <span class="text-danger">*</span></label>
            <input
              type="text"
              class="form-control"
              value="What are the requirements to rent a car?"
            />
          </div>
          <div class="mb-0">
            <label class="form-label">Answer <span class="text-danger">*</span></label>
            <textarea class="form-control">
You must be at least 21 years old, have a valid driver's license, and a credit card for payment.</textarea
            >
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
              <router-link to="faq" class="btn btn-primary" data-bs-dismiss="modal"
                >Save Changes</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit FAQ -->

  <!-- Delete FAQ -->
  <div class="modal fade" id="delete_FAQ">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash fs-26"></i>
          </span>
          <h4 class="mb-1">Delete FAQ</h4>
          <p class="mb-3">Are you sure you want to delete FAQ?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a href="javascript:void(0);" class="btn btn-primary">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete FAQ -->
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      RentSel: [
        { label: "Select", value: "Select" },
        { label: "Rental Policies", value: "Rental Policies" },
        { label: "Payments", value: "Payments" },
        { label: "Insurance", value: "Insurance" },
        { label: "Booking", value: "Booking" },
      ],
      EditRentSel: [
        { label: "Select", value: "Select" },
        { label: "Rental Policies", value: "Rental Policies" },
        { label: "Payments", value: "Payments" },
        { label: "Insurance", value: "Insurance" },
        { label: "Booking", value: "Booking" },
        { label: "Requirements", value: "Requirements" },
      ],
    };
  },
};
</script>
