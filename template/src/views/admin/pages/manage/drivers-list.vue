<template>
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
        <div class="content me-4">
            
            <!-- Breadcrumb -->
            <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                <div class="my-auto mb-2">
                    <h4 class="mb-1">Drivers</h4>
                    <nav>
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item">
                                <router-link to="/admin-template/index">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Drivers</li>
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
                    <div class="mb-2">
                        <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_driver"><i class="ti ti-plus me-2"></i>Add New Driver</a>
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
                </div>
                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                    <div class="dropdown me-2">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                            <i class="ti ti-edit-circle me-1"></i> Bulk Actions
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end p-2">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Delete</a>
                            </li>
                        </ul>
                    </div>
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
                                        <span class="d-inline-flex align-items-center"><i class="ti ti-grip-vertical me-1"></i>DRIVERS</span>
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
                                        <span><i class="ti ti-grip-vertical me-1"></i>LICENSE NO</span>
                                        <div class="form-check form-check-sm form-switch mb-0">
                                            <input class="form-check-input form-label" type="checkbox" role="switch" checked="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                                        <span><i class="ti ti-grip-vertical me-1"></i>EXPIRY DATE</span>
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

            <!-- Custom Data Table -->
            <div class="custom-datatable-filter table-responsive">
                <a-table
                    class="table datatable"
                    :columns="columns"
                    :data-source="data"
                    :row-selection="rowSelection"
                >
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'DRIVERS'">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar rounded-circle me-2 flex-shrink-0">
                                    <img :src="getImageUrl(record.IMAGE)" class="rounded-circle" alt="img">
                                </a>
                                <div>
                                    <h6 class="fs-14 fw-semibold"><a href="javascript:void(0);">{{record.DRIVERS}}</a></h6>
                                    <p >{{record.PHONE}}</p>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'EMAIL'">
                            <p class="text-gray-9">{{record.EMAIL}}</p>
                        </template>
                        <template v-else-if="column.key === 'LICENSE_NO'">
                            <p class="text-gray-9">{{record.LICENSE_NO}}</p>
                        </template>
                        <template v-else-if="column.key === 'EXPIRY_DATE'">
                            <p class="text-gray-9">{{record.EXPIRY_DATE}}</p>
                        </template>
                        <template v-else-if="column.key === 'STATUS'">
                            <span class="badge badge-dark-transparent d-flex align-items-center">
                                <i class="ti ti-point-filled me-1"
                                :class="[
                                    {
                                        'text-success': record.STATUS === 'Active',
                                        'text-danger': record.STATUS === 'Inactive',
                                    },
                                ]"
                                ></i>
                                {{record.STATUS}}
                            </span>
                        </template>
                        <template v-else-if="column.key === 'action'">
                            <div class="dropdown">
                                <button class="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="ti ti-dots-vertical"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end p-2">
                                    <li>
                                        <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_driver"><i class="ti ti-edit me-1"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_driver"><i class="ti ti-trash me-1"></i>Delete</a>
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

    <drivers-modal></drivers-modal>
</template>

<script>
const data = [
 {
   "ID": "1",
   "IMAGE": "customer-01.jpg",
   "DRIVERS": "Reuben Keen",
   "PHONE": "+1 14782 14578",
   "EMAIL": "reuben@example.com",
   "LICENSE_NO": "DL123456789",
   "EXPIRY_DATE": "24 Jan 2025",
   "STATUS": "Active"
 },
 {
   "ID": "2",
   "IMAGE": "customer-02.jpg",
   "DRIVERS": "William Jones",
   "PHONE": "+1 32569 15458",
   "EMAIL": "william@example.com",
   "LICENSE_NO": "DL1697453622",
   "EXPIRY_DATE": "19 Dec 2024",
   "STATUS": "Inactive"
 },
 {
   "ID": "3",
   "IMAGE": "customer-03.jpg",
   "DRIVERS": "Leonard Jandreau",
   "PHONE": "+1 25669 88985",
   "EMAIL": "leonard@example.com",
   "LICENSE_NO": "DL5694863152",
   "EXPIRY_DATE": "11 Dec 2024",
   "STATUS": "Active"
 },
 {
   "ID": "4",
   "IMAGE": "customer-04.jpg",
   "DRIVERS": "Adam Bolden",
   "PHONE": "+1 54698 55468",
   "EMAIL": "adam@example.com",
   "LICENSE_NO": "DL234567890",
   "EXPIRY_DATE": "29 Nov 2024",
   "STATUS": "Active"
 },
 {
   "ID": "5",
   "IMAGE": "customer-05.jpg",
   "DRIVERS": "Harvey Jimenez",
   "PHONE": "+1 12488 14457",
   "EMAIL": "harvey@example.com",
   "LICENSE_NO": "DL678901234",
   "EXPIRY_DATE": "03 Nov 2024",
   "STATUS": "Active"
 },
 {
   "ID": "6",
   "IMAGE": "customer-06.jpg",
   "DRIVERS": "William Ward",
   "PHONE": "+1 65895 47878",
   "EMAIL": "william@example.com",
   "LICENSE_NO": "DL012345678",
   "EXPIRY_DATE": "31 Oct 2024",
   "STATUS": "Inactive"
 },
 {
   "ID": "7",
   "IMAGE": "customer-07.jpg",
   "DRIVERS": "Norman Coleman",
   "PHONE": "+1 32569 15458",
   "EMAIL": "norman@example.com",
   "LICENSE_NO": "DL987654321",
   "EXPIRY_DATE": "15 Oct 2024",
   "STATUS": "Inactive"
 },
 {
   "ID": "8",
   "IMAGE": "customer-08.jpg",
   "DRIVERS": "Jay Beckman",
   "PHONE": "+1 56598 98956",
   "EMAIL": "jaybeckman@example.com",
   "LICENSE_NO": "DL345678901",
   "EXPIRY_DATE": "26 Sep 2024",
   "STATUS": "Active"
 },
 {
   "ID": "9",
   "IMAGE": "customer-09.jpg",
   "DRIVERS": "Francis Harris",
   "PHONE": "+1 12781 02567",
   "EMAIL": "francis@example.com",
   "LICENSE_NO": "DL456789012",
   "EXPIRY_DATE": "01 Sep 2024",
   "STATUS": "Active"
 },
 {
   "ID": "10",
   "IMAGE": "customer-10.jpg",
   "DRIVERS": "Renaldo Labarre",
   "PHONE": "+1 12124 14255",
   "EMAIL": "renaldo@example.com",
   "LICENSE_NO": "DL567890123",
   "EXPIRY_DATE": "15 Aug 2024",
   "STATUS": "Active"
 }
];

const columns = [
  {
    title: "DRIVERS",
    dataIndex: "DRIVERS",
    key: "DRIVERS",
    sorter: {
      compare: (a, b) => {
        a = a.DRIVERS.toLowerCase();
        b = b.DRIVERS.toLowerCase();
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
    title: "LICENSE NO",
    dataIndex: "LICENSE_NO",
    key: "LICENSE_NO",
    sorter: {
      compare: (a, b) => {
        a = a.LICENSE_NO.toLowerCase();
        b = b.LICENSE_NO.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "EXPIRY DATE",
    dataIndex: "EXPIRY_DATE",
    key: "EXPIRY_DATE",
    sorter: {
      compare: (a, b) => {
        a = a.EXPIRY_DATE.toLowerCase();
        b = b.EXPIRY_DATE.toLowerCase();
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