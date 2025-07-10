<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <!-- Page Wrapper -->
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
              <h5>Account Settings</h5>
            </div>
            <div class="card-body">
              <div class="security-content">
                <h6 class="mb-3">Security</h6>
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row gy-3 align-items-center">
                      <div class="col-lg-9">
                        <div class="row gy-3 align-items-center">
                          <div class="col-md-6">
                            <div>
                              <h6 class="fs-14 fw-medium">Password</h6>
                              <p class="fs-13">
                                Set a unique password to secure the account
                              </p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div>
                              <p>
                                <i class="ti ti-circle-check-filled text-success me-1"></i
                                >Last Changed 22 Jan 2025, 10:30 AM
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex justify-content-lg-end">
                          <a
                            href="javascript:void(0);"
                            class="btn btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#change_password"
                            >Change</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row gy-3 align-items-center">
                      <div class="col-lg-9">
                        <div class="row gy-3 align-items-center">
                          <div class="col-md-6">
                            <div>
                              <h6 class="fs-14 fw-medium">Google Authentication</h6>
                              <p class="fs-13">Connect to Google</p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="d-flex align-items-center">
                              <span
                                class="badge badge-outline d-inline-flex align-items-center badge-sm"
                              >
                                <i class="ti ti-point-filled text-success"></i
                                >Connected</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex justify-content-end">
                          <div class="form-check form-check-md form-switch">
                            <input
                              class="form-check-input form-label"
                              type="checkbox"
                              role="switch"
                              checked
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row gy-3 align-items-center">
                      <div class="col-lg-9">
                        <div class="row gy-3 align-items-center">
                          <div class="col-md-6">
                            <div>
                              <h6 class="fs-14 fw-medium">Phone Number Verification</h6>
                              <p class="fs-13">Connect to Google</p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div>
                              <p>
                                <i class="ti ti-circle-check-filled text-success me-1"></i
                                >Verified Mobile Number : +1 648 349 1782
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex justify-content-lg-end">
                          <a href="javascript:void(0);" class="btn btn-light me-2"
                            >Remove</a
                          >
                          <a
                            href="javascript:void(0);"
                            class="btn btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#change_phonenumber"
                            >Change</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row gy-3 align-items-center">
                      <div class="col-lg-9">
                        <div class="row gy-3 align-items-center">
                          <div class="col-md-6">
                            <div>
                              <h6 class="fs-14 fw-medium">Email Verification</h6>
                              <p class="fs-13">The Email associated with the account</p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div>
                              <p>
                                <i class="ti ti-circle-check-filled text-success me-1"></i
                                >Verified Email : info@example.com
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex justify-content-lg-end">
                          <a href="javascript:void(0);" class="btn btn-light me-2"
                            >Remove</a
                          >
                          <a
                            href="javascript:void(0);"
                            class="btn btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#change_email"
                            >Change</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row gy-3 align-items-center">
                      <div class="col-lg-9">
                        <div>
                          <h6 class="fs-14 fw-medium">Deactivate Account</h6>
                          <p class="fs-13">
                            This will shutdown your account. Your account will be reactive
                            when you sign in again
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex justify-content-lg-end">
                          <a href="javascript:void(0);" class="btn btn-dark"
                            >Deactivate</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row gy-3 align-items-center">
                      <div class="col-lg-9">
                        <div>
                          <h6 class="fs-14 fw-medium">Delete Account</h6>
                          <p class="fs-13">Your account will be permanently deleted</p>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex justify-content-lg-end">
                          <a
                            href="javascript:void(0);"
                            class="btn btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_account"
                            >Delete</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-0">
                  <div class="card-body">
                    <div class="mb-3">
                      <div class="row gy-3 align-items-center">
                        <div class="col-lg-9">
                          <div>
                            <h6 class="fs-14 fw-medium">Browsers & Devices</h6>
                            <p class="fs-13">
                              The browsers & devices associated with the account
                            </p>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div class="d-flex justify-content-lg-end">
                            <a href="javascript:void(0);" class="btn btn-dark"
                              >Sign out from all</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="custom-datatable-filter table-responsive brandstable security-table"
                    >
                      <table class="table datatable">
                        <thead class="thead-light">
                          <tr>
                            <th>DEVICE</th>
                            <th>DATE</th>
                            <th>IP ADDRESS</th>
                            <th>LOCATION</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h6 class="fs-14">Chrome - Windows</h6>
                            </td>
                            <td>
                              <p class="text-gray-9">24 Jan 2025, 10:00 AM</p>
                            </td>
                            <td>
                              <p class="text-gray-9">232.222.12.72</p>
                            </td>
                            <td>
                              <p class="text-gray-9">New York / USA</p>
                            </td>
                            <td>
                              <div class="action-btn">
                                <a href="javascript:void(0);" class="p-1"
                                  ><i class="ti ti-logout text-dark"></i
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 class="fs-14">Safari Macos</h6>
                            </td>
                            <td>
                              <p class="text-gray-9">19 Dec 2024, 09:30 AM</p>
                            </td>
                            <td>
                              <p class="text-gray-9">224.111.12.75</p>
                            </td>
                            <td>
                              <p class="text-gray-9">New York / USA</p>
                            </td>
                            <td>
                              <div class="action-btn">
                                <a href="javascript:void(0);" class="p-1"
                                  ><i class="ti ti-logout text-dark"></i
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 class="fs-14">Firefox Windows</h6>
                            </td>
                            <td>
                              <p class="text-gray-9">11 Dec 2024, 05:20 PM</p>
                            </td>
                            <td>
                              <p class="text-gray-9">111.222.13.28</p>
                            </td>
                            <td>
                              <p class="text-gray-9">New York / USA</p>
                            </td>
                            <td>
                              <div class="action-btn">
                                <a href="javascript:void(0);" class="p-1"
                                  ><i class="ti ti-logout text-dark"></i
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 class="fs-14">Safari Macos</h6>
                            </td>
                            <td>
                              <p class="text-gray-9">29 Nov 2024, 04:45 PM</p>
                            </td>
                            <td>
                              <p class="text-gray-9">333.555.10.54</p>
                            </td>
                            <td>
                              <p class="text-gray-9">New York / USA</p>
                            </td>
                            <td>
                              <div class="action-btn">
                                <a href="javascript:void(0);" class="p-1"
                                  ><i class="ti ti-logout text-dark"></i
                                ></a>
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
  <!-- /Page Wrapper -->
  <security-setting-modal></security-setting-modal>
</template>
