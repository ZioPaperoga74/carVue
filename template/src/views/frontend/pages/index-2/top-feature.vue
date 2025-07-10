<template>
  <!-- Top Feature Yacht -->

  <section class="top-features-yachts">
    <div class="sec-bg">
      <img src="@/assets/img/bg/yacht-cat-sec-bg-01.png" class="anchor-img" alt="Img" />
      <img src="@/assets/img/bg/yacht-cat-sec-bg-03.png" class="design-round" alt="Img" />
      <img src="@/assets/img/bg/ship-part-bg-01.png" alt="Bg" />
    </div>
    <div class="container">
      <div class="sec-title">
        <h4>Select From Professional Charter Companies</h4>
      </div>
      <charter-company></charter-company>
      <div class="top-rated-yachts">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="section-header-two">
              <h2>Featured & Top Rated Yachts</h2>
              <p>
                A premier collection of exceptional luxury yachts, professionally staffed
                and privately owned, yet available for you to experience as your own.
              </p>
              <div class="owl-nav slide-nav-1 nav-control"></div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="top-rated-yachts-slider owl-carousel">
              <Carousel
                :wrap-around="true"
                :settings="settings"
                :breakpoints="breakpoints"
              >
                <Slide v-for="item in Top_Feature" :key="item.id">
                  <div class="top-rated-card">
                    <div class="rated-yacht-img slide-card-images">
                      <div class="image-slider owl-carousel">
                        <Carousel
                          :wrap-around="true"
                          :settingsOne="settingsOne"
                          :breakpointsOne="breakpointsOne"
                        >
                          <Slide v-for="slideItem in item.Slider" :key="slideItem.id">
                            <div class="slide-images">
                              <router-link to="/listing/listing-details">
                                <img
                                  :src="getImageUrl(slideItem.Img)"
                                  class="img-fluid"
                                  alt="img"
                                />
                              </router-link>
                            </div>
                          </Slide>
                          <template #addons>
                            <Pagination />
                            <Navigation />
                          </template>
                        </Carousel>
                      </div>
                      <div class="img-top-ribbon">
                        <span :class="item.BadgeIcon">{{ item.Badge }}</span>
                      </div>
                    </div>
                    <div class="rated-yacht-content">
                      <div class="yacht-content-head text-start">
                        <div class="head-items-left">
                          <h4>
                            <router-link to="/listing/listing-details">{{
                              item.Name
                            }}</router-link>
                          </h4>
                          <span class="d-flex align-items-center"
                            ><i class="bx bx-map me-2"></i>{{ item.Location }}</span
                          >
                        </div>
                        <div class="head-items-right">
                          <div class="rated-star">
                            <i class="bx bxs-star filled"></i>
                            <i class="bx bxs-star filled"></i>
                            <i class="bx bxs-star filled"></i>
                            <i class="bx bxs-star filled"></i>
                            <i class="bx bxs-star"></i>
                          </div>
                          <span class="km-badge"
                            ><i class="bx bx-map-pin me-2"></i>{{ item.Meter }}</span
                          >
                        </div>
                      </div>
                      <div class="yacht-content-body">
                        <ul class="yacht-features-info">
                          <li>
                            <span class="yacht-feature-icon"
                              ><img
                                src="@/assets/img/icons/yacht-feature-icon-01.svg"
                                alt="Img"
                            /></span>
                            <h6>
                              People <span> :{{ item.People }}</span>
                            </h6>
                          </li>
                          <li>
                            <span class="yacht-feature-icon"
                              ><img
                                src="@/assets/img/icons/yacht-feature-icon-02.svg"
                                alt="Img"
                            /></span>
                            <h6>
                              Length <span> : {{ item.Length }}</span>
                            </h6>
                          </li>
                          <li>
                            <span class="yacht-feature-icon"
                              ><img
                                src="@/assets/img/icons/yacht-feature-icon-03.svg"
                                alt="Img"
                            /></span>
                            <h6>
                              Fuel <span> : {{ item.Fuel }}</span>
                            </h6>
                          </li>
                          <li>
                            <span class="yacht-feature-icon"
                              ><img
                                src="@/assets/img/icons/yacht-feature-icon-04.svg"
                                alt="Img"
                            /></span>
                            <h6>
                              Build <span> : {{ item.Year }}</span>
                            </h6>
                          </li>
                          <li>
                            <span class="yacht-feature-icon"
                              ><img
                                src="@/assets/img/icons/yacht-feature-icon-05.svg"
                                alt="Img"
                            /></span>
                            <h6>
                              Engine <span> : {{ item.Engine }}</span>
                            </h6>
                          </li>
                          <li>
                            <span class="yacht-feature-icon"
                              ><img
                                src="@/assets/img/icons/yacht-feature-icon-06.svg"
                                alt="Img"
                            /></span>
                            <h6>
                              Cabins <span> :{{ item.Cabins }}</span>
                            </h6>
                          </li>
                        </ul>
                      </div>
                      <div class="yacht-content-footer">
                        <p>
                          From <span>{{ item.Amount }} </span> /day
                        </p>
                        <div class="yacht-book-btn">
                          <a href="javascript:void(0);" class="yacht-user-img"
                            ><img src="@/assets/img/profiles/avatar-14.jpg" alt="Img"
                          /></a>
                          <router-link
                            to="/listing/listing-details"
                            class="btn btn-secondary"
                            >Book Now</router-link
                          >
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
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Top Feature Yacht -->
</template>
<script>
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import Top_Feature from "@/assets/json/top-feature.json";
import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      Top_Feature: Top_Feature,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        575: {
          itemsToShow: 2,
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
          itemsToShow: 2,
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
          itemsToShow: 2,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/yacht/${imageName}`, import.meta.url).href;
    },
  },

};
</script>
