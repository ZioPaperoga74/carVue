<template>
  <div class="charter-company-slider owl-carousel">
    <Carousel
      :wrap-around="true"
      :settings="settings"
      :breakpoints="breakpoints"
    >
      <Slide v-for="item in Charter_Company" :key="item.id">
        <div class="charter-company-logo">
          <span
            ><img :src="getImageUrl(item.Image)" alt="Icon"
          /></span>
        </div>
      </Slide>
      <template #addons>
      </template>
    </Carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Charter_Company from "@/assets/json/charter-company.json";
export default {
  data() {
    return {
      Charter_Company: Charter_Company,
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
          itemsToShow: 5,
          snapAlign: "center",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
    },
  },

};
</script>