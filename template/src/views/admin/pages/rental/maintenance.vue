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
          <h4 class="mb-1">Maintenance</h4>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Maintenance</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2 me-2">
            <a href="javascript:void(0);" class="btn btn-white d-flex align-items-center"
              ><i class="ti ti-printer me-2"></i>Print</a
            >
          </div>
          <div class="mb-2 me-2">
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-dark d-inline-flex align-items-center"
              >
                <i class="ti ti-upload me-1"></i>Export
              </a>
            </div>
          </div>
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#add_maintenance"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-plus me-2"></i>Add New Maintenance</a
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
                      ><i class="ti ti-grip-vertical me-1"></i>CAR</span
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
                    <span><i class="ti ti-grip-vertical me-1"></i>START DATE</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>END DATE</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>ODOMETER</span>
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
      <!-- /Table Header -->

      <div class="collapse" id="filtercollapse">
        <div class="filterbox mb-3 d-flex align-items-center">
          <h6 class="me-3">Filters</h6>

          <div class="dropdown me-3">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              Select Status
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
                  <input class="form-check-input m-0 me-2" type="checkbox" />In Progress
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Planned
                </label>
              </li>
            </ul>
          </div>
          <a href="javascript:void(0);" class="me-2 text-purple links">Apply</a>
          <a href="javascript:void(0);" class="text-danger links">Clear All</a>
        </div>
      </div>

      <!-- Custom Data Table -->
      <div class="custom-datatable-filter table-responsive">
        <a-table
          class="table datatable"
          :columns="columns"
          :data-source="data"
          :row-selection="rowSelection"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'CAR'">
              <div class="d-flex align-items-center">
                <router-link to="car-details" class="avatar me-2 flex-shrink-0"
                  ><img :src="getImageUrl(record.CARIMAGE)" alt=""
                /></router-link>
                <div>
                  <router-link to="car-details" class="fw-semibold d-block">{{
                    record.CAR
                  }}</router-link>
                  <span class="fs-13">{{ record.MODAL }}</span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'STARTDATE'">
              <p class="text-gray-9 mb-0">{{ record.STARTDATE }}</p>
            </template>
            <template v-if="column.key === 'ENDDATE'">
              <p class="text-gray-9 mb-0">{{ record.ENDDATE }}</p>
              <span class="fs-13">{{ record.ENDTIME }}</span>
            </template>
            <template v-if="column.key === 'ODOMETER'"
              ><p class="text-gray-9 mb-0">{{ record.ODOMETER }}</p></template
            >
            <template v-if="column.key === 'STATUS'">
              <span
                class="d-inline-flex align-items-center badge-sm"
                :class="[
                  'badge',
                  {
                    'badge-soft-success': record.STATUS === 'Completed',
                    'badge-soft-danger': record.STATUS === 'Unpaid',
                    'badge-soft-info': record.STATUS === 'Inprogress',
                    'badge-soft-violet': record.STATUS === 'Planned',
                  },
                ]"
              >
                <i class="ti ti-point-filled me-1"></i>{{ record.STATUS }}
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
                      data-bs-target="#edit_maintenance"
                      ><i class="ti ti-edit me-1"></i>Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_maintenance"
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
      <div class="table-footer"></div>
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
  <maintenance-modal></maintenance-modal>
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
    title: "CAR",
    dataIndex: "CAR",
    key: "CAR",
    sorter: {
      compare: (a, b) => {
        a = a.CAR.toLowerCase();
        b = b.CAR.toLowerCase();
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
    title: "ODOMETER",
    dataIndex: "ODOMETER",
    key: "ODOMETER",
    sorter: {
      compare: (a, b) => {
        a = a.ODOMETER.toLowerCase();
        b = b.ODOMETER.toLowerCase();
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
    CAR: "Ford Endeavour",
    MODAL: "Sedan",
    CARIMAGE: "car-01.jpg",
    STARTDATE: "24 Jan 2025",
    ENDDATE: "26 Jan 2025 ",
    ENDTIME: "10:30 AM",
    ODOMETER: "12,215 km",
    STATUS: "Completed",
  },
  {
    key: "2",
    CAR: "Ferrari 458 MM",
    MODAL: "Convertible",
    CARIMAGE: "car-02.jpg",
    STARTDATE: "19 Dec 2024",
    ENDDATE: "20 Dec 2024",
    ENDTIME: "10:30 AM",
    ODOMETER: "12,215 km",
    STATUS: "Inprogress",
  },
  {
    key: "3",
    CAR: "Ford Mustang",
    MODAL: "Coupe",
    CARIMAGE: "car-03.jpg",
    STARTDATE: "11 Dec 2024",
    ENDDATE: "13 Dec 2024",
    ENDTIME: "10:30 AM",
    ODOMETER: "11,345 km",
    STATUS: "Completed",
  },
  {
    key: "4",
    CAR: "Toyota Tacoma 4",
    MODAL: "Hatchback",
    CARIMAGE: "car-04.jpg",
    STARTDATE: "29 Nov 2024",
    ENDDATE: "30 Nov 2024",
    ENDTIME: "10:30 AM",
    ODOMETER: "10,675 km",
    STATUS: "Planned",
  },
  {
    key: "5",
    CAR: "Chevrolet Truck",
    MODAL: "Sedan",
    CARIMAGE: "car-05.jpg",
    STARTDATE: "03 Nov 2024",
    ENDDATE: "05 Nov 2024",
    ENDTIME: "10:30 AM",
    ODOMETER: "19,015 km",
    STATUS: "Completed",
  },
  {
    key: "6",
    CAR: "Etios Carmen",
    MODAL: "Hatchback",
    CARIMAGE: "car-06.jpg",
    STARTDATE: "31 Oct 2024",
    ENDDATE: "01 Oct 2024",
    ENDTIME: "10:30 AM",
    ODOMETER: "12,098 km",
    STATUS: "Inprogress",
  },
  {
    key: "7",
    CAR: "Acura Sport",
    MODAL: "Crossover",
    CARIMAGE: "car-07.jpg",
    STARTDATE: "15 Oct 2024",
    ENDDATE: "17 Oct 2024",
    ENDTIME: "10:30 AM",
    ODOMETER: "10,315 km",
    STATUS: "Completed",
  },
  {
    key: "8",
    CAR: "Kia Soul 2016",
    MODAL: "Delivery",
    CARIMAGE: "car-08.jpg",
    STARTDATE: "26 Sep 2024",
    ENDDATE: "27 Sep 2024",
    ENDTIME: "10:30 AM",
    ODOMETER: "14,432 km",
    STATUS: "Planned",
  },
  {
    key: "9",
    CAR: "Camaro",
    MODAL: "Station Wagon",
    CARIMAGE: "car-09.jpg",
    STARTDATE: "01 Sep 2024",
    ENDDATE: "03 Sep 2024",
    ENDTIME: "10:30 AM",
    ODOMETER: "15,215 km",
    STATUS: "Completed",
  },
  {
    key: "10",
    CAR: "Toyota Camry",
    MODAL: "Mini Van",
    CARIMAGE: "car-10.jpg",
    STARTDATE: "15 Aug 2024",
    ENDDATE: "16 Aug 2024",
    ENDTIME: "10:30 AM",
    ODOMETER: "13,582 km",
    STATUS: "Completed",
  },
];
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
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
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/admin/img/car/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
