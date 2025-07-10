<template></template>
<script>
export default {
  props: {
    car: { type: Object, required: false },
  },
  computed: {
    carReviews() {
      return this.car && this.car.reviews ? this.car.reviews : [];
    },
  },
};
</script>
