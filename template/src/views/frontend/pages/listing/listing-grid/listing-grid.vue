<template>
  <div class="listing-page">
    <layouts-header></layouts-header>
    <breadcrumb :title="title" :text="text" :text1="text1" />
    <listing-filter
      @search="onSearch"
      :selectedBrand="filters.brand"
      :selectedModel="filters.model"
      :maxPrice="filters.maxPrice"
      :minYear="filters.minYear"
      :maxKm="filters.maxKm"
      :selectedOne="filters.sort"
    />
    <section class="section car-listing pt-0">
      <div class="container">
        <div class="row">
          <listing-sidebar
            @apply-filters="onSidebarFilter"
            @reset-filters="onSidebarReset"
          />
          <div class="col-lg-9">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 col-12"
                v-for="item in cars"
                :key="item.id"
                data-aos="fade-down"
              >
                <car-card :car="item" />
              </div>
            </div>
            <div class="pagination-wrapper" v-if="totalPages > 1">
              <ul class="pagination">
                <li :class="{ disabled: currentPage === 1 }">
                  <a href="#" @click.prevent="changePage(currentPage - 1)"
                    >&laquo;</a
                  >
                </li>
                <li
                  v-for="page in totalPages"
                  :key="page"
                  :class="{ active: currentPage === page }"
                >
                  <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
                </li>
                <li :class="{ disabled: currentPage === totalPages }">
                  <a href="#" @click.prevent="changePage(currentPage + 1)"
                    >&raquo;</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import CarCard from "@/components/car-card.vue";
import PocketBase from "pocketbase";
import ListingFilter from "../listing-filter.vue";

const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  components: {
    CarCard,
    ListingFilter,
  },
  data() {
    return {
      cars: [],
      currentPage: 1,
      totalPages: 1,
      perPage: 15,
      totalItems: 0,
      title: "Auto in vendita",
      text: "Home",
      text1: "Auto",
      filters: {
        brand: "",
        model: "",
        maxPrice: "",
        minYear: "",
        maxYear: "",
        minKm: "",
        maxKm: "",
        fuel: "",
        transmission: "",
        sort: "recenti",
      },
    };
  },
  mounted() {
    // Leggi i parametri dalla query string (provenienti dalla home)
    const q = this.$route.query;
    console.log("Query ricevuta dalla home:", q);

    if (q.brand) this.filters.brand = q.brand;
    if (q.model) this.filters.model = q.model;
    if (q.maxPrice) this.filters.maxPrice = Number(q.maxPrice);
    if (q.minYear) this.filters.minYear = Number(q.minYear);
    if (q.maxKm) this.filters.maxKm = Number(q.maxKm);

    console.log("Filtri applicati:", this.filters);

    this.fetchCars(1, this.filters);
  },
  methods: {
    async fetchCars(page = 1, filters = this.filters) {
      try {
        let filterQuery = [];
        filterQuery.push(`approved = true`);
        if (filters.brand) filterQuery.push(`brand = '${filters.brand}'`);
        if (filters.model) filterQuery.push(`model = '${filters.model}'`);
        if (filters.minPrice) filterQuery.push(`price >= ${filters.minPrice}`);
        if (filters.maxPrice) filterQuery.push(`price <= ${filters.maxPrice}`);
        if (filters.minYear) filterQuery.push(`year >= ${filters.minYear}`);
        if (filters.maxYear) filterQuery.push(`year <= ${filters.maxYear}`);
        if (filters.minKm) filterQuery.push(`mileage >= ${filters.minKm}`);
        if (filters.maxKm) filterQuery.push(`mileage <= ${filters.maxKm}`);
        if (filters.fuel) filterQuery.push(`fuel_type = '${filters.fuel}'`);
        if (filters.transmission)
          filterQuery.push(`transmission = '${filters.transmission}'`);
        const filterString = filterQuery.length ? filterQuery.join(" && ") : "";
        let sort = "-created";
        if (filters.sort === "meno_costoso") sort = "price";
        if (filters.sort === "piu_costoso") sort = "-price";
        if (filters.sort === "recenti") sort = "-created";

        console.log("Listing Grid - Filter string:", filterString);
        console.log("Listing Grid - Sort:", sort);

        const result = await pb.collection("cars").getList(page, this.perPage, {
          filter: filterString,
          sort,
        });
        this.cars = result.items;
        this.currentPage = result.page;
        this.totalPages = result.totalPages;
        this.totalItems = result.totalItems;
      } catch (error) {
        console.error("Errore nel recupero delle auto:", error);
      }
    },
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.fetchCars(page, this.filters);
      }
    },
    onSearch(newFilters) {
      this.filters = { ...this.filters, ...newFilters };
      this.fetchCars(1, this.filters);
    },
    onSidebarFilter(filterValues) {
      this.filters.minYear = filterValues.yearRange[0];
      this.filters.maxYear = filterValues.yearRange[1];
      this.filters.minKm = filterValues.kmRange[0];
      this.filters.maxKm = filterValues.kmRange[1];
      this.filters.minPrice = filterValues.priceRange[0];
      this.filters.maxPrice = filterValues.priceRange[1];
      this.filters.fuel = filterValues.fuel;
      this.filters.transmission = filterValues.transmission;
      this.fetchCars(1, this.filters);
    },
    onSidebarReset() {
      this.filters = {
        brand: "",
        model: "",
        maxPrice: "",
        minYear: "",
        maxYear: "",
        minKm: "",
        maxKm: "",
        fuel: "",
        transmission: "",
        sort: "recenti",
      };
      this.fetchCars(1, this.filters);
    },
  },
};
</script>
