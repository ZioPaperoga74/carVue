<template>
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
        <div class="content me-4">
            
            <!-- Breadcrumb -->
            <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                <div class="my-auto mb-2">
                    <h4 class="mb-1">Customers</h4>
                    <nav>
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item">
                                <router-link to="/admin-template/index">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Customers</li>
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
                        <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_client"><i class="ti ti-plus me-2"></i>Add New Client</a>
                    </div>
                </div>
            </div>
            <!-- /Breadcrumb -->

            <div class="d-flex align-items-center mb-4">
                <router-link to="/admin-template/manage/customers" class="btn bg-secondary-transparent me-3"><i class="ti ti-user me-1"></i>Clients</router-link>
                <router-link to="/admin-template/manage/customers-companies" class="btn btn-white"><i class="ti ti-building me-1"></i>Companies</router-link>
            </div>

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
                            <i class="ti ti-filter me-1"></i> Filter<span class="badge badge-xs rounded-pill bg-danger ms-2">0</span>
                        </a>
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
                                        <span class="d-inline-flex align-items-center"><i class="ti ti-grip-vertical me-1"></i>CUSTOMER</span>
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
                                        <span><i class="ti ti-grip-vertical me-1"></i>LANGUAGE</span>
                                        <div class="form-check form-check-sm form-switch mb-0">
                                            <input class="form-check-input form-label" type="checkbox" role="switch" checked="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                                        <span><i class="ti ti-grip-vertical me-1"></i>DOCUMENTS</span>
                                        <div class="form-check form-check-sm form-switch mb-0">
                                            <input class="form-check-input form-label" type="checkbox" role="switch" checked="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                                        <span><i class="ti ti-grip-vertical me-1"></i>RENTS</span>
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
                            Language
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
                                    <input class="form-check-input m-0 me-2" type="checkbox">English
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Italian
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">French
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">German
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Hindi
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Bengali
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Chinese
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Arabic
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Japanese
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item d-flex align-items-center rounded-1">
                                    <input class="form-check-input m-0 me-2" type="checkbox">Russian
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
                        <template v-if="column.key === 'CUSTOMER'">
                            <div class="d-flex align-items-center">
                                <router-link to="/admin-template/manage/customer-details" class="avatar rounded-circle me-2 flex-shrink-0">
                                    <img :src="getImageUrl(record.CUSTOMER_IMG)" class="rounded-circle" alt="img">
                                </router-link>
                                <div>
                                    <h6 class="fs-14 fw-semibold">
                                        <router-link to="/admin-template/manage/customer-details">{{record.CUSTOMER}}</router-link>
                                    </h6>
                                    <p >{{record.PHONE}}</p>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'EMAIL'">
                            <p class="text-gray-9">{{record.EMAIL}}</p>
                        </template>
                        <template v-else-if="column.key === 'LANGUAGE'">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                                    <img :src="getImageUrlOne(record.FLAG_IMG)" class="rounded-circle" alt="img">
                                </a>
                                <p class="text-gray-9">{{record.LANGUAGE}}</p>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'DOCUMENTS'">
                            <div class="d-flex align-items-center">
                                <span class="table-icon me-2"><i class="ti ti-file-text"></i></span>
                                <p class="text-info">{{record.DOCUMENTS}}</p>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'RENTS'">
                            <div class="d-flex align-items-center" :class="[
                                    {
                                        'd-none': record.RENTS === '',
                                    },
                                ]">
                                <span class="table-icon me-2"><i class="ti ti-car"></i></span>
                                <p class="text-violet">{{record.RENTS}}</p>
                            </div>
                        </template>
                        <template v-else-if="column.key === 'action'">
                            <div class="dropdown">
                                <button class="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="ti ti-dots-vertical"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end p-2">
                                    <li>
                                        <router-link class="dropdown-item rounded-1" to="/admin-template/manage/customer-details"><i class="ti ti-eye me-1"></i>View Details</router-link>
                                    </li>
                                    <li>
                                        <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_client"><i class="ti ti-edit me-1"></i>Edit</a>
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

    <customer-modal></customer-modal>
</template>

