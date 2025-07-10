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
          <h2 class="mb-1">Menu Management</h2>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Menu Management</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2 me-2">
            <a
              href="javascript:void(0);"
              class="btn btn-primary d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#add_menu"
              ><i class="ti ti-plus me-2"></i>Add Menu</a
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
      <div class="custom-datatable-filter table-responsive brandstable country-table">
        <a-table class="table datatable" :columns="columns" :data-source="data">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'MENU'">
              <p class="text-gray-9">{{ record.MENU }}</p>
            </template>
            <template v-if="column.key === 'CREATEDDATE'">
              <p class="text-gray-9">{{ record.CREATEDDATE }}</p>
            </template>
            <template v-if="column.key === 'STATUS'">
              <span
                class="d-inline-flex align-items-center badge-sm"
                :class="[
                  'badge',
                  {
                    'badge-soft-success': record.STATUS === 'Published',
                    'badge-soft-danger': record.STATUS === 'Unpublished',
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
                      data-bs-target="#edit_menu"
                      ><i class="ti ti-edit me-1"></i>Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_menu"
                      ><i class="ti ti-trash me-1"></i>Delete</a
                    >
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item rounded-1"
                      to="/admin-template/admin/edit-menu"
                      ><i class="ti ti-menu-2 me-1"></i>Menu Management</router-link
                    >
                  </li>
                </ul>
              </div>
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
  <menu-modal></menu-modal>
</template>
<script>
const columns = [
  {
    title: "MENU",
    dataIndex: "MENU",
    key: "MENU",
    sorter: {
      compare: (a, b) => {
        a = a.MENU.toLowerCase();
        b = b.MENU.toLowerCase();
        return a > b ? 1 : b > a ? -1 : 0;
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
    MENU: "Header Top",
    CREATEDDATE: "24 Jan 2025",
    STATUS: "Published",
  },
  {
    MENU: "Footer 1",
    CREATEDDATE: "24 Jan 2025",
    STATUS: "Unpublished",
  },
  {
    MENU: "Footer 2",
    CREATEDDATE: "24 Jan 2025",
    STATUS: "Published",
  },
  {
    MENU: "Footer 3",
    CREATEDDATE: "24 Jan 2025",
    STATUS: "Published",
  },
  {
    MENU: "Footer 4",
    CREATEDDATE: "24 Jan 2025",
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
};
</script>
