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
          <h2 class="mb-1">Inspection</h2>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Inspection</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2 me-2">
            <a href="javascript:void(0);" class="btn btn-white d-flex align-items-center"
              ><i class="ti ti-printer me-2"></i>Print</a
            >
          </div>
          <div class="me-2 mb-2">
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
              data-bs-target="#add_inspection"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-plus me-2"></i>Add New Inspection</a
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
                    <span><i class="ti ti-grip-vertical me-1"></i>INSPECTED STATUS</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>INSPECTION DATE</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>INSPECTED BY</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>REPAIR STATUS</span>
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
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              Select Inspected Status
            </a>
            <ul class="dropdown-menu dropdown-menu-lg p-3">
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Completed
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Inprogress
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Pending
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />On Hold
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Rejected
                </label>
              </li>
            </ul>
          </div>
          <div class="dropdown me-3">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              Select Repair Status
            </a>
            <ul class="dropdown-menu dropdown-menu-lg p-3">
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Completed
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Inprogress
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Pending
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />On Hold
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Rejected
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
                  ><img :src="getImageUrl(record.IMAGE)" alt=""
                /></router-link>
                <div>
                  <router-link to="car-details" class="fw-semibold d-block">{{
                    record.CAR
                  }}</router-link>
                  <span class="fs-13">{{ record.MODAL }}</span>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'INSPECTEDSTATUS'">
              <span
                class="d-inline-flex align-items-center badge-sm"
                :class="[
                  'badge',
                  {
                    'badge-soft-success': record.INSPECTEDSTATUS === 'Completed',
                    'badge-soft-warning': record.INSPECTEDSTATUS === 'On Hold',
                    'badge-soft-info': record.INSPECTEDSTATUS === 'Inprogress',
                    'badge-soft-violet': record.INSPECTEDSTATUS === 'Pending',
                    'badge-soft-danger': record.INSPECTEDSTATUS === 'Rejected',
                  },
                ]"
              >
                <i class="ti ti-point-filled me-1"></i>{{ record.INSPECTEDSTATUS }}
              </span>
            </template>
            <template v-else-if="column.key === 'INSPECTIONDATE'">
              <p class="text-gray-9 mb-0">{{ record.INSPECTIONDATE }}</p>
            </template>
            <template v-else-if="column.key === 'INSPECTEDBY'">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="avatar avatar-rounded me-2 flex-shrink-0"
                  ><img
                    :src="getImageUrlOne(record.INSPECTEDIMAGE)"
                    alt=""
                    class="rounded-circle"
                /></a>
                <div>
                  <a href="javascript:void(0);" class="fw-semibold d-block">{{
                    record.INSPECTEDBY
                  }}</a>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'REPAIRSTATUS'">
              <span class="badge badge-dark-transparent">
                <i
                  class="ti ti-point-filled"
                  :class="[
                    'me-1',
                    {
                      'text-success': record.REPAIRSTATUS === 'Completed',
                      'text-orange': record.REPAIRSTATUS === 'Need Repair',
                      'text-warning': record.REPAIRSTATUS === 'On Hold',
                      'text-purple': record.REPAIRSTATUS === 'Inprogress',
                    },
                  ]"
                ></i
                >{{ record.REPAIRSTATUS }}
              </span>
            </template>
            <template v-else-if="column.key === 'action'">
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
                      data-bs-target="#edit_inspection"
                      ><i class="ti ti-edit me-1"></i>Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
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
  <inspections-modal></inspections-modal>
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
    title: "INSPECTED STATUS",
    dataIndex: "INSPECTEDSTATUS",
    key: "INSPECTEDSTATUS",
    sorter: {
      compare: (a, b) => {
        a = a.INSPECTEDSTATUS.toLowerCase();
        b = b.INSPECTEDSTATUS.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "INSPECTION DATE",
    dataIndex: "INSPECTIONDATE",
    key: "INSPECTIONDATE",
    sorter: {
      compare: (a, b) => {
        a = a.INSPECTIONDATE.toLowerCase();
        b = b.INSPECTIONDATE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "INSPECTED BY",
    dataIndex: "INSPECTEDBY",
    key: "INSPECTEDBY",
    sorter: {
      compare: (a, b) => {
        a = a.INSPECTEDBY.toLowerCase();
        b = b.INSPECTEDBY.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "REPAIR STATUS",
    dataIndex: "REPAIRSTATUS",
    key: "REPAIRSTATUS",
    sorter: {
      compare: (a, b) => {
        a = a.REPAIRSTATUS.toLowerCase();
        b = b.REPAIRSTATUS.toLowerCase();
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
    IMAGE: "car-01.jpg",
    INSPECTEDSTATUS: "Completed",
    INSPECTIONDATE: "24 Jan 2025",
    INSPECTEDBY: "Shaun Farley",
    INSPECTEDIMAGE: "avatar-01.jpg",
    REPAIRSTATUS: "Completed",
  },
  {
    key: "2",
    CAR: "Ferrari 458 MM",
    MODAL: "Convertible",
    IMAGE: "car-02.jpg",
    INSPECTEDSTATUS: "Inprogress",
    INSPECTIONDATE: "19 Dec 2024",
    INSPECTEDBY: "Jenny Ellis",
    INSPECTEDIMAGE: "avatar-12.jpg",
    REPAIRSTATUS: "Pending",
  },
  {
    key: "3",
    CAR: "Ford Mustang",
    MODAL: "Coupe",
    IMAGE: "car-03.jpg",
    INSPECTEDSTATUS: "Completed",
    INSPECTIONDATE: "11 Dec 2024",
    INSPECTEDBY: "Leon Baxter",
    INSPECTEDIMAGE: "avatar-15.jpg",
    REPAIRSTATUS: "Need Repair",
  },
  {
    key: "4",
    CAR: "Toyota Tacoma 4",
    MODAL: "Hatchback",
    IMAGE: "car-04.jpg",
    INSPECTEDSTATUS: "Pending",
    INSPECTIONDATE: "29 Nov 2024",
    INSPECTEDBY: "Karen Flores",
    INSPECTEDIMAGE: "avatar-17.jpg",
    REPAIRSTATUS: "Inprogress",
  },
  {
    key: "5",
    CAR: "Chevrolet Truck",
    MODAL: "Sedan",
    IMAGE: "car-05.jpg",
    INSPECTEDSTATUS: "Completed",
    INSPECTIONDATE: "03 Nov 2024",
    INSPECTEDBY: "Michael Dawson",
    INSPECTEDIMAGE: "avatar-06.jpg",
    REPAIRSTATUS: "Completed",
  },
  {
    key: "6",
    CAR: "Etios Carmen",
    MODAL: "Hatchback",
    IMAGE: "car-06.jpg",
    INSPECTEDSTATUS: "On Hold",
    INSPECTIONDATE: "31 Oct 2024",
    INSPECTEDBY: "Karen Galvan",
    INSPECTEDIMAGE: "avatar-18.jpg",
    REPAIRSTATUS: "On Hold",
  },
  {
    key: "7",
    CAR: "Acura Sport",
    MODAL: "Crossover",
    IMAGE: "car-07.jpg",
    INSPECTEDSTATUS: "Completed",
    INSPECTIONDATE: "15 Oct 2024",
    INSPECTEDBY: "Thomas Ward",
    INSPECTEDIMAGE: "avatar-03.jpg",
    REPAIRSTATUS: "Completed",
  },
  {
    key: "8",
    CAR: "Kia Soul 2016",
    MODAL: "Delivery",
    IMAGE: "car-08.jpg",
    INSPECTEDSTATUS: "Rejected",
    INSPECTIONDATE: "26 Sep 2024",
    INSPECTEDBY: "Aliza Duncan",
    INSPECTEDIMAGE: "avatar-17.jpg",
    REPAIRSTATUS: "Need Repair",
  },
  {
    key: "9",
    CAR: "Camaro",
    MODAL: "Station Wagon",
    IMAGE: "car-09.jpg",
    INSPECTEDSTATUS: "Completed",
    INSPECTIONDATE: "01 Sep 2024",
    INSPECTEDBY: "James Higham",
    INSPECTEDIMAGE: "avatar-05.jpg",
    REPAIRSTATUS: "Completed",
  },
  {
    key: "10",
    CAR: "Toyota Camry",
    MODAL: "Mini Van",
    IMAGE: "car-10.jpg",
    INSPECTEDSTATUS: "Completed",
    INSPECTIONDATE: "15 Aug 2024",
    INSPECTEDBY: "Jade Robinson",
    INSPECTEDIMAGE: "avatar-08.jpg",
    REPAIRSTATUS: "Completed",
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
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/admin/img/car/${imageName}`, import.meta.url).href;
    },
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/admin/img/profiles/${imageName}`, import.meta.url).href;
    },
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
