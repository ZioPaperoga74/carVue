<template>
  <div class="tab-pane show active" id="income" role="tabpanel">
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
              <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
            </li>
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
            </li>
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>
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
      <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
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
                  <span><i class="ti ti-grip-vertical me-1"></i>CAR</span>
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
                  <span><i class="ti ti-grip-vertical me-1"></i>RENTAL FEES</span>
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
                  <span><i class="ti ti-grip-vertical me-1"></i>LATE FEES</span>
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
                  <span><i class="ti ti-grip-vertical me-1"></i>ADDITIONAL SERVICES</span>
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
                  <span><i class="ti ti-grip-vertical me-1"></i>TOTAL INCOME</span>
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
            Select Cars
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
                <input class="form-check-input m-0 me-2" type="checkbox" />Ford Endeavour
              </label>
            </li>
            <li>
              <label class="dropdown-item d-flex align-items-center rounded-1">
                <input class="form-check-input m-0 me-2" type="checkbox" />Ferrari 458 MM
              </label>
            </li>
            <li>
              <label class="dropdown-item d-flex align-items-center rounded-1">
                <input class="form-check-input m-0 me-2" type="checkbox" />Ford Mustang
              </label>
            </li>
            <li>
              <label class="dropdown-item d-flex align-items-center rounded-1">
                <input class="form-check-input m-0 me-2" type="checkbox" />Toyota Tacoma 4
              </label>
            </li>
            <li>
              <label class="dropdown-item d-flex align-items-center rounded-1">
                <input class="form-check-input m-0 me-2" type="checkbox" />Chevrolet Pick
                Truck
              </label>
            </li>
            <li>
              <label class="dropdown-item d-flex align-items-center rounded-1">
                <input class="form-check-input m-0 me-2" type="checkbox" />Etios Carmen
              </label>
            </li>
            <li>
              <label class="dropdown-item d-flex align-items-center rounded-1">
                <input class="form-check-input m-0 me-2" type="checkbox" />Acura Sport
                Version
              </label>
            </li>
            <li>
              <label class="dropdown-item d-flex align-items-center rounded-1">
                <input class="form-check-input m-0 me-2" type="checkbox" />Kia Soul 2016
              </label>
            </li>
            <li>
              <label class="dropdown-item d-flex align-items-center rounded-1">
                <input class="form-check-input m-0 me-2" type="checkbox" />Chevrolet
                Camaro
              </label>
            </li>
            <li>
              <label class="dropdown-item d-flex align-items-center rounded-1">
                <input class="form-check-input m-0 me-2" type="checkbox" />Toyota Camry SE
                350
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
                <input class="form-check-input m-0 me-2" type="checkbox" />Confirmed
              </label>
            </li>
            <li>
              <label class="dropdown-item d-flex align-items-center rounded-1">
                <input class="form-check-input m-0 me-2" type="checkbox" />In Rental
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
      <a-table class="table datatable" :columns="columns" :data-source="data">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'INVOICENO'">
            <a href="javascript:void(0);">{{ record.INVOICENO }}</a>
          </template>
          <template v-else-if="column.key === 'CAR'">
            <div class="d-flex align-items-center">
              <a href="javascript:void(0);" class="avatar me-2 flex-shrink-0"
                ><img :src="getImageURL(record.IMAGE)" class="rounded-3" alt=""
              /></a>
              <div>
                <h6>
                  <a href="javascript:void(0);" class="fw-semibold fs-14">{{
                    record.CAR
                  }}</a>
                </h6>
              </div>
            </div>
          </template>
          <template v-else-if="column.key === 'STATUS'">
            <span
              class="d-inline-flex align-items-center badge-sm"
              :class="[
                'badge',
                {
                  'badge badge-soft-success': record.STATUS === 'Paid',
                  'badge badge-soft-info': record.STATUS === 'Pending',
                  'badge badge-soft-violet': record.STATUS === 'Overdue',
                  'badge badge-soft-danger': record.STATUS === 'Failed',
                },
              ]"
            >
              <i class="ti ti-point-filled me-1"></i>{{ record.STATUS }}
            </span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "INVOICE NO",
    dataIndex: "INVOICENO",
    key: "INVOICENO",
    sorter: {
      compare: (a, b) => {
        a = a.INVOICENO.toLowerCase();
        b = b.INVOICENO.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
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
    title: "RENTAL FEES",
    dataIndex: "RENTALFEES",
    sorter: {
      compare: (a, b) => {
        a = a.RENTALFEES.toLowerCase();
        b = b.RENTALFEES.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "LATE FEES",
    dataIndex: "LATEFEES",
    sorter: {
      compare: (a, b) => {
        a = a.LATEFEES.toLowerCase();
        b = b.LATEFEES.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "ADDITIONAL SERVICES",
    dataIndex: "ADDITIONALSERVICES",
    sorter: {
      compare: (a, b) => {
        a = a.ADDITIONALSERVICES.toLowerCase();
        b = b.ADDITIONALSERVICES.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "TOTAL INCOME",
    dataIndex: "TOTALINCOME",
    sorter: {
      compare: (a, b) => {
        a = a.TOTALINCOME.toLowerCase();
        b = b.TOTALINCOME.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DATE",
    dataIndex: "DATE",
    sorter: {
      compare: (a, b) => {
        a = a.DATE.toLowerCase();
        b = b.DATE.toLowerCase();
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
];
const data = [
  {
    INVOICENO: "#INV12345",
    IMAGE: "car-01.jpg",
    CAR: "Ford Endeavour",
    RENTALFEES: "$3,800",
    LATEFEES: "$200",
    ADDITIONALSERVICES: "$200",
    TOTALINCOME: "$5,100",
    DATE: "24 Jan 2025",
    STATUS: "Paid",
  },
  {
    INVOICENO: "#INV12346",
    IMAGE: "car-02.jpg",
    CAR: "Ferrari 458 MM",
    RENTALFEES: "$3,500",
    LATEFEES: "$250",
    ADDITIONALSERVICES: "$150",
    TOTALINCOME: "$4,500",
    DATE: "19 Dec 2024",
    STATUS: "Pending",
  },
  {
    INVOICENO: "#INV12347",
    IMAGE: "car-03.jpg",
    CAR: "Ford Mustang",
    RENTALFEES: "$4,600",
    LATEFEES: "$300",
    ADDITIONALSERVICES: "$200",
    TOTALINCOME: "$3,800",
    DATE: "11 Dec 2024",
    STATUS: "Paid",
  },
  {
    INVOICENO: "#INV12348",
    IMAGE: "car-04.jpg",
    CAR: "Toyota Tacoma 4",
    RENTALFEES: "$4,100",
    LATEFEES: "$200",
    ADDITIONALSERVICES: "$200",
    TOTALINCOME: "$4,700",
    DATE: "29 Nov 2024",
    STATUS: "Overdue",
  },
  {
    INVOICENO: "#INV12349",
    IMAGE: "car-05.jpg",
    CAR: "Chevrolet Truck",
    RENTALFEES: "$3,400",
    LATEFEES: "$250",
    ADDITIONALSERVICES: "$150",
    TOTALINCOME: "$5,300",
    DATE: "03 Nov 2024",
    STATUS: "Paid",
  },
  {
    INVOICENO: "#INV12350",
    IMAGE: "car-06.jpg",
    CAR: "Etios Carmen",
    RENTALFEES: "$4,300",
    LATEFEES: "$200",
    ADDITIONALSERVICES: "$200",
    TOTALINCOME: "$4,000",
    DATE: "31 Oct 2024",
    STATUS: "Pending",
  },
  {
    INVOICENO: "#INV12351",
    IMAGE: "car-07.jpg",
    CAR: "Acura Sport",
    RENTALFEES: "$4,900",
    LATEFEES: "$250",
    ADDITIONALSERVICES: "$150",
    TOTALINCOME: "$3,600",
    DATE: "15 Oct 2024",
    STATUS: "Paid",
  },
  {
    INVOICENO: "#INV12352",
    IMAGE: "car-08.jpg",
    CAR: "Kia Soul 2016",
    RENTALFEES: "$3,600",
    LATEFEES: "$250",
    ADDITIONALSERVICES: "$150",
    TOTALINCOME: "$5,800",
    DATE: "26 Sep 2024",
    STATUS: "Failed",
  },
  {
    INVOICENO: "#INV12353",
    IMAGE: "car-09.jpg",
    CAR: "Camaro",
    RENTALFEES: "$3,300",
    LATEFEES: "$200",
    ADDITIONALSERVICES: "$100",
    TOTALINCOME: "$4,200",
    DATE: "01 Sep 2024",
    STATUS: "Paid",
  },
  {
    INVOICENO: "#INV12354",
    IMAGE: "car-10.jpg",
    CAR: "Toyota Camry",
    RENTALFEES: "$5,300",
    LATEFEES: "$300",
    ADDITIONALSERVICES: "$200",
    TOTALINCOME: "$3,900",
    DATE: "15 Aug 2024",
    STATUS: "Paid",
  },
];
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      data,
      columns,
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
    getImageURL(imageName) {
      return new URL(`/src/assets/admin/img/car/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
