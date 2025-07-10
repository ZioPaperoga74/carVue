<template>
  <div>
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content me-0">
        <div class="mb-3">
          <router-link
            to="/admin-template/rentals/cars"
            class="d-inline-flex align-items-center fw-medium"
            ><i class="ti ti-arrow-left me-1"></i>Back to List</router-link
          >
        </div>
        <div class="card mb-0">
          <div class="card-body">
            <div class="add-wizard car-steps">
              <ul class="nav d-flex align-items-center flex-wrap gap-3"></ul>
              <fieldset id="first-field" v-if="currentStep === 1">
                <form action="#">
                  <div
                    class="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3"
                  >
                    <h4 class="d-flex align-items-center">
                      <i class="ti ti-info-circle text-secondary me-2"></i>Basic
                      Info
                    </h4>
                  </div>
                  <div class="border-bottom mb-4 pb-4">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">Featured Images</h6>
                        <p>Upload up to 10 car images (JPG, PNG, WebP)</p>
                      </div>
                      <div class="col-xl-9">
                        <div class="upload-pic">
                          <!-- Display existing images -->
                          <div
                            v-if="carData.images.length > 0"
                            class="uploaded-images d-flex align-items-center flex-wrap gap-3 mb-3"
                          >
                            <div
                              v-for="(image, index) in carData.images"
                              :key="index"
                              class="uploaded-img position-relative"
                            >
                              <img
                                :src="image.preview"
                                class="img-fluid rounded"
                                alt="Car image"
                                style="
                                  width: 100px;
                                  height: 100px;
                                  object-fit: cover;
                                "
                              />
                              <a
                                href="javascript:void(0);"
                                class="upload-img-trash trash-end btn btn-sm rounded-circle position-absolute"
                                style="top: -5px; right: -5px"
                                @click="removeImage(index)"
                              >
                                <i class="ti ti-trash fs-12"></i>
                              </a>
                            </div>
                          </div>

                          <!-- Upload button -->
                          <div v-if="carData.images.length < 10">
                            <div
                              class="drag-upload-btn btn btn-md btn-dark d-inline-flex align-items-center mb-2"
                            >
                              <i class="ti ti-photo me-1"></i>
                              {{
                                carData.images.length === 0
                                  ? "Add Images"
                                  : "Add More Images"
                              }}
                              <input
                                type="file"
                                class="form-control image-sign"
                                multiple
                                @change="handleImageUpload"
                                accept="image/jpeg,image/jpg,image/png,image/webp"
                                :style="{
                                  position: 'absolute',
                                  opacity: 0,
                                  width: '100%',
                                  height: '100%',
                                  cursor: 'pointer',
                                }"
                              />
                            </div>
                            <p class="text-muted small">
                              {{ carData.images.length }}/10 images uploaded.
                              Recommended size: 800x600px. Max file size: 5MB
                              each.
                            </p>
                          </div>
                          <div v-else>
                            <p class="text-success">
                              Maximum number of images reached (10/10)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-bottom mb-2 pb-2">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">Car Info</h6>
                        <p>Add Information About Car</p>
                      </div>
                      <div class="col-xl-9">
                        <div class="mb-3">
                          <label class="form-label">Description</label>
                          <textarea
                            class="form-control"
                            rows="3"
                            v-model="carData.desctiption"
                            placeholder="Enter car description"
                          >
                          </textarea>
                        </div>

                        <div class="row">
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <label class="form-label"
                                  >Brand
                                  <span class="text-danger">*</span></label
                                >
                              </div>
                              <vue-select
                                :options="brandOptions"
                                v-model="carData.brand"
                                placeholder="Seleziona Brand"
                                @option:selected="onBrandChange"
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <label class="form-label"
                                  >Model
                                  <span class="text-danger">*</span></label
                                >
                              </div>
                              <vue-select
                                :options="modelOptions"
                                v-model="carData.model"
                                placeholder="Seleziona Modello"
                                :disabled="!carData.brand"
                                @option:selected="onModelChange"
                              />
                              <small
                                v-if="!carData.brand"
                                class="form-text text-muted"
                              >
                                Seleziona prima un brand per vedere i modelli
                                disponibili
                              </small>
                              <small
                                v-else-if="
                                  carData.brand && modelOptions.length === 1
                                "
                                class="form-text text-warning"
                              >
                                Nessun modello disponibile per questo brand
                              </small>
                              <small
                                v-else-if="
                                  carData.brand && modelOptions.length > 1
                                "
                                class="form-text text-success"
                              >
                                {{ modelOptions.length - 1 }} modelli
                                disponibili per {{ carData.brand }}
                              </small>
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <label class="form-label"
                                >Fuel Type
                                <span class="text-danger">*</span></label
                              >
                              <vue-select
                                :options="Fuel"
                                v-model="carData.fuel_type"
                                placeholder="Seleziona Carburante"
                                @option:selected="onFuelTypeChange"
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <label class="form-label"
                                >Transmission
                                <span class="text-danger">*</span></label
                              >
                              <vue-select
                                :options="Transmission"
                                v-model="carData.transmission"
                                placeholder="Seleziona Cambio"
                                @option:selected="onTransmissionChange"
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <label class="form-label">
                                Color <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                v-model="carData.color"
                                placeholder="Inserisci colore"
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <label class="form-label"
                                >Seats <span class="text-danger">*</span></label
                              >
                              <vue-select
                                :options="Seats"
                                v-model="carData.seats"
                                placeholder="Seleziona Posti"
                                @option:selected="onSeatsChange"
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <label class="form-label"
                                >Year <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                v-model="carData.year"
                                class="form-control"
                                placeholder="Inserisci anno"
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <label class="form-label"
                                >Price (€)
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="number"
                                class="form-control"
                                v-model="carData.price"
                                placeholder="0.00"
                                step="0.01"
                                min="0"
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <label class="form-label">Mileage (km)</label>
                              <input
                                type="number"
                                class="form-control"
                                v-model="carData.mileage"
                                placeholder="0"
                                min="0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-end pt-3"
                  >
                    <button
                      type="button"
                      class="btn btn-outline-light border wizard-prev me-2"
                      @click="previousStep"
                      :disabled="currentStep === 7"
                    >
                      <i class="ti ti-chevron-left me-1"></i>Back
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary d-flex align-items-center"
                      @click="submitCar"
                      :disabled="!isFormValid || isSubmitting"
                    >
                      <span v-if="isSubmitting">Saving...</span>
                      <span v-else>Save</span>
                      <i class="ti ti-chevron-right ms-1"></i>
                    </button>
                  </div>
                </form>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer-->

      <!-- /Footer-->
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import carListData from "@/assets/json/car-list.json";
import PocketBase from "pocketbase";
import dayjs from "dayjs"; // Usa dayjs invece di moment

