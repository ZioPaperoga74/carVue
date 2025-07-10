<template>
  <!-- Add Insurance -->
  <div class="modal fade" id="add-insurance">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Add New Insurance</h4>
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
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Insurane Name <span class="text-danger"> *</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Price Type <span class="text-danger"> *</span></label
              >
              <div class="d-flex align-items-center">
                <div class="form-check me-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm4"
                    checked
                  />
                  <label class="form-check-label" for="Radio-sm4"> Daily </label>
                </div>
                <div class="form-check me-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm5"
                  />
                  <label class="form-check-label" for="Radio-sm5"> Fixed </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm6"
                  />
                  <label class="form-check-label" for="Radio-sm6"> Percentage </label>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Price <span class="text-danger"> *</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="add-insurance-benifit">
              <div class="mb-1">
                <label class="form-label"
                  >Benefit <span class="text-danger"> *</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <a
              href="javascript:void(0);"
              class="d-inline-flex align-items-center text-info add-new-benifit"
              ><i class="ti ti-plus me-1"></i>Add New</a
            >
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary">Create Insurance</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Insurance -->

  <!-- Edit Insurance -->
  <div class="modal fade" id="edit-insurance">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Edit Insurance</h4>
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
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Insurane Name <span class="text-danger"> *</span></label
              >
              <input type="text" class="form-control" value="Full Premium Insurance" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Price Type <span class="text-danger"> *</span></label
              >
              <div class="d-flex align-items-center">
                <div class="form-check me-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm"
                    checked
                  />
                  <label class="form-check-label" for="Radio-sm"> Daily </label>
                </div>
                <div class="form-check me-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm2"
                  />
                  <label class="form-check-label" for="Radio-sm2"> Fixed </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm3"
                  />
                  <label class="form-check-label" for="Radio-sm3"> Percentage </label>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Price <span class="text-danger"> *</span></label>
              <input type="text" class="form-control" value="$200" />
            </div>
            <div class="add-insurance-benifit-2">
              <div class="mb-1">
                <label class="form-label"
                  >Benefit <span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  value="No additional charges for emergency roadside services."
                />
              </div>
            </div>
            <a
              href="javascript:void(0);"
              class="d-inline-flex align-items-center text-info add-new-benifit-2"
              ><i class="ti ti-plus me-1"></i>Add New</a
            >
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
                <button type="submit" class="btn btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit  Insurance -->

  <!-- Benifits Insurance -->
  <div class="modal fade" id="view-benifits">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Benefits</h4>
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
          <div>
            <p class="d-flex align-items-center mb-2">
              <i class="ti ti-checks text-success me-1"></i>No additional charges for
              emergency roadside services.
            </p>
            <p class="d-flex align-items-center mb-2">
              <i class="ti ti-checks text-success me-1"></i>Quick assistance for
              unexpected breakdowns.
            </p>
            <p class="d-flex align-items-center mb-2">
              <i class="ti ti-checks text-success me-1"></i>Coverage for lost or stolen
              personal belongings
            </p>
            <p class="d-flex align-items-center">
              <i class="ti ti-checks text-success me-1"></i>Covers the cost if the rental
              car is stolen.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Benifits Insurance -->

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
          <h4 class="mb-1">Delete Insurance</h4>
          <p class="mb-3">Are you sure you want to delete insurance?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/admin-template/rental-settings/insurance-setting"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete -->
</template>
