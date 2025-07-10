<template>
  <!-- Choose Us Section -->
  <section class="section choose-us-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <!-- Heading title-->
          <div class="section-heading heading-three" data-aos="fade-down">
            <h2>Why People love to use <span>Dreams Rent</span></h2>
            <p>
              Using Dreams Rent for bike rentals because it offers quality
              bikes, convenience, flexibility, affordability, excellent customer
              service & a commitment to community engagement & sustainability.
            </p>
          </div>
          <!-- /Heading title -->
          <div class="row">
            <div class="col-md-6">
              <div class="quality-wrap" data-aos="fade-down">
                <span>
                  <i class="bx bxs-bookmarks"></i>
                </span>
                <h6>Quality Bikes</h6>
                <p>
                  Dreams Rent offers a fleet of high-quality bikes, that
                  including mountain bikes, road bikes, city bikes.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="quality-wrap" data-aos="fade-down">
                <span>
                  <i class="bx bxs-bolt-circle"></i>
                </span>
                <h6>Variety of Options</h6>
                <p>
                  Whether customers are looking for bikes for leisurely rides,
                  commuting, or adventure cycling.--
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="quality-wrap" data-aos="fade-down">
                <span>
                  <i class="bx bxs-calendar-heart"></i>
                </span>
                <h6>Flexible Rental Periods</h6>
                <p>
                  Customers appreciate the flexibility of choosing rental
                  durations that suit their schedules.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="quality-wrap" data-aos="fade-down">
                <span>
                  <i class="bx bxs-badge-dollar"></i>
                </span>
                <h6>Affordable Pricing</h6>
                <p>
                  Dreams Rent offers competitive pricing for bike rentals,
                  making cycling accessible to a wide range of people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="quality-img">
      <img
        src="@/assets/img/quality-img.png"
        data-aos="fade-left"
        class="img-fluid"
        alt="img"
      />
    </div>
    <div class="quality-bg">
      <img src="@/assets/img/bg/quality-bg.png" class="img-fluid" alt="img" />
    </div>
  </section>
  <!-- /Choose Us Section -->

  <!-- Works Section -->
  <section class="section work-section">
    <div class="work-bg">
      <img
        src="@/assets/img/bg/ban-bg-01.png"
        class="shape-01 img-fluid"
        alt="img"
      />
      <img
        src="@/assets/img/bg/ban-bg-03.png"
        class="shape-02 img-fluid"
        alt="img"
      />
    </div>
    <div class="container">
      <!-- Heading title-->
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading heading-three" data-aos="fade-down">
            <h2>How Dreams rent <span>Works</span></h2>
            <p>Here's a basic outline of how our bike rental typically Works</p>
          </div>
        </div>
      </div>
      <!-- /Heading title -->

      <div class="work-wrapper">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 col-12 d-flex" data-aos="fade-down">
            <div class="work-card flex-fill">
              <div class="work-head">
                <span class="num-icon">01</span>
                <div class="work-icon">
                  <i class="bx bxs-been-here"></i>
                </div>
              </div>
              <div class="work-content">
                <h5>Select Pickup/ Delivery Date & Location</h5>
                <p>
                  Determine the date & location for your Bike rental. Consider
                  factors such as your travel itinerary, pickup/drop-off
                  locations.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 d-flex" data-aos="fade-down">
            <div class="work-card flex-fill">
              <div class="work-head">
                <span class="num-icon">02</span>
                <div class="work-icon bg-secondary1">
                  <i class="bx bx-current-location"></i>
                </div>
              </div>
              <div class="work-content">
                <h5>Reserve your Bike</h5>
                <p>
                  Check the availability of your desired vehicle type for your
                  chosen dates and location. Ensure that the rental rates.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 d-flex" data-aos="fade-down">
            <div class="work-card flex-fill">
              <div class="work-head">
                <span class="num-icon">03</span>
                <div class="work-icon">
                  <i class="bx bx-like"></i>
                </div>
              </div>
              <div class="work-content">
                <h5>Enjoy Your Ride</h5>
                <p>
                  Check the availability of your desired vehicle type for your
                  chosen dates and location. Ensure that the rental rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Brand Slider -->
      <div class="row">
        <div class="col-md-12">
          <div class="brand-sec">
            <div class="section-heading heading-three" data-aos="fade-down">
              <p>Bikes from popular Brands around the world</p>
            </div>
            <div class="brand-slider owl-carousel">
              <Carousel
                :wrap-around="true"
                :settings="settings"
                :breakpoints="breakpoints"
              >
                <Slide v-for="item in Brand" :key="item.id">
                  <div class="brand-item">
                    <img
                      :src="getImageUrl(item.Image)"
                      class="img-fluid"
                      alt="brand"
                    />
                  </div>
                </Slide>
                <template #addons>
                </template>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <!-- /Brand Slider -->
    </div>
  </section>
  <!-- /Works Section -->
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import Brand from "@/assets/json/index-three-brand.json";
import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      Brand: Brand,
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
          itemsToShow: 5,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 7,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/brand/${imageName}`, import.meta.url).href;
    },
  },
};
</script>