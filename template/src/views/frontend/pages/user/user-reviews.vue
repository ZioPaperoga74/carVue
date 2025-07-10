<template>
  <layouts-header></layouts-header>
  <user-breadcrumb :title="title" :text="text" :text1="text1" />

  <user-tabset></user-tabset>
  <!-- Page Content -->
  <div class="content">
    <div class="container">
      <!-- Sort By -->
      <div class="row">
        <div class="col-lg-12">
          <div class="sorting-info">
            <div class="row">
              <div class="col-md-12">
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
                <!-- Sort By -->

                <div class="row">
                  <!-- Reviews -->
                  <div class="col-lg-12 d-flex">
                    <div class="card book-card flex-fill mb-0">
                      <div class="card-header">
                        <div class="row align-items-center">
                          <div class="col-md-5">
                            <h4>All Reviews <span>40</span></h4>
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
                              <template v-if="column.key === 'CarName'">
                                <div class="table-avatar">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_review"
                                    class="avatar avatar-lg flex-shrink-0"
                                  >
                                    <img
                                      class="avatar-img"
                                      :src="getImageUrl(record.Image)"
                                      alt="Booking"
                                    />
                                  </a>
                                  <div class="table-head-name flex-grow-1">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_review"
                                      >{{ record.CarName }}</a
                                    >
                                    <p>{{ record.Role }}</p>
                                  </div>
                                </div>
                              </template>
                              <template v-else-if="column.key === 'Review'">
                                <p>
                                  {{ record.Review }}
                                </p>
                              </template>
                              <template v-else-if="column.key === 'Ratings'">
                                <div class="review-rating">
                                  <i class="fas fa-star filled me-1"></i>
                                  <i class="fas fa-star filled me-1"></i>
                                  <i class="fas fa-star filled me-1"></i>
                                  <i class="fas fa-star filled me-1"></i>
                                  <i :class="record.Class"></i>
                                  <span>(4.5)</span>
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
                                      <a class="dropdown-item" href="javascript:void(0);">
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
                                <div
                                  class="dataTables_length"
                                  id="DataTables_Table_0_length"
                                >
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Sort By -->
    </div>
  </div>
  <!-- /Page Content -->

  <layout-footer></layout-footer>

  <user-reviews-modal></user-reviews-modal>
</template>

<script>
const columns = [
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
    title: "Review",
    dataIndex: "Review",
    key: "Review",
    sorter: {
      compare: (a, b) => {
        a = a.Review.toLowerCase();
        b = b.Review.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Ratings",
    dataIndex: "Ratings",
    key: "Ratings",
    sorter: {
      compare: (a, b) => {
        a = a.Ratings.toLowerCase();
        b = b.Ratings.toLowerCase();
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
    CarName: "Ferrari 458 MM Speciale",
    Role: "Delivery",
    RentalType: "Hourly",
    Review: "The car arrived early & the rep was courteous and polite.",
    Ratings: "(4.5)",
    Image: "car-04.jpg",
    Class: "fas fa-star-half-stroke filled",
  },
  {
    key: 2,
    CarName: "Toyota Camry SE 350",
    Role: "Self Pickup",
    RentalType: "Day",
    Review: "The car was a lovely car to drive no problem with it all.",
    Ratings: "(4.0)",
    Image: "car-01.jpg",
    Class: "fas fa-star filled me-1",
  },
  {
    key: 3,
    CarName: "Kia Soul 2016",
    Role: "Delivery",
    RentalType: "Weekly",
    Review: "Experience was great travelling wih Dreams Rental",
    Ratings: "(5.0)",
    Image: "car-05.jpg",
    Class: "fas fa-star filled me-1",
  },
  {
    key: 4,
    CarName: "Audi A3 2019 new",
    Role: "Self Pickup",
    RentalType: "Monthly",
    Review: "Best service with good price, nice vehicle overall very good",
    Ratings: "(5.0)",
    Image: "car-03.jpg",
    Class: "fas fa-star filled me-1",
  },
  {
    key: 5,
    CarName: "2018 Chevrolet Camaro",
    Role: "Delivery",
    RentalType: "Day",
    Review: "Smooth process, modern vehicle & fair price - great rental experience",
    Ratings: "(5.0)",
    Image: "car-05.jpg",
    Class: "fas fa-star filled me-1",
  },
  {
    key: 6,
    CarName: "Acura Sport Version",
    Role: "Sel pickup",
    RentalType: "Hourly",
    Review: "Excellent service, clean car & smooth pickup & drop-off process",
    Ratings: "(5.0)",
    Image: "car-06.jpg",
    Class: "fas fa-star filled me-1",
  },
  {
    key: 7,
    CarName: "Toyota Tacoma 4WD",
    Role: "Delivery",
    RentalType: "Monthly",
    Review: "Quick & easy rental and also fair price for what you get",
    Ratings: "(4.0)",
    Image: "car-08.jpg",
    Class: "fas fa-star filled me-1",
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
      title: "User Reviews",
      text: "Home",
      text1: "User Reviews",
      data,
      columns,
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
