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
          <h4 class="mb-1">Brands</h4>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Brands</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2 me-2">
            <a href="javascript:void(0);" class="btn btn-white d-flex align-items-center"
              ><i class="ti ti-printer me-2"></i>Print</a
            >
          </div>
          <div class="me-2 mb-2">
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
              data-bs-toggle="modal"
              data-bs-target="#add_brand"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-plus me-2"></i>Add New Brand</a
            >
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Table Header -->
      <div
        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3"
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
            class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
            data-bs-toggle="dropdown"
          >
            <i class="ti ti-badge me-1"></i> Status
          </a>
          <ul class="dropdown-menu dropdown-menu-end p-2">
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
            </li>
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /Table Header -->

      <!-- Custom Data Table -->
      <div class="custom-datatable-filter table-responsive">
        <a-table
          class="table datatable"
          :columns="columns"
          :data-source="data"
          :row-selection="rowSelection"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'NAME'">
              <div class="d-flex align-items-center file-name-icon">
                <a href="javascript:void(0);" class="avatar avatar-lg border">
                  <img
                    :src="getImageUrl(record.IMAGE)"
                    class="img-fluid"
                    alt="brands"
                  />
                </a>
                <div class="ms-2">
                  <h6 class="fw-medium">
                    <a href="javascript:void(0);">{{ record.NAME }}</a>
                  </h6>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'STATUS'">
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
            <template v-else-if="column.key === 'action'">
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
                      data-bs-target="#edit_safety_feature"
                      ><i class="ti ti-edit me-1"></i>Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_safety_feature"
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
  <brands-modal></brands-modal>
</template>
<script>
const columns = [
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
    title: "TOTAL CARS",
    dataIndex: "TOTALCARS",
    key: "TOTALCARS",
    sorter: {
      compare: (a, b) => {
        a = a.TOTALCARS.toLowerCase();
        b = b.TOTALCARS.toLowerCase();
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
    key: "1",
    NAME: "Toyota",
    IMAGE: "toyota.svg",
    TOTALCARS: "20",
    STATUS: "Active",
  },
  {
    key: "2",
    NAME: "Audi",
    IMAGE: "audi.svg",
    TOTALCARS: "15",
    STATUS: "Inactive",
  },
  {
    key: "3",
    NAME: "Lamborghini",
    IMAGE: "lamborghini.svg",
    TOTALCARS: "45",
    STATUS: "Active",
  },
  {
    key: "4",
    NAME: "BMW",
    IMAGE: "bmw.svg",
    TOTALCARS: "30",
    STATUS: "Active",
  },
  {
    key: "5",
    NAME: "Ferrari",
    IMAGE: "ferrari.svg",
    TOTALCARS: "45",
    STATUS: "Inactive",
  },
  {
    key: "6",
    NAME: "Honda",
    IMAGE: "toyota.svg",
    TOTALCARS: "20",
    STATUS: "Active",
  },
  {
    key: "7",
    NAME: "Ford",
    IMAGE: "honda.svg",
    TOTALCARS: "22",
    STATUS: "Active",
  },
  {
    key: "8",
    NAME: "KIA",
    IMAGE: "ford.svg",
    TOTALCARS: "22",
    STATUS: "Active",
  },
  {
    key: "9",
    NAME: "Hyundai",
    IMAGE: "kia-new.svg",
    TOTALCARS: "32",
    STATUS: "Active",
  },
  {
    key: "10",
    NAME: "Mercedes-Benz",
    IMAGE: "hyundai.svg",
    TOTALCARS: "40",
    STATUS: "Active",
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
            return new URL(`/src/assets/admin/img/brands/${imageName}`, import.meta.url).href;
        },
  },
};
</script>
