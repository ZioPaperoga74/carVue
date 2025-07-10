<template>
  <div
    class="modal custom-modal fade check-availability-modal"
    id="pages_edit"
    role="dialog"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <div class="form-header text-start mb-0">
            <h4 class="mb-0 text-dark fw-bold">Availability Details</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span class="align-center" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="available-for-ride">
                <p>
                  <i class="fa-regular fa-circle-check"></i>Chevrolet Camaro is available
                  for a ride
                </p>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="row booking-info">
                <div class="col-md-4 pickup-address">
                  <h5>Pickup</h5>
                  <p>45, 4th Avanue Mark Street USA</p>
                  <span>Date & time : 11 Jan 2023</span>
                </div>
                <div class="col-md-4 drop-address">
                  <h5>Drop Off</h5>
                  <p>78, 10th street Laplace USA</p>
                  <span>Date & time : 11 Jan 2023</span>
                </div>
                <div class="col-md-4 booking-amount">
                  <h5>Booking Amount</h5>
                  <h6><span>$300 </span> /day</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="booking-info seat-select">
                <h6>Extra Service</h6>
                <label class="custom_check">
                  <input type="checkbox" name="rememberme" class="rememberme" />
                  <span class="checkmark"></span>
                  Baby Seat - <span class="ms-2">$10</span>
                </label>
              </div>
            </div>
            <div class="col-md-12">
              <div class="booking-info pay-amount">
                <h6>Deposit Option</h6>
                <div class="radio radio-btn">
                  <label> <input type="radio" name="radio" /> Pay Deposit </label>
                </div>
                <div class="radio">
                  <label> <input type="radio" name="radio" /> Full Amount </label>
                </div>
              </div>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6">
              <div class="booking-info service-tax">
                <ul>
                  <li>Booking Price <span>$300</span></li>
                  <li>Extra Service <span>$10</span></li>
                  <li>Tax <span>$5</span></li>
                </ul>
              </div>
              <div class="grand-total">
                <h5>Grand Total</h5>
                <span>$315</span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <router-link
            @click="redirectReload"
            to="/pages-booking/booking-order"
            class="btn btn-back"
            >Go to Details<i class="fa-solid fa-arrow-right"></i
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    redirectReload() {
      this.$router.push({ path: "/pages-booking/booking-order" }).then(() => {
        this.$router.go();
      });
    },
  },
};
</script>
