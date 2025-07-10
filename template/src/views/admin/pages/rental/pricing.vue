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
          <h2 class="mb-1">Seasonal Pricing</h2>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Seasonal Pricing</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#add_pricing"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-plus me-2"></i>Add New Pricing</a
            >
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Table Header -->
      <div
        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3"
      >
        <div class="d-flex align-items-center flex-wrap row-gap-3">
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <i class="ti ti-badge me-1"></i> Status
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
              </li>
            </ul>
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
        </div>
      </div>
      <!-- /Table Header -->

      <!-- Custom Data Table -->
      <div class="custom-datatable-filter table-responsive">
        <a-table
          class="table datatable"
          :columns="columns"
          :data-source="data"
          :row-selection="rowSelection"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'SEASONNAME'">
              <a class="fw-semibold" href="#">{{ record.SEASONNAME }}</a>
            </template>
            <template v-if="column.key === 'STARTDATE'"
              ><p class="text-gray-9 mb-0">{{ record.STARTDATE }}</p></template
            >
            <template v-if="column.key === 'ENDDATE'"
              ><p class="text-gray-9 mb-0">{{ record.ENDDATE }}</p></template
            >
            <template v-if="column.key === 'DAILYRATE'"
              ><p class="text-gray-9 mb-0">{{ record.DAILYRATE }}</p></template
            >
            <template v-if="column.key === 'WEEKLYRATE'"
              ><p class="text-gray-9 mb-0">{{ record.WEEKLYRATE }}</p></template
            >
            <template v-if="column.key === 'MONTHLYRATE'"
              ><p class="text-gray-9 mb-0">{{ record.MONTHLYRATE }}</p></template
            >
            <template v-if="column.key === 'STATUS'">
              <span
                class="badge badge-success-transparent d-inline-flex align-items-center badge-sm"
              >
                <i class="ti ti-point-filled me-1"></i>Active
              </span>
            </template>
            <template v-if="column.key === 'action'">
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
                      data-bs-target="#edit_pricing"
                      ><i class="ti ti-edit me-1"></i>Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_pricing"
                      ><i class="ti ti-trash me-1"></i>Delete</a
                    >
                  </li>
                </ul>
              </div>
            </template>
          </template>
        </a-table>
      </div>
      <!-- Custom Data Table -->
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
  <pricing-modal></pricing-modal>
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
const columns = [
  {
    title: "SEASON NAME",
    dataIndex: "SEASONNAME",
    key: "SEASONNAME",
    sorter: {
      compare: (a, b) => {
        a = a.SEASONNAME.toLowerCase();
        b = b.SEASONNAME.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "START DATE",
    dataIndex: "STARTDATE",
    key: "STARTDATE",
    sorter: {
      compare: (a, b) => {
        a = a.STARTDATE.toLowerCase();
        b = b.STARTDATE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "END DATE",
    dataIndex: "ENDDATE",
    key: "ENDDATE",
    sorter: {
      compare: (a, b) => {
        a = a.ENDDATE.toLowerCase();
        b = b.ENDDATE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DAILY RATE",
    dataIndex: "DAILYRATE",
    key: "DAILYRATE",
    sorter: {
      compare: (a, b) => {
        a = a.DAILYRATE.toLowerCase();
        b = b.DAILYRATE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "WEEKLY RATE",
    dataIndex: "WEEKLYRATE",
    key: "WEEKLYRATE",
    sorter: {
      compare: (a, b) => {
        a = a.WEEKLYRATE.toLowerCase();
        b = b.WEEKLYRATE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "MONTHLY RATE",
    dataIndex: "MONTHLYRATE",
    key: "MONTHLYRATE",
    sorter: {
      compare: (a, b) => {
        a = a.MONTHLYRATE.toLowerCase();
        b = b.MONTHLYRATE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "STATUS",
    dataIndex: "STATUS",
    key: "STATUS",
    sorter: {
      compare: (a, b) => {
        a = a.STATUS.toLowerCase();
        b = b.STATUS.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    key: "1",
    SEASONNAME: "Halloween",
    STARTDATE: "20 Sep 2025",
    ENDDATE: "25 Nov 2025",
    DAILYRATE: "$200",
    WEEKLYRATE: "$1400",
    MONTHLYRATE: "$4800",
    STATUS: "Active",
  },
  {
    key: "2",
    SEASONNAME: "Easter",
    STARTDATE: "01 Jun 2025",
    ENDDATE: "15 Aug 2025",
    DAILYRATE: "$220",
    WEEKLYRATE: "$1540",
    MONTHLYRATE: "$6160",
    STATUS: "Active",
  },
  {
    key: "3",
    SEASONNAME: "New Year",
    STARTDATE: "15 Mar 2025",
    ENDDATE: "20 May 2025",
    DAILYRATE: "$240",
    WEEKLYRATE: "$1680",
    MONTHLYRATE: "$6720",
    STATUS: "Active",
  },
  {
    key: "4",
    SEASONNAME: "Christmas",
    STARTDATE: "01 Dec 2024",
    ENDDATE: "10 Jan 2025",
    DAILYRATE: "$250",
    WEEKLYRATE: "$1750",
    MONTHLYRATE: "$7000",
    STATUS: "Active",
  },
];
const rowSelection = {
  nChange: () => {},
  oSelect: () => {},
  onelectAll: () => {},
};
export default {
  data() {
    return {
      data,
      columns,
      rowSelection,
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
