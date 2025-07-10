<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <div class="page-wrapper">
    <div class="content me-0 pb-0 me-lg-4">
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
          <div class="card">
            <div class="card-header">
              <h5 class="fw-bold">Website Settings</h5>
            </div>
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-3">
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
              <div class="d-flex align-items-center justify-content-between mb-3">
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
                <a href="javascript:void(0);" class="btn btn-dark"
                  ><i class="ti ti-download me-1"></i>Import Sample</a
                >
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
                      <th>CODE</th>
                      <th>RTL</th>
                      <th>DEFAULT</th>
                      <th>TOTAL</th>
                      <th>DONE</th>
                      <th>PROGRESS</th>
                      <th>STATUS</th>
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
                        <div class="d-flex align-items-center">
                          <router-link to="language-setting2" class="me-2"
                            ><img
                              src="@/assets/admin/img/flags/usa.svg"
                              alt="img"
                              class="avatar avatar-md rounded-circle"
                          /></router-link>
                          <router-link to="language-setting2" class="fw-semibold"
                            >English</router-link
                          >
                        </div>
                      </td>
                      <td>en</td>
                      <td>
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </td>
                      <td>1620</td>
                      <td>1296</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="circle-progress" data-value="80">
                            <span class="progress-left">
                              <span class="progress-bar border-warning"></span>
                            </span>
                            <span class="progress-right">
                              <span class="progress-bar border-warning"></span>
                            </span>
                          </div>
                          <div class="progress-value ms-2">80%</div>
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <router-link to="language-setting2" class="btn btn-white me-1"
                            >Web</router-link
                          >
                          <router-link to="language-setting2" class="btn btn-white me-1"
                            >App</router-link
                          >
                          <router-link to="language-setting2" class="btn btn-white"
                            >Admin</router-link
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
                        <div class="d-flex align-items-center">
                          <router-link to="language-setting2" class="me-2"
                            ><img
                              src="@/assets/admin/img/flags/germany.svg"
                              alt="img"
                              class="avatar avatar-md rounded-circle"
                          /></router-link>
                          <router-link to="language-setting2" class="fw-semibold"
                            >German</router-link
                          >
                        </div>
                      </td>
                      <td>de</td>
                      <td>
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </td>
                      <td>1620</td>
                      <td>972</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="circle-progress" data-value="70">
                            <span class="progress-left">
                              <span class="progress-bar border-skyblue"></span>
                            </span>
                            <span class="progress-right">
                              <span class="progress-bar border-skyblue"></span>
                            </span>
                          </div>
                          <div class="progress-value ms-2">70%</div>
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <router-link to="language-setting2" class="btn btn-white me-1"
                            >Web</router-link
                          >
                          <router-link to="language-setting2" class="btn btn-white me-1"
                            >App</router-link
                          >
                          <router-link to="language-setting2" class="btn btn-white"
                            >Admin</router-link
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
                        <div class="d-flex align-items-center">
                          <router-link to="language-setting2" class="me-2"
                            ><img
                              src="@/assets/admin/img/flags/uae.svg"
                              alt="img"
                              class="avatar avatar-md rounded-circle"
                          /></router-link>
                          <router-link to="language-setting2" class="fw-semibold"
                            >Arabic</router-link
                          >
                        </div>
                      </td>
                      <td>ar</td>
                      <td>
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </td>
                      <td>1620</td>
                      <td>810</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="circle-progress" data-value="50">
                            <span class="progress-left">
                              <span class="progress-bar border-purple"></span>
                            </span>
                            <span class="progress-right">
                              <span class="progress-bar border-purple"></span>
                            </span>
                          </div>
                          <div class="progress-value ms-2">50%</div>
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <router-link to="language-setting2" class="btn btn-white me-1"
                            >Web</router-link
                          >
                          <router-link to="language-setting2" class="btn btn-white me-1"
                            >App</router-link
                          >
                          <router-link to="language-setting2" class="btn btn-white"
                            >Admin</router-link
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
                        <div class="d-flex align-items-center">
                          <router-link to="language-setting2" class="me-2"
                            ><img
                              src="@/assets/admin/img/flags/france.svg"
                              alt="img"
                              class="avatar avatar-md rounded-circle"
                          /></router-link>
                          <router-link to="language-setting2" class="fw-semibold"
                            >French</router-link
                          >
                        </div>
                      </td>
                      <td>fr</td>
                      <td>
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </td>
                      <td>1620</td>
                      <td>324</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="circle-progress" data-value="20">
                            <span class="progress-left">
                              <span class="progress-bar border-danger"></span>
                            </span>
                            <span class="progress-right">
                              <span class="progress-bar border-danger"></span>
                            </span>
                          </div>
                          <div class="progress-value ms-2">20%</div>
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-check-md form-switch">
                          <input
                            class="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <router-link to="language-setting2" class="btn btn-white me-1"
                            >Web</router-link
                          >
                          <router-link to="language-setting2" class="btn btn-white me-1"
                            >App</router-link
                          >
                          <router-link to="language-setting2" class="btn btn-white"
                            >Admin</router-link
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
            </div>
          </div>
        </div>
      </div>
      <!-- /Settings Prefix -->
    </div>
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
