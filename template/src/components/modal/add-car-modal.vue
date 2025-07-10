<template>
  <!-- Add New Tarrif -->
  <div class="modal fade" id="add-tarrif">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Add New Tarrif</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-1">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Tariff Name <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Daily Price <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >From Days <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >To Days <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <label class="form-label"
                      >Base Kilometers (Per Day) <span class="text-danger">*</span></label
                    >
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="unlimited1" />
                      <label class="form-check-label" for="unlimited1"> Unlimited </label>
                    </div>
                  </div>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Kilometers Extra Price <span class="text-danger">*</span></label
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
              <button type="submit" class="btn btn-primary">Create Tarrif</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add New Tarrif -->

  <!-- Edit Tarrif -->
  <div class="modal fade" id="edit-tarrif">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Edit Tarrif</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-1">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Tariff Name <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="4 to 5 days" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Daily Price <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="50" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >From Days <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="4" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >To Days <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="5" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <label class="form-label"
                      >Base Kilometers (Per Day) <span class="text-danger">*</span></label
                    >
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="unlimited2" />
                      <label class="form-check-label" for="unlimited2"> Unlimited </label>
                    </div>
                  </div>
                  <input type="text" class="form-control" value="100" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Kilometers Extra Price <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="50" />
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
  <!-- /Edit Tarrif -->

  <!-- Delete Tarrif -->
  <div class="modal fade" id="delete_tarrif">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Tarrif</h4>
          <p class="mb-3">Are you sure you want to delete Tarrif?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link to="/admin-template/rentals/add-car" class="btn btn-primary"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Damage -->

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
                    <input type="file" class="form-control image-sign" multiple="" />
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
          <div class="mb-3">
            <label class="form-label"
              >Total Cars <span class="text-danger">*</span></label
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
            <button type="submit" class="btn btn-primary">Create New</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Brand -->

  <!-- Add Type -->
  <div class="modal fade" id="add_type">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Create Type</h5>
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
                    <input type="file" class="form-control image-sign" multiple="" />
                  </div>
                </div>
                <div class="mt-2">
                  <p class="fs-14">Upload Image size 180*180, within 5MB</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Name <span class="text-danger">*</span></label>
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
            <button type="submit" class="btn btn-primary">Create New</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Type -->

  <!-- Add Model -->
  <div class="modal fade" id="add_model">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Create Model</h5>
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
            <label class="form-label">Model <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label">Brand <span class="text-danger">*</span></label>
            <vue-select :options="Brand" v-model="selected" placeholder="Select" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Total Cars <span class="text-danger">*</span></label
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
            <button type="submit" class="btn btn-primary">Create New</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Model -->

  <!-- Create Seasonal Pricing -->
  <div class="modal fade" id="add_price">
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
        <form @submit.prevent="submitForm">
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
                      type="text"
                      class="form-control yearpicker"
                      placeholder="Select Year"
                      picker="year"
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
                      type="text"
                      class="form-control yearpicker"
                      placeholder="Select Year"
                      picker="year"
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

  <!-- Select Seasonal Pricing -->
  <div class="modal fade" id="select_price">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Seasonal Pricing</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-1">
            <div
              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3"
            >
              <div>
                <h6 class="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Halloween<span class="badge bg-secondary-transparent ms-2"
                    >01 Oct 2025 - 31 Oct 2025
                  </span>
                </h6>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Daily Rate : <span class="text-gray-9">$200</span>
                  </p>
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Weekly Rate : <span class="text-gray-9">$1400</span>
                  </p>
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Monthly Rate : <span class="text-gray-9">$4800</span>
                  </p>
                  <p class="fs-13 fw-medium mb-0 pe-2 mb-0">
                    Late Fee : <span class="text-gray-9">$200</span>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center delivery-add">
                <a href="javascript:void(0);"
                  ><i class="ti ti-plus plus-active"></i
                  ><i class="ti ti-check check-active"></i
                ></a>
              </div>
            </div>
            <div
              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3"
            >
              <div>
                <h6 class="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Easter<span class="badge bg-secondary-transparent ms-2"
                    >01 Apr 2025 - 30 Apr 2025
                  </span>
                </h6>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Daily Rate : <span class="text-gray-9">$220</span>
                  </p>
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Weekly Rate : <span class="text-gray-9">$1540</span>
                  </p>
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Monthly Rate : <span class="text-gray-9">$6600</span>
                  </p>
                  <p class="fs-13 fw-medium mb-0 pe-2 mb-0">
                    Late Fee : <span class="text-gray-9">$250</span>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center delivery-add">
                <a href="javascript:void(0);"
                  ><i class="ti ti-plus plus-active"></i
                  ><i class="ti ti-check check-active"></i
                ></a>
              </div>
            </div>
            <div
              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3"
            >
              <div>
                <h6 class="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  New Year<span class="badge bg-secondary-transparent ms-2"
                    >01 Jan 2025 - 15 Jan 2025</span
                  >
                </h6>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Daily Rate : <span class="text-gray-9">$240</span>
                  </p>
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Weekly Rate : <span class="text-gray-9">$1680</span>
                  </p>
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Monthly Rate : <span class="text-gray-9">$6720</span>
                  </p>
                  <p class="fs-13 fw-medium mb-0 pe-2 mb-0">
                    Late Fee : <span class="text-gray-9">$150</span>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center delivery-add">
                <a href="javascript:void(0);"
                  ><i class="ti ti-plus plus-active"></i
                  ><i class="ti ti-check check-active"></i
                ></a>
              </div>
            </div>
            <div
              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3"
            >
              <div>
                <h6 class="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Christmas<span class="badge bg-secondary-transparent ms-2"
                    >01 Dec 2024 - 31 Dec 2025</span
                  >
                </h6>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Daily Rate : <span class="text-gray-9">$250</span>
                  </p>
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Weekly Rate : <span class="text-gray-9">$1750</span>
                  </p>
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Monthly Rate : <span class="text-gray-9">$7000</span>
                  </p>
                  <p class="fs-13 fw-medium mb-0 pe-2 mb-0">
                    Late Fee : <span class="text-gray-9">$300</span>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center delivery-add">
                <a href="javascript:void(0);"
                  ><i class="ti ti-plus plus-active"></i
                  ><i class="ti ti-check check-active"></i
                ></a>
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
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Select Seasonal Pricing -->

  <!-- Select Seasonal Pricing -->
  <div class="modal fade" id="select_insurance">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Insurance</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-1">
            <div
              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3"
            >
              <div>
                <h6 class="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Full Premium Insurance
                </h6>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Price : <span class="text-gray-9">$200</span>
                  </p>
                  <p class="fs-13 fw-medium mb-0">
                    Benefits : <span class="text-gray-9">4</span>
                    <i
                      class="ti ti-info-circle-filled text-gray-5 ms-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="No additional charges for emergency roadside services"
                    ></i>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center delivery-add">
                <a href="javascript:void(0);"
                  ><i class="ti ti-plus plus-active"></i
                  ><i class="ti ti-check check-active"></i
                ></a>
              </div>
            </div>
            <div
              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3"
            >
              <div>
                <h6 class="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Roadside Assistance
                </h6>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Price : <span class="text-gray-9">$250</span>
                  </p>
                  <p class="fs-13 fw-medium mb-0">
                    Benefits : <span class="text-gray-9">6</span>
                    <i
                      class="ti ti-info-circle-filled text-gray-5 ms-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="No additional charges for emergency roadside services"
                    ></i>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center delivery-add">
                <a href="javascript:void(0);"
                  ><i class="ti ti-plus plus-active"></i
                  ><i class="ti ti-check check-active"></i
                ></a>
              </div>
            </div>
            <div
              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3"
            >
              <div>
                <h6 class="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Liability Insurance
                </h6>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Price : <span class="text-gray-9">$150</span>
                  </p>
                  <p class="fs-13 fw-medium mb-0">
                    Benefits : <span class="text-gray-9">4</span>
                    <i
                      class="ti ti-info-circle-filled text-gray-5 ms-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="No additional charges for emergency roadside services"
                    ></i>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center delivery-add">
                <a href="javascript:void(0);"
                  ><i class="ti ti-plus plus-active"></i
                  ><i class="ti ti-check check-active"></i
                ></a>
              </div>
            </div>
            <div
              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3"
            >
              <div>
                <h6 class="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Personal Accident Insurance
                </h6>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <p class="fs-13 fw-medium border-end pe-2 mb-0">
                    Price : <span class="text-gray-9">$300</span>
                  </p>
                  <p class="fs-13 fw-medium mb-0">
                    Benefits : <span class="text-gray-9">5</span>
                    <i
                      class="ti ti-info-circle-filled text-gray-5 ms-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="No additional charges for emergency roadside services"
                    ></i>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center delivery-add">
                <a href="javascript:void(0);"
                  ><i class="ti ti-plus plus-active"></i
                  ><i class="ti ti-check check-active"></i
                ></a>
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
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Select Seasonal Pricing -->

  <!-- Edit Insurance -->
  <div class="modal fade" id="edit_insurance">
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
        <form @submit.prevent="submitForm">
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
  <!-- /Edit  Insurance -->

  <!-- Edit Seasonal Pricing -->
  <div class="modal fade" id="edit_seasonal_price">
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
        <form @submit.prevent="submitForm">
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
                      type="text"
                      class="form-control"
                      placeholder="Select Year"
                      picker="year"
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
                      type="text"
                      class="form-control datetimepicker"
                      placeholder="Select Year"
                      picker="year"
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
  <div class="modal fade" id="delete_price">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Pricing</h4>
          <p class="mb-3">Are you sure you want to delete Pricing?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link to="/admin-template/rentals/add-car" class="btn btn-primary"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Pricing -->

  <!-- Delete Insurance -->
  <div class="modal fade" id="delete_insurance">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Insurance</h4>
          <p class="mb-3">Are you sure you want to delete Insurance?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link to="/admin-template/rentals/add-car" class="btn btn-primary"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Insurance -->

  <!-- Edit Pricing -->
  <div class="modal fade" id="edit_price">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Edit Pricing</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-1">
            <table class="table custom-table1">
              <thead class="thead-white">
                <tr>
                  <th class="py-0">Extra Features</th>
                  <th class="py-0">Pricing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="fw-medium text-gray-9">Navigation</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <vue-select
                        :options="Editprice"
                        v-model="selectedOne"
                        placeholder="One Time"
                      />
                      <div class="input-icon-start position-relative w-100 ms-2">
                        <span class="input-icon-addon">
                          <i class="ti ti-currency-dollar"></i>
                        </span>
                        <input type="text" class="form-control" value="90" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="fw-medium text-gray-9">Satellite Radio</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <vue-select
                        :options="Editprice"
                        v-model="selectedTwo"
                        placeholder="Per day"
                      />
                      <div class="input-icon-start position-relative w-100 ms-2">
                        <span class="input-icon-addon">
                          <i class="ti ti-currency-dollar"></i>
                        </span>
                        <input type="text" class="form-control" value="25" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="fw-medium text-gray-9">Roadside Assistance</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <vue-select
                        :options="Editprice"
                        v-model="selectedThree"
                        placeholder="Per Day"
                      />
                      <div class="input-icon-start position-relative w-100 ms-2">
                        <span class="input-icon-addon">
                          <i class="ti ti-currency-dollar"></i>
                        </span>
                        <input type="text" class="form-control" value="47" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="fw-medium text-gray-9">Express Check-in/out</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <vue-select
                        :options="Editprice"
                        v-model="selectedFour"
                        placeholder="Per Day"
                      />
                      <div class="input-icon-start position-relative w-100 ms-2">
                        <span class="input-icon-addon">
                          <i class="ti ti-currency-dollar"></i>
                        </span>
                        <input type="text" class="form-control" value="75" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="fw-medium text-gray-9">Child Safety Seats</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <vue-select
                        :options="Editprice"
                        v-model="selectedFive"
                        placeholder="Per Day"
                      />
                      <div class="input-icon-start position-relative w-100 ms-2">
                        <span class="input-icon-addon">
                          <i class="ti ti-currency-dollar"></i>
                        </span>
                        <input type="text" class="form-control" value="22" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="fw-medium text-gray-9">Roadside Assistance</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <vue-select
                        :options="Editprice"
                        v-model="selectedSix"
                        placeholder="Per Day"
                      />
                      <div class="input-icon-start position-relative w-100 ms-2">
                        <span class="input-icon-addon">
                          <i class="ti ti-currency-dollar"></i>
                        </span>
                        <input type="text" class="form-control" value="48" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
  <!-- /Edit Pricing -->

  <!-- Add New Damage -->
  <div class="modal fade" id="add-damage">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Add New Damage</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-1">
            <div class="mb-3">
              <label class="form-label"
                >Damage Location <span class="text-danger">*</span></label
              >
              <vue-select
                :options="Damage"
                v-model="selectedSeven"
                placeholder="Select"
              />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Damage Type <span class="text-danger">*</span></label
              >
              <vue-select
                :options="Damagetype"
                v-model="selectedEight"
                placeholder="Select"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea class="form-control" rows="3"></textarea>
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
  <!-- /Add New Damage -->

  <!-- Edit Damage -->
  <div class="modal fade" id="edit-damage">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Edit Damage</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-1">
            <div class="mb-3">
              <label class="form-label"
                >Damage Location <span class="text-danger">*</span></label
              >
              <vue-select
                :options="Damagelocation"
                v-model="selectedNine"
                placeholder="Select"
              />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Damage Type <span class="text-danger">*</span></label
              >
              <vue-select
                :options="Damagetype"
                v-model="selectedTen"
                placeholder="Scratch"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea class="form-control" rows="3">
