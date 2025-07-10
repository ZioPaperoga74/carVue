<template>
  <!-- Popular Services -->
  <section class="section popular-services popular-explore">
    <div class="container">
      <!-- Heading title-->
      <div class="section-heading" data-aos="fade-down">
        <h2>Non perderti le nostre auto più amate del momento!</h2>
        <p>
          Qui trovi una lista delle nostre vetture piu popolari, basata sulle
          preferenze degli utenti.
        </p>
      </div>
      <!-- /Heading title -->
      <div class="row justify-content-center">
        <div class="col-lg-12" data-aos="fade-down">
          <div class="popular-slider-group">
            <div class="owl-carousel rental-deal-slider owl-theme">
              <Carousel
                :wrap-around="true"
                :settings="settings"
                :breakpoints="breakpoints"
              >
                <Slide v-for="car in popularCars" :key="car.id">
                  <div class="rental-car-item">
                    <car-card :car="car" />
                  </div>
                </Slide>
                <template #addons>
                  <Navigation />
                </template>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Popular Services -->
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
    const popularCars = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchPopularCars = async () => {
      try {
        loading.value = true;
        // Carica i 6 elementi meno recenti dalla collection cars
        const records = await pb.collection("cars").getList(1, 6, {
          sort: "created", // Ordina per data di creazione crescente (meno recenti)
          filter: "approved = true",
        });
        popularCars.value = records.items;
      } catch (err) {
        console.error("Error fetching popular cars:", err);
        error.value = "Failed to load popular cars";
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchPopularCars();
    });

    return {
      popularCars,
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
