<template>
  <div>
    <div class="row">
      <div
        class="col-lg-4 col-md-6 col-12"
        v-for="item in Mazda"
        :key="item.id"
        data-aos="fade-down"
      >
        <car-card :car="item" />
      </div>
      <!-- /col -->
    </div>
    <div class="pagination-wrapper" v-if="totalPages > 1">
      <ul class="pagination">
        <li :class="{ disabled: currentPage === 1 }">
          <a href="#" @click.prevent="changePage(currentPage - 1)">&laquo;</a>
        </li>
        <li
          v-for="page in totalPages"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li :class="{ disabled: currentPage === totalPages }">
          <a href="#" @click.prevent="changePage(currentPage + 1)">&raquo;</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import PocketBase from "pocketbase";
import CarCard from "@/components/car-card.vue";

const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    CarCard,
  },
  data() {
    return {
      Mazda: [],
      isSelected: false,
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
      currentPage: 1,
      totalPages: 1,
      perPage: 15,
      totalItems: 0,
    };
  },
  mounted() {
    this.fetchMazdaCars();
  },
  methods: {
    async fetchMazdaCars(page = 1) {
      try {
        const result = await pb.collection("cars").getList(page, this.perPage, {
          filter: "brand = 'Mazda'",
          sort: "-created",
        });
        this.Mazda = result.items;
        this.currentPage = result.page;
        this.totalPages = result.totalPages;
        this.totalItems = result.totalItems;
      } catch (error) {
        console.error("Errore nel recupero delle auto Mazda:", error);
      }
    },
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.fetchMazdaCars(page);
      }
    },
  },
};
</script>
