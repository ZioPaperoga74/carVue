<template>
  <!-- Language Setup -->
  <div class="modal language fade" id="language_setup">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Language Setup</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <div class="modal-body">
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
            <div class="d-flex align-items-center flex-wrap gap-2">
              <a href="javascript:void(0);" class="btn btn-dark me-2"
                ><i class="ti ti-arrow-left me-1"></i>Back to Translations</a
              >
              <a href="javascript:void(0);" class="btn btn-white me-2">
                <img
                  src="@/assets/admin/img/flags/uae.svg"
                  alt="img"
                  class="avatar avatar-sm rounded-circle me-1"
                />
                Arabic
              </a>
              <div class="progress-percent">
                <span class="text-gray-9 fs-10">Progress</span>
                <div class="d-flex align-items-center">
                  <div class="progress progress-xs" style="width: 120px">
                    <div
                      class="progress-bar bg-success rounded"
                      role="progressbar"
                      :style="{ width: progress + '%' }"
                      :aria-valuenow="progress"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span class="d-inline-flex fs-12 ms-2">{{ progress }}%</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Custom Data Table -->
          <div class="custom-datatable-filter table-responsive">
            <table class="table datatable">
              <thead class="thead-light">
                <tr>
                  <th>ENGLISH</th>
                  <th>ARABIC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reservations</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      class="form-control text-end"
                      value="التحفظات"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Calendar</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      class="form-control text-end"
                      value="تقويم"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Quotations</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      class="form-control text-end"
                      value="الاقتباسات"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Enquiries</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      class="form-control text-end"
                      value="الاستفسارات"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Units</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      class="form-control text-end"
                      value="الوحدات"
                    />
                  </td>
                </tr>
                <tr>
                  <td>People</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      class="form-control text-end"
                      value="الناس"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Companies</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      class="form-control text-end"
                      value="شركات"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Drivers</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      class="form-control text-end"
                      value="السائقين"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Locations</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      class="form-control text-end"
                      value="المواقع"
                    />
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
  <!-- /Language Setup -->
</template>
<script>
export default {
  name: "ProgressBar",
  props: {
    progress: {
      type: Number,
      default: 80,
    },
  },
};
</script>
