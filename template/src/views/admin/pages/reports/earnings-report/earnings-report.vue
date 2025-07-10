<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <div class="page-wrapper">
    <div class="content me-4">
      <!-- Breadcrumb -->
      <div
        class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3"
      >
        <div class="my-auto mb-2">
          <h2 class="mb-1">Earnings Reports</h2>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Reports</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2 me-2">
            <a href="javascript:void(0);" class="btn btn-white d-flex align-items-center"
              ><i class="ti ti-printer me-2"></i>Print</a
            >
          </div>
          <div class="mb-2">
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-dark d-inline-flex align-items-center"
              >
                <i class="ti ti-upload me-1"></i>Export
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Charts -->
      <div class="row">
        <!-- Total Earnings -->
        <div class="col-xl-12 d-flex">
          <div class="row flex-fill earnings-report">
            <div class="col-md-6 col-xl-3 d-flex">
              <div class="card flex-fill position-relative">
                <div class="card-body">
                  <div
                    class="d-flex align-items-center justify-content-between pb-2 border-bottom border-gray"
                  >
                    <div>
                      <span class="fs-14 fw-normal text-truncate mb-1"
                        >Total Earnings</span
                      >
                      <h5>$45,000</h5>
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="avatar avatar-md avatar-rounded bg-orange border border-primary"
                    >
                      <span class="text-primary"
                        ><i class="ti ti-currency-dollar text-white"></i
                      ></span>
                    </a>
                  </div>
                  <p
                    class="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate mt-2"
                  >
                    <span class="text-success fs-12 d-flex align-items-center me-1">
                      <i class="ti ti-arrow-wave-right-up me-1"></i>+12%
                    </span>
                    from Last Month
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-3 d-flex">
              <div class="card flex-fill position-relative">
                <div class="card-body">
                  <div
                    class="d-flex align-items-center justify-content-between pb-2 border-bottom border-gray"
                  >
                    <div>
                      <span class="fs-14 fw-normal text-truncate mb-1"
                        >Revenue Breakdown</span
                      >
                      <h5>$11,000</h5>
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="avatar avatar-md avatar-rounded bg-success border border-success"
                    >
                      <span class="text-primary"
                        ><i class="ti ti-chart-donut-4 text-white"></i
                      ></span>
                    </a>
                  </div>
                  <p
                    class="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate mt-2"
                  >
                    <span class="text-success fs-12 d-flex align-items-center me-1">
                      <i class="ti ti-arrow-wave-right-up me-1"></i>+21.99%
                    </span>
                    from Last Month
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-3 d-flex">
              <div class="card flex-fill position-relative">
                <div class="card-body">
                  <div
                    class="d-flex align-items-center justify-content-between pb-2 border-bottom border-gray"
                  >
                    <div>
                      <span class="fs-14 fw-normal text-truncate mb-1">Net Profit</span>
                      <h5>$34,000</h5>
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="avatar avatar-md avatar-rounded bg-info border border-info"
                    >
                      <span class="text-primary"
                        ><i class="ti ti-stairs-up text-white"></i
                      ></span>
                    </a>
                  </div>
                  <p
                    class="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate mt-2"
                  >
                    <span class="text-success fs-12 d-flex align-items-center me-1">
                      <i class="ti ti-arrow-wave-right-up me-1"></i>+19.26%
                    </span>
                    from Last Month
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-3 d-flex">
              <div class="card flex-fill position-relative">
                <div class="card-body">
                  <div
                    class="d-flex align-items-center justify-content-between pb-2 border-bottom border-gray"
                  >
                    <div>
                      <span class="fs-14 fw-normal text-truncate mb-1"
                        >Top Performing Vehicles</span
                      >
                      <h5>Tesla: $950</h5>
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="avatar avatar-md avatar-rounded bg-danger border border-danger"
                    >
                      <span class="text-primary"
                        ><i class="ti ti-car text-white"></i
                      ></span>
                    </a>
                  </div>
                  <p
                    class="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate mt-2"
                  >
                    <span class="text-success fs-12 d-flex align-items-center me-1">
                      <i class="ti ti-arrow-wave-right-up me-1"></i>+19.26%
                    </span>
                    from Last Month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Total Earnings -->

        <!-- Total Earnings -->
        <div class="col-xl-8 d-flex">
          <div class="card flex-fill earnings-chart">
            <div class="card-header border-0 pb-0">
              <div class="d-flex flex-wrap justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <span
                    class="avatar avatar-md avatar-rounded bg-orange-transparent border-orange me-2"
                    ><i class="ti ti-currency-dollar text-orange"></i
                  ></span>
                  <h5>Total Earnings</h5>
                </div>
                <div class="earning-square d-flex align-items-center">
                  <span class="me-2"></span>
                  <p class="fs-12 text-gray-5">Earnings</p>
                </div>
              </div>
            </div>
            <div class="card-body py-0">
              <div id="expense-analysis">
                <apexchart
                  type="area"
                  height="247"
                  :options="expenseAnalysis.analysisChart"
                  :series="expenseAnalysis.series"
                >
                </apexchart>
              </div>
            </div>
          </div>
        </div>
        <!-- /Total Earnings -->

        <!-- Total Earnings -->
        <div class="col-xl-4 d-flex">
          <div class="card flex-fill earnings-chart">
            <div class="card-header border-0 pb-0">
              <div class="d-flex flex-wrap justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <span
                    class="avatar avatar-md avatar-rounded bg-success-transparent border-success me-2"
                    ><i class="ti ti-currency-dollar text-success"></i
                  ></span>
                  <h5>Earnings Breakdown</h5>
                </div>
              </div>
            </div>
            <div class="card-body py-0">
              <div id="project-report">
                <apexchart
                  type="pie"
                  width="171"
                  :options="projectReport.projectChart"
                  :series="projectReport.series"
                >
                </apexchart>
              </div>
              <div>
                <ul class="breakdown-reports">
                  <li>
                    <p class="text-gray-9 fs-10 d-flex align-items-center mb-0">
                      <i class="ti ti-point-filled text-purple"></i>Rental Charges
                    </p>
                    <span class="fs-10 text-gray-5">$11,000</span>
                  </li>
                  <li>
                    <p class="text-gray-9 fs-10 d-flex align-items-center mb-0">
                      <i class="ti ti-point-filled text-orange"></i>Late Fees & Extras
                    </p>
                    <span class="fs-10 text-gray-5">$2,500</span>
                  </li>
                  <li>
                    <p class="text-gray-9 fs-10 d-flex align-items-center mb-0">
                      <i class="ti ti-point-filled text-teal"></i>Maintenance Charges
                      Collected
                    </p>
                    <span class="fs-10 text-gray-5">$1,500</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- /Total Earnings -->
      </div>
      <!-- /Charts -->

      <!-- Table Header -->
      <div>
        <h5 class="mb-3">Earnings</h5>
        <div
          class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3"
        >
          <div class="d-flex align-items-center flex-wrap row-gap-3">
            <div class="dropdown me-2">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i class="ti ti-filter me-1"></i> Sort By : Latest
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-2">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Latest</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Ascending</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Desending</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Last Month</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Last 7 Days</a
                  >
                </li>
              </ul>
            </div>
            <div class="me-2">
              <div class="input-icon-start position-relative topdatepicker">
                <span class="input-icon-addon">
                  <i class="ti ti-calendar"></i>
                </span>
                <input
                  type="text"
                  class="form-control date-range bookingrange"
                  ref="dateRangeInput"
                  placeholder="dd/mm/yyyy - dd/mm/yyyy"
                />
              </div>
            </div>
            <div class="dropdown">
              <a
                href="#filtercollapse"
                class="filtercollapse coloumn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="filtercollapse"
              >
                <i class="ti ti-filter me-1"></i> Filter
                <span class="badge badge-xs rounded-pill bg-danger ms-2">0</span>
              </a>
            </div>
          </div>
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
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i class="ti ti-layout-board me-1"></i> Columns
              </a>
              <div class="dropdown-menu dropdown-menu-lg p-2">
                <ul>
                  <li>
                    <div
                      class="dropdown-item d-flex align-items-center justify-content-between rounded-1"
                    >
                      <span class="d-inline-flex align-items-center"
                        ><i class="ti ti-grip-vertical me-1"></i>INVOICE NO</span
                      >
                      <div class="form-check form-check-sm form-switch mb-0">
                        <input
                          class="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          checked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="dropdown-item d-flex align-items-center justify-content-between rounded-1"
                    >
                      <span><i class="ti ti-grip-vertical me-1"></i>NAME</span>
                      <div class="form-check form-check-sm form-switch mb-0">
                        <input
                          class="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          checked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="dropdown-item d-flex align-items-center justify-content-between rounded-1"
                    >
                      <span><i class="ti ti-grip-vertical me-1"></i>AMOUNT</span>
                      <div class="form-check form-check-sm form-switch mb-0">
                        <input
                          class="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          checked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="dropdown-item d-flex align-items-center justify-content-between rounded-1"
                    >
                      <span><i class="ti ti-grip-vertical me-1"></i>PAYMENT METHOD</span>
                      <div class="form-check form-check-sm form-switch mb-0">
                        <input
                          class="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          checked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="dropdown-item d-flex align-items-center justify-content-between rounded-1"
                    >
                      <span><i class="ti ti-grip-vertical me-1"></i>DATE</span>
                      <div class="form-check form-check-sm form-switch mb-0">
                        <input
                          class="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          checked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="dropdown-item d-flex align-items-center justify-content-between rounded-1"
                    >
                      <span><i class="ti ti-grip-vertical me-1"></i>STATUS</span>
                      <div class="form-check form-check-sm form-switch mb-0">
                        <input
                          class="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          checked
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- /Table Header -->

      <div class="collapse" id="filtercollapse">
        <div class="filterbox mb-3 d-flex align-items-center">
          <h6 class="me-3">Filters</h6>
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              Payment Method
            </a>
            <ul class="dropdown-menu dropdown-menu-lg p-2">
              <li>
                <div class="top-search m-2">
                  <div class="top-search-group">
                    <span class="input-icon">
                      <i class="ti ti-search"></i>
                    </span>
                    <input type="text" class="form-control" placeholder="Search" />
                  </div>
                </div>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Credit Card
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Debit Card
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />PayPal
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Bank Transfer
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Digital
                  Payment
                </label>
              </li>
            </ul>
          </div>

          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              Status
            </a>
            <ul class="dropdown-menu dropdown-menu-lg p-2">
              <li>
                <div class="top-search m-2">
                  <div class="top-search-group">
                    <span class="input-icon">
                      <i class="ti ti-search"></i>
                    </span>
                    <input type="text" class="form-control" placeholder="Search" />
                  </div>
                </div>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Completed
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Pending
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Refunded
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Failed
                </label>
              </li>
            </ul>
          </div>
          <a href="javascript:void(0);" class="me-2 text-purple links">Apply</a>
          <a href="javascript:void(0);" class="text-danger links">Clear All</a>
        </div>
      </div>

      <!-- Custom Data Table -->
      <earnings-table></earnings-table>
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
import { expenseAnalysis, projectReport } from "./data";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      projectReport: projectReport,
      expenseAnalysis: expenseAnalysis,
    };
  },
  setup() {
    const counter1 = ref(0);
    const target1 = 95000.45;
    const duration = 20;
    const dateRangeInput = ref(null);

    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    const animateCounter = (target, counterRef) => {
      let current = 0;
      const step = target / (duration / 50);

      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        counterRef.value = Math.floor(current);
      }, 50);
    };
    onMounted(() => {
      animateCounter(target1, counter1);
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      counter1,
      dateRangeInput,
    };
  },
};
</script>
