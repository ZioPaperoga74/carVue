<template>
  <!-- Add Extra Service -->
  <div class="modal fade" id="add_testimonial">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Add Testimonial</h5>
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
            <label class="form-label">Image <span class="text-danger">*</span></label>
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
            <label class="form-label">Customer <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label">Ratings <span class="text-danger">*</span></label>
            <vue-select :options="testmSel" v-model="selected" placeholder="Select" />
          </div>
          <div class="mb-0">
            <label class="form-label">Review <span class="text-danger">*</span></label>
            <textarea class="form-control"></textarea>
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
            <router-link to="testimonials" class="btn btn-primary"
              >Create New</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Extra Service -->

  <!-- Edit Brand -->
  <div class="modal fade" id="edit_testimonial">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Edit Testimonial</h4>
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
            <label class="form-label">Image <span class="text-danger">*</span></label>
            <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
              <div
                class="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames p-2"
              >
                <img
                  src="@/assets/admin/img/customer/customer-01.jpg"
                  class="rounded-2 img-fluid"
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
            <label class="form-label">Customer <span class="text-danger">*</span></label>
            <input type="text" class="form-control" value="Andrew Simmons" />
          </div>
          <div class="mb-3">
            <label class="form-label">Ratings <span class="text-danger">*</span></label>
            <vue-select
              :options="EdittestmSel"
              v-model="selectedOne"
              placeholder="4 Star"
            />
          </div>
          <div class="mb-0">
            <label class="form-label">Review <span class="text-danger">*</span></label>
            <textarea class="form-control">The rental was spotless, great host!</textarea>
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
              <router-link to="testimonials" class="btn btn-primary"
                >Create New</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Brand -->

  <!-- Delete Extra Service -->
  <div class="modal fade" id="delete_testimonials">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Testimonial</h4>
          <p class="mb-3">Are you sure you want to delete testimonial?</p>
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
  <!-- /Delete Extra Service -->
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      testmSel: [
        { label: "Select", value: "Select" },
        { label: "5 Star", value: "5 Star" },
        { label: "4 Star", value: "4 Star" },
        { label: "3 Star", value: "3 Star" },
        { label: "2 Star", value: "2 Star" },
        { label: "1 Star", value: "1 Star" },
      ],
      EdittestmSel: [
        { label: "Select", value: "Select" },
        { label: "5 Star", value: "5 Star" },
        { label: "4 Star", value: "4 Star" },
        { label: "3 Star", value: "3 Star" },
        { label: "2 Star", value: "2 Star" },
        { label: "1 Star", value: "1 Star" },
      ],
    };
  },
};
</script>
