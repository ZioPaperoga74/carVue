<template>
  <div :key="car?.id || 'loading'">
    <layouts-header></layouts-header>

    <!-- Loading state -->
    <div
      v-if="loading"
      class="loading-container"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 400px;
        font-size: 18px;
        color: #666;
      "
    >
      <div>
        <i class="fas fa-spinner fa-spin" style="margin-right: 10px"></i>
        Caricamento dettagli auto...
      </div>
    </div>

    <!-- Error state -->
    <div
      v-else-if="error"
      class="error-container"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 400px;
        font-size: 18px;
        color: #dc3545;
      "
    >
      <div>
        <i class="fas fa-exclamation-triangle" style="margin-right: 10px"></i>
        {{ error }}
      </div>
    </div>

    <!-- Content -->
    <div v-else-if="car">
      <breadcrumb :title="title" :text="text" :text1="text1" />
      <listing-head :car="car" v-if="car" />
      <section class="section product-details">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <listing-carphoto :car="car" v-if="car" />
              <listing-description :car="car" v-if="car" />
              <!--Listing Features Section-->
              <listing-specifications :car="car" v-if="car" />
              <listing-features :car="car" v-if="car" />
              <!--/Listing Features Section-->
              <!-- Gallery -->
              <listing-gallery :car="car" v-if="car" />
              <!-- /Gallery -->
              <!-- FAQ -->
              <div class="review-sec faq-feature">
                <div class="review-header">
                  <h4>FAQ's</h4>
                </div>
                <div class="faq-info">
                  <div class="faq-card">
                    <h4 class="faq-title">
                      <a
                        class="collapsed"
                        data-bs-toggle="collapse"
                        href="#faqOne"
                        aria-expanded="false"
                        >How old do I need to be to rent a car?</a
                      >
                    </h4>
                    <div id="faqOne" class="card-collapse collapse">
                      <p>
                        We offer a diverse fleet of vehicles to suit every need,
                        including compact cars, sedans, SUVs and luxury
                        vehicles. You can browse our selection online or contact
                        us for assistance in choosing the right vehicle for you
                      </p>
                    </div>
                  </div>
                  <div class="faq-card">
                    <h4 class="faq-title">
                      <a
                        class="collapsed"
                        data-bs-toggle="collapse"
                        href="#faqTwo"
                        aria-expanded="false"
                        >What documents do I need to rent a car?</a
                      >
                    </h4>
                    <div id="faqTwo" class="card-collapse collapse">
                      <p>
                        We offer a diverse fleet of vehicles to suit every need,
                        including compact cars, sedans, SUVs and luxury
                        vehicles. You can browse our selection online or contact
                        us for assistance in choosing the right vehicle for you
                      </p>
                    </div>
                  </div>
                  <div class="faq-card">
                    <h4 class="faq-title">
                      <a
                        class="collapsed"
                        data-bs-toggle="collapse"
                        href="#faqThree"
                        aria-expanded="false"
                        >What types of vehicles are available for rent?</a
                      >
                    </h4>
                    <div id="faqThree" class="card-collapse collapse">
                      <p>
                        We offer a diverse fleet of vehicles to suit every need,
                        including compact cars, sedans, SUVs and luxury
                        vehicles. You can browse our selection online or contact
                        us for assistance in choosing the right vehicle for you
                      </p>
                    </div>
                  </div>
                  <div class="faq-card">
                    <h4 class="faq-title">
                      <a
                        class="collapsed"
                        data-bs-toggle="collapse"
                        href="#faqFour"
                        aria-expanded="false"
                        >Can I rent a car with a debit card?</a
                      >
                    </h4>
                    <div id="faqFour" class="card-collapse collapse">
                      <p>
                        We offer a diverse fleet of vehicles to suit every need,
                        including compact cars, sedans, SUVs and luxury
                        vehicles. You can browse our selection online or contact
                        us for assistance in choosing the right vehicle for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /FAQ -->
              <!-- Policies -->
              <div class="review-sec">
                <div class="review-header">
                  <h4>Policies</h4>
                </div>
                <div class="policy-list">
                  <div class="policy-item">
                    <div class="policy-info">
                      <h6>Cancellation Charges</h6>
                      <p>
                        Cancellation charges will be applied as per the policy
                      </p>
                    </div>
                    <router-link to="/pages/privacy-policy"
                      >Know More</router-link
                    >
                  </div>
                  <div class="policy-item">
                    <div class="policy-info">
                      <h6>Policy</h6>
                      <p>
                        I hereby agree to the terms and conditions of the Lease
                        Agreement with Host
                      </p>
                    </div>
                    <router-link to="/pages/privacy-policy"
                      >View Details</router-link
                    >
                  </div>
                </div>
              </div>
              <!-- /Policies -->
              <listing-review :car="car" v-if="car" />
            </div>
            <listingdetails-sidebar :car="car" v-if="car" />
          </div>
          <listing :currentCarId="car?.id" :key="car?.id" v-if="car" />
        </div>
      </section>
    </div>

    <layout-footer></layout-footer>
    <listing-modal></listing-modal>
  </div>
</template>
<script>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  setup() {
    const route = useRoute();
    const car = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const title = computed(() => {
      if (car.value) {
        return `${car.value.brand ? car.value.brand.toUpperCase() : ""} - ${
          car.value.model
        }`;
      }
      return "Car Details";
    });

    const text = computed(() => "Dettagli");
    const text1 = computed(() => {
      if (car.value) {
        return `${car.value.brand ? car.value.brand.toUpperCase() : ""} - ${
          car.value.model
        }`;
      }
      return "Car Details";
    });

    const fetchCarData = async () => {
      try {
        loading.value = true;
        const carId = route.params.id;

        if (!carId) {
          error.value = "No car ID provided";
          return;
        }

        const record = await pb.collection("cars").getOne(carId);
        car.value = record;
      } catch (err) {
        console.error("Error fetching car data:", err);
        error.value = "Failed to load car details";
      } finally {
        loading.value = false;
      }
    };

    // Watcher per il route per ricaricare i dati quando cambia l'ID
    watch(
      () => route.params.id,
      (newId, oldId) => {
        if (newId !== oldId) {
          fetchCarData();
          // Scroll in cima alla pagina
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    );

    onMounted(() => {
      fetchCarData();
    });

    return {
      car,
      loading,
      error,
      title,
      text,
      text1,
    };
  },
};
</script>
