<template>
  <!-- Pricing Plan -->
  <!-- add pricing-section to classes for top margin -->
  <section class="pricing-page pricing-section-bottom">
    <!-- <div class="container"> -->
    <!-- Heading title-->
    <!-- <div class="section-heading" data-aos="fade-down">
        <h2>Transparent Pricing For you</h2>
        <p>Choose a package that suits you</p>
      </div> -->
    <!-- /Heading title -->

    <!-- Plan Selected -->
    <!-- <div class="plan-selected" data-aos="fade-down">
        <h4>Monthly</h4>
        <div class="status-toggle me-2 ms-2">
          <input
            id="list-rating_1"
            class="px-4 check"
            type="checkbox"
            checked
          />
          <label for="list-rating_1" class="px-4 checktoggle checkbox-bg"
            >checkbox</label
          >
        </div>
        <h4>Annually</h4>
      </div> -->
    <!-- /Plan Selected -->
    <!-- <div class="row">
        <div class="col-lg-3 d-flex col-md-6 col-12" data-aos="fade-down">
          <div class="price-card price-selected flex-fill">
            <div class="price-head">
              <h2>Save more with Good Plans</h2>
              <p>
                Choose a plan and get onboard in Minutes, then get $100 with
                next payment
              </p>
            </div>
            <div class="price-body">
              <img
                class="img-fluid"
                src="@/assets/img/price-plan.png"
                alt="Price Plan"
              />
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 d-flex col-md-6 col-12"
          v-for="item in HomePricing"
          :key="item.id"
          data-aos="fade-down"
        >
          <div class="price-card flex-fill">
            <div class="price-head">
              <div :class="item.BadgeClass">
                <h6>{{ item.Title }}</h6>
                <p>{{ item.Text }}</p>
              </div>
              <h4>{{ item.Price }}</h4>
              <span>{{ item.Content }}</span>
            </div>
            <div class="price-details">
              <ul>
                <li class="price-check">
                  <span><i class="fa-regular fa-circle-check"></i></span>50%
                  Downpayment
                </li>
                <li class="price-check">
                  <span><i class="fa-regular fa-circle-check"></i></span
                  >Insurance not Included
                </li>
                <li class="price-check">
                  <span><i class="fa-regular fa-circle-check"></i></span
                  >Doorstep delivery
                </li>
                <li :class="item.FourClass">
                  <span><i :class="item.FourIcon"></i></span>Safe & Sanitized
                </li>
                <li :class="item.FiveClass">
                  <span><i :class="item.FiveIcon"></i></span>No Long term
                  Commitment
                </li>
                <li :class="item.SixClass">
                  <span><i :class="item.SixIcon"></i></span>Refundable deposit
                  has to pay
                </li>
                <li :class="item.SevenClass">
                  <span><i :class="item.SevenIcon"></i></span>No Flexible timing
                  & extension
                </li>
              </ul>
              <router-link to="/home/index-2" :class="item.DemoClass"
                >Buy Package</router-link
              >
            </div>
          </div>
        </div>
      </div> -->

    <!-- App Available -->
    <!-- <div class="user-app-group">
        <div class="app-left">
          <img
            src="@/assets/img/bg/app-left.png"
            class="img-fluid"
            alt="App Available"
          />
        </div>
        <div class="app-right">
          <img
            src="@/assets/img/bg/app-right.png"
            class="img-fluid"
            alt="App Available"
          />
        </div>
        <div class="row">
          <div class="col-lg-7">
            <div class="userapp-heading">
              <h2 data-aos="fade-down">
                Dreamsrental User Friendly App Available
              </h2>
              <p data-aos="fade-down">
                Appropriately monetize one-to-one interfaces rather than
                cutting-edge Competently disinte rmediate backward.
              </p>
              <div class="download-btn">
                <div class="app-avilable" data-aos="fade-down">
                  <a href="javascript:void(0)"
                    ><img src="@/assets/img/play-store.svg" alt="PlayStore"
                  /></a>
                </div>
                <div class="app-avilable" data-aos="fade-down">
                  <a href="javascript:void(0)"
                    ><img src="@/assets/img/apple.svg" alt="AppStore"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 d-none d-lg-block">
            <div class="car-holder">
              <img
                class="app-car img-fluid"
                src="@/assets/img/app-car.png"
                alt="App Available"
                data-aos="fade-down"
              />
            </div>
          </div>
        </div>
      </div> -->
    <!-- /App Available -->
    <!-- </div> -->
  </section>
  <!-- /Pricing Plan -->
</template>

<script>
import HomePricing from "@/assets/json/home-pricing.json";
export default {
  data() {
    return {
      HomePricing: HomePricing,
    };
  },
};
</script>
