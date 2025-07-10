<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <div class="page-wrapper">
    <div class="content me-4 pb-0">
      <!-- Tracking -->
      <div class="map-wrap tracking position-relative">
        <div id="map" class="tracking-map w-100 z-1">
          <GoogleMap
            api-key="YOUR_ACTUAL_API_KEY"
            style="width: 100%; height: 500px"
            :center="center"
            :zoom="15"
          >
            <Marker
              v-for="location in locations"
              :key="location.id"
              :options="{
                position: {
                  lat: parseFloat(location.lat),
                  lng: parseFloat(location.lng),
                },
                icon: {
                  url: markerIconUrl,
                  scaledSize: { width: 40, height: 40 },
                },
              }"
            />
          </GoogleMap>
        </div>
        <div class="position-absolute top-0 start-0 w-100 z-2 p-3">
          <div class="input-icon-start position-relative">
            <span class="input-icon-addon">
              <i class="ti ti-search"></i>
            </span>
            <input type="text" class="form-control" placeholder="Search by Car Name" />
          </div>
        </div>
      </div>
      <!-- /Tracking -->
    </div>

    <!-- Footer-->
    <div class="footer d-sm-flex align-items-center justify-content-between bg-white p-3">
      <p class="mb-0">
        <a href="javascript:void(0);">Privacy Policy</a>
        <a href="javascript:void(0);" class="ms-4">Terms of Use</a>
      </p>
      <p>
        &copy; 2025 Dreamsrent, Made with <span class="text-danger">❤</span> by
        <a href="javascript:void(0);" class="text-secondary">Dreams</a>
      </p>
    </div>
    <!-- /Footer-->
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

// Resolve marker icon URL at module scope
const markerIconUrl = new URL("@/assets/admin/img/icons/marker.svg", import.meta.url)
  .href;

// Helper to resolve car image URLs
function getCarImageUrl(imageName) {
  return new URL(`@/assets/admin/img/car/${imageName}`, import.meta.url).href;
}

const locations = [
  {
    id: "01",
    car_name: "Ford Endeavour",
    speciality: "Speed : 20/Kms",
    lat: "53.470692",
    lng: "-2.220328",
    icons: "default",
    profile_link: "car-details.html",
    image: "car-01.jpg",
  },
  {
    id: "02",
    car_name: "Ferrari 458 MM",
    speciality: "Speed : 25/Kms",
    address: "Newyork, USA",
    lat: "53.469189",
    lng: "-2.199262",
    icons: "default",
    profile_link: "car-details.html",
    image: "car-02.jpg",
  },
  {
    id: "03",
    car_name: "Ford Mustang ",
    speciality: "Speed : 19/Kms",
    lat: "53.468665",
    lng: "-2.189269",
    icons: "default",
    profile_link: "car-details.html",
    image: "car-03.jpg",
  },
  {
    id: "04",
    car_name: "Toyota Tacoma 4",
    speciality: "Speed : 20/Kms",
    lat: "53.463894",
    lng: "-2.177880",
    icons: "default",
    profile_link: "car-details.html",
    image: "car-04.jpg",
  },
  {
    id: "05",
    car_name: "Chevrolet Pick Truck",
    speciality: "Speed : 20/Kms",
    lat: "53.466359",
    lng: "-2.213314",
    icons: "default",
    profile_link: "car-details.html",
    image: "car-05.jpg",
  },
  {
    id: "06",
    car_name: "Etios Carmen",
    speciality: "Speed : 20/Kms",
    lat: "53.463906",
    lng: "-2.213271",
    icons: "default",
    profile_link: "car-details.html",
    image: "car-06.jpg",
  },
  {
    id: "07",
    car_name: "Kia Soul 2016",
    speciality: "Speed : 20/Kms",
    lat: "53.461974",
    lng: "-2.210661",
    icons: "default",
    profile_link: "car-details.html",
    image: "car-07.jpg",
  },
  {
    id: "08",
    car_name: "Chevrolet Camaro",
    speciality: "Speed : 20/Kms",
    lat: "53.458785",
    lng: "-2.188532",
    icons: "default",
    profile_link: "car-details.html",
    image: "car-08.jpg",
  },
  {
    id: "09",
    car_name: "Toyota Camry SE 350",
    speciality: "Speed : 20/Kms",
    lat: "53.4558571",
    lng: "-2.1950372",
    icons: "default",
    profile_link: "car-details.html",
    image: "car-09.jpg",
  },
];

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 53.470692, lng: -2.220328 };
    // Optionally, you can use onMounted for any JS Google Maps API logic
    onMounted(() => {
      // If you want to use the raw Google Maps API, you can do it here
      // But for vue3-google-map, this is not required
    });
    return { center, markerIconUrl, locations };
  },
  methods: {
    // If you want to show info windows, implement here
    getCarImageUrl,
  },
});
</script>
