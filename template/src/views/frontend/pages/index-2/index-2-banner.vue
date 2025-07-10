<template>
  <section class="banner-section banner-sec-two banner-slider">
    <banner-carousel></banner-carousel>
    <div class="container">
      <div class="home-banner">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div class="hero-sec-contents">
              <div class="banner-title">
                <h1>
                  Online Yacht Booking.
                  <span>Made Simple.</span>
                </h1>
                <p>
                  Modern design sports cruisers for those who crave adventure & grandeur
                  yachts for relaxing with your loved ones. We Offer diverse and fully
                  equipped yachts
                </p>
              </div>
              <div class="banner-form">
                <form @submit.prevent="submitForm">
                  <div class="banner-search-list">
                    <div class="input-block">
                      <label><i class="bx bx-map"></i>Location</label>
                      <vue-select
                        :options="LocatNew"
                        v-model="selected"
                        placeholder="Choose Location"
                      />
                    </div>
                    <div class="input-block">
                      <label><i class="bx bx-calendar"></i>Pickup Date</label>
                      <div class="date-widget">
                        <div class="group-img">
                          <datepicker
                            v-model="startdate"
                            class="form-control datetimepicker"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="input-block">
                      <label><i class="bx bx-calendar"></i>Pickup Date</label>
                      <div class="date-widget">
                        <div class="group-img">
                          <datepicker
                            v-model="startdateOne"
                            class="form-control datetimepicker"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="input-block">
                      <label><i class="bx bxs-ship"></i>Yacht Type</label>
                      <vue-select
                        :options="CateSel"
                        v-model="selectedOne"
                        placeholder="Catamaran"
                      />
                    </div>
                  </div>
                  <div class="input-block-btn">
                    <button class="btn btn-primary" type="submit">
                      <i class="bx bx-search-alt me-2"></i> Search
                    </button>
                  </div>
                </form>
              </div>
              <div class="banner-user-group text-center">
                <ul>
                  <li>
                    <a href="javascript:void(0);"
                      ><img src="@/assets/img/profiles/avatar-01.jpg" alt="Img"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      ><img src="@/assets/img/profiles/avatar-02.jpg" alt="Img"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      ><img src="@/assets/img/profiles/avatar-03.jpg" alt="Img"
                    /></a>
                  </li>
                  <li class="users-text">
                    <h5>6K + Customers</h5>
                    <span>has used our renting services </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="video-btn text-center">
        <a href="https://www.youtube.com/embed/ExJZAegsOis" data-fancybox
          ><span><i class="bx bx-play"></i></span
        ></a>
        <h6>Check Our Video</h6>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      selected: "Catamaran",
      selectedOne: [],
      CateSel: [
        {label: "Catamaran", value: "Catamaran"}, 
        {label: "Motor yachts", value: "Motor yachts"}, 
        {label: "Sailing yachts", value: "Sailing yachts"}
      ],
      LocatNew: [
        {label: "Choose Location", value: "Choose Location"}, 
        {label: "Newyork", value: "Newyork"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/listing/listing-grid");
    },
  },
};
</script>
