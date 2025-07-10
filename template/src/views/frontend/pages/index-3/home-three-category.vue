<template>
  <!-- Category  Section -->
  <section class="section category-section">
    <div class="category-bg">
      <img
        src="@/assets/img/bg/category-bg.png"
        class="img-fluid shape-01"
        alt="image"
      />
      <img
        src="@/assets/img/bg/ban-bg-05.png"
        class="img-fluid shape-02"
        alt="image"
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- Heading title-->
          <div class="section-heading heading-three" data-aos="fade-down">
            <h2>Popular Bike <span>Categories</span></h2>
            <p>
              Most popular worldwide Category due to their reliability,
              affordability, and features.
            </p>
          </div>
          <!-- /Heading title -->

          <!-- Category List -->
          <div class="bike-category-slider nav-center owl-carousel">
            <Carousel
              :wrap-around="true"
              :settings="settings"
              :breakpoints="breakpoints"
            >
              <Slide v-for="item in Category" :key="item.id">
                <div class="item">
                  <a href="javascript:void(0);" class="category-wrap">
                    <span class="category-img">
                      <img
                        :src="getImageUrl(item.Image)"
                        class="img-fluid"
                        alt="image"
                      />
                    </span>
                    <h6>{{item.Vehicle}}</h6>
                    <p>{{item.Bikes}}</p>
                  </a>
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
          <!-- /Category List -->

          <div class="view-all-btn text-center aos" data-aos="fade-down">
            <router-link to="/listing/listing-grid" class="btn btn-secondary"
              >View all Categories</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Category  Section -->
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Category from '@/assets/json/index-three-category.json'
export default {
  data() {
    return {
      Category: Category,
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
          itemsToShow: 4,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 4,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 6,
          snapAlign: "start",
        },
      },
    }
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
    },
  },
}
</script>