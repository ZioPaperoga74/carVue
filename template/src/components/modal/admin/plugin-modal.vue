<template>
  <!-- Add Plugin -->
  <div class="modal fade" id="add_plugin">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Add Plugin</h5>
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
          <div class="plugin-content-modal">
            <div class="d-flex flex-column align-items-center">
              <span class="mb-2"><i class="ti ti-files text-primary"></i></span>
              <p class="mb-0">
                Drop your files here or <a href="javascript:void(0);">Browse</a>
              </p>
              <p class="mb-0">Maximum size 50mb</p>
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
              to="plugin-managers"
              data-bs-dismiss="modal"
              class="btn btn-primary"
              >Install</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Plugin -->
</template>
