<template>
  <section class="yacht-category-sec">
    <div class="sec-bg">
      <img src="@/assets/img/bg/yacht-cat-sec-bg-01.png" class="anchor-img" alt="Img" />
      <img src="@/assets/img/bg/yacht-cat-sec-bg-02.png" class="vector-round" alt="Img" />
      <img src="@/assets/img/bg/yacht-cat-sec-bg-03.png" class="design-round" alt="Img" />
    </div>
    <div class="sec-round-colors">
      <span class="bg-orange round-small"></span>
      <span class="bg-orange round-small"></span>
      <span class="bg-dark-blue round-small"></span>
      <span class="bg-dark-blue round-small"></span>
    </div>
    <div class="container">
      <div class="banner-yacht-type-slider owl-carousel">
        <Carousel
          :wrap-around="true"
          :settings="settings"
          :breakpoints="breakpoints"
          :autoplay="3000"
        >
          <Slide v-for="item in Yacht_Categories" :key="item.id">
            <div :class="item.Class">
              <div class="banner-slider-icon">
                <span
                  ><img :src="getImageUrl(item.Image)" alt="Img"
                /></span>
              </div>
              <h6>{{ item.Name }}</h6>
            </div>
          </Slide>
          <template #addons> </template>
        </Carousel>
      </div>
      <div class="section-header-two">
        <h2>Popular Yacht Categories</h2>
        <p>
          Know what you’re looking for? Browse our extensive selection of charter yachts
          from around the world.
        </p>
      </div>
      <div class="row yacht-category-lists">
        <div class="custom-col" v-for="record in Yacht_List" :key="record.id">
          <div class="yacht-cat-grid">
            <div class="yatch-card-img">
              <router-link to="/listing/listing-grid"
                ><img
                  :src="getImageUrlOne(record.Image)"
                  class="img-fluid"
                  alt="yacht"
              /></router-link>
            </div>
            <div class="card-content d-flex align-items-center justify-content-between">
              <div>
                <h4>
                  <router-link to="/listing/listing-grid">{{
                    record.Category
                  }}</router-link>
                </h4>
                <span>{{ record.YachtCount }} Yachts</span>
              </div>
              <router-link to="/listing/listing-grid" class="arrow-right"
                ><i class="bx bx-right-arrow-alt"></i
              ></router-link>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="view-more-btn text-center">
            <router-link to="/listing/listing-grid" class="btn btn-secondary"
              >View More Categories</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Yacht_Categories from "@/assets/json/yacht-categories.json";
import Yacht_List from "@/assets/json/yacht-list.json";
export default {
  data() {
    return {
      Yacht_List: Yacht_List,
      Yacht_Categories: Yacht_Categories,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        575: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 4,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 8,
          snapAlign: "start",
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
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/img/yacht/${imageName}`, import.meta.url).href;
    },
  },

};
</script>
