<template>
  <!-- Popular Section -->
  <section class="section popular-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- Heading title-->
          <div
            class="section-heading heading-three mx-auto"
            data-aos="fade-down"
          >
            <h2>Most Popular <span>Bikes</span></h2>
            <p>
              Here's a list of some of the most popular Bikes globally, based on
              sales and customer preferences
            </p>
          </div>
          <!-- /Heading title -->
          <div class="row">
            <div class="col-lg-6" v-for="item in Popular" :key="item.id">
              <div class="listing-item bike-list">
                <div class="listing-img">
                  <div class="img-slider owl-carousel">
                    <Carousel
                      :wrap-around="true"
                      :settings="settings"
                      :breakpoints="breakpoints"
                    >
                      <Slide
                        v-for="slideItem in item.Slider"
                        :key="slideItem.id"
                      >
                        <!-- Display only the first image from the Slider array -->
                        <div class="slide-images">
                          <router-link to="/listing/listing-details">
                            <img
                              :src="getImageUrl(slideItem.Image)"
                              class="img-fluid"
                              alt="img"
                            />
                          </router-link>
                        </div>
                      </Slide>
                      <template #addons>
                        <Navigation />
                        <Pagination />
                      </template>
                    </Carousel>
                  </div>
                  <div class="fav-item justify-content-start">
                    <a href="javascript:void(0)" class="author-img">
                      <img
                        :src="getImageUrlOne(item.Avatar)"
                        alt="author"
                      />
                    </a>
                  </div>
                </div>
                <div class="listing-content">
                  <div class="listing-features d-flex justify-content-between">
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
                        <router-link to="/listing/listing-details">{{item.Bike}}</router-link>
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
                        <p>{{item.Speed}}</p>
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
                      <h6>{{ item.Price }} <span>/ Day</span></h6>
                    </div>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0)" class="fav-icon" @click="toggleSelected(item)"
                            :class="{ 'selected': item.isSelected }">
                        <i class="feather-heart"></i>
                      </a>
                      <router-link to="/listing/listing-details" class="btn btn-order"
                        >Book Now</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bike-bg">
      <img src="@/assets/img/bg/bike-bg.png" class="img-fluid" alt="img" />
    </div>
  </section>
  <!-- /Popular Section -->
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Popular from "@/assets/json/index-three-popular.json";
export default {
  data() {
    return {
      Popular: Popular,
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
    Pagination,
  },
  methods: {
    toggleSelected(item) {
      item.isSelected = !item.isSelected;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/bike/${imageName}`, import.meta.url).href;
    },
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
    },
  },
};
</script>