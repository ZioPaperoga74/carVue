<template>
  <div class="review-sec mb-0">
    <div class="review-header">
      <h4>Description of Listing</h4>
    </div>
    <div class="description-list">
      <p v-if="car && car.description">
        {{ car.description }}
      </p>
      <p v-else>Nessuna descrizione disponibile per questa vettura.</p>
      <div class="read-more">
        <div class="more-text" v-show="showMore">
          <p v-if="car && car.descriptionExtra">
            {{ car.descriptionExtra }}
          </p>
        </div>
        <a href="javascript:void(0);" class="more-link" @click="toggleMore">{{
          buttonText
        }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    car: { type: Object, required: false },
  },
  data() {
    return {
      showMore: false,
    };
  },
  computed: {
    buttonText() {
      return this.showMore ? "Show Less" : "Show More";
    },
  },
  methods: {
    toggleMore() {
      this.showMore = !this.showMore;
    },
  },
};
</script>
<style scoped>
/* Add your component styles here */
.read-more .more-text {
  display: none; /* Initially hide the more-text */
}
</style>
