<template>
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
        <div class="content me-4">
            
            <!-- Breadcrumb -->
            <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                <div class="my-auto mb-2">
                    <h4 class="mb-1">Location</h4>
                    <nav>
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item">
                                <router-link to="/admin-template/index">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Location</li>
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
                        <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_location"><i class="ti ti-plus me-2"></i>Add New Location</a>
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
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
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
                                        <span class="d-inline-flex align-items-center"><i class="ti ti-grip-vertical me-1"></i>LOCATION TITLE</span>
                                        <div class="form-check form-check-sm form-switch mb-0">
                                            <input class="form-check-input form-label" type="checkbox" role="switch" checked="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                                        <span><i class="ti ti-grip-vertical me-1"></i>ADDRESS</span>
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
                                        <span><i class="ti ti-grip-vertical me-1"></i>WORKING DAYS</span>
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
                        <template v-if="column.key === 'LOCATION_TITLE'">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar rounded-circle me-2 flex-shrink-0">
                                    <img :src="getImageUrl(record.IMAGE)" class="rounded-circle" alt="img">
                                </a>
                                <h6 class="fs-14 fw-semibold"><a href="javascript:void(0);">{{record.LOCATION_TITLE}}</a></h6>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'WORKING_DAYS'">
                            <div class="working-days">
                                <span v-for="day in record.WORKING_DAYS" :key="day.id"
                                    :class="{ 'working': day.active, 'non-working': !day.active }">{{day.DAYS}}</span>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'STATUS'">
                            <span class="badge badge-dark-transparent badge-md d-flex align-items-center">
                                <i class="ti ti-point-filled me-1"
                                :class="[
                                    {
                                        'text-success': record.STATUS === 'Enabled',
                                        'text-danger': record.STATUS === 'Disabled',
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
                                        <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_location"><i class="ti ti-edit me-1"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_location"><i class="ti ti-trash me-1"></i>Delete</a>
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

    <locations-modal></locations-modal>
</template>


<script>
const data = [
 {
   "ID": "1",
   "IMAGE": "location-01.jpg",
   "LOCATION_TITLE": "Johnson Dealer Zone",
   "ADDRESS": "2881 Jarvis Street",
   "PHONE": "+1 56598 98956",
   "WORKING_DAYS": [
        {"id": 1, "DAYS": "M", "active": true},
        {"id": 2, "DAYS": "T", "active": false},
        {"id": 3, "DAYS": "W", "active": true},
        {"id": 4, "DAYS": "T", "active": false},
        {"id": 5, "DAYS": "F", "active": true},
        {"id": 6, "DAYS": "S", "active": true},
        {"id": 7, "DAYS": "S", "active": false}
    ],
   "STATUS": "Enabled"
 },
 {
   "ID": "2",
   "IMAGE": "location-02.jpg",
   "LOCATION_TITLE": "Miller Auto Trade Zone",
   "ADDRESS": "354 Java Lane",
   "PHONE": "+1 24558 56599",
   "WORKING_DAYS": [
        {"id": 1, "DAYS": "M", "active": true},
        {"id": 2, "DAYS": "T", "active": true},
        {"id": 3, "DAYS": "W", "active": true},
        {"id": 4, "DAYS": "T", "active": false},
        {"id": 5, "DAYS": "F", "active": false},
        {"id": 6, "DAYS": "S", "active": false},
        {"id": 7, "DAYS": "S", "active": true}
    ],
   "STATUS": "Disabled"
 },
 {
   "ID": "3",
   "IMAGE": "location-03.jpg",
   "LOCATION_TITLE": "Thompson Dealer Parking",
   "ADDRESS": "849 Circle Drive",
   "PHONE": "+1 25669 88985",
   "WORKING_DAYS": [
        {"id": 1, "DAYS": "M", "active": true},
        {"id": 2, "DAYS": "T", "active": true},
        {"id": 3, "DAYS": "W", "active": false},
        {"id": 4, "DAYS": "T", "active": true},
        {"id": 5, "DAYS": "F", "active": true},
        {"id": 6, "DAYS": "S", "active": false},
        {"id": 7, "DAYS": "S", "active": false}
    ],
   "STATUS": "Enabled"
 },
 {
   "ID": "4",
   "IMAGE": "location-04.jpg",
   "LOCATION_TITLE": "Smith Auto Dealer Lot",
   "ADDRESS": "239 Clousson Road",
   "PHONE": "+1 54698 55468",
   "WORKING_DAYS": [
        {"id": 1, "DAYS": "M", "active": true},
        {"id": 2, "DAYS": "T", "active": true},
        {"id": 3, "DAYS": "W", "active": false},
        {"id": 4, "DAYS": "T", "active": false},
        {"id": 5, "DAYS": "F", "active": false},
        {"id": 6, "DAYS": "S", "active": false},
        {"id": 7, "DAYS": "S", "active": true}
    ],
   "STATUS": "Enabled"
 },
 {
   "ID": "5",
   "IMAGE": "location-05.jpg",
   "LOCATION_TITLE": "Anderson Dealer Zone",
   "ADDRESS": "728 Glenview Drive",
   "PHONE": "+1 32569 15458",
   "WORKING_DAYS": [
        {"id": 1, "DAYS": "M", "active": true},
        {"id": 2, "DAYS": "T", "active": false},
        {"id": 3, "DAYS": "W", "active": true},
        {"id": 4, "DAYS": "T", "active": true},
        {"id": 5, "DAYS": "F", "active": true},
        {"id": 6, "DAYS": "S", "active": false},
        {"id": 7, "DAYS": "S", "active": false}
    ],
   "STATUS": "Enabled"
 },
 {
   "ID": "6",
   "IMAGE": "location-06.jpg",
   "LOCATION_TITLE": "Carter Dealer Holding Lot",
   "ADDRESS": "39 Blackwell Street",
   "PHONE": "+1 65895 47878",
   "WORKING_DAYS": [
        {"id": 1, "DAYS": "M", "active": true},
        {"id": 2, "DAYS": "T", "active": false},
        {"id": 3, "DAYS": "W", "active": true},
        {"id": 4, "DAYS": "T", "active": false},
        {"id": 5, "DAYS": "F", "active": true},
        {"id": 6, "DAYS": "S", "active": false},
        {"id": 7, "DAYS": "S", "active": true}
    ],
   "STATUS": "Enabled"
 },
 {
   "ID": "7",
   "IMAGE": "location-07.jpg",
   "LOCATION_TITLE": "Walker Auto Trade Yard",
   "ADDRESS": "75 Cambridge Place",
   "PHONE": "+1 14782 14578",
   "WORKING_DAYS": [
        {"id": 1, "DAYS": "M", "active": true},
        {"id": 2, "DAYS": "T", "active": false},
        {"id": 3, "DAYS": "W", "active": false},
        {"id": 4, "DAYS": "T", "active": true},
        {"id": 5, "DAYS": "F", "active": true},
        {"id": 6, "DAYS": "S", "active": false},
        {"id": 7, "DAYS": "S", "active": false}
    ],
   "STATUS": "Enabled"
 },
 {
   "ID": "8",
   "IMAGE": "location-08.jpg",
   "LOCATION_TITLE": "Taylor Auto Dealer Zone",
   "ADDRESS": "56 Garfield Road",
   "PHONE": "+1 12488 14457",
   "WORKING_DAYS": [
        {"id": 1, "DAYS": "M", "active": false},
        {"id": 2, "DAYS": "T", "active": true},
        {"id": 3, "DAYS": "W", "active": true},
        {"id": 4, "DAYS": "T", "active": true},
        {"id": 5, "DAYS": "F", "active": false},
        {"id": 6, "DAYS": "S", "active": true},
        {"id": 7, "DAYS": "S", "active": false}
    ],
   "STATUS": "Enabled"
 },
 {
   "ID": "9",
   "IMAGE": "location-09.jpg",
   "LOCATION_TITLE": "Evans Dealer Car Zone",
   "ADDRESS": "2042 Strother Street",
   "PHONE": "+1 12781 02567",
   "WORKING_DAYS": [
        {"id": 1, "DAYS": "M", "active": true},
        {"id": 2, "DAYS": "T", "active": true},
        {"id": 3, "DAYS": "W", "active": true},
        {"id": 4, "DAYS": "T", "active": true},
        {"id": 5, "DAYS": "F", "active": true},
        {"id": 6, "DAYS": "S", "active": false},
        {"id": 7, "DAYS": "S", "active": false}
    ],
   "STATUS": "Disabled"
 },
 {
   "ID": "10",
   "IMAGE": "location-10.jpg",
   "LOCATION_TITLE": "Allen Dealer Parking Lot",
   "ADDRESS": "743 Simpson Square",
   "PHONE": "+1 12124 1425556",
   "WORKING_DAYS": [
        {"id": 1, "DAYS": "M", "active": true},
        {"id": 2, "DAYS": "T", "active": true},
        {"id": 3, "DAYS": "W", "active": true},
        {"id": 4, "DAYS": "T", "active": true},
        {"id": 5, "DAYS": "F", "active": false},
        {"id": 6, "DAYS": "S", "active": false},
        {"id": 7, "DAYS": "S", "active": true}
    ],
   "STATUS": "Enabled"
 }
];

const columns = [
  {
    title: "LOCATION TITLE",
    dataIndex: "LOCATION_TITLE",
    key: "LOCATION_TITLE",
    sorter: {
      compare: (a, b) => {
        a = a.LOCATION_TITLE.toLowerCase();
        b = b.LOCATION_TITLE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "ADDRESS",
    dataIndex: "ADDRESS",
    key: "ADDRESS",
    sorter: {
      compare: (a, b) => {
        a = a.ADDRESS.toLowerCase();
        b = b.ADDRESS.toLowerCase();
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
    title: "WORKING DAYS",
    dataIndex: "WORKING_DAYS",
    key: "WORKING_DAYS",
    sorter: {
      compare: (a, b) => {
        a = a.WORKING_DAYS.toLowerCase();
        b = b.WORKING_DAYS.toLowerCase();
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
        return new URL(`/src/assets/admin/img/locations/${imageName}`, import.meta.url).href;
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