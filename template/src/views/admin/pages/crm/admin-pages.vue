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
          <h2 class="mb-1">Pages</h2>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Pages</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <div>
              <router-link
                to="/admin-template/cms/add-pages"
                class="btn btn-primary btn-md d-inline-flex justify-content-center align-items-center"
              >
                <i class="ti ti-plus me-1"></i>Add Page
              </router-link>
            </div>
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
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <i class="ti ti-badge me-1"></i> Status
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Published</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Unpublish</a
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
            <template v-if="column.key === 'PAGE'">
              <h6 class="fs-14">{{ record.PAGE }}</h6>
            </template>
            <template v-if="column.key === 'PAGESLUG'">
              <a href="javascript:void(0);" class="fs-12 text-info">{{
                record.PAGESLUG
              }}</a>
            </template>
            <template v-if="column.key === 'LASTUPDATED'">
              <p class="text-gray-9">{{ record.LASTUPDATED }}</p>
            </template>
            <template v-if="column.key === 'STATUS'">
              <span
                class="d-inline-flex align-items-center badge-sm"
                :class="[
                  'badge',
                  {
                    'badge-soft-success': record.STATUS === 'Published',
                    'badge-soft-danger': record.STATUS === 'Unpublish',
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
                    <router-link
                      class="dropdown-item rounded-1"
                      to="/admin-template/cms/edit-pages"
                      ><i class="ti ti-edit me-1"></i>Edit</router-link
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item rounded-1"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_page"
                      ><i class="ti ti-trash me-1"></i>Delete</a
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
</template>
<script>
const columns = [
  {
    title: "PAGE",
    dataIndex: "PAGE",
    key: "PAGE",
    sorter: {
      compare: (a, b) => {
        a = a.PAGE.toLowerCase();
        b = b.PAGE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "PAGE SLUG",
    dataIndex: "PAGESLUG",
    key: "PAGESLUG",
    sorter: {
      compare: (a, b) => {
        a = a.PAGESLUG.toLowerCase();
        b = b.PAGESLUG.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "LAST UPDATED",
    dataIndex: "LASTUPDATED",
    key: "LASTUPDATED",
    sorter: {
      compare: (a, b) => {
        a = a.LASTUPDATED.toLowerCase();
        b = b.LASTUPDATED.toLowerCase();
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
    PAGE: "Home",
    PAGESLUG: "/home",
    LASTUPDATED: "24 Jan 2025",
    STATUS: "Published",
  },
  {
    PAGE: "About Us",
    PAGESLUG: "/about-us",
    LASTUPDATED: "19 Dec 2024",
    STATUS: "Unpublish",
  },
  {
    PAGE: "Contact",
    PAGESLUG: "/contact",
    LASTUPDATED: "11 Dec 2024",
    STATUS: "Published",
  },
  {
    PAGE: "Blog",
    PAGESLUG: "/blog",
    LASTUPDATED: "29 Nov 2024",
    STATUS: "Published",
  },
  {
    PAGE: "FAQ",
    PAGESLUG: "/faq",
    LASTUPDATED: "03 Nov 2024",
    STATUS: "Published",
  },
  {
    PAGE: "Privacy Policy",
    PAGESLUG: "/privacy-policy",
    LASTUPDATED: "31 Oct 2024",
    STATUS: "Unpublish",
  },
  {
    PAGE: "Terms & Conditions",
    PAGESLUG: "/terms",
    LASTUPDATED: "15 Oct 2024",
    STATUS: "Unpublish",
  },
  {
    PAGE: "Support",
    PAGESLUG: "/support",
    LASTUPDATED: "26 Sep 2024",
    STATUS: "Published",
  },
  {
    PAGE: "Testimonials",
    PAGESLUG: "/testimonials",
    LASTUPDATED: "01 Sep 2024",
    STATUS: "Published",
  },
  {
    PAGE: "Rental Policies",
    PAGESLUG: "/rental-policy",
    LASTUPDATED: "15 Aug 2024",
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
