<template>
  <div class="card">
    <div class="blog-widget d-flex">
      <div class="blog-img">
        <router-link :to="`/listing/listing-details/${car.id}`">
          <img
            :src="getImageUrl(car.images && car.images[0])"
            class="img-fluid"
            alt="car-img"
          />
        </router-link>
        <slot name="fav"></slot>
      </div>
      <div class="bloglist-content w-100">
        <div class="card-body">
          <div class="blog-list-head d-flex">
            <div class="blog-list-title">
              <h3>
                <router-link :to="`/listing/listing-details/${car.id}`">
                  {{ car.brand ? car.brand.toUpperCase() : "" }} -
                  {{ car.model }}
                </router-link>
              </h3>
              <h6>
                Anno: <span>{{ car.year }}</span>
              </h6>
            </div>
            <div class="blog-list-rate" v-if="car.price">
              <h6>€{{ car.price }} <span></span></h6>
            </div>
            <slot name="title-actions"></slot>
          </div>
          <div class="listing-details-group">
            <ul>
              <li v-if="car.year">
                <span
                  ><img src="@/assets/img/icons/car-parts-05.svg" alt="Anno"
                /></span>
                <p>{{ car.year }}</p>
              </li>
              <li v-if="car.mileage">
                <span
                  ><img src="@/assets/img/icons/car-parts-02.svg" alt="KM"
                /></span>
                <p>{{ car.mileage }} km</p>
              </li>
              <li v-if="car.fuel_type">
                <span
                  ><img
                    src="@/assets/img/icons/car-parts-03.svg"
                    alt="Carburante"
                /></span>
                <p>{{ car.fuel_type }}</p>
              </li>
              <li v-if="car.seats">
                <span
                  ><img src="@/assets/img/icons/car-parts-06.svg" alt="Posti"
                /></span>
                <p>{{ car.seats }} posti</p>
              </li>
            </ul>
          </div>
          <div class="blog-list-head list-head-bottom d-flex">
            <div class="blog-list-title">
              <div class="title-bottom">
                <div class="address-info" v-if="car.location">
                  <h6>
                    <i class="feather-map-pin me-2"></i>{{ car.location }}
                  </h6>
                </div>
              </div>
            </div>
            <div class="listing-button">
              <router-link
                :to="`/listing/listing-details/${car.id}`"
                class="btn btn-order"
              >
                <span><i class="feather-calendar me-2"></i></span>Scopri di più
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  car: { type: Object, required: true },
});
function getImageUrl(image) {
  if (!image) return "";
  return `http://127.0.0.1:8090/api/files/cars/${props.car.id}/${image}`;
}
</script>

<style scoped>
.card {
  margin-bottom: 24px;
}
.blog-widget.d-flex {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.blog-img {
  min-width: 200px;
  max-width: 220px;
  margin-right: 24px;
  display: flex;
  align-items: center;
}
.blog-img img {
  width: 100%;
  border-radius: 8px;
}
.bloglist-content {
  flex: 1;
}

.blog-list-head {
  align-items: center;
}

.blog-list-title {
  flex: 1;
}
</style>
