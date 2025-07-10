<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content me-4">
      <!-- Breadcrumb -->
      <div
        class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3"
      >
        <div class="my-auto mb-2">
          <h4 class="mb-1">Users</h4>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Users</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-primary d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#add_user"
              ><i class="ti ti-plus me-2"></i>Add User</a
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
                      ><i class="ti ti-grip-vertical me-1"></i>USER</span
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
                    <span><i class="ti ti-grip-vertical me-1"></i>PHONE</span>
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
                    <span><i class="ti ti-grip-vertical me-1"></i>ROLE</span>
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
              <span class="badge badge-xs rounded-pill bg-success me-2">3</span>Roles
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
                  <input class="form-check-input m-0 me-2" type="checkbox" checked />Admin
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input
                    class="form-check-input m-0 me-2"
                    type="checkbox"
                    checked
                  />Manager
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Accountant
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input
                    class="form-check-input m-0 me-2"
                    type="checkbox"
                    checked
                  />Customer
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center rounded-1">
                  <input class="form-check-input m-0 me-2" type="checkbox" />Inspector
                </label>
              </li>
            </ul>
          </div>
          <div class="dropdown me-3">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              Status
            </a>
            <ul class="dropdown-menu dropdown-menu-md p-2">
              <li class="dropdown-item">Active</li>
              <li class="dropdown-item">Inactive</li>
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
            <template v-if="column.key === 'USER'">
              <div class="d-flex align-items-center">
                <router-link to="customer-details" class="avatar me-2 flex-shrink-0">
                  <img :src="getImageURL(record.IMAGE)" class="rounded-circle" alt="" />
                </router-link>
                <h6>
                  <router-link to="customer-details" class="fs-14 fw-semibold">{{
                    record.USER
                  }}</router-link>
                </h6>
              </div>
            </template>
            <template v-if="column.key === 'PHONE'">
              <p class="text-gray-9">{{ record.PHONE }}</p>
            </template>
            <template v-if="column.key === 'EMAIL'">
              <p class="text-gray-9">{{ record.EMAIL }}</p>
            </template>
            <template v-if="column.key === 'ROLE'">
              <p class="text-gray-9">{{ record.ROLE }}</p>
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
                      data-bs-target="#edit_user"
                      ><i class="ti ti-edit me-1"></i>Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_user"
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
  <!-- /Page Wrapper -->
  <!-- Add User -->
  <div class="modal fade" id="add_user">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Create User</h5>
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
            <div class="mb-3">
              <label class="form-label">Image <span class="text-danger">*</span></label>
              <div class="d-flex align-items-center flex-wrap row-gap-3">
                <div
                  class="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames"
                >
                  <i class="ti ti-photo-up text-gray-4 fs-24"></i>
                </div>
                <div class="profile-upload">
                  <div class="profile-uploader d-flex align-items-center">
                    <div class="drag-upload-btn btn btn-md btn-dark">
                      <i class="ti ti-photo-up fs-14"></i>
                      Upload
                      <input type="file" class="form-control image-sign" multiple="" />
                    </div>
                  </div>
                  <div class="mt-2">
                    <p class="fs-14">Upload Image size 180*180, within 5MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">User <span class="text-danger">*</span></label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Role <span class="text-danger">*</span></label>
                <vue-select
                  :options="roleOptions"
                  v-model="selectedRole"
                  placeholder="Select"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Email <span class="text-danger">*</span></label>
                <input class="form-control" type="text" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Phone Number <span class="text-danger">*</span></label
                >
                <input type="text" id="phone" name="phone" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Current Password <span class="text-danger">*</span></label
                >
                <div class="pass-group">
                  <input type="password" class="pass-inputs form-control" />
                  <span class="ti toggle-passwords ti-eye-off"></span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Confirm New Password <span class="text-danger">*</span></label
                >
                <div class="pass-group">
                  <input type="password" class="form-control pass-inputa" />
                  <span class="ti toggle-passworda ti-eye-off"></span>
                </div>
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
  <!-- /Add User -->

  <!-- Edit User -->
  <div class="modal fade" id="edit_user">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Edit User</h5>
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
            <div class="mb-3">
              <label class="form-label">Image <span class="text-danger">*</span></label>
              <div class="d-flex align-items-center flex-wrap row-gap-3">
                <div
                  class="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames"
                >
                  <img
                    src="@/assets/admin/img/profiles/avatar-20.jpg"
                    class="img-fluid rounded"
                    alt="img"
                  />
                  <span class="avatar-badge bg-light text-danger m-1"
                    ><i class="ti ti-trash"></i
                  ></span>
                </div>
                <div class="profile-upload">
                  <div class="profile-uploader d-flex align-items-center">
                    <div class="drag-upload-btn btn btn-md btn-dark">
                      <i class="ti ti-photo-up fs-14"></i>
                      Upload
                      <input type="file" class="form-control image-sign" multiple="" />
                    </div>
                  </div>
                  <div class="mt-2">
                    <p class="fs-14">Upload Image size 180*180, within 5MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">User <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="Andrew Simmons" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Role <span class="text-danger">*</span></label>
                <vue-select
                  :options="roleOptionsOne"
                  v-model="selectedRoleOne"
                  placeholder="Admin"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Email <span class="text-danger">*</span></label>
                <input class="form-control" type="text" value="andrew@example.com" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Phone Number <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  id="phone2"
                  name="phone2"
                  class="form-control"
                  value="+1 555 123 4567"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Current Password <span class="text-danger">*</span></label
                >
                <div class="pass-group">
                  <input
                    type="password"
                    class="pass-inputs form-control"
                    value="12345678"
                  />
                  <span class="ti toggle-passwords ti-eye-off"></span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Confirm New Password <span class="text-danger">*</span></label
                >
                <div class="pass-group">
                  <input
                    type="password"
                    class="form-control pass-inputa"
                    value="12345678"
                  />
                  <span class="ti toggle-passworda ti-eye-off"></span>
                </div>
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
  <!-- /Edit User -->

  <!-- Delete  -->
  <div class="modal fade" id="delete_user">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <span
          class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3"
        >
          <i class="ti ti-trash-x fs-26"></i>
        </span>
        <h4 class="mb-1">Delete User</h4>
        <p class="mb-3">Are you sure you want to delete user?</p>
        <div class="d-flex justify-content-center">
          <a href="javascript:void(0);" class="btn btn-light me-3" data-bs-dismiss="modal"
            >Cancel</a
          >
          <a href="javascript:void(0);" class="btn btn-primary">Yes, Delete</a>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete -->
