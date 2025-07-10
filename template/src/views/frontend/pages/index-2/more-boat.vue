<template>
  <section class="more-boats-info-sec">
    <div class="container-fluid">
      <div class="sec-bottom-info">
        <div class="row bottom-text-row">
          <div
            class="col-xl-3 col-lg-6"
            v-for="item in More_Boat"
            :key="item.id"
          >
            <div class="bottom-ship-info-card">
              <div class="hover-ship-info w-100">
                <h4>{{ item.Name }}</h4>
                <div class="address-info">
                  <span><i class="bx bx-map"></i>{{ item.Location }}</span>
                  <div class="rated-star">
                    <i class="bx bxs-star filled"></i>
                    <i class="bx bxs-star filled"></i>
                    <i class="bx bxs-star filled"></i>
                    <i class="bx bxs-star filled"></i>
                    <i class="bx bxs-star"></i>
                    <span>{{ item.Reviews }}</span>
                  </div>
                </div>
                <ul class="ship-features">
                  <li>Cabins : 4</li>
                  <li>People : 8</li>
                  <li>Length : 4.6</li>
                </ul>
                <div class="ship-pricing">
                  <h5>
                    From <span> {{ item.Amount }} </span> /day
                  </h5>
                  <router-link
                    to="/listing/listing-details"
                    class="btn btn-primary btn-buy"
                    >Book Now</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import More_Boat from "@/assets/json/more-boat.json";
export default {
  data() {
    return {
      More_Boat: More_Boat,
    };
  },
};
</script>
