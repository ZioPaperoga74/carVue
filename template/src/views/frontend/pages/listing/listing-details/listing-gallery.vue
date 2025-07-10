<template>
  <vue-easy-lightbox
    :visible="visible"
    :index="index"
    :imgs="carImages.map((image) => ({ src: getImageUrl(image) }))"
    @hide="visible = false"
    @on-prev="handlePrev"
    @on-next="handleNext"
  />
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox,
  },
  props: {
    car: { type: Object, required: false },
  },
  data() {
    return {
      visible: false,
      index: 0,
    };
  },
  computed: {
    carImages() {
      if (!this.car || !this.car.images) return [];

      // Se images è una stringa, la dividiamo in array
      if (typeof this.car.images === "string") {
        return this.car.images.split(",").map((img) => img.trim());
      }

      // Se è già un array, lo restituiamo
      if (Array.isArray(this.car.images)) {
        return this.car.images;
      }

      return [];
    },
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    handlePrev() {
      // Optional: implement if needed
    },
    handleNext() {
      // Optional: implement if needed
    },
    getImageUrl(image) {
      if (!image || !this.car) return "";
      return `http://127.0.0.1:8090/api/files/cars/${this.car.id}/${image}`;
    },
  },
};
</script>
