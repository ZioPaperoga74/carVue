<template>
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
        <div class="content me-4">
            
            <!-- Breadcrumb -->
            <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                <div class="my-auto mb-2">
                    <h2 class="mb-1">Enquiries</h2>
                    <nav>
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item">
                                <router-link to="/admin-template/index">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Enquiries</li>
                        </ol>
                    </nav>
                </div>
                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                    <div class="mb-2 me-2">
                        <a href="javascript:void(0);" class="btn btn-white d-flex align-items-center"><i class="ti ti-printer me-2"></i>Print</a>
                    </div>
                    <div class="mb-2 me-2">
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
                    <div class="dropdown me-2">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            <i class="ti ti-badge fs-16 me-1"></i>
                            Status
                        </a>
                        <ul class="dropdown-menu dropdown-menu-md p-2">
                            <li class="dropdown-item">
                                Active
                            </li>
                            <li class="dropdown-item">
                                Inactive
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
                        <a href="javascript:void(0);" class="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
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
                                        <span><i class="ti ti-grip-vertical me-1"></i>EMAIL</span>
                                        <div class="form-check form-check-sm form-switch mb-0">
                                            <input class="form-check-input form-label" type="checkbox" role="switch" checked="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                                        <span><i class="ti ti-grip-vertical me-1"></i>PHONE</span>
                                        <div class="form-check form-check-sm form-switch mb-0">
                                            <input class="form-check-input form-label" type="checkbox" role="switch" checked="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                                        <span><i class="ti ti-grip-vertical me-1"></i>DATE</span>
                                        <div class="form-check form-check-sm form-switch mb-0">
                                            <input class="form-check-input form-label" type="checkbox" role="switch" checked="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                                        <span><i class="ti ti-grip-vertical me-1"></i>ENQUIRY</span>
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
                >
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'CAR'">
                            <div class="d-flex align-items-center">
                                <router-link to="/admin-template/rentals/car-details" class="avatar me-2 flex-shrink-0">
                                    <img :src="getImageUrl(record.CAR_IMG)" alt="">
                                </router-link>
                                <div>
                                    <router-link to="/admin-template/rentals/car-details" class="fw-semibold d-block">{{record.CAR}}</router-link>
                                    <span class="fs-13">{{record.CAR_TYPE}}</span>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'CUSTOMER'">
                            <div class="d-flex align-items-center">
                                <router-link class="d-block fw-semibold" to="/admin-template/manage/customer-details">{{record.CUSTOMER}}</router-link>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'EMAIL'">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="me-2">{{record.EMAIL}}</a>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'DATE'">
                            <div>
                                <p class="text-gray-9 mb-0">{{record.DATE}}</p>
                                <span class="text-gray-5 fs-13">01:00 PM</span>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'ENQUIRY'">
                            <a href="javascript:void(0);" class="p-1 d-inline-flex align-items-center justify-content-center border rounded-circle">
                                <i class="ti ti-file-invoice"></i>
                            </a>
                        </template>
                        <template v-else-if="column.key === 'STATUS'">
                            <span class="d-inline-flex align-items-center badge-sm"
                                :class="[
                                    'badge', {
                                        'badge-soft-success': record.STATUS === 'Opened',
                                        'bg-danger-transparent': record.STATUS === 'Not Opended',
                                        'badge-soft-violet': record.STATUS === 'Replied',
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
                                        <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_enquiries"><i class="ti ti-trash me-1"></i>Delete</a>
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
        <div class="footer d-sm-flex align-items-center justify-content-between bg-white p-3">
            <p class="mb-0">
                <a href="javascript:void(0);">Privacy Policy</a>
                <a href="javascript:void(0);" class="ms-4">Terms of Use</a>
            </p>
            <p>&copy; 2025 Dreamsrent, Made with <span class="text-danger">❤</span> by <a href="javascript:void(0);" class="text-secondary">Dreams</a></p>
        </div>
    </div>
    <!-- /Page Wrapper -->

    <!-- Delete Quotation -->
    <div class="modal fade" id="delete_enquiries">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <span class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                        <i class="ti ti-trash-x fs-26"></i>
                    </span>
                    <h4 class="mb-1">Delete Enquiries</h4>
                    <p class="mb-3">Are you sure you want to delete Enquiries?</p>
                    <div class="d-flex justify-content-center">
                        <a href="javascript:void(0);" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
                        <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Delete Quotation -->
</template>

<script>
const data = [
 {
    "CAR_IMG": "car-01.jpg",
    "CAR": "Ford Endeavour",
    "CAR_TYPE": "Sedan",
    "CUSTOMER": "Reuben Keen",
    "EMAIL": "reubenkeen@example.com",
    "PHONE": "+1 56598 98956",
    "DATE": "25 May 2025",
    "ENQUIRY": "",
    "STATUS": "Opened"
 },
 {
    "CAR_IMG": "car-02.jpg",
    "CAR": "Ferrari 458 MM",
    "CAR_TYPE": "Convertible",
    "CUSTOMER": "William Jones",
    "EMAIL": "williamjones@example.com",
    "PHONE": "+1 24558 56599",
    "DATE": "25 May 2025",
    "ENQUIRY": "",
    "STATUS": "Replied"
 },
 {
    "CAR_IMG": "car-03.jpg",
    "CAR": "Ford Mustang",
    "CAR_TYPE": "Coupe",
    "CUSTOMER": "Leonard Jandreau",
    "EMAIL": "leonardjandreau@example.com",
    "PHONE": "+1 25669 88985",
    "DATE": "25 May 2025",
    "ENQUIRY": "",
    "STATUS": "Opened"
 },
 {
    "CAR_IMG": "car-04.jpg",
    "CAR": "Toyota Tacoma 4",
    "CAR_TYPE": "Hatchback",
    "CUSTOMER": "Adam Bolden",
    "EMAIL": "adambolden@example.com",
    "PHONE": "+1 54698 55468",
    "DATE": "25 May 2025",
    "ENQUIRY": "",
    "STATUS": "Opened"
 },
 {
    "CAR_IMG": "car-05.jpg",
    "CAR": "Chevrolet Truck",
    "CAR_TYPE": "Sedan",
    "CUSTOMER": "Harvey Jimenez",
    "EMAIL": "harveyjimenez@example.com",
    "PHONE": "+1 32569 15458",
    "DATE": "25 May 2025",
    "ENQUIRY": "",
    "STATUS": "Not Opended"
 },
 {
    "CAR_IMG": "car-06.jpg",
    "CAR": "Etios Carmen",
    "CAR_TYPE": "Hatchback",
    "CUSTOMER": "William Ward",
    "EMAIL": "williamward@example.com",
    "PHONE": "+1 65895 47878",
    "DATE": "25 May 2025",
    "ENQUIRY": "",
    "STATUS": "Opened"
 },
 {
    "CAR_IMG": "car-07.jpg",
    "CAR": "Acura Sport",
    "CAR_TYPE": "Crossover",
    "CUSTOMER": "Norman Coleman",
    "EMAIL": "normancoleman@example.com",
    "PHONE": "+1 14782 14578",
    "DATE": "25 May 2025",
    "ENQUIRY": "",
    "STATUS": "Opened"
 },
 {
    "CAR_IMG": "car-08.jpg",
    "CAR": "Kia Soul 2016",
    "CAR_TYPE": "Delivery",
    "CUSTOMER": "Jay Beckman",
    "EMAIL": "jaybeckman@example.com",
    "PHONE": "+1 12488 14457",
    "DATE": "25 May 2025",
    "ENQUIRY": "",
    "STATUS": "Not Opended"
 },
 {
    "CAR_IMG": "car-09.jpg",
    "CAR": "Camaro",
    "CAR_TYPE": "Station Wagon",
    "CUSTOMER": "Francis Harris",
    "EMAIL": "francisharris@example.com",
    "PHONE": "+1 12781 02567",
    "DATE": "25 May 2025",
    "ENQUIRY": "",
    "STATUS": "Not Opended"
 },
 {
    "CAR_IMG": "car-10.jpg",
    "CAR": "Toyota Camry",
    "CAR_TYPE": "Mini Van",
    "CUSTOMER": "Renaldo Labarre",
    "EMAIL": "renaldolabarre@example.com",
    "PHONE": "+1 12124 1425556",
    "DATE": "25 May 2025",
    "ENQUIRY": "",
    "STATUS": "Opened"
 }
];

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
    title: "DATE",
    dataIndex: "DATE",
    key: "DATE",
    sorter: {
      compare: (a, b) => {
        a = a.DATE.toLowerCase();
        b = b.DATE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "ENQUIRY",
    dataIndex: "ENQUIRY",
    key: "ENQUIRY",
    sorter: {
      compare: (a, b) => {
        a = a.ENQUIRY.toLowerCase();
        b = b.ENQUIRY.toLowerCase();
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
        }
    },
    methods: {
        getImageUrl(imageName) {
        return new URL(`/src/assets/admin/img/car/${imageName}`, import.meta.url).href;
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