<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <div class="page-wrapper">
    <div class="content me-0 me-md-0 me-lg-4">
      <!-- Breadcrumb -->
      <div
        class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3"
      >
        <div class="my-auto mb-2">
          <h2 class="mb-1">Settings</h2>
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
          <div class="card h-100">
            <div class="card-header">
              <h5 class="fw-bold">App Settings</h5>
            </div>
            <div class="card-body">
              <h6 class="fw-bold mb-3">Custom Fields</h6>
              <div
                class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3"
              >
                <div class="d-flex align-items-center flex-wrap row-gap-3">
                  <div class="top-search me-2">
                    <div class="top-search-group">
                      <span class="input-icon">
                        <i class="ti ti-search"></i>
                      </span>
                      <input type="text" class="form-control" placeholder="Search" />
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3"
                >
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#add_field"
                    class="btn btn-primary d-flex align-items-center"
                    ><i class="ti ti-plus me-2"></i>Add New Field</a
                  >
                </div>
              </div>
              <div class="custom-datatable-filter table-responsive">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th>MODULE</th>
                      <th>LABEL</th>
                      <th>TYPE</th>
                      <th>DEFAULT VALUE</th>
                      <th>REQUIRED/DISABLE</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h6 class="fw-medium">
                          <a href="javascript:void(0);">Drivers</a>
                        </h6>
                      </td>
                      <td>
                        <p class="text-dark">Total Rides</p>
                      </td>
                      <td>
                        <p class="text-dark">Number</p>
                      </td>
                      <td>
                        <p class="text-dark">0</p>
                      </td>
                      <td>
                        <p class="text-dark">Required</p>
                      </td>
                      <td>
                        <span
                          class="badge badge-success-transparent d-inline-flex align-items-center badge-sm"
                        >
                          <i class="ti ti-point-filled me-1"></i>Active
                        </span>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button
                            class="btn btn-icon btn-sm"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </button>
                          <ul class="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_field"
                                ><i class="ti ti-edit me-1"></i>Edit</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_field"
                                ><i class="ti ti-trash me-1"></i>Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="fw-medium">
                          <a href="javascript:void(0);">Maintenance</a>
                        </h6>
                      </td>
                      <td>
                        <p class="text-dark">Fuel</p>
                      </td>
                      <td>
                        <p class="text-dark">Number</p>
                      </td>
                      <td>
                        <p class="text-dark">0</p>
                      </td>
                      <td>
                        <p class="text-dark">Required</p>
                      </td>
                      <td>
                        <span
                          class="badge badge-danger-transparent d-inline-flex align-items-center badge-sm"
                        >
                          <i class="ti ti-point-filled me-1"></i>Inactive
                        </span>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button
                            class="btn btn-icon btn-sm"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </button>
                          <ul class="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_field"
                                ><i class="ti ti-edit me-1"></i>Edit</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_field"
                                ><i class="ti ti-trash me-1"></i>Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="fw-medium">
                          <a href="javascript:void(0);">Inspection</a>
                        </h6>
                      </td>
                      <td>
                        <p class="text-dark">Inspection Type</p>
                      </td>
                      <td>
                        <p class="text-dark">Select</p>
                      </td>
                      <td>
                        <p class="text-dark">Routine</p>
                      </td>
                      <td>
                        <p class="text-dark">Required</p>
                      </td>
                      <td>
                        <span
                          class="badge badge-success-transparent d-inline-flex align-items-center badge-sm"
                        >
                          <i class="ti ti-point-filled me-1"></i>Active
                        </span>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button
                            class="btn btn-icon btn-sm"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </button>
                          <ul class="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_field"
                                ><i class="ti ti-edit me-1"></i>Edit</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_field"
                                ><i class="ti ti-trash me-1"></i>Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Settings Prefix -->
    </div>
    <custom-fields-modal></custom-fields-modal>
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
