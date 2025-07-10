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
              <h5>System Settings</h5>
            </div>
            <div class="card-body">
              <div class="payment-section">
                <!-- Table Header -->
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3"
                >
                  <h6>Currencies</h6>
                  <div>
                    <div>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-primary d-flex align-items-center"
                        data-bs-toggle="modal"
                        data-bs-target="#add_currency"
                        ><i class="ti ti-plus me-2"></i>Add New Currency</a
                      >
                    </div>
                  </div>
                </div>
                <!-- /Table Header -->
                <!-- Custom Data Table -->
                <div
                  class="custom-datatable-filter table-responsive brandstable country-table"
                >
                  <table class="table datatable">
                    <thead class="thead-light">
                      <tr>
                        <th>CURRENCY</th>
                        <th>CODE</th>
                        <th>SYMBOL</th>
                        <th>EXCHANGE RATE</th>
                        <th>STATUS</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p class="text-gray-9 fw-semibold fs-14">Dhirams</p>
                        </td>
                        <td>
                          <p class="text-gray-9">AED</p>
                        </td>
                        <td>
                          <p class="text-gray-9">د.إ</p>
                        </td>
                        <td>
                          <p class="text-gray-9">3.67</p>
                        </td>
                        <td>
                          <span
                            class="badge badge-outline d-inline-flex align-items-center badge-sm"
                          >
                            <i class="ti ti-point-filled me-1 text-success"></i
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
                                  data-bs-target="#edit_currencies"
                                  ><i class="ti ti-edit me-1"></i>Edit</a
                                >
                              </li>
                              <li>
                                <a
                                  class="dropdown-item rounded-1"
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_currencies"
                                  ><i class="ti ti-trash me-1"></i>Delete</a
                                >
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p class="text-gray-9 fw-semibold fs-14">Rupee</p>
                        </td>
                        <td>
                          <p class="text-gray-9">INR</p>
                        </td>
                        <td>
                          <p class="text-gray-9">₹</p>
                        </td>
                        <td>
                          <p class="text-gray-9">86.62</p>
                        </td>
                        <td>
                          <span
                            class="badge badge-outline d-inline-flex align-items-center badge-sm"
                          >
                            <i class="ti ti-point-filled me-1 text-success"></i
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
                                  data-bs-target="#edit_currencies"
                                  ><i class="ti ti-edit me-1"></i>Edit</a
                                >
                              </li>
                              <li>
                                <a
                                  class="dropdown-item rounded-1"
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_currencies"
                                  ><i class="ti ti-trash me-1"></i>Delete</a
                                >
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p class="text-gray-9 fw-semibold fs-14">Pound</p>
                        </td>
                        <td>
                          <p class="text-gray-9">GBP</p>
                        </td>
                        <td>
                          <p class="text-gray-9">£</p>
                        </td>
                        <td>
                          <p class="text-gray-9">0.81</p>
                        </td>
                        <td>
                          <span
                            class="badge badge-outline d-inline-flex align-items-center badge-sm"
                          >
                            <i class="ti ti-point-filled me-1 text-success"></i
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
                                  data-bs-target="#edit_currencies"
                                  ><i class="ti ti-edit me-1"></i>Edit</a
                                >
                              </li>
                              <li>
                                <a
                                  class="dropdown-item rounded-1"
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_currencies"
                                  ><i class="ti ti-trash me-1"></i>Delete</a
                                >
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p class="text-gray-9 fw-semibold fs-14">Euro</p>
                        </td>
                        <td>
                          <p class="text-gray-9">EUR</p>
                        </td>
                        <td>
                          <p class="text-gray-9">€</p>
                        </td>
                        <td>
                          <p class="text-gray-9">0.96</p>
                        </td>
                        <td>
                          <span
                            class="badge badge-outline d-inline-flex align-items-center badge-sm"
                          >
                            <i class="ti ti-point-filled me-1 text-success"></i
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
                                  data-bs-target="#edit_currencies"
                                  ><i class="ti ti-edit me-1"></i>Edit</a
                                >
                              </li>
                              <li>
                                <a
                                  class="dropdown-item rounded-1"
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_currencies"
                                  ><i class="ti ti-trash me-1"></i>Delete</a
                                >
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p class="text-gray-9 fw-semibold fs-14">Dollar</p>
                        </td>
                        <td>
                          <p class="text-gray-9">USD</p>
                        </td>
                        <td>
                          <p class="text-gray-9">$</p>
                        </td>
                        <td>
                          <p class="text-gray-9">01</p>
                        </td>
                        <td>
                          <span
                            class="badge badge-outline d-inline-flex align-items-center badge-sm"
                          >
                            <i class="ti ti-point-filled me-1 text-success"></i
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
                                  data-bs-target="#edit_currencies"
                                  ><i class="ti ti-edit me-1"></i>Edit</a
                                >
                              </li>
                              <li>
                                <a
                                  class="dropdown-item rounded-1"
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_currencies"
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
                <!-- Custome Data Tabel -->
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
  <currencies-modal></currencies-modal>
</template>