// Initialize PocketBase
const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  setup() {
    const route = useRoute();
    return { route };
  },
  data() {
    return {
      // Car data object matching the PocketBase collection schema
      carData: {
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
        images: [], // Array to handle multiple image files
        approved: false,
      },
      currentStep: 1,
      totalSteps: 8,
      isSubmitting: false,
      loading: true,
      error: null,
      carListData: carListData,

      Fuel: [
        { label: "Seleziona Carburante", value: null },
        { label: "Elettrico", value: "Elettrico" },
        { label: "Benzina", value: "Benzina" },
        { label: "Diesel", value: "Diesel" },
        { label: "GPL", value: "GPL" },
        { label: "Metano", value: "Metano" },
        { label: "Ibrida", value: "Ibrida" },
        { label: "Altro", value: "Altro" },
      ],
      Transmission: [
        { label: "Seleziona Cambio", value: null },
        { label: "Manuale", value: "Manuale" },
        { label: "Automatico", value: "Automatico" },
        { label: "Altro", value: "Altro" },
      ],
      Seats: [
        { label: "Seleziona Posti", value: null },
        { label: "2 Posti", value: 2 },
        { label: "3 Posti", value: 3 },
        { label: "4 Posti", value: 4 },
        { label: "5 Posti", value: 5 },
        { label: "6 Posti", value: 6 },
        { label: "7 Posti", value: 7 },
        { label: "8 Posti", value: 8 },
        { label: "9 Posti", value: 9 },
      ],
      yearMoment: null,
      yearDate: null,
    };
  },
  computed: {
    isFormValid() {
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
        const value = this.carData[field];
        const isValid = value !== null && value !== undefined && value !== "";
        return isValid;
      });

      const hasImages = this.carData.images.length > 0;
      return validation && hasImages;
    },
    brandOptions() {
      const brands = Object.keys(this.carListData).map((brand) => ({
        label: brand,
        value: brand,
      }));
      return [{ label: "Seleziona Brand", value: null }, ...brands];
    },
    modelOptions() {
      if (!this.carData.brand) {
        return [{ label: "Prima seleziona un brand", value: null }];
      }

      const models = this.carListData[this.carData.brand] || [];
      const modelOptions = models.map((model) => ({
        label: model,
        value: model,
      }));

      return [{ label: "Seleziona Modello", value: null }, ...modelOptions];
    },
  },
  watch: {
    "carData.brand"(newBrand, oldBrand) {
      if (newBrand !== oldBrand && this.carData.model) {
        this.carData.model = null;
      }
    },
    // Quando carData.year cambia (dopo fetch), aggiorna yearMoment
    "carData.year": {
      immediate: true,
      handler(newVal) {
        this.yearMoment = newVal ? dayjs(String(newVal), "YYYY") : null;
        this.yearDate = newVal ? new Date(Number(newVal), 0, 1) : null;
        console.log(
          "DEBUG yearMoment:",
          this.yearMoment,
          this.yearMoment &&
            this.yearMoment.format &&
            this.yearMoment.format("YYYY")
        );
        console.log("DEBUG yearDate:", this.yearDate);
      },
    },
    // Quando yearMoment cambia (utente seleziona), aggiorna carData.year
    yearMoment(newVal) {
      this.carData.year = newVal ? newVal.year() : null;
    },
    yearDate(newVal) {
      this.carData.year = newVal ? newVal.getFullYear() : null;
    },
  },
  methods: {
    async fetchCarData() {
      try {
        const carId = this.route.params.id;
        if (!carId) {
          this.error = "Car ID not provided";
          return;
        }

        const car = await pb.collection("cars").getOne(carId);

        // Carica immagini
        let images = [];
        if (car.images && car.images.length > 0) {
          images = car.images.map((imageName) => ({
            name: imageName,
            preview: `http://127.0.0.1:8090/api/files/cars/${carId}/${imageName}`,
            isExisting: true,
          }));
        }

        // DEBUG: logga il valore year ricevuto da PB
        console.log(
          "[DEBUG fetchCarData] car.year from PB:",
          car.year,
          typeof car.year
        );

        // Imposta i dati base come richiesto dalla collection (year come numero non zero)
        Object.assign(this.carData, {
          brand: car.brand || null,
          model: car.model || null,
          year: car.year ? Number(car.year) : null, // year come numero
          price: car.price || null,
          mileage: car.mileage || null,
          fuel_type: car.fuel_type || null,
          transmission: car.transmission || null,
          seats: car.seats || null,
          color: car.color || null,
          desctiption: car.desctiption || "",
          approved: car.approved || false,
          images,
        });

        // DEBUG: logga il valore year dopo l'assegnazione
        console.log(
          "[DEBUG fetchCarData] carData.year after assign:",
          this.carData.year,
          typeof this.carData.year
        );

        // Forza l'aggiornamento del computed yearPickerValue
        this.$nextTick(() => {
          this.$forceUpdate && this.$forceUpdate();
        });

        // Dopo il nextTick, sincronizza brand e model come stringhe
        this.$nextTick(() => {
          // Brand
          const brandObj = this.brandOptions.find(
            (opt) => opt.value === car.brand
          );
          if (brandObj) {
            this.carData.brand = brandObj.value;
            this.$forceUpdate && this.$forceUpdate();
            this.$nextTick(() => {
              // Model (dopo che il brand è stato settato)
              const modelObj = this.modelOptions.find(
                (opt) => opt.value === car.model
              );
              if (modelObj) this.carData.model = modelObj.value;
            });
          }
        });
      } catch (err) {
        console.error("Error fetching car data:", err);
        this.error = "Failed to load car data";
      } finally {
        this.loading = false;
      }
    },

    async handleImageUpload(event) {
      const files = Array.from(event.target.files);
      const maxFiles = 10;
      const maxSize = 5 * 1024 * 1024; // 5MB per file
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
      ];

      if (this.carData.images.length + files.length > maxFiles) {
        alert(
          `You can only upload a maximum of ${maxFiles} images. Currently you have ${this.carData.images.length} images.`
        );
        return;
      }

      for (const file of files) {
        if (!allowedTypes.includes(file.type)) {
          alert(
            `File ${file.name} is not a supported format. Please use JPG, PNG, or WebP.`
          );
          continue;
        }

        if (file.size > maxSize) {
          alert(`File ${file.name} is too large. Maximum size is 5MB.`);
          continue;
        }

        const preview = URL.createObjectURL(file);

        this.carData.images.push({
          file: file,
          preview: preview,
          name: file.name,
          size: file.size,
          isExisting: false, // Flag to identify new images
        });
      }

      event.target.value = "";
    },

    removeImage(index) {
      const image = this.carData.images[index];

      // If it's a new image with preview URL, revoke it
      if (!image.isExisting && image.preview) {
        URL.revokeObjectURL(image.preview);
      }

      this.carData.images.splice(index, 1);
    },

    async submitCar() {
      try {
        this.isSubmitting = true;

        if (!this.isFormValid) {
          alert(
            "Please fill in all required fields and upload at least one image."
          );
          return;
        }

        const carId = this.route.params.id;

        // Prepare form data for PocketBase
        const formData = new FormData();

        // Add text fields (tutti come stringhe)
        formData.append("brand", this.carData.brand || "");
        formData.append("model", this.carData.model || "");
        formData.append("year", this.carData.year || "");
        formData.append(
          "price",
          this.carData.price ? parseFloat(this.carData.price) : 0
        );
        formData.append("mileage", parseInt(this.carData.mileage) || 0);
        formData.append("fuel_type", this.carData.fuel_type || "");
        formData.append("transmission", this.carData.transmission || "");
        formData.append("seats", parseInt(this.carData.seats) || 0);
        formData.append("color", this.carData.color || "");
        formData.append(
          "desctiption",
          this.carData.desctiption ? String(this.carData.desctiption) : ""
        );
        formData.append("approved", this.carData.approved);

        // Add only new image files (not existing ones)
        const newImages = this.carData.images.filter((img) => !img.isExisting);
        newImages.forEach((imageObj) => {
          formData.append("images", imageObj.file);
        });

        // Update in PocketBase
        const record = await pb.collection("cars").update(carId, formData);

        console.log("Car updated successfully:", record);

        alert("Auto aggiornata con successo!");

        // Redirect to car details
        this.$router.push(`/admin-template/rentals/car-details/${carId}`);
      } catch (error) {
        console.error("Error updating car:", error);

        let errorMessage = "Errore durante l'aggiornamento dell'auto.";
        if (error.response && error.response.data) {
          const errors = error.response.data;
          if (errors.message) {
            errorMessage = errors.message;
          } else if (typeof errors === "object") {
            const errorFields = Object.keys(errors);
            errorMessage = `Errore nei campi: ${errorFields.join(", ")}`;
          }
        }

        alert(errorMessage);
      } finally {
        this.isSubmitting = false;
      }
    },

    onBrandChange(option) {
      const value = option ? option.value : null;
      this.carData.brand = value;
      this.carData.model = null;
      console.log("Brand changed to:", value, "from option:", option);
    },

    onFuelTypeChange(option) {
      const value = option ? option.value : null;
      this.carData.fuel_type = value;
      console.log("Fuel type changed to:", value, "from option:", option);
    },

    onTransmissionChange(option) {
      const value = option ? option.value : null;
      this.carData.transmission = value;
      console.log("Transmission changed to:", value, "from option:", option);
    },

    onColorChange(value) {
      this.carData.color = value;
      console.log("Color changed to:", value);
    },

    onSeatsChange(option) {
      const value = option ? option.value : null;
      this.carData.seats = value;
      console.log("Seats changed to:", value, "from option:", option);
    },

    onModelChange(option) {
      const value = option ? option.value : null;
      this.carData.model = value;
      console.log("Model changed to:", value, "from option:", option);
    },

    onYearChange(date) {
      this.carData.year = date ? date.year() : null;
      console.log("Year changed to:", this.carData.year);
    },

    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },

    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
  },

  mounted() {
    this.fetchCarData();
    // Forza yearMoment dopo il fetch
    this.$nextTick(() => {
      this.yearMoment = this.carData.year
        ? dayjs(String(this.carData.year), "YYYY")
        : null;
      console.log(
        "DEBUG mounted yearMoment:",
        this.yearMoment,
        this.yearMoment &&
          this.yearMoment.format &&
          this.yearMoment.format("YYYY")
      );
    });
  },

  beforeUnmount() {
    // Cleanup any remaining object URLs
    this.carData.images.forEach((img) => {
      if (!img.isExisting && img.preview) {
        URL.revokeObjectURL(img.preview);
      }
    });
  },
};
</script>

<style scoped>
.uploaded-img {
  position: relative;
  display: inline-block;
}

.upload-img-trash {
  background: #dc3545;
  color: white;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-img-trash:hover {
  background: #c82333;
}

.drag-upload-btn {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.image-sign {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
</style>