Cracks, scratches, or faded surfaces due to heat exposure.</textarea
              >
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
  <!-- /Edit Damage -->

  <!-- Delete Damage -->
  <div class="modal fade deletemodal" id="delete_damage">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Damage</h4>
          <p class="mb-3">Are you sure you want to delete Damage?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link to="/admin-template/rentals/add-car" class="btn btn-primary"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Damage -->

  <!-- Create FAQ -->
  <div class="modal fade" id="add-faq">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Create FAQ</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-1">
            <div class="mb-3">
              <label class="form-label"
                >Question <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Answer <span class="text-danger">*</span></label>
              <textarea class="form-control" rows="3"></textarea>
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
  <!-- /Create FAQ -->
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());

export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      selectedNine: null,
      selectedTen: null,
      Brand: [
        { label: "Select", value: "Select" },
        { label: "Toyota", value: "Toyota" },
        { label: "Audi", value: "Audi" },
        { label: "Lamborghini", value: "Lamborghini" },
      ],
      Editprice: [
        { label: "One Time", value: "One Time" },
        { label: "Per Day", value: "Per Day" },
      ],
      Damage: [
        { label: "Select", value: "Select" },
        { label: "Interior", value: "Interior" },
        { label: "Exterior", value: "Exterior" },
      ],
      Damagetype: [
        { label: "Select", value: "Select" },
        { label: "Scratch", value: "Scratch" },
        { label: "Dent", value: "Dent" },
        { label: "Crack", value: "Crack" },
        { label: "Clip", value: "Clip" },
      ],
      Damagelocation: [
        { label: "Select", value: "Select" },
        { label: "Interior", value: "Interior" },
        { label: "Exterior", value: "Exterior" },
      ],
      dateFormat: "dd-MM-yyyy",
      startdate: currentDate,
      startdateOne: currentDateOne,
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/admin-template/rentals/add-car");
    },
  },
};
</script>
