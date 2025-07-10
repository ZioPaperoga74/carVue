<template>
  <!-- Banner -->
  <section class="banner-section banner-slider">
    <div class="container">
      <div class="home-banner">
        <div class="row align-items-center">
          <div class="col-lg-7" data-aos="fade-down">
            <h1>Make your Ride Easy with <span>Dreams rent </span></h1>
            <h4>We prioritizes customer satisfaction</h4>
            <div class="banner-search">
              <form
                @submit.prevent="submitForm"
                class="form-block d-flex align-items-center"
              >
                <div class="search-input">
                  <div class="input-block">
                    <label>Any type</label>
                    <vue-select
                      :options="Anytype"
                      v-model="selected"
                      placeholder="Cruiser"
                    />
                  </div>
                </div>
                <div class="search-input">
                  <div class="input-block">
                    <label>Model</label>
                    <vue-select
                      :options="Bike"
                      v-model="selectedOne"
                      placeholder="KTM 300"
                    />
                  </div>
                </div>
                <div class="search-input">
                  <div class="input-block">
                    <label>Location</label>
                    <vue-select
                      :options="Country"
                      v-model="selectedTwo"
                      placeholder="Newyork"
                    />
                  </div>
                </div>
                <div class="search-btn">
                  <button class="btn btn-primary" type="submit">
                    <i class="bx bx-search-alt"></i>Search
                  </button>
                </div>
              </form>
            </div>
            <p>
              Experience the ultimate freedown of Dreamsrental - tailor
              adventure by choosing from Premium bikes
            </p>
            <div class="customer-list">
              <div class="users-wrap">
                <ul class="users-list">
                  <li>
                    <img
                      src="@/assets/img/profiles/avatar-11.jpg"
                      class="img-fluid aos"
                      alt="bannerimage"
                    />
                  </li>
                  <li>
                    <img
                      src="@/assets/img/profiles/avatar-15.jpg"
                      class="img-fluid aos"
                      alt="bannerimage"
                    />
                  </li>
                  <li>
                    <img
                      src="@/assets/img/profiles/avatar-03.jpg"
                      class="img-fluid aos"
                      alt="bannerimage"
                    />
                  </li>
                </ul>
                <div class="customer-info">
                  <h4>6K + Customers</h4>
                  <p>has used our renting services</p>
                </div>
              </div>
              <div class="view-all">
                <router-link
                  to="/listing/listing-grid"
                  class="btn btn-view d-inline-flex align-items-center"
                  >Rent a Bike</router-link
                >
                <router-link
                  to="/listing/listing-grid"
                  class="btn btn-secondary d-inline-flex align-items-center"
                  ><i class="bx bxs-plus-circle"></i>Add a Bike
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-image">
      <div class="banner-bg-img" data-aos="fade-left">
        <img src="@/assets/img/banner-img-01.png" class="img-fluid" alt="img" />
        <div class="banner-bg">
          <img src="@/assets/img/bg/ban-bg.png" class="img-fluid" alt="img" />
        </div>
      </div>
    </div>
    <div class="banner-bgs">
      <img
        src="@/assets/img/bg/ban-bg-01.png"
        class="shape-01 img-fluid"
        alt="img"
      />
      <img
        src="@/assets/img/bg/ban-bg-02.png"
        class="shape-02 img-fluid"
        alt="img"
      />
      <img
        src="@/assets/img/bg/ban-bg-03.png"
        class="shape-03 img-fluid"
        alt="img"
      />
      <img
        src="@/assets/img/bg/ban-bg-04.png"
        class="shape-04 img-fluid"
        alt="img"
      />
      <img
        src="@/assets/img/bg/ban-bg-05.png"
        class="shape-05 img-fluid"
        alt="img"
      />
      <img
        src="@/assets/img/bg/ban-bg-06.png"
        class="shape-06 img-fluid"
        alt="img"
      />
      <img
        src="@/assets/img/bg/ban-bg-07.png"
        class="shape-07 img-fluid"
        alt="img"
      />
      <img
        src="@/assets/img/bg/ban-bg-05.png"
        class="shape-08 img-fluid"
        alt="img"
      />
      <img
        src="@/assets/img/bg/ban-bg-06.png"
        class="shape-09 img-fluid"
        alt="img"
      />
      <img
        src="@/assets/img/bg/ban-bg-03.png"
        class="shape-10 img-fluid"
        alt="img"
      />
    </div>
  </section>
  <!-- /Banner -->
</template>

<script>
export default {
  data() {
    return {
      selected: "Cruiser",
      selectedOne: "KTM 300",
      selectedTwo: "Newyork",
      Anytype: [
        { label: "Cruiser", value: "Cruiser" },
        { label: "Scooters", value: "Scooters" },
      ],
      Bike: [
        { label: "KTM 300", value: "KTM 300" },
        { label: "KTM RC 390", value: "KTM RC 390" },
      ],
      Country: [
        { label: "Newyork", value: "Newyork" },
        { label: "Los Angelses", value: "Los Angelses" },
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/listing/listing-grid");
    },
  },
};
</script>