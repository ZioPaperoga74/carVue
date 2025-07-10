<template>
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
              <h4>Delete Reviews</h4>
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
              <input type="date" class="form-control" />
            </div>
            <div class="modal-form-group">
              <label>To Date <span class="text-danger">*</span></label>
              <input type="date" class="form-control" />
            </div>
            <div class="modal-btn modal-btn-item modal-btn-sm text-end">
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

  <!-- Add Payment Modal -->
  <div
    class="modal new-modal multi-step fade"
    id="add_review"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Review</h4>
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="review-wrap">
            <div class="row">
              <div class="col-lg-4 col-md-12">
                <div class="booking-img-wrap">
                  <div class="book-img">
                    <img src="@/assets/img/cars/car-05.jpg" alt="img" />
                  </div>
                  <div class="book-info">
                    <h6>Chevrolet Camaro</h6>
                    <p>Delivery</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-12">
                <div class="row">
                  <div class="col-md-4">
                    <div class="booking-view">
                      <h6>Rental Type</h6>
                      <p>Hourly</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="booking-view">
                      <h6>Total Amount</h6>
                      <p>$3000</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="booking-view">
                      <h6>Booked On</h6>
                      <p>15 Sep 2023, 09:30 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form action="javascript:;">
            <div class="rating-wrap">
              <div class="modal-form-group">
                <label>Overall Ratings <span class="text-danger">*</span></label>
                <div class="rating">
                  <a href="javascript:void(0);" class="fav-icon"
                    ><i class="fas fa-star me-1"></i
                  ></a>
                  <a href="javascript:void(0);" class="fav-icon"
                    ><i class="fas fa-star me-1"></i
                  ></a>
                  <a href="javascript:void(0);" class="fav-icon"
                    ><i class="fas fa-star me-1"></i
                  ></a>
                  <a href="javascript:void(0);" class="fav-icon"
                    ><i class="fas fa-star me-1"></i
                  ></a>
                  <a href="javascript:void(0);" class="fav-icon"
                    ><i class="fas fa-star"></i
                  ></a>
                </div>
              </div>
              <div class="modal-form-group">
                <label>Enter Review <span class="text-danger">*</span></label>
                <textarea
                  class="form-control"
                  rows="4"
                  placeholder="Enter Comments"
                ></textarea>
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
  <!-- /Add Payment Modal -->
</template>
