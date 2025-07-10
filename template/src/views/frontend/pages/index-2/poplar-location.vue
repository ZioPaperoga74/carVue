<template>
  <section class="popular-location-sec">
    <div class="sec-round-colors">
      <span class="bg-orange round-small"></span>
      <span class="bg-orange round-small"></span>
      <span class="bg-dark-blue round-big"></span>
      <span class="bg-dark-blue round-small"></span>
    </div>
    <div class="sec-bg">
      <img
        src="@/assets/img/bg/yacht-cat-sec-bg-02.png"
        class="vector-round"
        alt="Img"
      />
      <img src="@/assets/img/bg/ship-part-bg-01.png" alt="Bg" />
    </div>
    <div class="container">
      <div class="section-header-two">
        <h2>Popular Location</h2>
        <p>
          Most popular worldwide Category due to their reliability,
          affordability, and features.
        </p>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="popular-location-slider owl-carousel home-two-slider">
            <Carousel
              :wrap-around="true"
              :settings="settings"
              :breakpoints="breakpoints"
            >
              <Slide v-for="item in Poplar_Location" :key="item.id">
                <div class="popular-location-card">
                  <div class="location-img">
                    <a href="javascript:void(0);"
                      ><img
                        :src="getImageUrl(item.Image)" class="img-fluid"
                        alt="City Img"
                    /></a>
                  </div>
                  <div class="location-contents">
                    <div class="location-city-name">
                      <h4>
                        <a href="javascript:void(0);">{{ item.Location }}</a>
                      </h4>
                      <span>{{ item.Yachts }} Yachts</span>
                    </div>
                    <a href="javascript:void(0);" class="arrow-right"
                      ><i class="bx bx-right-arrow-alt"></i
                    ></a>
                  </div>
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Poplar_Location from "@/assets/json/poplar-location.json";
export default {
  data() {
    return {
      Poplar_Location: Poplar_Location,
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
          itemsToShow: 4,
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
      return new URL(`/src/assets/img/destination/${imageName}`, import.meta.url).href;
    },
  },

};
</script>
