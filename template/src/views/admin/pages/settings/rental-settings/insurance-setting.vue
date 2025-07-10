<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <div class="page-wrapper">
    <div class="content me-4 pb-0">
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

      <div class="row">
        <div class="col-xl-3">
          <!-- inner sidebar -->
          <adminsettings-sidebar></adminsettings-sidebar>
          <!-- /inner sidebar -->
        </div>
        <div class="col-xl-9">
          <div class="card">
            <div class="card-header">
              <h5>Rental Settings</h5>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="mb-3">Insurance</h6>
                <div class="d-flex align-items-center">
                  <div class="top-search me-2">
                    <div class="top-search-group">
                      <span class="input-icon">
                        <i class="ti ti-search"></i>
                      </span>
                      <input type="text" class="form-control" placeholder="Search" />
                    </div>
                  </div>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add-insurance"
                    ><i class="ti ti-plus me-1"></i>Add Insurance</a
                  >
                </div>
              </div>
              <div class="custom-datatable-filter table-responsive">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th>INSURANCE NAME</th>
                      <th>PRICE</th>
                      <th>BENEFITS</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h6 class="fw-medium fs-14">Full Premium Insurance</h6>
                      </td>
                      <td>$200</td>
                      <td>
                        <div class="d-flex align-items-center">
                          4 Benefits
                          <a
                            href="javascript:void(0);"
                            class="btn btn-xs btn-info-light border-info fs-14 py-0 px-1 ms-1"
                            data-bs-toggle="modal"
                            data-bs-target="#view-benifits"
                            ><i class="ti ti-external-link"></i
                          ></a>
                        </div>
                      </td>
                      <td>
                        <span
                          class="badge badge-dark-transparent d-inline-flex align-items-center"
                          ><i class="ti ti-point-filled text-success me-1"></i
                          >Active</span
                        >
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
                                data-bs-target="#edit-insurance"
                                ><i class="ti ti-edit me-1"></i>Edit</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_backup"
                                ><i class="ti ti-trash me-1"></i>Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="fw-medium fs-14">Roadside Assistance</h6>
                      </td>
                      <td>$250</td>
                      <td>
                        <div class="d-flex align-items-center">
                          6 Benefits
                          <a
                            href="javascript:void(0);"
                            class="btn btn-xs btn-info-light border-info fs-14 py-0 px-1 ms-1"
                            data-bs-toggle="modal"
                            data-bs-target="#view-benifits"
                            ><i class="ti ti-external-link"></i
                          ></a>
                        </div>
                      </td>
                      <td>
                        <span
                          class="badge badge-dark-transparent d-inline-flex align-items-center"
                          ><i class="ti ti-point-filled text-success me-1"></i
                          >Active</span
                        >
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
                                data-bs-target="#edit-insurance"
                                ><i class="ti ti-edit me-1"></i>Edit</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_backup"
                                ><i class="ti ti-trash me-1"></i>Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="fw-medium fs-14">Liability Insurance</h6>
                      </td>
                      <td>$150</td>
                      <td>
                        <div class="d-flex align-items-center">
                          3 Benefits
                          <a
                            href="javascript:void(0);"
                            class="btn btn-xs btn-info-light border-info fs-14 py-0 px-1 ms-1"
                            data-bs-toggle="modal"
                            data-bs-target="#view-benifits"
                            ><i class="ti ti-external-link"></i
                          ></a>
                        </div>
                      </td>
                      <td>
                        <span
                          class="badge badge-dark-transparent d-inline-flex align-items-center"
                          ><i class="ti ti-point-filled text-danger me-1"></i
                          >Inctive</span
                        >
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
                                data-bs-target="#edit-insurance"
                                ><i class="ti ti-edit me-1"></i>Edit</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_backup"
                                ><i class="ti ti-trash me-1"></i>Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="fw-medium fs-14">Personal Accident Insurance</h6>
                      </td>
                      <td>$300</td>
                      <td>
                        <div class="d-flex align-items-center">
                          3 Benefits
                          <a
                            href="javascript:void(0);"
                            class="btn btn-xs btn-info-light border-info fs-14 py-0 px-1 ms-1"
                            data-bs-toggle="modal"
                            data-bs-target="#view-benifits"
                            ><i class="ti ti-external-link"></i
                          ></a>
                        </div>
                      </td>
                      <td>
                        <span
                          class="badge badge-dark-transparent d-inline-flex align-items-center"
                          ><i class="ti ti-point-filled text-success me-1"></i
                          >Active</span
                        >
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
                                data-bs-target="#edit-insurance"
                                ><i class="ti ti-edit me-1"></i>Edit</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_backup"
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
    </div>

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
  </div>
  <insurance-modal></insurance-modal>
</template>
