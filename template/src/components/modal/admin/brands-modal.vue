<template>
  <!-- Add Brand -->
  <div class="modal fade" id="add_brand">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Create Brand</h5>
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
              >Brand Image <span class="text-danger">*</span></label
            >

            <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
              <div
                class="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames"
              >
                <i class="ti ti-photo-up text-gray-4 fs-24"></i>
              </div>
              <div class="profile-upload">
                <div class="profile-uploader d-flex align-items-center">
                  <div class="drag-upload-btn btn btn-md btn-dark">
                    <i class="ti ti-photo-up fs-14"></i>
                    Upload
                    <input type="file" class="form-control image-sign" multiple />
                  </div>
                </div>
                <div class="mt-2">
                  <p class="fs-14">Upload Image size 180*180, within 5MB</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Brand Name <span class="text-danger">*</span></label
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
            <a href="javascript:void(0);" class="btn btn-primary">Create New</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Brand -->

  <!-- Edit Brand -->
  <div class="modal fade" id="edit_brand">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Edit Brand</h4>
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
              >Brand Image <span class="text-danger">*</span></label
            >

            <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
              <div
                class="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames"
              >
                <img
                  src="@/assets/admin/img/brands/toyota.svg"
                  class="upload-img img-fluid"
                  alt="brands"
                />
                <a
                  href="javascript:void(0);"
                  class="upload-img-trash btn btn-sm btn-danger-light rounded-circle"
                >
                  <i class="ti ti-trash fs-12"></i>
                </a>
              </div>
              <div class="profile-upload">
                <div class="profile-uploader d-flex align-items-center">
                  <div class="drag-upload-btn btn btn-md btn-dark">
                    <i class="ti ti-photo-up fs-14"></i>
                    Upload
                    <input type="file" class="form-control image-sign" multiple />
                  </div>
                </div>
                <div class="mt-2">
                  <p class="fs-14">Upload Image size 180*180, within 5MB</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Brand Name <span class="text-danger">*</span></label
            >
            <input type="text" class="form-control" placeholder="Toyota" />
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
  <!-- /Edit Brand -->

  <!-- Delete Brand -->
  <div class="modal fade" id="delete_brand">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Brand</h4>
          <p class="mb-3">Are you sure you want to delete brand?</p>
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
  <!-- /Delete Brand -->
</template>
