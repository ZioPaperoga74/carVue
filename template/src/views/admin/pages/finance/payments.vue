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
          <h4 class="mb-1">Payments</h4>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Payments</li>
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
                      ><i class="ti ti-grip-vertical me-1"></i>TRANSACTION ID</span
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
                    <span><i class="ti ti-grip-vertical me-1"></i>AMOUNT</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>PAYMENT METHOD</span>
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
              <span class="badge badge-xs rounded-pill bg-success me-2">2</span>Payment
              Method
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
                  <input class="form-check-input m-0 me-2" type="checkbox" />Credit Card
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" checked />Debit
                  Card
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />PayPal
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" checked />Bank
                  Transfer
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Digital
                  Payment
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
                  <input class="form-check-input m-0 me-2" type="checkbox" />Pending
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
            <template v-if="column.key === 'INVOICENO'">
              <a href="javascript:void(0);">{{ record.TRANSACTIONID }}</a>
            </template>
            <template v-if="column.key === 'NAME'">
              <div class="d-flex align-items-center">
                <router-link to="customer-details" class="avatar me-2 flex-shrink-0">
                  <img :src="getImageUrl(record.IMAGE)" class="rounded-circle" alt="" />
                </router-link>
                <h6>
                  <router-link to="customer-details" class="fs-14 fw-semibold">{{
                    record.NAME
                  }}</router-link>
                </h6>
              </div>
            </template>
            <template v-if="column.key === 'AMOUNT'">
              <p class="text-gray-9">{{ record.AMOUNT }}</p>
            </template>
            <template v-if="column.key === 'PAYMENTMETHOD'">
              <p class="text-gray-9">{{ record.PAYMENTMETHOD }}</p>
            </template>
            <template v-if="column.key === 'DATE'">
              <p class="text-gray-9">{{ record.DATE }}</p>
            </template>
            <template v-if="column.key === 'STATUS'">
              <span
                class="d-inline-flex align-items-center badge-sm"
                :class="[
                  'badge',
                  {
                    'badge-soft-success': record.STATUS === 'Completed',
                    'badge-soft-danger': record.STATUS === 'Failed',
                    'badge-soft-info': record.STATUS === 'Pending',
                    'badge-soft-violet': record.STATUS === 'Refunded',
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
</template>
<script>
const columns = [
  {
    title: "TRANSACTION ID",
    dataIndex: "TRANSACTIONID",
    key: "TRANSACTIONID",
    sorter: {
      compare: (a, b) => {
        a = a.TRANSACTIONID.toLowerCase();
        b = b.TRANSACTIONID.toLowerCase();
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
    title: "AMOUNT",
    dataIndex: "AMOUNT",
    key: "AMOUNT",
    sorter: {
      compare: (a, b) => {
        a = a.AMOUNT.toLowerCase();
        b = b.AMOUNT.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "PAYMENT METHOD",
    dataIndex: "PAYMENTMETHOD",
    key: "PAYMENTMETHOD",
    sorter: {
      compare: (a, b) => {
        a = a.PAYMENTMETHOD.toLowerCase();
        b = b.PAYMENTMETHOD.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
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
    TRANSACTIONID: "TX12345",
    NAME: "Andrew Simons",
    IMAGE: "avatar-20.jpg",
    AMOUNT: "$120.00",
    PAYMENTMETHOD: "Credit Card",
    DATE: "24 Jan 2025",
    STATUS: "Completed",
  },
  {
    TRANSACTIONID: "TX12346",
    NAME: "David Steiger",
    IMAGE: "avatar-21.jpg",
    AMOUNT: "$85.00",
    PAYMENTMETHOD: "Debit Card",
    DATE: "19 Dec 2024",
    STATUS: "Pending",
  },
  {
    TRANSACTIONID: "TX12347",
    NAME: "Virginia Phu",
    IMAGE: "avatar-12.jpg",
    AMOUNT: "$250.00",
    PAYMENTMETHOD: "PayPal",
    DATE: "11 Dec 2024",
    STATUS: "Completed",
  },
  {
    TRANSACTIONID: "TX12348",
    NAME: "Walter Hartmann",
    IMAGE: "avatar-22.jpg",
    AMOUNT: "$175.00",
    PAYMENTMETHOD: "Bank Transfer",
    DATE: "29 Nov 2024",
    STATUS: "Refunded",
  },
  {
    TRANSACTIONID: "TX12349",
    NAME: "Andrea Jermaine",
    IMAGE: "avatar-27.jpg",
    AMOUNT: "$200.00",
    PAYMENTMETHOD: "Digital Payment",
    DATE: "03 Nov 2024",
    STATUS: "Completed",
  },
  {
    TRANSACTIONID: "TX12350",
    NAME: "Dennis Eckhardt",
    IMAGE: "avatar-05.jpg",
    AMOUNT: "$90.00",
    PAYMENTMETHOD: "Credit Card",
    DATE: "31 Oct 2024",
    STATUS: "Pending",
  },
  {
    TRANSACTIONID: "TX12351",
    NAME: "Lan Adams",
    IMAGE: "avatar-25.jpg",
    AMOUNT: "$160.00",
    PAYMENTMETHOD: "Debit Card",
    DATE: "15 Oct 2024",
    STATUS: "Completed",
  },
  {
    TRANSACTIONID: "TX12352",
    NAME: "Ann Crump",
    IMAGE: "avatar-28.jpg",
    AMOUNT: "$180.00",
    PAYMENTMETHOD: "PayPal",
    DATE: "26 Sep 2024",
    STATUS: "Failed",
  },
  {
    TRANSACTIONID: "TX12353",
    NAME: "Julie Black",
    IMAGE: "avatar-07.jpg",
    AMOUNT: "$230.00",
    PAYMENTMETHOD: "Bank Transfer",
    DATE: "01 Sep 2024",
    STATUS: "Completed",
  },
  {
    TRANSACTIONID: "TX12354",
    NAME: "Jean Walker",
    IMAGE: "avatar-29.jpg",
    AMOUNT: "$300.00",
    PAYMENTMETHOD: "Digital Payment",
    DATE: "15 Aug 2024",
    STATUS: "Completed",
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
