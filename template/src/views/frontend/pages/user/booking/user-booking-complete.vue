<template>
  <layouts-header></layouts-header>

  <user-breadcrumb :title="title" :text="text" :text1="text1" />

  <user-tabset></user-tabset>

  <!-- Page Content -->
  <div class="content">
    <div class="container">
      <!-- Content Header -->
      <div class="content-header">
        <h4>My Bookings</h4>
      </div>
      <!-- /Content Header -->

      <!-- Sort By -->
      <div class="row">
        <div class="col-lg-12">
          <div class="sorting-info">
            <div class="row d-flex align-items-center">
              <div class="col-xl-7 col-lg-8 col-sm-12 col-12">
                <div class="booking-lists">
                  <booking-tabset></booking-tabset>
                </div>
              </div>
              <div class="col-xl-5 col-lg-4 col-sm-12 col-12">
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
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#custom_date"
                        >
                          Custom
                        </a>
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

      <div class="row">
        <!-- Completed Bookings -->
        <div class="col-lg-12 d-flex">
          <div class="card book-card flex-fill mb-0">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-md-5">
                  <h4>Completed <span>40</span></h4>
                </div>
                <div class="col-md-7 text-md-end">
                  <div class="table-search">
                    <div id="tablefilter">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="Search"
                      />
                    </div>
                    <router-link to="/listing/listing-grid" class="btn btn-add"
                      ><i class="feather-plus-circle"></i>Add Booking</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive dashboard-table">
                <a-table
                  class="stripped table-center table-hover"
                  :columns="columns"
                  :data-source="data"
                  :row-selection="rowSelection"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'Booking_ID'">
                      <a
                        class="dropdown-item"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#complete_booking"
                      >
                        {{ record.BookingID }}
                      </a>
                    </template>
                    <template v-else-if="column.key === 'Car_Name'">
                      <div class="table-avatar d-flex">
                        <a
                          href="javascript:void(0);"
                          class="avatar avatar-lg flex-shrink-0 me-2"
                        >
                          <img
                            class="avatar-img"
                            :src="getImageUrl(record.Image)"
                            alt="Booking"
                          />
                        </a>
                        <div class="table-head-name flex-grow-1">
                          <a href="javascript:void(0);">{{ record.Car_Name }}</a>
                          <p>{{ record.Role }}</p>
                        </div>
                      </div>
                    </template>
                    <template v-else-if="column.key === 'Pickup'">
                      <p>
                        {{ record.Pickup }}
                        <span class="d-block">{{ record.Line }}</span>
                      </p>
                    </template>
                    <template v-else-if="column.key === 'Dropoff'">
                      <p>
                        {{ record.DropoffLocation }}
                        <span class="d-block">{{ record.Line1 }}</span>
                      </p>
                    </template>
                    <template v-else-if="column.key === 'Status'">
                      <span class="badge badge-light-success">{{ record.Status }}</span>
                    </template>
                    <template v-else-if="column.key === 'action'">
                      <div class="text-end">
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
                              data-bs-target="#complete_booking"
                            >
                              <i class="feather-eye me-1"></i> View
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
                      </div>
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
        <!-- /Completed Bookings -->
      </div>
    </div>
  </div>
  <!-- /Page Content -->

  <layout-footer></layout-footer>

  <user-bookings-modal></user-bookings-modal>
</template>

<script>
const data = [
  {
    key: 1,
    Image: "car-06.jpg",
    BookingID: "#1006",
    Car_Name: "Acura Sport Version",
    Role: "Sel pickup",
    RentalType: "Hourly",
    Pickup: "78 Cityview Drive, Glenolden",
    Line: "24 Nov 2023, 06:40 AM",
    DropoffLocation: "66 Ottis Street, Shawnee",
    Line1: "24 Nov 2023, 08:40 AM",
    BookedOn: "24 Oct 2023, 05:40 PM",
    Total: "$250",
    Status: "Completed",
  },
  {
    key: 2,
    Image: "car-08.jpg",
    BookingID: "#1007",
    Car_Name: "Toyota Tacoma 4WD",
    Role: "Delivery",
    RentalType: "Monthly",
    Pickup: "41 Duke Lane, Branchburg",
    Line: "15 Dec 2023, 04:30 PM",
    DropoffLocation: "80 Glory Road, Nashville",
    Line1: "15 Jan 2024, 04:30 PM",
    BookedOn: "02 Nov 2023, 07:30 AM",
    Total: "$1000",
    Status: "Completed",
  },
];

const columns = [
  {
    title: "Booking ID",
    dataIndex: "BookingID",
    key: "Booking_ID",
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
    dataIndex: "Car_Name",
    key: "Car_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Car_Name.toLowerCase();
        b = b.Car_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Rental Type",
    dataIndex: "RentalType",
    sorter: {
      compare: (a, b) => {
        a = a.RentalType.toLowerCase();
        b = b.RentalType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Pickup / Delivery Location",
    dataIndex: "Pickup",
    key: "Pickup",
    sorter: {
      compare: (a, b) => {
        a = a.Pickup.toLowerCase();
        b = b.Pickup.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Dropoff Location",
    dataIndex: "DropoffLocation",
    key: "Dropoff",
    sorter: {
      compare: (a, b) => {
        a = a.DropoffLocation.toLowerCase();
        b = b.DropoffLocation.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Booked On",
    dataIndex: "BookedOn",
    sorter: {
      compare: (a, b) => {
        a = a.BookedOn.toLowerCase();
        b = b.BookedOn.toLowerCase();
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
    sorter: true,
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
      title: "User Booking",
      text: "Home",
      text1: "User Booking",
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
