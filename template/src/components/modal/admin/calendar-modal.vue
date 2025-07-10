<template>
    <!-- Event -->
    <div class="modal fade" id="add_booking">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="d-inline-flex align-items-center">Create Booking</h4>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ti ti-x"></i>
                    </button>
                </div>
                <div class="wizard-form">
                    <fieldset id="first-field" v-if="currentStep === 1">
                        <div class="row">
                            <div class="col-lg-12">
                                <form @submit.prevent="submitForm">
                                    <div>
                                        <div class="modal-body pb-0">
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
                                                <div class="mb-3">
                                                    <h5 class="mb-1">Date & Time Of Travel</h5>
                                                    <p>Add Information on Date of Travel</p>
                                                </div>
                                                <div class="border-bottom mb-3 pb-3">
                                                    <div class="row gx-3">
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
                                                                <label class="form-label">Rental Type</label>
                                                                <vue-select 
                                                                    :options="Rentaltype"
                                                                    v-model="selectedOne"
                                                                    placeholder="Self Pickup"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="mb-3">
                                                                <label class="form-label">No of Passengers</label>
                                                                <input type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row gx-3">
                                                        <div class="col-xl-6">
                                                            <div class="row gx-3">
                                                                <div class="col-md-7">
                                                                    <div class="mb-3">
                                                                        <label class="form-label">Start Date <span class="text-danger"> *</span> </label>
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
                                                                <div class="col-md-5">
                                                                    <div class="mb-3">
                                                                        <label class="form-label">Time <span class="text-danger"> *</span> </label>
                                                                        <div class="input-icon-end position-relative flex-fill">
                                                                            <a-time-picker class="form-control timepicker" v-model:value="value" />
                                                                            <span class="input-icon-addon">
                                                                                <i class="ti ti-clock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="row gx-3">
                                                                <div class="col-md-7">
                                                                    <div class="mb-3">
                                                                        <label class="form-label">End Date <span class="text-danger"> *</span> </label>
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
                                                                        <div class="input-icon-end position-relative">
                                                                            <a-time-picker class="form-control timepicker" v-model:value="valueOne" />
                                                                            <span class="input-icon-addon">
                                                                                <i class="ti ti-clock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row gx-3">
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
                                                    </div>
                                                    <label class="d-flex align-items-center">
                                                        <input class="form-check-input m-0 me-2" type="checkbox">Return Same Location
                                                    </label>
                                                </div>
                                                <div class="row align-items-center">
                                                    <div class="col-lg-4">
                                                        <div class="mb-3">
                                                            <h5 class="mb-1">Select Vehicle</h5>
                                                            <p>Select Vehicle for your rental</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8">
                                                        <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-3 mb-3">
                                                            <div class="dropdown me-2">
                                                                <a href="#filtercollapse2" class="filtercollapse coloumn d-inline-flex align-items-center" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="filtercollapse2">
                                                                    <i class="ti ti-filter me-1"></i> Filter <span class="badge badge-xs rounded-pill bg-danger ms-2">0</span>
                                                                </a>
                                                            </div>
                                                            <div class="top-search me-2">
                                                                <div class="top-search-group">
                                                                    <span class="input-icon">
                                                                        <i class="ti ti-search"></i>
                                                                    </span>
                                                                    <input type="text" class="form-control" placeholder="Search">
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <a href="javascript:void(0);" class="btn btn-dark d-inline-flex align-items-center">
                                                                    <i class="ti ti-plus me-1"></i>Add New
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="collapse" id="filtercollapse2">
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
                                                                    <a href="javascript:void(0);" class="text-danger links">Clear</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="car-select">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="row gy-3">
                                                                <div class="col-lg-4">
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="form-check form-check-md me-3">
                                                                            <input class="form-check-input" type="checkbox">
                                                                        </div>
                                                                        <span class="avatar flex-shrink-0 me-2">
                                                                            <img src="@/assets/admin/img/car/car-01.jpg" alt="">
                                                                        </span>
                                                                        <div>
                                                                            <p class="mb-0">Sedan</p>
                                                                            <h6 class="fs-14">Ford Endeavour</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-5">
                                                                    <div class="row gy-3">
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
                                                            <div class="row gy-3">
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
                                                                    <div class="row gy-3">
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
                                                            <div class="row gy-3">
                                                                <div class="col-lg-4">
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="form-check form-check-md me-3">
                                                                            <input class="form-check-input" type="checkbox">
                                                                        </div>
                                                                        <span class="avatar flex-shrink-0 me-2">
                                                                            <img src="@/assets/admin/img/car/car-03.jpg" alt="">
                                                                        </span>
                                                                        <div>
                                                                            <p class="mb-0">Sedan</p>
                                                                            <h6 class="fs-14">Acura Sport </h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-5">
                                                                    <div class="row gy-3">
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
                                        <div class="modal-footer">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <div>
                                                    <button class="btn btn-light me-2" type="button"><i class="ti ti-chevron-left me-1"></i>Cancel</button>
                                                </div> 
                                                <div>
                                                    <button class="btn btn-primary wizard-next-btn" @click="nextStep" :disabled="currentStep === totalSteps" type="button">Add Customer <i class="ti ti-chevron-right ms-1"></i></button>
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
                                <form @submit.prevent="submitForm">
                                    <div>
                                        <div class="modal-body pb-0">
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
                                                <div class="mb-3">
                                                    <h6 class="mb-1">Select Customer </h6>
                                                    <p>Add Information of Customer</p>
                                                </div>
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
                                                            <a href="javascript:void(0);" class="btn btn-dark d-inline-flex align-items-center">
                                                                <i class="ti ti-plus me-1"></i>Add New
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card bg-light">
                                                    <div class="card-body">
                                                        <div class="row align-items-center gy-3">
                                                            <div class="col-md-11">
                                                                <div class="row gx-2 gy-3">
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
                                            <div>
                                                <div class="mb-3">
                                                    <h6 class="mb-1">Select Driver </h6>
                                                    <p>Add Information of Driver</p>
                                                </div>
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
                                                            <a href="javascript:void(0);" class="btn btn-dark d-inline-flex align-items-center">
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
                                                        <div class="row align-items-center gy-3">
                                                            <div class="col-md-11">
                                                                <div class="row gx-2 gy-3">
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
                                        <div class="modal-footer">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <div class="field-btns">
                                                    <button class="btn btn-light wizard-prev-btn me-2" @click="previousStep" :disabled="currentStep === 1" type="button"><i class="ti ti-chevron-left me-1"></i>Back</button>
                                                </div> 
                                                <div class="field-btns">
                                                    <button class="btn btn-primary wizard-next-btn" @click="nextStep" :disabled="currentStep === totalSteps" type="button">Add Extra Services<i class="ti ti-chevron-right ms-1"></i></button>
                                                </div>  
                                            </div> 
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset v-if="currentStep === 3">
                        <div class="row">
                            <div class="col-lg-12">
                                <form @submit.prevent="submitForm">
                                    <div>
                                        <div class="modal-body pb-0">
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
                                            <div class="border-bottom mb-3">
                                                <div class="mb-3">
                                                    <h6 class="mb-1">Select Extra Services</h6>
                                                    <p>Add extra services for your rental</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <extra-service></extra-service>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <div class="field-btns">
                                                    <button class="btn btn-light wizard-prev-btn me-2" @click="previousStep" :disabled="currentStep === 2" type="button"><i class="ti ti-chevron-left me-1"></i>Back</button>
                                                </div> 
                                                <div class="field-btns">
                                                    <button class="btn btn-primary wizard-next-btn" @click="nextStep" :disabled="currentStep === totalSteps" type="button">Add Extra Services<i class="ti ti-chevron-right ms-1"></i></button>
                                                </div>  
                                            </div> 
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset v-if="currentStep === 4">
                        <div class="row">
                            <div class="col-lg-12">
                                <form @submit.prevent="submitForm">
                                    <div>
                                        <div class="modal-body pb-0">
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
                                            <div class="border-bottom mb-3">
                                                <div class="mb-3">
                                                    <h6 class="mb-1">Rent & Service Billing</h6>
                                                    <p>Add extra services for your rental</p>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <div class="d-flex align-items-center justify-content-between">
                                                                <label class="form-label">Base Kilometers (Per Day)</label>
                                                                <label class="d-flex align-items-center">
                                                                    <input class="form-check-input m-0 me-2" type="checkbox">Unlimited
                                                                </label>
                                                            </div>
                                                            <input type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Kilometers Extra Price </label>
                                                            <input type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="d-flex align-items-center justify-content-between mb-3">
                                                    <div>
                                                        <h6 class="mb-1">Insurance</h6>
                                                        <p>Add Insurance of Your Ride</p>
                                                    </div>
                                                    <div class="form-check form-check-md form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="switch-sm">
                                                        <label class="form-check-label mt-0" for="switch-sm">Enable</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                   <billing-details></billing-details>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <div class="field-btns">
                                                    <button class="btn btn-light wizard-prev-btn me-2" @click="previousStep" :disabled="currentStep === 3" type="button"><i class="ti ti-chevron-left me-1"></i>Back</button>
                                                </div> 
                                                <div class="field-btns">
                                                    <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#reservation_completed">Finish & Save<i class="ti ti-chevron-right ms-1"></i></button>
                                                </div>  
                                            </div> 
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
    <!-- /Event -->

    <!-- Completed -->
    <div class="modal fade" id="reservation_completed">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <form @submit.prevent="submitFormOne">
                        <span class="avatar avatar-lg bg-transparent-success rounded-circle text-success mb-3">
                            <i class="ti ti-check fs-26"></i>
                        </span>
                        <h4 class="mb-1">Created Successful</h4>
                        <p class="mb-3">Reservation created for the <span class="text-gray-9">“Ford Fiesta” </span> on <span class="text-gray-9">“24 Feb 2025”</span></p>
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary w-100">View Details</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- /Completed -->

    <!-- Event -->
    <div class="modal fade" id="event_modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="d-inline-flex align-items-center">Booking Details<a href="javascript:void(0);" class="ms-2"><i class="ti ti-edit"></i></a></h4>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ti ti-x"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="border-bottom mb-3">
                        <div class="border rounded p-3 bg-light mb-3">
                            <div class="row">
                                <div class="col-6">
                                    <div class="d-flex align-items-center">
                                        <span class="avatar flex-shrink-0 me-2">
                                            <img src="@/assets/admin/img/car/car-01.jpg" alt="">
                                        </span>
                                        <div>
                                            <h6 class="fs-14 mb-1">Ford Endeavour</h6>
                                            <p>Sedan</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div>
                                        <h6 class="fs-14 mb-1">Price</h6>
                                        <p class="fs-14 text-gray-9">$60<span class="text-gray-5 fw-normal">/day</span></p>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div>
                                        <h6 class="fs-14 mb-1">Status</h6>
                                        <span class="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                                            <i class="ti ti-point-filled me-1"></i>Completed
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-bottom mb-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <h6 class="fw-medium fs-14">Start Date</h6>
                            <p>10 Feb 2025, 12:00 PM</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <h6 class="fw-medium fs-14">End Date</h6>
                            <p>11 Feb 2025, 01:00 PM</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <h6 class="fw-medium fs-14">Rental Period</h6>
                            <p>2 Days</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <h6 class="fw-medium fs-14">Driving Type</h6>
                            <p>Self</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <h6 class="fw-medium fs-14">Pickup Location</h6>
                            <p>2nd Avenue, Lasvegas</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <h6 class="fw-medium fs-14">Return Location</h6>
                            <p>4th Street, Newyork</p>
                        </div>
                    </div>
                    <div class="border-bottom mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="mb-3">
                                <h6 class="d-inline-flex align-items-center fs-14 fw-medium ">Customer</h6>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <span class="avatar avatar-rounded flex-shrink-0 me-2">
                                    <img src="@/assets/admin/img/customer/customer-02.jpg" alt="">
                                </span>
                                <div>
                                    <h6 class="fs-14 fw-medium mb-1">Andrew Simons</h6>
                                    <p>+1 56598 98956</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="mb-3">
                                <h6 class="d-inline-flex align-items-center fs-14 fw-medium ">Driver</h6>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <span class="avatar avatar-rounded flex-shrink-0 me-2">
                                    <img src="@/assets/admin/img/customer/customer-01.jpg" alt="">
                                </span>
                                <div>
                                    <h6 class="fs-14 fw-medium mb-1">Reuben Keen</h6>
                                    <p>+1 56598 98956</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <h6>Total Price</h6>
                        <h6>$120</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Event -->
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
            selectedOne: "Self Pickup",
            selectedTwo: [],
            selectedThree: [],
            selectedFour: [],
            selectedFive: [],
            Tarrif: [
                {label: "Weekly", value: "Weekly"}, 
                {label: "Daily", value: "Daily"}, 
                {label: "Monthly", value: "Monthly"}, 
                {label: "Yearly", value: "Yearly"}, 
            ],
            Rentaltype: [
                {label: "Self Pickup", value: "Self Pickup"}, 
                {label: "Delivery", value: "Delivery"}
            ],
            Pickup: [
                {label: "Los Angles", value: "Los Angles"}, 
                {label: "New York City", value: "New York City"}, 
                {label: "Houston", value: "Houston"}, 
                {label: "Munich", value: "Munich"}, 
                {label: "Montreal", value: "Montreal"}
            ],
            Return : [
                {label: "Los Angles", value: "Los Angles"}, 
                {label: "New York City", value: "New York City"}, 
                {label: "Houston", value: "Houston"}, 
                {label: "Munich", value: "Munich"}, 
                {label: "Montreal", value: "Montreal"}
            ],
            Customer: [
                {label: "Select", value: "Select"}, 
                {label: "Andrew Simons", value: "Andrew Simons"}, 
                {label: "David Steiger", value: "David Steiger"}, 
                {label: "Darin Mabry", value: "Darin Mabry"}, 
                {label: "Mark Neiman", value: "Mark Neiman"}
            ],
            Driver: [
                {label: "Select", value: "Select"}, 
                {label: "Reuben Keen", value: "Reuben Keen"}, 
                {label: "William Jones", value: "William Jones"}, 
                {label: "Leonard Jandreau", value: "Leonard Jandreau"}, 
                {label: "Adam Bolden", value: "Adam Bolden"}
            ],
        };
    },
    methods: {
        submitForm() {
            this.$router.push("/admin-template/bookings/calendar");
        },
        submitFormOne() {
            this.$router.push("/admin-template/bookings/reservation-details");
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
};
</script>