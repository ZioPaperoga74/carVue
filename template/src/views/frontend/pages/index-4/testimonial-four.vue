<template>
  <section class="testimonial-section">
    <div class="container">
      <div class="section-heading heading-four" data-aos="fade-down">
        <h2>Our Clients Feedback</h2>
        <p>Provided by customers about their experience with a product or service.</p>
      </div>

      <div class="row row-gap-4 justify-content-center">
        <!-- Testimonial Item -->
        <div class="col-lg-4 col-md-6 d-flex">
          <div class="testimonial-item testimonial-item-two flex-fill">
            <div class="user-img">
              <img
                src="@/assets/img/profiles/avatar-02.jpg"
                class="img-fluid"
                alt="img"
              />
            </div>
            <p>
              Renting a car from Dreams rent made my vacation so much smoother! The
              process was quick
            </p>
            <div class="rating">
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
            </div>
            <div class="user-info">
              <h6>Kyle Roberts DVM</h6>
              <p>Newyork, USA</p>
            </div>
          </div>
        </div>
        <!-- /Testimonial Item -->

        <!-- Testimonial Item -->
        <div class="col-lg-4 col-md-6 d-flex">
          <div class="testimonial-item testimonial-item-two flex-fill">
            <div class="user-img">
              <img
                src="@/assets/img/profiles/avatar-18.jpg"
                class="img-fluid"
                alt="img"
              />
            </div>
            <p>
              Their wide selection of vehicles, convenient locations, and competitive
              prices
            </p>
            <div class="rating">
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
            </div>
            <div class="user-info">
              <h6>Hardley Vanessa</h6>
              <p>Newyork, USA</p>
            </div>
          </div>
        </div>
        <!-- /Testimonial Item -->

        <!-- Testimonial Item -->
        <div class="col-lg-4 col-md-6 d-flex">
          <div class="testimonial-item testimonial-item-two flex-fill">
            <div class="user-img">
              <img
                src="@/assets/img/profiles/avatar-15.jpg"
                class="img-fluid"
                alt="img"
              />
            </div>
            <p>
              The spacious SUV we rented comfortably fit our family and all our luggage
            </p>
            <div class="rating">
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
            </div>
            <div class="user-info">
              <h6>Wilson</h6>
              <p>Nevada, USA</p>
            </div>
          </div>
        </div>
        <!-- /Testimonial Item -->
      </div>

      <div class="view-all-btn text-center aos" data-aos="fade-down">
        <a href="listing-grid.html" class="btn btn-secondary"
          >View All<i class="bx bx-right-arrow-alt ms-1"></i
        ></a>
      </div>

      <div class="client-slider owl-carousel">
        <Carousel
          :wrap-around="true"
          :settings="settings"
          :breakpoints="breakpoints"
          :autoplay="3000"
        >
          <Slide v-for="item in testimonialFour" :key="item.id">
            <div>
              <img :src="getImageUrl(item.Image)" alt="img" />
            </div>
          </Slide>
          <template #addons> </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import testimonialFour from "@/assets/json/testimonial-four.json";
import "vue3-carousel/dist/carousel.css";
export default {
  data() {
    return {
      testimonialFour: testimonialFour,
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
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 5,
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
      return new URL(`/src/assets/img/clients/${imageName}`, import.meta.url).href;
    },
  }
};
</script>
