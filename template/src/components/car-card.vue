<template>
  <div class="listing-item">
    <div class="listing-img">
      <div class="car-label">
        {{ car.brand ? car.brand.toUpperCase() : "" }} - {{ car.model }}
      </div>
      <div v-if="car.images && car.images.length > 1">
        <Carousel :wrap-around="true" :settings="carouselSettings">
          <Slide v-for="(img, idx) in car.images.slice(0, 5)" :key="img">
            <router-link :to="`/listing/listing-details/${car.id}`">
              <img
                :src="getImageUrl(img)"
                class="img-fluid"
                :alt="car.brand + ' ' + car.model + ' ' + (idx + 1)"
              />
            </router-link>
          </Slide>
          <template #addons>
            <Pagination />
            <Navigation />
          </template>
        </Carousel>
      </div>
      <router-link v-else :to="`/listing/listing-details/${car.id}`">
        <img
          :src="getImageUrl(car.images && car.images[0])"
          class="img-fluid"
          :alt="car.brand + ' ' + car.model"
        />
      </router-link>
      <div class="fav-item justify-content-end" v-if="isAuthenticated">
        <a
          href="javascript:void(0)"
          class="fav-icon"
          :class="{ selected: isFav }"
          @click="toggleFavourite"
          :disabled="loading || loadingFavourites"
        >
          <i class="feather-heart"></i>
        </a>
      </div>
    </div>
    <div class="listing-content">
      <div
        class="listing-features d-flex align-items-end justify-content-between"
      >
        <div class="list-rating">
          <h3 class="listing-title">
            <router-link :to="`/listing/listing-details/${car.id}`">
              {{ car.brand ? car.brand.toUpperCase() : "" }} - {{ car.model }}
            </router-link>
          </h3>
        </div>
        <!-- <div class="list-km">
          <span class="km-count">
            <img src="@/assets/img/icons/map-pin.svg" alt="author" />
            {{ car.location || "" }}
          </span>
        </div> -->
      </div>
      <div class="listing-details-group">
        <ul>
          <li>
            <span
              ><img src="@/assets/img/icons/car-parts-02.svg" alt="KM"
            /></span>
            <p>{{ car.mileage }}</p>
          </li>
          <li>
            <span
              ><img src="@/assets/img/icons/car-parts-03.svg" alt="Fuel"
            /></span>
            <p>{{ car.fuel_type }}</p>
          </li>
          <li>
            <span
              ><img src="@/assets/img/icons/car-parts-03.svg" alt="Cambio"
            /></span>
            <p>{{ car.transmission }}</p>
          </li>
        </ul>
        <ul>
          <li>
            <span
              ><img src="@/assets/img/icons/car-parts-05.svg" alt="Year"
            /></span>
            <p>{{ car.year }}</p>
          </li>
          <li>
            <span
              ><img src="@/assets/img/icons/car-parts-06.svg" alt="Persons"
            /></span>
            <p>{{ car.seats }}</p>
          </li>
          <li>
            <span
              ><img src="@/assets/img/icons/car-parts-06.svg" alt="Persons"
            /></span>
            <p>{{ car.transmission }}</p>
          </li>
        </ul>
      </div>
      <div class="listing-location-details">
        <div class="listing-price">
          <span><i class="feather-map-pin"></i></span
          >{{ car.location || "Prezzo" }}
        </div>
        <div class="listing-price">
          <h6>
            {{ car.price }}
            <span
              ><img src="@/assets/img/icons/car-parts-06.svg" alt="Persons"
            /></span>
          </h6>
        </div>
      </div>
      <div class="listing-button">
        <router-link
          :to="`/listing/listing-details/${car.id}`"
          class="btn btn-order"
        >
          <span><i class="feather-calendar me-2"></i></span>Scopri di più
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref, onMounted, computed, watch } from "vue";
import { useAuth } from "@/composables/useAuth";
import { useFavourites } from "@/composables/useFavourites";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  name: "CarCard",
  components: { Carousel, Slide, Pagination, Navigation },
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { currentUser, isAuthenticated } = useAuth();
    const { isFavourite, addFavourite, removeFavourite, loadingFavourites } =
      useFavourites();
    const loading = ref(false);

    const isFav = computed(() => isFavourite(props.car.id));

    const toggleFavourite = async () => {
      if (!isAuthenticated.value) return;
      loading.value = true;
      try {
        if (!isFav.value) {
          await addFavourite(props.car.id);
        } else {
          await removeFavourite(props.car.id);
        }
      } catch (e) {
        console.error("Errore toggleFavourite", e);
        alert("Errore preferiti: " + (e?.message || e));
      } finally {
        loading.value = false;
      }
    };

    const getImageUrl = (image) => {
      if (!image) return "";
      return `http://127.0.0.1:8090/api/files/cars/${props.car.id}/${image}`;
    };

    return {
      isAuthenticated,
      isFav,
      loading,
      toggleFavourite,
      getImageUrl,
      currentUser,
      loadingFavourites,
    };
  },
  data() {
    return {
      carouselSettings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
    };
  },
};
</script>

<style scoped>
.carousel__prev,
.carousel__next {
  display: flex !important;
  opacity: 1 !important;
  background: #666 !important;
  border-radius: 50% !important;
  color: #fff !important;
  width: 40px !important;
  height: 40px !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 2 !important;
  cursor: pointer !important;
  border: none !important;
  font-size: 22px !important;
  box-shadow: none !important;
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  transition: background 0.2s !important;
}
.carousel__prev:hover,
.carousel__next:hover {
  background: #444 !important;
}
.carousel__prev svg,
.carousel__next svg {
  color: #fff !important;
  fill: #fff !important;
  width: 22px !important;
  height: 22px !important;
  stroke: #fff !important;
}
.carousel__prev {
  left: 10px !important;
}
.carousel__next {
  right: 10px !important;
}
.car-label {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 6px 16px 6px 12px;
  border-radius: 12px 0 12px 0;
  font-size: 1rem;
  font-weight: 600;
  z-index: 3;
  pointer-events: none;
}
.listing-img {
  position: relative;
}
.fav-icon.selected i {
  color: #e74c3c;
  fill: #e74c3c;
}
</style>
