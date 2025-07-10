<template>
  <div class="tab-pane" id="completed-coupons" role="tabpanel">
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
              <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
            </li>
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
            </li>
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>
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
            href="#filtercollapse3"
            class="filtercollapse coloumn d-inline-flex align-items-center"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="filtercollapse3"
          >
            <i class="ti ti-filter me-1"></i> Filter
            <span class="badge badge-xs rounded-pill bg-danger ms-2">0</span>
          </a>
        </div>
      </div>
      <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
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
                    ><i class="ti ti-grip-vertical me-1"></i>COUPON NAME</span
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
                  <span><i class="ti ti-grip-vertical me-1"></i>CODE</span>
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
                  <span><i class="ti ti-grip-vertical me-1"></i>DESCRIPTION</span>
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
                  <span><i class="ti ti-grip-vertical me-1"></i>DISCOUNT TYPE</span>
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
                  <span><i class="ti ti-grip-vertical me-1"></i>DISCOUNT</span>
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
                  <span><i class="ti ti-grip-vertical me-1"></i>LIMIT</span>
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
                  <span><i class="ti ti-grip-vertical me-1"></i>VALID</span>
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

    <div class="collapse" id="filtercollapse3">
      <div class="filterbox mb-3 d-flex align-items-center">
        <h6 class="me-3">Filters</h6>
        <div class="dropdown me-2">
          <a
            href="javascript:void(0);"
            class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            Discount Type
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
                <input class="form-check-input m-0 me-2" type="checkbox" />Percentage
              </label>
            </li>
            <li>
              <label class="dropdown-item d-flex align-items-center rounded-1">
                <input class="form-check-input m-0 me-2" type="checkbox" />Fixed Amount
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
            <li class="dropdown-item d-flex align-items-center rounded-1">Active</li>
            <li class="dropdown-item d-flex align-items-center rounded-1">Inactive</li>
          </ul>
        </div>
        <a href="javascript:void(0);" class="me-2 text-purple links">Apply</a>
        <a href="javascript:void(0);" class="text-danger links">Clear All</a>
      </div>
    </div>

    <!-- Custom Data Table -->
    <div class="custom-datatable-filter table-responsive brandstable country-table">
      <a-table class="table datatable" :columns="columns" :data-source="data">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'COUPONNAME'">
            <p class="text-gray-9 fw-semibold">{{ record.COUPONNAME }}</p>
          </template>
          <template v-else-if="column.key === 'CODE'">
            <span class="badge badge-soft-violet border">{{ record.CODE }}</span>
          </template>
          <template v-else-if="column.key === 'STATUS'">
            <span class="badge badge-dark-transparent">
              <i
                class="ti ti-point-filled"
                :class="[
                  'me-1',
                  {
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
                    data-bs-target="#edit_coupons"
                    ><i class="ti ti-edit me-1"></i>Edit</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item rounded-1"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_coupons"
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
</template>
<script>
const columns = [
  {
    title: "COUPON NAME",
    dataIndex: "COUPONNAME",
    key: "COUPONNAME",
    sorter: {
      compare: (a, b) => {
        a = a.COUPONNAME.toLowerCase();
        b = b.COUPONNAME.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "CODE",
    dataIndex: "CODE",
    key: "CODE",
    sorter: {
      compare: (a, b) => {
        a = a.CODE.toLowerCase();
        b = b.CODE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DESCRIPTION",
    dataIndex: "DESCRIPTION",
    key: "DESCRIPTION",
    sorter: {
      compare: (a, b) => {
        a = a.DESCRIPTION.toLowerCase();
        b = b.DESCRIPTION.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DISCOUNT TYPE",
    dataIndex: "DISCOUNTTYPE",
    key: "DISCOUNTTYPE",
    sorter: {
      compare: (a, b) => {
        a = a.DISCOUNTTYPE.toLowerCase();
        b = b.DISCOUNTTYPE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DISCOUNT",
    dataIndex: "DISCOUNT",
    key: "DISCOUNT",
    sorter: {
      compare: (a, b) => {
        a = a.DISCOUNT.toLowerCase();
        b = b.DISCOUNT.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "LIMIT",
    dataIndex: "LIMIT",
    key: "LIMIT",
    sorter: {
      compare: (a, b) => {
        a = a.LIMIT.toLowerCase();
        b = b.LIMIT.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "VALID",
    dataIndex: "VALID",
    key: "VALID",
    sorter: {
      compare: (a, b) => {
        a = a.VALID.toLowerCase();
        b = b.VALID.toLowerCase();
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
    COUPONNAME: "Summer Sale 2024",
    CODE: "SUMMER2024",
    DESCRIPTION: "20% off on all rentals in July",
    DISCOUNTTYPE: "Percentage",
    DISCOUNT: "20%",
    LIMIT: "10",
    VALID: "24 Jan 2025",
    STATUS: "Inactive",
  },
  {
    COUPONNAME: "Fall Savings",
    CODE: "FALL15",
    DESCRIPTION: "15% off for long-term rentals",
    DISCOUNTTYPE: "Percentage",
    DISCOUNT: "15%",
    LIMIT: "3",
    VALID: "19 Dec 2024",
    STATUS: "Inactive",
  },
  {
    COUPONNAME: "Weekend Discount",
    CODE: "WEEKEND10",
    DESCRIPTION: "10% off on weekend rentals",
    DISCOUNTTYPE: "Percentage",
    DISCOUNT: "10%",
    LIMIT: "8",
    VALID: "11 Dec 2024",
    STATUS: "Inactive",
  },
  {
    COUPONNAME: "First Timer Special",
    CODE: "FIRSTTIME20",
    DESCRIPTION: "20% off for first-time customers",
    DISCOUNTTYPE: "Percentage",
    DISCOUNT: "20%",
    LIMIT: "14",
    VALID: "29 Nov 2024",
    STATUS: "Inactive",
  },
  {
    COUPONNAME: "Holiday Cheer 2024",
    CODE: "HOLIDAY2024",
    DESCRIPTION: "25% off during the holiday season",
    DISCOUNTTYPE: "Percentage",
    DISCOUNT: "25%",
    LIMIT: "5",
    VALID: "03 Nov 2024",
    STATUS: "Inactive",
  },
  {
    COUPONNAME: "VIP Discount",
    CODE: "VIPCUSTOMER25",
    DESCRIPTION: "Exclusive 25% discount for VIP users",
    DISCOUNTTYPE: "Percentage",
    DISCOUNT: "25%",
    LIMIT: "18",
    VALID: "31 Oct 2024",
    STATUS: "Inactive",
  },
  {
    COUPONNAME: "SUV Special",
    CODE: "SUV50",
    DESCRIPTION: "$50 off on SUV rentals for 7+ days",
    DISCOUNTTYPE: "Fixed Amount",
    DISCOUNT: "$50",
    LIMIT: "4",
    VALID: "15 Oct 2024",
    STATUS: "Inactive",
  },
  {
    COUPONNAME: "New Year 2025",
    CODE: "NEWYEAR2025",
    DESCRIPTION: "25% off for New Year bookings",
    DISCOUNTTYPE: "Percentage",
    DISCOUNT: "25%",
    LIMIT: "10",
    VALID: "26 Sep 2024",
    STATUS: "Inactive",
  },
  {
    COUPONNAME: "Weekend Special",
    CODE: "WEEKEND50",
    DESCRIPTION: "Save $50 on weekend rentals.",
    DISCOUNTTYPE: "Fixed Amount",
    DISCOUNT: "$50",
    LIMIT: "9",
    VALID: "01 Sep 2024",
    STATUS: "Inactive",
  },
  {
    COUPONNAME: "Refer a Friend",
    CODE: "REFERFRIEND10",
    DESCRIPTION: "Get $10 off for referring a friend",
    DISCOUNTTYPE: "Fixed Amount",
    DISCOUNT: "$10",
    LIMIT: "12",
    VALID: "15 Aug 2024",
    STATUS: "Inactive",
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
