<template>
  <!-- Google Login Settings -->
  <div class="modal fade" id="google_login">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Google Login Settings</h5>
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
            <label class="form-label"
              >Client ID<span class="text-danger ms-1">*</span></label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Client Secret Key<span class="text-danger ms-1">*</span></label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="mb-0">
            <label class="form-label"
              >Login Redirect URL<span class="text-danger ms-1">*</span></label
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
            <a href="javascript:void(0);" class="btn btn-primary">Submit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Google Login Settings -->

  <!-- Facebook Login Settings -->
  <div class="modal fade" id="facebook_login">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Facebook Login Settings</h5>
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
            <label class="form-label"
              >API ID<span class="text-danger ms-1">*</span></label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >API Secret Key<span class="text-danger ms-1">*</span></label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="mb-0">
            <label class="form-label"
              >Login Redirect URL<span class="text-danger ms-1">*</span></label
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
            <a href="javascript:void(0);" class="btn btn-primary">Submit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Facebook Login Settings -->
</template>
