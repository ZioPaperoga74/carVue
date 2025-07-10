<template>
  <div class="map-wrap position-relative">
    <GoogleMap
      api-key="YOUR_ACTUAL_API_KEY"
      style="width: 100%; height: 350px"
      :center="center"
      :zoom="14"
    >
      <!-- All markers with custom icon -->
      <Marker
        v-for="location in locations"
        :key="location.id"
        :options="{
          position: {
            lat: parseFloat(location.lat),
            lng: parseFloat(location.lng),
          },
          icon: {
            url: markerIcon,
            scaledSize: { width: 40, height: 40 },
          },
        }"
        @click="showInfo(location)"
      />

      <!-- Info window on active marker -->
      <InfoWindow
        v-if="infoWindowOpened && activeCar"
        :options="{ position: { lat: parseFloat(activeCar.lat), lng: parseFloat(activeCar.lng) } }"
        @closeclick="infoWindowOpened = false"
      >
        <div class="card border-0 mb-0" style="width: 100%; display: inline-block;">
          <div class="card-body pt-0 p-2 d-flex align-items-center justify-content-between gap-3">
            <div class="d-flex align-items-center">
              <a :href="activeCar.profile_link" class="avatar flex-shrink-0 me-2 avatar-rounded" target="_blank">
                <img
                  class="img-fluid"
                  :alt="activeCar.car_name"
                  :src="getImagePath(activeCar.image)"
                />
              </a>
              <div class="ms-2">
                <h6 class="fs-14 fw-semibold mb-1">
                  <a :href="activeCar.profile_link">{{ activeCar.car_name }}</a>
                </h6>
                <p class="fs-13">{{ activeCar.speciality }}</p>
              </div>
            </div>
            <div>
              <a :href="activeCar.profile_link" class="text-decoration-underline fw-medium link-violet">View</a>
            </div>
          </div>
        </div>
      </InfoWindow>
    </GoogleMap>

    <!-- Search input -->
    <div class="position-absolute top-0 start-0 w-100 z-2 p-3">
      <div class="input-icon-start position-relative">
        <span class="input-icon-addon">
          <i class="ti ti-search"></i>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Search by Car Name"
          v-model="searchQuery"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

// Vite-compatible static asset import
const markerIcon = new URL("@/assets/admin/img/icons/marker.svg", import.meta.url).href;

export default defineComponent({
  components: { GoogleMap, Marker, InfoWindow },
  setup() {
    const center = ref({ lat: 53.470692, lng: -2.220328 });
    const searchQuery = ref("");
    const activeCar = ref(null);
    const infoWindowOpened = ref(false);

    const locations = ref([
      {
        id: "01",
        car_name: "Ford Endeavour",
        speciality: "Speed : 20/Kms",
        lat: "53.470692",
        lng: "-2.220328",
        profile_link: "car-details.html",
        image: "car-01.jpg",
      },
      {
        id: "02",
        car_name: "Ferrari 458 MM",
        speciality: "Speed : 25/Kms",
        lat: "53.469189",
        lng: "-2.199262",
        profile_link: "car-details.html",
        image: "car-02.jpg",
      },
      {
        id: "03",
        car_name: "Ford Mustang",
        speciality: "Speed : 19/Kms",
        lat: "53.468665",
        lng: "-2.189269",
        profile_link: "car-details.html",
        image: "car-03.jpg",
      },
      {
        id: "04",
        car_name: "Toyota Tacoma 4",
        speciality: "Speed : 20/Kms",
        lat: "53.463894",
        lng: "-2.177880",
        profile_link: "car-details.html",
        image: "car-04.jpg",
      },
      {
        id: "05",
        car_name: "Chevrolet Pick Truck",
        speciality: "Speed : 20/Kms",
        lat: "53.466359",
        lng: "-2.213314",
        profile_link: "car-details.html",
        image: "car-05.jpg",
      },
      {
        id: "06",
        car_name: "Etios Carmen",
        speciality: "Speed : 20/Kms",
        lat: "53.463906",
        lng: "-2.213271",
        profile_link: "car-details.html",
        image: "car-06.jpg",
      },
      {
        id: "07",
        car_name: "Kia Soul 2016",
        speciality: "Speed : 20/Kms",
        lat: "53.461974",
        lng: "-2.210661",
        profile_link: "car-details.html",
        image: "car-07.jpg",
      },
      {
        id: "08",
        car_name: "Chevrolet Camaro",
        speciality: "Speed : 20/Kms",
        lat: "53.458785",
        lng: "-2.188532",
        profile_link: "car-details.html",
        image: "car-08.jpg",
      },
      {
        id: "09",
        car_name: "Toyota Camry SE 350",
        speciality: "Speed : 20/Kms",
        lat: "53.4558571",
        lng: "-2.1950372",
        profile_link: "car-details.html",
        image: "car-09.jpg",
      },
    ]);

    const filteredLocations = computed(() => {
      if (!searchQuery.value) return locations.value;
      return locations.value.filter((car) =>
        car.car_name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const showInfo = (car) => {
      activeCar.value = car;
      infoWindowOpened.value = true;
    };

    const getImagePath = (img) =>
      new URL(`/src/assets/admin/img/car/${img}`, import.meta.url).href;

    return {
      center,
      markerIcon,
      locations: filteredLocations,
      searchQuery,
      activeCar,
      infoWindowOpened,
      showInfo,
      getImagePath,
    };
  },
});
</script>

<!--  -->
