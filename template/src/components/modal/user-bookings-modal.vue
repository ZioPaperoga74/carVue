<template>
  <!-- Completed Booking -->
  <div
    class="modal new-modal multi-step fade"
    id="complete_booking"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="booking-header">
            <div class="booking-img-wrap">
              <div class="book-img">
                <img src="@/assets/img/cars/car-05.jpg" alt="img" />
              </div>
              <div class="book-info">
                <h6>Chevrolet Camaro</h6>
                <p>
                  <i class="feather-map-pin"></i> Location : Miami St, Destin, FL 32550,
                  USA
                </p>
              </div>
            </div>
            <div class="book-amount">
              <p>Total Amount</p>
              <h6>
                $4700
                <a href="javascript:void(0);"><i class="feather-alert-circle"></i></a>
              </h6>
            </div>
          </div>
          <div class="booking-group">
            <div class="booking-wrapper">
              <div class="booking-title">
                <h6>Booking Details</h6>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Booking Type</h6>
                    <p>Delivery</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Rental Type</h6>
                    <p>Days (3 Days)</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Extra Service</h6>
                    <p>Mobile Charging</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Delivery</h6>
                    <p>45, Avenue ,Mark Street, USA</p>
                    <p>11 Jan 2023, 03:30 PM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Dropoff</h6>
                    <p>78, 10th street Laplace,USA</p>
                    <p>11 Jan 2023, 03:30 PM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Status</h6>
                    <span class="badge badge-light-success">Completed</span>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Booked On</h6>
                    <p>15 Sep 2023, 09:30 AM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Start Date</h6>
                    <p>18 Sep 2023, 09:30 AM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>End Date</h6>
                    <p>20 Sep 2023, 09:30 AM</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="booking-wrapper">
              <div class="booking-title">
                <h6>Personal Details</h6>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Details</h6>
                    <p>Johna Melinda</p>
                    <p>+1 56441 56464</p>
                    <p>Johna@example.com</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Address</h6>
                    <p>78, 10th street</p>
                    <p>Laplace,USA</p>
                    <p>316 654</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>No of Person’s</h6>
                    <p>2 Adults, 1 Child</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-btn modal-btn-sm text-end">
            <a
              href="javascript:void(0);"
              data-bs-target="#start_ride"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Start Ride
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Completed Booking -->

  <!-- Order Success Modal -->
  <div
    class="modal new-modal order-success-modal fade"
    id="start_ride"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="order-success-info">
            <span class="order-success-icon">
              <img src="@/assets/img/icons/check-icon.svg" alt="Icon" />
            </span>
            <h4>Successful</h4>
            <p>YYou Ride has been successfully started. Order id : <span>#50641</span></p>
            <div class="modal-btn">
              <router-link @click="redirectReload" to="/user/user-dashboard" class="btn btn-secondary">
                Go to Dashboard <i class="feather-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Order Success Modal -->

  <!-- Upcoming Booking -->
  <div
    class="modal new-modal multi-step fade"
    id="upcoming_booking"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="booking-header">
            <div class="booking-img-wrap">
              <div class="book-img">
                <img src="@/assets/img/cars/car-05.jpg" alt="img" />
              </div>
              <div class="book-info">
                <h6>Chevrolet Camaro</h6>
                <p>
                  <i class="feather-map-pin"></i> Location : Miami St, Destin, FL 32550,
                  USA
                </p>
              </div>
            </div>
            <div class="book-amount">
              <p>Total Amount</p>
              <h6>
                $4700
                <a href="javascript:void(0);"><i class="feather-alert-circle"></i></a>
              </h6>
            </div>
          </div>
          <div class="booking-group">
            <div class="booking-wrapper">
              <div class="booking-title">
                <h6>Booking Details</h6>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Booking Type</h6>
                    <p>Delivery</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Rental Type</h6>
                    <p>Days (3 Days)</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Extra Service</h6>
                    <p>Mobile Charging</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Delivery</h6>
                    <p>45, Avenue ,Mark Street, USA</p>
                    <p>11 Jan 2023, 03:30 PM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Dropoff</h6>
                    <p>78, 10th street Laplace,USA</p>
                    <p>11 Jan 2023, 03:30 PM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Status</h6>
                    <span class="badge badge-light-secondary">Upcoming</span>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Booked On</h6>
                    <p>15 Sep 2023, 09:30 AM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Start Date</h6>
                    <p>18 Sep 2023, 09:30 AM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>End Date</h6>
                    <p>20 Sep 2023, 09:30 AM</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="booking-wrapper">
              <div class="booking-title">
                <h6>Personal Details</h6>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Details</h6>
                    <p>Johna Melinda</p>
                    <p>+1 56441 56464</p>
                    <p>Johna@example.com</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Address</h6>
                    <p>78, 10th street</p>
                    <p>Laplace,USA</p>
                    <p>316 654</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>No of Person’s</h6>
                    <p>2 Adults, 1 Child</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-btn modal-btn-sm text-end">
            <a
              href="javascript:void(0);"
              data-bs-target="#cancel_ride"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
              class="btn btn-secondary"
            >
              Cancel Booking
            </a>
            <a
              href="javascript:void(0);"
              data-bs-target="#start_rides"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Start Ride
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Upcoming Booking -->

  <!-- Edit Booking -->
  <div
    class="modal new-modal multi-step fade"
    id="edit_booking"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header border-0 pb-0">
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
          <div class="badge-item w-100 text-end">
            <span class="badge badge-light-warning">Inprogress</span>
          </div>
        </div>
        <div class="modal-body">
          <div class="booking-header">
            <div class="booking-img-wrap">
              <div class="book-img">
                <img src="@/assets/img/cars/car-05.jpg" alt="img" />
              </div>
              <div class="book-info">
                <h6>Chevrolet Camaro</h6>
                <p>
                  <i class="feather-map-pin"></i> Location : Miami St, Destin, FL 32550,
                  USA
                </p>
              </div>
            </div>
            <div class="book-amount">
              <p>Total Amount</p>
              <h6>
                $4700
                <a href="javascript:void(0);"><i class="feather-alert-circle"></i></a>
              </h6>
            </div>
          </div>
          <div class="booking-group">
            <div class="booking-wrapper">
              <div class="booking-title">
                <h6>Select Location</h6>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="loc-wrap">
                    <div class="modal-form-group loc-item">
                      <label>Delivery Location</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Location"
                      />
                    </div>
                    <div class="modal-form-group">
                      <label class="d-sm-block">&nbsp;</label>
                      <a href="javascript:void(0);" class="btn btn-secondary"
                        ><i class="fa-solid fa-location-crosshairs"></i> Current
                        Location</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="modal-form-group">
                    <label>Dropoff Location</label>
                    <input
                      type="text"
                      class="form-control"
                      value="78, 10th street Laplace USA"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="booking-wrapper">
              <div class="booking-title">
                <h6>
                  <span class="title-icon"><i class="fa-solid fa-location-dot"></i></span
                  >Select Booking type & Time
                  <a href="javascript:void(0);"><i class="feather-alert-circle"></i></a>
                </h6>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="modal-form-group rent-radio active">
                    <label class="custom_radio">
                      <input type="radio" class="rent-types" name="rent_type" checked />
                      <span class="checkmark"></span>
                      <span class="rent-option">Hourly</span>
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="modal-form-group rent-radio">
                    <label class="custom_radio">
                      <input type="radio" class="rent-types" name="rent_type" />
                      <span class="checkmark"></span>
                      <span class="rent-option">Day (8 Hrs)</span>
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="modal-form-group rent-radio">
                    <label class="custom_radio">
                      <input type="radio" class="rent-types" name="rent_type" />
                      <span class="checkmark"></span>
                      <span class="rent-option">Weekly</span>
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="modal-form-group rent-radio">
                    <label class="custom_radio">
                      <input type="radio" class="rent-types" name="rent_type" />
                      <span class="checkmark"></span>
                      <span class="rent-option">Monthly</span>
                    </label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="modal-form-group">
                    <label>Start Date</label>
                    <datepicker
                      v-model="startdate"
                      class="form-control datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="modal-form-group">
                    <label>Start Time</label>
                    <input type="time" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="modal-form-group">
                    <label>Return Date</label>
                    <datepicker
                      v-model="startdateOne"
                      class="form-control datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="modal-form-group">
                    <label>Return Time</label>
                    <input type="time" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div class="booking-wrapper">
              <div class="booking-title">
                <h6>
                  <span class="title-icon"><i class="fa-solid fa-medal"></i></span>Extra
                  Service
                </h6>
              </div>
              <div class="selectbox-cont">
                <label class="custom_check w-100">
                  <input type="checkbox" name="username" />
                  <span class="checkmark"></span> Baby Seat - <span class="amt">$10</span>
                </label>
                <label class="custom_check w-100">
                  <input type="checkbox" name="username" checked />
                  <span class="checkmark"></span> Mobile Charging -
                  <span class="amt">$50</span>
                </label>
                <label class="custom_check w-100">
                  <input type="checkbox" name="username" />
                  <span class="checkmark"></span> Wi-Fi Hotspot -
                  <span class="amt">$60</span>
                </label>
                <label class="custom_check w-100">
                  <input type="checkbox" name="username" />
                  <span class="checkmark"></span> Airport Shuttle Service -
                  <span class="amt">$90</span>
                </label>
              </div>
            </div>
          </div>
          <div class="modal-btn modal-btn-sm text-end">
            <a
              href="javascript:void(0);"
              data-bs-dismiss="modal"
              class="btn btn-secondary"
            >
              Go Back
            </a>
            <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary">
              Save & Continue
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Booking -->

  <!-- Cancel Ride Modal -->
  <div
    class="modal new-modal fade"
    id="cancel_ride"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Cancel Reason</h4>
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="javascript:;">
            <div class="modal-item">
              <div class="modal-form-group">
                <label>Reason <span class="text-danger">*</span></label>
                <textarea class="form-control" rows="4">
