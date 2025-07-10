<template>
  <div class="tab-pane fade" id="car-gallery">
    <div class="border-bottom mb-3 pb-3">
      <div
        class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3"
      >
        <h6>Gallery</h6>
        <router-link
          :to="`/admin-template/rentals/edit-car/${carId}`"
          class="link-default"
        >
          <i class="ti ti-edit"></i>
        </router-link>
      </div>

      <!-- Gallery using vue-easy-lightbox -->
      <div
        class="d-flex align-items-center flex-wrap gap-3"
        v-if="carImages && carImages.length > 0"
      >
        <div
          class="gallery-wrap"
          v-for="(image, index) in carImages"
          :key="index"
        >
          <img
            :src="getImageUrl(image)"
            :alt="`Car image ${index + 1}`"
            @click="openLightbox(index)"
          />
        </div>
      </div>
      <div v-else class="text-center py-4">
        <p class="text-muted">No images available for this car.</p>
      </div>
    </div>

    <!-- Video section -->

    <!-- Lightbox modal -->
    <vue-easy-lightbox
      :visible="visible"
      :imgs="lightboxImages"
      :index="currentIndex"
      @hide="visible = false"
    />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox,
  },
  props: {
    carImages: {
      type: Array,
      default: () => [],
    },
    carId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      visible: false, // Controls visibility of the lightbox
      currentIndex: 0, // Holds the current image index for lightbox
    };
  },
  computed: {
    lightboxImages() {
      if (!this.carImages || !this.carId) return [];
      return this.carImages.map((image) => this.getImageUrl(image));
    },
  },
  methods: {
    openLightbox(index) {
      this.currentIndex = index;
      this.visible = true;
    },
    getImageUrl(imageName) {
      if (!imageName || !this.carId) {
        return new URL(`/src/assets/admin/img/car/car-01.jpg`, import.meta.url)
          .href;
      }
      return `http://127.0.0.1:8090/api/files/cars/${this.carId}/${imageName}`;
    },
  },
};
</script>

<style scoped>
.gallery-wrap img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}

.gallery-wrap img:hover {
  transform: scale(1.05);
}
</style>
