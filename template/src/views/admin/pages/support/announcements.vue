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
          <h4 class="mb-1">Announcement</h4>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Announcement</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-primary d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#add_announcement"
              ><i class="ti ti-plus me-2"></i>Add Announcement</a
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
              <i class="ti ti-filter me-1"></i> Filter<span
                class="badge badge-xs rounded-pill bg-danger ms-2"
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
              <span class="badge badge-xs rounded-pill bg-success me-2">4</span>Type
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
                  <input class="form-check-input m-0 me-2" type="checkbox" checked />New
                  Rental Service
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Special Offer
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" checked />New
                  Vehicle Addition
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input
                    class="form-check-input m-0 me-2"
                    type="checkbox"
                    checked
                  />Seasonal Promotion
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Policy Update
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Branch
                  Opening
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input
                    class="form-check-input m-0 me-2"
                    type="checkbox"
                    checked
                  />Customer Safety
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Loyalty
                  Program
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Emergency
                  Closure
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Online
                  Booking Update
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
            <ul class="dropdown-menu dropdown-menu-md p-2">
              <li class="dropdown-item">Published</li>
              <li class="dropdown-item">Unpublish</li>
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
            <template v-if="column.key === 'DATE'">
              <p class="text-gray-9 mb-0">{{ record.DATE }}</p>
              <p class="fs-13 text-gray-5">{{ record.TIME }}</p>
            </template>
            <template v-if="column.key === 'ANNOUNCEMENT'">
              <p class="text-gray-9 mb-0">{{ record.ANNOUNCEMENT }}</p>
              <p class="fs-13 text-gray-5">
                {{ record.CONTENT }}
              </p>
            </template>
            <template v-if="column.key === 'TYPE'">
              <p class="text-gray-9">{{ record.TYPE }}</p>
            </template>
            <template v-if="column.key === 'STATUS'">
              <span
                :class="[
                  'badge-sm',
                  {
                    'badge bg-success-transparent': record.STATUS === 'Published',
                    'badge bg-danger-transparent': record.STATUS === 'Unpublish',
                  },
                ]"
              >
                <i
                  class="ti ti-point-filled"
                  :class="[
                    'me-1',
                    {
                      'text-success': record.STATUS === 'Published',
                      'text-danger': record.STATUS === 'Unpublish',
                    },
                  ]"
                ></i
                >{{ record.STATUS }}
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
                      data-bs-target="#edit_announcement"
                      ><i class="ti ti-edit me-1"></i>Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#announcement_detail"
                      ><i class="ti ti-eye me-1"></i>Details</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_announcement"
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
    <!-- Add Announcement -->
    <div class="modal fade" id="add_announcement">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="mb-0">Add Announcement</h5>
            <button
              type="button"
              class="btn-close custom-btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-x fs-16"></i>
            </button>
          </div>
          <div class="modal-body pb-1">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Announcement Title <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Announcement Type <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="account"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Users <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="users"
                    v-model="selectedOne"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Description <span class="text-danger">*</span></label
                  >
                  <div class="editor"></div>
                  <p class="mt-2">Maximum 60 Words</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary">Create New</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Add Announcement -->

    <!-- Edit Announcement -->
    <div class="modal fade" id="edit_announcement">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="mb-0">Edit Announcement</h5>
            <button
              type="button"
              class="btn-close custom-btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-x fs-16"></i>
            </button>
          </div>
          <div class="modal-body pb-1">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Announcement Title <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="Limited-Time Offer!" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Announcement Type <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="accountedit"
                    v-model="selectedOne"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Users <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="usersedit"
                    v-model="selectedTwo"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Description <span class="text-danger">*</span></label
                  >
                  <div class="editor">
                    We are now offering premium car rentals in your city! Book your ride
                    today and enjoy unbeatable rates.
                  </div>
                  <p class="mt-2">Maximum 60 Words</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex justify-content-between align-items-center w-100">
              <div class="form-check form-check-md form-switch me-2">
                <label class="form-check-label form-label mt-0 mb-0">
                  <input
                    class="form-check-input form-label me-2"
                    type="checkbox"
                    role="switch"
                    checked=""
                  />
                  Status
                </label>
              </div>
              <div class="d-flex justify-content-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  >Cancel</a
                >
                <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Edit Announcement -->

    <!-- Announcement Details -->
    <div class="modal fade" id="announcement_detail">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="mb-0">Announcement Details</h5>
            <button
              type="button"
              class="btn-close custom-btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-x fs-16"></i>
            </button>
          </div>
          <div class="modal-body pb-1">
            <div class="mb-3">
              <p class="text-gray-9 fw-medium mb-0">Announcement Type</p>
              <p>New Rental Servicepe</p>
            </div>
            <div class="mb-3">
              <p class="text-gray-9 fw-medium mb-0">Description</p>
              <p>Limited-Time Offer!</p>
            </div>
            <div class="mb-3">
              <p class="text-gray-9 fw-medium mb-0">Announcement Type</p>
              <p>
                We are now offering premium car rentals in your city! Book your ride today
                and enjoy unbeatable rates.
              </p>
            </div>
            <div class="mb-3">
              <p class="text-gray-9 fw-medium mb-0">Date</p>
              <p>10 Jan 2025</p>
            </div>
            <h6 class="mb-3">Announcement Views</h6>
            <div class="custom-datatable-filter table-responsive brandstable mb-3">
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th>USER</th>
                    <th>ROLE</th>
                    <th>VIEWED DATE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/rentals/car-details"
                          class="avatar me-2 flex-shrink-0"
                        >
                          <img
                            src="@/assets/admin/img/profiles/avatar-20.jpg"
                            class="rounded-circle"
                            alt=""
                          />
                        </router-link>
                        <h6>
                          <a href="javascript:void(0);" class="fs-14 fw-semibold"
                            >Andrew Simons</a
                          >
                        </h6>
                      </div>
                    </td>
                    <td>
                      <p class="text-gray-9">Admin</p>
                    </td>
                    <td>
                      <p class="text-gray-9 mb-0">29 Nov 2024</p>
                      <p class="fs-13 text-gray-5">01:00 PM</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/rentals/car-details"
                          class="avatar me-2 flex-shrink-0"
                        >
                          <img
                            src="@/assets/admin/img/profiles/avatar-21.jpg"
                            class="rounded-circle"
                            alt=""
                          />
                        </router-link>
                        <h6>
                          <a href="javascript:void(0);" class="fs-14 fw-semibold"
                            >David Steiger</a
                          >
                        </h6>
                      </div>
                    </td>
                    <td>
                      <p class="text-gray-9">Manager</p>
                    </td>
                    <td>
                      <p class="text-gray-9 mb-0">19 Dec 2024</p>
                      <p class="fs-13 text-gray-5">10:00 AM</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/rentals/car-details"
                          class="avatar me-2 flex-shrink-0"
                        >
                          <img
                            src="@/assets/admin/img/profiles/avatar-12.jpg"
                            class="rounded-circle"
                            alt=""
                          />
                        </router-link>
                        <h6>
                          <a href="javascript:void(0);" class="fs-14 fw-semibold"
                            >Virginia Phu</a
                          >
                        </h6>
                      </div>
                    </td>
                    <td>
                      <p class="text-gray-9">Customer</p>
                    </td>
                    <td>
                      <p class="text-gray-9 mb-0">24 Dec 2024</p>
                      <p class="fs-13 text-gray-5">12:32 PM</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/rentals/car-details"
                          class="avatar me-2 flex-shrink-0"
                        >
                          <img
                            src="@/assets/admin/img/profiles/avatar-22.jpg"
                            class="rounded-circle"
                            alt=""
                          />
                        </router-link>
                        <h6>
                          <a href="javascript:void(0);" class="fs-14 fw-semibold"
                            >Walter Hartmann</a
                          >
                        </h6>
                      </div>
                    </td>
                    <td>
                      <p class="text-gray-9">Accountant</p>
                    </td>
                    <td>
                      <p class="text-gray-9 mb-0">29 Nov 2024</p>
                      <p class="fs-13 text-gray-5">03:15 PM</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/rentals/car-details"
                          class="avatar me-2 flex-shrink-0"
                        >
                          <img
                            src="@/assets/admin/img/profiles/avatar-27.jpg"
                            class="rounded-circle"
                            alt=""
                          />
                        </router-link>
                        <h6>
                          <a href="javascript:void(0);" class="fs-14 fw-semibold"
                            >Andrea Jermaine</a
                          >
                        </h6>
                      </div>
                    </td>
                    <td>
                      <p class="text-gray-9">Inspector</p>
                    </td>
                    <td>
                      <p class="text-gray-9 mb-0">03 Nov 2024</p>
                      <p class="fs-13 text-gray-5">04:10 PM</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Announcement Details -->

    <!-- Delete  -->
    <div class="modal fade" id="delete_announcement">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-body text-center">
            <span
              class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
            >
              <i class="ti ti-trash-x fs-26"></i>
            </span>
            <h4 class="mb-1">Delete Announcement</h4>
            <p class="mb-3">Are you sure you want to delete announcement?</p>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <a
                href="javascript:void(0);"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                >Yes, Delete</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Delete -->
  </div>
