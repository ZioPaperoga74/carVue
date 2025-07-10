<template>
  <!-- Featured Services -->
  <section class="section features-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- Heading title-->
          <div
            class="section-heading heading-three mx-auto"
            data-aos="fade-down"
          >
            <h2>Featured & <span>Top Rated Bikes</span></h2>
            <p>
              Here's a list of some of the most popular Bikes globally, based on
              sales and customer preferences
            </p>
          </div>
          <!-- /Heading title -->
          <div class="bike-feature-slider nav-center owl-carousel">
            <Carousel
              :wrap-around="true"
              :settings="settings"
              :breakpoints="breakpoints"
            >
              <Slide v-for="item in Featured" :key="item.id">
                <div class="item">
                  <div class="listing-item bike-list">
                    <div class="listing-img">
                      <div class="image-slider owl-carousel">
                        <Carousel
                          :wrap-around="true"
                          :settingsOne="settingsOne"
                          :breakpointsOne="breakpointsOne"
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
                      <div class="fav-item justify-content-end">
                        <span class="img-count"
                          ><i class="feather-image"></i>04</span
                        >
                        <a href="javascript:void(0)" class="author-img">
                          <img
                            :src="getImageUrlOne(item.Avatar)"
                            alt="author"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="listing-content text-start">
                      <div
                        class="listing-features d-flex align-items-center justify-content-between"
                      >
                        <div class="list-rating">
                          <div class="list-ratings">
                            <i class="fas fa-star filled me-1"></i>
                            <i class="fas fa-star filled me-1"></i>
                            <i class="fas fa-star filled me-1"></i>
                            <i class="fas fa-star filled me-1"></i>
                            <i class="fas fa-star"></i>
                            <span>{{ item.Reviews }}</span>
                          </div>
                          <h3 class="listing-title">
                            <router-link to="/listing/listing-details">{{
                              item.Name
                            }}</router-link>
                          </h3>
                        </div>
                        <div class="list-km">
                          <span class="km-count"
                            ><img
                              src="@/assets/img/icons/map-pin.svg"
                              alt="author"
                            />{{ item.MapPin }}</span
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
                            <p>{{ item.Break }}</p>
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
                            <p>{{ item.Liquid }}</p>
                          </li>
                          <li>
                            <span
                              ><img
                                src="@/assets/img/icons/bike-icon-04.svg"
                                alt="img"
                            /></span>
                            <p>{{ item.Tyer }}</p>
                          </li>
                        </ul>
                      </div>
                      <div class="listing-button">
                        <div class="listing-price">
                          <h6>{{ item.Price }}<span>/ Day</span></h6>
                        </div>
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0)"
                            class="fav-icon"
                            @click="toggleSelected(item)"
                            :class="{ selected: item.isSelected }"
                          >
                            <i class="feather-heart"></i>
                          </a>
                          <router-link
                            to="/listing/listing-details"
                            class="btn btn-order"
                            >Book Now</router-link
                          >
                        </div>
                      </div>
                      <div :class="item.BadgeClass">
                        <span :class="item.BadgeBgClass">{{ item.Badge }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>

          <div class="view-all-btn text-center aos" data-aos="fade-down">
            <router-link to="/listing/listing-grid" class="btn btn-secondary"
              >View all Bikes</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="feature-bg">
      <img
        src="@/assets/img/bg/destination-bg-01.png"
        class="img-fluid shape-01"
        alt="img"
      />
      <img
        src="@/assets/img/bg/feature-bg.png"
        class="img-fluid shape-02"
        alt="img"
      />
    </div>
  </section>
  <!-- /Featured Services -->
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import Featured from "@/assets/json/index-three-featured.json";
import "vue3-carousel/dist/carousel.css";
export default {
  data() {
    return {
      Featured: Featured,
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
      settingsOne: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpointsOne: {
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
