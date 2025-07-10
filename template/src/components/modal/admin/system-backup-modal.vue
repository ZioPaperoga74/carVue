<template>
  <!-- Generate  -->
  <div class="modal fade" id="generate">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <form action="#">
            <span
              class="avatar avatar-lg bg-primary-transparent rounded-circle text-primary mb-3"
            >
              <i class="ti ti-folders fs-26"></i>
            </span>
            <h4 class="mb-1">Generate Backup</h4>
            <p class="mb-3">Are you sure you want to generate database backup?</p>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" data-bs-dismiss="modal" class="btn btn-primary">
                Generate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Generate -->

  <!-- Delete  -->
  <div class="modal fade" id="delete_backup">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Backup</h4>
          <p class="mb-3">Are you sure you want to delete backup?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/admin-template/other-settings/system-backup"
              data-bs-dismiss="modal"
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