</template>
<script>
const columns = [
  {
    title: "DATE",
    dataIndex: "DATE",
    key: "DATE",
    sorter: {
      compare: (a, b) => {
        a = a.DATE.toLowerCase();
        b = b.DATE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "ANNOUNCEMENT",
    dataIndex: "ANNOUNCEMENT",
    key: "ANNOUNCEMENT",
    sorter: {
      compare: (a, b) => {
        a = a.ANNOUNCEMENT.toLowerCase();
        b = b.ANNOUNCEMENT.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "TYPE",
    dataIndex: "TYPE",
    key: "TYPE",
    sorter: {
      compare: (a, b) => {
        a = a.TYPE.toLowerCase();
        b = b.TYPE.toLowerCase();
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
    DATE: "29 Nov 2024",
    TIME: "01:00 PM",
    ANNOUNCEMENT: "Exciting News!",
    CONTENT: "We are now offering premium car rentals in your city!",
    TYPE: "New Rental Service",
    STATUS: "Published",
  },
  {
    DATE: "03 Nov 2024",
    TIME: "10:00 AM",
    ANNOUNCEMENT: "Limited-Time Offer!",
    CONTENT: "Get 20% off on all weekend rentals. Book now and hit the road for less!",
    TYPE: "Special Offer",
    STATUS: "Unpublish",
  },
  {
    DATE: "31 Oct 2024",
    TIME: "08:30 AM",
    ANNOUNCEMENT: "New Arrivals!",
    CONTENT: "We've added luxury SUVs and electric vehicles to our fleet.",
    TYPE: "New Vehicle Addition",
    STATUS: "Published",
  },
  {
    DATE: "15 Oct 2024",
    TIME: "03:15 PM",
    ANNOUNCEMENT: "Holiday Special!",
    CONTENT: "Rent a car for 3 days and get the 4th day free this festive season.",
    TYPE: "Seasonal Promotion",
    STATUS: "Published",
  },
  {
    DATE: "26 Sep 2024",
    TIME: "04:10 PM",
    ANNOUNCEMENT: "Important Update!",
    CONTENT: "Our rental deposit policy has changed.",
    TYPE: "Policy Update",
    STATUS: "Published",
  },
  {
    DATE: "01 Sep 2024",
    TIME: "11:00 AM",
    ANNOUNCEMENT: "We've Expanded!",
    CONTENT: "Now serving customers at our brand-new Downtown Rental Center.",
    TYPE: "Branch Opening",
    STATUS: "Unpublish",
  },
  {
    DATE: "15 Aug 2024",
    TIME: "09:40 AM",
    ANNOUNCEMENT: "Your Safety Matters!",
    CONTENT: "We ensure all rental cars are maintained for a worry-free journey.",
    TYPE: "Customer Safety",
    STATUS: "Unpublish",
  },
  {
    DATE: "24 Jan 2025",
    TIME: "02:30 PM",
    ANNOUNCEMENT: "Introducing Our Rewards Program!",
    CONTENT: "Earn points every time you rent and redeem them for discounts.",
    TYPE: "Loyalty Program",
    STATUS: "Published",
  },
  {
    DATE: "19 Dec 2024",
    TIME: "05:20 PM",
    ANNOUNCEMENT: "Temporary Closure Alert!",
    CONTENT:
      "Due to weather conditions, our rental office will be closed on 20 Jan 2025.",
    TYPE: "Emergency Closure",
    STATUS: "Published",
  },
  {
    DATE: "11 Dec 2024",
    TIME: "09:30 AM",
    ANNOUNCEMENT: "Easier Than Ever!",
    CONTENT: "Our new website now lets you book your rentals in just a few clicks!",
    TYPE: "Online Booking Update",
    STATUS: "Published",
  },
];
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      account: [
        { label: "Select", value: "Select" },
        { label: "New Rental Service", value: "New Rental Service" },
        { label: "Special Offer", value: "Special Offer" },
        { label: "Seasonal Promotion", value: "Seasonal Promotion" },
      ],
      users: [
        { label: "Select", value: "Select" },
        { label: "Customer", value: "Customer" },
        { label: "Admin", value: "Admin" },
        { label: "Manager", value: "Manager" },
      ],
      accountedit: [
        { label: "Select", value: "Select" },
        { label: "New Rental Service", value: "New Rental Service" },
        { label: "Special Offer", value: "Special Offer" },
        { label: "Seasonal Promotion", value: "Seasonal Promotion" },
      ],
      usersedit: [
        { label: "Select", value: "Select" },
        { label: "Customer", value: "Customer" },
        { label: "Admin", value: "Admin" },
        { label: "Manager", value: "Manager" },
      ],
      data,
      columns,
    };
  },
};
</script>
