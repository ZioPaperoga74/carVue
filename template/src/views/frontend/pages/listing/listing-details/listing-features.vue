<template>
  <div class="review-sec listing-feature">
    <div class="review-header">
      <h4>Car Features</h4>
    </div>
    <div class="listing-description">
      <div class="row">
        <div class="col-md-4" v-for="(feature, idx) in carFeatures" :key="idx">
          <ul>
            <li>
              <span><i class="bx bx-check-double"></i></span>{{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="review-sec listing-feature">
    <div class="review-header">
      <h4>Tariff</h4>
    </div>
    <div class="table-responsive">
      <table class="table border mb-3">
        <thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Daily Price</th>
            <th>Base Kilometers</th>
            <th>Kilometers Extra Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tariff, idx) in carTariffs" :key="idx">
            <td>{{ tariff.name }}</td>
            <td>{{ tariff.daily_price }}</td>
            <td>{{ tariff.base_km }}</td>
            <td>{{ tariff.extra_km_price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    car: { type: Object, required: false },
  },
  computed: {
    carFeatures() {
      return this.car && this.car.features ? this.car.features : [];
    },
    carTariffs() {
      return this.car && this.car.tariffs ? this.car.tariffs : [];
    },
  },
};
</script>
