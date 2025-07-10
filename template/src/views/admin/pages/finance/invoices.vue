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
          <h4 class="mb-1">Invoices</h4>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Invoices</li>
            </ol>
          </nav>
        </div>
        <div>
          <router-link
            to="/admin-template/finance/add-invoice"
            class="btn btn-primary d-inline-flex align-items-center"
            ><i class="ti ti-plus me-1"></i>Add Invoice</router-link
          >
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
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <i class="ti ti-badge me-1"></i> Status
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Paid</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Pending</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Overdue</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Unpaid</a>
              </li>
            </ul>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>NAME</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>EMAIL</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>CREATED DATE</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>DUE DATE</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>INVOICE AMOUNT</span>
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

      <!-- Custom Data Table -->
      <div class="custom-datatable-filter table-responsive">
        <a-table class="table datatable" :columns="columns" :data-source="data">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'INVOICENO'">
              <router-link
                to="/admin-template/finance/invoice-details"
                class="fs-12 fw-medium"
                >{{ record.INVOICENO }}</router-link
              >
            </template>
            <template v-if="column.key === 'NAME'">
              <div class="d-flex align-items-center">
                <router-link
                  to="customer-details"
                  class="avatar avatar-rounded me-2 flex-shrink-0"
                  ><img :src="getImageUrl(record.IMAGE)" alt="User Img"
                /></router-link>
                <div>
                  <h6 class="fs-14">
                    <router-link to="customer-details">{{ record.NAME }}</router-link>
                  </h6>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'CREATEDDATE'">
              <div>
                <p class="mb-0">{{ record.CREATEDDATE }}</p>
                <span class="text-gray-5">{{ record.CREATEDTIME }}</span>
              </div>
            </template>
            <template v-if="column.key === 'DUEDATE'">
              <div>
                <p class="mb-0">{{ record.DUEDATE }}</p>
                <span class="text-gray-5">{{ record.DUETIME }}</span>
              </div>
            </template>
            <template v-if="column.key === 'STATUS'">
              <span
                class="d-inline-flex align-items-center badge-sm"
                :class="[
                  'badge',
                  {
                    'badge-soft-success': record.STATUS === 'Paid',
                    'badge-soft-danger': record.STATUS === 'Unpaid',
                    'badge-soft-info': record.STATUS === 'Pending',
                    'badge-soft-violet': record.STATUS === 'Overdue',
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
                    <router-link class="dropdown-item rounded-1" to="edit-invoice"
                      ><i class="ti ti-edit me-1"></i>Edit</router-link
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
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
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Invoice</h4>
          <p class="mb-3">Are you sure you want to delete Invoice?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/admin-template/finance/invoices"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
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
    title: "NAME",
    dataIndex: "NAME",
    key: "NAME",
    sorter: {
      compare: (a, b) => {
        a = a.NAME.toLowerCase();
        b = b.NAME.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "EMAIL",
    dataIndex: "EMAIL",
    key: "EMAIL",
    sorter: {
      compare: (a, b) => {
        a = a.EMAIL.toLowerCase();
        b = b.EMAIL.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "CREATE DDATE",
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
    title: "DUE DATE",
    dataIndex: "DUEDATE",
    key: "DUEDATE",
    sorter: {
      compare: (a, b) => {
        a = a.DUEDATE.toLowerCase();
        b = b.DUEDATE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "INVOICE AMOUNT",
    dataIndex: "INVOICEAMOUNT",
    key: "INVOICEAMOUNT",
    sorter: {
      compare: (a, b) => {
        a = a.INVOICEAMOUNT.toLowerCase();
        b = b.INVOICEAMOUNT.toLowerCase();
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
    INVOICENO: "#INV12345",
    IMAGE: "avatar-20.jpg",
    NAME: "Andrew Simons",
    EMAIL: "andrew@example.com",
    CREATEDDATE: "24 Jan 2025",
    CREATEDTIME: "01:00 PM",
    DUEDATE: "24 Jan 2025",
    DUETIME: "01:00 PM",
    INVOICEAMOUNT: "$120.00",
    STATUS: "Paid",
  },
  {
    INVOICENO: "#INV12346",
    IMAGE: "avatar-21.jpg",
    NAME: "David Steiger",
    EMAIL: "david@example.com",
    CREATEDDATE: "19 Dec 2024",
    CREATEDTIME: "10:00 AM",
    DUEDATE: "19 Dec 2024",
    DUETIME: "10:00 AM",
    INVOICEAMOUNT: "$85.00",
    STATUS: "Pending",
  },
  {
    INVOICENO: "#INV12347",
    IMAGE: "avatar-12.jpg",
    NAME: "Virginia Phu",
    EMAIL: "phu@example.com",
    CREATEDDATE: "11 Dec 2024",
    CREATEDTIME: "08:30 AM",
    DUEDATE: "11 Dec 2024",
    DUETIME: "08:30 AM",
    INVOICEAMOUNT: "$120.00",
    STATUS: "Paid",
  },
  {
    INVOICENO: "#INV12348",
    IMAGE: "avatar-22.jpg",
    NAME: "Walter Hartmann",
    EMAIL: "walter@example.com",
    CREATEDDATE: "29 Nov 2024",
    CREATEDTIME: "03:15 PM",
    DUEDATE: "29 Nov 2024",
    DUETIME: "03:15 PM",
    INVOICEAMOUNT: "$175.00",
    STATUS: "Overdue",
  },
  {
    INVOICENO: "#INV12349",
    IMAGE: "avatar-08.jpg",
    NAME: "Andrea Jermaine",
    EMAIL: "jermaine@example.com",
    CREATEDDATE: "03 Nov 2024",
    CREATEDTIME: "04:10 PM",
    DUEDATE: "03 Nov 2024",
    DUETIME: "04:10 PM",
    INVOICEAMOUNT: "$200.00",
    STATUS: "Paid",
  },
  {
    INVOICENO: "#INV12350",
    IMAGE: "avatar-05.jpg",
    NAME: "Dennis Eckhardt",
    EMAIL: "dennis@example.com",
    CREATEDDATE: "31 Oct 2024",
    CREATEDTIME: "11:00 AM",
    DUEDATE: "31 Oct 2024",
    DUETIME: "11:00 AM",
    INVOICEAMOUNT: "$90.00",
    STATUS: "Pending",
  },
  {
    INVOICENO: "#INV12351",
    IMAGE: "avatar-25.jpg",
    NAME: "Lan Adams",
    EMAIL: "lan@example.com",
    CREATEDDATE: "15 Oct 2024",
    CREATEDTIME: "09:40 AM",
    DUEDATE: "15 Oct 2024",
    DUETIME: "09:40 AM",
    INVOICEAMOUNT: "$160.00",
    STATUS: "Paid",
  },
  {
    INVOICENO: "#INV12352",
    IMAGE: "avatar-17.jpg",
    NAME: "Ann Crump",
    EMAIL: "crump@example.com",
    CREATEDDATE: "26 Sep 2024",
    CREATEDTIME: "02:30 PM",
    DUEDATE: "26 Sep 2024",
    DUETIME: "02:30 PM",
    INVOICEAMOUNT: "$180.00",
    STATUS: "Unpaid",
  },
  {
    INVOICENO: "#INV12353",
    IMAGE: "avatar-07.jpg",
    NAME: "Julie Black",
    EMAIL: "julie@example.com",
    CREATEDDATE: "01 Sep 2024",
    CREATEDTIME: "05:20 PM",
    DUEDATE: "01 Sep 2024",
    DUETIME: "05:20 PM",
    INVOICEAMOUNT: "$230.00",
    STATUS: "Paid",
  },
  {
    INVOICENO: "#INV12354",
    IMAGE: "avatar-26.jpg",
    NAME: "Jean Walker",
    EMAIL: "jean@example.com",
    CREATEDDATE: "15 Aug 2024",
    CREATEDTIME: "09:30 AM",
    DUEDATE: "15 Aug 2024",
    DUETIME: "09:30 AM",
    INVOICEAMOUNT: "$300.00",
    STATUS: "Paid",
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
