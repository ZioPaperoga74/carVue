<template>
  <!-- Add Driver -->
  <div class="modal fade" id="add_ticket">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Add Ticket</h5>
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
            <div class="mb-3">
              <label class="form-label">Image <span class="text-danger">*</span></label>
              <div class="d-flex align-items-center flex-wrap row-gap-3">
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
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Customer Name <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Email <span class="text-danger">*</span></label>
                <input class="form-control" type="text" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Phone Number <span class="text-danger">*</span></label
                >
                <input type="text" id="phone" name="phone" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Ticket Code <span class="text-danger">*</span></label
                >
                <input class="form-control" type="text" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Category <span class="text-danger">*</span></label
                >
                <vue-select
                  :options="ReqSel"
                  v-model="selectedOne"
                  placeholder="Select"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Priority <span class="text-danger">*</span></label
                >
                <vue-select
                  :options="PriorSel"
                  v-model="selectedTwo"
                  placeholder="Select"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Created Date <span class="text-danger">*</span></label
                >
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
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Description <span class="text-danger">*</span></label
                >
                <div class="editor"></div>
                <p class="mt-2">Maximum 60 Words</p>
              </div>
            </div>
            <div class="col-md-12">
              <label class="form-label"> Document</label>
              <div class="document-upload text-center br-3 mb-3">
                <img
                  src="@/assets/admin/img/icons/upload-icon.svg"
                  alt="img"
                  class="mb-2"
                />
                <p class="mb-2">
                  Drop your files here or
                  <span class="text-info text-decoration-underline">Browse</span>
                </p>
                <p class="fs-12 mb-0">Maximum size 50mb</p>
                <input
                  type="file"
                  class="form-control image-sign"
                  multiple
                  accept=".pdf, .txt, .doc, .docx"
                />
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
            <button type="submit" class="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Driver -->

  <!-- Delete  -->
  <div class="modal fade" id="delete_contact">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Tickets</h4>
          <p class="mb-3">Are you sure you want to delete Tickets?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link to="/admin-template/support/tickets" class="btn btn-primary"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete -->
</template>
<script>
import { ref } from "vue";
const valueOne = ref(null);
export default {
  data() {
    return {
      valueOne,
      selectedOne: null,
      selectedTwo: null,
      PriorSel: [
        { label: "Select", value: "Select" },
        { label: "Low", value: "Low" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
      ],
      ReqSel: [
        { label: "Select", value: "Select" },
        { label: "Payment Issue", value: "Payment Issue" },
        { label: "Car Not Available", value: "Car Not Available" },
        { label: "Refund Request", value: "Refund Request" },
      ],
    };
  },
};
</script>
