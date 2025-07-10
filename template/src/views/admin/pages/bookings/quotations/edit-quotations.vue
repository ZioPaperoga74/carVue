<template>
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
        <div class="content me-4">
            <div class="mb-3">
                <router-link to="/admin-template/bookings/quotations" class="d-inline-flex align-items-center fw-medium">
                    <i class="ti ti-arrow-narrow-left me-2"></i>Quotations
                </router-link>
            </div>
            <div class="wizard-form">
                <fieldset id="first-field" v-if="currentStep === 1">
                    <div class="row">
                        <div class="col-lg-12">
                            <form @submit.prevent="submitForm">
                                <div class="card mb-0">
                                    <div class="card-body">
                                        <div class="reservation-wizard mb-4">
                                            <ul class="d-flex align-items-center flex-wrap row-gap-2">
                                                <li class="d-flex align-items-center active me-2">
                                                    <span class="me-2 wizard-icon"><i class="ti ti-calendar"></i></span>
                                                    <h6>Car & Dates Info</h6>
                                                </li>
                                                <li class="d-flex align-items-center me-2">
                                                    <span class="me-2 wizard-icon"><i class="ti ti-user-check"></i></span>
                                                    <h6>Customer</h6>
                                                </li>
                                                <li class="d-flex align-items-center me-2">
                                                    <span class="me-2 wizard-icon"><i class="ti ti-float-center"></i></span>
                                                    <h6>Extra Services</h6>
                                                </li>
                                                <li class="d-flex align-items-center me-2">
                                                    <span class="me-2 wizard-icon"><i class="ti ti-file-invoice"></i></span>
                                                    <h6>Billing Details</h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card card-bg">
                                            <div class="card-body">
                                                <h4 class="d-flex align-items-center"><i class="ti ti-info-circle me-2 text-secondary fs-24"></i>Basic Info</h4>
                                            </div>
                                        </div>
                                        <div>
                                            
                                            <div class="border-bottom mb-3 pb-3">
                                                <div class="row gx-3">
                                                    <div class="col-lg-3 col-sm-12">
                                                        <div>
                                                            <h5 class="mb-1">Date & Time Of Travel</h5>
                                                            <p>Add Information on Date of Travel</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-9 col-sm-12">
                                                        <div class="row">
                                                            <div class="col-lg-4">
                                                                <div class="mb-3">
                                                                    <label class="form-label">Tarrif</label>
                                                                    <vue-select 
                                                                        :options="Tarrif"
                                                                        v-model="selected"
                                                                        placeholder="Weekly"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <div class="mb-3">
                                                                    <label class="form-label">Driving Type</label>
                                                                    <vue-select 
                                                                        :options="Driving"
                                                                        v-model="selectedOne"
                                                                        placeholder="Self-Drive"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <div class="mb-3">
                                                                    <label class="form-label">No of Passengers</label>
                                                                    <input type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-6">
                                                                <div class="row gx-3">
                                                                    <div class="col-md-7">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Start Date <span class="text-danger"> *</span> </label>
                                                                            <div class="input-icon-end position-relative">
                                                                                <datepicker
                                                                                    v-model="startdateOne"
                                                                                    class="form-control datetimepicker"
                                                                                    :editable="true"
                                                                                    :clearable="false"
                                                                                    :input-format="dateFormat"
                                                                                />
                                                                                <span class="input-icon-addon">
                                                                                    <i class="ti ti-calendar"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-5">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Time <span class="text-danger"> *</span> </label>
                                                                            <div class="d-flex align-items-center">
                                                                                <div class="input-icon-end position-relative flex-fill">
                                                                                    <a-time-picker class="form-control timepicker" v-model:value="valueOne" />
                                                                                    <span class="input-icon-addon">
                                                                                        <i class="ti ti-clock"></i>
                                                                                    </span>
                                                                                </div>
                                                                                <span class="avatar avatar-sm flex-shrink-0 bg-success fs-14 rounded-circle ms-3"><i class="ti ti-chevron-right"></i></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-6">
                                                                <div class="row gx-3">
                                                                    <div class="col-md-8">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">End Date <span class="text-danger"> *</span> </label>
                                                                            <div class="input-icon-end position-relative">
                                                                                <datepicker
                                                                                    v-model="startdate"
                                                                                    class="form-control datetimepicker"
                                                                                    :editable="true"
                                                                                    :clearable="false"
                                                                                    :input-format="dateFormat"
                                                                                />
                                                                                <span class="input-icon-addon">
                                                                                    <i class="ti ti-calendar"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Time <span class="text-danger"> *</span> </label>
                                                                            <div class="input-icon-end position-relative">
                                                                                <a-time-picker class="form-control timepicker" v-model:value="value" />
                                                                                <span class="input-icon-addon">
                                                                                    <i class="ti ti-clock"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <div class="mb-3">
                                                                    <label class="form-label">Pickup Location <span class="text-danger">*</span></label>
                                                                    <vue-select 
                                                                        :options="Pickup"
                                                                        v-model="selectedTwo"
                                                                        placeholder="Select"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <div class="mb-3">
                                                                    <label class="form-label">Return Location <span class="text-danger">*</span></label>
                                                                    <vue-select 
                                                                        :options="Return"
                                                                        v-model="selectedThree"
                                                                        placeholder="Select"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <div class="mb-3">
                                                                    <label class="form-label">Security Deposit </label>
                                                                    <input type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                            <label class="d-flex align-items-center">
                                                                <input class="form-check-input m-0 me-2" type="checkbox">Return Same Location
                                                            </label>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="row ">
                                                <div class="col-lg-3 col-sm-12">
                                                    <div>
                                                        <h5 class="mb-1">Select Vehicle</h5>
                                                        <p>Select Vehicle for your rental</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-9 col-sm-12">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="d-flex align-items-center mb-3">
                                                                <div class="dropdown me-2">
                                                                    <a href="#filtercollapse" class="filtercollapse coloumn d-inline-flex align-items-center" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="filtercollapse">
                                                                        <i class="ti ti-filter me-1"></i> Filter <span class="badge badge-xs rounded-pill bg-danger ms-2">0</span>
                                                                    </a>
                                                                </div>
                                                                <div class="top-search me-2  w-100">
                                                                    <div class="top-search-group">
                                                                        <span class="input-icon">
                                                                            <i class="ti ti-search"></i>
                                                                        </span>
                                                                        <input type="text" class="form-control" placeholder="Search">
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <router-link to="/admin-template/rentals/add-car" class="btn btn-dark d-inline-flex min-width-100 align-items-center">
                                                                        <i class="ti ti-plus me-1"></i>Add New
                                                                    </router-link>
                                                                </div>
                                                            </div>
                                                            <div class="collapse" id="filtercollapse">
                                                                <div class="filterbox mb-3 px-3">
                                                                    <div class="row align-items-center">
                                                                        <div class="col-lg-10">
                                                                            <div class=" d-flex align-items-center flex-wrap row-gap-3">
                                                                                <div class="dropdown me-2">
                                                                                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                                                        Select Brand
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
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Toyota
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Honda
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Ford
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Chevrolet
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">BMW
                                                                                            </label>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="dropdown me-2">
                                                                                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                                                        Select Type
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
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Economy
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Compact
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Sedan
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">SUV
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Luxury
                                                                                            </label>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="dropdown me-2">
                                                                                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                                                        <i class="ti ti-badge me-1"></i>Select Model
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
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Urban Cruiser
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Fortuner
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">V8
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Q3
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Huracan
                                                                                            </label>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="dropdown">
                                                                                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                                                        <i class="ti ti-badge me-1"></i>Select Color
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
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">White
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Black
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Silver
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Gray
                                                                                            </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <label class="dropdown-item d-flex align-items-center rounded-1">
                                                                                                <input class="form-check-input m-0 me-2" type="checkbox">Blue
                                                                                            </label>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-2">
                                                                            <div class="d-flex align-items-center justify-content-end">
                                                                                <a href="javascript:void(0);" class="me-3 text-purple links">Apply</a>
                                                                                <a href="javascript:void(0);" class="text-danger links">Clear All</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <div class="row">
                                                                        <div class="col-lg-4">
                                                                            <div class="d-flex align-items-center">
                                                                                <div class="form-check form-check-md me-3">
                                                                                    <input class="form-check-input" type="checkbox">
                                                                                </div>
                                                                                <span class="avatar flex-shrink-0 me-2">
                                                                                    <img src="@/assets/admin/img/car/car-01.jpg" alt="">
                                                                                </span>
                                                                                <div>
                                                                                    <p class="mb-1">Sedan</p>
                                                                                    <h6 class="fs-14">Ford Endeavour</h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-5">
                                                                            <div class="row">
                                                                                <div class="col-md-4">
                                                                                    <div>
                                                                                        <p class="mb-1">Color</p>
                                                                                        <h6 class="fs-14 d-inline-flex align-items-center"><i class="ti ti-square-filled text-warning me-1"></i>Yellow</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                    <div>
                                                                                        <p class="mb-1">Year</p>
                                                                                        <h6 class="fs-14">2003</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                    <div>
                                                                                        <p class="mb-1">Price</p>
                                                                                        <h6 class="fs-14">$800<span class="text-gray-5">/day</span></h6>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-3">
                                                                            <div class="float-md-end">
                                                                                <span class="badge bg-orange-transparent d-inline-flex align-items-center badge-sm mb-1">
                                                                                    <i class="ti ti-point-filled me-1"></i>Requested
                                                                                </span>
                                                                                <h6 class="fs-14">2881 Jarvis Street</h6>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <div class="row">
                                                                        <div class="col-lg-4">
                                                                            <div class="d-flex align-items-center">
                                                                                <div class="form-check form-check-md me-3">
                                                                                    <input class="form-check-input" type="checkbox">
                                                                                </div>
                                                                                <span class="avatar flex-shrink-0 me-2">
                                                                                    <img src="@/assets/admin/img/car/car-02.jpg" alt="">
                                                                                </span>
                                                                                <div>
                                                                                    <p class="mb-1">Sports</p>
                                                                                    <h6 class="fs-14">Ferrari 458 MM</h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-5">
                                                                            <div class="row">
                                                                                <div class="col-md-4">
                                                                                    <div>
                                                                                        <p class="mb-1">Color</p>
                                                                                        <h6 class="fs-14 d-inline-flex align-items-center"><i class="ti ti-square-filled text-danger me-1"></i>Red</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                    <div>
                                                                                        <p class="mb-1">Year</p>
                                                                                        <h6 class="fs-14">2003</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                    <div>
                                                                                        <p class="mb-1">Price</p>
                                                                                        <h6 class="fs-14">$120<span class="text-gray-5">/day</span></h6>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-3">
                                                                            <div class="float-md-end">
                                                                                <span class="badge bg-pink-transparent d-inline-flex align-items-center badge-sm mb-1">
                                                                                    <i class="ti ti-point-filled me-1"></i>Reserved
                                                                                </span>
                                                                                <h6 class="fs-14">2881 Jarvis Street</h6>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <div class="row">
                                                                        <div class="col-lg-4">
                                                                            <div class="d-flex align-items-center">
                                                                                <div class="form-check form-check-md me-3">
                                                                                    <input class="form-check-input" type="checkbox">
                                                                                </div>
                                                                                <span class="avatar flex-shrink-0 me-2">
                                                                                    <img src="@/assets/admin/img/car/car-03.jpg" alt="">
                                                                                </span>
                                                                                <div>
                                                                                    <p class="mb-1">Sedan</p>
                                                                                    <h6 class="fs-14">Acura Sport </h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-5">
                                                                            <div class="row">
                                                                                <div class="col-md-4">
                                                                                    <div>
                                                                                        <p class="mb-1">Color</p>
                                                                                        <h6 class="fs-14 d-inline-flex align-items-center"><i class="ti ti-square-filled text-info me-1"></i>Blue</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                    <div>
                                                                                        <p class="mb-1">Year</p>
                                                                                        <h6 class="fs-14">2003</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                    <div>
                                                                                        <p class="mb-1">Price</p>
                                                                                        <h6 class="fs-14">$60<span class="text-gray-5">/day</span></h6>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-3">
                                                                            <div class="float-md-end">
                                                                                <span class="badge bg-success-transparent d-inline-flex align-items-center badge-sm mb-1">
                                                                                    <i class="ti ti-point-filled me-1"></i>Available
                                                                                </span>
                                                                                <h6 class="fs-14">2881 Jarvis Street</h6>
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
                                        <div class="card-footer px-0 pb-0">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <div class="field-btns">
                                                    <button class="btn btn-light me-2" type="button"><i class="ti ti-chevron-left me-1"></i>Cancel</button>
                                                </div> 
                                                <div class="field-btns">
                                                    <button class="btn btn-primary wizard-next-btn" @click="nextStep" :disabled="currentStep === totalSteps" type="button">Add Customer <i class="ti ti-chevron-right ms-1"></i></button>
                                                </div>  
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </fieldset>
                <fieldset v-if="currentStep === 2">
                    <div class="row">
                        <div class="col-lg-12">
                            <form action="#">
                                <div class="card mb-0">
                                    <div class="card-body">
                                        <div class="reservation-wizard mb-4">
                                            <ul class="d-flex align-items-center flex-wrap row-gap-2">
                                                <li class="d-flex align-items-center activated me-2">
                                                    <span class="me-2 wizard-icon"><i class="ti ti-calendar"></i></span>
                                                    <span class="active-check me-2"><i class="ti ti-check"></i></span>
                                                    <h6>Car & Dates Info</h6>
                                                </li>
                                                <li class="d-flex align-items-center active me-2">
                                                    <span class="me-2 wizard-icon"><i class="ti ti-user-check"></i></span>
                                                    <h6>Customer</h6>
                                                </li>
                                                <li class="d-flex align-items-center me-2">
                                                    <span class="me-2 wizard-icon"><i class="ti ti-float-center"></i></span>
                                                    <h6>Extra Services</h6>
                                                </li>
                                                <li class="d-flex align-items-center me-2">
                                                    <span class="me-2 wizard-icon"><i class="ti ti-file-invoice"></i></span>
                                                    <h6>Billing Details</h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card card-bg">
                                            <div class="card-body">
                                                <h4 class="d-flex align-items-center"><i class="ti ti-user-check me-2 text-secondary fs-24"></i>Customer</h4>
                                            </div>
                                        </div>
                                        <div class="border-bottom mb-3">
                                            <div class="row">
                                                <div class="col-lg-3 col-sm-12">
                                                    <div class="mb-3">
                                                        <h6 class="mb-1">Select Customer </h6>
                                                        <p>Add Information of Customer</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-9 col-sm-12">
                                                    <div class="mb-3">
                                                        <label class="form-label">Customer <span class="text-danger">*</span></label>
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-fill ">
                                                                <vue-select 
                                                                    :options="Customer"
                                                                    v-model="selectedFour"
                                                                    placeholder="Select"
                                                                />
                                                            </div>
                                                            <div class="ms-4">
                                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_client" class="btn btn-dark d-inline-flex align-items-center">
                                                                    <i class="ti ti-plus me-1"></i>Add New
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card bg-light">
                                                        <div class="card-body">
                                                            <div class="row align-items-center">
                                                                <div class="col-md-11">
                                                                    <div class="row gx-2">
                                                                        <div class="col-md-4">
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="avatar avatar-rounded flex-shrink-0 me-2">
                                                                                    <img src="@/assets/admin/img/customer/customer-03.jpg" alt="">
                                                                                </span>
                                                                                <div>
                                                                                    <h6 class="fs-14 mb-1">Andrew Simons</h6>
                                                                                    <span class="badge bg-info-transparent">15 Bookings</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-4">
                                                                            <div>
                                                                                <h6 class="fs-14 mb-1">Phone</h6>
                                                                                <p>+1 58514 45546</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-4">
                                                                            <div>
                                                                                <h6 class="fs-14 mb-1">Email</h6>
                                                                                <p>andrew34@example.com</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-1">
                                                                    <div class="d-flex align-items-center justify-content-end">
                                                                        <a href="javascript:void(0);" class="me-2"><i class="ti ti-eye"></i></a>
                                                                        <a href="javascript:void(0);"><i class="ti ti-trash"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-3 col-sm-12">
                                                <div class="mb-3">
                                                    <h6 class="mb-1">Select Driver </h6>
                                                    <p>Add Information of Driver</p>
                                                </div>
                                            </div>  
                                        
                                            <div class="col-lg-9 col-sm-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Driver <span class="text-danger">*</span></label>
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-fill ">
                                                            <vue-select 
                                                                :options="Driver"
                                                                v-model="selectedFive"
                                                                placeholder="Select"
                                                            />
                                                        </div>
                                                        <div class="ms-4">
                                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_driver" class="btn btn-dark d-inline-flex align-items-center">
                                                                <i class="ti ti-plus me-1"></i>Add New
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-end mb-3">
                                                    <a href="javascript:void(0);" class="text-purple text-decoration-underline fw-medium" data-bs-toggle="modal" data-bs-target="#edit_price">Edit Price</a>
                                                </div>
                                                <div class="card bg-light">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col-md-11">
                                                                <div class="row gx-2">
                                                                    <div class="col-md-5">
                                                                        <div class="d-flex align-items-center">
                                                                            <div class="form-check form-check-md me-3">
                                                                                <input class="form-check-input" type="checkbox">
                                                                            </div>
                                                                            <span class="avatar avatar-rounded flex-shrink-0 me-2">
                                                                                <img src="@/assets/admin/img/customer/customer-01.jpg" alt="">
                                                                            </span>
                                                                            <div>
                                                                                <h6 class="fs-14 mb-1">Reuben Keen</h6>
                                                                                <span class="badge bg-violet-transparent">50 Rides</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <div>
                                                                            <h6 class="fs-14 mb-1">Phone</h6>
                                                                            <p>+1 58514 45546</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-3">
                                                                        <div>
                                                                            <h6 class="fs-14 mb-1">Price</h6>
                                                                            <p>$18 </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-1">
                                                                <div class="d-flex align-items-center justify-content-end">
                                                                    <a href="javascript:void(0);" class="me-2"><i class="ti ti-eye"></i></a>
                                                                    <a href="javascript:void(0);"><i class="ti ti-trash"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="card-footer px-0 pb-0">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <div class="field-btns">
                                                    <button class="btn btn-light wizard-prev-btn me-2" @click="previousStep" :disabled="currentStep === 1" type="button"><i class="ti ti-chevron-left me-1"></i>Back to Info</button>
                                                </div> 
                                                <div class="field-btns">
                                                    <button class="btn btn-primary wizard-next-btn" @click="nextStep" :disabled="currentStep === totalSteps" type="button">Add Extra Services<i class="ti ti-chevron-right ms-1"></i></button>
                                                </div>  
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </fieldset>
                <fieldset v-if="currentStep === 3">
                    <form action="#">
                        <div class="card mb-0">
                            <div class="card-body">
                                <div class="reservation-wizard mb-4">
                                    <ul class="d-flex align-items-center flex-wrap row-gap-2">
                                        <li class="d-flex align-items-center activated me-2">
                                            <span class="me-2 wizard-icon"><i class="ti ti-calendar"></i></span>
                                            <span class="active-check me-2"><i class="ti ti-check"></i></span>
                                            <h6>Car & Dates Info</h6>
                                        </li>
                                        <li class="d-flex align-items-center activated  me-2">
                                            <span class="me-2 wizard-icon"><i class="ti ti-user-check"></i></span>
                                            <span class="active-check me-2"><i class="ti ti-check"></i></span>
                                            <h6>Customer</h6>
                                        </li>
                                        <li class="d-flex align-items-center active me-2">
                                            <span class="me-2 wizard-icon"><i class="ti ti-float-center"></i></span>
                                            <h6>Extra Services</h6>
                                        </li>
                                        <li class="d-flex align-items-center me-2">
                                            <span class="me-2 wizard-icon"><i class="ti ti-file-invoice"></i></span>
                                            <h6>Billing Details</h6>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card card-bg">
                                    <div class="card-body">
                                        <h4 class="d-flex align-items-center"><i class="ti ti-float-center me-2 text-secondary fs-24"></i>Extra Service</h4>
                                    </div>
                                </div>
                                
                                <div class="row border-bottom mb-3">
                                    <div class="col-lg-12 col-sm-12">
                                        <div class="d-flex justify-content-between align-items-center">

                                            <div class="mb-3">
                                                <h6 class="mb-1">Select Extra Services</h6>
                                                <p>Add extra services for your rental</p>
                                            </div>
                                            <a href="javascript:void(0);" class="text-purple text-decoration-underline fw-medium"  data-bs-toggle="modal" data-bs-target="#edit_price1">Edit Price</a>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-sm-12">
                                        <div class="row">
                                            <extra-service></extra-service>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card-footer px-0 pb-0">
                                    <div class="d-flex align-items-center justify-content-end">
                                        <div class="field-btns">
                                            <button class="btn btn-light wizard-prev-btn me-2" @click="previousStep" :disabled="currentStep === 2" type="button"><i class="ti ti-chevron-left me-1"></i>Back to Info</button>
                                        </div> 
                                        <div class="field-btns">
                                            <button class="btn btn-primary wizard-next-btn" @click="nextStep" :disabled="currentStep === totalSteps" type="button">Add Extra Services<i class="ti ti-chevron-right ms-1"></i></button>
                                        </div>  
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </form>
                </fieldset>
                <fieldset v-if="currentStep === 4">
                    <form @submit.prevent="submitFormOne">
                        <div class="card mb-0">
                            <div class="card-body">
                                <div class="reservation-wizard mb-4">
                                    <ul class="d-flex align-items-center flex-wrap row-gap-2">
                                        <li class="d-flex align-items-center activated me-2">
                                            <span class="me-2 wizard-icon"><i class="ti ti-calendar"></i></span>
                                            <span class="active-check me-2"><i class="ti ti-check"></i></span>
                                            <h6>Car & Dates Info</h6>
                                        </li>
                                        <li class="d-flex align-items-center activated  me-2">
                                            <span class="me-2 wizard-icon"><i class="ti ti-user-check"></i></span>
                                            <span class="active-check me-2"><i class="ti ti-check"></i></span>
                                            <h6>Customer</h6>
                                        </li>
                                        <li class="d-flex align-items-center activated me-2">
                                            <span class="me-2 wizard-icon"><i class="ti ti-float-center"></i></span>
                                            <span class="active-check me-2"><i class="ti ti-check"></i></span>
                                            <h6>Extra Services</h6>
                                        </li>
                                        <li class="d-flex align-items-center active me-2">
                                            <span class="me-2 wizard-icon"><i class="ti ti-file-invoice"></i></span>
                                            <h6>Billing Details</h6>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card card-bg">
                                    <div class="card-body">
                                        <h4 class="d-flex align-items-center"><i class="ti ti-file-invoice me-2 text-secondary fs-24"></i>Billing Details</h4>
                                    </div>
                                </div>
                                <div class="row border-bottom mb-3">
                                    <div class="col-lg-3 col-sm-12">
                                        <div class="mb-3">
                                            <h6 class="mb-1">Rent & Service Billing</h6>
                                            <p>Add extra services for your rental</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-9 col-sm-12">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Base Kilometers (Per Day)</label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Kilometers Extra Price</label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Expenses</label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Delivery price</label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="row border-bottom mb-3">
                                    <div class="col-lg-3 col-sm-12">
                                        <div class="d-flex">
                                            <div class="form-check form-check-md form-switch me-2">
                                                <label class="form-check-label form-label mt-0 mb-0">
                                                <input class="form-check-input form-label me-2" type="checkbox" role="switch" checked>
                                                </label>
                                            </div>
                                            <div class="mb-3">
                                                <h6 class="mb-1">Insurance</h6>
                                                <p>Add Insurance of Your Ride</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="col-lg-9 col-sm-12">
                                        <div class="row">
                                            <billing-details></billing-details>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="row mb-3">
                                    <div class="col-lg-3 col-sm-12">
                                        <div class="d-flex">
                                            <div class="form-check form-check-md form-switch me-2">
                                                <label class="form-check-label form-label mt-0 mb-0">
                                                <input class="form-check-input form-label me-2" type="checkbox" role="switch" checked>
                                                </label>
                                            </div>
                                            <div class="mb-3">
                                                <h6 class="mb-1">Invoice Settings</h6>
                                                <p>Add Invoice Settings</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="col-lg-9 col-sm-12">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Tax Type <span class="text-danger">*</span></label>
                                                    <vue-select 
                                                        :options="Tax"
                                                        v-model="selectedSix"
                                                        placeholder="%"
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Add Tax Value <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="card-footer px-0 pb-0">
                                    <div class="d-flex align-items-center justify-content-end">
                                        <div class="field-btns">
                                            <button class="btn btn-light wizard-prev-btn me-2" @click="previousStep" :disabled="currentStep === 3" type="button">
                                                <i class="ti ti-chevron-left me-1"></i>Back to Info
                                            </button>
                                        </div> 
                                        <div class="field-btns">
                                            <button class="btn btn-primary wizard-next-btn" type="submit">Finish & Save<i class="ti ti-chevron-right ms-1"></i></button>
                                        </div>  
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </form>
                </fieldset>
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

    <add-quotations-modal></add-quotations-modal>
