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
              <h5 class="fw-bold">App Settings</h5>
            </div>
            <div class="card-body pb-0">
              <h6 class="fw-bold mb-3">Invoice Template</h6>
              <div class="row gx-3">
                <div class="col-md-3">
                  <div class="card invoice-template">
                    <div class="card-body p-2">
                      <div class="invoice-img">
                        <a href="#">
                          <img
                            src="@/assets/admin/img/invoice/invoice-01.svg"
                            alt="invoice"
                          />
                        </a>
                        <a
                          href="#"
                          class="invoice-view-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#invoice_view_1"
                          ><i class="ti ti-eye"></i
                        ></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <a href="javascript:void(0);" class="text-gray-9"
                          >General Invoice 1</a
                        >
                        <a
                          href="javascript:void(0);"
                          class="invoice-star d-flex align-items-center justify-content-center"
                        >
                          <i class="ti ti-star fs-8"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card invoice-template">
                    <div class="card-body p-2">
                      <div class="invoice-img">
                        <a href="#">
                          <img
                            src="@/assets/admin/img/invoice/invoice-02.svg"
                            alt="invoice"
                          />
                        </a>
                        <a
                          href="#"
                          class="invoice-view-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#invoice_view_2"
                          ><i class="ti ti-eye"></i
                        ></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <a href="javascript:void(0);" class="text-gray-9"
                          >General Invoice 2</a
                        >
                        <a
                          href="javascript:void(0);"
                          class="invoice-star d-flex align-items-center justify-content-center"
                        >
                          <i class="ti ti-star fs-8"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card invoice-template">
                    <div class="card-body p-2">
                      <div class="invoice-img">
                        <a href="#">
                          <img
                            src="@/assets/admin/img/invoice/invoice-03.svg"
                            alt="invoice"
                          />
                        </a>
                        <a
                          href="#"
                          class="invoice-view-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#invoice_view_3"
                          ><i class="ti ti-eye"></i
                        ></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <a href="javascript:void(0);" class="text-gray-9"
                          >General Invoice 3</a
                        >
                        <a
                          href="javascript:void(0);"
                          class="invoice-star d-flex align-items-center justify-content-center"
                        >
                          <i class="ti ti-star fs-8"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card invoice-template">
                    <div class="card-body p-2">
                      <div class="invoice-img">
                        <a href="#">
                          <img
                            src="@/assets/admin/img/invoice/invoice-04.svg"
                            alt="invoice"
                          />
                        </a>
                        <a
                          href="#"
                          class="invoice-view-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#invoice_view_4"
                          ><i class="ti ti-eye"></i
                        ></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <a href="javascript:void(0);" class="text-gray-9"
                          >General Invoice 4</a
                        >
                        <a
                          href="javascript:void(0);"
                          class="invoice-star d-flex align-items-center justify-content-center"
                        >
                          <i class="ti ti-star fs-8"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  <invoice-template-modal></invoice-template-modal>
</template>
