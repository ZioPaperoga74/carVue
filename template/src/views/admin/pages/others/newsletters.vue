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
          <h4 class="mb-1">Newsletters</h4>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Newsletters</li>
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
        </div>
      </div>
      <!-- /Table Header -->

      <!-- Custom Data Table -->
      <div class="custom-datatable-filter table-responsive">
        <a-table class="table datatable" :columns="columns" :data-source="data">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'EMAIL'">
              <p class="text-gray-9">{{ record.EMAIL }}</p>
            </template>
            <template v-if="column.key === 'DATE'">
              <p class="text-gray-9">{{ record.DATE }}</p>
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
                      data-bs-target="#delete"
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
    title: "",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    EMAIL: "andrew@example.com",
    DATE: "24 Jan 2025",
    FIELD3: "Delete",
  },
  {
    EMAIL: "david@example.com",
    DATE: "19 Dec 2024",
    FIELD3: "Delete",
  },
  {
    EMAIL: "phu@example.com",
    DATE: "11 Dec 2024",
    FIELD3: "Delete",
  },
  {
    EMAIL: "walter@example.com",
    DATE: "29 Nov 2024",
    FIELD3: "Delete",
  },
  {
    EMAIL: "jermaine@example.com",
    DATE: "03 Nov 2024",
    FIELD3: "Delete",
  },
  {
    EMAIL: "dennis@example.com",
    DATE: "31 Oct 2024",
    FIELD3: "Delete",
  },
  {
    EMAIL: "lan@example.com",
    DATE: "15 Oct 2024",
    FIELD3: "Delete",
  },
  {
    EMAIL: "crump@example.com",
    DATE: "26 Sep 2024",
    FIELD3: "Delete",
  },
  {
    EMAIL: "julie@example.com",
    DATE: "01 Sep 2024",
    FIELD3: "Delete",
  },
  {
    EMAIL: "jean@example.com",
    DATE: "15 Aug 2024",
    FIELD3: "Delete",
  },
];
export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
