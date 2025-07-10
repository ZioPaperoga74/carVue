<template>
  <section class="product-detail-head">
    <div class="container">
      <div class="detail-page-head">
        <div class="detail-headings">
          <div class="star-rated">
            <ul class="list-rating">
              <li>
                <div class="car-brand">
                  <span>
                    <img src="@/assets/img/icons/car-icon.svg" alt="img" />
                  </span>
                  {{ car?.brand || "-" }}
                </div>
              </li>
              <li>
                <span class="year">{{ car?.year || "-" }}</span>
              </li>
            </ul>
            <div class="camaro-info">
              <h3>
                {{ car?.brand ? car.brand.toUpperCase() : "" }}
                {{ car?.model || "" }}
              </h3>
              <div class="camaro-location">
                <div class="camaro-location-inner">
                  <i class="bx bx-map"></i>
                  <span>Location : {{ car?.location || "-" }}</span>
                </div>
                <div class="camaro-location-inner">
                  <i class="bx bx-show"></i>
                  <span>Views : {{ car?.views || "N/A" }}</span>
                </div>
                <div class="camaro-location-inner">
                  <i class="bx bx-car"></i>
                  <span
                    >Listed on:
                    {{
                      car?.created
                        ? new Date(car.created).toLocaleDateString()
                        : "-"
                    }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="details-btn"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    car: { type: Object, required: false },
  },
};
</script>
