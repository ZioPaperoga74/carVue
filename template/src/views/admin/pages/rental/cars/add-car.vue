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
                    class="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3 card-bg"
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
                                >Year of Car
                                <span class="text-danger">*</span></label
                              >
                              <div class="input-icon-end position-relative">
                                <a-date-picker
                                  type="text"
                                  class="form-control yearpicker"
                                  placeholder="Select Year"
                                  picker="year"
                                  v-model="carData.year"
                                  @change="onYearChange"
                                  format="YYYY"
                                />
                                <span class="input-icon-addon">
                                  <i class="ti ti-calendar"></i>
                                </span>
                              </div>
                              <!-- Alternative year input -->
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
                              <label class="form-label">Mileage (km)</label>
                              <input
                                type="number"
                                class="form-control"
                                v-model="carData.mileage"
                                placeholder="Enter mileage in kilometers"
                                min="0"
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <label class="form-label"
                                >Price (€/day)
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="number"
                                class="form-control"
                                v-model="carData.price"
                                placeholder="Enter daily rental price"
                                min="0"
                                step="0.01"
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
                                >No of Seats
                                <span class="text-danger">*</span></label
                              >
                              <vue-select
                                :options="Seats"
                                v-model="carData.seats"
                                placeholder="Seleziona Posti"
                                @option:selected="onSeatsChange"
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
                      class="btn btn-light d-flex align-items-center me-2"
                      @click="cancelForm"
                    >
                      <i class="ti ti-chevron-left me-1"></i>Cancel
                    </button>
                    <button
                      class="btn btn-primary wizard-next d-flex align-items-center"
                      @click="submitCar"
                      type="button"
                      :disabled="!isFormValid || isSubmitting"
                    >
                      <span v-if="isSubmitting">
                        <i class="ti ti-loader me-1"></i>Saving...
                      </span>
                      <span v-else>
                        Add Car<i class="ti ti-chevron-right ms-1"></i>
                      </span>
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset v-if="currentStep === 2">
                <form action="#">
                  <div
                    class="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3"
                  >
                    <h4 class="d-flex align-items-center">
                      <i class="ti ti-flame text-secondary me-2"></i>Features &
                      Amenities
                    </h4>
                    <div class="dropdown flag-dropdown">
                      <a
                        class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        href="javascript:void(0);"
                      >
                        <img
                          src="@/assets/admin/img/flags/gb.svg"
                          alt="Language"
                          class="img-fluid me-1"
                        />English
                      </a>
                      <ul class="dropdown-menu p-2">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/gb.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />English
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/sa.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />Arabic
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="border-bottom mb-2 pb-2 amenity-wrap">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">Features & Amenities</h6>
                        <p>Add Information About Car</p>
                      </div>
                      <div class="col-xl-9">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="mb-3">
                              <div class="form-check mb-0">
                                <input
                                  class="form-check-input select-all"
                                  type="checkbox"
                                  id="select-all1"
                                />
                                <label class="form-check-label" for="amenity">
                                  Check All
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity"
                                />
                                <label class="form-check-label" for="amenity">
                                  Air Condition
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity1"
                                />
                                <label class="form-check-label" for="amenity1">
                                  Climate Control
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity2"
                                />
                                <label class="form-check-label" for="amenity2">
                                  Climate Control Two Zones
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity3"
                                />
                                <label class="form-check-label" for="amenity3">
                                  Luxury Climate Control
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity4"
                                />
                                <label class="form-check-label" for="amenity4">
                                  Sunroof
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity5"
                                />
                                <label class="form-check-label" for="amenity5">
                                  Panoramic Sunroof
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity6"
                                />
                                <label class="form-check-label" for="amenity6">
                                  Moonroof
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity7"
                                />
                                <label class="form-check-label" for="amenity7">
                                  Push-button Start
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity8"
                                />
                                <label class="form-check-label" for="amenity8">
                                  Keyless Access
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity9"
                                />
                                <label class="form-check-label" for="amenity9">
                                  Rear Parking Sensors
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity10"
                                />
                                <label class="form-check-label" for="amenity10">
                                  Parking Sensors
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity11"
                                />
                                <label class="form-check-label" for="amenity11">
                                  Built-in Sat Nav
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity12"
                                />
                                <label class="form-check-label" for="amenity12">
                                  Mobile Phone Technology
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity13"
                                />
                                <label class="form-check-label" for="amenity13">
                                  Bluetooth
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity14"
                                />
                                <label class="form-check-label" for="amenity14">
                                  Usb
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity15"
                                />
                                <label class="form-check-label" for="amenity15">
                                  Qi Wireless Charging
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity16"
                                />
                                <label class="form-check-label" for="amenity16">
                                  Audio/ipod
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity17"
                                  checked
                                />
                                <label class="form-check-label" for="amenity17">
                                  Cruise Control
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity18"
                                />
                                <label class="form-check-label" for="amenity18">
                                  Adaptive Cruise Control
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity19"
                                />
                                <label class="form-check-label" for="amenity19">
                                  Apple Carplay
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity20"
                                />
                                <label class="form-check-label" for="amenity20">
                                  Android Auto
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity21"
                                />
                                <label class="form-check-label" for="amenity21">
                                  Forward Collision Warning
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity22"
                                />
                                <label class="form-check-label" for="amenity22">
                                  Lane Departure Warning
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity23"
                                />
                                <label class="form-check-label" for="amenity23">
                                  Automatic Emergency Braking
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity24"
                                />
                                <label class="form-check-label" for="amenity24">
                                  Active Parking Assist
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity25"
                                />
                                <label class="form-check-label" for="amenity25">
                                  Automatic High Beams
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity26"
                                />
                                <label class="form-check-label" for="amenity26">
                                  Adaptive Headlights
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity27"
                                />
                                <label class="form-check-label" for="amenity27">
                                  360-degree Camera
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity29"
                                />
                                <label class="form-check-label" for="amenity29">
                                  Rearview Camera
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity30"
                                />
                                <label class="form-check-label" for="amenity30">
                                  Towing Hook
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity31"
                                />
                                <label class="form-check-label" for="amenity31">
                                  Leather Interior
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                              <div class="form-check form-checkbox mb-0">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="amenity32"
                                />
                                <label class="form-check-label" for="amenity32">
                                  Fabric Interior
                                </label>
                              </div>
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
                      :disabled="currentStep === 1"
                    >
                      <i class="ti ti-chevron-left me-1"></i>Back
                    </button>
                    <button
                      class="btn btn-primary wizard-next d-flex align-items-center"
                      @click="nextStep"
                      :disabled="currentStep === totalSteps"
                    >
                      Add Tariff & Pricing<i
                        class="ti ti-chevron-right ms-1"
                      ></i>
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset v-if="currentStep === 3">
                <form action="#">
                  <div
                    class="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3"
                  >
                    <h4 class="d-flex align-items-center">
                      <i class="ti ti-files text-secondary me-2"></i>Pricing &
                      Tariff
                    </h4>
                    <div class="dropdown flag-dropdown">
                      <a
                        class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        href="javascript:void(0);"
                      >
                        <img
                          src="@/assets/admin/img/flags/gb.svg"
                          alt="Language"
                          class="img-fluid me-1"
                        />English
                      </a>
                      <ul class="dropdown-menu p-2">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/gb.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />English
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/sa.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />Arabic
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="border-bottom mb-4 pb-2 unlimited-price">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">Pricing</h6>
                        <p>Add Pricing for Cars</p>
                      </div>
                      <div class="col-xl-9">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="mb-3">
                              <label class="form-label"
                                >Pricing Type
                                <span class="text-danger">*</span></label
                              >
                              <div
                                class="d-flex align-items-center flex-wrap gap-3"
                              >
                                <div class="form-check mb-0">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="price"
                                    checked
                                  />
                                  <label class="form-check-label" for="price">
                                    Daily
                                  </label>
                                </div>
                                <div class="form-check mb-0">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="price1"
                                    checked
                                  />
                                  <label class="form-check-label" for="price1">
                                    Weekly
                                  </label>
                                </div>
                                <div class="form-check mb-0">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="price2"
                                    checked
                                  />
                                  <label class="form-check-label" for="price2">
                                    Monthly
                                  </label>
                                </div>
                                <div class="form-check mb-0">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="price3"
                                    checked
                                  />
                                  <label class="form-check-label" for="price3">
                                    Yearly
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-6">
                            <div class="mb-3">
                              <label class="form-label"
                                >Daily Price
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="number"
                                class="form-control"
                                v-model="carData.price"
                              />
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-6">
                            <div class="mb-3">
                              <label class="form-label"
                                >Weekly Price
                                <span class="text-danger">*</span></label
                              >
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-6">
                            <div class="mb-3">
                              <label class="form-label"
                                >Monthly Price
                                <span class="text-danger">*</span></label
                              >
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-6">
                            <div class="mb-3">
                              <label class="form-label"
                                >Yearly Price
                                <span class="text-danger">*</span></label
                              >
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="mb-3">
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <label class="form-label"
                                  >Base Kilometers (Per Day)
                                  <span class="text-danger">*</span></label
                                >
                                <div class="form-check unlimited-checkbox mb-2">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="unlimited"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="unlimited"
                                  >
                                    Unlimited
                                  </label>
                                </div>
                              </div>
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="mb-3 unlimited-wrap">
                              <label class="form-label"
                                >Kilometers Extra Price
                                <span class="text-danger">*</span></label
                              >
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-bottom mb-4 pb-2">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">Tarrif</h6>
                        <p>Add Tariff Pricing for Cars</p>
                      </div>
                      <div class="col-xl-9">
                        <div
                          class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3"
                        >
                          <a
                            href="javascript:void(0);"
                            class="btn btn-dark btn-md d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#add-tarrif"
                            ><i class="ti ti-plus me-1"></i>Add New Tarrif
                            Rate</a
                          >
                        </div>
                        <div class="empty-data bg-light text-center mb-3">
                          <p class="fw-medium">No Data Added</p>
                        </div>
                        <div class="card bg-light mb-3">
                          <div class="card-body pb-3">
                            <h6 class="mb-3">Total Tariffs : 21</h6>
                            <div
                              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1"
                            >
                              <div>
                                <h6 class="fs-14 fw-semibold mb-1">
                                  4 to 5 Days
                                </h6>
                                <div
                                  class="d-flex align-items-center gap-2 flex-wrap"
                                >
                                  <p
                                    class="fs-13 fw-medium border-end pe-2 mb-0"
                                  >
                                    Daily Price :
                                    <span class="text-gray-9">$50</span>
                                  </p>
                                  <p
                                    class="fs-13 fw-medium border-end pe-2 mb-0"
                                  >
                                    Base Kilometers :
                                    <span class="text-gray-9">25</span>
                                  </p>
                                  <p class="fs-13 fw-medium mb-0">
                                    Kilometers Extra Price :
                                    <span class="text-gray-9">$200</span>
                                  </p>
                                </div>
                              </div>
                              <div class="d-flex align-items-center">
                                <a
                                  href="javascript:void(0);"
                                  class="edit-icon me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-tarrif"
                                  ><i class="ti ti-edit"></i
                                ></a>
                                <a
                                  href="javascript:void(0);"
                                  class="trash-icon"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_tarrif"
                                  ><i class="ti ti-trash"></i
                                ></a>
                              </div>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border p-20 br-5 mb-1"
                            >
                              <div>
                                <h6 class="fs-14 fw-semibold mb-1">
                                  5 to 8 Days
                                </h6>
                                <div
                                  class="d-flex align-items-center gap-2 flex-wrap"
                                >
                                  <p
                                    class="fs-13 fw-medium border-end pe-2 mb-0"
                                  >
                                    Daily Price :
                                    <span class="text-gray-9">$80</span>
                                  </p>
                                  <p
                                    class="fs-13 fw-medium border-end pe-2 mb-0"
                                  >
                                    Base Kilometers :
                                    <span class="text-gray-9">15</span>
                                  </p>
                                  <p class="fs-13 fw-medium mb-0">
                                    Kilometers Extra Price :
                                    <span class="text-gray-9">$150</span>
                                  </p>
                                </div>
                              </div>
                              <div class="d-flex align-items-center">
                                <a
                                  href="javascript:void(0);"
                                  class="edit-icon me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-tarrif"
                                  ><i class="ti ti-edit"></i
                                ></a>
                                <a
                                  href="javascript:void(0);"
                                  class="trash-icon"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_tarrif"
                                  ><i class="ti ti-trash"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-bottom mb-2 pb-2">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">Seasonal Pricing</h6>
                        <p>Add Seasonal Pricing for Car</p>
                      </div>
                      <div class="col-xl-9">
                        <div
                          class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3"
                        >
                          <a
                            href="javascript:void(0);"
                            class="btn btn-dark btn-md d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#select_price"
                            ><i class="ti ti-plus me-1"></i>Select Seasonal
                            Pricing</a
                          >
                          <a
                            href="javascript:void(0);"
                            class="text-info"
                            data-bs-toggle="modal"
                            data-bs-target="#add_price"
                            >Add New</a
                          >
                        </div>
                        <div class="empty-data bg-light text-center mb-3">
                          <p class="fw-medium">No Data Added</p>
                        </div>
                        <div class="card bg-light mb-3">
                          <div class="card-body pb-3">
                            <div
                              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1"
                            >
                              <div>
                                <h6
                                  class="fs-14 fw-semibold d-inline-flex align-items-center mb-1"
                                >
                                  Halloween<span
                                    class="badge bg-secondary-transparent ms-2"
                                    >01 Oct 2025 - 31 Oct 2025
                                  </span>
                                </h6>
                                <div
                                  class="d-flex align-items-center gap-2 flex-wrap"
                                >
                                  <p
                                    class="fs-13 fw-medium border-end pe-2 mb-0"
                                  >
                                    Daily Rate :
                                    <span class="text-gray-9">$200</span>
                                  </p>
                                  <p
                                    class="fs-13 fw-medium border-end pe-2 mb-0"
                                  >
                                    Weekly Rate :
                                    <span class="text-gray-9">$1400</span>
                                  </p>
                                  <p
                                    class="fs-13 fw-medium border-end pe-2 mb-0"
                                  >
                                    Monthly Rate :
                                    <span class="text-gray-9">$4800</span>
                                  </p>
                                  <p class="fs-13 fw-medium mb-0 pe-2 mb-0">
                                    Late Fee :
                                    <span class="text-gray-9">$200</span>
                                  </p>
                                </div>
                              </div>
                              <div class="d-flex align-items-center">
                                <a
                                  href="javascript:void(0);"
                                  class="edit-icon me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_seasonal_price"
                                  ><i class="ti ti-edit"></i
                                ></a>
                                <a
                                  href="javascript:void(0);"
                                  class="trash-icon"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_price"
                                  ><i class="ti ti-trash"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-bottom mb-2 pb-2">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">Insurance</h6>
                        <p>Add Insurance for Car</p>
                      </div>
                      <div class="col-xl-9">
                        <div
                          class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3"
                        >
                          <a
                            href="javascript:void(0);"
                            class="btn btn-dark btn-md d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#select_insurance"
                            ><i class="ti ti-plus me-1"></i>Select New
                            Insurance</a
                          >
                        </div>
                        <div class="empty-data bg-light text-center mb-3">
                          <p class="fw-medium">No Data Added</p>
                        </div>
                        <div class="card bg-light mb-3">
                          <div class="card-body pb-3">
                            <div
                              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3"
                            >
                              <div>
                                <h6
                                  class="fs-14 fw-semibold d-inline-flex align-items-center mb-1"
                                >
                                  Full Premium Insurance
                                </h6>
                                <div
                                  class="d-flex align-items-center gap-2 flex-wrap"
                                >
                                  <p
                                    class="fs-13 fw-medium border-end pe-2 mb-0"
                                  >
                                    Price :
                                    <span class="text-gray-9">$200</span>
                                  </p>
                                  <p class="fs-13 fw-medium mb-0">
                                    Benefits :
                                    <span class="text-gray-9">04</span>
                                  </p>
                                </div>
                              </div>
                              <div class="d-flex align-items-center">
                                <a
                                  href="javascript:void(0);"
                                  class="edit-icon me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_insurance"
                                  ><i class="ti ti-edit"></i
                                ></a>
                                <a
                                  href="javascript:void(0);"
                                  class="trash-icon"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_insurance"
                                  ><i class="ti ti-trash"></i
                                ></a>
                              </div>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1"
                            >
                              <div>
                                <h6
                                  class="fs-14 fw-semibold d-inline-flex align-items-center mb-1"
                                >
                                  Roadside Assistance
                                </h6>
                                <div
                                  class="d-flex align-items-center gap-2 flex-wrap"
                                >
                                  <p
                                    class="fs-13 fw-medium border-end pe-2 mb-0"
                                  >
                                    Price :
                                    <span class="text-gray-9">$250</span>
                                  </p>
                                  <p class="fs-13 fw-medium mb-0">
                                    Benefits :
                                    <span class="text-gray-9">06</span>
                                  </p>
                                </div>
                              </div>
                              <div class="d-flex align-items-center">
                                <a
                                  href="javascript:void(0);"
                                  class="edit-icon me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_insurance"
                                  ><i class="ti ti-edit"></i
                                ></a>
                                <a
                                  href="javascript:void(0);"
                                  class="trash-icon"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_insurance"
                                  ><i class="ti ti-trash"></i
                                ></a>
                              </div>
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
                      :disabled="currentStep === 2"
                    >
                      <i class="ti ti-chevron-left me-1"></i>Back
                    </button>
                    <button
                      class="btn btn-primary wizard-next d-flex align-items-center"
                      @click="nextStep"
                      :disabled="currentStep === totalSteps"
                    >
                      Add Extra Services<i class="ti ti-chevron-right ms-1"></i>
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset v-if="currentStep === 4">
                <form action="#">
                  <div
                    class="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3"
                  >
                    <h4 class="d-flex align-items-center">
                      <i class="ti ti-float-center text-secondary me-2"></i
                      >Extra Services
                    </h4>
                    <div class="dropdown flag-dropdown">
                      <a
                        class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        href="javascript:void(0);"
                      >
                        <img
                          src="@/assets/admin/img/flags/gb.svg"
                          alt="Language"
                          class="img-fluid me-1"
                        />English
                      </a>
                      <ul class="dropdown-menu p-2">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/gb.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />English
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/sa.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />Arabic
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="border-bottom mb-2 pb-1 extra-service">
                    <div class="text-end">
                      <a
                        href="javascript:void(0);"
                        class="link-purple text-decoration-underline fw-medium d-inline-block"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_price"
                        >Edit Price</a
                      >
                    </div>
                    <div class="row">
                      <div class="col-xxl-4 col-md-6 d-flex">
                        <div
                          class="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill"
                        >
                          <div class="d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" />
                            <span
                              class="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2"
                            >
                              <i class="ti ti-gps"></i>
                            </span>
                            <div>
                              <h6 class="fs-14 fw-semibold mb-1">Navigation</h6>
                              <p class="fs-13">Using GPS while travel</p>
                            </div>
                          </div>
                          <div>
                            <p class="fs-13 mb-1">Per Day</p>
                            <h6 class="fs-14 fw-semibold">$10</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-4 col-md-6 d-flex">
                        <div
                          class="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill"
                        >
                          <div class="d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" />
                            <span
                              class="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2"
                            >
                              <i class="ti ti-wifi-2"></i>
                            </span>
                            <div>
                              <h6 class="fs-14 fw-semibold mb-1">
                                Wi-Fi Hotspot
                              </h6>
                              <p class="fs-13">Constant portable internet</p>
                            </div>
                          </div>
                          <div>
                            <p class="fs-13 mb-1">One time</p>
                            <h6 class="fs-14 fw-semibold">$10</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-4 col-md-6 d-flex">
                        <div
                          class="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill active"
                        >
                          <div class="d-flex align-items-center">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              checked
                            />
                            <span
                              class="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2"
                            >
                              <i class="ti ti-baby-carriage"></i>
                            </span>
                            <div>
                              <h6 class="fs-14 fw-semibold mb-1">
                                Child Safety Seats
                              </h6>
                              <p class="fs-13">
                                Secure infant/toddler car seat
                              </p>
                            </div>
                          </div>
                          <div>
                            <p class="fs-13 mb-1">Per Day</p>
                            <h6 class="fs-14 fw-semibold">$10</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-4 col-md-6 d-flex">
                        <div
                          class="form-check form-checkbox d-flex align-items-center justify-content-between flex-fill flex-wrap gap-3 active"
                        >
                          <div class="d-flex align-items-center">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              checked
                            />
                            <span
                              class="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2"
                            >
                              <i class="ti ti-baby-carriage"></i>
                            </span>
                            <div>
                              <h6 class="fs-14 fw-semibold mb-1">
                                Fuel Pre-Purchase
                              </h6>
                              <p class="fs-13">Full tank, return hassle-free</p>
                            </div>
                          </div>
                          <div>
                            <p class="fs-13 mb-1">Per Day</p>
                            <h6 class="fs-14 fw-semibold">$10</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-4 col-md-6 d-flex">
                        <div
                          class="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill"
                        >
                          <div class="d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" />
                            <span
                              class="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2"
                            >
                              <i class="ti ti-user-star"></i>
                            </span>
                            <div>
                              <h6 class="fs-14 fw-semibold mb-1">
                                Roadside Assistance
                              </h6>
                              <p class="fs-13">24/7 emergency car support</p>
                            </div>
                          </div>
                          <div>
                            <p class="fs-13 mb-1">Per Day</p>
                            <h6 class="fs-14 fw-semibold">$10</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-4 col-md-6 d-flex">
                        <div
                          class="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill"
                        >
                          <div class="d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" />
                            <span
                              class="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2"
                            >
                              <i class="ti ti-satellite"></i>
                            </span>
                            <div>
                              <h6 class="fs-14 fw-semibold mb-1">
                                Satellite Radio
                              </h6>
                              <p class="fs-13">Unlimited premium music</p>
                            </div>
                          </div>
                          <div>
                            <p class="fs-13 mb-1">Per Day</p>
                            <h6 class="fs-14 fw-semibold">$10</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-4 col-md-6 d-flex">
                        <div
                          class="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill"
                        >
                          <div class="d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" />
                            <span
                              class="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2"
                            >
                              <i class="ti ti-usb"></i>
                            </span>
                            <div>
                              <h6 class="fs-14 fw-semibold mb-1">
                                USB Charger
                              </h6>
                              <p class="fs-13">Fast charging for devices</p>
                            </div>
                          </div>
                          <div>
                            <p class="fs-13 mb-1">Per Day</p>
                            <h6 class="fs-14 fw-semibold">$10</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-4 col-md-6 d-flex">
                        <div
                          class="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill active"
                        >
                          <div class="d-flex align-items-center">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              checked
                            />
                            <span
                              class="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2"
                            >
                              <i class="ti ti-checkup-list"></i>
                            </span>
                            <div>
                              <h6 class="fs-14 fw-semibold mb-1">
                                Express Check-in/out
                              </h6>
                              <p class="fs-13">Fast pickup & return process</p>
                            </div>
                          </div>
                          <div>
                            <p class="fs-13 mb-1">Per Day</p>
                            <h6 class="fs-14 fw-semibold">$10</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-4 col-md-6 d-flex">
                        <div
                          class="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill"
                        >
                          <div class="d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" />
                            <span
                              class="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2"
                            >
                              <i class="ti ti-tallymark-2"></i>
                            </span>
                            <div>
                              <h6 class="fs-14 fw-semibold mb-1">Toll Pass</h6>
                              <p class="fs-13">Skip toll booth lines</p>
                            </div>
                          </div>
                          <div>
                            <p class="fs-13 mb-1">Per Day</p>
                            <h6 class="fs-14 fw-semibold">$10</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-4 col-md-6 d-flex">
                        <div
                          class="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill"
                        >
                          <div class="d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" />
                            <span
                              class="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2"
                            >
                              <i class="ti ti-file-pencil"></i>
                            </span>
                            <div>
                              <h6 class="fs-14 fw-semibold mb-1">Insurance</h6>
                              <p class="fs-13">Full coverage protection</p>
                            </div>
                          </div>
                          <div>
                            <p class="fs-13 mb-1">Per Day</p>
                            <h6 class="fs-14 fw-semibold">$10</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-4 col-md-6 d-flex">
                        <div
                          class="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill"
                        >
                          <div class="d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" />
                            <span
                              class="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2"
                            >
                              <i class="ti ti-camera"></i>
                            </span>
                            <div>
                              <h6 class="fs-14 fw-semibold mb-1">Dash Cam</h6>
                              <p class="fs-13">Records trips extra security</p>
                            </div>
                          </div>
                          <div>
                            <p class="fs-13 mb-1">Per Day</p>
                            <h6 class="fs-14 fw-semibold">$10</h6>
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
                      :disabled="currentStep === 3"
                    >
                      <i class="ti ti-chevron-left me-1"></i>Back
                    </button>
                    <button
                      class="btn btn-primary wizard-next d-flex align-items-center"
                      @click="nextStep"
                      :disabled="currentStep === totalSteps"
                    >
                      Upload Documents<i class="ti ti-chevron-right ms-1"></i>
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset v-if="currentStep === 5">
                <form action="#">
                  <div
                    class="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3"
                  >
                    <h4 class="d-flex align-items-center">
                      <i class="ti ti-file-invoice text-secondary me-2"></i
                      >Documents
                    </h4>
                    <div class="dropdown flag-dropdown">
                      <a
                        class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        href="javascript:void(0);"
                      >
                        <img
                          src="@/assets/admin/img/flags/gb.svg"
                          alt="Language"
                          class="img-fluid me-1"
                        />English
                      </a>
                      <ul class="dropdown-menu p-2">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/gb.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />English
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/sa.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />Arabic
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="border-bottom mb-4 pb-3">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">Car Documents</h6>
                        <p>Add Important Documents of your Car</p>
                      </div>
                      <div class="col-xl-9">
                        <div class="row">
                          <div class="col-xxl-8 col-lg-10">
                            <h6 class="mb-3">Upload Document</h6>
                            <div
                              class="document-upload text-center bg-light br-5 mb-3"
                            >
                              <img
                                src="@/assets/admin/img/icons/upload-icon.svg"
                                alt="img"
                                class="mb-2"
                              />
                              <p class="mb-2">
                                Drop your files here or
                                <span
                                  class="text-info text-decoration-underline"
                                  >Browse</span
                                >
                              </p>
                              <p class="fs-12 mb-0">Maximum size 50mb</p>
                              <input
                                type="file"
                                class="form-control image-sign"
                                multiple=""
                                accept=".pdf, .txt, .doc, .docx"
                              />
                            </div>
                            <div class="mb-3">
                              <p class="fs-13 mb-1">
                                Upload Insurance, Car Registration, Documents
                              </p>
                              <p class="fs-13">Formats PDF, Word</p>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2"
                            >
                              <div class="d-flex align-items-center">
                                <span>
                                  <img
                                    src="@/assets/admin/img/icons/pdf-icon.svg"
                                    alt="img"
                                  />
                                </span>
                                <div class="ms-2">
                                  <h6 class="fs-14 fw-medium">
                                    Insurance_car3546
                                  </h6>
                                  <p class="fs-13">24.45 KB</p>
                                </div>
                              </div>
                              <div class="progress-wrap">
                                <div
                                  class="progress progress-sm"
                                  role="progressbar"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <div
                                    class="progress-bar bg-success"
                                    style="width: 25%"
                                  ></div>
                                </div>
                              </div>
                              <div class="">
                                <a href="javascript:void(0);" class="trash-icon"
                                  ><i class="ti ti-trash"></i
                                ></a>
                              </div>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2"
                            >
                              <div class="d-flex align-items-center">
                                <span>
                                  <img
                                    src="@/assets/admin/img/icons/pdf-icon.svg"
                                    alt="img"
                                  />
                                </span>
                                <div class="ms-2">
                                  <h6 class="fs-14 fw-medium">Reg_car3546</h6>
                                  <p class="fs-13">20.45 KB</p>
                                </div>
                              </div>
                              <div class="progress-wrap d-none">
                                <div
                                  class="progress"
                                  role="progressbar"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <div
                                    class="progress-bar bg-success"
                                    style="width: 25%"
                                  ></div>
                                </div>
                              </div>
                              <div class="">
                                <a href="javascript:void(0);" class="trash-icon"
                                  ><i class="ti ti-trash"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-bottom mb-4 pb-3">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">Policies</h6>
                        <p>Add policies of your Car</p>
                      </div>
                      <div class="col-xl-9">
                        <div class="row">
                          <div class="col-xxl-8 col-lg-10">
                            <h6 class="mb-3">Upload Document</h6>
                            <div
                              class="document-upload text-center bg-light br-5 mb-3"
                            >
                              <img
                                src="@/assets/admin/img/icons/upload-icon.svg"
                                alt="img"
                                class="mb-2"
                              />
                              <p class="mb-2">
                                Drop your files here or
                                <span
                                  class="text-info text-decoration-underline"
                                  >Browse</span
                                >
                              </p>
                              <p class="fs-12 mb-0">Maximum size 50mb</p>
                              <input
                                type="file"
                                class="form-control image-sign"
                                multiple=""
                                accept=".pdf, .txt, .doc, .docx"
                              />
                            </div>
                            <div class="mb-3">
                              <p class="fs-13 mb-1">
                                Upload Car Policy Documents
                              </p>
                              <p class="fs-13">Formats PDF, Word</p>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2"
                            >
                              <div class="d-flex align-items-center">
                                <span>
                                  <img
                                    src="@/assets/admin/img/icons/pdf-icon.svg"
                                    alt="img"
                                  />
                                </span>
                                <div class="ms-2">
                                  <h6 class="fs-14 fw-medium">
                                    Insurance_car3546
                                  </h6>
                                  <p class="fs-13">24.45 KB</p>
                                </div>
                              </div>
                              <div class="progress-wrap">
                                <div
                                  class="progress progress-sm"
                                  role="progressbar"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <div
                                    class="progress-bar bg-success"
                                    style="width: 25%"
                                  ></div>
                                </div>
                              </div>
                              <div class="">
                                <a href="javascript:void(0);" class="trash-icon"
                                  ><i class="ti ti-trash"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-bottom mb-4 pb-4">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">Video</h6>
                        <p>Add Video About Car</p>
                      </div>
                      <div class="col-xl-9">
                        <div class="row">
                          <div class="col-xxl-8 col-lg-10">
                            <h6 class="mb-3">Upload Document</h6>
                            <div
                              class="document-upload text-center bg-light br-5 mb-3"
                            >
                              <img
                                src="@/assets/admin/img/icons/upload-icon.svg"
                                alt="img"
                                class="mb-2"
                              />
                              <p class="mb-2">
                                Drop your files here or
                                <span
                                  class="text-info text-decoration-underline"
                                  >Browse</span
                                >
                              </p>
                              <p class="fs-12 mb-0">Maximum size 50mb</p>
                              <input
                                type="file"
                                class="form-control image-sign"
                                multiple=""
                                accept="image/*"
                              />
                            </div>
                            <div
                              class="uploaded-images d-flex align-items-center flex-wrap gap-3"
                            >
                              <div class="uploaded-img">
                                <img
                                  src="@/assets/admin/img/car/car-02.jpg"
                                  alt="img"
                                />
                                <a
                                  href="javscsript:void(0);"
                                  class="trash-icon fs-12"
                                  ><i class="ti ti-trash"></i
                                ></a>
                              </div>
                              <div class="uploaded-img">
                                <img
                                  src="@/assets/admin/img/car/car-07.jpg"
                                  alt="img"
                                />
                                <a
                                  href="javscsript:void(0);"
                                  class="trash-icon fs-12"
                                  ><i class="ti ti-trash"></i
                                ></a>
                              </div>
                              <div class="uploaded-img">
                                <img
                                  src="@/assets/admin/img/car/car-08.jpg"
                                  alt="img"
                                />
                                <a
                                  href="javscsript:void(0);"
                                  class="trash-icon fs-12"
                                  ><i class="ti ti-trash"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-bottom mb-2 pb-4">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">Video</h6>
                        <p>Add Video About Car</p>
                      </div>
                      <div class="col-xl-9">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="mb-4">
                              <label class="form-label"
                                >Platform
                                <span class="text-danger">*</span></label
                              >
                              <vue-select
                                :options="Platform"
                                v-model="selectedEleven"
                                placeholder="Youtube"
                              />
                            </div>
                          </div>
                          <div class="col-md-8">
                            <div class="mb-4">
                              <label class="form-label">Video Link</label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="https://www.youtube.com/cars_add/"
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="uploaded-video">
                              <img
                                src="@/assets/admin/img/car/car-lg-01.jpg"
                                alt="img"
                              />
                              <a
                                href="https://www.youtube.com/embed/1trvO6dqQUI"
                                data-fancybox=""
                                class="play-icon"
                              >
                                <i class="ti ti-player-play-filled"></i>
                              </a>
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
                      :disabled="currentStep === 4"
                    >
                      <i class="ti ti-chevron-left me-1"></i>Back
                    </button>
                    <button
                      class="btn btn-primary wizard-next d-flex align-items-center"
                      @click="nextStep"
                      :disabled="currentStep === totalSteps"
                    >
                      Add Damage<i class="ti ti-chevron-right ms-1"></i>
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset v-if="currentStep === 6">
                <form action="#">
                  <div
                    class="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3"
                  >
                    <h4 class="d-flex align-items-center">
                      <i class="ti ti-id text-secondary me-2"></i>Damages
                    </h4>
                    <div class="dropdown flag-dropdown">
                      <a
                        class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        href="javascript:void(0);"
                      >
                        <img
                          src="@/assets/admin/img/flags/gb.svg"
                          alt="Language"
                          class="img-fluid me-1"
                        />English
                      </a>
                      <ul class="dropdown-menu p-2">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/gb.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />English
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/sa.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />Arabic
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="border-bottom mb-2 pb-4">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">Damages</h6>
                        <p>Add Damages On Car</p>
                      </div>
                      <div class="col-xl-9">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-dark btn-md d-inline-flex align-items-center mb-3"
                          data-bs-toggle="modal"
                          data-bs-target="#add-damage"
                          ><i class="ti ti-plus me-1"></i>Add Damage</a
                        >
                        <div class="card border-0 bg-light mb-0">
                          <div class="card-body">
                            <div
                              class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3"
                            >
                              <h6>Total Damages : 04</h6>
                              <div class="dropdown flag-dropdown">
                                <a
                                  class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                                  data-bs-toggle="dropdown"
                                  href="javascript:void(0);"
                                >
                                  All Damages
                                </a>
                                <ul class="dropdown-menu p-2">
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item d-flex align-items-center"
                                    >
                                      All Damages
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item d-flex align-items-center"
                                    >
                                      Interior
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item d-flex align-items-center"
                                    >
                                      Exterior
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="bg-white p-20 br-5 border mb-2">
                              <div class="row align-items-center row-gap-3">
                                <div class="col-xxl-8 col-md-7">
                                  <div
                                    class="d-flex align-items-center gap-2 mb-1"
                                  >
                                    <h6 class="fs-14 fw-medium">Scratch</h6>
                                    <span
                                      class="badge bg-pink-transparent badge-sm"
                                      >Interior</span
                                    >
                                  </div>
                                  <p class="fs-13">
                                    Minor surface marks, often from keys,
                                    branches, or road debris.
                                  </p>
                                </div>
                                <div class="col-xxl-4 col-md-5">
                                  <div
                                    class="d-flex align-items-center justify-content-md-end gap-2 flex-wrap"
                                  >
                                    <p class="mb-0">Added on : 15 Jan 2025</p>
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="javascript:void(0);"
                                        class="edit-icon me-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-damage"
                                        ><i class="ti ti-edit"></i
                                      ></a>
                                      <a
                                        href="javascript:void(0);"
                                        class="trash-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete_damage"
                                        ><i class="ti ti-trash"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-20 br-5 border mb-2">
                              <div class="row align-items-center row-gap-3">
                                <div class="col-xxl-8 col-md-7">
                                  <div
                                    class="d-flex align-items-center gap-2 mb-1"
                                  >
                                    <h6 class="fs-14 fw-medium">Dent</h6>
                                    <span
                                      class="badge bg-secondary-transparent badge-sm"
                                      >Exterior</span
                                    >
                                  </div>
                                  <p class="fs-13">
                                    Cracks, scratches, or faded surfaces due to
                                    heat exposure.
                                  </p>
                                </div>
                                <div class="col-xxl-4 col-md-5">
                                  <div
                                    class="d-flex align-items-center justify-content-md-end gap-2 flex-wrap"
                                  >
                                    <p class="mb-0">Added on : 15 Jan 2025</p>
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="javascript:void(0);"
                                        class="edit-icon me-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-damage"
                                        ><i class="ti ti-edit"></i
                                      ></a>
                                      <a
                                        href="javascript:void(0);"
                                        class="trash-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete_damage"
                                        ><i class="ti ti-trash"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-20 br-5 border mb-2">
                              <div class="row align-items-center row-gap-3">
                                <div class="col-xxl-8 col-md-7">
                                  <div
                                    class="d-flex align-items-center gap-2 mb-1"
                                  >
                                    <h6 class="fs-14 fw-medium">Crack</h6>
                                    <span
                                      class="badge bg-pink-transparent badge-sm"
                                      >Interior</span
                                    >
                                  </div>
                                  <p class="fs-13">
                                    Seats, door panels, or carpets with stains,
                                    rips, or burns.
                                  </p>
                                </div>
                                <div class="col-xxl-4 col-md-5">
                                  <div
                                    class="d-flex align-items-center justify-content-md-end gap-2 flex-wrap"
                                  >
                                    <p class="mb-0">Added on : 15 Jan 2025</p>
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="javascript:void(0);"
                                        class="edit-icon me-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-damage"
                                        ><i class="ti ti-edit"></i
                                      ></a>
                                      <a
                                        href="javascript:void(0);"
                                        class="trash-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete_damage"
                                        ><i class="ti ti-trash"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-20 br-5 border mb-0">
                              <div class="row align-items-center row-gap-3">
                                <div class="col-xxl-8 col-md-7">
                                  <div
                                    class="d-flex align-items-center gap-2 mb-1"
                                  >
                                    <h6 class="fs-14 fw-medium">Clip</h6>
                                    <span
                                      class="badge bg-pink-transparent badge-sm"
                                      >Interior</span
                                    >
                                  </div>
                                  <p class="fs-13">
                                    Non-functional windows, AC, or infotainment
                                    system damage.
                                  </p>
                                </div>
                                <div class="col-xxl-4 col-md-5">
                                  <div
                                    class="d-flex align-items-center justify-content-md-end gap-2 flex-wrap"
                                  >
                                    <p class="mb-0">Added on : 15 Jan 2025</p>
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="javascript:void(0);"
                                        class="edit-icon me-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-damage"
                                        ><i class="ti ti-edit"></i
                                      ></a>
                                      <a
                                        href="javascript:void(0);"
                                        class="trash-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete_damage"
                                        ><i class="ti ti-trash"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                      :disabled="currentStep === 5"
                    >
                      <i class="ti ti-chevron-left me-1"></i>Back
                    </button>
                    <button
                      class="btn btn-primary wizard-next d-flex align-items-center"
                      @click="nextStep"
                      :disabled="currentStep === totalSteps"
                    >
                      Add Faq<i class="ti ti-chevron-right ms-1"></i>
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset v-if="currentStep === 7">
                <form action="#">
                  <div
                    class="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3"
                  >
                    <h4 class="d-flex align-items-center">
                      <i class="ti ti-question-mark text-secondary me-2"></i>FAQ
                    </h4>
                    <div class="dropdown flag-dropdown">
                      <a
                        class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        href="javascript:void(0);"
                      >
                        <img
                          src="@/assets/admin/img/flags/gb.svg"
                          alt="Language"
                          class="img-fluid me-1"
                        />English
                      </a>
                      <ul class="dropdown-menu p-2">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/gb.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />English
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/sa.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />Arabic
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="border-bottom mb-2 pb-4">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">FAQ</h6>
                        <p>Add FAQ of your Car</p>
                      </div>
                      <div class="col-xl-9">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-dark btn-md d-inline-flex align-items-center mb-3"
                          data-bs-toggle="modal"
                          data-bs-target="#add-faq"
                          ><i class="ti ti-plus me-1"></i>Add FAQ</a
                        >
                        <div class="card border-0 bg-light mb-0">
                          <div class="card-body">
                            <h6 class="mb-3">Total FAQ : 04</h6>
                            <div
                              class="custom-accordion-icon"
                              id="faqaccordion"
                            >
                              <div class="accordion-item">
                                <h2 class="accordion-header">
                                  <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-one"
                                    aria-expanded="false"
                                    aria-controls="faq-one"
                                  >
                                    <span class="faq-icon"
                                      ><i class="ti ti-grip-vertical"></i></span
                                    >What are the requirements to rent a car?
                                  </button>
                                </h2>
                                <div
                                  id="faq-one"
                                  class="accordion-collapse collapse"
                                  data-bs-parent="#faqaccordion"
                                >
                                  <div class="accordion-body">
                                    <p class="fs-13">
                                      You must be at least 21 years old, have a
                                      valid driver's license, and a credit card
                                      for payment.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="accordion-item">
                                <h2 class="accordion-header">
                                  <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-two"
                                    aria-expanded="false"
                                    aria-controls="faq-two"
                                  >
                                    <span class="faq-icon"
                                      ><i class="ti ti-grip-vertical"></i></span
                                    >What are the requirements to rent a car?
                                  </button>
                                </h2>
                                <div
                                  id="faq-two"
                                  class="accordion-collapse collapse"
                                  data-bs-parent="#faqaccordion"
                                >
                                  <div class="accordion-body">
                                    <p class="fs-13">
                                      You must be at least 21 years old, have a
                                      valid driver's license, and a credit card
                                      for payment.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="accordion-item">
                                <h2 class="accordion-header">
                                  <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-three"
                                    aria-expanded="false"
                                    aria-controls="faq-three"
                                  >
                                    <span class="faq-icon"
                                      ><i class="ti ti-grip-vertical"></i></span
                                    >What are the requirements to rent a car?
                                  </button>
                                </h2>
                                <div
                                  id="faq-three"
                                  class="accordion-collapse collapse"
                                  data-bs-parent="#faqaccordion"
                                >
                                  <div class="accordion-body">
                                    <p class="fs-13">
                                      You must be at least 21 years old, have a
                                      valid driver's license, and a credit card
                                      for payment.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="accordion-item">
                                <h2 class="accordion-header">
                                  <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-four"
                                    aria-expanded="false"
                                    aria-controls="faq-four"
                                  >
                                    <span class="faq-icon"
                                      ><i class="ti ti-grip-vertical"></i></span
                                    >What are the requirements to rent a car?
                                  </button>
                                </h2>
                                <div
                                  id="faq-four"
                                  class="accordion-collapse collapse"
                                  data-bs-parent="#faqaccordion"
                                >
                                  <div class="accordion-body">
                                    <p class="fs-13">
                                      You must be at least 21 years old, have a
                                      valid driver's license, and a credit card
                                      for payment.
                                    </p>
                                  </div>
                                </div>
                              </div>
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
                      :disabled="currentStep === 6"
                    >
                      <i class="ti ti-chevron-left me-1"></i>Back
                    </button>
                    <button
                      class="btn btn-primary wizard-next d-flex align-items-center"
                      @click="nextStep"
                      :disabled="currentStep === totalSteps"
                    >
                      Add Seo<i class="ti ti-chevron-right ms-1"></i>
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset v-if="currentStep === 8">
                <form @submit.prevent="submitForm">
                  <div
                    class="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3"
                  >
                    <h4 class="d-flex align-items-center">
                      <i class="ti ti-question-mark text-secondary me-2"></i>SEO
                    </h4>
                    <div class="dropdown flag-dropdown">
                      <a
                        class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        href="javascript:void(0);"
                      >
                        <img
                          src="@/assets/admin/img/flags/gb.svg"
                          alt="Language"
                          class="img-fluid me-1"
                        />English
                      </a>
                      <ul class="dropdown-menu p-2">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/gb.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />English
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item d-flex align-items-center"
                          >
                            <img
                              src="@/assets/admin/img/flags/sa.svg"
                              alt=""
                              height="16"
                              class="me-1"
                            />Arabic
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="border-bottom mb-2 pb-2">
                    <div class="row row-gap-4">
                      <div class="col-xl-3">
                        <h6 class="mb-1">SEO</h6>
                        <p>Add SEO Meta of the car</p>
                      </div>
                      <div class="col-xl-9">
                        <div class="mb-3">
                          <label class="form-label"
                            >Meta Title
                            <span class="text-danger">*</span></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="carData.metaTitle"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label"
                            >Keywords <span class="text-danger">*</span></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="carData.keywords"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label"
                            >Description
                            <span class="text-danger">*</span></label
                          >
                          <textarea
                            class="form-control"
                            rows="3"
                            v-model="carData.seoDescription"
                          ></textarea>
                        </div>
                        <div class="mb-3">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="approved"
                              v-model="carData.approved"
                            />
                            <label class="form-check-label" for="approved">
                              Approve this car for listing
                            </label>
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
                    <button class="btn btn-primary d-flex align-items-center">
                      Save & Exit<i class="ti ti-chevron-right ms-1"></i>
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
import carListData from "@/assets/json/car-list.json";
import PocketBase from "pocketbase";

