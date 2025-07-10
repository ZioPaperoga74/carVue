<template>
  <layouts-header></layouts-header>
  <user-breadcrumb :title="title" :text="text" :text1="text1" />

  <user-tabset></user-tabset>

  <!-- Page Content -->
  <div class="content">
    <div class="container">
      <!-- Content Header -->
      <div class="content-header">
        <h4>Payments</h4>
      </div>
      <!-- /Content Header -->

      <!-- Sort By -->
      <div class="row">
        <div class="col-lg-12">
          <div class="sorting-info">
            <div class="row d-flex align-items-center">
              <div class="col-lg-12">
                <div class="filter-group">
                  <div class="sort-week sort">
                    <div class="dropdown dropdown-action">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        This Week <i class="fas fa-chevron-down"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="javascript:void(0);">
                          This Week
                        </a>
                        <a class="dropdown-item" href="javascript:void(0);">
                          This Month
                        </a>
                        <a class="dropdown-item" href="javascript:void(0);">
                          Last 30 Days
                        </a>
                        <a class="dropdown-item" href="javascript:void(0);"> Custom </a>
                      </div>
                    </div>
                  </div>
                  <div class="sort-relevance sort">
                    <div class="dropdown dropdown-action">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sort By Relevance <i class="fas fa-chevron-down"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="javascript:void(0);">
                          Sort By Relevance
                        </a>
                        <a class="dropdown-item" href="javascript:void(0);">
                          Sort By Ascending
                        </a>
                        <a class="dropdown-item" href="javascript:void(0);">
                          Sort By Descending
                        </a>
                        <a class="dropdown-item" href="javascript:void(0);">
                          Sort By Alphabet
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Sort By -->

      <!-- Payments Table -->
      <div class="row">
        <div class="col-lg-12 d-flex">
          <div class="card book-card flex-fill mb-0">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-md-5">
                  <h4>All Payments <span>40</span></h4>
                </div>
                <div class="col-md-7 text-md-end">
                  <div class="table-search">
                    <div id="tablefilter" class="me-0">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive dashboard-table">
                <a-table
                  class="table datanew table-hover table-center mb-0"
                  :columns="columns"
                  :data-source="data"
                  :row-selection="rowSelection"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'BookingID'">
                      <a
                        class="dropdown-item"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
                      >
                        {{ record.BookingID }}
                      </a>
                    </template>
                    <template v-else-if="column.key === 'CarName'">
                      <div class="table-avatar">
                        <a
                          href="javascript:void(0);"
                          class="avatar avatar-lg flex-shrink-0"
                        >
                          <img
                            class="avatar-img"
                            :src="getImageUrl(record.Image)"
                            alt="Booking"
                          />
                        </a>
                        <div class="table-head-name flex-grow-1">
                          <a href="javascript:void(0);">{{ record.CarName }}</a>
                          <p>{{ record.Role }}</p>
                        </div>
                      </div>
                    </template>
                    <template v-else-if="column.key === 'Mode'">
                      <span class="badge badge-light-secondary">{{ record.Mode }}</span>
                    </template>
                    <template v-else-if="column.key === 'Status'">
                      <span :class="record.Class">{{ record.Status }}</span>
                    </template>
                    <template v-else-if="column.key === 'action'">
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="fas fa-ellipsis-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a
                              class="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#view_invoice"
                            >
                              <i class="feather-file-plus me-1"></i> View Invoice
                            </a>
                            <a
                              class="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i class="feather-trash-2 me-1"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </template>
                  </template>
                </a-table>
              </div>
              <div class="table-footer">
                <div class="row">
                  <div class="col-md-6">
                    <div id="tablelength">
                      <div class="dataTables_length" id="DataTables_Table_0_length">
                        <label
                          ><select
                            name="DataTables_Table_0_length"
                            aria-controls="DataTables_Table_0"
                            class="custom-select custom-select-sm form-control form-control-sm"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="-1">All</option>
                          </select></label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 text-md-end">
                    <div id="tablepage">
                      <div
                        class="dataTables_paginate paging_simple_numbers"
                        id="DataTables_Table_0_paginate"
                      >
                        <ul class="pagination">
                          <li
                            class="paginate_button page-item previous disabled"
                            id="DataTables_Table_0_previous"
                          >
                            <a
                              href="javascript:void(0);"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="0"
                              tabindex="0"
                              class="page-link"
                              ><i class="feather-arrow-left"></i> Prev</a
                            >
                          </li>
                          <li class="paginate_button page-item active">
                            <a
                              href="javascript:void(0);"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="1"
                              tabindex="0"
                              class="page-link"
                              >1</a
                            >
                          </li>
                          <li
                            class="paginate_button page-item next disabled"
                            id="DataTables_Table_0_next"
                          >
                            <a
                              href="javascript:void(0);"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="2"
                              tabindex="0"
                              class="page-link"
                              >Next <i class="feather-arrow-right"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Payments Table -->
    </div>
  </div>
  <!-- /Page Content -->

  <layout-footer></layout-footer>
  <user-payment-modal></user-payment-modal>