<script>
const data = [
 {
   "FIELD1": "",
   "CUSTOMER_IMG": "customer-11.jpg",
   "CUSTOMER": "Andrew Simons",
   "PHONE": "+1 56598 98956",
   "EMAIL": "andrewsimons@example.com",
   "FLAG_IMG": "gb.svg",
   "LANGUAGE": "English",
   "DOCUMENTS": "Show Documents",
   "RENTS": "Recent Rents"
 },
 {
   "FIELD1": "",
   "CUSTOMER_IMG": "customer-12.jpg",
   "CUSTOMER": "David Steiger",
   "PHONE": "+1 24558 56599",
   "EMAIL": "davidsteiger@example.com",
   "FLAG_IMG": "it-flag.svg",
   "LANGUAGE": "Italian",
   "DOCUMENTS": "Show Documents",
   "RENTS": "Recent Rents"
 },
 {
   "FIELD1": "",
   "CUSTOMER_IMG": "customer-13.jpg",
   "CUSTOMER": "Darin Mabry",
   "PHONE": "+1 24558 56599",
   "EMAIL": "darinmabry@example.com",
   "FLAG_IMG": "fr-flag.svg",
   "LANGUAGE": "French",
   "DOCUMENTS": "No Documents",
   "RENTS": ""
 },
 {
   "FIELD1": "",
   "CUSTOMER_IMG": "customer-14.jpg",
   "CUSTOMER": "Mark Neiman",
   "PHONE": "+1 56598 98956",
   "EMAIL": "markneiman@example.com",
   "FLAG_IMG": "gb.svg",
   "LANGUAGE": "English",
   "DOCUMENTS": "Show Documents",
   "RENTS": "Recent Rents"
 },
 {
   "FIELD1": "",
   "CUSTOMER_IMG": "customer-15.jpg",
   "CUSTOMER": "Jacob Johnson",
   "PHONE": "+1 56598 98956",
   "EMAIL": "jacobjohnson@example.com",
   "FLAG_IMG": "fr-flag.svg",
   "LANGUAGE": "German",
   "DOCUMENTS": "No Documents",
   "RENTS": ""
 },
 {
   "FIELD1": "",
   "CUSTOMER_IMG": "customer-16.jpg",
   "CUSTOMER": "Walter Hartmann",
   "PHONE": "+1 24558 56599",
   "EMAIL": "walterhartmann@example.com",
   "FLAG_IMG": "it-flag.svg",
   "LANGUAGE": "Italian",
   "DOCUMENTS": "Show Documents",
   "RENTS": "Recent Rents"
 },
 {
   "FIELD1": "",
   "CUSTOMER_IMG": "customer-17.jpg",
   "CUSTOMER": "Andrea Jermaine",
   "PHONE": "+1 12488 14457",
   "EMAIL": "andreajermaine@example.com",
   "FLAG_IMG": "gb.svg",
   "LANGUAGE": "English",
   "DOCUMENTS": "No Documents",
   "RENTS": ""
 },
 {
   "FIELD1": "",
   "CUSTOMER_IMG": "customer-18.jpg",
   "CUSTOMER": "Dennis Eckhardt",
   "PHONE": "+1 32569 15458",
   "EMAIL": "denniseckhardt@example.com",
   "FLAG_IMG": "it-flag.svg",
   "LANGUAGE": "Italian",
   "DOCUMENTS": "Show Documents",
   "RENTS": "Recent Rents"
 },
 {
   "FIELD1": "",
   "CUSTOMER_IMG": "customer-19.jpg",
   "CUSTOMER": "Lan Adams",
   "PHONE": "+1 14782 14578",
   "EMAIL": "lanadams@example.com",
   "FLAG_IMG": "fr-flag.svg",
   "LANGUAGE": "French",
   "DOCUMENTS": "No Documents",
   "RENTS": ""
 },
 {
   "FIELD1": "",
   "CUSTOMER_IMG": "customer-20.jpg",
   "CUSTOMER": "Julie Black",
   "PHONE": "+1 12124 14255",
   "EMAIL": "julieblack@example.com",
   "FLAG_IMG": "gb.svg",
   "LANGUAGE": "English",
   "DOCUMENTS": "Show Documents",
   "RENTS": "Recent Rents"
 }
];

const columns = [
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
    title: "LANGUAGE",
    dataIndex: "LANGUAGE",
    key: "LANGUAGE",
    sorter: {
      compare: (a, b) => {
        a = a.LANGUAGE.toLowerCase();
        b = b.LANGUAGE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DOCUMENTS",
    dataIndex: "DOCUMENTS",
    key: "DOCUMENTS",
    sorter: {
      compare: (a, b) => {
        a = a.DOCUMENTS.toLowerCase();
        b = b.DOCUMENTS.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "RENTS",
    dataIndex: "RENTS",
    key: "RENTS",
    sorter: {
      compare: (a, b) => {
        a = a.RENTS.toLowerCase();
        b = b.RENTS.toLowerCase();
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
        getImageUrlOne(imageName) {
            return new URL(`/src/assets/admin/img/flags/${imageName}`, import.meta.url).href;
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