</template>


<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const value = ref();
const valueOne = ref();

export default {
    data() {
        return {
            currentStep: 1,
            totalSteps: 4,
            value,
            valueOne,
            dateFormat: "dd-MM-yyyy",
            startdate: currentDate,
            startdateOne: currentDateOne,
            selected: "Weekly",
            selectedOne: "Self-Drive",
            selectedTwo: [],
            selectedThree: [],
            selectedFour: [],
            selectedFive: [],
            selectedSix: "%",
             Tarrif: [
                {label: "Weekly", value: "Weekly"}, 
                {label: "Daily", value: "Daily"}, 
                {label: "Monthly", value: "Monthly"}, 
                {label: "Yearly", value: "Yearly"}, 
            ],
            Driving: [
                {label: "Self-Drive", value: "Self-Drive"}, 
                {label: "Chauffeur-Driven", value: "Chauffeur-Driven"}, 
                {label: "One-Way Rental", value: "One-Way Rental"}, 
                {label: "Long-Term Lease", value: "Long-Term Lease"}, 
                {label: "Hourly Rental", value: "Hourly Rental"}, 
            ],
            Pickup: [
                {label: "Select", value: "Select"}, 
                {label: "Los Angles", value: "Los Angles"}, 
                {label: "New York City", value: "New York City"}, 
                {label: "Houston", value: "Houston"}, 
                {label: "Munich", value: "Munich"}, 
                {label: "Montreal", value: "Montreal"}
            ],
            Return: [
                {label: "Select", value: "Select"}, 
                {label: "Los Angles", value: "Los Angles"}, 
                {label: "New York City", value: "New York City"}, 
                {label: "Houston", value: "Houston"}, 
                {label: "Munich", value: "Munich"}, 
                {label: "Montreal", value: "Montreal"}
            ],
            Customer: [
                {label: "Select", value: "Select"}, 
                {label: "Reuben Keen", value: "Reuben Keen"}, 
                {label: "William Jones", value: "William Jones"}, 
                {label: "Leonard Jandreau", value: "Leonard Jandreau"}, 
                {label: "Adam Bolden", value: "Adam Bolden"}
            ],
            Driver: [
                {label: "Select", value: "Select"}, 
                {label: "Reuben Keen", value: "Reuben Keen"}, 
                {label: "William Jones", value: "William Jones"}, 
                {label: "Leonard Jandreau", value: "Leonard Jandreau"}, 
                {label: "Adam Bolden", value: "Adam Bolden"}
            ],
            Tax: [
                {label: "Select", value: "Select"},
                {label: "%", value: "%"},
                {label: "Direct", value: "Direct"},
            ],
        }
    },
    methods: {
        submitForm() {
            this.$router.push("/admin-template/bookings/add-quotations");
        },
        submitFormOne() {
            this.$router.push("/admin-template/bookings/quotations");
        },
        nextStep() {
            if (this.currentStep < this.totalSteps) {
                this.currentStep++;
            }
        },
        previousStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
            }
        },
    },
}
</script>