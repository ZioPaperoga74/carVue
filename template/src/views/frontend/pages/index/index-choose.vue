<template>
  <!-- Why Choose Us -->
  <section class="section why-choose popular-explore">
    <div class="choose-left">
      <img
        src="@/assets/img/bg/choose-left.png"
        class="img-fluid"
        alt="Why Choose Us"
      />
    </div>
    <div class="container">
      <!-- Heading title-->
      <div class="section-heading" data-aos="fade-down">
        <h2>Perche affidarti a noi?</h2>
        <p>
          Siamo esperti nel settore e mettiamo passione in ogni auto che
          vendiamo.
        </p>
      </div>
      <!-- /Heading title -->
      <div class="why-choose-group">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-12 d-flex"
            v-for="item in Choose"
            :key="item.id"
            data-aos="fade-down"
          >
            <div class="card flex-fill">
              <div class="card-body">
                <div :class="item.Class">
                  <img :src="getImageUrl(item.Image)" alt="" />
                </div>
                <div class="choose-content">
                  <h4>{{ item.Title }}</h4>
                  <p>
                    {{ item.Content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Why Choose Us -->

  <!-- About us Testimonials -->
  <section class="section about-testimonial testimonials-section">
    <div class="container">
      <!-- Heading title-->
      <div class="section-heading" data-aos="fade-down">
        <h2 class="title text-white">Le nostre recensioni</h2>
        <p class="description text-white">
          Scopri cosa hanno da dire su di noi i nostri clienti.
        </p>
      </div>
      <!-- /Heading title -->
      <div
        class="owl-carousel about-testimonials testimonial-group mb-0 owl-theme"
      >
        <!-- Carousel Item -->

        <Carousel
          :wrap-around="true"
          :settings="settings"
          :breakpoints="breakpoints"
        >
          <Slide v-for="item in Testimonials" :key="item.id">
            <div class="testimonial-item d-flex">
              <div class="card flex-fill">
                <div class="card-body">
                  <div class="quotes-head"></div>
                  <div class="review-box">
                    <div class="review-profile">
                      <div class="review-img">
                        <img
                          :src="getImageUrlOne(item.Image)"
                          class="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div class="review-details">
                      <h6>{{ item.Name }}</h6>
                      <div class="list-rating">
                        <div class="list-rating-star">
                          <i class="fas fa-star filled me-1"></i>
                          <i class="fas fa-star filled me-1"></i>
                          <i class="fas fa-star filled me-1"></i>
                          <i class="fas fa-star filled me-1"></i>
                          <i class="fas fa-star filled"></i>
                        </div>
                        <p><span>(5.0)</span></p>
                      </div>
                    </div>
                  </div>
                  <p>
                    {{ item.Content }}
                  </p>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
        <!-- /Carousel Item  -->
      </div>
    </div>
  </section>
  <!-- About us Testimonials -->
</template>

<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Choose from "@/assets/json/index-choose.json";
import Testimonials from "@/assets/json/index-testimonials.json";
export default {
  data() {
    return {
      Choose: Choose,
      Testimonials: Testimonials,
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
          itemsToShow: 3,
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
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url)
        .href;
    },
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url)
        .href;
    },
  },
};
</script>
