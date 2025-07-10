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
          <h4>Le mie Auto Caricate</h4>
          <p>Gestisci le auto che hai caricato sul sito</p>
        </div>
        <!-- /Content Header -->

        <div class="row">
          <!-- Uploaded Cars -->
          <div class="col-md-12">
            <div class="uploaded-cars-wrap">
              <div v-if="!isAuthenticated" class="alert alert-warning">
                Devi essere loggato per vedere le tue auto caricate.
              </div>
              <div v-else>
                <div
                  v-if="uploadedCars.length === 0 && !loadingCars"
                  class="alert alert-info"
                >
                  Non hai ancora caricato nessuna auto.
                  <router-link
                    to="/user/user-upload"
                    class="btn btn-primary btn-sm ms-2"
                  >
                    Carica la tua prima auto
                  </router-link>
                </div>
                <div
                  class="listview-car"
                  v-for="car in uploadedCars"
                  :key="car.id"
                >
                  <CarWishlistCard :car="car">
                    <template #title-actions>
                      <div class="title-actions">
                        <!-- Status Badge -->
                        <div
                          class="status-badge"
                          :class="getStatusClass(car.approved)"
                        >
                          <i :class="getStatusIcon(car.approved)"></i>
                          {{ getStatusText(car.approved) }}
                        </div>

                        <router-link
                          :to="`/user/user-upload?edit=${car.id}`"
                          class="btn-order btn-order-warning btn btn-sm"
                        >
                          <i class="feather-edit-2"></i> Modifica
                        </router-link>
                        <button
                          class="btn-order btn-order-danger btn btn-sm"
                          @click="deleteCar(car.id)"
                          :disabled="deletingCar === car.id"
                        >
                          <i class="feather-trash-2"></i> Elimina
                        </button>
                      </div>
                    </template>
                  </CarWishlistCard>
                </div>
              </div>
            </div>
            <!-- /Uploaded Cars -->
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

const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  components: { CarWishlistCard },
  setup() {
    const { currentUser, isAuthenticated } = useAuth();
    const uploadedCars = ref([]);
    const loadingCars = ref(false);
    const deletingCar = ref(null);
    const title = "Auto Caricate";
    const text = "Home";
    const text1 = "Auto Caricate";

    // Recupera le auto caricate dall'utente loggato
    const fetchUploadedCars = async () => {
      if (!isAuthenticated.value) {
        uploadedCars.value = [];
        return;
      }
      loadingCars.value = true;
      try {
        // Prendi le auto caricate dall'utente
        const cars = await pb.collection("cars").getFullList({
          filter: `uploadBy = '${currentUser.value.id}'`,
          sort: "-created",
        });
        uploadedCars.value = cars;
      } catch (e) {
        console.error("Errore nel caricamento delle auto:", e);
        uploadedCars.value = [];
      } finally {
        loadingCars.value = false;
      }
    };

    // Funzioni per gestire lo status delle auto
    const getStatusClass = (approved) => {
      return approved ? "status-approved" : "status-pending";
    };

    const getStatusIcon = (approved) => {
      return approved ? "feather-check-circle" : "feather-clock";
    };

    const getStatusText = (approved) => {
      return approved ? "Approvata" : "In attesa di approvazione";
    };

    // Funzione per eliminare un'auto
    const deleteCar = async (carId) => {
      if (
        !confirm(
          "Sei sicuro di voler eliminare questa auto? Questa azione non può essere annullata."
        )
      ) {
        return;
      }

      try {
        deletingCar.value = carId;
        await pb.collection("cars").delete(carId);

        // Rimuovi l'auto dalla lista locale
        uploadedCars.value = uploadedCars.value.filter(
          (car) => car.id !== carId
        );

        // Mostra messaggio di successo
        alert("Auto eliminata con successo!");
      } catch (error) {
        console.error("Errore nell'eliminazione dell'auto:", error);
        alert("Errore nell'eliminazione dell'auto. Riprova più tardi.");
      } finally {
        deletingCar.value = null;
      }
    };

    onMounted(fetchUploadedCars);

    return {
      uploadedCars,
      loadingCars,
      deletingCar,
      title,
      text,
      text1,
      isAuthenticated,
      getStatusClass,
      getStatusIcon,
      getStatusText,
      deleteCar,
    };
  },
};
</script>

<style scoped>
.uploaded-cars-wrap {
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.title-actions {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: auto;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.status-approved {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status-pending {
  background: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 12px;
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: white;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  color: white;
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:hover {
  background-color: #ffc107;
  color: #212529;
}

.alert {
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 20px;
}

.alert-info {
  background: #d1ecf1;
  border: 1px solid #bee5eb;
  color: #0c5460;
}

.alert-warning {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
}

@media (max-width: 768px) {
  .uploaded-cars-wrap {
    padding: 20px;
  }

  .title-actions {
    flex-direction: column;
    gap: 5px;
  }

  .btn-sm {
    flex: 1;
    text-align: center;
  }
}

.btn-order {
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 6px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.btn-order-warning {
  background: #ffc107 !important;
  color: #212529 !important;
  border: none;
}
.btn-order-warning:hover {
  background: #e0a800 !important;
  color: #fff !important;
}

.btn-order-danger {
  background: #dc3545 !important;
  color: #fff !important;
  border: none;
}
.btn-order-danger:hover {
  background: #a71d2a !important;
  color: #fff !important;
}
</style>
