<template>
  <!-- Add bank -->
  <div class="modal fade" id="add_bank">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Add Bank Account</h5>
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
            <label class="form-label">Bank Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Account Number <span class="text-danger">*</span></label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Account Holder Name <span class="text-danger">*</span></label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label">Branch <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label">IFSC <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                Mark as Default
              </label>
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
              to="/admin-template/finance-settings/bank-accounts"
              class="btn btn-primary"
              >Create New</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add bank -->
  <!-- Edit bank -->
  <div class="modal fade" id="edit_bank">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Edit Bank Account</h5>
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
            <label class="form-label">Bank Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" value="HDFC" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Account Number <span class="text-danger">*</span></label
            >
            <input type="text" class="form-control" value="**** **** 1832" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Account Holder Name <span class="text-danger">*</span></label
            >
            <input type="text" class="form-control" value="Andrew Simons" />
          </div>
          <div class="mb-3">
            <label class="form-label">Branch <span class="text-danger">*</span></label>
            <input type="text" class="form-control" value="Bringham" />
          </div>
          <div class="mb-3">
            <label class="form-label">IFSC <span class="text-danger">*</span></label>
            <input type="text" class="form-control" value="124547" />
          </div>
          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked1"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked1">
                Mark as Default
              </label>
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
                to="/admin-template/finance-settings/bank-accounts"
                class="btn btn-primary"
                >Save Changes</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit bank -->

  <!-- Delete -->
  <div class="modal fade" id="delete_bank">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Bank Account</h4>
          <p class="mb-3">Are you sure you want to delete bank account?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/admin-template/finance-settings/bank-accounts"
              class="btn btn-primary"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete -->
</template>
