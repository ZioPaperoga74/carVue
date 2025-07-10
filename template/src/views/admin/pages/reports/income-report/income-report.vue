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
          <h4 class="mb-1">Income vs Expenses</h4>
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
      <div class="row border-bottom mb-4">
        <!-- Total Earnings -->
        <div class="col-xl-4">
          <div class="card flex-fill mb-3">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="border-end pe-4 me-4">
                    <p class="mb-0">Total Income</p>
                    <h6 class="fw-semibold">$48,900</h6>
                  </div>
                  <div>
                    <p class="mb-0">Top Earning Car</p>
                    <h6 class="fw-semibold">Tesla Model 3</h6>
                  </div>
                </div>
                <span class="avatar avatar-md bg-orange rounded-circle">
                  <i class="ti ti-currency-dollar fs-18"></i>
                </span>
              </div>
              <div
                class="bg-gray-100 d-inline-flex justify-content-between align-items-center w-100 rounded p-2"
              >
                <p class="text-gray-500 mb-0 fs-12">Last Week</p>
                <span class="text-success fs12"
                  ><i class="ti ti-arrow-wave-right-up me-1"></i>+12%</span
                >
              </div>
            </div>
          </div>
          <div class="card flex-fill mb-3">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="border-end pe-4 me-4">
                    <p class="mb-0">Total Expenses</p>
                    <h6 class="fw-semibold">$19,400</h6>
                  </div>
                  <div>
                    <p class="mb-0">Highest Expense</p>
                    <h6 class="fw-semibold">Vehicle Repairs</h6>
                  </div>
                </div>
                <span class="avatar avatar-md bg-success rounded-circle">
                  <i class="ti ti-stairs-down fs-18"></i>
                </span>
              </div>
              <div
                class="bg-gray-100 d-inline-flex justify-content-between align-items-center w-100 rounded p-2"
              >
                <p class="text-gray-500 mb-0 fs-12">Last Week</p>
                <span class="text-danger fs12"
                  ><i class="ti ti-arrow-wave-right-down me-1"></i>-5.78%</span
                >
              </div>
            </div>
          </div>
          <div class="card flex-fill mb-3">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="border-end pe-4 me-4">
                    <p class="mb-0">Net Profit</p>
                    <h6 class="fw-semibold">$29,500</h6>
                  </div>
                  <div>
                    <p class="mb-0">Profit Margin</p>
                    <h6 class="fw-semibold">54%</h6>
                  </div>
                </div>
                <span class="avatar avatar-md bg-info rounded-circle">
                  <i class="ti ti-stairs-up fs-18"></i>
                </span>
              </div>
              <div
                class="bg-gray-100 d-inline-flex justify-content-between align-items-center w-100 rounded p-2"
              >
                <p class="text-gray-500 mb-0 fs-12">Last Week</p>
                <span class="text-success fs12"
                  ><i class="ti ti-arrow-wave-right-up me-1"></i>+19.26%</span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- /Total Earnings -->

        <!-- Total Earnings -->
        <div class="col-xl-8 d-flex">
          <div class="card flex-fill earnings-chart">
            <div class="card-header border-0 pb-0">
              <div
                class="d-flex flex-wrap justify-content-between align-items-center mb-3"
              >
                <h5>Income & Expenses</h5>
                <div class="d-flex align-items-center">
                  <div class="d-flex align-items-center me-4">
                    <span class="chart-color bg-primary me-1"></span>
                    <p class="fs-13">Income</p>
                  </div>
                  <div class="d-flex align-items-center">
                    <span class="chart-color bg-primary-300 me-1"></span>
                    <p class="fs-13">Expense</p>
                  </div>
                </div>
                <div class="dropdown me-2">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i class="ti ti-calendar me-1"></i> This Week
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >This Month</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >This Week</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Last Week</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="border rounded p-2 me-4">
                  <p class="mb-0 text-gray-5">Income This Week</p>
                  <h5>$96896 <span class="text-success fs-13 fw-semibold">+34%</span></h5>
                </div>
                <div class="border rounded p-2">
                  <p class="mb-0 text-gray-5">Expenses This Week</p>
                  <h5>$12489 <span class="text-danger fs-13 fw-semibold">-12%</span></h5>
                </div>
              </div>
            </div>
            <div class="card-body py-0">
              <div id="income_expense_chart">
                <apexchart
                  type="bar"
                  height="270"
                  :options="incomeExpenseChart.expenseChart"
                  :series="incomeExpenseChart.series"
                >
                </apexchart>
              </div>
            </div>
          </div>
        </div>
        <!-- /Total Earnings -->
      </div>
      <!-- /Charts -->

      <!-- Table Header -->

      <!-- /Table Header -->

      <div class="coupons-tabs">
        <ul class="nav nav-pills mb-3" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              data-bs-toggle="tab"
              role="tab"
              aria-current="page"
              href="#income"
              aria-selected="true"
              >Income</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-bs-toggle="tab"
              role="tab"
              aria-current="page"
              href="#expense"
              aria-selected="false"
              >Expence</a
            >
          </li>
        </ul>
        <div class="tab-content">
          <income-table></income-table>
          <expense-table></expense-table>
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
import { incomeExpenseChart } from "./data";

export default {
  data() {
    return {
      incomeExpenseChart: incomeExpenseChart,
    };
  },
};
</script>
