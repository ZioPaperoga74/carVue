<template>
  <div class="row">
   <!-- col -->
   <div
      class="col-lg-4 col-md-6 col-12"
      v-for="item in Honda"
      :key="item.id"
      data-aos="fade-down"
    >
      <div class="listing-item">
        <div class="listing-img">   
          <router-link to="/listing/listing-details" v-if="item.Slider.length === 1">
            <img  :src="getImageUrl(item.Slider[0].Image)" class="img-fluid" alt="Audi">
          </router-link>       
          <div class="img-slider owl-carousel" v-else>
            <Carousel
              :wrap-around="true"
              :settings="settings"
              :breakpoints="breakpoints"
            >
              <Slide v-for="slideItem in item.Slider" :key="slideItem.id">
                <!-- Display only the first image from the Slider array -->
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
                <Navigation />
                <Pagination />
              </template>
            </Carousel>
          </div>          
          <div class="fav-item justify-content-end" v-if="item.Slider.length > 1">
            <span class="img-count"><i class="feather-image"></i>04</span>
            <a href="javascript:void(0)" class="fav-icon" @click="toggleSelected(item)"
              :class="{ selected: item.isSelected }">
              <i class="feather-heart"></i>
            </a>
          </div>
          <div class="fav-item justify-content-end" v-else>
            <a href="javascript:void(0)" class="fav-icon" @click="toggleSelected(item)"
              :class="{ selected: item.isSelected }">
              <i class="feather-heart"></i>
            </a>
          </div>
          <span class="featured-text">{{item.Cars}}</span>
        </div>
        <div class="listing-content">
          <div
            class="listing-features d-flex align-items-end justify-content-between"
          >
            <div class="list-rating">
              <a href="javascript:void(0)" class="author-img">
                <img :src="getImageUrlOne(item.Avatar)" alt="author" />
              </a>
              <h3 class="listing-title">
                <router-link to="/listing/listing-details"
                  >{{item.Title}}</router-link
                >
              </h3>
              <div class="list-rating">
                <i class="fas fa-star filled me-1"></i>
                <i class="fas fa-star filled me-1"></i>
                <i class="fas fa-star filled me-1"></i>
                <i class="fas fa-star filled me-1"></i>
                <i class="fas fa-star"></i>
                <span>{{item.Reviews}}</span>
              </div>
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
                  ><img :src="getImageUrlTwo(item.Gear)" alt="Auto"
                /></span>
                <p>{{item.Drive}}</p>
              </li>
              <li>
                <span
                  ><img src="@/assets/img/icons/car-parts-02.svg" alt="10 KM"
                /></span>
                <p>{{item.KM}}</p>
              </li>
              <li>
                <span
                  ><img src="@/assets/img/icons/car-parts-03.svg" alt="Petrol"
                /></span>
                <p>{{item.liquid}}</p>
              </li>
            </ul>
            <ul>
              <li>
                <span
                  ><img src="@/assets/img/icons/car-parts-04.svg" alt="Power"
                /></span>
                <p>{{item.Steering}}</p>
              </li>
              <li>
                <span
                  ><img src="@/assets/img/icons/car-parts-05.svg" alt="2018"
                /></span>
                <p>{{item.Engine}}</p>
              </li>
              <li>
                <span
                  ><img src="@/assets/img/icons/car-parts-06.svg" alt="Persons"
                /></span>
                <p>{{item.Seat}}</p>
              </li>
            </ul>
          </div>
          <div class="listing-location-details">
            <div class="listing-price">
              <span><i class="feather-map-pin"></i></span>{{item.Location}}
            </div>
            <div class="listing-price">
              <h6>{{item.Price}} <span>/ Day</span></h6>
            </div>
          </div>
          <div class="listing-button">
            <router-link to="/listing/listing-details" class="btn btn-order"
              ><span><i class="feather-calendar me-2"></i></span>Rent
              Now</router-link
            >
          </div>
        </div>
        <div :class="item.BadgeClass">
          <span :class="item.BadgeBgClass">{{item.Badge}}</span>
        </div>
      </div>
    </div>
    <!-- /col -->
  </div>
</template>

<script>
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import Honda from "@/assets/json/index-honda.json";
import "vue3-carousel/dist/carousel.css";
export default {
  data() {
    return {
      Honda: Honda,
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
    Navigation,
  },
  methods: {
    toggleSelected(item) {
      item.isSelected = !item.isSelected;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/cars/${imageName}`, import.meta.url).href;
    },
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
    },
    getImageUrlTwo(imageName) {
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
