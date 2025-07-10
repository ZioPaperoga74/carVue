<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <div class="page-wrapper">
    <div class="content me-0 me-md-0 me-lg-4">
      <!-- Add Blogs -->
      <div class="add-blog-content">
        <div class="mb-4">
          <router-link
            to="/admin-template/blogs/blogs"
            class="d-inline-flex align-items-center fw-medium"
            ><i class="ti ti-arrow-narrow-left me-1"></i>Blogs</router-link
          >
        </div>

        <div class="card">
          <div class="card-header">
            <h5>Add Blog</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Featured Image <span class="text-danger">*</span></label
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
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Title <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Category <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="ConverSele"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Tags</label>
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
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label">Description</label>
                  <div class="editor">
                    <div class="editor three-line">
                      <div class="editor-container">
                        <div ref="editorRef" class="quill-editor" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <router-link to="/admin-template/blogs/blogs" class="btn btn-primary"
                >Create New</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Add Blogs -->
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
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      content: "",
      tags: "",
      selected: null,
      ConverSele: [
        { label: "Select", value: "Select" },
        { label: "Travel Tips", value: "Travel Tips" },
        { label: "Car Reviews", value: "Car Reviews" },
        { label: "Rental Policies", value: "Rental Policies" },
        { label: "Insurance & Coverage", value: "Insurance & Coverage" },
        { label: "Budget Rentals", value: "Budget Rentals" },
      ],
    };
  },
  mounted() {
    this.initQuill();
  },
  methods: {
    initQuill() {
      const quill = new Quill(this.$refs.editorRef, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
      });

      quill.on("text-change", () => {
        this.content = quill.root.innerHTML;
      });
    },
  },
  name: "text-editor",
};
</script>
