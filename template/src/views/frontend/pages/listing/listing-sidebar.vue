<template>
  <div class="col-xl-3 col-lg-4 col-sm-12 col-12 theiaStickySidebar">
    <div class="stickysidebar">
      <form
        @submit.prevent="applyFilters"
        autocomplete="off"
        class="sidebar-form"
      >
        <div class="accord-list">
          <div class="accordion" id="accordionMain3">
            <div class="card-header-new" id="headingYear">
              <h6 class="filter-title">
                <a
                  href="javascript:void(0);"
                  class="w-100 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseYear"
                  aria-expanded="true"
                  aria-controls="collapseYear"
                >
                  Anno
                  <span class="float-end"
                    ><i class="fa-solid fa-chevron-down"></i
                  ></span>
                </a>
              </h6>
            </div>
            <div
              id="collapseYear"
              class="collapse"
              aria-labelledby="headingYear"
              data-bs-parent="#accordionExample2"
            >
              <div class="card-body-chat">
                <div class="filter-range">
                  <Slider
                    v-model="yearRange"
                    :min="1990"
                    :max="2100"
                    :merge="1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion" id="accordionMain04">
            <div class="card-header-new" id="headingfuel">
              <h6 class="filter-title">
                <a
                  href="javascript:void(0);"
                  class="w-100 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefuel"
                  aria-expanded="true"
                  aria-controls="collapsefuel"
                >
                  Motore
                  <span class="float-end"
                    ><i class="fa-solid fa-chevron-down"></i
                  ></span>
                </a>
              </h6>
            </div>
            <div
              id="collapsefuel"
              class="collapse"
              aria-labelledby="headingfuel"
              data-bs-parent="#accordionExample2"
            >
              <div class="card-body-chat">
                <div class="fuel-list">
                  <ul>
                    <li>
                      <div class="input-selection">
                        <input
                          type="radio"
                          name="fuel"
                          id="elettrico"
                          value="Elettrico"
                          v-model="selectedFuel"
                        />
                        <label for="elettrico">Elettrico</label>
                      </div>
                    </li>
                    <li>
                      <div class="input-selection">
                        <input
                          type="radio"
                          name="fuel"
                          id="benzina"
                          value="Benzina"
                          v-model="selectedFuel"
                        />
                        <label for="benzina">Benzina</label>
                      </div>
                    </li>
                    <li>
                      <div class="input-selection">
                        <input
                          type="radio"
                          name="fuel"
                          id="diesel"
                          value="Diesel"
                          v-model="selectedFuel"
                        />
                        <label for="diesel">Diesel</label>
                      </div>
                    </li>
                    <li>
                      <div class="input-selection">
                        <input
                          type="radio"
                          name="fuel"
                          id="gpl"
                          value="GPL"
                          v-model="selectedFuel"
                        />
                        <label for="gpl">GPL</label>
                      </div>
                    </li>
                    <li>
                      <div class="input-selection">
                        <input
                          type="radio"
                          name="fuel"
                          id="metano"
                          value="Metano"
                          v-model="selectedFuel"
                        />
                        <label for="metano">Metano</label>
                      </div>
                    </li>
                    <li>
                      <div class="input-selection">
                        <input
                          type="radio"
                          name="fuel"
                          id="ibrida"
                          value="Ibrida"
                          v-model="selectedFuel"
                        />
                        <label for="ibrida">Ibrida</label>
                      </div>
                    </li>
                    <li>
                      <div class="input-selection">
                        <input
                          type="radio"
                          name="fuel"
                          id="altro"
                          value="Altro"
                          v-model="selectedFuel"
                        />
                        <label for="altro">Altro</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion" id="accordionMain5">
            <div class="card-header-new" id="headingmileage">
              <h6 class="filter-title">
                <a
                  href="javascript:void(0);"
                  class="w-100 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsemileage"
                  aria-expanded="true"
                  aria-controls="collapsemileage"
                >
                  KM Max
                  <span class="float-end"
                    ><i class="fa-solid fa-chevron-down"></i
                  ></span>
                </a>
              </h6>
            </div>
            <div
              id="collapsemileage"
              class="collapse"
              aria-labelledby="headingmileage"
              data-bs-parent="#accordionExample2"
            >
              <div class="card-body-chat">
                <div class="filter-range">
                  <Slider
                    v-model="kmRange"
                    :min="1"
                    :max="1000000"
                    :merge="1000"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="accordion" id="accordionMain7">
            <div class="card-header-new" id="headingColor">
              <h6 class="filter-title">
                <a
                  href="javascript:void(0);"
                  class="w-100 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseColor"
                  aria-expanded="true"
                  aria-controls="collapseColor"
                >
                  Colors
                  <span class="float-end"
                    ><i class="fa-solid fa-chevron-down"></i
                  ></span>
                </a>
              </h6>
            </div>
            <div
              id="collapseColor"
              class="collapse"
              aria-labelledby="headingColor"
              data-bs-parent="#accordionExample2"
            >
              <div class="card-body-chat">
                <div class="theme-colorsset">
                  <ul>
                    <li>
                      <div class="input-themeselects">
                        <input
                          type="radio"
                          name="color"
                          id="greenColor"
                          value="red"
                          checked=""
                        />
                        <label for="greenColor" class="green-clr"></label>
                      </div>
                    </li>
                    <li>
                      <div class="input-themeselects">
                        <input
                          type="radio"
                          name="color"
                          id="yellowColor"
                          value="yellow"
                        />
                        <label for="yellowColor" class="yellow-clr"></label>
                      </div>
                    </li>
                    <li>
                      <div class="input-themeselects">
                        <input
                          type="radio"
                          name="color"
                          id="brownColor"
                          value="blue"
                        />
                        <label for="brownColor" class="brown-clr"></label>
                      </div>
                    </li>
                    <li>
                      <div class="input-themeselects">
                        <input
                          type="radio"
                          name="color"
                          id="blackColor"
                          value="green"
                        />
                        <label for="blackColor" class="black-clr"></label>
                      </div>
                    </li>
                    <li>
                      <div class="input-themeselects">
                        <input
                          type="radio"
                          name="color"
                          id="redColor"
                          value="red"
                          checked=""
                        />
                        <label for="redColor" class="red-clr"></label>
                      </div>
                    </li>
                    <li>
                      <div class="input-themeselects">
                        <input
                          type="radio"
                          name="color"
                          id="grayColor"
                          value="blue"
                        />
                        <label for="grayColor" class="gray-clr"></label>
                      </div>
                    </li>
                    <li>
                      <div class="input-themeselects">
                        <input
                          type="radio"
                          name="color"
                          id="gray100Color"
                          value="green"
                        />
                        <label for="gray100Color" class="gray100-clr"></label>
                      </div>
                    </li>
                    <li>
                      <div class="input-themeselects">
                        <input
                          type="radio"
                          name="color"
                          id="blueColor"
                          value="yellow"
                        />
                        <label for="blueColor" class="blue-clr"></label>
                      </div>
                    </li>
                    <li>
                      <div class="input-themeselects">
                        <input
                          type="radio"
                          name="color"
                          id="whiteColor"
                          value="yellow"
                        />
                        <label for="whiteColor" class="white-clr"></label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> -->

          <div class="accordion" id="accordionMain9">
            <div class="card-header-new" id="headingFour">
              <h6 class="filter-title">
                <a
                  href="javascript:void(0);"
                  class="w-100 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  Prezzo
                  <span class="float-end"
                    ><i class="fa-solid fa-chevron-down"></i
                  ></span>
                </a>
              </h6>
            </div>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample4"
            >
              <div class="card-body-chat">
                <div class="filter-range">
                  <Slider
                    v-model="priceRange"
                    :min="1"
                    :max="500000"
                    :merge="1000"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion" id="accordionMain4">
            <div class="card-header-new" id="headingtransmiss">
              <h6 class="filter-title">
                <a
                  href="javascript:void(0);"
                  class="w-100 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsetransmission"
                  aria-expanded="true"
                  aria-controls="collapsetransmission"
                >
                  Cambio
                  <span class="float-end"
                    ><i class="fa-solid fa-chevron-down"></i
                  ></span>
                </a>
              </h6>
            </div>
            <div
              id="collapsetransmission"
              class="collapse"
              aria-labelledby="headingtransmiss"
              data-bs-parent="#accordionExample2"
            >
              <div class="card-body-chat">
                <div class="fuel-list">
                  <ul>
                    <li>
                      <div class="input-selection">
                        <input
                          type="radio"
                          name="transmission"
                          id="manuale"
                          value="Manuale"
                          v-model="selectedTransmission"
                        />
                        <label for="manuale">Manuale</label>
                      </div>
                    </li>
                    <li>
                      <div class="input-selection">
                        <input
                          type="radio"
                          name="transmission"
                          id="automatico"
                          value="Automatico"
                          v-model="selectedTransmission"
                        />
                        <label for="automatico">Automatico</label>
                      </div>
                    </li>
                    <li>
                      <div class="input-selection">
                        <input
                          type="radio"
                          name="transmission"
                          id="altro"
                          value="Altro"
                          v-model="selectedTransmission"
                        />
                        <label for="altro">Altro</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary filter-btn"
        >
          <span><i class="feather-filter me-2"></i></span>Filtra
        </button>
        <a href="#" class="reset-filter" @click.prevent="resetFilters"
          >Cancella Filtri</a
        >
      </form>
    </div>
  </div>
