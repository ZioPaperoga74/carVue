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
          <h2 class="mb-1">Blog Comments</h2>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Blog Comments</li>
            </ol>
          </nav>
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
                      ><i class="ti ti-grip-vertical me-1"></i>REVIEW</span
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
                    <span><i class="ti ti-grip-vertical me-1"></i>CREATED DATE </span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>BLOG</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>CUSTOMER</span>
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
              <li class="dropdown-item d-flex align-items-center rounded-1">Published</li>
              <li class="dropdown-item d-flex align-items-center rounded-1">Unpublish</li>
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
            <template v-if="column.key === 'REVIEW'">
              <p class="text-gray-9 text-truncate">
                {{ record.REVIEW }}
              </p>
            </template>
            <template v-if="column.key === 'CREATEDDATE'">
              <p class="text-gray-9">{{ record.CREATEDDATE }}</p>
            </template>
            <template v-if="column.key === 'RATING'">
              <div>
                <ul class="d-flex align-items-center gap-1">
                  <li>
                    <span><i class="ti ti-star-filled text-warning"></i></span>
                  </li>
                  <li>
                    <span><i class="ti ti-star-filled text-warning"></i></span>
                  </li>
                  <li>
                    <span><i class="ti ti-star-filled text-warning"></i></span>
                  </li>
                  <li>
                    <span><i class="ti ti-star-filled text-warning"></i></span>
                  </li>
                  <li>
                    <span><i class="ti ti-star-filled text-warning"></i></span
                    >{{ record.RATING }}
                  </li>
                </ul>
              </div>
            </template>
            <template v-if="column.key === 'BLOG'">
              <p class="text-gray-9 text-truncate">
                {{ record.BLOG }}
              </p>
            </template>
            <template v-if="column.key === 'CUSTOMER'">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="avatar avatar-rounded me-2 flex-shrink-0"
                  ><img :src="getImageUrl(record.IMAGE)" alt="image"
                /></a>
                <div>
                  <h6 class="fw-semibold">
                    <a href="javascript:void(0);">{{ record.CUSTOMER }} </a>
                  </h6>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'STATUS'">
              <span
                class="d-inline-flex align-items-center badge-sm"
                :class="[
                  'badge',
                  {
                    'badge-soft-success': record.STATUS === 'Published',
                    'badge-soft-danger': record.STATUS === 'Unpublish',
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
  <div class="modal fade" id="delete_page">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Page</h4>
          <p class="mb-3">Are you sure you want to delete page?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="blog-comments"
              data-bs-dismiss="modal"
              class="btn btn-primary"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get } from "jquery";

const columns = [
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
    title: "BLOG",
    dataIndex: "BLOG",
    key: "BLOG",
    sorter: {
      compare: (a, b) => {
        a = a.BLOG.toLowerCase();
        b = b.BLOG.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
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
    REVIEW:
      "Loved this list! I took the Pacific Coast Highway trip last summer, and it was breathtaking. Highly recommend renting a convertible!",
    IMAGE: "avatar-20.jpg",
    CREATEDDATE: "24 Jan 2025",
    RATING: "(5.0)",
    BLOG: "Top 10 Car Rental Tips for a Hassle-Free Journey",
    CUSTOMER: "Andrew Simons",
    STATUS: "Published",
  },
  {
    REVIEW:
      "Great article! Do you have any tips on the best time of year to drive the Ring Road in Iceland?",
    IMAGE: "avatar-21.jpg",
    CREATEDDATE: "19 Dec 2024",
    RATING: "(4.0)",
    BLOG: "How to Save Money on Your Next Car Rental",
    CUSTOMER: "David Steiger",
    STATUS: "Unpublish",
  },
  {
    REVIEW:
      "The Scottish Highlands road trip is on my bucket list! Any recommendations for good rental car options for those narrow roads?",
    IMAGE: "avatar-22.jpg",
    CREATEDDATE: "11 Dec 2024",
    RATING: "(5.0)",
    BLOG: "Car Rental vs. Ride-Sharing: Which One is Right for You?",
    CUSTOMER: "Walter Hartmann",
    STATUS: "Published",
  },
  {
    REVIEW:
      "I did the Great Ocean Road drive last year, and it was stunning! The views, the beaches, and the wildlife—unforgettable!",
    IMAGE: "avatar-05.jpg",
    CREATEDDATE: "29 Nov 2024",
    RATING: "(3.0)",
    BLOG: "The Best Road Trip Routes to Take in a Rental Car",
    CUSTOMER: "Dennis Eckhardt",
    STATUS: "Published",
  },
  {
    REVIEW:
      "Iceland’s Ring Road sounds amazing! Is a 4x4 necessary, or can I manage with a regular rental car?",
    IMAGE: "avatar-24.jpg",
    CREATEDDATE: "03 Nov 2024",
    RATING: "(4.0)",
    BLOG: "Step-by-Step Guide to Booking a Rental Car Online",
    CUSTOMER: "Virginia Phu",
    STATUS: "Published",
  },
  {
    REVIEW:
      "Just booked my rental car for a road trip next month! Can't wait to explore new places. Thanks for the inspiration!",
    IMAGE: "avatar-25.jpg",
    CREATEDDATE: "31 Oct 2024",
    RATING: "(5.0)",
    BLOG: "What You Need to Know About Rental Car Insurance",
    CUSTOMER: "Lan Adams",
    STATUS: "Unpublish",
  },
  {
    REVIEW:
      "Fantastic suggestions! I'd love to see a follow-up post on hidden road trip gems that aren't as well known.",
    IMAGE: "avatar-10.jpg",
    CREATEDDATE: "15 Oct 2024",
    RATING: "(3.0)",
    BLOG: "Returning a Rental Car: Common Mistakes to Avoid",
    CUSTOMER: "Ann Crump",
    STATUS: "Unpublish",
  },
  {
    REVIEW:
      "Are there any scenic road trips in Europe you'd recommend that aren't as crowded with tourists?",
    IMAGE: "avatar-26.jpg",
    CREATEDDATE: "26 Sep 2024",
    RATING: "(5.0)",
    BLOG: "How to Find the Best Car Rental Deals & Discounts",
    CUSTOMER: "Andrea Jermaine",
    STATUS: "Published",
  },
  {
    REVIEW:
      "I’ve always wanted to do a cross-country road trip in the U.S.! Any tips on choosing the best rental car for long-distance travel?",
    IMAGE: "avatar-23.jpg",
    CREATEDDATE: "01 Sep 2024",
    RATING: "(4.0)",
    BLOG: "Luxury Car Rentals: Are They Worth the Price?",
    CUSTOMER: "Julie Black",
    STATUS: "Published",
  },
  {
    REVIEW:
      "This article makes me want to pack my bags and go! Road trips are the best way to travel. Thanks for the great ideas!",
    IMAGE: "avatar-16.jpg",
    CREATEDDATE: "15 Aug 2024",
    RATING: "(3.0)",
    BLOG: "Short-Term vs. Long-Term Car Rentals: Which Saves More?",
    CUSTOMER: "Jean Walker",
    STATUS: "Published",
  },
];
export default {
  data() {
    return {
      data,
      columns,
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/admin/img/profiles/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
