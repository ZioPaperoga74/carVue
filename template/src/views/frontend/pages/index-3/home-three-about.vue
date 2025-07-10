<template>
  <!-- About us Testimonials -->
  <section class="section testimonials-three">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="testimonial-feedback">
            <!-- Heading title-->
            <div class="section-heading heading-three" data-aos="fade-down">
              <h2 class="title">What Our <br /><span>Customers Say</span></h2>
            </div>
            <!-- /Heading title -->

            <img
              src="@/assets/img/testimonial-img.jpg"
              alt="img"
              class="img-fluid"
            />
            <div class="feedback-item">
              <div class="feedback-info">
                <h6>Great</h6>
                <div class="rate-icon">
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                </div>
                <p>Based on 5,801 Reviews</p>
              </div>
              <div class="feedback-user">
                <h3><i class="bx bxs-star"></i>Trustpilot</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="testimonial-wrapper">
            <div class="testimonial-slider">
              <Carousel
                :wrap-around="true"
                :settings="settings"
                :breakpoints="breakpoints"
              >
                <Slide v-for="item in About" :key="item.id">
                  <div class="testimonial-wrap">
                    <div class="users-info">
                      <div class="testimonial-name">
                        <h6>{{item.Name}}</h6>
                        <p>{{item.Country}}</p>
                      </div>
                      <div class="users-rating">
                        <div class="rate-icon">
                          <span><i class="bx bxs-star"></i></span>
                          <span><i class="bx bxs-star"></i></span>
                          <span><i class="bx bxs-star"></i></span>
                          <span><i class="bx bxs-star"></i></span>
                          <span><i class="bx bxs-star"></i></span>
                        </div>
                        <p><i class="bx bxs-check-circle"></i>Verified</p>
                      </div>
                    </div>
                    <div class="testimonial-content text-start">
                      <h3>“ {{item.Title}} “</h3>
                      <p>
                        {{item.Content}}
                      </p>
                    </div>
                  </div>
                </Slide>
                <template #addons>
                </template>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="testimonial-bg">
      <img
        class="img-fluid shape-01"
        src="@/assets/img/bg/ban-bg-04.png"
        alt="Image"
      />
      <img
        src="@/assets/img/bg/ban-bg-01.png"
        class="img-fluid shape-02"
        alt="img"
      />
    </div>
  </section>
  <!-- About us Testimonials -->
</template>


<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import About from "@/assets/json/index-three-about.json";

export default {
  data() {
    return {
      About: About,
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
    Slide
  },
};
</script>