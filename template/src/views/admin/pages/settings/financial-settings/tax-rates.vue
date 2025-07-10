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
                <div class="border-bottom pb-3">
                  <!-- Table Header -->
                  <div
                    class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3"
                  >
                    <h6>Tax Rates</h6>
                    <div>
                      <div>
                        <a
                          href="javascript:void(0);"
                          class="btn btn-primary d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#add_tax_rate"
                          ><i class="ti ti-plus me-2"></i>Add New Tax Rate</a
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
                          <th>TAX NAME</th>
                          <th>TAX RATE</th>
                          <th>CREATED ON</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p class="text-gray-9 fw-semibold fs-14">VAT</p>
                          </td>
                          <td>
                            <p class="text-gray-9">10%</p>
                          </td>
                          <td>
                            <p class="text-gray-9">24 Jan 2025</p>
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
                                    data-bs-target="#edit_tax_rate"
                                    ><i class="ti ti-edit me-1"></i>Edit</a
                                  >
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item rounded-1"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tax_rate"
                                    ><i class="ti ti-trash me-1"></i>Delete</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="text-gray-9 fw-semibold fs-14">CGST</p>
                          </td>
                          <td>
                            <p class="text-gray-9">08%</p>
                          </td>
                          <td>
                            <p class="text-gray-9">19 Dec 2024</p>
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
                                    data-bs-target="#edit_tax_rate"
                                    ><i class="ti ti-edit me-1"></i>Edit</a
                                  >
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item rounded-1"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tax_rate"
                                    ><i class="ti ti-trash me-1"></i>Delete</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="text-gray-9 fw-semibold fs-14">SGST</p>
                          </td>
                          <td>
                            <p class="text-gray-9">10%</p>
                          </td>
                          <td>
                            <p class="text-gray-9">19 Dec 2024</p>
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
                                    data-bs-target="#edit_tax_rate"
                                    ><i class="ti ti-edit me-1"></i>Edit</a
                                  >
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item rounded-1"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tax_rate"
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
                <div class="pt-3">
                  <!-- Table Header -->
                  <div
                    class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3"
                  >
                    <h6>Tax Group</h6>
                    <div>
                      <div>
                        <a
                          href="javascript:void(0);"
                          class="btn btn-primary d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#add_tax_group"
                          ><i class="ti ti-plus me-2"></i>Add New Tax Group</a
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
                          <th>TAX NAME</th>
                          <th>TAX RATE</th>
                          <th>CREATED ON</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p class="text-gray-9 fw-semibold fs-14">GST</p>
                          </td>
                          <td>
                            <p class="text-gray-9">18%</p>
                          </td>
                          <td>
                            <p class="text-gray-9">20 Dec 2024</p>
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
                                    data-bs-target="#edit_tax_group"
                                    ><i class="ti ti-edit me-1"></i>Edit</a
                                  >
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item rounded-1"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tax_group"
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
  <tax-rates-modal></tax-rates-modal>
</template>
