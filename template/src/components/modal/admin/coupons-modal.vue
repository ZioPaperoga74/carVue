<template>
  <!-- Add Coupons -->
  <div class="modal fade" id="add_coupons">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Add Coupon</h5>
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
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Coupon Name <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Coupon Code <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label">Type <span class="text-danger">*</span></label>
                <vue-select :options="FixSele" v-model="selected" placeholder="Select" />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Discount Value <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Start Date <span class="text-danger"> *</span>
                </label>
                <div class="input-icon-end position-relative">
                  <a-date-picker
                    v-model="valueOne"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                  <span class="input-icon-addon">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >End Date <span class="text-danger"> *</span>
                </label>
                <div class="input-icon-end position-relative">
                  <a-date-picker
                    v-model="valueTwo"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                  <span class="input-icon-addon">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Applicable To <span class="text-danger">*</span></label
                >
                <vue-select
                  :options="FixRentals"
                  v-model="selectedOne"
                  placeholder="Select"
                />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label">Limit <span class="text-danger">*</span></label>
                <input type="text" class="form-control" />
                <span class="text-gray-5 fs-13 mt-1">Enter 0 for unlimited</span>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-0">
                <label class="form-label">Description </label>
                <div class="editor">
                  <div class="editor three-line">
                    <div class="editor-container">
                      <div ref="editorRef" class="quill-editor" />
                    </div>
                  </div>
                </div>
                <p class="mt-2 fs-14">Maximum 60 Words</p>
              </div>
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
            <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary"
              >Create New</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Coupons -->

  <!-- Edit Coupons -->
  <div class="modal fade" id="edit_coupons">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Edit Coupon</h4>
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
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Coupon Name <span class="text-danger">*</span></label
                >
                <input type="text" value="Summer Sale 2025" class="form-control" />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Coupon Code <span class="text-danger">*</span></label
                >
                <input type="text" value="SUMMER2024" class="form-control" />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label">Type <span class="text-danger">*</span></label>
                <vue-select
                  :options="EditFixSele"
                  v-model="selectedTwo"
                  placeholder="Percentage"
                />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Discount Value <span class="text-danger">*</span></label
                >
                <input type="text" value="25%" class="form-control" />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Start Date <span class="text-danger"> *</span>
                </label>
                <div class="input-icon-end position-relative">
                  <a-date-picker
                    v-model="valueOne"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                  <span class="input-icon-addon">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >End Date <span class="text-danger"> *</span>
                </label>
                <div class="input-icon-end position-relative">
                  <a-date-picker
                    v-model="valueTwo"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                  <span class="input-icon-addon">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Applicable To <span class="text-danger">*</span></label
                >
                <vue-select
                  :options="EditFixRentals"
                  v-model="selectedThree"
                  placeholder="New Customers"
                />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label">Limit <span class="text-danger">*</span></label>
                <input type="text" value="15" class="form-control" />
                <span class="text-gray-5 fs-13 mt-1">Enter 0 for unlimited</span>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-0">
                <label class="form-label">Description </label>
                <div class="editor">
                  <div class="editor three-line">
                    <div class="editor-container">
                      <div ref="editorRefone" class="quill-editor" />
                    </div>
                  </div>
                  20% off on all rentals in January to March.
                </div>
                <p class="mt-2 fs-14">Maximum 60 Words</p>
              </div>
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
            <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary"
              >Save Changes</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Coupons -->

  <!-- Delete Modal  -->
  <div class="modal fade" id="delete_coupons">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Coupon</h4>
          <p class="mb-3">Are you sure you want to delete Coupon?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal-->
</template>
<script>
import { ref } from "vue";
const valueOne = ref(null);
const valueTwo = ref(null);
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      content: "",
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      valueOne,
      valueTwo,
      FixRentals: [
        { label: "Select", value: "select" },
        { label: "New Customers", value: "New Customers" },
        { label: "Weekly Rentals", value: "Weekly Rentals" },
        { label: "VIP Members", value: "VIP Members" },
        { label: "Luxury Cars", value: "Luxury Cars" },
        { label: "Long Rentals", value: "Long Rentals" },
      ],
      FixSele: [
        { label: "Select", value: "select" },
        { label: "Percentage", value: "Percentage" },
        { label: "Fixed", value: "Fixed" },
      ],
      EditFixRentals: [
        { label: "Select", value: "select" },
        { label: "New Customers", value: "New Customers" },
        { label: "Weekly Rentals", value: "Weekly Rentals" },
        { label: "VIP Members", value: "VIP Members" },
        { label: "Luxury Cars", value: "Luxury Cars" },
        { label: "Long Rentals", value: "Long Rentals" },
      ],
      EditFixSele: [
        { label: "Select", value: "select" },
        { label: "Percentage", value: "Percentage" },
        { label: "Fixed", value: "Fixed" },
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
      const quillone = new Quill(this.$refs.editorRefone, {
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
      quillone.on("text-change", () => {
        this.content = quillone.root.innerHTML;
      });
    },
  },
};
</script>
