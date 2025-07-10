<template>
  <div class="detail-product">
    <div class="pro-info">
      <div class="pro-badge">
        <a href="javascript:void(0);" class="fav-icon"
          ><i class="fa-regular fa-heart"></i
        ></a>
      </div>
    </div>

    <Carousel
      class="slider detail-bigimg"
      id="gallery"
      :items-to-show="1"
      :wrap-around="false"
      v-model="currentSlide"
    >
      <Slide
        v-for="(image, index) in carImages"
        :key="index"
        class="product-img"
      >
        <div class="carousel__item">
          <img
            :src="getImageUrl(image)"
            :alt="car?.brand + ' ' + car?.model + ' ' + (index + 1)"
            crossorigin="anonymous"
            style="max-width: 100%; height: auto"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="(image, index) in carImages" :key="index">
        <div
          class="carousel__item slider slider-nav-thumbnails"
          @click="slideTo(index)"
        >
          <img
            :src="getImageUrl(image)"
            :alt="car?.brand + ' ' + car?.model + ' thumb ' + (index + 1)"
            crossorigin="anonymous"
          />
        </div>
      </Slide>
    </Carousel>
  </div>
  <div class="review-sec pb-0">
    <div class="review-header">
      <h4>Extra Service</h4>
    </div>
    <div class="lisiting-service">
      <div class="row">
        <div
          class="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6"
        >
          <div class="service-img">
            <img src="@/assets/img/icons/service-01.svg" alt="Icon" />
          </div>
          <div class="service-info">
            <p>GPS Navigation Systems</p>
          </div>
        </div>
        <div
          class="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6"
        >
          <div class="service-img">
            <img src="@/assets/img/icons/service-02.svg" alt="Icon" />
          </div>
          <div class="service-info">
            <p>Wi-Fi Hotspot</p>
          </div>
        </div>
        <div
          class="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6"
        >
          <div class="service-img">
            <img src="@/assets/img/icons/service-03.svg" alt="Icon" />
          </div>
          <div class="service-info">
            <p>Child Safety Seats</p>
          </div>
        </div>
        <div
          class="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6"
        >
          <div class="service-img">
            <img src="@/assets/img/icons/service-04.svg" alt="Icon" />
          </div>
          <div class="service-info">
            <p>Fuel Options</p>
          </div>
        </div>
        <div
          class="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6"
        >
          <div class="service-img">
            <img src="@/assets/img/icons/service-05.svg" alt="Icon" />
          </div>
          <div class="service-info">
            <p>Roadside Assistance</p>
          </div>
        </div>
        <div
          class="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6"
        >
          <div class="service-img">
            <img src="@/assets/img/icons/service-06.svg" alt="Icon" />
          </div>
          <div class="service-info">
            <p>Satellite Radio</p>
          </div>
        </div>
        <div
          class="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6"
        >
          <div class="service-img">
            <img src="@/assets/img/icons/service-07.svg" alt="Icon" />
          </div>
          <div class="service-info">
            <p>Additional Accessories</p>
          </div>
        </div>
        <div
          class="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6"
        >
          <div class="service-img">
            <img src="@/assets/img/icons/service-08.svg" alt="Icon" />
          </div>
          <div class="service-info">
            <p>Express Check-in/out</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  props: {
    car: { type: Object, required: false },
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  computed: {
    carImages() {
      if (!this.car || !this.car.images) return [];

      // Se images è una stringa, la dividiamo in array
      if (typeof this.car.images === "string") {
        return this.car.images.split(",").map((img) => img.trim());
      }

      // Se è già un array, lo restituiamo
      if (Array.isArray(this.car.images)) {
        return this.car.images;
      }

      return [];
    },
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
    getImageUrl(image) {
      if (!image || !this.car) return "";
      return `http://127.0.0.1:8090/api/files/cars/${this.car.id}/${image}`;
    },
  },
});
</script>
