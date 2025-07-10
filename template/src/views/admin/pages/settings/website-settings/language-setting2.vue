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
              <h5 class="fw-bold">Website Settings</h5>
            </div>
            <div class="card-body">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3"
              >
                <h6 class="fw-bold">Language</h6>
                <div class="d-flex align-items-center">
                  <div class="dropdown me-3">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      <i class="ti ti-language me-1"></i>Language
                    </a>
                    <ul class="dropdown-menu dropdown-menu-lg p-2">
                      <li>
                        <label class="dropdown-item d-flex align-items-center rounded-1">
                          English
                        </label>
                      </li>
                      <li>
                        <label class="dropdown-item d-flex align-items-center rounded-1">
                          German
                        </label>
                      </li>
                      <li>
                        <label class="dropdown-item d-flex align-items-center rounded-1">
                          Arabic
                        </label>
                      </li>
                      <li>
                        <label class="dropdown-item d-flex align-items-center rounded-1">
                          French
                        </label>
                      </li>
                    </ul>
                  </div>
                  <a href="javascript:void(0);" class="btn btn-primary"
                    ><i class="ti ti-plus me-1"></i>Add New Language</a
                  >
                </div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3"
              >
                <div
                  class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3"
                >
                  <div class="top-search me-2">
                    <div class="top-search-group">
                      <span class="input-icon">
                        <i class="ti ti-search"></i>
                      </span>
                      <input type="text" class="form-control" placeholder="Search" />
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="btn btn-dark me-2"
                    ><i class="ti ti-arrow-left me-1"></i>Back to Translations</a
                  >
                  <a href="javascript:void(0);" class="btn btn-white">
                    <img
                      src="@/assets/admin/img/flags/uae.svg"
                      alt="img"
                      class="avatar avatar-sm rounded-circle me-1"
                    />
                    Arabic
                  </a>
                </div>
              </div>

              <!-- Custom Data Table -->
              <div class="custom-datatable-filter table-responsive">
                <table class="table datatable">
                  <thead class="thead-light">
                    <tr>
                      <th class="no-sort">
                        <div class="form-check form-check-md">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="select-all"
                          />
                        </div>
                      </th>
                      <th>LANGUAGE</th>
                      <th>TOTAL</th>
                      <th>DONE</th>
                      <th>PROGRESS</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="form-check form-check-md">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <a href="javascript:void(0);" class="fw-semibold">Main</a>
                      </td>
                      <td>1620</td>
                      <td>1296</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-xs" style="width: 120px">
                            <div
                              class="progress-bar bg-success rounded"
                              role="progressbar"
                              style="width: 100%"
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="d-inline-flex fs-12 ms-2">100%</span>
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#language_setup"
                            class="btn btn-white me-1"
                            >Web</a
                          >
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#language_setup"
                            class="btn btn-white me-1"
                            >App</a
                          >
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#language_setup"
                            class="btn btn-white"
                            >Admin</a
                          >
                        </div>
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
                                data-bs-target="#edit_testimonial"
                                ><i class="ti ti-edit me-1"></i>Edit</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_testimonials"
                                ><i class="ti ti-trash me-1"></i>Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check form-check-md">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <a href="javascript:void(0);" class="fw-semibold">Bookings</a>
                      </td>
                      <td>1620</td>
                      <td>972</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-xs" style="width: 120px">
                            <div
                              class="progress-bar bg-pink rounded"
                              role="progressbar"
                              style="width: 70%"
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="d-inline-flex fs-12 ms-2">70%</span>
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#language_setup"
                            class="btn btn-white me-1"
                            >Web</a
                          >
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#language_setup"
                            class="btn btn-white me-1"
                            >App</a
                          >
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#language_setup"
                            class="btn btn-white"
                            >Admin</a
                          >
                        </div>
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
                                data-bs-target="#edit_testimonial"
                                ><i class="ti ti-edit me-1"></i>Edit</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_testimonials"
                                ><i class="ti ti-trash me-1"></i>Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check form-check-md">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <a href="javascript:void(0);" class="fw-semibold">Rentals</a>
                      </td>
                      <td>1620</td>
                      <td>810</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-xs" style="width: 120px">
                            <div
                              class="progress-bar bg-warning rounded"
                              role="progressbar"
                              style="width: 50%"
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="d-inline-flex fs-12 ms-2">50%</span>
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#language_setup"
                            class="btn btn-white me-1"
                            >Web</a
                          >
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#language_setup"
                            class="btn btn-white me-1"
                            >App</a
                          >
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#language_setup"
                            class="btn btn-white"
                            >Admin</a
                          >
                        </div>
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
                                data-bs-target="#edit_testimonial"
                                ><i class="ti ti-edit me-1"></i>Edit</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_testimonials"
                                ><i class="ti ti-trash me-1"></i>Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check form-check-md">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <a href="javascript:void(0);" class="fw-semibold">Others</a>
                      </td>
                      <td>1620</td>
                      <td>324</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-xs" style="width: 120px">
                            <div
                              class="progress-bar bg-danger rounded"
                              role="progressbar"
                              style="width: 30%"
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="d-inline-flex fs-12 ms-2">30%</span>
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#language_setup"
                            class="btn btn-white me-1"
                            >Web</a
                          >
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#language_setup"
                            class="btn btn-white me-1"
                            >App</a
                          >
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#language_setup"
                            class="btn btn-white"
                            >Admin</a
                          >
                        </div>
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
                                data-bs-target="#edit_testimonial"
                                ><i class="ti ti-edit me-1"></i>Edit</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_testimonials"
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
              <!-- Custom Data Table -->
              <!-- <div class="table-footer"></div> -->
            </div>
          </div>
        </div>
      </div>
      <!-- /Settings Prefix -->
    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between bg-white p-3">
      <p class="mb-0">
        <a href="javascript:void(0);">Privacy Policy</a>
        <a href="javascript:void(0);" class="ms-4">Terms of Use</a>
      </p>
      <p>© 2025 Dreamsrent, Made with <span class="text-danger">❤</span> by Dreamsrent</p>
    </div>
  </div>
  <language-setting-modal></language-setting-modal>
</template>
