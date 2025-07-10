<template>
  <div class="col-lg-4 theiaStickySidebar">
    <div class="stickysidebar">
      <div class="review-sec mt-0">
        <div class="review-header">
          <h4>Pricing</h4>
        </div>
        <div class="mb-3">
          <label
            class="booking_custom_check bookin-check-2"
            v-if="car && car.price"
          >
            <input type="radio" name="price_rate" checked />
            <span class="booking_checkmark">
              <span class="checked-title">Daily</span>
              <span class="price-rate">{{ car.price }}</span>
            </span>
          </label>
          <label
            class="booking_custom_check bookin-check-2"
            v-if="car && car.weekly_price"
          >
            <input type="radio" name="price_rate" />
            <span class="booking_checkmark">
              <span class="checked-title">Weekly</span>
              <span class="price-rate">{{ car.weekly_price }}</span>
            </span>
          </label>
          <label
            class="booking_custom_check bookin-check-2"
            v-if="car && car.monthly_price"
          >
            <input type="radio" name="price_rate" />
            <span class="booking_checkmark">
              <span class="checked-title">Monthly</span>
              <span class="price-rate">{{ car.monthly_price }}</span>
            </span>
          </label>
          <label
            class="booking_custom_check bookin-check-2"
            v-if="car && car.yearly_price"
          >
            <input type="radio" name="price_rate" />
            <span class="booking_checkmark">
              <span class="checked-title">Yearly</span>
              <span class="price-rate">{{ car.yearly_price }}</span>
            </span>
          </label>
        </div>
        <div class="location-content">
          <div class="delivery-tab">
            <ul class="nav">
              <li>
                <label class="booking_custom_check">
                  <input type="radio" name="rent_type" checked="" />
                  <span class="booking_checkmark">
                    <span class="checked-title">Delivery</span>
                  </span>
                </label>
              </li>
              <li>
                <label class="booking_custom_check">
                  <input type="radio" name="rent_type" />
                  <span class="booking_checkmark">
                    <span class="checked-title">Self Pickup</span>
                  </span>
                </label>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="delivery">
              <form class="">
                <ul>
                  <li class="column-group-main">
                    <div class="input-block">
                      <label
                        class="custom_check d-inline-flex location-check m-0"
                        ><span>Return to same location</span>
                        <input type="checkbox" name="remeber" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>

                  <li class="column-group-last">
                    <div class="input-block mb-0">
                      <div class="search-btn">
                        <router-link
                          :to="{
                            path: '/user/user-messages',
                            query: { carId: car && car.id },
                          }"
                          class="btn btn-primary check-available w-100"
                        >
                          Contatta il venditore
                        </router-link>
                      </div>
                    </div>
                  </li>
                </ul>
              </form>
            </div>
            <div class="tab-pane fade" id="pickup">
              <form class="">
                <ul>
                  <li class="column-group-main">
                    <div class="input-block">
                      <label>Delivery Location</label>
                      <div class="group-img">
                        <vue-select
                          :options="NewDelivery"
                          id="newdelivery"
                          placeholder="Newyork Office - 78, 10th street Laplace USA"
                          :modelValue="selectedNewDelivery"
                        />
                      </div>
                    </div>
                  </li>
                  <li class="column-group-main">
                    <div class="input-block">
                      <label
                        class="custom_check d-inline-flex location-check m-0"
                        ><span>Return to same location</span>
                        <input type="checkbox" name="remeber" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </li>
                  <li class="column-group-main">
                    <div class="input-block">
                      <label>Delivery Location</label>
                      <div class="group-img">
                        <vue-select
                          :options="NewLocation"
                          id="newlocation"
                          placeholder="Newyork Office - 78, 10th street Laplace USA"
                          :modelValue="selectedNewLocation"
                        />
                      </div>
                    </div>
                  </li>
                  <li class="column-group-main">
                    <div class="input-block">
                      <label>Return Location</label>
                      <div class="group-img">
                        <div class="form-wrap">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="78, 10th street Laplace USA"
                          />
                          <span class="form-icon">
                            <i class="fa-solid fa-location-crosshairs"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="column-group-main">
                    <div class="input-block m-0">
                      <label>Pickup Date</label>
                    </div>
                    <div class="input-block-wrapp sidebar-form">
                      <div class="input-block me-lg-2">
                        <div class="group-img">
                          <div class="form-wrap">
                            <datepicker
                              v-model="startdateTwo"
                              class="form-control datetimepicker"
                              :editable="true"
                              :clearable="false"
                              :input-format="dateFormat"
                            />
                            <span class="form-icon">
                              <i class="fa-regular fa-calendar-days"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="input-block">
                        <div class="group-img">
                          <div class="form-wrap">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="  11:00 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="form-icon">
                              <i class="fa-regular fa-clock"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="column-group-main">
                    <div class="input-block m-0">
                      <label>Return Date</label>
                    </div>
                    <div class="input-block-wrapp sidebar-form">
                      <div class="input-block me-2">
                        <div class="group-img">
                          <div class="form-wrap">
                            <datepicker
                              v-model="startdateThree"
                              class="form-control datetimepicker"
                              :editable="true"
                              :clearable="false"
                              :input-format="dateFormat"
                            />
                            <span class="form-icon">
                              <i class="fa-regular fa-calendar-days"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="input-block">
                        <div class="group-img">
                          <div class="form-wrap">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="  11:00 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="form-icon">
                              <i class="fa-regular fa-clock"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="column-group-last">
                    <div class="input-block mb-0">
                      <div class="search-btn">
                        <a
                          href="booking-checkout.html"
                          class="btn btn-primary check-available w-100"
                          >Book</a
                        >
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#enquiry"
                          class="btn btn-theme"
                          >Enquire Us</a
                        >
                      </div>
                    </div>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="review-sec extra-service mt-0">
        <div class="review-header">
          <h4>Listing Owner Details</h4>
        </div>
        <div class="owner-detail">
          <div class="owner-img">
            <a href="#"
              ><img src="@/assets/img/profiles/avatar-07.jpg" alt="User"
            /></a>
            <span class="badge-check"
              ><img src="@/assets/img/icons/badge-check.svg" alt="User"
            /></span>
          </div>
          <div class="reviewbox-list-rating">
            <h5><a>Brooklyn Cars</a></h5>
            <p>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <span> (5.0)</span>
            </p>
          </div>
        </div>
        <ul class="booking-list">
          <li>
            Email
            <span>info@example.com</span>
          </li>
          <li>
            Phone Number
            <span>+1 14XXX XXX78</span>
          </li>
          <li>
            Location
            <span>4635 Pheasant Ridge Road, City Hollywood, USA</span>
          </li>
        </ul>
        <div class="message-btn">
          <a href="#" class="btn btn-order">Message to owner</a>
          <a href="#" class="chat-link"
            ><i class="fa-brands fa-whatsapp"></i>Chat Via Whatsapp</a
          >
        </div>
      </div>
      <div class="review-sec share-car mt-0">
        <div class="review-header">
          <h4>View Car Location</h4>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
          class="iframe-video"
        ></iframe>
      </div>
      <div class="review-sec share-car mt-0 mb-0">
        <div class="review-header">
          <h4>Share</h4>
        </div>
        <ul class="nav-social">
          <li>
            <a href="javascript:void(0)"
              ><i class="fa-brands fa-facebook-f fa-facebook fi-icon"></i
            ></a>
          </li>
          <li>
            <a href="javascript:void(0)"
              ><i class="fab fa-instagram fi-icon"></i
            ></a>
          </li>
          <li>
            <a href="javascript:void(0)"
              ><i class="fab fa-behance fi-icon"></i
            ></a>
          </li>
          <li>
            <a href="javascript:void(0)"
              ><i class="fa-brands fa-pinterest-p fi-icon"></i
            ></a>
          </li>
          <li>
            <a href="javascript:void(0)"
              ><i class="fab fa-twitter fi-icon"></i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              ><i class="fab fa-linkedin fi-icon"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const currentDateTwo = ref(new Date());
const currentDateThree = ref(new Date());
export default {
  props: {
    car: { type: Object, required: false },
  },
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      startdateTwo: currentDateTwo,
      startdateThree: currentDateThree,
      dateFormat: "dd-MM-yyyy",
      NewDelivery: [
        "Newyork Office - 78, 10th street Laplace USA",
        "Newyork Office - 12, 5th street USA",
      ],
      NewLocation: [
        "Newyork Office - 78, 10th street Laplace USA",
        "Newyork Office - 12, 5th street USA",
      ],
      selectedNewDelivery: null,
      selectedNewLocation: null,
    };
  },
};
</script>
