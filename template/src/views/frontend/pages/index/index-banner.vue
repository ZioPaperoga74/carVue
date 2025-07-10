<template>
  <div>
    <!-- Banner -->
    <section class="banner-section banner-slider">
      <div class="container">
        <div class="home-banner">
          <div class="row align-items-center">
            <div class="col-lg-6" data-aos="fade-down">
              <p class="explore-text">
                <span><i class="fa-solid fa-thumbs-up me-2"></i></span
                >Affidabilità al 100% per le tue auto in tutta l'Italia
              </p>
              <h1>
                <span>Trova la tua</span> <br />
                Auto dei Sogni
              </h1>
              <p>
                Scopri il massimo del comfort, delle prestazioni e dell'eleganza
                con le nostre auto usate selezionate. Dal design raffinato delle
                berline e coupé alla versatilità dei SUV e al fascino delle
                cabriolet, offriamo una vasta gamma di veicoli premium per
                soddisfare ogni tua esigenza e stile di vita.
              </p>
              <div class="view-all">
                <router-link
                  to="/listing/listing-grid"
                  class="btn btn-view d-inline-flex align-items-center"
                  >Trova la tua auto
                  <span><i class="feather-arrow-right ms-2"></i></span
                ></router-link>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-down">
              <div class="banner-imgs">
                <img
                  src="@/assets/img/car-right.png"
                  class="img-fluid aos"
                  alt="bannerimage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Banner -->

    <!-- Search -->
    <div class="section-search">
      <div class="container">
        <div class="search-box-banner">
          <form @submit.prevent="submitForm">
            <ul class="align-items-center">
              <li class="column-group-main">
                <div class="input-block">
                  <label>Marchio</label>
                  <div class="group-img">
                    <select
                      v-model="selectedBrand"
                      @change="onBrandChange"
                      class="form-control"
                    >
                      <option value="" disabled>Seleziona il Marchio</option>
                      <option
                        v-for="brand in brands"
                        :key="brand"
                        :value="brand"
                      >
                        {{ brand }}
                      </option>
                    </select>
                    <span><i class="feather fe fe-car"></i></span>
                  </div>
                </div>
              </li>
              <li class="column-group-main">
                <div class="input-block">
                  <label>Modello</label>
                  <div class="group-img">
                    <select
                      v-model="selectedModel"
                      :disabled="!selectedBrand"
                      class="form-control"
                    >
                      <option value="" disabled>Seleziona il Modello</option>
                      <option
                        v-for="model in models"
                        :key="model"
                        :value="model"
                      >
                        {{ model }}
                      </option>
                    </select>
                    <span><i class="feather fe fe-car"></i></span>
                  </div>
                </div>
              </li>
              <li class="column-group-main">
                <div class="input-block">
                  <label>Prezzo fino a:</label>
                  <div class="group-img">
                    <input
                      type="number"
                      v-model="maxPrice"
                      class="form-control"
                      placeholder="€ Inserisci il prezzo"
                      min="0"
                    />
                    <span><i class="feather fe fe-dollar-sign"></i></span>
                  </div>
                </div>
              </li>
              <li class="column-group-main">
                <div class="input-block">
                  <label>Anno da:</label>
                  <div class="group-img">
                    <input
                      type="number"
                      v-model="minYear"
                      class="form-control"
                      placeholder="Inserisci l'anno"
                      min="1900"
                      max="2099"
                    />
                    <span><i class="feather fe fe-calendar"></i></span>
                  </div>
                </div>
              </li>
              <li class="column-group-main">
                <div class="input-block">
                  <label>Km Max :</label>
                  <div class="group-img">
                    <input
                      type="number"
                      v-model="maxKm"
                      class="form-control"
                      placeholder="Inserisci i Km"
                      min="0"
                    />
                    <span><i class="feather fe fe-activity"></i></span>
                  </div>
                </div>
              </li>
              <li class="column-group-last">
                <div class="input-block">
                  <div class="search-btn">
                    <button class="btn search-button" type="submit">
                      <i class="fa fa-search" aria-hidden="true"></i>Cerca
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Search -->
</template>

<script>
import { ref } from "vue";
import carList from "@/assets/json/car-list.json";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      selectedBrand: "",
      selectedModel: "",
      maxPrice: "",
      minYear: "",
      maxKm: "",
      brands: Object.keys(carList),
      models: [],
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
    };
  },
  methods: {
    onBrandChange() {
      this.selectedModel = "";
      this.models = this.selectedBrand ? carList[this.selectedBrand] : [];
    },
    submitForm() {
      // Costruisco la query solo con i filtri valorizzati
      const query = {};
      if (this.selectedBrand) query.brand = this.selectedBrand;
      if (this.selectedModel) query.model = this.selectedModel;
      if (this.maxPrice) query.maxPrice = this.maxPrice;
      if (this.minYear) query.minYear = this.minYear;
      if (this.maxKm) query.maxKm = this.maxKm;
      this.$router.push({ path: "/listing/listing-grid", query });
    },
  },
};
</script>
