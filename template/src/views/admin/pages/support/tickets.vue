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
          <h4 class="mb-1">Tickets</h4>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Tickets</li>
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
              class="btn btn-primary d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#add_ticket"
              ><i class="ti ti-plus me-2"></i>Add New Ticket</a
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
                      ><i class="ti ti-grip-vertical me-1"></i>TICKET CODE</span
                    >
                    <div class="form-check form-check-sm form-switch mb-0">
                      <input
                        class="form-check-input form-label"
                        type="checkbox"
                        role="switch"
                        checked=""
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="dropdown-item d-flex align-items-center justify-content-between rounded-1"
                  >
                    <span><i class="ti ti-grip-vertical me-1"></i>CREATED BY</span>
                    <div class="form-check form-check-sm form-switch mb-0">
                      <input
                        class="form-check-input form-label"
                        type="checkbox"
                        role="switch"
                        checked=""
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="dropdown-item d-flex align-items-center justify-content-between rounded-1"
                  >
                    <span><i class="ti ti-grip-vertical me-1"></i>SUBJECT</span>
                    <div class="form-check form-check-sm form-switch mb-0">
                      <input
                        class="form-check-input form-label"
                        type="checkbox"
                        role="switch"
                        checked=""
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="dropdown-item d-flex align-items-center justify-content-between rounded-1"
                  >
                    <span><i class="ti ti-grip-vertical me-1"></i>CREATED DATE</span>
                    <div class="form-check form-check-sm form-switch mb-0">
                      <input
                        class="form-check-input form-label"
                        type="checkbox"
                        role="switch"
                        checked=""
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="dropdown-item d-flex align-items-center justify-content-between rounded-1"
                  >
                    <span><i class="ti ti-grip-vertical me-1"></i>PRIORITY</span>
                    <div class="form-check form-check-sm form-switch mb-0">
                      <input
                        class="form-check-input form-label"
                        type="checkbox"
                        role="switch"
                        checked=""
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="dropdown-item d-flex align-items-center justify-content-between rounded-1"
                  >
                    <span><i class="ti ti-grip-vertical me-1"></i>ASSIGNEE</span>
                    <div class="form-check form-check-sm form-switch mb-0">
                      <input
                        class="form-check-input form-label"
                        type="checkbox"
                        role="switch"
                        checked=""
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
                        checked=""
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
              Priority
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
                  <input class="form-check-input m-0 me-2" type="checkbox" />Low
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Medium
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />High
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
                  <input class="form-check-input m-0 me-2" type="checkbox" />Resolved
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Inprogress
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Open
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Closed
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
            <template v-if="column.key === 'TICKETCODE'">
              <router-link to="/support/tickets-details">{{
                record.TICKETCODE
              }}</router-link>
            </template>
            <template v-if="column.key === 'CREATEDBY'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar me-2 flex-shrink-0">
                  <img
                    :src="getImageURL(record.CREATEDIMAGE)"
                    class="rounded-circle"
                    alt=""
                  />
                </a>
                <h6>
                  <a href="javascript:void(0);" class="fs-14 fw-semibold">{{
                    record.CREATEDBY
                  }}</a>
                </h6>
              </div>
            </template>
            <template v-if="column.key === 'SUBJECT'">
              <p class="text-gray-9">{{ record.SUBJECT }}</p>
            </template>
            <template v-if="column.key === 'CREATEDDATE'">
              <p class="text-gray-9">{{ record.CREATEDDATE }}</p>
            </template>
            <template v-if="column.key === 'PRIORITY'">
              <span class="badge badge-dark-transparent rounded-pill">
                <i
                  :class="[
                    'ti ti-point-filled',
                    {
                      'text-success': record.PRIORITY === 'Low',
                      'text-danger': record.PRIORITY === 'High',
                      'text-warning': record.PRIORITY === 'Medium',
                    },
                  ]"
                ></i
                >{{ record.PRIORITY }}
              </span>
            </template>
            <template v-if="column.key === 'ASSIGNEE'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar me-2 flex-shrink-0">
                  <img
                    :src="getImageURLOne(record.ASSIGNEEIMAGE)"
                    class="rounded-circle"
                    alt=""
                  />
                </a>
                <h6>
                  <a href="javascript:void(0);" class="fs-14 fw-semibold">{{
                    record.ASSIGNEE
                  }}</a>
                </h6>
              </div>
            </template>
            <template v-if="column.key === 'STATUS'">
              <span
                :class="[
                  'badge-sm',
                  {
                    'badge bg-success-transparent': record.STATUS === 'Resolved',
                    'badge bg-info-transparent': record.STATUS === 'Inprogress',
                    'badge bg-danger-transparent': record.STATUS === 'Closed',
                    'badge bg-violet-transparent': record.STATUS === 'Open',
                  },
                ]"
              >
                <i
                  class="ti ti-point-filled"
                  :class="[
                    'me-1',
                    {
                      'text-success': record.STATUS === 'Resolved',
                      'text-info': record.STATUS === 'Inprogress',
                      'text-danger': record.STATUS === 'Closed',
                      'text-violet': record.STATUS === 'Open',
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
                    <a class="dropdown-item rounded-1" href="javascript:void(0);"
                      ><i class="ti ti-edit me-1"></i>Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_contact"
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
  <tickets-modal></tickets-modal>
</template>
<script>
const columns = [
  {
    title: "TICKET CODE",
    dataIndex: "TICKETCODE",
    key: "TICKETCODE",
    sorter: {
      compare: (a, b) => {
        a = a.TICKETCODE.toLowerCase();
        b = b.TICKETCODE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "CREATED BY",
    dataIndex: "CREATEDBY",
    key: "CREATEDBY",
    sorter: {
      compare: (a, b) => {
        a = a.CREATEDBY.toLowerCase();
        b = b.CREATEDBY.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "SUBJECT",
    dataIndex: "SUBJECT",
    key: "SUBJECT",
    sorter: {
      compare: (a, b) => {
        a = a.SUBJECT.toLowerCase();
        b = b.SUBJECT.toLowerCase();
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
    title: "PRIORITY",
    dataIndex: "PRIORITY",
    key: "PRIORITY",
    sorter: {
      compare: (a, b) => {
        a = a.PRIORITY.toLowerCase();
        b = b.PRIORITY.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "ASSIGNEE",
    dataIndex: "ASSIGNEE",
    key: "ASSIGNEE",
    sorter: {
      compare: (a, b) => {
        a = a.ASSIGNEE.toLowerCase();
        b = b.ASSIGNEE.toLowerCase();
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
    TICKETCODE: "#TCKT001",
    CREATEDBY: "Andrew Simons",
    CREATEDIMAGE: "avatar-20.jpg",
    SUBJECT: "Payment Issue",
    CREATEDDATE: "24 Jan 2025",
    PRIORITY: "Low",
    ASSIGNEE: "Shaun Farley",
    ASSIGNEEIMAGE: "avatar-38.jpg",
    STATUS: "Resolved",
  },
  {
    TICKETCODE: "#TCKT002",
    CREATEDBY: "David Steiger",
    CREATEDIMAGE: "avatar-21.jpg",
    SUBJECT: "Car Not Available",
    CREATEDDATE: "19 Dec 2024",
    PRIORITY: "Medium",
    ASSIGNEE: "Jenny Ellis",
    ASSIGNEEIMAGE: "avatar-12.jpg",
    STATUS: "Inprogress",
  },
  {
    TICKETCODE: "#TCKT003",
    CREATEDBY: "Virginia Phu",
    CREATEDIMAGE: "avatar-12.jpg",
    SUBJECT: "Late Pickup Issue",
    CREATEDDATE: "11 Dec 2024",
    PRIORITY: "High",
    ASSIGNEE: "Leon Baxter",
    ASSIGNEEIMAGE: "avatar-30.jpg",
    STATUS: "Resolved",
  },
  {
    TICKETCODE: "#TCKT004",
    CREATEDBY: "Walter Hartmann",
    CREATEDIMAGE: "avatar-22.jpg",
    SUBJECT: "Wrong Car Delivered",
    CREATEDDATE: "29 Nov 2024",
    PRIORITY: "Low",
    ASSIGNEE: "Karen Flores",
    ASSIGNEEIMAGE: "avatar-31.jpg",
    STATUS: "Open",
  },
  {
    TICKETCODE: "#TCKT005",
    CREATEDBY: "Andrea Jermaine",
    CREATEDIMAGE: "avatar-27.jpg",
    SUBJECT: "Accidental Damage Report",
    CREATEDDATE: "03 Nov 2024",
    PRIORITY: "Medium",
    ASSIGNEE: "Michael Dawson",
    ASSIGNEEIMAGE: "avatar-32.jpg",
    STATUS: "Resolved",
  },
  {
    TICKETCODE: "#TCKT006",
    CREATEDBY: "Dennis Eckhardt",
    CREATEDIMAGE: "avatar-05.jpg",
    SUBJECT: "Refund Request",
    CREATEDDATE: "31 Oct 2024",
    PRIORITY: "High",
    ASSIGNEE: "Karen Galvan",
    ASSIGNEEIMAGE: "avatar-33.jpg",
    STATUS: "Inprogress",
  },
  {
    TICKETCODE: "#TCKT007",
    CREATEDBY: "Lan Adams",
    CREATEDIMAGE: "avatar-25.jpg",
    SUBJECT: "Extension Request",
    CREATEDDATE: "15 Oct 2024",
    PRIORITY: "Low",
    ASSIGNEE: "Thomas Ward",
    ASSIGNEEIMAGE: "avatar-34.jpg",
    STATUS: "Resolved",
  },
  {
    TICKETCODE: "#TCKT008",
    CREATEDBY: "Ann Crump",
    CREATEDIMAGE: "avatar-28.jpg",
    SUBJECT: "Unable to Apply Coupon",
    CREATEDDATE: "26 Sep 2024",
    PRIORITY: "Medium",
    ASSIGNEE: "Aliza Duncan",
    ASSIGNEEIMAGE: "avatar-35.jpg",
    STATUS: "Closed",
  },
  {
    TICKETCODE: "#TCKT009",
    CREATEDBY: "Julie Black",
    CREATEDIMAGE: "avatar-07.jpg",
    SUBJECT: "Overcharge on Invoice",
    CREATEDDATE: "01 Sep 2024",
    PRIORITY: "High",
    ASSIGNEE: "James Higham",
    ASSIGNEEIMAGE: "avatar-36.jpg",
    STATUS: "Resolved",
  },
  {
    TICKETCODE: "#TCKT0010",
    CREATEDBY: "Jean Walker",
    CREATEDIMAGE: "avatar-29.jpg",
    SUBJECT: "GPS Not Working",
    CREATEDDATE: "15 Aug 2024",
    PRIORITY: "Low",
    ASSIGNEE: "Jade Robinson",
    ASSIGNEEIMAGE: "avatar-37.jpg",
    STATUS: "Resolved",
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
    getImageURL(imageName) {
      return new URL(`/src/assets/admin/img/profiles/${imageName}`, import.meta.url).href;
    },
    getImageURLOne(imageName) {
      return new URL(`/src/assets/admin/img/profiles/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