The car arrived early & the rep was courteous and polite.</textarea
                >
              </div>
            </div>
            <div class="modal-btn modal-btn-sm text-end">
              <a
                href="javascript:void(0);"
                data-bs-dismiss="modal"
                class="btn btn-secondary"
              >
                Cancel
              </a>
              <a
                href="javascript:void(0);"
                data-bs-dismiss="modal"
                class="btn btn-primary"
              >
                Submit
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Cancel Ride Modal -->

  <!-- Order Success Modal -->
  <div
    class="modal new-modal order-success-modal fade"
    id="start_rides"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="order-success-info">
            <span class="order-success-icon">
              <img src="@/assets/img/icons/check-icon.svg" alt="Icon" />
            </span>
            <h4>Successful</h4>
            <p>You Ride has been successfully started. Order id : <span>#50641</span></p>
            <div class="modal-btn">
              <router-link to="/user/user-dashboard" @click="redirectReload" class="btn btn-secondary">
                Go to Dashboard <i class="feather-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Order Success Modal -->

  <!-- Inprogress Booking -->
  <div
    class="modal new-modal multi-step fade"
    id="inprogress_booking"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="booking-header">
            <div class="booking-img-wrap">
              <div class="book-img">
                <img src="@/assets/img/cars/car-05.jpg" alt="img" />
              </div>
              <div class="book-info">
                <h6>Chevrolet Camaro</h6>
                <p>
                  <i class="feather-map-pin"></i> Location : Miami St, Destin, FL 32550,
                  USA
                </p>
              </div>
            </div>
            <div class="book-amount">
              <p>Total Amount</p>
              <h6>
                $4700
                <a href="javascript:void(0);"><i class="feather-alert-circle"></i></a>
              </h6>
            </div>
          </div>
          <div class="booking-group">
            <div class="booking-wrapper">
              <div class="booking-title">
                <h6>Booking Details</h6>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Booking Type</h6>
                    <p>Delivery</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Rental Type</h6>
                    <p>Days (3 Days)</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Extra Service</h6>
                    <p>Mobile Charging</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Delivery</h6>
                    <p>45, Avenue ,Mark Street, USA</p>
                    <p>11 Jan 2023, 03:30 PM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Dropoff</h6>
                    <p>78, 10th street Laplace,USA</p>
                    <p>11 Jan 2023, 03:30 PM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Status</h6>
                    <span class="badge badge-light-warning">Inprogress</span>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Booked On</h6>
                    <p>15 Sep 2023, 09:30 AM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Start Date</h6>
                    <p>18 Sep 2023, 09:30 AM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>End Date</h6>
                    <p>20 Sep 2023, 09:30 AM</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="booking-wrapper">
              <div class="booking-title">
                <h6>Personal Details</h6>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Details</h6>
                    <p>Johna Melinda</p>
                    <p>+1 56441 56464</p>
                    <p>Johna@example.com</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Address</h6>
                    <p>78, 10th street</p>
                    <p>Laplace,USA</p>
                    <p>316 654</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>No of Person’s</h6>
                    <p>2 Adults, 1 Child</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-btn modal-btn-sm text-end">
            <a
              href="javascript:void(0);"
              data-bs-target="#start_ride"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Complete Ride
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Inprogress Booking -->

  <!-- Completed Booking -->
  <div
    class="modal new-modal multi-step fade"
    id="cancelled_booking"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="booking-header">
            <div class="booking-img-wrap">
              <div class="book-img">
                <img src="@/assets/img/cars/car-05.jpg" alt="img" />
              </div>
              <div class="book-info">
                <h6>Chevrolet Camaro</h6>
                <p>
                  <i class="feather-map-pin"></i> Location : Miami St, Destin, FL 32550,
                  USA
                </p>
              </div>
            </div>
            <div class="book-amount">
              <p>Total Amount</p>
              <h6>
                $4700
                <a href="javascript:void(0);"><i class="feather-alert-circle"></i></a>
              </h6>
            </div>
          </div>
          <div class="booking-group">
            <div class="booking-wrapper">
              <div class="booking-title">
                <h6>Booking Details</h6>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Booking Type</h6>
                    <p>Delivery</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Rental Type</h6>
                    <p>Days (3 Days)</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Extra Service</h6>
                    <p>Mobile Charging</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Delivery</h6>
                    <p>45, Avenue ,Mark Street, USA</p>
                    <p>11 Jan 2023, 03:30 PM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Dropoff</h6>
                    <p>78, 10th street Laplace,USA</p>
                    <p>11 Jan 2023, 03:30 PM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Status</h6>
                    <span class="badge badge-light-danger">Refund Initiated</span>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Booked On</h6>
                    <p>15 Sep 2023, 09:30 AM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Start Date</h6>
                    <p>18 Sep 2023, 09:30 AM</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>End Date</h6>
                    <p>20 Sep 2023, 09:30 AM</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="booking-wrapper">
              <div class="booking-title">
                <h6>Personal Details</h6>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Details</h6>
                    <p>Johna Melinda</p>
                    <p>+1 56441 56464</p>
                    <p>Johna@example.com</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>Address</h6>
                    <p>78, 10th street</p>
                    <p>Laplace,USA</p>
                    <p>316 654</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="booking-view">
                    <h6>No of Person’s</h6>
                    <p>2 Adults, 1 Child</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="cancel-reason">
              <h6>Cancel Reason</h6>
              <p>
                On the booking date i have other work on my personal so i am cancelling my
                bookingOn the booking date i have other work on my personal so i am
                cancelling my booking On the booking date i have other work on my personal
                so i am cancelling my booking
              </p>
            </div>
            <div class="cancel-box">
              <p>
                Cancelled By User on 17 Sep 2023, Refund will deposited in user account on
                19 Sep 2023
              </p>
            </div>
          </div>
          <div class="modal-btn modal-btn-sm text-end">
            <a
              href="javascript:void(0);"
              data-bs-target="#view_status"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              View status
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Cancelled Booking -->

  <!-- View Status -->
  <div
    class="modal new-modal fade"
    id="view_status"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <div class="booking-header">
            <div class="booking-img-wrap">
              <div class="book-img">
                <img src="@/assets/img/cars/car-05.jpg" alt="img" />
              </div>
              <div class="book-info">
                <h6>Chevrolet Camaro</h6>
                <p>
                  <i class="feather-map-pin"></i> Location : Miami St, Destin, FL 32550,
                  USA
                </p>
              </div>
            </div>
            <div class="book-amount">
              <p>Total Amount</p>
              <h6>
                $4700
                <a href="javascript:void(0);"><i class="feather-alert-circle"></i></a>
              </h6>
            </div>
          </div>
          <div class="refund-wrap booking-group">
            <div class="booking-wrapper">
              <h6>Refund Method</h6>
              <div class="card-status-wrap">
                <div class="card-status">
                  <h5>Mastercard</h5>
                  <p>Started on : 20 Oct 2023</p>
                </div>
                <div class="status-img">
                  <img src="@/assets/img/icons/card-icon.svg" alt="" />
                </div>
              </div>
              <div class="refund-process">
                <h5>Refund Process</h5>
                <ul>
                  <li>
                    <h6>Dreams Rent initiated your refund</h6>
                    <p>20 Oct 2023</p>
                  </li>
                  <li>
                    <h6>Mastercard has accepted your request</h6>
                    <p>20 Oct 2023</p>
                  </li>
                  <li>
                    <h6>Refund credited to you account successfully</h6>
                    <p>20 Oct 2023</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Status -->

  <!-- Cancel Reason Modal -->
  <div
    class="modal new-modal fade"
    id="cancel_reason"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Cancel Reason</h4>
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="reason-item">
            <p>
              On the booking date i have other work on my personal so i am cancelling my
              bookingOn the booking date i have other work on my personal so i am
              cancelling my bookingOn the booking date i have other work on my personal so
              i am cancelling my bookingOn the booking date i have other work on my
              personal so i am cancelling my booking
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Cancel Reason Modal -->

  <!-- Delete Modal -->
  <div
    class="modal new-modal fade"
    id="delete_modal"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="delete-action">
            <div class="delete-header">
              <h4>Delete Booking</h4>
              <p>Are you sure want to delete?</p>
            </div>
            <div class="modal-btn">
              <div class="row">
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    class="btn btn-secondary w-100"
                  >
                    Delete
                  </a>
                </div>
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    class="btn btn-primary w-100"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->

  <!-- Custom Date Modal -->
  <div
    class="modal new-modal fade"
    id="custom_date"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Custom Date</h4>
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="javascript:;">
            <div class="modal-form-group">
              <label>From Date <span class="text-danger">*</span></label>
              <datepicker
                v-model="startdateTwo"
                class="form-control"
                :editable="true"
                :clearable="false"
                :input-format="dateFormat"
              />
              <span><i class="feather-calendar"></i></span>
            </div>
            <div class="modal-form-group">
              <label>To Date <span class="text-danger">*</span></label>
              <datepicker
                v-model="startdateThree"
                class="form-control"
                :editable="true"
                :clearable="false"
                :input-format="dateFormat"
              />
              <span><i class="feather-calendar"></i></span>
            </div>
            <div class="modal-btn modal-btn-sm text-end">
              <a
                href="javascript:void(0);"
                data-bs-dismiss="modal"
                class="btn btn-secondary"
              >
                Cancel Booking
              </a>
              <a
                href="javascript:void(0);"
                data-bs-dismiss="modal"
                class="btn btn-primary"
              >
                Start Ride
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Custom Date Modal -->
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const currentDateTwo = ref(new Date());
const currentDateThree = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      startdateTwo: currentDateTwo,
      startdateThree: currentDateThree,
      dateFormat: "dd-MM-yyyy",
    };
  },
  methods: {
    redirectReload() {
      this.$router.push({ path: "/user/user-dashboard" }).then(() => {
        this.$router.go();
      });
    },
  },
};
</script>
