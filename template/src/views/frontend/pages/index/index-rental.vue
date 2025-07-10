<template>
  <!-- Rental deals -->
  <section class="section popular-services">
    <div class="container">
      <!-- Heading title-->
      <div class="section-heading" data-aos="fade-down">
        <h2>Ultime Aggiunte</h2>
        <p>Qui puoi trovare gli articoli piu recenti che offriamo</p>
      </div>
      <!-- /Heading title -->
      <div class="row">
        <div class="popular-slider-group">
          <div class="owl-carousel rental-deal-slider owl-theme">
            <!-- owl carousel item -->
            <Carousel
              :wrap-around="true"
              :settings="settings"
              :breakpoints="breakpoints"
            >
              <Slide v-for="car in recentCars" :key="car.id">
                <div class="rental-car-item">
                  <car-card :car="car" />
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
            <!-- /owl carousel item -->
          </div>
        </div>
      </div>
      <!-- View More -->
      <div class="view-all text-center" data-aos="fade-down">
        <router-link
          to="/listing/listing-grid"
          class="btn btn-view d-inline-flex align-items-center"
          >Go to all Cars <span><i class="feather-arrow-right ms-2"></i></span
        ></router-link>
      </div>
      <!-- View More -->
    </div>
  </section>
  <!-- /Rental deals -->
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { ref, onMounted } from "vue";
import PocketBase from "pocketbase";
import "vue3-carousel/dist/carousel.css";
import CarCard from "@/components/car-card.vue";

const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    CarCard,
  },
  setup() {
    const recentCars = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchRecentCars = async () => {
      try {
        loading.value = true;
        // Carica i 6 elementi più recenti dalla collection cars
        const records = await pb.collection("cars").getList(1, 6, {
          sort: "-created", // Ordina per data di creazione decrescente
          filter: "approved = true", // Solo auto approvate
        });

        recentCars.value = records.items;
      } catch (err) {
        console.error("Error fetching recent cars:", err);
        error.value = "Failed to load recent cars";
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchRecentCars();
    });

    return {
      recentCars,
      loading,
      error,
    };
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        575: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>
