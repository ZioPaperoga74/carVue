<template>
  <!-- Popular Section -->
  <section class="popular-section-four">
    <div class="container">
      <!-- Section Header -->
      <div class="section-heading heading-four" data-aos="fade-down">
        <h2>Popular Cars On Recommendations</h2>
        <p>Here are some versatile options that cater to different needs</p>
      </div>
      <!-- /Section Header -->
      <div class="car-slider owl-carousel">
        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="item in popularFour" :key="item.id">
            <!-- Car Item -->
            <div class="car-item">
              <h6>{{ item.Car }}</h6>
              <h2 class="display-1">{{ item.Modal }}</h2>
              <div class="car-img">
                <img
                  :src="getImageUrl(item.Image)"
                  alt="img"
                  class="img-fluid"
                />
                <div class="amount-icon">
                  <span class="day-amt">
                    <p>Starts From</p>
                    <h6>{{ item.Day }} <span> /day</span></h6>
                  </span>
                </div>
              </div>
              <div class="spec-list">
                <span
                  ><img src="@/assets/img/icons/spec-01.svg" alt="img" />{{
                    item.Drive
                  }}</span
                >
                <span
                  ><img src="@/assets/img/icons/spec-02.svg" alt="img" />{{
                    item.Power
                  }}</span
                >
                <span
                  ><img src="@/assets/img/icons/spec-03.svg" alt="img" />{{
                    item.Km
                  }}</span
                >
                <span
                  ><img src="@/assets/img/icons/spec-04.svg" alt="img" />{{
                    item.Ac
                  }}</span
                >
                <span
                  ><img src="@/assets/img/icons/spec-05.svg" alt="img" />{{
                    item.Fuel
                  }}</span
                >
                <span
                  ><img src="@/assets/img/icons/spec-05.svg" alt="img" />{{
                    item.Persons
                  }}</span
                >
              </div>
              <router-link to="/listing/listing-details" class="btn btn-primary"
                >Rent Now</router-link
              >
            </div>
            <!-- /Car Item -->
          </Slide>
          <template #addons> <Navigation /> </template>
        </Carousel>
      </div>
    </div>
  </section>
  <!-- /Popular Section -->
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import popularFour from "@/assets/json/popular-four.json";
import "vue3-carousel/dist/carousel.css";
export default {
  data() {
    return {
      popularFour: popularFour,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        575: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/cars/${imageName}`, import.meta.url).href;
    },
  }
};
</script>
