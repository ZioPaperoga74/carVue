<template>
  <!-- Create Maintenance -->
  <div class="modal fade modal-dropdown" id="add_maintenance">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Create Maintenance</h5>
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
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Car <span class="text-danger">*</span></label>
                  <div class="dropdown w-100">
                    <a
                      href="javascript:void(0);"
                      class="w-100 dropdown-toggle btn btn-white d-inline-flex align-items-center justify-content-between"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      Select Car
                    </a>
                    <ul class="dropdown-menu dropdown-menu-lg p-2">
                      <li>
                        <div class="top-search m-2">
                          <div class="top-search-group">
                            <span class="input-icon">
                              <i class="ti ti-search"></i>
                            </span>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          >Ford Endeavour</a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          >Ferrari 458 MM</a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          >Ford Mustang</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Odometer <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Start Date <span class="text-danger">*</span></label
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
                    >End Date <span class="text-danger">*</span></label
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
                  <label class="form-label">Details</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Maintenance Status <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="InproSel"
                    v-model="selected"
                    placeholder="Select"
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
              <button type="submit" class="btn btn-primary">Create New</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Create Maintenance -->
  <!-- Edit Maintenance -->
  <div class="modal fade modal-dropdown" id="edit_maintenance">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Edit Maintenance</h5>
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
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Car <span class="text-danger">*</span></label>
                  <div class="dropdown w-100">
                    <a
                      href="javascript:void(0);"
                      class="w-100 dropdown-toggle btn btn-white d-inline-flex align-items-center justify-content-between"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      Ford Endeavour
                    </a>
                    <ul class="dropdown-menu dropdown-menu-lg p-2">
                      <li>
                        <div class="top-search m-2">
                          <div class="top-search-group">
                            <span class="input-icon">
                              <i class="ti ti-search"></i>
                            </span>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          >Ford Endeavour</a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          >Ferrari 458 MM</a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          >Ford Mustang</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Odometer <span class="text-danger">*</span></label
                  >
                  <input type="text" value="12,215 km" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
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
              <div class="col-md-6">
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
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Details</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Maintenance Status <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="EditInproSel"
                    v-model="selectedOne"
                    placeholder="Completed"
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
              <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Maintenance -->
  <!-- Delete Maintenance -->
  <div class="modal fade" id="delete_maintenance">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Maintenance</h4>
          <p class="mb-3">Are you sure you want to delete Maintenance?</p>
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
  <!-- /Delete Maintenance -->
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
      selected: null,
      selectedOne: null,
      InproSel: [
        { label: "Completed", value: "Completed" },
        { label: "In Progress", value: "In Progress" },
        { label: "Planned", value: "Planned" },
      ],
      EditInproSel: [
        { label: "Completed", value: "Completed" },
        { label: "In Progress", value: "In Progress" },
        { label: "Planned", value: "Planned" },
      ],
    };
  },
};
</script>
