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
              <h5>Other Settings</h5>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="mb-3">System Backup</h6>
                <a
                  href="javascript:void(0);"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#generate"
                  >Generate Backup</a
                >
              </div>
              <div class="custom-datatable-filter table-responsive">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th>FILE NAME</th>
                      <th>CREATED ON</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h6 class="fw-semibold fs-14">
                          <a href="javascript:void(0);"
                            >Full_Database_Backup_2024-12-11.sql</a
                          >
                        </h6>
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
                                ><i class="ti ti-restore me-1"></i>Restore</a
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
                        <h6 class="fw-semibold fs-14">
                          <a href="javascript:void(0);"
                            >Full_Database_Backup_2024-10-11.sql</a
                          >
                        </h6>
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
                                ><i class="ti ti-restore me-1"></i>Restore</a
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
                        <h6 class="fw-semibold fs-14">
                          <a href="javascript:void(0);"
                            >Full_Database_Backup_2024-09-11.sql</a
                          >
                        </h6>
                      </td>
                      <td>
                        <p class="text-gray-9">29 Nov 2024</p>
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
                                ><i class="ti ti-restore me-1"></i>Restore</a
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
  <system-backup-modal></system-backup-modal>
</template>
