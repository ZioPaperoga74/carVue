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
          <h2 class="mb-1">Reviews</h2>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Reviews
              </li>
            </ol>
          </nav>
        </div>
        <div
          class="d-flex my-xl-auto right-content align-items-center flex-wrap"
        >
          <div class="mb-2 me-2">
            <a
              href="javascript:void(0);"
              class="btn btn-white d-flex align-items-center"
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
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Latest</a
                >
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
                      ><i class="ti ti-grip-vertical me-1"></i>AUTHOR</span
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
                    <span
                      ><i class="ti ti-grip-vertical me-1"></i>REVIEW DATE</span
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
                    <span><i class="ti ti-grip-vertical me-1"></i>RATINGS</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>REVIEW</span>
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
              Select Ratings
            </a>
            <ul class="dropdown-menu dropdown-menu-lg p-2">
              <li>
                <div class="top-search m-2">
                  <div class="top-search-group">
                    <span class="input-icon">
                      <i class="ti ti-search"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </li>
              <li>
                <label
                  class="dropdown-item d-flex align-items-center rounded-1"
                >
                  <input class="form-check-input m-0 me-2" type="checkbox" />5
                  Star
                </label>
              </li>
              <li>
                <label
                  class="dropdown-item d-flex align-items-center rounded-1"
                >
                  <input class="form-check-input m-0 me-2" type="checkbox" />4
                  Star
                </label>
              </li>
              <li>
                <label
                  class="dropdown-item d-flex align-items-center rounded-1"
                >
                  <input class="form-check-input m-0 me-2" type="checkbox" />3
                  Star
                </label>
              </li>
              <li>
                <label
                  class="dropdown-item d-flex align-items-center rounded-1"
                >
                  <input class="form-check-input m-0 me-2" type="checkbox" />2
                  Star
                </label>
              </li>
              <li>
                <label
                  class="dropdown-item d-flex align-items-center rounded-1"
                >
                  <input class="form-check-input m-0 me-2" type="checkbox" />1
                  Star
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
            <template v-if="column.key === 'AUTHOR'">
              <div class="d-flex align-items-center">
                <router-link
                  to="customer-details"
                  class="avatar me-2 flex-shrink-0"
                  ><img
                    class="rounded-circle"
                    :src="getImageUrl(record.IMAGE)"
                    alt=""
                /></router-link>
                <div>
                  <router-link
                    to="customer-details"
                    class="fw-semibold d-block"
                    >{{ record.AUTHOR }}</router-link
                  >
                </div>
              </div>
            </template>
            <template v-if="column.key === 'REVIEWDATE'">
              <p class="text-gray-9 mb-0">{{ record.REVIEWDATE }}</p>
            </template>
            <template v-if="column.key === 'RATINGS'">
              <div>
                <span><i class="ti ti-star-filled text-warning"></i></span>
                <span><i class="ti ti-star-filled text-warning"></i></span>
                <span><i class="ti ti-star-filled text-warning"></i></span>
                <span><i class="ti ti-star-filled text-warning"></i></span>
                <span><i class="ti ti-star-filled text-warning"></i></span>
                <span class="fs-14">{{ record.RATINGS }}</span>
              </div>
            </template>
            <template v-if="column.key === 'REVIEW'">
              <p class="text-gray-9 mb-0">
                {{ record.REVIEW }}
              </p>
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
                      data-bs-target="#delete_review"
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

    <!-- /Footer-->
  </div>
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
    title: "AUTHOR",
    dataIndex: "AUTHOR",
    key: "AUTHOR",
    sorter: {
      compare: (a, b) => {
        a = a.AUTHOR.toLowerCase();
        b = b.AUTHOR.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "REVIEW DATE",
    dataIndex: "REVIEWDATE",
    key: "REVIEWDATE",
    sorter: {
      compare: (a, b) => {
        a = a.REVIEWDATE.toLowerCase();
        b = b.REVIEWDATE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "RATINGS",
    dataIndex: "RATINGS",
    key: "RATINGS",
    sorter: {
      compare: (a, b) => {
        a = a.RATINGS.toLowerCase();
        b = b.RATINGS.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "REVIEW",
    dataIndex: "REVIEW",
    key: "REVIEW",
    sorter: {
      compare: (a, b) => {
        a = a.REVIEW.toLowerCase();
        b = b.REVIEW.toLowerCase();
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
    AUTHOR: "Shaun Farley",
    IMAGE: "avatar-01.jpg",
    REVIEWDATE: "24 Jan 2025",
    RATINGS: "(5.0)",
    REVIEW: "Super easy booking process and great car selection!",
  },
  {
    key: "2",
    AUTHOR: "Jenny Ellis",
    IMAGE: "avatar-12.jpg",
    REVIEWDATE: "19 Dec 2024",
    RATINGS: "(5.0)",
    REVIEW: "Transparent pricing with no hidden fees - highly recommend!",
  },
  {
    key: "3",
    AUTHOR: "Leon Baxter",
    IMAGE: "avatar-15.jpg",
    REVIEWDATE: "11 Dec 2024",
    RATINGS: "(5.0)",
    REVIEW: "Wide range of cars, from budget to luxury - perfect for any trip!",
  },
  {
    key: "4",
    AUTHOR: "Karen Flores",
    IMAGE: "avatar-17.jpg",
    REVIEWDATE: "29 Nov 2024",
    RATINGS: "(5.0)",
    REVIEW: "Pick-up and drop-off were seamless - best rental experience ever!",
  },
  {
    key: "5",
    AUTHOR: "Michael Dawson",
    IMAGE: "avatar-06.jpg",
    REVIEWDATE: "03 Nov 2024",
    RATINGS: "(5.0)",
    REVIEW: "Clean, well-maintained cars and excellent customer support",
  },
  {
    key: "6",
    AUTHOR: "Karen Galvan",
    IMAGE: "avatar-18.jpg",
    REVIEWDATE: "31 Oct 2024",
    RATINGS: "(5.0)",
    REVIEW: "Great deals and discounts - saved money on my rental!",
  },
  {
    key: "7",
    AUTHOR: "Thomas Ward",
    IMAGE: "avatar-03.jpg",
    REVIEWDATE: "15 Oct 2024",
    RATINGS: "(5.0)",
    REVIEW: "Fast check-in and check-out process, super convenient",
  },
  {
    key: "8",
    AUTHOR: "Aliza Duncan",
    IMAGE: "avatar-17.jpg",
    REVIEWDATE: "26 Sep 2024",
    RATINGS: "(5.0)",
    REVIEW: "Quick responses from customer support - very helpful",
  },
  {
    key: "9",
    AUTHOR: "James Higham",
    IMAGE: "avatar-05.jpg",
    REVIEWDATE: "01 Sep 2024",
    RATINGS: "(5.0)",
    REVIEW: "Best rental experience - I'll definitely use them again",
  },
  {
    key: "10",
    AUTHOR: "Jade Robinson",
    IMAGE: "avatar-08.jpg",
    REVIEWDATE: "15 Aug 2024",
    RATINGS: "(5.0)",
    REVIEW: "Booking was fast, and the car was ready on time!",
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
              Yesterday: [
                moment().subtract(1, "days"),
                moment().subtract(1, "days"),
              ],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [
                moment().startOf("month"),
                moment().endOf("month"),
              ],
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
      return new URL(
        `/src/assets/admin/img/profiles/${imageName}`,
        import.meta.url
      ).href;
    },
  },
};
</script>
