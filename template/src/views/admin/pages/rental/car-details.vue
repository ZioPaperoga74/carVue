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
            ><i class="ti ti-arrow-left me-1"></i>Cars</router-link
          >
        </div>
        <div class="mb-4 pb-4 border-bottom">
          <div
            class="d-flex align-items-center justify-content-between flex-wrap gap-3"
          >
            <div>
              <div class="d-flex align-items-center flex-wrap gap-2 mb-2">
                <h4 class="me-2">Car ID : #{{ carData.id || "Loading..." }}</h4>
                <span
                  class="badge badge-md badge-success-transparent d-inline-flex align-items-center badge-sm"
                  v-if="carData.approved"
                >
                  <i class="ti ti-point-filled me-1"></i>Approvata
                </span>
                <span class="badge badge-md bg-warning-transparent" v-else>
                  <i class="ti ti-point-filled me-1"></i>Da Approvare
                </span>
                <span
                  class="badge badge-md bg-secondary-transparent"
                  v-if="carData.status === 'rented'"
                >
                  Rent in Progress
                </span>
              </div>
              <p>Created / Updated at : {{ formatDate(carData.created) }}</p>
            </div>
            <div class="d-flex align-items-center gap-3">
              <router-link
                :to="`/admin-template/rentals/edit-car/${carData.id}`"
                class="btn btn-dark btn-md d-flex align-items-center"
                ><i class="ti ti-edit me-1"></i>Edit Car</router-link
              >
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Car Details -->
          <div class="col-xl-8">
            <div class="card">
              <div class="card-body">
                <div class="border-bottom mb-3 pb-3">
                  <h5>Car Details</h5>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap gap-3"
                >
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg me-3">
                      <img
                        :src="getCarImageUrl(carData.images?.[0])"
                        alt="img"
                      />
                    </span>
                    <div>
                      <h6>
                        {{
                          carData.name ||
                          carData.brand + " " + carData.model ||
                          "Car Name"
                        }}
                      </h6>
                      <div class="d-flex align-items-center">
                        <p class="mb-0 me-2">{{ carData.type || "Type" }}</p>
                        <p class="mb-0 d-flex align-items-center">
                          <i
                            class="ti ti-circle-filled text-secondary fs-5 me-2"
                          ></i
                          >€{{ carData.price || "0" }}/day
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center flex-wrap gap-3">
                    <span class="badge badge-md bg-info-transparent"
                      >VIN : {{ carData.vin || "N/A" }}</span
                    >
                    <span class="badge badge-md bg-orange-transparent"
                      >Plate Number : {{ carData.plate_number || "N/A" }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-4 mb-xl-0">
              <div class="card-header py-0">
                <ul class="nav nav-tabs nav-tabs-bottom tab-dark">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#car-info"
                      data-bs-toggle="tab"
                      >Car Info</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#car-price" data-bs-toggle="tab"
                      >Pricing & Tarrif</a
                    >
                  </li>
                  <!-- <li class="nav-item">
                    <a class="nav-link" href="#car-service" data-bs-toggle="tab"
                      >Extra Services</a
                    >
                  </li> -->
                  <li class="nav-item">
                    <a class="nav-link" href="#car-gallery" data-bs-toggle="tab"
                      >Gallery</a
                    >
                  </li>
                  <!-- <li class="nav-item">
                    <a class="nav-link" href="#car-damages" data-bs-toggle="tab"
                      >Damages</a
                    >
                  </li> -->
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <!-- Car Info -->
                  <div class="tab-pane fade active show" id="car-info">
                    <div class="border-bottom mb-3 pb-3">
                      <div class="row">
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Color</h6>
                            <p class="d-inline-flex align-items-center fs-13">
                              <i
                                class="ti ti-square-filled text-warning me-1"
                              ></i
                              >{{ carData.color || "N/A" }}
                            </p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Brand</h6>
                            <p class="fs-13">{{ carData.brand || "N/A" }}</p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Model</h6>
                            <p class="fs-13">{{ carData.model || "N/A" }}</p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Type</h6>
                            <p class="fs-13">{{ carData.type || "N/A" }}</p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Year</h6>
                            <p class="fs-13">{{ carData.year || "N/A" }}</p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Passengers</h6>
                            <p class="fs-13">
                              {{ carData.passengers || "N/A" }}
                            </p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">VIN Number</h6>
                            <p class="fs-13">{{ carData.vin || "N/A" }}</p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Plate Number</h6>
                            <p class="fs-13">
                              {{ carData.plate_number || "N/A" }}
                            </p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Mileage</h6>
                            <p class="fs-13">{{ carData.mileage || "0" }} km</p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Transmission</h6>
                            <p class="fs-13">
                              {{ carData.transmission || "N/A" }}
                            </p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">No of Seats</h6>
                            <p class="fs-13">{{ carData.seats || "N/A" }}</p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Fuel Type</h6>
                            <p class="fs-13">
                              {{ carData.fuel_type || "N/A" }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="border-bottom mb-3 pb-3">
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3"
                      >
                        <h6>Documents</h6>
                        <!-- <router-link
                          :to="`/admin-template/rentals/edit-car/${carData.id}`"
                          class="link-default"
                          ><i class="ti ti-edit"></i
                        ></router-link> -->
                      </div>
                      <div class="d-flex align-items-center flex-wrap gap-4">
                        <div
                          class="d-flex align-items-center"
                          v-if="carData.insurance_doc"
                        >
                          <span class="me-2">
                            <img
                              src="@/assets/admin/img/icons/pdf-icon.svg"
                              alt="img"
                            />
                          </span>
                          <div>
                            <h6 class="fs-14 fw-medium">Insurance Document</h6>
                            <p class="fs-13">PDF Document</p>
                          </div>
                        </div>
                        <div
                          class="d-flex align-items-center"
                          v-if="carData.registration_doc"
                        >
                          <span class="me-2">
                            <img
                              src="@/assets/admin/img/icons/pdf-icon.svg"
                              alt="img"
                            />
                          </span>
                          <div>
                            <h6 class="fs-14 fw-medium">
                              Registration Document
                            </h6>
                            <p class="fs-13">PDF Document</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="row gy-2">
                        <div class="col-lg-4 col-sm-6">
                          <div class="d-flex flex-column gap-2">
                            <p
                              class="d-flex align-items-center mb-0"
                              v-if="
                                carData.features?.includes('air_conditioning')
                              "
                            >
                              <i
                                class="ti ti-square-check-filled text-success me-2"
                              ></i
                              >Air Conditioning
                            </p>
                            <p
                              class="d-flex align-items-center mb-0"
                              v-if="carData.features?.includes('bluetooth')"
                            >
                              <i
                                class="ti ti-square-check-filled text-success me-2"
                              ></i
                              >Bluetooth
                            </p>
                            <p
                              class="d-flex align-items-center mb-0"
                              v-if="carData.features?.includes('gps')"
                            >
                              <i
                                class="ti ti-square-check-filled text-success me-2"
                              ></i
                              >GPS Navigation
                            </p>
                          </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                          <div class="d-flex flex-column gap-2">
                            <p
                              class="d-flex align-items-center mb-0"
                              v-if="carData.features?.includes('backup_camera')"
                            >
                              <i
                                class="ti ti-square-check-filled text-success me-2"
                              ></i
                              >Backup Camera
                            </p>
                            <p
                              class="d-flex align-items-center mb-0"
                              v-if="carData.features?.includes('usb_charger')"
                            >
                              <i
                                class="ti ti-square-check-filled text-success me-2"
                              ></i
                              >USB Charger
                            </p>
                            <p
                              class="d-flex align-items-center mb-0"
                              v-if="carData.features?.includes('wifi')"
                            >
                              <i
                                class="ti ti-square-check-filled text-success me-2"
                              ></i
                              >Wi-Fi Hotspot
                            </p>
                          </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                          <div class="d-flex flex-column gap-2">
                            <p
                              class="d-flex align-items-center mb-0"
                              v-if="carData.features?.includes('child_seat')"
                            >
                              <i
                                class="ti ti-square-check-filled text-success me-2"
                              ></i
                              >Child Safety Seat
                            </p>
                            <p
                              class="d-flex align-items-center mb-0"
                              v-if="carData.features?.includes('toll_pass')"
                            >
                              <i
                                class="ti ti-square-check-filled text-success me-2"
                              ></i
                              >Toll Pass
                            </p>
                            <p
                              class="d-flex align-items-center mb-0"
                              v-if="
                                carData.features?.includes(
                                  'roadside_assistance'
                                )
                              "
                            >
                              <i
                                class="ti ti-square-check-filled text-success me-2"
                              ></i
                              >Roadside Assistance
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Car Info -->

                  <!-- Car Price -->
                  <div class="tab-pane fade" id="car-price">
                    <div class="border-bottom mb-3 pb-3">
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3"
                      >
                        <h6>Pricing</h6>
                        <!-- <a href="javascript:void(0);" class="link-default"
                          ><i class="ti ti-edit"></i
                        ></a> -->
                      </div>
                      <div class="row">
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Per Day</h6>
                            <p class="fs-13">€{{ carData.price || "0" }}</p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Weekly</h6>
                            <p class="fs-13">
                              €{{ carData.price * 7 * 0.9 || "0" }}
                            </p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Monthly</h6>
                            <p class="fs-13">
                              €{{ carData.price * 30 * 0.8 || "0" }}
                            </p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">
                              Base Kilometers
                            </h6>
                            <p class="fs-13">
                              {{ carData.base_km || "100" }} km/day
                            </p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">
                              Extra Price Per KM
                            </h6>
                            <p class="fs-13">
                              €{{ carData.extra_km_price || "0.50" }}
                            </p>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <h6 class="fs-14 fw-semibold mb-1">Location</h6>
                            <p class="fs-13">
                              {{
                                carData.location ||
                                carData.base_location ||
                                "N/A"
                              }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Car Price -->

                  <!-- Gallery -->
                  <car-gallery
                    :car-images="carData.images"
                    :car-id="carData.id"
                  ></car-gallery>
                  <!-- /Gallery -->
                </div>
              </div>
            </div>
          </div>
          <!-- /Car Details -->

          <!-- Rent Summary -->
          <div class="col-xl-4 theiaStickySidebar">
            <div class="card mb-0">
              <div class="card-body">
                <div class="border-bottom mb-3 pb-3">
                  <h5>Summary</h5>
                </div>
                <div class="summary-wrap">
                  <div class="d-flex align-items-center">
                    <div class="border br-5 text-center flex-shrink-0 p-1 me-3">
                      <h6 class="fw-semibold mb-1">
                        {{
                          formatDate(carData.updated || carData.created, "DD")
                        }}
                      </h6>
                      <span
                        class="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9"
                        >{{
                          formatDate(
                            carData.updated || carData.created,
                            "MMM, YYYY"
                          )
                        }}</span
                      >
                    </div>
                    <div>
                      <h6 class="fs-14 fw-semibold mb-1">
                        {{ carData.approved ? "Active" : "Pending" }}
                      </h6>
                      <p class="fs-13">
                        Car status is
                        <span class="text-gray-9 fw-medium">{{
                          carData.approved
                            ? "Active for Booking"
                            : "Pending Approval"
                        }}</span>
                      </p>
                    </div>
                  </div>
                  <div
                    class="d-flex align-items-center"
                    v-if="carData.damages && carData.damages.length > 0"
                  >
                    <div class="border br-5 text-center flex-shrink-0 p-1 me-3">
                      <h6 class="fw-semibold mb-1">
                        {{ carData.damages.length }}
                      </h6>
                      <span
                        class="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9"
                        >Damages</span
                      >
                    </div>
                    <div>
                      <h6 class="fs-14 fw-semibold mb-1">Damage Report</h6>
                      <p class="fs-13">
                        {{ carData.damages.length }} damage(s) recorded
                      </p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="border br-5 text-center flex-shrink-0 p-1 me-3">
                      <h6 class="fw-semibold mb-1">
                        {{ formatDate(carData.created, "DD") }}
                      </h6>
                      <span
                        class="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9"
                        >{{ formatDate(carData.created, "MMM, YYYY") }}</span
                      >
                    </div>
                    <div>
                      <h6 class="fs-14 fw-semibold mb-1">Car Added</h6>
                      <p class="fs-13">
                        Car has been added by
                        <span class="text-gray-9 fw-medium">{{
                          carData.owner_name || "Admin"
                        }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Rent Summary -->
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
import PocketBase from "pocketbase";
import moment from "moment";
import CarGallery from "./car-gallery.vue";

const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  name: "CarDetails",
  components: {
    CarGallery,
  },
  setup() {
    const route = useRoute();
    const carData = ref({});
    const loading = ref(true);
    const error = ref(null);

    const fetchCarData = async () => {
      try {
        const carId = route.params.id;
        if (!carId) {
          error.value = "Car ID not provided";
          return;
        }

        const car = await pb.collection("cars").getOne(carId);
        carData.value = car;
      } catch (err) {
        console.error("Error fetching car data:", err);
        error.value = "Failed to load car data";
      } finally {
        loading.value = false;
      }
    };

    const formatDate = (dateString, format = "DD MMM YYYY, HH:mm A") => {
      if (!dateString) return "N/A";
      return moment(dateString).format(format);
    };

    const getCarImageUrl = (imageName) => {
      if (!imageName || !carData.value.id) {
        return new URL("/src/assets/admin/img/car/car-01.jpg", import.meta.url)
          .href;
      }
      return `http://127.0.0.1:8090/api/files/cars/${carData.value.id}/${imageName}`;
    };

    onMounted(() => {
      fetchCarData();
    });

    return {
      carData,
      loading,
      error,
      formatDate,
      getCarImageUrl,
    };
  },
};
</script>

<style scoped>
.gallery-wrap img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}

.gallery-wrap img:hover {
  transform: scale(1.05);
}
</style>
