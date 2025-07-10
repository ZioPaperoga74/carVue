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
            <h4 class="mb-1">Pending Car Approvals</h4>
            <nav>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <router-link to="/admin-template/index">Home</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Pending Car Approvals
                </li>
              </ol>
            </nav>
          </div>
          <div
            class="d-flex my-xl-auto right-content align-items-center flex-wrap"
          ></div>
        </div>
        <!-- /Breadcrumb -->

        <!-- Table Header -->
        <div
          class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3"
        >
          <div
            class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3"
          ></div>
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
            :data-source="filteredData"
            :row-selection="rowSelection"
            :loading="loading"
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
              <template v-else-if="column.key === 'CREATED_DATE'">
                <h6 class="fs-14 fw-normal">{{ record.CREATED_DATE }}</h6>
                <p class="fs-13">01:00 PM</p>
              </template>
              <template v-else-if="column.key === 'action'">
                <button
                  class="btn btn-success btn-sm d-flex align-items-center"
                  @click="approveCar(record.ID)"
                  :disabled="record.approving"
                >
                  <i class="ti ti-check me-1"></i>
                  {{ record.approving ? "Approving..." : "Approve" }}
                </button>
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
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref, computed, onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
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
    title: "ACTION",
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
      data: [],
      rowSelection,
      loading: true,
      searchQuery: "",
    };
  },
  computed: {
    filteredData() {
      if (!this.searchQuery) {
        return this.data;
      }
      const query = this.searchQuery.toLowerCase();
      return this.data.filter(
        (car) =>
          car.CAR.toLowerCase().includes(query) ||
          car.CAR_TYPE.toLowerCase().includes(query) ||
          car.BASE_LOCATION.toLowerCase().includes(query)
      );
    },
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
  async mounted() {
    await this.fetchPendingCars();
  },
  methods: {
    getImageUrl(imageName, recordId) {
      if (imageName && recordId) {
        return `http://127.0.0.1:8090/api/files/cars/${recordId}/${imageName}`;
      }
      // Fallback per immagini locali
      return new URL(`/src/assets/admin/img/car/car-01.jpg`, import.meta.url)
        .href;
    },
    async fetchPendingCars() {
      try {
        this.loading = true;
        const result = await pb.collection("cars").getList(1, 50, {
          filter: "approved = false",
          sort: "-created",
        });

        this.data = result.items.map((car) => ({
          ID: car.id,
          IMAGE:
            Array.isArray(car.images) && car.images.length > 0
              ? car.images[0]
              : "car-01.jpg",
          CAR: car.brand + " " + car.model,
          CAR_TYPE: car.type || "Sedan",
          BASE_LOCATION: car.location || "Unknown",
          PRICE: `$${car.price || 0}`,
          DAMAGES: car.damages || "0",
          CREATED_DATE: new Date(car.created).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
          approving: false,
        }));
      } catch (error) {
        console.error("Error fetching pending cars:", error);
        // Fallback to sample data if API fails
        this.data = [
          {
            ID: "1",
            IMAGE: "car-01.jpg",
            CAR: "Ford Endeavour",
            CAR_TYPE: "Sedan",
            BASE_LOCATION: "Newyork City",
            PRICE: "$3500",
            DAMAGES: "1",
            CREATED_DATE: "25 May 2025",
            approving: false,
          },
          {
            ID: "2",
            IMAGE: "car-02.jpg",
            CAR: "Ferrari 458 MM",
            CAR_TYPE: "Convertible",
            BASE_LOCATION: "Los Angeles",
            PRICE: "$2800",
            DAMAGES: "5",
            CREATED_DATE: "25 May 2025",
            approving: false,
          },
          {
            ID: "3",
            IMAGE: "car-03.jpg",
            CAR: "Ford Mustang",
            CAR_TYPE: "Coupe",
            BASE_LOCATION: "Chicago",
            PRICE: "$1425",
            DAMAGES: "5",
            CREATED_DATE: "25 May 2025",
            approving: false,
          },
        ];
      } finally {
        this.loading = false;
      }
    },
    async approveCar(carId) {
      try {
        // Find the car in the data array
        const carIndex = this.data.findIndex((car) => car.ID === carId);
        if (carIndex === -1) {
          console.error("Car not found in list");
          return;
        }

        // Set approving state using Vue 3 syntax
        this.data[carIndex].approving = true;

        // Update the car in PocketBase with explicit approved value
        const updatedCar = await pb.collection("cars").update(carId, {
          approved: true,
        });

        console.log("Car approved successfully:", updatedCar);

        // Remove the car from the list after successful update
        this.data.splice(carIndex, 1);

        // Show success feedback using alert (replace with your preferred notification method)
        alert("Car approved successfully!");
      } catch (error) {
        console.error("Error approving car:", error);

        // Show detailed error message
        let errorMessage = "Error approving car. ";
        if (error.message) {
          errorMessage += error.message;
        } else {
          errorMessage += "Please check the console for details.";
        }

        alert(errorMessage);

        // Reset approving state on error
        const carIndex = this.data.findIndex((car) => car.ID === carId);
        if (carIndex !== -1) {
          this.data[carIndex].approving = false;
        }
      }
    },
  },
};
</script>
