<template>
  <!-- Add Extra Service -->
  <div class="modal fade" id="add_inspection">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Create Inspection</h5>
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
                  <label class="form-label">Car <span class="text-danger">*</span></label>
                  <vue-select
                    :options="Fordsel"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Inspection Date <span class="text-danger">*</span></label
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
                    >Inspection By <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="ShaSel"
                    v-model="selectedOne"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
            <h6 class="mb-2">Incoming Details</h6>
            <div class="row">
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
                    >Fuel <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <h6 class="mb-2">Checklist</h6>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input class="form-check-input" id="check-1" type="checkbox" />
                    <label for="check-1" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Body Condition</label
                    >
                    <p class="ms-2">Look for dents, scratches, rust, or paint damage.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input class="form-check-input" id="check-2" type="checkbox" />
                    <label for="check-2" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Glass & Mirrors</label
                    >
                    <p class="ms-2">Ensure no cracks or chips.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input class="form-check-input" id="check-3" type="checkbox" />
                    <label for="check-3" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Lights</label
                    >
                    <p class="ms-2">Test headlights, turn signals, and fog lights.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input class="form-check-input" id="check-4" type="checkbox" />
                    <label for="check-4" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Tires & Wheels</label
                    >
                    <p class="ms-2">Inspect depth, pressure and signs of damage.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input class="form-check-input" id="check-5" type="checkbox" />
                    <label for="check-5" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Engine Oil, Coolant & Brake Fluid</label
                    >
                    <p class="ms-2">Check level, condition and any leaks</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input class="form-check-input" id="check-6" type="checkbox" />
                    <label for="check-6" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Battery</label
                    >
                    <p class="ms-2">Check terminals for corrosion and test charge.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input class="form-check-input" id="check-7" type="checkbox" />
                    <label for="check-7" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Seats & Seatbelts</label
                    >
                    <p class="ms-2">Look for dents, scratches, rust, or paint damage.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input class="form-check-input" id="check-8" type="checkbox" />
                    <label for="check-8" class="form-check-label text-gray-9 fs-14 mt-0"
                      >AC & Heater</label
                    >
                    <p class="ms-2">Verify proper functioning.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input class="form-check-input" id="check-19" type="checkbox" />
                    <label for="check-19" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Brakes & Suspension</label
                    >
                    <p class="ms-2">Listen for grinding or squeaking noises</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input class="form-check-input" id="check-10" type="checkbox" />
                    <label for="check-10" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Exhaust System
                    </label>
                    <p class="ms-2">Look for rust, holes, or excessive smoke.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Notes</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Inspection Status <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="InspecSele"
                    v-model="selectedTwo"
                    placholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Repair Status <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="RepSel"
                    v-model="selectedThree"
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
              <a href="javascript:void(0);" class="btn btn-primary">Create New</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Extra Service -->

  <!-- Edit Extra Service -->
  <div class="modal fade" id="edit_inspection">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Edit Inspection</h4>
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
                  <label class="form-label">Car <span class="text-danger">*</span></label>
                  <vue-select
                    :options="EditFordsel"
                    v-model="selectedFour"
                    placeholder="Ford Endeavour"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Inspection Date <span class="text-danger">*</span></label
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
                    >Inspection By <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="EditShaSel"
                    v-model="selectedFive"
                    placeholder="Shaun Farley"
                  />
                </div>
              </div>
            </div>
            <h6 class="mb-2">Incoming Details</h6>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Odometer <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="12,000 km" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Fuel <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="2 litres" />
                </div>
              </div>
            </div>
            <h6 class="mb-2">Checklist</h6>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input
                      class="form-check-input"
                      id="check-11"
                      type="checkbox"
                      checked
                    />
                    <label for="check-11" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Body Condition</label
                    >
                    <p class="ms-2">Look for dents, scratches, rust, or paint damage.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input
                      class="form-check-input"
                      id="check-12"
                      type="checkbox"
                      checked
                    />
                    <label for="check-12" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Glass & Mirrors</label
                    >
                    <p class="ms-2">Ensure no cracks or chips.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input
                      class="form-check-input"
                      id="check-13"
                      type="checkbox"
                      checked
                    />
                    <label for="check-13" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Lights</label
                    >
                    <p class="ms-2">Test headlights, turn signals, and fog lights.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input
                      class="form-check-input"
                      id="check-14"
                      type="checkbox"
                      checked
                    />
                    <label for="check-14" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Tires & Wheels</label
                    >
                    <p class="ms-2">Inspect depth, pressure and signs of damage.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input
                      class="form-check-input"
                      id="check-15"
                      type="checkbox"
                      checked
                    />
                    <label for="check-15" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Engine Oil, Coolant & Brake Fluid</label
                    >
                    <p class="ms-2">Check level, condition and any leaks</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input
                      class="form-check-input"
                      id="check-16"
                      type="checkbox"
                      checked
                    />
                    <label for="check-16" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Battery</label
                    >
                    <p class="ms-2">Check terminals for corrosion and test charge.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input
                      class="form-check-input"
                      id="check-17"
                      type="checkbox"
                      checked
                    />
                    <label for="check-17" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Seats & Seatbelts</label
                    >
                    <p class="ms-2">Look for dents, scratches, rust, or paint damage.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input
                      class="form-check-input"
                      id="check-18"
                      type="checkbox"
                      checked
                    />
                    <label for="check-18" class="form-check-label text-gray-9 fs-14 mt-0"
                      >AC & Heater</label
                    >
                    <p class="ms-2">Verify proper functioning.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input
                      class="form-check-input"
                      id="check-20"
                      type="checkbox"
                      checked
                    />
                    <label for="check-20" class="form-check-label text-gray-19 fs-14 mt-0"
                      >Brakes & Suspension</label
                    >
                    <p class="ms-2">Listen for grinding or squeaking noises</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="form-check form-check-md mb-0">
                    <input
                      class="form-check-input"
                      id="check-39"
                      type="checkbox"
                      checked
                    />
                    <label for="check-39" class="form-check-label text-gray-9 fs-14 mt-0"
                      >Exhaust System
                    </label>
                    <p class="ms-2">Look for rust, holes, or excessive smoke.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Notes</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Inspection Status <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="EditInspecSele"
                    v-model="selectedSix"
                    placholder="Completed"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Repair Status <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="EditRepSel"
                    v-model="selectedSeven"
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
              <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Extra Service -->

  <!-- Delete Extra Service -->
  <div class="modal fade" id="delete">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Inspection</h4>
          <p class="mb-3">Are you sure you want to delete inspection?</p>
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
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      Fordsel: [
        { lable: "Select", value: "select" },
        { label: "Ford Endeavour", value: "ford-endeavour" },
        { label: "Ferrari 458 M", value: "ferrari-458-m" },
        { label: "Ford Mustang", value: "ford-mustang" },
        { label: "Toyota Tacoma 4", value: "toyota-tacoma-4" },
        { label: "Chevrolet Truck", value: "chevrolet-truck" },
      ],
      ShaSel: [
        { label: "Select", value: "select" },
        { label: "Shaun Farley", value: "shaun-farley" },
        { label: "Jenny Ellis", value: "jenny-ellis" },
        { label: "Leon Baxter", value: "leon-baxter" },
        { label: "Karen Flores", value: "karen-flores" },
        { label: "Michael Dawson", value: "michael-dawson" },
      ],
      InspecSele: [
        { label: "Select", value: "select" },
        { label: "Complete", value: "complete" },
        { label: "Inprogress", value: "inprogress" },
        { label: "Pending", value: "pending" },
        { label: "On Hold", value: "on-hold" },
        { label: "Rejected", value: "rejected" },
      ],
      RepSel: [
        { label: "Select", value: "select" },
        { label: "Completed", value: "completed" },
        { label: "Pending", value: "pending" },
        { label: "Need Repair", value: "need-repair" },
        { label: "Inprogress", value: "inprogress" },
        { label: "On Hold", value: "on-hold" },
      ],
      EditFordsel: [
        { label: "Select", value: "select" },
        { label: "Ford Endeavour", value: "ford-endeavour" },
        { label: "Ferrari 458 M", value: "ferrari-458-m" },
        { label: "Ford Mustang", value: "ford-mustang" },
        { label: "Toyota Tacoma 4", value: "toyota-tacoma-4" },
        { label: "Chevrolet Truck", value: "chevrolet-truck" },
      ],
      EditShaSel: [
        { label: "Select", value: "select" },
        { label: "Shaun Farley", value: "shaun-farley" },
        { label: "Jenny Ellis", value: "jenny-ellis" },
        { label: "Leon Baxter", value: "leon-baxter" },
        { label: "Karen Flores", value: "karen-flores" },
        { label: "Michael Dawson", value: "michael-dawson" },
      ],
      EditInspecSele: [
        { label: "Select", value: "select" },
        { label: "Complete", value: "complete" },
        { label: "Inprogress", value: "inprogress" },
        { label: "Pending", value: "pending" },
        { label: "On Hold", value: "on-hold" },
        { label: "Rejected", value: "rejected" },
      ],
      EditRepSel: [
        { label: "Select", value: "select" },
        { label: "Completed", value: "completed" },
        { label: "Pending", value: "pending" },
        { label: "Need Repair", value: "need-repair" },
        { label: "Inprogress", value: "inprogress" },
        { label: "On Hold", value: "on-hold" },
      ],
    };
  },
};
</script>
