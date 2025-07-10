<template>
  <!-- Add Currency -->
  <div class="modal fade" id="add_currency">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Add Currency</h5>
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
            <label class="form-label"
              >Currency Name <span class="text-danger">*</span></label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Exchange Rate <span class="text-danger">*</span></label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Code <span class="text-danger">*</span></label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Symbol <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
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
            <router-link
              to="/admin-template/finance-settings/currencies"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              >Create New</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Currency -->

  <!-- Edit Currency -->
  <div class="modal fade" id="edit_currencies">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Edit Currency</h5>
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
            <label class="form-label"
              >Currency Name <span class="text-danger">*</span></label
            >
            <input type="text" class="form-control" value="Dhirams" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Exchange Rate <span class="text-danger">*</span></label
            >
            <input type="text" class="form-control" value="3.67" />
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Code <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="AED" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Symbol <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" value="د.إ" />
              </div>
            </div>
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
              <router-link
                to="/admin-template/finance-settings/currencies"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                >Save Changes</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Currency -->

  <!-- Delete Currency  -->
  <div class="modal fade" id="delete_currency">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Currency</h4>
          <p class="mb-3">Are you sure you want to delete currency?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/admin-template/finance-settings/currencies"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Currency -->
</template>
