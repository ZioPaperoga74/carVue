<template>
  <layouts-header></layouts-header>
  <user-breadcrumb :title="title" :text="text" :text1="text1" />

  <div class="booking-new-module">
    <div class="container">
      <div class="booking-wizard-head">
        <div class="row align-items-center">
          <div class="col-xl-4 col-lg-3">
            <div class="booking-head-title">
              <h4>Reserve Your Car</h4>
              <p>Complete the following steps</p>
            </div>
          </div>
          <div class="col-xl-8 col-lg-9">
            <div class="booking-wizard-lists">
              <ul>
                <li class="active activated">
                  <span
                    ><img
                      src="@/assets/img/icons/booking-head-icon-01.svg"
                      alt="Booking Icon"
                  /></span>
                  <h6>Location & Time</h6>
                </li>
                <li class="active activated">
                  <span
                    ><img
                      src="@/assets/img/icons/booking-head-icon-02.svg"
                      alt="Booking Icon"
                  /></span>
                  <h6>Add-Ons</h6>
                </li>
                <li class="active activated">
                  <span
                    ><img
                      src="@/assets/img/icons/booking-head-icon-03.svg"
                      alt="Booking Icon"
                  /></span>
                  <h6>Detail</h6>
                </li>
                <li class="active">
                  <span
                    ><img
                      src="@/assets/img/icons/booking-head-icon-04.svg"
                      alt="Booking Icon"
                  /></span>
                  <h6>Checkout</h6>
                </li>
                <li>
                  <span
                    ><img
                      src="@/assets/img/icons/booking-head-icon-05.svg"
                      alt="Booking Icon"
                  /></span>
                  <h6>Booking Confirmed</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="booking-detail-info">
        <div class="row">
          <div class="col-lg-12">
            <div class="booking-information-main">
              <form @submit.prevent="submitForm">
                <div class="booking-information-card payment-info-card">
                  <div class="booking-info-head">
                    <div class="d-flex align-items-center">
                      <span><i class="bx bx-money"></i></span>
                      <h5>Payment</h5>
                    </div>
                  </div>
                  <div class="booking-info-body">
                    <div class="payment-method-types">
                      <h5>Choose your Payment Method</h5>
                      <ul>
                        <li>
                          <label class="payment_custom_check">
                            <input type="radio" name="payment_type" checked="" />
                            <span class="payment_checkmark">
                              <span class="checked-title"
                                ><img
                                  src="@/assets/img/icons/payment-method-01.svg"
                                  alt="Img"
                              /></span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="payment_custom_check">
                            <input type="radio" name="payment_type" />
                            <span class="payment_checkmark">
                              <span class="checked-title"
                                ><img
                                  src="@/assets/img/icons/payment-method-02.svg"
                                  alt="Img"
                              /></span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="payment_custom_check">
                            <input type="radio" name="payment_type" />
                            <span class="payment_checkmark">
                              <span class="checked-title"
                                ><img
                                  src="@/assets/img/icons/payment-method-03.svg"
                                  alt="Img"
                              /></span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="payment_custom_check">
                            <input type="radio" name="payment_type" />
                            <span class="payment_checkmark">
                              <span class="checked-title"
                                ><img
                                  src="@/assets/img/icons/payment-method-04.svg"
                                  alt="Img"
                              /></span>
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div class="payment-method-types payments-cards-types">
                      <div class="row">
                        <div class="col-lg-7">
                          <ul>
                            <li>
                              <label class="payment_custom_check">
                                <input
                                  type="radio"
                                  name="payment_card"
                                  id="debit_card"
                                  value="debit"
                                  v-model="selectedCard"
                                  checked
                                />
                                <span class="payment_checkmark">
                                  <span class="checked-title"
                                    ><img
                                      src="@/assets/img/icons/payment-card-01.svg"
                                      alt="Img"
                                  /></span>
                                  <small>Debit card <span>523************14</span></small>
                                </span>
                              </label>
                            </li>
                            <li>
                              <label class="payment_custom_check">
                                <input
                                  type="radio"
                                  name="payment_card"
                                  id="credit_card"
                                  v-model="selectedCard"
                                />
                                <span class="payment_checkmark">
                                  <span class="checked-title"
                                    ><img
                                      src="@/assets/img/icons/payment-card-02.svg"
                                      alt="Img"
                                  /></span>
                                  <small
                                    >Credit card <span>654************12</span></small
                                  >
                                </span>
                              </label>
                            </li>
                            <li>
                              <label class="payment_custom_check">
                                <input
                                  type="radio"
                                  name="payment_card"
                                  id="add_new_card"
                                  value="addNew"
                                  v-model="selectedCard"
                                  @click="handleAddNewCardClick"
                                />
                                <span class="payment_checkmark">
                                  <span class="checked-title">Add New Card</span>
                                </span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        class="add-new-cards"
                        v-if="showAddNewCards"
                        :style="{ display: showAddNewCards ? 'block' : 'none' }"
                      >
                        <h5 class="title-head">Add new Card</h5>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="input-block">
                              <label class="form-label"
                                >Card Number <span class="text-danger"> *</span></label
                              >
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Card Number"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="input-block">
                              <label class="form-label"
                                >Name on Card <span class="text-danger"> *</span></label
                              >
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter name on card"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="input-block">
                              <label class="form-label"
                                >CVV <span class="text-danger"> *</span></label
                              >
                              <div class="group-img">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Enter CVV Number"
                                />
                                <span class="input-cal-icon"
                                  ><i class="bx bx-lock"></i
                                ></span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="input-block date-widget">
                              <label class="form-label"
                                >Expiry Date <span class="text-danger"> *</span></label
                              >
                              <div class="group-img">
                                <datepicker
                                  v-model="startdate"
                                  class="form-control datetimepicker"
                                  :editable="true"
                                  :clearable="false"
                                  :input-format="dateFormat"
                                />
                                <span class="input-cal-icon"
                                  ><i class="bx bx-calendar"></i
                                ></span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="input-block m-0">
                              <label class="custom_check d-inline-flex location-check m-0"
                                ><span>Save this account for future transaction</span>
                                <input type="checkbox" name="remeber" />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="booking-info-btns d-flex justify-content-end">
                  <router-link to="/pages-booking/booking-detail" class="btn btn-secondary"
                    >Back to billing info</router-link
                  >
                  <button class="btn btn-primary continue-book-btn" type="submit">
                    Pay $4700 & Place Reservation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <layout-footer></layout-footer>
  <booking-payment-modal></booking-payment-modal>
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      title: "Booking",
      text: "Pages",
      text1: "Booking",
      selectedCard: "debit",
      showAddNewCards: false,
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
    };
  },
  methods: {
    handleAddNewCardClick() {
      this.showAddNewCards = true;
    },
    submitForm() {
      this.$router.push("/pages-booking/booking-success");
    },
  },
  watch: {
    selectedCard(newVal) {
      if (newVal !== "addNew") {
        this.showAddNewCards = false;
      }
    },
  },
};
</script>
