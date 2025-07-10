<template>
  <!-- Add paypal -->
  <div class="modal fade" id="add_paypal">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Paypal</h5>
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
              >From Email Address <span class="text-danger">*</span></label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label">API Keys <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Secret Key <span class="text-danger">*</span></label
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
              to="/admin-template/finance-settings/payment-methods"
              data-bs-dismiss="modal"
              class="btn btn-primary"
              >Submit</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add paypal -->
</template>
