<template>
  <!-- Add Extra Service -->
  <div class="modal fade" id="add_extra_service">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Create Extra Service</h5>
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
            <label class="form-label">Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3 row">
            <div class="col-lg-6">
              <label class="form-label"
                >Quantity <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="col-lg-6">
              <label class="form-label">Price <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Type <span class="text-danger">*</span></label>
            <vue-select :options="TypeSle" v-model="selected" placeholder="Select" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Description <span class="text-danger">*</span></label
            >
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
            <a href="javascript:void(0);" class="btn btn-primary">Create New</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Extra Service -->

  <!-- Edit Extra Service -->
  <div class="modal fade" id="edit_extra_services">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Edit Service</h4>
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
            <label class="form-label">Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" value="Camping Equipment" />
          </div>
          <div class="mb-3 row">
            <div class="col-lg-6">
              <label class="form-label"
                >Quantity <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" value="12" />
            </div>
            <div class="col-lg-6">
              <label class="form-label">Price <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="$120" />
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Type <span class="text-danger">*</span></label>
            <vue-select :options="EditTypeSle" v-model="selectedOne" placeholder="Select" />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Description <span class="text-danger">*</span></label
            >
            <textarea class="form-control"></textarea>
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
              <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Extra Service -->

  <!-- Delete Extra Service -->
  <div class="modal fade" id="delete_extra_services">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Extra Service</h4>
          <p class="mb-3">Are you sure you want to delete extra service?</p>
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

  <!-- Cars List -->
  <div class="modal fade" id="cars_list">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">Cars</h4>
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
          <div class="d-flex gap-3">
            <div class="w-100">
              <div class="top-search">
                <div class="top-search-group">
                  <span class="input-icon">
                    <i class="ti ti-search"></i>
                  </span>
                  <input type="text" class="form-control" placeholder="Search" />
                </div>
              </div>
            </div>
            <div>
              <div class="dropdown">
                <a
                  href="#filtercollapsepopup"
                  class="filtercollapse coloumn d-inline-flex align-items-center"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="filtercollapsepopup"
                >
                  <i class="ti ti-filter me-1"></i> Filter
                  <span class="badge badge-xs rounded-pill bg-danger ms-2">0</span>
                </a>
              </div>
            </div>
          </div>

          <div class="collapse mt-3" id="filtercollapsepopup">
            <div class="filterbox mb-3 d-flex align-items-center">
              <h6 class="me-3">Filters</h6>
              <div class="dropdown me-2">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Select Brand
                </a>
                <ul class="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Ford</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Ferrari</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Toyota</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">KIA</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Chevrolet</a
                    >
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Select Type
                </a>
                <ul class="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Sedan</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Coupe</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Mini Van</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Crossover</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Sports</a
                    >
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Select Model
                </a>
                <ul class="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Ford Mustang</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Ford Endeavour</a
                    >
                  </li>
                </ul>
              </div>
              <div class="dropdown me-3">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Select Color
                </a>
                <ul class="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Black</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Red</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >White</a
                    >
                  </li>
                </ul>
              </div>
              <a href="javascript:void(0);" class="me-2 text-purple links">Apply</a>
              <a href="javascript:void(0);" class="text-danger links">Clear All</a>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-lg-6">
              <div
                class="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3"
              >
                <div>
                  <div class="d-flex gap-2 align-items-center">
                    <div class="avatar me-2 flex-shrink-0">
                      <img src="@/assets/admin/img/car/car-01.jpg" alt="img" />
                    </div>
                    <div>
                      <h6>Ford Endeavour</h6>
                      <p class="mb-0 fs-13">Sedan</p>
                    </div>
                  </div>
                </div>
                <div class="form-check form-switch form-check-md mb-0 ms-3">
                  <input class="form-check-input" type="checkbox" checked />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3"
              >
                <div>
                  <div class="d-flex gap-2 align-items-center">
                    <div class="avatar me-2 flex-shrink-0">
                      <img src="@/assets/admin/img/car/car-02.jpg" alt="img" />
                    </div>
                    <div>
                      <h6>Ferrari 458 MM</h6>
                      <p class="mb-0 fs-13">Convertible</p>
                    </div>
                  </div>
                </div>
                <div class="form-check form-switch form-check-md mb-0 ms-3">
                  <input class="form-check-input" type="checkbox" checked />
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-lg-6">
              <div
                class="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3"
              >
                <div>
                  <div class="d-flex gap-2 align-items-center">
                    <div class="avatar me-2 flex-shrink-0">
                      <img src="@/assets/admin/img/car/car-03.jpg" alt="img" />
                    </div>
                    <div>
                      <h6>Ford Mustang</h6>
                      <p class="mb-0 fs-13">Coupe</p>
                    </div>
                  </div>
                </div>
                <div class="form-check form-switch form-check-md mb-0 ms-3">
                  <input class="form-check-input" type="checkbox" checked />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3"
              >
                <div>
                  <div class="d-flex gap-2 align-items-center">
                    <div class="avatar me-2 flex-shrink-0">
                      <img src="@/assets/admin/img/car/car-04.jpg" alt="img" />
                    </div>
                    <div>
                      <h6>Toyota Tacoma 4</h6>
                      <p class="mb-0 fs-13">Hatchback</p>
                    </div>
                  </div>
                </div>
                <div class="form-check form-switch form-check-md mb-0 ms-3">
                  <input class="form-check-input" type="checkbox" checked />
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-lg-6">
              <div
                class="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3"
              >
                <div>
                  <div class="d-flex gap-2 align-items-center">
                    <div class="avatar me-2 flex-shrink-0">
                      <img src="@/assets/admin/img/car/car-05.jpg" alt="img" />
                    </div>
                    <div>
                      <h6>Chevrolet Pick Truck</h6>
                      <p class="mb-0 fs-13">Mini Van</p>
                    </div>
                  </div>
                </div>
                <div class="form-check form-switch form-check-md mb-0 ms-3">
                  <input class="form-check-input" type="checkbox" checked />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3"
              >
                <div>
                  <div class="d-flex gap-2 align-items-center">
                    <div class="avatar me-2 flex-shrink-0">
                      <img src="@/assets/admin/img/car/car-06.jpg" alt="img" />
                    </div>
                    <div>
                      <h6>Etios Carmen</h6>
                      <p class="mb-0 fs-13">Hatchback</p>
                    </div>
                  </div>
                </div>
                <div class="form-check form-switch form-check-md mb-0 ms-3">
                  <input class="form-check-input" type="checkbox" checked />
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-lg-6">
              <div
                class="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3"
              >
                <div>
                  <div class="d-flex gap-2 align-items-center">
                    <div class="avatar me-2 flex-shrink-0">
                      <img src="@/assets/admin/img/car/car-07.jpg" alt="img" />
                    </div>
                    <div>
                      <h6>Acura Sport Version</h6>
                      <p class="mb-0 fs-13">Crossover</p>
                    </div>
                  </div>
                </div>
                <div class="form-check form-switch form-check-md mb-0 ms-3">
                  <input class="form-check-input" type="checkbox" checked />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3"
              >
                <div>
                  <div class="d-flex gap-2 align-items-center">
                    <div class="avatar me-2 flex-shrink-0">
                      <img src="@/assets/admin/img/car/car-08.jpg" alt="img" />
                    </div>
                    <div>
                      <h6>Kia Soul 2016</h6>
                      <p class="mb-0 fs-13">SUV</p>
                    </div>
                  </div>
                </div>
                <div class="form-check form-switch form-check-md mb-0 ms-3">
                  <input class="form-check-input" type="checkbox" checked />
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-lg-6">
              <div
                class="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3"
              >
                <div>
                  <div class="d-flex gap-2 align-items-center">
                    <div class="avatar me-2 flex-shrink-0">
                      <img src="@/assets/admin/img/car/car-09.jpg" alt="img" />
                    </div>
                    <div>
                      <h6>Chevrolet Camaro</h6>
                      <p class="mb-0 fs-13">Sport</p>
                    </div>
                  </div>
                </div>
                <div class="form-check form-switch form-check-md mb-0 ms-3">
                  <input class="form-check-input" type="checkbox" checked />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3"
              >
                <div>
                  <div class="d-flex gap-2 align-items-center">
                    <div class="avatar me-2 flex-shrink-0">
                      <img src="@/assets/admin/img/car/car-10.jpg" alt="img" />
                    </div>
                    <div>
                      <h6>Toyota Camry SE 350</h6>
                      <p class="mb-0 fs-13">Sedan</p>
                    </div>
                  </div>
                </div>
                <div class="form-check form-switch form-check-md mb-0 ms-3">
                  <input class="form-check-input" type="checkbox" checked />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Cars List -->
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      // Options for the select dropdowns
      TypeSle: [
        { label: "Select", value: "select" },
        { label: "One Time", value: "one_time" },
        { label: "Per Day", value: "per_day" },
      ],
      EditTypeSle : [
        { label: "Select", value: "select" },
        { label: "One Time", value: "one_time" },
        { label: "Per Day", value: "per_day" },
      ],
    };
  },
};
</script>
