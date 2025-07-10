<template>
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
        <div class="content me-4">
            
            <!-- Breadcrumb -->
            <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                <div class="my-auto mb-2">
                    <h4 class="mb-1">All Reservations</h4>
                    <nav>
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item">
                                <router-link to="/admin-template/index">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">All Reservations</li>
                        </ol>
                    </nav>
                </div>
                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                    <div class="mb-2 me-2">
                        <a href="javascript:void(0);" class="btn btn-white d-flex align-items-center"><i class="ti ti-printer me-2"></i>Print</a>
                    </div>
                    <div class="mb-2">
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="btn btn-dark d-inline-flex align-items-center">
                                <i class="ti ti-upload me-1"></i>Export
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Breadcrumb -->

            <!-- Table Header -->
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                <div class="d-flex align-items-center flex-wrap row-gap-3">
                    <div class="dropdown me-2">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                            <i class="ti ti-filter me-1"></i> Sort By : Latest
                        </a>
                        <ul class="dropdown-menu  dropdown-menu-end p-2">
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
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>
                            </li>
                        </ul>
                    </div>
                    <div class="me-2">
                        <div class="input-icon-start position-relative topdatepicker">
                            <span class="input-icon-addon">
                                <i class="ti ti-calendar"></i>
                            </span>
                            <input type="text" class="form-control date-range bookingrange" ref="dateRangeInput" placeholder="dd/mm/yyyy - dd/mm/yyyy">
                        </div>
                    </div>                      
                    <div class="dropdown">
                        <a href="#filtercollapse" class="filtercollapse coloumn d-inline-flex align-items-center" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="filtercollapse">
                            <i class="ti ti-filter me-1"></i> Filter <span class="badge badge-xs rounded-pill bg-danger ms-2">0</span>
                        </a>
                    </div>
                </div>
                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                    <div class="top-search me-2">
                        <div class="top-search-group">
                            <span class="input-icon">
                                <i class="ti ti-search"></i>
                            </span>
                            <input type="text" class="form-control" placeholder="Search">
                        </div>
                    </div>                        
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            <i class="ti ti-layout-board me-1"></i> Columns
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg p-2">
                            <ul>
                                <li>
                                    <div class="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                                        <span class="d-inline-flex align-items-center"><i class="ti ti-grip-vertical me-1"></i>CAR</span>
                                        <div class="form-check form-check-sm form-switch mb-0">
                                            <input class="form-check-input form-label" type="checkbox" role="switch" checked="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                                        <span><i class="ti ti-grip-vertical me-1"></i>CUSTOMER</span>
                                        <div class="form-check form-check-sm form-switch mb-0">
                                            <input class="form-check-input form-label" type="checkbox" role="switch" checked="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                                        <span><i class="ti ti-grip-vertical me-1"></i>PICK UP  DETAILS</span>
                                        <div class="form-check form-check-sm form-switch mb-0">
                                            <input class="form-check-input form-label" type="checkbox" role="switch" checked="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                                        <span><i class="ti ti-grip-vertical me-1"></i>DROP OFF  DETAILS</span>
                                        <div class="form-check form-check-sm form-switch mb-0">
                                            <input class="form-check-input form-label" type="checkbox" role="switch" checked="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                                        <span><i class="ti ti-grip-vertical me-1"></i>STATUS</span>
                                        <div class="form-check form-check-sm form-switch mb-0">
                                            <input class="form-check-input form-label" type="checkbox" role="switch" checked="">
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
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            Pick Up Location
                        </a>
                        <ul class="dropdown-menu dropdown-menu-lg p-2">
                            <li>
                                <div class="top-search m-2">
                                    <div class="top-search-group">
                                        <span class="input-icon">
                                            <i class="ti ti-search"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Search">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Los Angles
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">New York City
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Houston
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Munich
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Montreal
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown me-2">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            Drop Off Location
                        </a>
                        <ul class="dropdown-menu dropdown-menu-lg p-2">
                            <li>
                                <div class="top-search m-2">
                                    <div class="top-search-group">
                                        <span class="input-icon">
                                            <i class="ti ti-search"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Search">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Los Angles
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">New York City
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Houston
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Munich
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Montreal
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown me-3">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            <i class="ti ti-badge me-1"></i>Status
                        </a>
                        <ul class="dropdown-menu dropdown-menu-lg p-2">
                            <li>
                                <div class="top-search m-2">
                                    <div class="top-search-group">
                                        <span class="input-icon">
                                            <i class="ti ti-search"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Search">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Completed
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Confirmed
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">In Rental
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Rejected
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">In Progress
                                </label>
                            </li>
                        </ul>
                    </div>
                    <a href="javascript:void(0);" class="me-2 text-purple links">Apply</a>
                    <a href="javascript:void(0);" class="text-danger links">Clear All</a>
                </div>
            </div>

            <!-- Custom Data Table -->
            <div class="custom-datatable-filter table-responsive">
                <a-table
                    class="table datatable"
                    :columns="columns"
                    :data-source="data"
                    :row-selection="rowSelection"
                >
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'CAR'">
                            <div class="d-flex align-items-center">
                                <router-link to="/admin-template/rentals/car-details" class="avatar me-2 flex-shrink-0">
                                    <img :src="getImageUrl(record.CAR_IMG)" alt="">
                                </router-link>
                                <div>
                                    <router-link to="/admin-template/bookings/reservation-details" class="text-info d-block mb-1">{{record.CAR_NO}}</router-link>
                                    <h6 class="fs-14"><router-link to="/admin-template/rentals/car-details">{{record.CAR}}</router-link></h6>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'CUSTOMER'">
                            <div class="d-flex align-items-center">
                                <router-link to="/admin-template/manage/company-details" class="avatar avatar-rounded me-2 flex-shrink-0">
                                    <img :src="getImageUrlOne(record.CUSTOMER_IMG)" alt="">
                                </router-link>
                                <div>
                                    <h6 class="mb-1 fs-14"><router-link to="/admin-template/manage/company-details">{{record.CUSTOMER}}</router-link></h6>
                                    <span class="rounded-pill"
                                        :class="[
                                            'badge', {
                                                'bg-secondary-transparent': record.BADGE === 'Client',
                                                'bg-violet-transparent': record.BADGE === 'Company',
                                            },
                                        ]"
                                    >{{record.BADGE}}</span>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'PICK_UP_DETAILS'">
                            <div class="d-flex align-items-center">
                                <div class="border rounded text-center flex-shrink-0 p-1 me-2">
                                    <h5 class="mb-2 fs-16">{{record.PICK_UP_DATE}}</h5>
                                    <span class="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">Feb, 2025</span>
                                </div>
                                <div>
                                    <p class="text-gray-9 mb-0">{{record.PICK_UP_DETAILS}} </p>
                                    <span class="fs-13">01:00 PM</span>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'DROP_OFF_DETAILS'">
                            <div class="d-flex align-items-center">
                                <div class="border rounded text-center flex-shrink-0 p-1 me-2">
                                    <h5 class="mb-2 fs-16">{{record.DROP_OFF_DATE}}</h5>
                                    <span class="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">Feb, 2025</span>
                                </div>
                                <div>
                                    <p class="text-gray-9 mb-0">{{record.DROP_OFF_DETAILS}} </p>
                                    <span class="fs-13">01:00 PM</span>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'STATUS'">
                            <span class="d-inline-flex align-items-center badge-sm"
                            :class="[
                                'badge', {
                                    'bg-success-transparent': record.STATUS === 'Completed',
                                    'bg-orange-transparent': record.STATUS === 'Confirmed',
                                    'bg-violet-transparent': record.STATUS === 'In Rental' || record.STATUS === 'In Progress' || record.STATUS === '',
                                    'bg-danger-transparent': record.STATUS === 'Rejected',
                                },
                            ]"
                            >
                                <i class="ti ti-point-filled me-1"></i>{{record.STATUS}}
                            </span>
                        </template>
                        <template v-else-if="column.key === 'action'">
                            <div class="dropdown">
                                <button class="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="ti ti-dots-vertical"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end p-2">
                                    <li>
                                        <router-link class="dropdown-item rounded-1" to="/admin-template/bookings/reservation-details"><i class="ti ti-eye me-1"></i>View Details</router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item rounded-1" to="/admin-template/bookings/edit-reservation"><i class="ti ti-edit me-1"></i>Edit</router-link>
                                    </li>
                                    <li>
                                        <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>Delete</a>
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
            <p>&copy; 2025 Dreamsrent, Made with <span class="text-danger">❤</span> by <a href="javascript:void(0);" class="text-secondary">Dreams</a></p>
        </div>
        <!-- /Footer-->
    </div>
    <!-- /Page Wrapper -->

    <!-- Delete Modal  -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <span class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                        <i class="ti ti-trash-x fs-26"></i>
                    </span>
                    <h4 class="mb-1">Delete Reservation</h4>
                    <p class="mb-3">Are you sure you want to delete Reservation?</p>
                    <div class="d-flex justify-content-center">
                        <a href="javascript:void(0);" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
                        <router-link to="/admin-template/locations/countries" class="btn btn-primary">Yes, Delete</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Delete Modal-->
