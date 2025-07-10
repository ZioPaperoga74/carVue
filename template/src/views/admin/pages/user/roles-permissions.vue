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
          <h4 class="mb-1">Roles</h4>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Roles</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-primary d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#add_role"
              ><i class="ti ti-plus me-2"></i>Add Role</a
            >
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Table Header -->
      <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-3 mb-3">
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
            <template v-if="column.key === 'ROLE'">
              <p class="text-gray-5">{{ record.ROLE }}</p>
            </template>
            <template v-if="column.key === 'CREATEDDATE'">
              <p class="text-gray-5">{{ record.CREATEDDATE }}</p>
            </template>
            <template v-if="column.key === 'STATUS'">
              <span class="badge badge-dark-transparent">
                <i
                  class="ti ti-point-filled"
                  :class="[
                    'me-1',
                    {
                      'text-success': record.STATUS === 'Active',
                      'text-danger': record.STATUS === 'Inactive',
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
                      data-bs-target="#edit_role"
                      ><i class="ti ti-edit me-1"></i>Edit</a
                    >
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item rounded-1"
                      to="/admin-template/users/permissions"
                      ><i class="ti ti-shield me-1"></i>Permissions</router-link
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_role"
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
  <roles-modal></roles-modal>
</template>
<script>
const columns = [
  {
    title: "ROLE",
    dataIndex: "ROLE",
    key: "ROLE",
    sorter: {
      compare: (a, b) => {
        a = a.ROLE.toLowerCase();
        b = b.ROLE.toLowerCase();
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
    ROLE: "Owner",
    CREATEDDATE: "24 Jan 2025",
    STATUS: "Active",
  },
  {
    ROLE: "Admin",
    CREATEDDATE: "24 Jan 2025",
    STATUS: "Active",
  },
  {
    ROLE: "Manager",
    CREATEDDATE: "19 Dec 2024",
    STATUS: "Inactive",
  },
  {
    ROLE: "Customer",
    CREATEDDATE: "11 Dec 2024",
    STATUS: "Active",
  },
  {
    ROLE: "Accountant",
    CREATEDDATE: "29 Nov 2024",
    STATUS: "Active",
  },
  {
    ROLE: "Inspector",
    CREATEDDATE: "18 Oct 2024",
    STATUS: "Active",
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
