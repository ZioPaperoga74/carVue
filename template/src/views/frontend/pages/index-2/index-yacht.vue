<template>
  <section class="yacht-offer-sec">
    <div class="sec-bg">
      <img src="@/assets/img/bg/sec-bg-wave.png" class="wave-bottom" alt="Bg" />
    </div>
    <div class="container">
      <div class="section-header-two">
        <h2>Yacht - Last Minute Offers!</h2>
        <p>
          Most popular worldwide Category due to their reliability, affordability, and
          features.
        </p>
      </div>
      <div class="yacht-list-cards">
        <div class="row">
          <div class="col-xl-6" v-for="item in Index_Yacht" :key="item.id">
            <div class="top-rated-card">
              <div class="rated-yacht-img slide-card-images">
                <div class="yacht-image-slider owl-carousel">
                  <Carousel
                    :wrap-around="true"
                    :settings="settings"
                    :breakpoints="breakpoints"
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
              </div>
              <div class="rated-yacht-content">
                <div class="yacht-content-head">
                  <div class="head-items-left">
                    <h4>
                      <router-link to="/listing/listing-details">{{
                        item.Badge
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
                        People <span> : {{ item.People }}</span>
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
                    <router-link to="/listing/listing-details" class="btn btn-secondary"
                      >Book Now</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="view-more-btn text-center">
              <router-link to="/listing/listing-grid" class="btn btn-secondary"
                >View all Yachts</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import Index_Yacht from "@/assets/json/index-yacht.json";
import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      Index_Yacht: Index_Yacht,
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
          itemsToShow: 1,
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
