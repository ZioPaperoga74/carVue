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
            <div class="card-body pb-0">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="mb-3">System Update</h6>
                <a href="javascript:void(0);" class="btn btn-primary"
                  >Check for Updates</a
                >
              </div>
              <div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="d-inline-flex align-items-center justify-content-center p-2 bg-light rounded me-2"
                  >
                    <img
                      src="@/assets/admin/img/icons/check-rotate.svg"
                      alt="img"
                      class="img-fluid"
                    />
                  </span>
                  <div>
                    <div class="d-flex align-items-center">
                      <h6 class="fs-14 me-2">You are up to date</h6>
                      <span class="badge badge-soft-violet badge-md"
                        >Current Version : 8.0</span
                      >
                    </div>
                    <span class="fs-13">Last Checked : Today 10:30 AM</span>
                  </div>
                </div>
                <div
                  class="alert alert-solid-light alert-dismissible fade show d-flex align-items-center"
                >
                  <i class="ti ti-info-circle text-info fs-14 me-2"></i>Before updating,
                  it's best to back up your files and database and review the changelog.
                  <button
                    type="button"
                    class="btn-close text-default"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  >
                    <i class="fas fa-xmark"></i>
                  </button>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Purchase Key<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >User Name<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
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
</template>
