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
          <h4 class="mb-1">Settings</h4>
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
            <form action="#">
              <div class="card-body pb-1">
                <h6 class="fw-bold mb-3">Prefixes</h6>
                <div class="row">
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Reservations</label>
                      <div class="input-group d-flex align-items-center mb-3">
                        <span class="input-group-text border-end-0 fs-14 pe-1"
                          >RES -</span
                        >
                        <input
                          type="text"
                          class="form-control border-start-0 ps-0"
                          aria-label="Username"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Reservations</label>
                      <div class="input-group d-flex align-items-center mb-3">
                        <span class="input-group-text border-end-0 fs-14 pe-1"
                          >QUO -</span
                        >
                        <input
                          type="text"
                          class="form-control border-start-0 ps-0"
                          aria-label="Username"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Enquiries</label>
                      <div class="input-group d-flex align-items-center mb-3">
                        <span class="input-group-text border-end-0 fs-14 pe-1"
                          >ENQ -</span
                        >
                        <input
                          type="text"
                          class="form-control border-start-0 ps-0"
                          aria-label="Username"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Companies</label>
                      <div class="input-group d-flex align-items-center mb-3">
                        <span class="input-group-text border-end-0 fs-14 pe-1"
                          >COM -</span
                        >
                        <input
                          type="text"
                          class="form-control border-start-0 ps-0"
                          aria-label="Username"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Inspections</label>
                      <div class="input-group d-flex align-items-center mb-3">
                        <span class="input-group-text border-end-0 fs-14 pe-1"
                          >INS -</span
                        >
                        <input
                          type="text"
                          class="form-control border-start-0 ps-0"
                          aria-label="Username"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Invoice</label>
                      <div class="input-group d-flex align-items-center mb-3">
                        <span class="input-group-text border-end-0 fs-14 pe-1"
                          >INV -</span
                        >
                        <input
                          type="text"
                          class="form-control border-start-0 ps-0"
                          aria-label="Username"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Reports</label>
                      <div class="input-group d-flex align-items-center mb-3">
                        <span class="input-group-text border-end-0 fs-14 pe-1"
                          >REP -</span
                        >
                        <input
                          type="text"
                          class="form-control border-start-0 ps-0"
                          aria-label="Username"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Customers</label>
                      <div class="input-group d-flex align-items-center mb-3">
                        <span class="input-group-text border-end-0 fs-14 pe-1"
                          >CUS -</span
                        >
                        <input
                          type="text"
                          class="form-control border-start-0 ps-0"
                          aria-label="Username"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-end">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    >Cancel</a
                  >
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
              </div>
            </form>
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
