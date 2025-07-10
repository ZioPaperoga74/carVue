<template>
  <!--Add Cronjob -->
  <div class="modal fade" id="aws_settings">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">AWS Settings</h5>
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
          <div class="row">
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >AWS Access Key <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Secret Key <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Bucket Name <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Region <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Base URL <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Cronjob -->
</template>
