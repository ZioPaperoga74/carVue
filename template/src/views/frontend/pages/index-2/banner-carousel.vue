<template>
  <div class="banner-img-slider owl-carousel">
    <Carousel
      :wrap-around="true"
      :settings="settings"
      :breakpoints="breakpoints"
    >
      <Slide v-for="item in Index_2_Banner" :key="item.id">
        <div class="slider-img">
          <img :src="getImageUrl(item.Image)" alt="Img" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Index_2_Banner from "@/assets/json/index-2-banner.json";
export default {
  data() {
    return {
      Index_2_Banner: Index_2_Banner,
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
          snapAlign: "center",
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
      return new URL(`/src/assets/img/bg/${imageName}`, import.meta.url).href;
    },
  },
};
</script>