</template>

<script>
const data = [
    {
        "ID": "1",
        "CAR_IMG": "car-01.jpg",
        "CAR_NO": "#BR3466",
        "CAR": " Ford Endeavour",
        "CUSTOMER": "Reuben Keen",
        "CUSTOMER_IMG": "customer-01.jpg",
        "BADGE": "Client",
        "PICK_UP_DATE": "12",
        "PICK_UP_DETAILS": "Newyork",
        "DROP_OFF_DATE": "13",
        "DROP_OFF_DETAILS": "Newyork",
        "STATUS": "Completed"
    },
    {
        "ID": "2",
        "CAR_IMG": "car-02.jpg",
        "CAR_NO": "#BR3467",
        "CAR": " Ferrari 458 MM",
        "CUSTOMER": "William Jones",
        "CUSTOMER_IMG": "customer-02.jpg",
        "BADGE": "Company",
        "PICK_UP_DATE": "12",
        "PICK_UP_DETAILS": "Newyork",
        "DROP_OFF_DATE": "13",
        "DROP_OFF_DETAILS": "Newyork",
        "STATUS": "Confirmed"
    },
    {
        "ID": "3",
        "CAR_IMG": "car-03.jpg",
        "CAR_NO": "#BR3468",
        "CAR": " Ford Mustang",
        "CUSTOMER": "Leonard Jandreau",
        "CUSTOMER_IMG": "customer-03.jpg",
        "BADGE": "Company",
        "PICK_UP_DATE": "14",
        "PICK_UP_DETAILS": "Los Angeles",
        "DROP_OFF_DATE": "15",
        "DROP_OFF_DETAILS": "Newyork",
        "STATUS": "In Rental"
    },
    {
        "ID": "4",
        "CAR_IMG": "car-04.jpg",
        "CAR_NO": "#BR3469",
        "CAR": " Toyota Tacoma 4",
        "CUSTOMER": "Adam Bolden",
        "CUSTOMER_IMG": "customer-04.jpg",
        "BADGE": "Client",
        "PICK_UP_DATE": "14",
        "PICK_UP_DETAILS": "Houston",
        "DROP_OFF_DATE": "14",
        "DROP_OFF_DETAILS": "Newyork",
        "STATUS": "Confirmed"
    },
    {
        "ID": "5",
        "CAR_IMG": "car-05.jpg",
        "CAR_NO": "#BR3470",
        "CAR": " Chevrolet Truck",
        "CUSTOMER": "Harvey Jimenez",
        "CUSTOMER_IMG": "customer-05.jpg",
        "BADGE": "Company",
        "PICK_UP_DATE": "14",
        "PICK_UP_DETAILS": "Phoenix",
        "DROP_OFF_DATE": "15",
        "DROP_OFF_DETAILS": "Newyork",
        "STATUS": "Rejected"
    },
    {
        "ID": "6",
        "CAR_IMG": "car-06.jpg",
        "CAR_NO": "#BR3471",
        "CAR": " Etios Carmen",
        "CUSTOMER": "William Ward",
        "CUSTOMER_IMG": "customer-06.jpg",
        "BADGE": "Client",
        "PICK_UP_DATE": "14",
        "PICK_UP_DETAILS": "Philadelphia",
        "DROP_OFF_DATE": "15",
        "DROP_OFF_DETAILS": "Newyork",
        "STATUS": "Completed"
    },
    {
        "ID": "7",
        "CAR_IMG": "car-07.jpg",
        "CAR_NO": "#BR3472",
        "CAR": " Acura Sport",
        "CUSTOMER": "Norman Coleman",
        "CUSTOMER_IMG": "customer-07.jpg",
        "BADGE": "Client",
        "PICK_UP_DATE": "14",
        "PICK_UP_DETAILS": "Philadelphia",
        "DROP_OFF_DATE": "15",
        "DROP_OFF_DETAILS": "Newyork",
        "STATUS": "Confirmed"
    },
    {
        "ID": "8",
        "CAR_IMG": "car-08.jpg",
        "CAR_NO": "#BR3473",
        "CAR": " Kia Soul 2016",
        "CUSTOMER": "Jay Beckman",
        "CUSTOMER_IMG": "customer-08.jpg",
        "BADGE": "Company",
        "PICK_UP_DATE": "04",
        "PICK_UP_DETAILS": " Philadelphia",
        "DROP_OFF_DATE": "06",
        "DROP_OFF_DETAILS": "Newyork",
        "STATUS": "Rejected"
    },
    {
        "ID": "9",
        "CAR_IMG": "car-09.jpg",
        "CAR_NO": "#BR3474",
        "CAR": " Camaro",
        "CUSTOMER": "Francis Harris",
        "CUSTOMER_IMG": "customer-09.jpg",
        "BADGE": "Client",
        "PICK_UP_DATE": "04",
        "PICK_UP_DETAILS": "Philadelphia",
        "DROP_OFF_DATE": "06",
        "DROP_OFF_DETAILS": "Newyork",
        "STATUS": "Rejected"
    },
    {
        "ID": "10",
        "CAR_IMG": "car-10.jpg",
        "CAR_NO": "#BR3475",
        "CAR": " Toyota Camry",
        "CUSTOMER": "Renaldo Labarre",
        "CUSTOMER_IMG": "customer-10.jpg",
        "BADGE": "Company",
        "PICK_UP_DATE": "04",
        "PICK_UP_DETAILS": "Philadelphia",
        "DROP_OFF_DATE": "06",
        "DROP_OFF_DETAILS": "Newyork",
        "STATUS": "In Progress"
    }
]

