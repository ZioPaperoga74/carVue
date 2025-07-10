<template>
  <layouts-header></layouts-header>
  <breadcrumb :title="title" :text="text" :text1="text1" />
  <!-- About -->
  <aboutexperiences></aboutexperiences>
  <!-- /About -->

  <layout-footer></layout-footer>
</template>

<script>
export default {
  data() {
    return {
      title: "Chi siamo",
      text: "Info",
      text1: "Chi siamo",
    };
  },
};
</script>