</template>
<script>
import Slider from "@vueform/slider";
export default {
  data() {
    return {
      yearRange: [1990, 2100],
      kmRange: [1, 1000000],
      priceRange: [1, 500000],
      selectedFuel: "",
      selectedTransmission: "",
      merge: 10,
      format: {
        prefix: "",
      },
    };
  },
  components: {
    Slider,
  },
  methods: {
    applyFilters() {
      this.$emit("apply-filters", {
        yearRange: this.yearRange,
        kmRange: this.kmRange,
        priceRange: this.priceRange,
        fuel: this.selectedFuel,
        transmission: this.selectedTransmission,
      });
    },
    resetFilters() {
      this.yearRange = [1990, 2100];
      this.kmRange = [1, 1000000];
      this.priceRange = [1, 500000];
      this.selectedFuel = "";
      this.selectedTransmission = "";
      this.$emit("reset-filters");
      this.applyFilters();
    },
  },
};
</script>
<style>
.slider-connect {
  background: var(--slider-connect-bg, #ff9307) !important;
  cursor: pointer;
}

.slider-tooltip {
  background: var(--slider-tooltip-bg, #0b2540) !important;
  border: 1px solid var(--slider-tooltip-bg, #0b2540) !important;
  border-radius: var(--slider-tooltip-radius, 5px);
  color: var(--slider-tooltip-color, #fff);
  display: block;
  font-size: var(--slider-tooltip-font-size, 0.875rem);
  font-weight: var(--slider-tooltip-font-weight, 600);
  line-height: var(--slider-tooltip-line-height, 1.25rem);
  min-width: var(--slider-tooltip-min-width, 20px);
  padding: var(--slider-tooltip-py, 2px) var(--slider-tooltip-px, 6px);
  position: absolute;
  text-align: center;
  white-space: nowrap;
}

.roundskin .slider-tooltip {
  background: var(--slider-tooltip-bg, #ff9307) !important;
  border: 1px solid var(--slider-tooltip-bg, #ff9307) !important;
  border-radius: var(--slider-tooltip-radius, 5px);
  color: var(--slider-tooltip-color, #fff);
  display: block;
  font-size: var(--slider-tooltip-font-size, 0.875rem);
  font-weight: var(--slider-tooltip-font-weight, 600);
  line-height: var(--slider-tooltip-line-height, 1.25rem);
  min-width: var(--slider-tooltip-min-width, 20px);
  padding: var(--slider-tooltip-py, 2px) var(--slider-tooltip-px, 6px);
  position: absolute;
  text-align: center;
  white-space: nowrap;
}

.slider-handle {
  background-color: #ff9307 !important;
  border: 2px solid #ff9307 !important;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
