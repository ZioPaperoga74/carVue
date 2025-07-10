<template>
  <!-- Add Tax Rate -->
  <div class="modal fade" id="add_tax_rate">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Add Tax Rate</h5>
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
            <label class="form-label">Tax Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Tax Rate (%) <span class="text-danger">*</span></label
            >
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
            <router-link
              to="/admin-template/finance-settings/tax-rates"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              >Create New</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Tax Rate -->

  <!-- Edit Tax Rate -->
  <div class="modal fade" id="edit_tax_rate">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Edit Tax Rate</h5>
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
            <label class="form-label">Tax Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" value="VAT" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Tax Rate (%) <span class="text-danger">*</span></label
            >
            <input type="text" class="form-control" value="10" />
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
                to="/admin-template/finance-settings/tax-rates"
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
  <!-- /Edit Tax Rate -->

  <!-- Delete Rate  -->
  <div class="modal fade" id="delete_tax_rate">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Tax Rate</h4>
          <p class="mb-3">Are you sure you want to delete tax rate?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/admin-template/finance-settings/tax-rates"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Rate -->

  <!-- Add Tax Group -->
  <div class="modal fade" id="add_tax_group">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Add Tax Group</h5>
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
            <label class="form-label">Tax Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-2">
            <label class="form-label">Sub Taxes <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <p class="fs-13">Enter value separated by comma</p>
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
              to="/admin-template/finance-settings/tax-rates"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              >Create New</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Tax Group -->

  <!-- Edit Tax Group -->
  <div class="modal fade" id="edit_tax_group">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Edit Tax Group</h4>
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
            <label class="form-label">Tax Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" value="VAT" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Sub Taxes <span class="text-danger"> *</span>
            </label>
            <input
              class="input-tags form-control"
              placeholder="Add new"
              type="text"
              data-role="tagsinput"
              name="Label"
              value="CGST"
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
              <router-link
                to="/admin-template/finance-settings/tax-rates"
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
  <!-- /Edit Tax Rate -->

  <!-- Delete Rate  -->
  <div class="modal fade" id="delete_tax_group">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Tax Group</h4>
          <p class="mb-3">Are you sure you want to delete tax group?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/admin-template/finance-settings/tax-rates"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Rate -->
</template>
