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
          <h2 class="mb-1">Testimonials</h2>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Testimonials</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#add_testimonial"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-plus me-2"></i>Add Testimonial</a
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
              Rating
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
                  <input class="form-check-input m-0 me-2" type="checkbox" />5 Star
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />4 Star
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />3 Star
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />2 Star
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />1 Star
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
            <template v-if="column.key === 'CUSTOMER'">
              <div class="d-flex align-items-center">
                <router-link
                  to="customer-details"
                  class="avatar avatar-rounded me-2 flex-shrink-0"
                  ><img :src="getImageUrl(record.IMAGE)" alt=""
                /></router-link>
                <div>
                  <router-link to="customer-details" class="fw-semibold">{{
                    record.CUSTOMER
                  }}</router-link>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'RATING'">
              <div class="d-flex align-items-center">
                <span class="me-1"><i class="ti ti-star-filled text-warning"></i></span>
                <span class="me-1"><i class="ti ti-star-filled text-warning"></i></span>
                <span class="me-1"><i class="ti ti-star-filled text-warning"></i></span>
                <span class="me-1"><i class="ti ti-star-filled text-warning"></i></span>
                <span class="me-1"><i class="ti ti-star-filled text-warning"></i></span>
                <span>{{ record.RATING }}</span>
              </div>
            </template>
            <template v-if="column.key === 'REVIEW'">
              <a href="javascript:void(0);">{{ record.REVIEW }}</a>
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
                      data-bs-target="#edit_testimonial"
                      ><i class="ti ti-edit me-1"></i>Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_testimonials"
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
  <testimonials-modal></testimonials-modal>
</template>
<script>
const columns = [
  {
    title: "CUSTOMER",
    dataIndex: "CUSTOMER",
    key: "CUSTOMER",
    sorter: {
      compare: (a, b) => {
        a = a.CUSTOMER.toLowerCase();
        b = b.CUSTOMER.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "RATING",
    dataIndex: "RATING",
    key: "RATING",
    sorter: {
      compare: (a, b) => {
        a = a.RATING.toLowerCase();
        b = b.RATING.toLowerCase();
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
    title: "CREATED DATE",
    dataIndex: "CREATEDDATE",
    key: "CREATEDDATE",
    sorter: {
      compare: (a, b) => {
        a = a.CREATEDDATE.toLowerCase();
        b = b.CREATEDDATE.toLowerCase();
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
    IMAGE: "customer-01.jpg",
    CUSTOMER: "Andrew Simons",
    RATING: "(5.0)",
    REVIEW: "The rental was spotless, great host!",
    CREATEDDATE: "24 Jan 2025",
  },
  {
    key: "2",
    IMAGE: "customer-02.jpg",
    CUSTOMER: "David Steiger",
    RATING: "(4.0)",
    REVIEW: "Good stay, but Wi-Fi was slow.",
    CREATEDDATE: "19 Dec 2024",
  },
  {
    key: "3",
    IMAGE: "customer-03.jpg",
    CUSTOMER: "Virginia Phu",
    RATING: "(5.0)",
    REVIEW: "Loved everything about this place!",
    CREATEDDATE: "11 Dec 2024",
  },
  {
    key: "4",
    IMAGE: "customer-04.jpg",
    CUSTOMER: "Walter Hartmann",
    RATING: "(3.0)",
    REVIEW: "Needs better maintenance service.",
    CREATEDDATE: "29 Nov 2024",
  },
  {
    key: "5",
    IMAGE: "customer-05.jpg",
    CUSTOMER: "Andrea Jermaine",
    RATING: "(4.0)",
    REVIEW: "Nice apartment, but check-in was slow.",
    CREATEDDATE: "03 Nov 2024",
  },
  {
    key: "6",
    IMAGE: "customer-06.jpg",
    CUSTOMER: "Dennis Eckhardt",
    RATING: "(5.0)",
    REVIEW: "Highly recommend, everything was perfect!",
    CREATEDDATE: "31 Oct 2024",
  },
  {
    key: "7",
    IMAGE: "customer-07.jpg",
    CUSTOMER: "Dennis Eckhardt",
    RATING: "(5.0)",
    REVIEW: "Highly recommend, everything was perfect!",
    CREATEDDATE: "31 Oct 2024",
  },
  {
    key: "8",
    IMAGE: "customer-08.jpg",
    CUSTOMER: "Lan Adams",
    RATING: "(3.0)",
    REVIEW: "Decent experience, but expected better service.",
    CREATEDDATE: "15 Oct 2024",
  },
  {
    key: "9",
    IMAGE: "customer-09.jpg",
    CUSTOMER: "Ann Crump",
    RATING: "(5.0)",
    REVIEW: "Great place for work trips, fast Wi-Fi!",
    CREATEDDATE: "26 Sep 2024",
  },
  {
    key: "10",
    IMAGE: "customer-10.jpg",
    CUSTOMER: "Julie Black",
    RATING: "(4.0)",
    REVIEW: "Affordable and close to university.",
    CREATEDDATE: "01 Sep 2024",
  },
  {
    key: "11",
    IMAGE: "customer-02.jpg",
    CUSTOMER: "Jean Walker",
    RATING: "(3.0)",
    REVIEW: "Perfect for our family getaway!",
    CREATEDDATE: "15 Aug 2024",
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
      return new URL(`/src/assets/admin/img/customer/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
