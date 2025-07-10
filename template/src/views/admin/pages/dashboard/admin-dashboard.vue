<template>
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
        <div class="content pb-0">

            <!-- Breadcrumb -->
            <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                <div class="my-auto mb-2">
                    <h4 class="mb-1">Dashboard</h4>
                    <nav>
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item">
                                <a href="/admin-template/index">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Admin Dashboard</li>
                        </ol>
                    </nav>
                </div>
                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                    <div class="input-icon-start position-relative topdatepicker mb-2">
                        <span class="input-icon-addon">
                            <i class="ti ti-calendar"></i>
                        </span>
                        <input type="text" class="form-control date-range bookingrange" ref="dateRangeInput" placeholder="dd/mm/yyyy - dd/mm/yyyy">
                    </div>
                </div>
            </div>
            <!-- /Breadcrumb -->

            <div class="row">
                <div class="col-xl-8 d-flex flex-column">

                    <!-- Welcome Wrap -->
                    <div class="card flex-fill">
                        <div class="card-body">
                            <div class="row align-items-center row-gap-3">
                                <div class="col-sm-7">
                                    <h4 class="mb-1">Welcome, Andrew </h4>
                                    <p>400+ Budget Friendly Cars Available for the rents </p>
                                    <div class="d-flex align-items-center flex-wrap gap-4 mb-3">
                                        <div>
                                            <p class="mb-1">Total No of Cars</p>
                                            <h3>564</h3>
                                        </div>
                                        <div>
                                            <p class="d-flex align-items-center mb-2"><span class="line-icon bg-violet me-2"></span><span class="fw-semibold text-gray-9 me-1">80</span>In Rental</p>
                                            <p class="d-flex align-items-center"><span class="line-icon bg-orange me-2"></span><span class="fw-semibold text-gray-9 me-1">96</span> Upcoming</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center gap-3 flex-wrap">
                                        <router-link to="/admin-template/bookings/reservations" class="btn btn-primary d-flex align-items-center"><i class="ti ti-eye me-1"></i>Reservations</router-link>
                                        <router-link to="/admin-template/rentals/add-car" class="btn btn-dark d-flex align-items-center"><i class="ti ti-plus me-1"></i>Add New Car</router-link>
                                    </div>
                                </div>
                                <div class="col-sm-5">
                                    <img src="@/assets/admin/img/icons/car.svg" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Welcome Wrap -->

                    <div class="row">

                        <!-- Total Reservations -->
                        <div class="col-md-4 d-flex">
                            <div class="card flex-fill">
                                <div class="card-body pb-1">
                                    <div class="border-bottom mb-0 pb-2">
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-sm bg-secondary-100 text-secondary me-2">
                                                <i class="ti ti-calendar-time fs-14"></i>
                                            </span> 
                                            <p>Total Reservations</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between gap-2">
                                        <div class="py-2">
                                            <h5 class="mb-1">68</h5>
                                            <p><span class="text-success fw-semibold">+45%</span> Last Week</p>
                                        </div>
                                        <div id="reservation-chart">
                                            <apexchart
                                                type="bar"
                                                height="90"
                                                :options="reservationChart.sline"
                                                :series="reservationChart.series"
                                            ></apexchart>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Total Reservations -->

                        <!-- Total Earnings -->
                        <div class="col-md-4 d-flex">
                            <div class="card flex-fill">
                                <div class="card-body pb-1">
                                    <div class="border-bottom mb-0 pb-2">
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-sm bg-orange-100 text-orange me-2">
                                                <i class="ti ti-moneybag fs-14"></i>
                                            </span> 
                                            <p>Total Earnings</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between gap-2">
                                        <div class="py-2">
                                            <h5 class="mb-1">$565545</h5>
                                            <p><span class="text-success fw-semibold">+22%</span> Last Week</p>
                                        </div>
                                        <div id="earning-chart">
                                            <apexchart
                                                type="bar"
                                                height="90"
                                                :options="earningChart.sline"
                                                :series="earningChart.series"
                                            ></apexchart>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Total Earnings -->

                        <!-- Total Cars -->
                        <div class="col-md-4 d-flex">
                            <div class="card flex-fill">
                                <div class="card-body pb-1">
                                    <div class="border-bottom mb-0 pb-2">
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-sm bg-violet-100 text-violet me-2">
                                                <i class="ti ti-car fs-14"></i>
                                            </span> 
                                            <p>Total Cars</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between gap-2">
                                        <div class="py-2">
                                            <h5 class="mb-1">658</h5>
                                            <p><span class="text-danger fw-semibold">-42%</span> Last Week</p>
                                        </div>
                                        <div id="car-chart">
                                            <apexchart
                                                type="bar"
                                                height="90"
                                                :options="carChart.sline"
                                                :series="carChart.series"
                                            ></apexchart>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Total Cars -->

                    </div>
                </div>

                <!-- Newly Added Cars -->
                <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <h5>Newly Added Cars</h5>
                                <router-link to="/admin-template/rentals/cars" class="text-decoration-underline fw-medium">View All</router-link>
                            </div>
                            <div class="mb-2">
                                <img src="@/assets/admin/img/car/car.jpg" alt="img" class="rounded w-100">
                            </div>
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <div>
                                    <p class="fs-13 mb-1">Sedan</p>
                                    <h6 class="fs-14 fw-semibold">1.5 Eco Sports ST-Line 115CV</h6>
                                </div>
                                <h6 class="fs-14 fw-semibold">$280 <span class="fw-normal text-gray-5">/day</span></h6>
                            </div>
                            <div class="row g-2 justify-content-center mb-3">
                                <div class="col-sm-4 col-6 d-flex">
                                    <div class="bg-light border p-2 br-5 flex-fill text-center">
                                        <h6 class="fs-14 fw-semibold">Fuel Type</h6>
                                        <span class="fs-13">Petrol</span>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-6 d-flex">
                                    <div class="bg-light border p-2 br-5 flex-fill text-center">
                                        <h6 class="fs-14 fw-semibold">Passengers</h6>
                                        <span class="fs-13">03</span>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-6 d-flex">
                                    <div class="bg-light border p-2 br-5 flex-fill text-center">
                                        <h6 class="fs-14 fw-semibold">Driving Type</h6>
                                        <span class="fs-13">Self</span>
                                    </div>
                                </div>
                            </div>
                            <router-link to="/admin-template/rentals/car-details" class="btn btn-white d-flex align-items-center justify-content-center">View Details<i class="ti ti-chevron-right ms-1"></i></router-link>
                        </div>
                    </div>
                </div>
                <!-- /Newly Added Cars -->

            </div>

            <div class="row">					
                
                <!-- Live Tracking -->
                <div class="col-xl-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                                <h5 class="mb-1">Live Tracking</h5>
                                <div class="dropdown mb-1">
                                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                        <i class="ti ti-map-pin me-1"></i>Washington
                                    </a>
                                    <ul class="dropdown-menu  dropdown-menu-end p-2">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1">Washington</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1">Chicago</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1">Houston</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1">Las Vegas</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <live-tracking></live-tracking>				
                        </div>
                    </div>
                </div>
                <!-- /Live Tracking -->

                <!-- Recent Reservations -->
                <div class="col-xl-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body pb-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                                <h5>Recent Reservations</h5>
                                <router-link to="/admin-template/bookings/reservations" class="text-decoration-underline fw-medium">View All</router-link>
                            </div>
                            <div class="table-responsive">
                                <table class="table custom-table1">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/rentals/car-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/car/car-01.jpg" alt="img">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <p class="d-flex align-items-center fs-13 text-default mb-1">3 Days<i class="ti ti-circle-filled text-primary fs-5 mx-1"></i>Self</p>
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/rentals/car-details">Ford Endeavour</router-link></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center gap-1 mb-1">
                                                    <h6 class="fs-14 fw-semibold">Newyork</h6>
                                                    <span class="connect-line"></span>
                                                    <h6 class="fs-14 fw-semibold">Las Vegas</h6>
                                                </div>
                                                <p class="fs-13 text-default">15 Jan 2025, 01:00 PM</p>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center gap-3">
                                                    <h6 class="fs-14 fw-semibold">$280 <span class="fw-normal text-default">/day</span></h6>
                                                    <a href="javascript:void(0);" class="avatar avatar-sm">
                                                        <img src="@/assets/admin/img/profiles/avatar-05.jpg" alt="img" class="rounded-circle">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/rentals/car-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/car/car-02.jpg" alt="img">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <p class="d-flex align-items-center fs-13 text-default mb-1">4 Days<i class="ti ti-circle-filled text-primary fs-5 mx-1"></i>Self</p>
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/rentals/car-details">Ferrari 458 MM</router-link></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center gap-1 mb-1">
                                                    <h6 class="fs-14 fw-semibold">Chicago</h6>
                                                    <span class="connect-line"></span>
                                                    <h6 class="fs-14 fw-semibold">Houston</h6>
                                                </div>
                                                <p class="fs-13 text-default">07 Feb 2025, 10:25 AM</p>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center gap-3">
                                                    <h6 class="fs-14 fw-semibold">$225 <span class="fw-normal text-default">/day</span></h6>
                                                    <a href="javascript:void(0);" class="avatar avatar-sm">
                                                        <img src="@/assets/admin/img/profiles/avatar-22.jpg" alt="img" class="rounded-circle">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/rentals/car-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/car/car-03.jpg" alt="img">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <p class="d-flex align-items-center fs-13 text-default mb-1">5 Days<i class="ti ti-circle-filled text-primary fs-5 mx-1"></i>Self</p>
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/rentals/car-details">Ford Mustang </router-link></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center gap-1 mb-1">
                                                    <h6 class="fs-14 fw-semibold">Los Angeles </h6>
                                                    <span class="connect-line"></span>
                                                    <h6 class="fs-14 fw-semibold">New York</h6>
                                                </div>
                                                <p class="fs-13 text-default">14 Feb 2025, 04:40 PM</p>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center gap-3">
                                                    <h6 class="fs-14 fw-semibold">$259 <span class="fw-normal text-default">/day</span></h6>
                                                    <a href="javascript:void(0);" class="avatar avatar-sm">
                                                        <img src="@/assets/admin/img/profiles/avatar-23.jpg" alt="img" class="rounded-circle">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/rentals/car-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/car/car-04.jpg" alt="img">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <p class="d-flex align-items-center fs-13 text-default mb-1">6 Days<i class="ti ti-circle-filled text-primary fs-5 mx-1"></i>Self</p>
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/rentals/car-details">Toyota Tacoma 4</router-link></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center gap-1 mb-1">
                                                    <h6 class="fs-14 fw-semibold">Phoenix</h6>
                                                    <span class="connect-line"></span>
                                                    <h6 class="fs-14 fw-semibold">San Antonio</h6>
                                                </div>
                                                <p class="fs-13 text-default">08 Jan 2025, 09:25 AM</p>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center gap-3">
                                                    <h6 class="fs-14 fw-semibold">$180 <span class="fw-normal text-default">/day</span></h6>
                                                    <a href="javascript:void(0);" class="avatar avatar-sm">
                                                        <img src="@/assets/admin/img/profiles/avatar-23.jpg" alt="img" class="rounded-circle">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/rentals/car-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/car/car-05.jpg" alt="img">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <p class="d-flex align-items-center fs-13 text-default mb-1">1 Week<i class="ti ti-circle-filled text-primary fs-5 mx-1"></i>Self</p>
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/rentals/car-details">Chevrolet Truck</router-link></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center gap-1 mb-1">
                                                    <h6 class="fs-14 fw-semibold">Newyork </h6>
                                                    <span class="connect-line"></span>
                                                    <h6 class="fs-14 fw-semibold">Chicago</h6>
                                                </div>
                                                <p class="fs-13 text-default">17 Feb 2025, 11:45 AM</p>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center gap-3">
                                                    <h6 class="fs-14 fw-semibold">$300 <span class="fw-normal text-default">/day</span></h6>
                                                    <a href="javascript:void(0);" class="avatar avatar-sm">
                                                        <img src="@/assets/admin/img/profiles/avatar-06.jpg" alt="img" class="rounded-circle">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <!-- /Recent Reservations -->

            </div>

            <div class="row">

                <!-- Customers -->
                <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body pb-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                                <h5>Customers</h5>
                                <router-link to="/admin-template/manage/customers" class="text-decoration-underline fw-medium">View All</router-link>
                            </div>
                            <div class="table-responsive">
                                <table class="table custom-table1">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/manage/customer-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/customer/customer-01.jpg" class="rounded-circle" alt="">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/manage/customer-details">Reuben Keen</router-link></h6>
                                                        <span class="badge badge-sm bg-secondary-transparent rounded-pill">Client</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-13 mb-1 text-default">No of Bookings</p>
                                                <h6 class="fs-14 fw-semibold">89</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/manage/customer-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/customer/customer-02.jpg" class="rounded-circle" alt="">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/manage/customer-details">William Jones</router-link></h6>
                                                        <span class="badge badge-sm bg-violet-transparent rounded-pill">Company</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-13 mb-1 text-default">No of Bookings</p>
                                                <h6 class="fs-14 fw-semibold">45</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/manage/customer-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/customer/customer-04.jpg" class="rounded-circle" alt="">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/manage/customer-details">Adam Bolden</router-link></h6>
                                                        <span class="badge badge-sm bg-secondary-transparent rounded-pill">Client</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-13 mb-1 text-default">No of Bookings</p>
                                                <h6 class="fs-14 fw-semibold">32</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/manage/customer-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/customer/customer-05.jpg" class="rounded-circle" alt="">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/manage/customer-details">Harvey Jimenez</router-link></h6>
                                                        <span class="badge badge-sm bg-violet-transparent rounded-pill">Company</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-13 mb-1 text-default">No of Bookings</p>
                                                <h6 class="fs-14 fw-semibold">21</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/manage/customer-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/customer/customer-06.jpg" class="rounded-circle" alt="">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/manage/customer-details">William Ward</router-link></h6>
                                                        <span class="badge badge-sm bg-secondary-transparent rounded-pill">Client</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-13 mb-1 text-default">No of Bookings</p>
                                                <h6 class="fs-14 fw-semibold">16</h6>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Customers -->

                <!-- Income & Expenses -->
                <div class="col-xl-8 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body pb-0">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                                <h5 class="mb-1">Income & Expenses</h5>
                                <div class="chart-icon d-flex align-items-center gap-4 mb-1">
                                    <p class="mb-0 d-flex align-items-center"><span class="chart-color bg-primary me-1"></span>Income</p>
                                    <p class=" d-flex align-items-center mb-0"><span class="chart-color bg-primary-300 me-1"></span>Expense</p>
                                </div>
                                <div class="dropdown mb-1">
                                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                        <i class="ti ti-calendar me-1"></i>This Week
                                    </a>
                                    <ul class="dropdown-menu  dropdown-menu-end p-2">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1">This Week</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Week</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1">This Month</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="d-flex align-items-center flex-wrap gap-4">
                                <div class="border br-5 p-2">
                                    <p class="mb-1">Income This Week</p>
                                    <h5>$96896<span class="fs-13 fw-semibold text-success ms-2">+34%</span></h5>
                                </div>
                                <div class="border br-5 p-2">
                                    <p class="mb-1">Expenses This Week</p>
                                    <h5>$12489<span class="fs-13 fw-semibold text-danger ms-2">+34%</span></h5>
                                </div>
                            </div>
                            <div id="sales-statistics">
                                <apexchart
                                    type="bar"
                                    height="290"
                                    :options="salesStatistics.sline"
                                    :series="salesStatistics.series"
                                ></apexchart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Income & Expenses -->

            </div>

            <div class="row">

                <!-- Maintenance -->
                <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body pb-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                                <h5>Maintenance</h5>
                                <router-link to="/admin-template/rentals/maintenance" class="text-decoration-underline fw-medium">View All</router-link>
                            </div>
                            <div class="table-responsive">
                                <table class="table custom-table1">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/rentals/car-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/car/car-01.jpg" alt="img">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/rentals/car-details">Ford Endeavour</router-link></h6>
                                                        <p class="fs-13 text-default">Sedan</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-13 mb-1 text-default">Odometer</p>
                                                <h6 class="fs-14 fw-semibold">8656 KM</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/rentals/car-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/car/car-02.jpg" alt="img">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/rentals/car-details">Ferrari 458 MM</router-link></h6>
                                                        <p class="fs-13 text-default">SUV</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-13 mb-1 text-default">Odometer</p>
                                                <h6 class="fs-14 fw-semibold">565 KM</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/rentals/car-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/car/car-03.jpg" alt="img">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/rentals/car-details">Ford Mustang </router-link></h6>
                                                        <p class="fs-13 text-default">Sedan</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-13 mb-1 text-default">Odometer</p>
                                                <h6 class="fs-14 fw-semibold">698 KM</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/rentals/car-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/car/car-04.jpg" alt="img">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/rentals/car-details">Toyota Tacoma 4</router-link></h6>
                                                        <p class="fs-13 text-default">Minivans</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-13 mb-1 text-default">Odometer</p>
                                                <h6 class="fs-14 fw-semibold">855 KM</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/rentals/car-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/car/car-05.jpg" alt="img">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/rentals/car-details">Chevrolet Truck</router-link></h6>
                                                        <p class="fs-13 text-default">Hatchbacks</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-13 mb-1 text-default">Odometer</p>
                                                <h6 class="fs-14 fw-semibold">5889 KM</h6>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Maintenance -->

                <!-- Reservation Statistics -->
                <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body pb-0">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                                <h5 class="mb-1">Reservation Statistics</h5>
                                <router-link to="/admin-template/bookings/reservations" class="text-decoration-underline fw-medium mb-1">View All</router-link>
                            </div>
                            <div id="statistics_chart">
                                <apexchart
                                    type="heatmap"
                                    height="360"
                                    :options="statisticsChart.sline"
                                    :series="statisticsChart.series"
                                ></apexchart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Reservation Statistics -->

                <!-- Drivers -->
                <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body pb-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                                <h5>Drivers</h5>
                                <router-link to="/admin-template/manage/drivers" class="text-decoration-underline fw-medium">View All</router-link>
                            </div>
                            <div class="table-responsive">
                                <table class="table custom-table1">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <a href="javascript:void(0);" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/drivers/driver-01.jpg" class="rounded-circle" alt="">
                                                    </a>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">William Jones</a></h6>
                                                        <p class="fs-13 text-default">No of Raids : 90</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <span class="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2"></i>In Ride</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <a href="javascript:void(0);" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/drivers/driver-02.jpg" class="rounded-circle" alt="">
                                                    </a>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Leonard Jandreau</a></h6>
                                                        <p class="fs-13 text-default">No of Raids : 64</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <span class="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2"></i>In Ride</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <a href="javascript:void(0);" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/drivers/driver-03.jpg" class="rounded-circle" alt="">
                                                    </a>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Adam Bolden</a></h6>
                                                        <p class="fs-13 text-default">No of Raids : 36</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <span class="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2"></i>In Ride</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <a href="javascript:void(0);" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/drivers/driver-04.jpg" class="rounded-circle" alt="">
                                                    </a>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Harvey Jimenez</a></h6>
                                                        <p class="fs-13 text-default">No of Raids : 24</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <span class="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2"></i>In Ride</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <a href="javascript:void(0);" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/drivers/driver-05.jpg" class="rounded-circle" alt="">
                                                    </a>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">William Jones</a></h6>
                                                        <p class="fs-13 text-default">No of Raids : 40</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <span class="badge badge-md bg-danger-transparent d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2"></i>Not Booked</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Drivers -->

            </div>

            <div class="row">

                <!-- Recent Invoices -->
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                                <h5 class="mb-1">Recent Invoices</h5>
                                <router-link to="/admin-template/finance/invoices" class="text-decoration-underline fw-medium mb-1">View All</router-link>
                            </div>
                            <div class="custom-table table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>INVOICE NO</th>
                                            <th>NAME</th>
                                            <th>EMAIL</th>
                                            <th>CREATED DATE</th>
                                            <th>DUE DATE</th>
                                            <th>INVOICE AMOUNT</th>
                                            <th>STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <router-link to="/admin-template/finance/invoice-details" class="fs-12 fw-medium">#12345</router-link>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/manage/customer-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/profiles/avatar-20.jpg" class="rounded-circle" alt="">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/manage/customer-details">Andrew Simons </router-link></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>andrew@example.com</td>
                                            <td>24 Jan 2025</td>
                                            <td>24 Jan 2025</td>
                                            <td>$120.00</td>												
                                            <td>
                                                <span class="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2"></i>Paid</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <router-link to="/admin-template/finance/invoice-details" class="fs-12 fw-medium">#12346</router-link>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/manage/customer-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/profiles/avatar-21.jpg" class="rounded-circle" alt="">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/manage/customer-details">David Steiger</router-link></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>david@example.com</td>
                                            <td>19 Dec 2024</td>
                                            <td>19 Dec 2024</td>
                                            <td>$85.00</td>												
                                            <td>
                                                <span class="badge badge-md bg-info-transparent d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2"></i>Pending</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <router-link to="/admin-template/finance/invoice-details" class="fs-12 fw-medium">#12347</router-link>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/manage/customer-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/profiles/avatar-12.jpg" class="rounded-circle" alt="">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/manage/customer-details">Virginia Phu</router-link></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>phu@example.com</td>
                                            <td>11 Dec 2024</td>
                                            <td>11 Dec 2024</td>
                                            <td>$250.00</td>												
                                            <td>
                                                <span class="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2"></i>Paid</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <router-link to="/admin-template/finance/invoice-details" class="fs-12 fw-medium">#12348</router-link>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/manage/customer-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/profiles/avatar-03.jpg" class="rounded-circle" alt="">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/manage/customer-details">Walter Hartmann</router-link></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>walter@example.com</td>
                                            <td>29 Nov 2024</td>
                                            <td>229 Nov 2024</td>
                                            <td>$175.00</td>												
                                            <td>
                                                <span class="badge badge-md bg-purple-transparent d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2"></i>Overdue</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <router-link to="/admin-template/finance/invoice-details" class="fs-12 fw-medium">#12349</router-link>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <router-link to="/admin-template/manage/customer-details" class="avatar flex-shrink-0">
                                                        <img src="@/assets/admin/img/profiles/avatar-07.jpg" class="rounded-circle" alt="">
                                                    </router-link>
                                                    <div class="flex-grow-1 ms-2">
                                                        <h6 class="fs-14 fw-semibold mb-1"><router-link to="/admin-template/manage/customer-details">Andrea Jermaine</router-link></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>jermaine@example.com</td>
                                            <td>03 Nov 2024</td>
                                            <td>03 Nov 2024</td>
                                            <td>$200.00</td>												
                                            <td>
                                                <span class="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2"></i>Paid</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Recent Invoices -->

            </div>

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

</template>

<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";

import {
    reservationChart,
    earningChart,
    carChart,
    salesStatistics,
    statisticsChart,
} from "./data";

export default{
    data(){
        return{
            reservationChart: reservationChart,
            earningChart: earningChart,
            carChart: carChart,
            salesStatistics: salesStatistics,
            statisticsChart: statisticsChart,
        }
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