</template>
<script>
const columns = [
  {
    title: "Booking ID",
    dataIndex: "BookingID",
    key: "BookingID",
    sorter: {
      compare: (a, b) => {
        a = a.BookingID.toLowerCase();
        b = b.BookingID.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Car Name",
    dataIndex: "CarName",
    key: "CarName",
    sorter: {
      compare: (a, b) => {
        a = a.CarName.toLowerCase();
        b = b.CarName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Paid On",
    dataIndex: "Paidon",
    sorter: {
      compare: (a, b) => {
        a = a.Paidon.toLowerCase();
        b = b.Paidon.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Total",
    dataIndex: "Total",
    sorter: {
      compare: (a, b) => {
        a = a.Total.toLowerCase();
        b = b.Total.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Mode",
    dataIndex: "Mode",
    key: "Mode",
    sorter: {
      compare: (a, b) => {
        a = a.Mode.toLowerCase();
        b = b.Mode.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },

  {
    title: "Action",
    key: "action",
    class: "text-end",
  },
];

const data = [
  {
    key: 1,
    Image: "car-04.jpg",
    BookingID: "#1001",
    CarName: "Ferrari 458 MM Speciale",
    Role: "Delivery",
    Paidon: "15 Sep 2023, 09:30 AM",
    Total: "$300",
    Mode: "Wallet",
    Status: "Completed",
    Class: "badge badge-light-success",
  },
  {
    key: 2,
    Image: "car-01.jpg",
    BookingID: "#1002",
    CarName: "Toyota Camry SE 350",
    Role: "Self Pickup",
    Paidon: "23 Oct 2023, 12:00 PM",
    Total: "$500",
    Mode: "Paypal",
    Status: "Completed",
    Class: "badge badge-light-success",
  },
  {
    key: 3,
    Image: "car-02.jpg",
    BookingID: "#1003",
    CarName: "Kia Soul 2016",
    Role: "Delivery",
    Paidon: "02 Nov 2023, 10:30 AM",
    Total: "$600",
    Mode: "Stripe",
    Status: "Completed",
    Class: "badge badge-light-success",
  },
  {
    key: 4,
    Image: "car-03.jpg",
    BookingID: "#1004",
    CarName: "Audi A3 2019 new",
    Role: "Self Pickup",
    Paidon: "18 Dec 2023, 02:30 PM",
    Total: "$1500",
    Mode: "Stripe",
    Status: "Pending",
    Class: "badge badge-light-warning",
  },
  {
    key: 5,
    Image: "car-05.jpg",
    BookingID: "#1005",
    CarName: "2018 Chevrolet Camaro",
    Role: "Delivery",
    Paidon: "05 Jan 2024, 08:00 AM",
    Total: "$450",
    Mode: "Wallet",
    Status: "Failed",
    Class: "badge badge-light-danger",
  },
  {
    key: 6,
    Image: "car-06.jpg",
    BookingID: "#1006",
    CarName: "Acura Sport Version",
    Role: "Self Pickup",
    Paidon: "20 Feb 2024, 11:30 PM",
    Total: "$250",
    Mode: "Stripe",
    Status: "Completed",
    Class: "badge badge-light-success",
  },
  {
    key: 7,
    Image: "car-08.jpg",
    BookingID: "#1007",
    CarName: "Toyota Tacoma 4WD",
    Role: "Delivery",
    Paidon: "12 Mar 2024, 10:00 PM",
    Total: "$1000",
    Mode: "Paypal",
    Status: "Pending",
    Class: "badge badge-light-warning",
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
      title: "User Payments",
      text: "Home",
      text1: "User Payments",
      columns,
      data,
      rowSelection,
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/cars/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
