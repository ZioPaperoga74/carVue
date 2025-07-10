<template>
  <!-- Car Section -->
  <section class="car-section">
    <div class="container">
      <div class="section-heading heading-four" data-aos="fade-down">
        <h2>Explore Most Popular Cars</h2>
        <p>Here's a list of some of the most popular cars globally</p>
      </div>

      <div class="row">
        <!-- Car List -->
        <div
          class="col-lg-4 col-md-6"
          v-for="item in carFour"
          :key="item.id"
          data-aos="fade-down"
        >
          <div class="listing-item listing-item-two">
            <div class="listing-img">
              <router-link to="/listing/listing-details" v-if="item.Slider.length === 1">
                <img
                  :src="getImageUrl(item.Slider[0].Image)"
                  class="img-fluid"
                  alt="Toyota"
                />
              </router-link>
              <div class="img-slider owl-carousel" v-else>
                <Carousel
                  :wrap-around="true"
                  :settings="settings"
                  :breakpoints="breakpoints"
                >
                  <Slide v-for="slideItem in item.Slider" :key="slideItem.id">
                    <div class="slide-images">
                      <router-link to="/listing/listing-details">
                        <img
                          :src="getImageUrl(slideItem.Image)"
                          class="img-fluid"
                          alt="Toyota"
                        />
                      </router-link>
                    </div>
                  </Slide>
                  <template #addons>
                    <Pagination />
                  </template>
                </Carousel>
              </div>
              <div class="fav-item">
                <div class="d-flex align-items-center gap-2">
                  <span class="featured-text">Toyota</span>
                  <span class="availability">Available</span>
                </div>
                <a href="javascript:void(0)" class="fav-icon selected">
                  <i class="feather-heart"></i>
                </a>
              </div>
              <span class="location"
                ><i class="bx bx-map me-1"></i>{{ item.Location }}</span
              >
            </div>
            <div class="listing-content">
              <div
                class="listing-features d-flex align-items-center justify-content-between"
              >
                <div class="list-rating">
                  <h3 class="listing-title">
                    <router-link to="/listing/listing-details">{{
                      item.Name
                    }}</router-link>
                  </h3>
                  <div class="list-rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                    <span>{{ item.Reviews }}</span>
                  </div>
                </div>
                <div>
                  <h4 class="price">{{ item.Day }} <span>/ Day</span></h4>
                </div>
              </div>
              <div class="listing-details-group">
                <ul>
                  <li>
                    <img src="@/assets/img/icons/car-parts-01.svg" alt="Auto" />
                    <p>{{ item.Drive }}</p>
                  </li>
                  <li>
                    <img src="@/assets/img/icons/car-parts-02.svg" alt="10 KM" />
                    <p>{{ item.Km }}</p>
                  </li>
                  <li>
                    <img src="@/assets/img/icons/car-parts-03.svg" alt="Petrol" />
                    <p>{{ item.Fuel }}</p>
                  </li>
                  <li>
                    <img src="@/assets/img/icons/car-parts-05.svg" alt="2018" />
                    <p>{{ item.Year }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- /Car List -->
      </div>

      <div class="view-all-btn text-center aos" data-aos="fade-down">
        <router-link
          to="/listing/listing-grid"
          class="btn btn-secondary d-inline-flex align-items-center"
          >View More Cars<i class="bx bx-right-arrow-alt ms-1"></i
        ></router-link>
      </div>
    </div>
  </section>
  <!-- /Car Section -->
</template>
<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import carFour from "@/assets/json/car-four.json";
import "vue3-carousel/dist/carousel.css";
export default {
  data() {
    return {
      carFour: carFour,
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
          snapAlign: "center",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/cars/${imageName}`, import.meta.url).href;
    },
  }
};
</script>
