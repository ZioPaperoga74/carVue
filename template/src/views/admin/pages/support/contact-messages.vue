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
          <h4 class="mb-1">Contact Messages</h4>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Contact Messages</li>
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
                      ><i class="ti ti-grip-vertical me-1"></i>FROM</span
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
                    <span><i class="ti ti-grip-vertical me-1"></i>PHONE</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>EMAIL</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>MESSAGE</span>
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

      <!-- Custom Data Table -->
      <div class="custom-datatable-filter table-responsive">
        <a-table class="table datatable" :columns="columns" :data-source="data">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'FROM'">
              <div class="d-flex align-items-center">
                <router-link to="car-details" class="avatar me-2 flex-shrink-0">
                  <img :src="getImageURL(record.IMAGE)" class="rounded-circle" alt="" />
                </router-link>
                <h6>
                  <a href="#javascript:void(0);" class="fs-14 fw-semibold">{{
                    record.FROM
                  }}</a>
                </h6>
              </div>
            </template>
            <template v-if="column.key === 'PHONE'">
              <p class="text-gray-9">{{ record.PHONE }}</p>
            </template>
            <template v-if="column.key === 'EMAIL'">
              <p class="text-gray-9">{{ record.EMAIL }}</p>
            </template>
            <template v-if="column.key === 'CREATEDDATE'">
              <p class="text-gray-9">{{ record.CREATEDDATE }}</p>
            </template>
            <template v-if="column.key === 'MESSAGE'">
              <span
                class="avatar avatar-md bg-light rounded-circle"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="Hi, I booked a car but haven't received a confirmation email. Can you check?"
              >
                <i class="ti ti-file-invoice text-gray-9"></i>
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
  <div class="modal fade" id="delete_contact">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-26"></i>
          </span>
          <h4 class="mb-1">Delete Message</h4>
          <p class="mb-3">Are you sure you want to delete message?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="contact-messages"
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
    title: "FROM",
    dataIndex: "FROM",
    key: "FROM",
    sorter: {
      compare: (a, b) => {
        a = a.FROM.toLowerCase();
        b = b.FROM.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "PHONE",
    dataIndex: "PHONE",
    key: "PHONE",
    sorter: {
      compare: (a, b) => {
        a = a.PHONE.toLowerCase();
        b = b.PHONE.toLowerCase();
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
    title: "MESSAGE",
    dataIndex: "MESSAGE",
    key: "MESSAGE",
    sorter: {
      compare: (a, b) => {
        a = a.MESSAGE.toLowerCase();
        b = b.MESSAGE.toLowerCase();
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
    FROM: "Andrew Simons",
    IMAGE: "avatar-20.jpg",
    PHONE: "+1 555 123 4567",
    EMAIL: "andrew@example.com",
    CREATEDDATE: "24 Jan 2025",
    MESSAGE: "",
    FIELD6: "Delete",
  },
  {
    FROM: "David Steiger",
    IMAGE: "avatar-21.jpg",
    PHONE: "+44 7911 123456",
    EMAIL: "david@example.com",
    CREATEDDATE: "19 Dec 2024",
    MESSAGE: "",
    FIELD6: "Delete",
  },
  {
    FROM: "Virginia Phu",
    IMAGE: "avatar-12.jpg",
    PHONE: "+33 612 345678",
    EMAIL: "phu@example.com",
    CREATEDDATE: "11 Dec 2024",
    MESSAGE: "",
    FIELD6: "Delete",
  },
  {
    FROM: "Walter Hartmann",
    IMAGE: "avatar-22.jpg",
    PHONE: "+61 412 345 678",
    EMAIL: "walter@example.com",
    CREATEDDATE: "29 Nov 2024",
    MESSAGE: "",
    FIELD6: "Delete",
  },
  {
    FROM: "Andrea Jermaine",
    IMAGE: "avatar-27.jpg",
    PHONE: "+91 98765 43210",
    EMAIL: "jermaine@example.com",
    CREATEDDATE: "03 Nov 2024",
    MESSAGE: "",
    FIELD6: "Delete",
  },
  {
    FROM: "Dennis Eckhardt",
    IMAGE: "avatar-05.jpg",
    PHONE: "+49 171 2345678",
    EMAIL: "dennis@example.com",
    CREATEDDATE: "31 Oct 2024",
    MESSAGE: "",
    FIELD6: "Delete",
  },
  {
    FROM: "Lan Adams",
    IMAGE: "avatar-25.jpg",
    PHONE: "+81 90 1234 5678",
    EMAIL: "lan@example.com",
    CREATEDDATE: "15 Oct 2024",
    MESSAGE: "",
    FIELD6: "Delete",
  },
  {
    FROM: "Ann Crump",
    IMAGE: "avatar-28.jpg",
    PHONE: "+34 612 345678",
    EMAIL: "crump@example.com",
    CREATEDDATE: "26 Sep 2024",
    MESSAGE: "",
    FIELD6: "Delete",
  },
  {
    FROM: "Julie Black",
    IMAGE: "avatar-07.jpg",
    PHONE: "+55 1987654321",
    EMAIL: "julie@example.com",
    CREATEDDATE: "01 Sep 2024",
    MESSAGE: "",
    FIELD6: "Delete",
  },
  {
    FROM: "Jean Walker",
    IMAGE: "avatar-29.jpg",
    PHONE: "+27 82 12364567",
    EMAIL: "jean@example.com",
    CREATEDDATE: "15 Aug 2024",
    MESSAGE: "",
    FIELD6: "Delete",
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
  },
};
</script>
