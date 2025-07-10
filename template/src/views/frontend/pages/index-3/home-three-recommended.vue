<template>
  <!-- Recommended Section -->
  <section class="section recommend-section">
    <div class="container-fluid">
      <!-- Heading title-->
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <div
            class="section-heading heading-three mx-auto"
            data-aos="fade-down"
          >
            <h2>Highly <span>Recommended</span></h2>
            <p>
              Here's a list of some of the most popular Bikes globally, based on
              sales and customer preferences
            </p>
          </div>
        </div>
      </div>
      <!-- /Heading title -->

      <div class="row">
        <div class="col-md-12">
          <div class="recommend-slider owl-carousel">
            <Carousel
              :wrap-around="true"
              :autoplay="3000"
              :settings="settings"
              :breakpoints="breakpoints"
            >
              <Slide v-for="item in Recommended" :key="item.id">
                <div class="listing-item bike-list">
                  <div class="listing-img">
                    <router-link to="/listing/listing-details">
                      <img
                        :src="getImageUrl(item.Image)"
                        class="img-fluid"
                        alt="img"
                      />
                    </router-link>
                  </div>
                  <div class="listing-content">
                    <div
                      class="listing-features d-flex justify-content-between"
                    >
                      <div class="list-rating">
                        <div class="list-ratings">
                          <i class="fas fa-star filled me-1"></i>
                          <i class="fas fa-star filled me-1"></i>
                          <i class="fas fa-star filled me-1"></i>
                          <i class="fas fa-star filled me-1"></i>
                          <i class="fas fa-star"></i>
                          <span>{{item.Reviews}}</span>
                        </div>
                        <h3 class="listing-title">
                          <router-link to="/listing/listing-details"
                            >{{item.Bike}}</router-link
                          >
                        </h3>
                      </div>
                      <div class="list-km">
                        <span class="km-count"
                          ><img
                            src="@/assets/img/icons/map-pin.svg"
                            alt="author"
                          />{{item.MapPin}}</span
                        >
                      </div>
                    </div>
                    <div class="listing-details-group">
                      <ul>
                        <li>
                          <span
                            ><img
                              src="@/assets/img/icons/bike-icon-01.svg"
                              alt="img"
                          /></span>
                          <p>{{item.Break}}</p>
                        </li>
                        <li>
                          <span
                            ><img
                              src="@/assets/img/icons/bike-icon-02.svg"
                              alt="img"
                          /></span>
                          <p>{{ item.Speed }}</p>
                        </li>
                        <li>
                          <span
                            ><img
                              src="@/assets/img/icons/bike-icon-03.svg"
                              alt="img"
                          /></span>
                          <p>{{item.Liquid}}</p>
                        </li>
                        <li>
                          <span
                            ><img
                              src="@/assets/img/icons/bike-icon-04.svg"
                              alt="img"
                          /></span>
                          <p>{{item.Tyer}}</p>
                        </li>
                      </ul>
                    </div>
                    <div class="listing-button">
                      <div class="listing-price">
                        <h6>{{item.Price}} <span>/ Day</span></h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="javascript:void(0)" class="fav-icon" @click="toggleSelected(item)"
                            :class="{ selected: item.isSelected }">
                          <i class="feather-heart"></i>
                        </a>
                        <router-link
                          to="/listing/listing-details"
                          class="btn btn-order"
                          >Book Now</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <template #addons> </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Recommended Section -->
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import Recommended from "@/assets/json/index-three-recommended.json";
import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      Recommended: Recommended,
      isSelected: false,
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
          itemsToShow: 2,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide
  },
  methods: {
    toggleSelected(item) {
      item.isSelected = !item.isSelected;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/bike/${imageName}`, import.meta.url).href;
    },
  },
};
</script>