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
        <!-- All Bookings -->
        <div class="col-lg-12 d-flex">
          <div class="card book-card flex-fill mb-0">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-md-5">
                  <h4>All Bookings <span>40</span></h4>
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
                        data-bs-target="#upcoming_booking"
                      >
                        {{ record.Booking_ID }}
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
                          <p>{{ record.Sold }}</p>
                        </div>
                      </div>
                    </template>
                    <template v-else-if="column.key === 'Pickup'">
                      <p>
                        {{ record.Pickup }}
                        <span class="d-block">{{ record.Delivery_Location }}</span>
                      </p>
                    </template>
                    <template v-else-if="column.key === 'Dropoff'">
                      <p>
                        {{ record.Dropoff }}
                        <span class="d-block">{{ record.Location }}</span>
                      </p>
                    </template>
                    <template v-else-if="column.key === 'Status'">
                      <div>
                        <span :class="record.Class">{{ record.Status }}</span>
                      </div>
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
                              data-bs-target="#upcoming_booking"
                            >
                              <i class="feather-eye me-1"></i> View
                            </a>
                            <a
                              class="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_booking"
                            >
                              <i class="feather-edit-3 me-1"></i> Edit
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
        <!-- /All Bookings -->
      </div>
      <!-- /Dashboard -->
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
    Booking_ID: "#1001",
    Image: "car-04.jpg",
    Car_Name: "Ferrari 458 MM Speciale",
    Sold: "Delivery",
    Rental_Type: "Hourly",
    Pickup: "45, Avenue ,Mark Street",
    Delivery_Location: "USA 15 Sep 2023, 09:30 AM",
    Dropoff: "21, Avenue, Windham",
    Location: "USA 15 Sep 2023, 11:30 AM",
    Booked_On: "15 Sep 2023, 09:00 AM",
    Total: "$300",
    Class: "badge badge-light-secondary",
    Status: "Upcoming",
  },
  {
    key: 2,
    Booking_ID: "#1002",
    Image: "car-01.jpg",
    Car_Name: "Toyota Camry SE 350",
    Sold: "Self Pickup",
    Rental_Type: "Day",
    Pickup: "1646 West St, Grand Rapids",
    Delivery_Location: "18 Sep 2023, 09:00 AM",
    Dropoff: "26 Platinum Drive",
    Location: "Canonsburg15 Sep 2023, 11:30 AM",
    Booked_On: "18 Sep 2023, 08:10 PM",
    Total: "$500",
    Class: "badge badge-light-warning",
    Status: "Inprogress",
  },
  {
    key: 3,
    Booking_ID: "#1003",
    Image: "car-05.jpg",
    Car_Name: "Kia Soul 2016",
    Sold: "Delivery",
    Rental_Type: "Weekly",
    Pickup: "14 Straford Park, Pittsburg",
    Delivery_Location: "03 Oct 2023, 10:15 AM",
    Dropoff: "11 Pleasant Hill, Pittsburg",
    Location: "10 Oct 2023, 10:15 AM",
    Booked_On: "21 Sep 2023, 04:15 PM",
    Total: "$600",
    Class: "badge badge-light-danger",
    Status: "Cancelled",
  },
  {
    key: 4,
    Booking_ID: "#1004",
    Image: "car-03.jpg",
    Car_Name: "Audi A3 2019 new",
    Sold: "Self Pickup",
    Rental_Type: "Monthly",
    Pickup: "63 White Pine Lane, Martinsville",
    Delivery_Location: "05 Nov 2023, 02:30 PM",
    Dropoff: "14 Roane Avenue, Herndon",
    Location: "05 Dec 2023, 02:30 PM",
    Booked_On: "04 Oct 2023, 08:00 AM",
    Total: "$1500",
    Class: "badge badge-light-warning",
    Status: "Inprogress",
  },
  {
    key: 5,
    Booking_ID: "#1005",
    Image: "car-05.jpg",
    Car_Name: "2018 Chevrolet Camaro",
    Sold: "Delivery",
    Rental_Type: "Day",
    Pickup: "24 Better Street, Kansas City",
    Delivery_Location: "16 Nov 2023, 10:20 AM",
    Dropoff: "77 Geraldine Lane, Newyork",
    Location: "17 Nov 2023, 10:20 AM",
    Booked_On: "16 Oct 2023, 12:30 PM",
    Total: "$450",
    Class: "badge badge-light-danger",
    Status: "Cancelled",
  },
  {
    key: 6,
    Booking_ID: "#1006",
    Image: "car-06.jpg",
    Car_Name: "Acura Sport Version",
    Sold: "Sel pickup",
    Rental_Type: "Hourly",
    Pickup: "78 Cityview Drive, Glenolden",
    Delivery_Location: "24 Nov 2023, 06:40 AM",
    Dropoff: "66 Ottis Street, Shawnee",
    Location: "24 Nov 2023, 08:40 AM",
    Booked_On: "24 Oct 2023, 05:40 PM",
    Total: "$250",
    Class: "badge badge-light-success",
    Status: "Completed",
  },
  {
    key: 7,
    Booking_ID: "#1007",
    Image: "car-08.jpg",
    Car_Name: "Toyota Tacoma 4WD",
    Sold: "Delivery",
    Rental_Type: "Monthly",
    Pickup: "41 Duke Lane, Branchburg",
    Delivery_Location: "15 Dec 2023, 04:30 PM",
    Dropoff: "80 Glory Road, Nashville",
    Location: "15 Jan 2024, 04:30 PM",
    Booked_On: "02 Nov 2023, 07:30 AM",
    Total: "$1000",
    Class: "badge badge-light-danger",
    Status: "Cancelled",
  },
];

const columns = [
  {
    title: "Booking ID",
    dataIndex: "Booking_ID",
    key: "Booking_ID",
    sorter: {
      compare: (a, b) => {
        a = a.Booking_ID.toLowerCase();
        b = b.Booking_ID.toLowerCase();
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
    dataIndex: "Rental_Type",
    sorter: {
      compare: (a, b) => {
        a = a.Rental_Type.toLowerCase();
        b = b.Rental_Type.toLowerCase();
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
    dataIndex: "Dropoff",
    key: "Dropoff",
    sorter: {
      compare: (a, b) => {
        a = a.Dropoff.toLowerCase();
        b = b.Dropoff.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Booked On",
    dataIndex: "Booked_On",
    sorter: {
      compare: (a, b) => {
        a = a.Booked_On.toLowerCase();
        b = b.Booked_On.toLowerCase();
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
