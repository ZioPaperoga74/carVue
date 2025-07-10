<template>
  <!-- Breadscrumb Section -->
  <div class="breadcrumb-bar">
    <div class="container">
      <div class="row align-items-center text-center">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title">Add Your Vehicle Information</h2>
          <nav aria-label="breadcrumb" class="page-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/home/index-2">Home</router-link></li>
              <li class="breadcrumb-item"><a href="javascript:void(0);">Listings</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Add your Car Information
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadscrumb Section -->

  <!-- Detail Page Head-->
  <section class="product-detail-head">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header-information">
            <ul>
              <li>
                <a href="#info" class="active page-link">Basic Info</a>
              </li>
              <li>
                <a href="#registration" class="page-link">Registration</a>
              </li>
              <li>
                <a href="#pricing" class="page-link">Pricing</a>
              </li>
              <li>
                <a href="#service" class="page-link">Additional Service</a>
              </li>
              <li>
                <a href="#specifications" class="page-link">Specifications</a>
              </li>
              <li>
                <a href="#description" class="page-link">Description</a>
              </li>
              <li>
                <a href="#terms" class="page-link">Terms</a>
              </li>
              <li>
                <a href="#policy" class="page-link">Policy</a>
              </li>
              <li>
                <a href="#cancellation" class="page-link">Cancellation</a>
              </li>
              <li>
                <a href="#features" class="page-link">Features</a>
              </li>
              <li>
                <a href="#gallery" class="page-link"> Gallery / Video</a>
              </li>
              <li>
                <a href="#location" class="page-link">Location</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Detail Page Head-->

  <section class="section product-details add-listing">
    <div class="container">
      <div class="row" id="info">
        <div class="col-lg-4 col-md-12">
          <div class="heading-lising">
            <h4>Basic Info</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Your Vehicle title <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" placeholder="Your Name" />
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Vehicle condition <span class="text-danger">*</span></label
                    >
                    <vue-select :options="Vech" v-model="selected" placeholder="Used Vehicle" />
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Vehicle Year <span class="text-danger">*</span></label
                    >
                    <vue-select :options="Yeveh" v-model="selectedOne" placeholder="2015" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Rental category <span class="text-danger">*</span></label
                    >
                    <vue-select
                      :options="RentSel"
                      v-model="selectedTwo"
                      placeholder="Rental Category"
                    />
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Make <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" placeholder="Audi" />
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Model <span class="text-danger">*</span></label
                    >
                    <vue-select :options="MoSele" v-model="selectedThree" placeholder="A8" />
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Vehicle type <span class="text-danger">*</span></label
                    >
                    <vue-select :options="SedSel" v-model="selectedFour" placeholder="Sedan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="registration">
        <div class="col-lg-4 col-md-12">
          <div class="heading-lising">
            <h4>Registration & VIN</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >License plate number<span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Vehicle VIN <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Vehicle Registration Number<span class="text-danger"
                        >*</span
                      ></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Registration<span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="pricing">
        <div class="col-lg-4 col-md-12">
          <div class="heading-lising">
            <h4>Vehicle Price</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="check-listprice">
                  <ul>
                    <li>
                      <div class="input-block m-0">
                        <label class="custom_check d-inline-flex location-check m-0"
                          ><span>Hourly</span>
                          <input type="checkbox" checked />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="input-block m-0">
                        <label class="custom_check d-inline-flex location-check m-0"
                          ><span>Daily</span>
                          <input type="checkbox" checked />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="input-block m-0">
                        <label class="custom_check d-inline-flex location-check m-0"
                          ><span>Weekly</span>
                          <input type="checkbox" checked />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="input-block m-0">
                        <label class="custom_check d-inline-flex location-check m-0"
                          ><span>Monthly</span>
                          <input type="checkbox" checked />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Curency <span class="text-danger">*</span></label
                    >
                    <vue-select :options="Inrsel" v-model="selectedFive" placeholder="USD" />
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Hourly<span class="text-danger">*</span></label
                    >

                    <vue-select :options="HoruSel" v-model="selectedSix" placeholder="1564" />
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Days<span class="text-danger">*</span></label
                    >
                    <vue-select
                      :options="HoruSelOne"
                      v-model="selectedSeven"
                      placeholder="1564"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Weekly<span class="text-danger">*</span></label
                    >
                    <vue-select :options="TuesSele" v-model="selectedEight" placeholder="Monday" />
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Monthly<span class="text-danger">*</span></label
                    >
                    <vue-select :options="AugSelee" v-model="selectedNine" placeholder="June" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="service">
        <div class="col-lg-4 col-md-12">
          <div class="heading-lising">
            <h4>Additional Service</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="service-Price">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Name of the Service <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter the Name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Price <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter the Amount"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 text-end">
                  <div class="add-service">
                    <a href="javascript:void(0)" class="add-text-link"
                      ><i class="fa fa-plus-circle"></i> Add New</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="specifications">
        <div class="col-lg-4 col-md-12">
          <div class="heading-lising">
            <h4>Specifications</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-4 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Body type <span class="text-danger">*</span></label
                    >
                    <vue-select :options="FitSel" v-model="selectedTen" placeholder="Choose" />
                  </div>
                </div>
                <div class="col-lg-4 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Transmission <span class="text-danger">*</span></label
                    >
                    <vue-select :options="Trasiss" v-model="selectedEleven" placeholder="Choose" />
                  </div>
                </div>
                <div class="col-lg-4 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Fuel type <span class="text-danger">*</span></label
                    >
                    <vue-select :options="DieselSe" v-model="selectedTwele" placeholder="Choose" />
                  </div>
                </div>
                <div class="col-lg-4 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Mileage <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" placeholder="Enter Mileage" />
                  </div>
                </div>
                <div class="col-lg-4 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >VIN <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter VIN number"
                    />
                  </div>
                </div>
                <div class="col-lg-4 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Door <span class="text-danger">*</span></label
                    >
                    <vue-select :options="DoorSel" v-model="selectedThirteen" placeholder="2" />
                  </div>
                </div>
                <div class="col-lg-4 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Brake <span class="text-danger">*</span></label
                    >
                    <vue-select :options="BrakSel" v-model="selectedFourteen" placeholder="AB" />
                  </div>
                </div>
                <div class="col-lg-4 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Drivetrian <span class="text-danger">*</span></label
                    >
                    <vue-select :options="Drivet" v-model="selectedFifteen" placeholder="Choose" />
                  </div>
                </div>
                <div class="col-lg-4 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >AC <span class="text-danger">*</span></label
                    >
                    <vue-select :options="CondiSel" v-model="selectedSixteen" placeholder="Choose" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Engine HP<span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter HP of your car engine"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="description">
        <div class="col-lg-4 col-md-12">
          <div class="heading-lising">
            <h4>Description of Listing</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Enter Description"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="terms">
        <div class="col-lg-4 col-md-12">
          <div class="heading-lising">
            <h4>Terms & Condition</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Enter Description"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="policy">
        <div class="col-lg-4 col-md-12">
          <div class="heading-lising">
            <h4>Policies</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Enter Description"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="cancellation">
        <div class="col-lg-4 col-md-12">
          <div class="heading-lising">
            <h4>Cancellation</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >No of Days to Cancel Booking
                      <span class="text-danger">*</span></label
                    >
                    <vue-select :options="BookSel" v-model="selectedSeventeen" placeholder="Choose" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Enter Description"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="features">
        <div class="col-lg-4 col-md-12">
          <div class="heading-lising">
            <h4>Vehicle Features</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="check-listli">
                <ul>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Multi-zone A/C</span>
                        <input type="checkbox" checked />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Adaptive Cruise Control</span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Sunroof</span>
                        <input type="checkbox" checked />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Heated front seats</span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Cooled Seats</span>
                        <input type="checkbox" checked />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Panoramic roof</span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Navigation system</span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Keyles Start</span>
                        <input type="checkbox" checked />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Tinted glass</span>
                        <input type="checkbox" checked />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Heated front seats</span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Cooled Seats</span>
                        <input type="checkbox" checked />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Panoramic roof</span>
                        <input type="checkbox" checked />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Adaptive Cruise Control</span>
                        <input type="checkbox" checked />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Multi-zone A/C</span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="input-block m-0">
                      <label class="custom_check d-inline-flex location-check m-0"
                        ><span>Sunroof</span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="gallery ">
        <div class="col-lg-4 col-md-12">
          <div class="heading-lising">
            <h4>Car Gallery</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="upload-div">
                    <input type="file" />
                    <div class="upload-photo-drag">
                      <span><i class="fa fa-upload me-2"></i> Upload Photo</span>
                      <h6>or Drag Photos</h6>
                    </div>
                  </div>
                  <div class="upload-list">
                    <ul>
                      <li>
                        The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the
                        main picture first
                      </li>
                      <li>The maximum video size is 10MB. Formats: mp4, mov.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="location">
        <div class="col-lg-4 col-md-12">
          <div class="heading-lising">
            <h4>Location</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Country/Region <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" placeholder="Enter Country" />
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >State <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" placeholder="Enter  state" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Street address <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter full address"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25144741.241913226!2d-118.76482692447117!3d39.70759859406427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1715415878101!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="booking-info-btns d-flex justify-content-end">
        <router-link to="/pages-booking/booking-checkout" class="btn btn-secondary">Preview</router-link>
        <button class="btn btn-primary continue-book-btn" type="submit">
          Save Listing
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      selectedFive: [],
      selectedSix: [],
      selectedSeven: [],
      selectedEight: [],
      selectedNine: [],
      selectedTen: [],
      selectedEleven: [],
      selectedTwele: [],
      selectedThirteen: [],
      selectedFourteen: [],
      selectedFifteen: [],
      selectedSixteen: [],
      selectedSeventeen: [],
      Vech: [
        {label: "Used Vehicle", value: "Used Vehicle"}, 
        {label: "New Vehicle", value: "New Vehicle"}
      ],
      Inrsel: [
        {label: "USD", value: "USD"}, 
        {label: "INR", value: "INR"}
      ],
      Yeveh: [
        {label: "2015", value: "2015"}, 
        {label: "2016", value: "2016"}, 
        {label: "2017", value: "2017"}
      ],
      RentSel: [
        {label: "Rental Category", value: "Rental Category"}, 
        {label: "New", value: "New"}
      ],
      MoSele: [
        {label: "A8", value: "A8"}, 
        {label: "A7", value: "A7"}, 
        {label: "Q3", value: "Q3"}
      ],
      SedSel: [
        {label: "Sedan", value: "Sedan"}, 
        {label: "XUV", value: "XUV"}
      ],
      HoruSel: [
        {label: "1564", value: "1564"}, 
        {label: "1565", value: "1565"}, 
        {label: "1656", value: "1656"}
      ],
      HoruSelOne: [
        {label: "1564", value: "1564"}, 
        {label: "1565", value: "1565"}, 
        {label: "1656", value: "1656"}
      ],
      TuesSele: [
        {label: "Monday", value: "Monday"}, 
        {label: "Tuesday", value: "Tuesday"}, 
        {label: "Wednesday", value: "Wednesday"}
      ],
      AugSelee: [
        {label: "June", value: "June"}, 
        {label: "July", value: "July"}, 
        {label: "August", value: "August"}
      ],
      FitSel: [
        {label: "Choose", value: "Choose"}, 
        {lanel:"Fat", value: "Fat"},
        {lanel:"Slim", value: "Slim"},
        {lanel:"Fit", value: "Fit"},
      ],
      Trasiss: [
        {label: "Choose", value: "Choose"}, 
        {label: "Transmission", value: "Transmission"}, 
      ],
      DieselSe: [
        {label: "Choose", value: "Choose"}, 
        {label: "Petrol", value: "Petrol"}, 
        {label: "Diesel", value: "Diesel"}, 
      ],
      DoorSel: [
        {label: "2", value: "2"}, 
        {label: "3", value: "3"}, 
        {label: "4", value: "4"}, 
      ],
      BrakSel: [
        {label: "AB", value: "AB"}, 
        {label: "ABS", value: "ABS"},
      ],
      Drivet: [
        {label: "Choose", value: "Choose"}, 
        {label: "Drivetrian", value: "Drivetrian"}, 
      ],
      CondiSel: [
        {label: "Choose", value: "Choose"},  
        {label: "AC", value: "AC"},  
        {label: "Air Conditioner", value: "Air Conditioner"},  
      ],
      BookSel: [
        {label: "Choose", value: "Choose"}, 
        {label: "4", value: "4"}, 
        {label: "5", value: "5"}, 
      ],
    };
  },
};
</script>
