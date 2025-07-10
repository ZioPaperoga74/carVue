<template>
  <div class="uploaded-video">
    <!-- Static image preview for the video -->
    <img src="@/assets/admin/img/car/car-lg-01.jpg" alt="Video thumbnail" />

    <!-- Fancybox trigger for YouTube video -->
    <a
      href="https://www.youtube.com/embed/1trvO6dqQUI"
      data-fancybox="gallery"
      class="play-icon"
    >
      <i class="ti ti-player-play-filled"></i>
    </a>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";

export default {
  name: "VideoPlayer",
  setup() {
    onMounted(() => {
      // Initialize Fancybox after component is mounted
      Fancybox.bind('[data-fancybox="gallery"]');
    });
  },
};
</script>

<style scoped>
/* Customize the play button style as needed */
.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: white;
  text-decoration: none;
}
</style>