</template>
<script>
const columns = [
  {
    title: "USER",
    dataIndex: "USER",
    key: "USER",
    sorter: {
      compare: (a, b) => {
        a = a.USER.toLowerCase();
        b = b.USER.toLowerCase();
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
    USER: "Andrew Simons",
    IMAGE: "avatar-20.jpg",
    PHONE: "+1 555 123 4567",
    EMAIL: "andrew@example.com",
    ROLE: "Admin",
    STATUS: "Active",
  },
  {
    USER: "David Steiger",
    IMAGE: "avatar-21.jpg",
    PHONE: "+44 7911 123456",
    EMAIL: "david@example.com",
    ROLE: "Manager",
    STATUS: "Inactive",
  },
  {
    USER: "Virginia Phu",
    IMAGE: "avatar-12.jpg",
    PHONE: "+33 612 345678",
    EMAIL: "phu@example.com",
    ROLE: "Customer",
    STATUS: "Active",
  },
  {
    USER: "Walter Hartmann",
    IMAGE: "avatar-22.jpg",
    PHONE: "+61 412 345 678",
    EMAIL: "walter@example.com",
    ROLE: "Accountant",
    STATUS: "Active",
  },
  {
    USER: "Andrea Jermaine",
    IMAGE: "avatar-27.jpg",
    PHONE: "+91 98765 43210",
    EMAIL: "jermaine@example.com",
    ROLE: "Inspector",
    STATUS: "Active",
  },
  {
    USER: "Dennis Eckhardt",
    IMAGE: "avatar-05.jpg",
    PHONE: "+49 171 2345678",
    EMAIL: "dennis@example.com",
    ROLE: "Admin",
    STATUS: "Inactive",
  },
  {
    USER: "Lan Adams",
    IMAGE: "avatar-25.jpg",
    PHONE: "+81 90 1234 5678",
    EMAIL: "lan@example.com",
    ROLE: "Manager",
    STATUS: "Inactive",
  },
  {
    USER: "Ann Crump",
    IMAGE: "avatar-28.jpg",
    PHONE: "+34 612 345678",
    EMAIL: "crump@example.com",
    ROLE: "Customer",
    STATUS: "Active",
  },
  {
    USER: "Julie Black",
    IMAGE: "avatar-07.jpg",
    PHONE: "+55 1987654321",
    EMAIL: "julie@example.com",
    ROLE: "Accountant",
    STATUS: "Active",
  },
  {
    USER: "Jean Walker",
    IMAGE: "avatar-29.jpg",
    PHONE: "+27 82 12364567",
    EMAIL: "jean@example.com",
    ROLE: "Inspector",
    STATUS: "Active",
  },
];
export default {
  data() {
    return {
      data,
      columns,
      selectedRole: null,
      selectedRoleOne: null,
      roleOptions: [
        { value: "Admin", label: "Admin" },
        { value: "Manager", label: "Manager" },
        { value: "Accountant", label: "Accountant" },
        { value: "Customer", label: "Customer" },
        { value: "Inspector", label: "Inspector" },
      ],
      roleOptionsOne: [
        { value: "Admin", label: "Admin" },
        { value: "Manager", label: "Manager" },
        { value: "Accountant", label: "Accountant" },
        { value: "Customer", label: "Customer" },
        { value: "Inspector", label: "Inspector" },
      ],
    };
  },
  methods: {
    getImageURL(imageName) {
      return new URL(`/src/assets/admin/img/profiles/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
