<template>
  <div class="row">
    <div class="col-md-12">
      <div class="details-car-grid">
        <div class="details-slider-heading">
          <h3>Potrebbe interessarti anche</h3>
        </div>
        <div class="owl-carousel rental-deal-slider details-car owl-theme">
          <Carousel
            :wrap-around="true"
            :settings="settings"
            :breakpoints="breakpoints"
          >
            <Slide v-for="car in recentCars" :key="car.id">
              <div class="rental-car-item">
                <car-card :car="car"></car-card>
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
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { ref, onMounted } from "vue";
import PocketBase from "pocketbase";
import "vue3-carousel/dist/carousel.css";

const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    currentCarId: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const recentCars = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchRecentCars = async () => {
      try {
        loading.value = true;
        // Carica i 5 elementi più recenti dalla collection cars
        const records = await pb.collection("cars").getList(1, 10, {
          sort: "-created", // Ordina per data di creazione decrescente
        });

        // Filtra l'auto corrente se presente
        let filteredCars = records.items;
        if (props.currentCarId) {
          filteredCars = records.items.filter(
            (car) => car.id !== props.currentCarId
          );
        }

        // Prendi solo i primi 5
        recentCars.value = filteredCars.slice(0, 5);
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
          itemsToShow: 1,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 3,
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
