<template>
  <!-- Blog Section -->
  <section class="blog-section bike-news">
    <div class="container">
      <!-- Heading title-->
      <div class="section-heading heading-three mx-auto" data-aos="fade-down">
        <h2>Contemporary news and insights <span>for you</span></h2>
        <p>Here's a hypothetical blog post about car rental services</p>
      </div>
      <!-- /Heading title -->

      <div class="row">
        <div class="col-lg-12">
          <div class="blog-slider nav-center owl-carousel">
            <!-- Blog List -->
            <Carousel
              :wrap-around="true"
              :settings="settings"
              :breakpoints="breakpoints"
            >
              <Slide v-for="item in Bolgs" :key="item.id">
                <div class="blog grid-blog">
                  <div class="blog-image">
                    <router-link to="/blog/blog-details"
                      ><img
                        class="img-fluid"
                        :src="getImageUrl(item.Image)"
                        alt="Post Image"
                    /></router-link>
                  </div>
                  <div class="blog-content text-start">
                    <h3 class="blog-title">
                      <router-link to="/blog/blog-details">{{
                        item.Title
                      }}</router-link>
                    </h3>
                    <p class="blog-description">
                      {{ item.Content }}
                    </p>
                    <div class="blog-footer">
                      <p><i class="bx bx-calendar"></i>{{ item.Day }}</p>
                      <router-link to="/blog/blog-details" class="read-more"
                        >Read More<i class="bx bx-right-arrow-alt"></i
                      ></router-link>
                    </div>
                  </div>
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
            <!-- /Blog List -->
          </div>
        </div>
      </div>
      <div
        class="view-all-btn text-center aos-init aos-animate"
        data-aos="fade-down"
      >
        <router-link to="/blog/blog-details" class="btn btn-secondary"
          >View all Blog</router-link
        >
      </div>
    </div>
  </section>
  <!-- /Blog Section -->

  <!-- Best Section -->
  <section class="section rental-section">
    <div class="container">
      <div class="rental-wrap">
        <div class="rental-content">
          <h2>We Make Finding The Right Bike Simple</h2>
          <div class="btn-item">
            <router-link to="/listing/listing-grid" class="btn btn-theme"
              >View all Bikes</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="rental-bg">
      <img
        class="img-fluid ban-bg"
        src="@/assets/img/bg/bike-bg.jpg"
        alt="Image"
      />
      <img
        class="img-fluid shape-01"
        src="@/assets/img/bg/ban-bg-05.png"
        alt="Image"
      />
      <img
        class="img-fluid shape-02"
        src="@/assets/img/bg/ban-bg-06.png"
        alt="Image"
      />
      <img
        class="img-fluid shape-03"
        src="@/assets/img/bg/shape-bg.png"
        alt="Image"
      />
      <img
        class="img-fluid shape-04"
        src="@/assets/img/bg/ban-bg-04.png"
        alt="Image"
      />
    </div>
  </section>
  <!-- /Best Section -->
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Bolgs from "@/assets/json/index-three-blog.json";

export default {
  data() {
    return {
      Bolgs: Bolgs,
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
    Slide,
    Navigation,
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/blog/${imageName}`, import.meta.url).href;
    },
  },
};
</script>