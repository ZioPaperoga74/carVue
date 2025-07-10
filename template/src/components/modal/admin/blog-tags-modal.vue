<template>
  <!-- Add Category -->
  <div class="modal fade" id="add_Category">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Add Tag</h5>
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
          <div>
            <label class="form-label">Tag <span class="text-danger">*</span></label>
            <input
              class="input-tags form-control"
              id="inputBox"
              type="text"
              data-role="tagsinput"
              name="specialist"
            />
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
            <router-link to="blog-tags" class="btn btn-primary" data-bs-dismiss="modal"
              >Create New</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Category -->

  <!-- Edit Category -->
  <div class="modal fade" id="edit_Category">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Edit Tag</h4>
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
          <div>
            <label class="form-label">Tag <span class="text-danger">*</span></label>
            <input
              class="input-tags form-control"
              id="inputBox1"
              type="text"
              data-role="tagsinput"
              name="specialist"
              value="Road Trip Essentials"
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
              <router-link to="blog-tags" class="btn btn-primary" data-bs-dismiss="modal"
                >Save Changes</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Category -->

  <!-- Delete Category -->
  <div class="modal fade" id="delete_Category">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Tag</h4>
          <p class="mb-3">Are you sure you want to delete Tag?</p>
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
  <!-- /Delete Category -->
</template>
