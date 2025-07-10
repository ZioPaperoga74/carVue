<template>
  <div>
    <div class="section-search page-search">
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
                  <div class="search-btn d-flex gap-2">
                    <button class="btn search-button" type="submit">
                      <i class="fa fa-search" aria-hidden="true"></i>Cerca
                    </button>
                    <button
                      v-if="hasFilters"
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="resetFilters"
                    >
                      <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
    <div class="sort-section">
      <div class="container">
        <div class="sortby-sec">
          <div class="sorting-div">
            <div class="row d-flex align-items-center">
              <div class="col-xl-4 col-lg-3 col-sm-12 col-12">
                <div class="count-search">
                  <p>Qui puoi trovare tutte le nostre auto</p>
                </div>
              </div>
              <div class="col-xl-8 col-lg-9 col-sm-12 col-12">
                <div class="product-filter-group">
                  <div class="sortbyset">
                    <ul>
                      <li>
                        <span class="sortbytitle">Ordina per </span>
                        <div class="sorting-select select-two">
                          <vue-select
                            :options="SortNew"
                            v-model="selectedOne"
                            label="label"
                            :reduce="(option) => option.value"
                            placeholder="Piu Recenti"
                            @update:modelValue="onSortChange"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="grid-listview">
                    <ul>
                      <li>
                        <!-- <a
                          href="javascript:void(0)"
                          :class="{ active: isGrid }"
                          @click="toggleGrid"
                        >
                          <i class="feather-grid"></i>
                        </a> -->
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import carList from "@/assets/json/car-list.json";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  props: {
    selectedBrand: { type: String, default: "" },
    selectedModel: { type: String, default: "" },
    maxPrice: { type: [String, Number], default: "" },
    minYear: { type: [String, Number], default: "" },
    maxKm: { type: [String, Number], default: "" },
    selectedOne: { type: String, default: "recenti" },
  },
  data() {
    return {
      localSelectedBrand: this.selectedBrand,
      localSelectedModel: this.selectedModel,
      localMaxPrice: this.maxPrice,
      localMinYear: this.minYear,
      localMaxKm: this.maxKm,
      localSelectedOne: this.selectedOne,
      transmission: "",
      brands: Object.keys(carList),
      models: [],
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      selected: "5",
      SortNew: [
        { label: "Piu Recenti", value: "recenti" },
        { label: "Meno Costoso", value: "meno_costoso" },
        { label: "Piu Costoso", value: "piu_costoso" },
      ],
      NumShow: [
        { label: "5", value: "5" },
        { label: "10", value: "10" },
        { label: "15", value: "15" },
        { label: "20", value: "20" },
        { label: "30", value: "30" },
      ],
      isList: false,
      isGrid: true,
      isMap: false,
    };
  },
  computed: {
    selectedBrand: {
      get() {
        return this.localSelectedBrand;
      },
      set(value) {
        this.localSelectedBrand = value;
      },
    },
    selectedModel: {
      get() {
        return this.localSelectedModel;
      },
      set(value) {
        this.localSelectedModel = value;
      },
    },
    maxPrice: {
      get() {
        return this.localMaxPrice;
      },
      set(value) {
        this.localMaxPrice = value;
      },
    },
    minYear: {
      get() {
        return this.localMinYear;
      },
      set(value) {
        this.localMinYear = value;
      },
    },
    maxKm: {
      get() {
        return this.localMaxKm;
      },
      set(value) {
        this.localMaxKm = value;
      },
    },
    selectedOne: {
      get() {
        return this.localSelectedOne;
      },
      set(value) {
        this.localSelectedOne = value;
      },
    },
    hasFilters() {
      return (
        this.localSelectedBrand ||
        this.localSelectedModel ||
        this.localMaxPrice ||
        this.localMinYear ||
        this.localMaxKm ||
        this.transmission ||
        (this.localSelectedOne && this.localSelectedOne !== "recenti")
      );
    },
  },
  mounted() {
    // Sincronizza i valori dai props ai valori locali
    this.localSelectedBrand = this.selectedBrand || "";
    this.localSelectedModel = this.selectedModel || "";
    this.localMaxPrice = this.maxPrice || "";
    this.localMinYear = this.minYear || "";
    this.localMaxKm = this.maxKm || "";
    this.localSelectedOne = this.selectedOne || "recenti";

    if (this.localSelectedBrand) {
      this.models = carList[this.localSelectedBrand] || [];
    }
  },
  methods: {
    onBrandChange() {
      this.localSelectedModel = "";
      this.models = this.localSelectedBrand
        ? carList[this.localSelectedBrand]
        : [];
    },
    toggleList() {},
    toggleGrid() {
      this.isGrid = !this.isGrid;
    },
    toggleMap() {},
    onSortChange() {
      this.$emit("search", {
        brand: this.localSelectedBrand,
        model: this.localSelectedModel,
        maxPrice: this.localMaxPrice,
        minYear: this.localMinYear,
        maxKm: this.localMaxKm,
        transmission: this.transmission,
        sort: this.localSelectedOne,
      });
    },
    submitForm() {
      this.$emit("search", {
        brand: this.localSelectedBrand,
        model: this.localSelectedModel,
        maxPrice: this.localMaxPrice,
        minYear: this.localMinYear,
        maxKm: this.localMaxKm,
        transmission: this.transmission,
        sort: this.localSelectedOne,
      });
    },
    resetFilters() {
      // Reset di tutti i valori locali
      this.localSelectedBrand = "";
      this.localSelectedModel = "";
      this.localMaxPrice = "";
      this.localMinYear = "";
      this.localMaxKm = "";
      this.localSelectedOne = "recenti";
      this.transmission = "";
      this.models = [];

      // Emette l'evento di ricerca con filtri vuoti
      this.$emit("search", {
        brand: "",
        model: "",
        maxPrice: "",
        minYear: "",
        maxKm: "",
        transmission: "",
        sort: "recenti",
      });
    },
  },
  watch: {
    localSelectedBrand(newVal) {
      this.models = newVal ? carList[newVal] || [] : [];
      if (!newVal) this.localSelectedModel = "";
    },
    // Watcher per i props - aggiorna i valori locali quando cambiano i props
    selectedBrand: {
      handler(newVal) {
        if (newVal !== this.localSelectedBrand) {
          this.localSelectedBrand = newVal;
          if (newVal) {
            this.models = carList[newVal] || [];
          }
        }
      },
      immediate: true,
    },
    selectedModel: {
      handler(newVal) {
        if (newVal !== this.localSelectedModel) {
          this.localSelectedModel = newVal;
        }
      },
      immediate: true,
    },
    maxPrice: {
      handler(newVal) {
        if (newVal !== this.localMaxPrice) {
          this.localMaxPrice = newVal;
        }
      },
      immediate: true,
    },
    minYear: {
      handler(newVal) {
        if (newVal !== this.localMinYear) {
          this.localMinYear = newVal;
        }
      },
      immediate: true,
    },
    maxKm: {
      handler(newVal) {
        if (newVal !== this.localMaxKm) {
          this.localMaxKm = newVal;
        }
      },
      immediate: true,
    },
    selectedOne: {
      handler(newVal) {
        if (newVal !== this.localSelectedOne) {
          this.localSelectedOne = newVal;
        }
      },
      immediate: true,
    },
  },
};
</script>
