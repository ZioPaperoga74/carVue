<template>
  <!-- Create Seasonal Pricing -->
  <div class="modal fade" id="add_pricing">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Create Seasonal Pricing</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form action="#">
          <div class="modal-body pb-1">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Season Name <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Start Date <span class="text-danger">*</span></label
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
                    >End Date <span class="text-danger">*</span></label
                  >
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
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Daily Rate <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Weekly Rate <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Monthly Rate <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Late Fees <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
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
              <button type="submit" class="btn btn-primary">Create New</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Create Seasonal Pricing -->

  <!-- Edit Seasonal Pricing -->
  <div class="modal fade" id="edit_pricing">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Edit Seasonal Pricing</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form action="#">
          <div class="modal-body pb-1">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Season Name <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="Halloween" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Start Date <span class="text-danger">*</span></label
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
                    >End Date <span class="text-danger">*</span></label
                  >
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
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Daily Rate <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="50" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Weekly Rate <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="100" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Monthly Rate <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="150" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Late Fees <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="200" />
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
              <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Seasonal Pricing -->

  <!-- Delete Pricing -->
  <div class="modal fade" id="delete_pricing">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Seasonal Pricing</h4>
          <p class="mb-3">Are you sure you want to delete Seasonal Pricing?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Pricing -->
</template>
<script>
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();

export default {
  data() {
    return {
      valueOne,
      valueTwo,
    };
  },
};
</script>
