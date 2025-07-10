<template>
  <div>
    <layouts-header></layouts-header>
    <user-breadcrumb :title="title" :text="text" :text1="text1" />

    <user-tabset></user-tabset>

    <!-- Page Content -->
    <div class="content dashboard-content">
      <div class="container">
        <!-- Content Header -->
        <div class="content-header">
          <h4>Preferiti</h4>
        </div>
        <!-- /Content Header -->

        <div class="row">
          <!-- Wishlist -->
          <div class="col-md-12">
            <div class="wishlist-wrap">
              <div v-if="!isAuthenticated" class="alert alert-warning">
                Devi essere loggato per vedere la tua lista Preferiti.
              </div>
              <div v-else>
                <div
                  v-if="favouriteCars.length === 0 && !loadingFavourites"
                  class="alert alert-info"
                >
                  Nessuna auto nei preferiti.
                </div>
                <div
                  class="listview-car"
                  v-for="car in favouriteCars"
                  :key="car.id"
                >
                  <CarWishlistCard :car="car">
                    <template #fav>
                      <a
                        href="javascript:void(0)"
                        class="fav-icon selected"
                        @click="removeFavourite(car.id)"
                        :disabled="loadingFavourites"
                      >
                        <i class="feather-heart"></i> Rimuovi dai preferiti
                      </a>
                    </template>
                  </CarWishlistCard>
                </div>
              </div>
            </div>
            <!-- /Wishlist -->
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->

    <layout-footer></layout-footer>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useAuth } from "@/composables/useAuth";
import PocketBase from "pocketbase";
import CarWishlistCard from "@/components/car-wishlist-card.vue";
import { useFavourites } from "@/composables/useFavourites";

const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  components: { CarWishlistCard },
  setup() {
    const { currentUser, isAuthenticated } = useAuth();
    const { favouriteCars, removeFavourite, loadingFavourites } =
      useFavourites();
    const title = "Preferiti";
    const text = "Home";
    const text1 = "Preferiti";

    // Recupera i preferiti dell'utente loggato
    const fetchFavourites = async () => {
      if (!isAuthenticated.value) {
        favouriteCars.value = [];
        return;
      }
      loadingFavourites.value = true;
      try {
        // Prendi i preferiti e includi i dati della macchina
        const favs = await pb.collection("favorites").getFullList({
          filter: `user = '${currentUser.value.id}'`,
          expand: "car",
        });
        // Solo quelli con car espanso valido
        favouriteCars.value = favs
          .filter((f) => f.expand && f.expand.car)
          .map((f) => ({
            ...f.expand.car,
            _favouriteId: f.id, // per rimozione rapida
          }));
      } catch (e) {
        favouriteCars.value = [];
      } finally {
        loadingFavourites.value = false;
      }
    };

    onMounted(fetchFavourites);

    return {
      favouriteCars,
      loadingFavourites,
      title,
      text,
      text1,
      removeFavourite,
      isAuthenticated,
      fetchFavourites,
    };
  },
};
</script>