// Initialize PocketBase
const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  data() {
    return {
      // Car data object matching the PocketBase collection schema
      carData: {
        brand: null,
        model: null,
        year: null,
        price: null,
        mileage: null,
        fuel_type: null, // Changed from 'fuel' to 'fuel_type'
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
        console.log(`Field ${field}:`, value, "-> valid:", isValid);
        return isValid;
      });

      const hasImages = this.carData.images.length > 0;
      console.log("Validation:", validation, "Has images:", hasImages);

      return validation && hasImages; // At least one image required
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
    // Debug watchers to see what's happening
    carData(newData) {
      console.log("Car data changed:", newData);
    },
    isFormValid(newVal) {
      console.log("Form valid changed:", newVal);
    },
    "carData.year"(newYear) {
      console.log("Year field changed:", newYear, typeof newYear);
    },
  },
  methods: {
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

      // Check if adding these files would exceed the limit
      if (this.carData.images.length + files.length > maxFiles) {
        alert(
          `You can only upload a maximum of ${maxFiles} images. Currently you have ${this.carData.images.length} images.`
        );
        return;
      }

      for (const file of files) {
        // Check file type
        if (!allowedTypes.includes(file.type)) {
          alert(
            `File ${file.name} is not a supported format. Please use JPG, PNG, or WebP.`
          );
          continue;
        }

        // Check file size
        if (file.size > maxSize) {
          alert(`File ${file.name} is too large. Maximum size is 5MB.`);
          continue;
        }

        // Create preview URL
        const preview = URL.createObjectURL(file);

        // Add to images array
        this.carData.images.push({
          file: file,
          preview: preview,
          name: file.name,
          size: file.size,
        });
      }

      // Clear the input
      event.target.value = "";
    },

    removeImage(index) {
      // Revoke the object URL to prevent memory leaks
      URL.revokeObjectURL(this.carData.images[index].preview);
      this.carData.images.splice(index, 1);
    },

    async submitCar() {
      try {
        this.isSubmitting = true;

        // Validate form
        if (!this.isFormValid) {
          alert(
            "Please fill in all required fields and upload at least one image."
          );
          return;
        }

        // Prepare form data for PocketBase
        const formData = new FormData();

        // Add text fields - ensure all values are properly extracted
        formData.append("brand", this.carData.brand || "");
        formData.append("model", this.carData.model || "");
        formData.append("year", this.carData.year || "");
        // Ensure price is a float and not empty
        formData.append(
          "price",
          this.carData.price ? parseFloat(this.carData.price) : 0
        );
        formData.append("mileage", parseInt(this.carData.mileage) || 0);
        formData.append("fuel_type", this.carData.fuel_type || "");
        formData.append("transmission", this.carData.transmission || "");
        formData.append("seats", parseInt(this.carData.seats) || 0);
        formData.append("color", this.carData.color || "");
        // Ensure desctiption is always a string
        formData.append(
          "desctiption",
          this.carData.desctiption ? String(this.carData.desctiption) : ""
        );
        formData.append("approved", this.carData.approved);

        // Debug: print FormData values
        for (let pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }

        // Add image files
        this.carData.images.forEach((imageObj, index) => {
          formData.append("images", imageObj.file);
        });

        // Save to PocketBase
        const record = await pb.collection("cars").create(formData);

        console.log("Car created successfully:", record);

        // Show success message
        alert("Auto aggiunta con successo!");

        // Reset form
        this.resetForm();

        // Redirect to cars list
        this.$router.push("/admin-template/rentals/cars");
      } catch (error) {
        console.error("Error creating car:", error);

        // Show user-friendly error message
        let errorMessage = "Errore durante il salvataggio dell'auto.";
        if (error.response && error.response.data) {
          // Handle PocketBase validation errors
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
      // Extract the value from the selected option
      const value = option ? option.value : null;
      this.carData.brand = value;
      this.carData.model = null; // Reset model when brand changes

      console.log("Brand changed to:", value, "from option:", option);

      if (this.carData.brand) {
        const modelCount = this.carListData[this.carData.brand]?.length || 0;
        console.log(
          `Brand selezionato: ${this.carData.brand} (${modelCount} modelli disponibili)`
        );
      }
    },

    onModelChange(option) {
      const value = option ? option.value : null;
      this.carData.model = value;
      console.log("Model changed to:", value, "from option:", option);
    },

    // Methods to handle vue-select changes and ensure proper value storage
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

    onSeatsChange(option) {
      const value = option ? option.value : null;
      this.carData.seats = value;
      console.log("Seats changed to:", value, "from option:", option);
    },

    onYearChange(date, dateString) {
      // Store the year as a number
      this.carData.year = date ? date.year() : parseInt(dateString) || null;
      console.log(
        "Year changed to:",
        this.carData.year,
        "from date:",
        date,
        "dateString:",
        dateString
      );
    },

    onManualYearChange(event) {
      // Handle manual year input
      const year = parseInt(event.target.value);
      this.carData.year = isNaN(year) ? null : year;
      console.log("Manual year changed to:", this.carData.year);
    },

    testYear() {
      // Test method to manually set year
      this.carData.year = 2024;
      console.log("Test year set to 2024");
    },

    resetForm() {
      // Cleanup image URLs
      this.carData.images.forEach((img) => {
        if (img.preview) {
          URL.revokeObjectURL(img.preview);
        }
      });

      this.carData = {
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
      this.currentStep = 1;
    },

    cancelForm() {
      if (
        confirm(
          "Are you sure you want to cancel? All unsaved changes will be lost."
        )
      ) {
        this.resetForm();
        this.$router.push("/admin-template/rentals/cars");
      }
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
    console.log("Component mounted, initial carData:", this.carData);
  },

  // Cleanup when component is destroyed
  beforeUnmount() {
    // Cleanup any remaining object URLs
    this.carData.images.forEach((img) => {
      if (img.preview) {
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
