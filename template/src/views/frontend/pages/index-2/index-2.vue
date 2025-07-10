<template>
  <div class="hero-sec-main">
    <layouts-header></layouts-header>
    <!-- Banner -->
    <index-2-banner></index-2-banner>
    <!-- /Banner -->
  </div>

  <!-- Yacht Categories -->
  <yacht-categories></yacht-categories>
  <!-- /Yacht Categories -->

  <!-- Renting Yacht  -->
  <renting-yacht></renting-yacht>
  <!-- /Renting Yacht -->

  <!-- Top Feature Yacht -->
  <top-feature></top-feature>
  <!-- /Top Feature Yacht -->

  <!-- Boat Info Steps -->
  <boat-info></boat-info>
  <!-- /Boat Info Steps -->

  <!-- Poplar Location -->
  <poplar-location></poplar-location>
  <!-- /Poplar Location -->

  <!-- Yacht Offer -->
  <index-yacht></index-yacht>
  <!-- /Yacht Offer -->

  <!-- More Boats Info -->
  <more-boat></more-boat>
  <!-- /More Boats Info -->

  <!-- Boat marketplace -->
  <boat-market></boat-market>
  <!-- /Boat marketplace -->

  <!-- Client Review -->
  <client-review></client-review>
  <!-- /Client Review -->

  <!-- FAQ -->
  <faq-section></faq-section>
  <!-- /FAQ -->

  <!-- Seasonal Special -->
  <seasonal-section></seasonal-section>
  <!-- /Seasonal Special -->

  <!-- News & Insights -->
  <news-section></news-section>
  <!-- /News & Insights -->

  <!-- Footer -->
  <index-2-footer></index-2-footer>
  <!-- Footer -->
</template>
<script>
export default {
  data() {
    return {
    };
  },
  watch: {
    $route(to) {
      this.updateBodyClass(to.path);
    }
  },
  mounted() {
    this.updateBodyClass(this.$route.path);
  },
  methods: {
    updateBodyClass(path) {
      if (path === "/home/index-4") {
        document.body.classList.add("home-two");
      } else {
        document.body.classList.remove("home-two");
      }
    }
  },
};
</script>
