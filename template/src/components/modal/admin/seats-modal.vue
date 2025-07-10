<template>
  <!-- Add Seat Type -->
  <div class="modal fade" id="add_seat_type">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Create Seat Type</h5>
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
            <label class="form-label">Seat Type <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
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
            <a href="javascript:void(0);" class="btn btn-primary">Create New</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Seat Type -->

  <!-- Edit Seat Type -->
  <div class="modal fade" id="edit_seat_type">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Edit Seat Type</h4>
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
            <label class="form-label">Seat Type <span class="text-danger">*</span></label>
            <input type="text" class="form-control" placeholder="4 Seater" />
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
              <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Seat Type -->

  <!-- Delete Seat Type -->
  <div class="modal fade" id="delete_seat_type">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Seat Type</h4>
          <p class="mb-3">Are you sure you want to seat type?</p>
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
  <!-- /Delete Seat Type -->
</template>
