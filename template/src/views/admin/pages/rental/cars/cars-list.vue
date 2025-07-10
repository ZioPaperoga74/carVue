<template>
  <div>
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content me-4">
        <!-- Breadcrumb -->
        <div
          class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3"
        >
          <div class="my-auto mb-2">
            <h4 class="mb-1">All Cars</h4>
            <nav>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <router-link to="/admin-template/index">Home</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  All Cars
                </li>
              </ol>
            </nav>
          </div>
          <div
            class="d-flex my-xl-auto right-content align-items-center flex-wrap"
          >
            <div class="mb-2">
              <router-link
                to="/admin-template/rentals/add-car"
                class="btn btn-primary d-flex align-items-center"
                ><i class="ti ti-plus me-2"></i>Aggiungi Auto</router-link
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
                <span class="badge badge-xs rounded-pill bg-danger ms-2"
                  >0</span
                >
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
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Ford Endeavour
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Ferrari 458 MM
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Ford Mustang
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Toyota Tacoma 4
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Chevrolet Pick Truck
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Etios Carmen
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Acura Sport Version
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Kia Soul 2016
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Chevrolet Camaro
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Toyota Camry SE 350
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
                Type
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
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Sedan
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Hatchback
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />SUV
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Coupes
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Convertible
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Pickup Truck
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Sport
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Minivan
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />EV
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
                Location
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
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Newyork City
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Los Angeles
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Chicago
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Houston
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Phoenix
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Philadelphia
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />Austin
                  </label>
                </li>
                <li>
                  <label
                    class="dropdown-item d-flex align-items-center rounded-1"
                  >
                    <input
                      class="form-check-input m-0 me-2"
                      type="checkbox"
                    />San Antonio
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
                Status
              </a>
              <ul class="dropdown-menu dropdown-menu-md p-2">
                <li class="dropdown-item">Active</li>
                <li class="dropdown-item">Inactive</li>
              </ul>
            </div>
            <a href="javascript:void(0);" class="me-2 text-purple links"
              >Apply</a
            >
            <a href="javascript:void(0);" class="text-danger links"
              >Clear All</a
            >
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
                  <router-link
                    :to="`/admin-template/rentals/car-details/${record.ID}`"
                    class="avatar me-2 flex-shrink-0"
                  >
                    <img
                      :src="getImageUrl(record.IMAGE, record.ID)"
                      class="rounded-3"
                      alt=""
                    />
                  </router-link>
                  <div>
                    <h6>
                      <router-link
                        :to="`/admin-template/rentals/car-details/${record.ID}`"
                        class="fs-14 fw-semibold"
                        >{{ record.CAR }}</router-link
                      >
                    </h6>
                    <p>{{ record.CAR_TYPE }}</p>
                  </div>
                </div>
              </template>
              <template v-else-if="column.key === 'PRICE'">
                <p class="fs-14 fw-semibold text-gray-9">{{ record.PRICE }}</p>
              </template>
              <template v-else-if="column.key === 'DAMAGES'">
                <p class="text-gray-9">{{ record.DAMAGES }}</p>
              </template>
              <template v-else-if="column.key === 'IS_FEATURED'">
                <i class="ti ti-star-filled text-warning"></i>
              </template>
              <template v-else-if="column.key === 'CREATED_DATE'">
                <h6 class="fs-14 fw-normal">{{ record.CREATED_DATE }}</h6>
                <p class="fs-13">01:00 PM</p>
              </template>
              <template v-else-if="column.key === 'STATUS'">
                <span class="badge badge-dark-transparent">
                  <i
                    class="ti ti-point-filled me-1"
                    :class="[
                      {
                        'text-success': record.STATUS === 'Active',
                        'text-danger': record.STATUS === 'Inactive',
                      },
                    ]"
                  ></i>
                  {{ record.STATUS }}
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
                      <router-link
                        class="dropdown-item rounded-1"
                        :to="`/admin-template/rentals/car-details/${record.ID}`"
                        ><i class="ti ti-eye me-1"></i>View Details</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/admin-template/bookings/add-reservation"
                        ><i class="ti ti-plus me-1"></i>Add
                        Reservation</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        :to="`/admin-template/rentals/edit-car/${record.ID}`"
                        ><i class="ti ti-edit me-1"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item rounded-1"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_extra_services"
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
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";

// PocketBase import
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

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
    title: "BASE LOCATION",
    dataIndex: "BASE_LOCATION",
    key: "BASE_LOCATION",
    sorter: {
      compare: (a, b) => {
        a = a.BASE_LOCATION.toLowerCase();
        b = b.BASE_LOCATION.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "PRICE (PER DAY)",
    dataIndex: "PRICE",
    key: "PRICE",
    sorter: {
      compare: (a, b) => {
        a = a.PRICE.toLowerCase();
        b = b.PRICE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DAMAGES",
    dataIndex: "DAMAGES",
    key: "DAMAGES",
    sorter: {
      compare: (a, b) => {
        a = a.DAMAGES.toLowerCase();
        b = b.DAMAGES.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "IS FEATURED",
    dataIndex: "IS_FEATURED",
    key: "IS_FEATURED",
    sorter: {
      compare: (a, b) => {
        a = a.IS_FEATURED.toLowerCase();
        b = b.IS_FEATURED.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "CREATED DATE",
    dataIndex: "CREATED_DATE",
    key: "CREATED_DATE",
    sorter: {
      compare: (a, b) => {
        a = a.CREATED_DATE.toLowerCase();
        b = b.CREATED_DATE.toLowerCase();
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
      columns,
      data: [], // sarà popolato dinamicamente
      rowSelection,
    };
  },
  setup() {
    const dateRangeInput = ref(null);

    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
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
      dateRangeInput,
    };
  },
  mounted() {
    this.fetchApprovedCars();
  },
  methods: {
    async fetchApprovedCars() {
      try {
        const result = await pb.collection("cars").getFullList({
          filter: "approved=true",
        });
        // Mappa i dati per adattarli alle colonne della tabella
        this.data = result.map((car) => ({
          ID: car.id,
          IMAGE:
            Array.isArray(car.images) && car.images.length > 0
              ? car.images[0]
              : "car-01.jpg",
          CAR: car.name || car.brand || car.CAR || "-",
          CAR_TYPE: car.type || car.CAR_TYPE || "-",
          BASE_LOCATION:
            car.base_location || car.location || car.BASE_LOCATION || "-",
          PRICE: car.price ? `$${car.price}` : "-",
          DAMAGES: car.damages || "0",
          IS_FEATURED: car.is_featured ? "★" : "",
          CREATED_DATE: car.created
            ? moment(car.created).format("DD MMM YYYY")
            : "-",
          STATUS: car.status || (car.approved ? "Active" : "Inactive"),
        }));
      } catch (error) {
        console.error("Errore nel recupero delle auto approvate:", error);
      }
    },
    getImageUrl(imageName, recordId) {
      if (imageName && recordId) {
        return `http://127.0.0.1:8090/api/files/cars/${recordId}/${imageName}`;
      }
      // Fallback per immagini locali
      return new URL(`/src/assets/admin/img/car/car-01.jpg`, import.meta.url)
        .href;
    },
  },
};
</script>
