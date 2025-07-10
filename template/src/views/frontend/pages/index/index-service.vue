<template>
  <!-- services -->
  <section class="section services">
    <div class="service-right">
      <img
        src="@/assets/img/bg/service-right.svg"
        class="img-fluid"
        alt="services right"
      />
    </div>
    <div class="container">
      <!-- Heading title-->
      <div class="section-heading" data-aos="fade-down">
        <h2>Text lorem ipsum</h2>
        <p>
          Acquistare un'auto è un processo diretto e semplice che tipicamente
          segue i seguenti passi Auto garantite, prezzi competitivi e massima
          trasparenza!
        </p>
      </div>
      <!-- /Heading title -->
      <div class="services-work">
        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-12 d-flex"
            v-for="item in IndexService"
            :key="item.id"
            data-aos="fade-down"
          >
            <div :class="item.ServiceClass">
              <div :class="item.IconClass">
                <img
                  :class="item.ImgClass"
                  :src="getImageUrl(item.Image)"
                  alt="Choose Locations"
                />
              </div>
              <div class="services-content">
                <h3>{{ item.Title }}</h3>
                <p>
                  {{ item.Content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /services -->
</template>

<script>
import IndexService from "@/assets/json/index-service.json";
export default {
  data() {
    return {
      IndexService: IndexService,
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url)
        .href;
    },
  },
};
</script>
