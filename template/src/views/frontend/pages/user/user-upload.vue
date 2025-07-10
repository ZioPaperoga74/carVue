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
          <h4>{{ isEditMode ? "Modifica Auto" : "Carica la tua Auto" }}</h4>
          <p>
            {{
              isEditMode
                ? "Modifica i dettagli della tua auto"
                : "Inserisci i dettagli della tua auto per metterla in vendita"
            }}
          </p>
        </div>
        <!-- /Content Header -->

        <div class="row">
          <div class="col-md-12">
            <div class="upload-car-wrap">
              <div v-if="!isAuthenticated" class="alert alert-warning">
                Devi essere loggato per caricare la tua auto.
              </div>
              <div v-else>
                <form @submit.prevent="submitCar" class="upload-car-form">
                  <!-- Step 1: Informazioni Base -->
                  <div class="form-section">
                    <h5 class="section-title">
                      <i class="feather-info"></i> Informazioni Base
                    </h5>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label">
                            Brand <span class="text-danger">*</span>
                          </label>
                          <select
                            v-model="carData.brand"
                            class="form-control"
                            required
                          >
                            <option value="">Seleziona Brand</option>
                            <option
                              v-for="brand in brandOptions"
                              :key="brand.value"
                              :value="brand.value"
                            >
                              {{ brand.label }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label">
                            Modello <span class="text-danger">*</span>
                          </label>
                          <select
                            v-model="carData.model"
                            class="form-control"
                            required
                            :disabled="!carData.brand"
                          >
                            <option value="">
                              {{
                                carData.brand
                                  ? "Seleziona Modello"
                                  : "Prima seleziona un brand"
                              }}
                            </option>
                            <option
                              v-for="model in modelOptions"
                              :key="model.value"
                              :value="model.value"
                            >
                              {{ model.label }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label">
                            Anno <span class="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            v-model="carData.year"
                            class="form-control"
                            placeholder="Es. 2020"
                            min="1900"
                            :max="new Date().getFullYear() + 1"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label">
                            Prezzo (€/giorno) <span class="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            v-model="carData.price"
                            class="form-control"
                            placeholder="0.00"
                            min="0"
                            step="0.01"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Step 2: Specifiche Tecniche -->
                  <div class="form-section">
                    <h5 class="section-title">
                      <i class="feather-settings"></i> Specifiche Tecniche
                    </h5>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label">
                            Chilometraggio (km)
                          </label>
                          <input
                            type="number"
                            v-model="carData.mileage"
                            class="form-control"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label">
                            Carburante <span class="text-danger">*</span>
                          </label>
                          <select
                            v-model="carData.fuel_type"
                            class="form-control"
                            required
                          >
                            <option value="">Seleziona Carburante</option>
                            <option
                              v-for="fuel in fuelOptions"
                              :key="fuel.value"
                              :value="fuel.value"
                            >
                              {{ fuel.label }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label">
                            Cambio <span class="text-danger">*</span>
                          </label>
                          <select
                            v-model="carData.transmission"
                            class="form-control"
                            required
                          >
                            <option value="">Seleziona Cambio</option>
                            <option
                              v-for="transmission in transmissionOptions"
                              :key="transmission.value"
                              :value="transmission.value"
                            >
                              {{ transmission.label }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label">
                            Posti <span class="text-danger">*</span>
                          </label>
                          <select
                            v-model="carData.seats"
                            class="form-control"
                            required
                          >
                            <option value="">Seleziona Posti</option>
                            <option
                              v-for="seat in seatOptions"
                              :key="seat.value"
                              :value="seat.value"
                            >
                              {{ seat.label }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label">
                            Colore <span class="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            v-model="carData.color"
                            class="form-control"
                            placeholder="Es. Rosso"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Step 3: Descrizione -->
                  <div class="form-section">
                    <h5 class="section-title">
                      <i class="feather-file-text"></i> Descrizione
                    </h5>
                    <div class="form-group">
                      <label class="form-label">Descrizione</label>
                      <textarea
                        v-model="carData.desctiption"
                        class="form-control"
                        rows="4"
                        placeholder="Descrivi la tua auto, eventuali optional, condizioni, ecc..."
                      ></textarea>
                    </div>
                  </div>

                  <!-- Step 4: Immagini -->
                  <div class="form-section">
                    <h5 class="section-title">
                      <i class="feather-image"></i> Immagini
                    </h5>
                    <div class="form-group">
                      <label class="form-label">
                        Immagini <span class="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        @change="handleImageUpload"
                        class="form-control"
                        accept="image/*"
                        multiple
                      />
                      <small class="form-text text-muted">
                        Puoi caricare fino a 10 immagini. Formati supportati:
                        JPG, PNG, WebP. Dimensione massima: 5MB per immagine.
                      </small>
                      <div
                        v-if="
                          !carData.images.length &&
                          errorMessage &&
                          !isSubmitting
                        "
                        class="text-danger mt-2"
                      >
                        {{
                          isEditMode
                            ? "Devi avere almeno un'immagine."
                            : "Devi caricare almeno un'immagine."
                        }}
                      </div>
                    </div>

                    <!-- Preview delle immagini -->
                    <div
                      v-if="carData.images.length > 0"
                      class="image-preview-section"
                    >
                      <h6>Anteprima Immagini:</h6>
                      <div class="image-preview-grid">
                        <div
                          v-for="(image, index) in carData.images"
                          :key="index"
                          class="image-preview-item"
                        >
                          <img
                            :src="image.preview"
                            :alt="image.name"
                            class="preview-image"
                          />
                          <button
                            type="button"
                            @click="removeImage(index)"
                            class="remove-image-btn"
                          >
                            <i class="feather-x"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Submit Button -->
                  <div class="form-submit-section">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="!isFormValid || isSubmitting"
                    >
                      <span v-if="isSubmitting">
                        <i class="fas fa-spinner fa-spin me-2"></i>
                        {{
                          isEditMode
                            ? "Aggiornamento in corso..."
                            : "Caricamento in corso..."
                        }}
                      </span>
                      <span v-else>
                        <i
                          :class="
                            isEditMode
                              ? 'feather-save me-2'
                              : 'feather-upload me-2'
                          "
                        ></i>
                        {{ isEditMode ? "Aggiorna Auto" : "Carica Auto" }}
                      </span>
                    </button>
                  </div>
                </form>

                <!-- Success Message -->
                <div v-if="successMessage" class="alert alert-success mt-3">
                  {{ successMessage }}
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="alert alert-danger mt-3">
                  {{ errorMessage }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->

    <layout-footer></layout-footer>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useAuth } from "@/composables/useAuth";
import PocketBase from "pocketbase";
import carListData from "@/assets/json/car-list.json";
import { useRoute, useRouter } from "vue-router";

const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  setup() {
    const { currentUser, isAuthenticated } = useAuth();
    const route = useRoute();
    const router = useRouter();

    const title = ref("Carica Auto");
    const text = "Home";
    const text1 = ref("Carica Auto");

    // Check if we're in edit mode
    const isEditMode = computed(() => route.query.edit);
    const editingCarId = ref(null);

    // Car data object matching the PocketBase collection schema
    const carData = ref({
      brand: null,
      model: null,
      year: null,
      price: null,
      mileage: null,
      fuel_type: null,
      transmission: null,
      seats: null,
      color: null,
      desctiption: "",
      images: [],
      approved: false,
    });

    const isSubmitting = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");

    // Options for form fields
    const fuelOptions = [
      { label: "Elettrico", value: "Elettrico" },
      { label: "Benzina", value: "Benzina" },
      { label: "Diesel", value: "Diesel" },
      { label: "GPL", value: "GPL" },
      { label: "Metano", value: "Metano" },
      { label: "Ibrida", value: "Ibrida" },
      { label: "Altro", value: "Altro" },
    ];

    const transmissionOptions = [
      { label: "Manuale", value: "Manuale" },
      { label: "Automatico", value: "Automatico" },
      { label: "Altro", value: "Altro" },
    ];

    const seatOptions = [
      { label: "2 Posti", value: 2 },
      { label: "3 Posti", value: 3 },
      { label: "4 Posti", value: 4 },
      { label: "5 Posti", value: 5 },
      { label: "6 Posti", value: 6 },
      { label: "7 Posti", value: 7 },
      { label: "8 Posti", value: 8 },
      { label: "9 Posti", value: 9 },
    ];

    // Computed properties
    const brandOptions = computed(() => {
      const brands = Object.keys(carListData).map((brand) => ({
        label: brand,
        value: brand,
      }));
      return brands;
    });

    const modelOptions = computed(() => {
      if (!carData.value.brand) {
        return [];
      }
      const models = carListData[carData.value.brand] || [];
      return models.map((model) => ({
        label: model,
        value: model,
      }));
    });

    const isFormValid = computed(() => {
      const required = [
        "brand",
        "model",
        "year",
        "price",
        "fuel_type",
        "transmission",
        "seats",
        "color",
      ];

      const validation = required.every((field) => {
        const value = carData.value[field];
        return value !== null && value !== undefined && value !== "";
      });

      const hasImages = carData.value.images.length > 0;

      // In edit mode, we can have existing images without files
      const hasValidImages = isEditMode.value
        ? carData.value.images.length > 0
        : carData.value.images.some((img) => img.file);

      return validation && hasValidImages;
    });

    // Methods
    const handleImageUpload = (event) => {
      const files = Array.from(event.target.files);
      const maxFiles = 10;
      const maxSize = 5 * 1024 * 1024; // 5MB per file
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
      ];

      // Check if adding these files would exceed the limit
      if (carData.value.images.length + files.length > maxFiles) {
        alert(
          `Puoi caricare al massimo ${maxFiles} immagini. Attualmente hai ${carData.value.images.length} immagini.`
        );
        return;
      }

      for (const file of files) {
        // Check file type
        if (!allowedTypes.includes(file.type)) {
          alert(
            `Il file ${file.name} non è in un formato supportato. Usa JPG, PNG o WebP.`
          );
          continue;
        }

        // Check file size
        if (file.size > maxSize) {
          alert(
            `Il file ${file.name} è troppo grande. Dimensione massima: 5MB.`
          );
          continue;
        }

        // Create preview URL
        const preview = URL.createObjectURL(file);

        // Add to images array
        carData.value.images.push({
          file: file,
          preview: preview,
          name: file.name,
          size: file.size,
        });
      }

      // Clear the input
      event.target.value = "";
    };

    const removeImage = (index) => {
      const image = carData.value.images[index];

      // Only revoke URL if it's not an existing image
      if (!image.isExisting) {
        URL.revokeObjectURL(image.preview);
      }

      carData.value.images.splice(index, 1);
    };

    const submitCar = async () => {
      try {
        isSubmitting.value = true;
        errorMessage.value = "";
        successMessage.value = "";

        // Validate form
        if (!isFormValid.value) {
          errorMessage.value =
            "Compila tutti i campi obbligatori e carica almeno un'immagine.";
          return;
        }

        // Prepare form data for PocketBase
        const formData = new FormData();

        // Add text fields
        formData.append("brand", carData.value.brand || "");
        formData.append("model", carData.value.model || "");
        formData.append("year", carData.value.year || "");
        formData.append(
          "price",
          carData.value.price ? parseFloat(carData.value.price) : 0
        );
        formData.append("mileage", parseInt(carData.value.mileage) || 0);
        formData.append("fuel_type", carData.value.fuel_type || "");
        formData.append("transmission", carData.value.transmission || "");
        formData.append("seats", parseInt(carData.value.seats) || 0);
        formData.append("color", carData.value.color || "");
        formData.append(
          "desctiption",
          carData.value.desctiption ? String(carData.value.desctiption) : ""
        );
        formData.append("approved", false); // Auto non approvate di default
        formData.append("uploadBy", currentUser.value.id); // ID dell'utente che carica l'auto

        // Handle images differently for edit mode
        if (isEditMode.value) {
          // For editing, we need to handle existing images carefully
          const newImages = carData.value.images.filter(
            (img) => !img.isExisting && img.file
          );
          newImages.forEach((imageObj) => {
            formData.append("images", imageObj.file);
          });
        } else {
          // For new cars, add all images
          carData.value.images.forEach((imageObj) => {
            formData.append("images", imageObj.file);
          });
        }

        let record;
        if (isEditMode.value) {
          // Update existing car
          record = await pb
            .collection("cars")
            .update(editingCarId.value, formData);
          console.log("Auto aggiornata con successo:", record);
          successMessage.value =
            "Auto aggiornata con successo! Sarà visibile dopo l'approvazione dell'amministratore.";
        } else {
          // Create new car
          record = await pb.collection("cars").create(formData);
          console.log("Auto creata con successo:", record);
          successMessage.value =
            "Auto caricata con successo! Sarà visibile dopo l'approvazione dell'amministratore.";
        }

        // Reset form and redirect
        resetForm();
        setTimeout(() => {
          router.push("/user/user-uploaded-cars");
        }, 2000);
      } catch (error) {
        console.error("Errore nel salvataggio dell'auto:", error);
        errorMessage.value =
          "Errore nel salvataggio dell'auto. Riprova più tardi.";
      } finally {
        isSubmitting.value = false;
      }
    };

    const resetForm = () => {
      carData.value = {
        brand: null,
        model: null,
        year: null,
        price: null,
        mileage: null,
        fuel_type: null,
        transmission: null,
        seats: null,
        color: null,
        desctiption: "",
        images: [],
        approved: false,
      };
    };

    // Load car data for editing
    const loadCarForEditing = async (carId) => {
      try {
        const car = await pb.collection("cars").getOne(carId);

        // Check if the user owns this car
        if (!car.uploadBy) {
          console.error("Il campo uploadBy non è presente o è vuoto:", car);
        }
        if (car.uploadBy !== currentUser.value.id) {
          alert("Non hai i permessi per modificare questa auto.");
          router.push("/user/user-uploaded-cars");
          return;
        }

        editingCarId.value = carId;

        // Populate form with car data
        carData.value = {
          brand: car.brand,
          model: car.model,
          year: car.year,
          price: car.price,
          mileage: car.mileage,
          fuel_type: car.fuel_type,
          transmission: car.transmission,
          seats: car.seats,
          color: car.color,
          desctiption: car.desctiption || "",
          images: [], // We'll handle existing images separately
          approved: false, // Will be set to false when updating
        };

        // Handle existing images
        if (car.images && car.images.length > 0) {
          car.images.forEach((imageName, index) => {
            carData.value.images.push({
              file: null, // No file object for existing images
              preview: `http://127.0.0.1:8090/api/files/cars/${carId}/${imageName}`,
              name: imageName,
              size: 0,
              isExisting: true, // Flag to identify existing images
            });
          });
        }

        // Update title for edit mode
        title.value = "Modifica Auto";
        text1.value = "Modifica Auto";
      } catch (error) {
        console.error("Errore nel caricamento dell'auto:", error);
        alert("Errore nel caricamento dell'auto. Riprova più tardi.");
        router.push("/user/user-uploaded-cars");
      }
    };

    // Load car data if in edit mode
    onMounted(async () => {
      if (isEditMode.value) {
        await loadCarForEditing(isEditMode.value);
      }
    });

    return {
      title,
      text,
      text1,
      carData,
      isSubmitting,
      successMessage,
      errorMessage,
      isAuthenticated,
      brandOptions,
      modelOptions,
      fuelOptions,
      transmissionOptions,
      seatOptions,
      isFormValid,
      handleImageUpload,
      removeImage,
      submitCar,
      isEditMode,
    };
  },
};
</script>

<style scoped>
.upload-car-wrap {
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.form-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background: #f8f9fa;
}

.section-title {
  color: #333;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-title i {
  color: #007bff;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: block;
}

.form-control {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 15px;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.image-preview-section {
  margin-top: 20px;
}

.image-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.image-preview-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.preview-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
}

.remove-image-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(220, 53, 69, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-image-btn:hover {
  background: rgba(220, 53, 69, 1);
}

.form-submit-section {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;
}

.btn-primary {
  background: #007bff;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.btn-primary:disabled {
  background: #6c757d;
  cursor: not-allowed;
  transform: none;
}

.alert {
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 20px;
}

.alert-success {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.alert-danger {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

.alert-warning {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
}

@media (max-width: 768px) {
  .upload-car-wrap {
    padding: 20px;
  }

  .form-section {
    padding: 15px;
  }

  .image-preview-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
  }
}
</style>
