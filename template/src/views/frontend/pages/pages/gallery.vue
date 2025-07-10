<template>
  <layouts-header></layouts-header>
  <breadcrumb :title="title" :text="text" :text1="text1" />

  <div class="section gallery-section">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-6 col-12"
          v-for="(image, index) in galleryImages"
          :key="index"
          @click="show(index)"
          data-aos="fade-down"
        >
          <div class="gallery-widget">
            <a href="javascript:;" data-fancybox="gallery2">
              <img
                :src="getImageUrl(image.src)"
                class="img-fluid"
                alt="image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <vue-easy-lightbox
    :visible="visible"
    :index="index"
    :imgs="galleryImages.map((image) => ({ src: getImageUrl(image.src) }))"
    @hide="visible = false"
    @on-prev="handlePrev"
    @on-next="handleNext"
  />

  <layout-footer></layout-footer>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      title: "Gallery",
      text: "Pages",
      text1: "Gallery",
      visible: false,
      index: 0,
      galleryImages: [
        { src: "gallery-01.jpg" },
        { src: "gallery-02.jpg" },
        { src: "gallery-03.jpg" },
        { src: "gallery-04.jpg" },
        { src: "gallery-05.jpg" },
        { src: "gallery-06.jpg" },
        { src: "gallery-07.jpg" },
        { src: "gallery-08.jpg" },
        { src: "gallery-09.jpg" },
        { src: "gallery-10.jpg" },
        { src: "gallery-11.jpg" },
        { src: "gallery-12.jpg" },
      ],
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    handlePrev() {
      if (this.index > 0) {
        this.index--;
      }
    },
    handleNext() {
      if (this.index < this.galleryImages.length - 1) {
        this.index++;
      }
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/gallery/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