const columns = [
  {
    title: "CAR",
    dataIndex: "CAR",
    key: "CAR",
    sorter: {
      compare: (a, b) => {
        a = a.CAR.toLowerCase();
        b = b.CAR.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "CUSTOMER",
    dataIndex: "CUSTOMER",
    key: "CUSTOMER",
    sorter: {
      compare: (a, b) => {
        a = a.CUSTOMER.toLowerCase();
        b = b.CUSTOMER.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "PICK UP DETAILS",
    dataIndex: "PICK_UP_DETAILS",
    key: "PICK_UP_DETAILS",
    sorter: {
      compare: (a, b) => {
        a = a.PICK_UP_DETAILS.toLowerCase();
        b = b.PICK_UP_DETAILS.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DROP OFF DETAILS",
    dataIndex: "DROP_OFF_DETAILS",
    key: "DROP_OFF_DETAILS",
    sorter: {
      compare: (a, b) => {
        a = a.DROP_OFF_DETAILS.toLowerCase();
        b = b.DROP_OFF_DETAILS.toLowerCase();
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
  },
];
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};

import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";

export default{
    data(){
        return{
            columns,
            data,
            rowSelection,
        }
    },
    methods: {
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/cars/${imageName}`, import.meta.url).href;
        },
        getImageUrlOne(imageName) {
            return new URL(`/src/assets/admin/img/customer/${imageName}`, import.meta.url).href;
        },
    },
    setup() {
        const dateRangeInput = ref(null);

        // Move the function declaration outside of the onMounted callback
        function booking_range(start, end) {
        return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
        }

        onMounted(() => {
            if (dateRangeInput.value) {
                const start = moment().subtract(6, "days");
                const end = moment();

                new DateRangePicker(
                dateRangeInput.value,
                {
                    startDate: start,
                    endDate: end,
                    ranges: {
                    Today: [moment(), moment()],
                    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                    "Last 7 Days": [moment().subtract(6, "days"), moment()],
                    "Last 30 Days": [moment().subtract(29, "days"), moment()],
                    "This Month": [moment().startOf("month"), moment().endOf("month")],
                    "Last Month": [
                        moment().subtract(1, "month").startOf("month"),
                        moment().subtract(1, "month").endOf("month"),
                    ],
                    },
                },
                booking_range
                );

                booking_range(start, end);
            }
        });

        return {
        dateRangeInput,
        };
    },
}
</script>