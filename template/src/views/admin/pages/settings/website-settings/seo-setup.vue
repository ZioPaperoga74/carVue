<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <div class="page-wrapper">
    <div class="content me-0 me-lg-4 pb-0">
      <!-- Breadcrumb -->
      <div
        class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3"
      >
        <div class="my-auto mb-2">
          <h4 class="mb-1">Settings</h4>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Settings</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Settings Prefix -->
      <div class="row">
        <div class="col-lg-3">
          <!-- inner sidebar -->
          <adminsettings-sidebar></adminsettings-sidebar>
          <!-- /inner sidebar -->
        </div>
        <div class="col-lg-9">
          <div class="card">
            <div class="card-header">
              <h5 class="fw-bold">Website Settings</h5>
            </div>
            <form action="#">
              <div class="card-body">
                <h6 class="fw-bold mb-3">SEO Setup - Site Meta</h6>
                <div class="mb-3">
                  <label class="form-label"
                    >Meta Title<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Site Description<span class="text-danger ms-1">*</span></label
                  >
                  <textarea class="form-control" rows="3"></textarea>
                </div>
                <div class="mb-3 pb-3 border-bottom">
                  <label class="form-label"
                    >Keywords<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-tags-input
                    class="input-tags form-control"
                    type="text"
                    data-role="tagsinput"
                    name="specialist"
                    id="specialist"
                    :tags="tags"
                  />
                </div>
                <h6 class="fw-bold mb-3">SEO Setup - OG Meta</h6>
                <div class="mb-3">
                  <label class="form-label"
                    >Meta Image <span class="text-danger">*</span></label
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
                    >Meta Title<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Site Description<span class="text-danger ms-1">*</span></label
                  >
                  <textarea class="form-control" rows="3"></textarea>
                </div>
                <div class="mb-0">
                  <label class="form-label"
                    >Keywords<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-tags-input
                    class="input-tags form-control"
                    type="text"
                    data-role="tagsinput"
                    name="specialist"
                    id="specialist"
                    :tags="tags"
                  />
                </div>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-end">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    >Cancel</a
                  >
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- /Settings Prefix -->
    </div>
    <!-- Footer-->
    <div class="footer d-sm-flex align-items-center justify-content-between bg-white p-3">
      <p class="mb-0">
        <a href="javascript:void(0);">Privacy Policy</a>
        <a href="javascript:void(0);" class="ms-4">Terms of Use</a>
      </p>
      <p>
        &copy; 2025 Dreamsrent, Made with <span class="text-danger">❤</span> by
        <a href="javascript:void(0);" class="text-secondary">Dreams</a>
      </p>
    </div>
    <!-- /Footer-->
  </div>
</template>
<script>
import Vue3TagsInput from "vue3-tags-input";
export default {
  data() {
    return {
      tags: ["Test"],
    };
  },
  components: {
    Vue3TagsInput,
  },
};
</script>
