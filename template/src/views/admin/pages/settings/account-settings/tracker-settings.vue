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
              <h5>Account Settings</h5>
            </div>
            <div class="card-body">
              <div class="tracker-content">
                <h6 class="mb-3">Tacker</h6>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Status <span class="text-danger">*</span></label
                      >
                      <vue-select
                        :options="DisabSel"
                        v-model="selected"
                        placeholder="Select"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label"
                        >URL <span class="text-danger">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label"
                        >User Name <span class="text-danger">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label"
                        >Password <span class="text-danger">*</span></label
                      >
                      <div class="pass-group">
                        <input type="password" class="pass-inputs form-control" />
                        <span class="ti toggle-passwords ti-eye-off"></span>
                      </div>
                    </div>
                    <div class="mb-3">
                      <a href="javascript:void(0);" class="btn btn-dark">Configure</a>
                    </div>
                  </div>
                </div>
                <ul class="tracker-links">
                  <li>
                    <p class="text-truncate">
                      <span class="fw-bold fs-14 text-gray-9">CRON URL : </span
                      >https://example.com/tracker
                    </p>
                  </li>
                  <li>
                    <p class="text-truncate">
                      <span class="fw-bold fs-14 text-gray-9">CRON COMMAND : </span>0 * *
                      * * /path/to/car_tracker_script.sh
                    </p>
                  </li>
                  <li>
                    <p class="text-truncate text-info">Run Cron Manually</p>
                  </li>
                </ul>
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
<script>
export default {
  data() {
    return {
      selected: [],
      DisabSel: [
        {label: "Select", value: "Select"}, 
        {label: "Enabled", value: "Enabled"}, 
        {label: "Disabled", value: "Disabled"}
      ],
    };
  },
};
</script>
