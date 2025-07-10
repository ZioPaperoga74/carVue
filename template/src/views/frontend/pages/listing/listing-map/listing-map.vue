<template>
  <div class="listing-page map-page">
    <layouts-header></layouts-header>
    <breadcrumb :title="title" :text="text" :text1="text1" />
    <map-filter></map-filter>

    <section class="section car-listing">
      <div class="container-fluid p-0">
        <div class="row gx-0">
          <!-- Left Listing -->
          <div class="col-xl-8 col-lg-12">
            <div class="map-list">
              <map-sort></map-sort>

              <div class="listview-car" v-for="item in Listing_Map" :key="item.id">
                <div class="card">
                  <div class="blog-widget d-flex">
                    <div class="blog-img">
                      <router-link to="listing-details">
                        <img :src="getImageUrl(item.image)" class="img-fluid" />
                      </router-link>
                      <div class="fav-item justify-content-end">
                        <span class="img-count"><i class="feather-image"></i>04</span>
                        <a
                          href="javascript:void(0)"
                          class="fav-icon"
                          @click="toggleSelected(item)"
                          :class="{ selected: item.isSelected }"
                        >
                          <i class="feather-heart"></i>
                        </a>
                      </div>
                    </div>

                    <div class="bloglist-content w-100">
                      <div class="card-body">
                        <div class="blog-list-head d-flex">
                          <div class="blog-list-title">
                            <h3>
                              <router-link to="listing-details">{{ item.Name }}</router-link>
                            </h3>
                            <h6>Category : <span>{{ item.Category }}</span></h6>
                          </div>
                          <div class="blog-list-rate">
                            <div class="list-rating">
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star"></i>
                              <span>{{ item.Reviews }}</span>
                            </div>
                            <h6>{{ item.price }}<span>/ Day</span></h6>
                          </div>
                        </div>

                        <div class="listing-details-group">
                          <ul>
                            <li><span><img src="@/assets/img/icons/car-parts-01.svg" /></span><p>{{ item.transmission }}</p></li>
                            <li><span><img src="@/assets/img/icons/car-parts-02.svg" /></span><p>{{ item.mileage }}</p></li>
                            <li><span><img src="@/assets/img/icons/car-parts-03.svg" /></span><p>{{ item.fuel_type }}</p></li>
                            <li><span><img src="@/assets/img/icons/car-parts-04.svg" /></span><p>{{ item.power }}</p></li>
                            <li><span><img src="@/assets/img/icons/car-parts-06.svg" /></span><p>{{ item.persons }}</p></li>
                            <li><span><img src="@/assets/img/icons/car-parts-05.svg" /></span><p>{{ item.year }}</p></li>
                          </ul>
                        </div>

                        <div class="blog-list-head list-head-bottom d-flex">
                          <div class="blog-list-title">
                            <div class="title-bottom">
                              <div class="car-list-icon">
                                <img :src="getImageUrlOne(item.profile_image)" alt="user" />
                              </div>
                              <div class="address-info">
                                <h6><i class="feather-map-pin"></i>{{ item.location }}</h6>
                              </div>
                              <div class="list-km">
                                <span class="km-count">
                                  <img src="@/assets/img/icons/map-pin.svg" />{{ item.Meter }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="listing-button">
                            <router-link to="listing-details" class="btn btn-order">
                              <span><i class="feather-calendar me-2"></i></span>Rent Now
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="feature-text">
                      <span :class="item.MakeClass">{{ item.make }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pagination -->
              <div class="blog-pagination">
                <nav>
                  <ul class="pagination page-item justify-content-center">
                    <li class="previtem">
                      <a class="page-link" href="javascript:;">
                        <i class="fas fa-regular fa-arrow-left me-2"></i> Prev
                      </a>
                    </li>
                    <li class="justify-content-center pagination-center">
                      <div class="page-group">
                        <ul>
                          <li class="page-item"><a class="page-link" href="javascript:;">1</a></li>
                          <li class="page-item"><a class="active page-link" href="javascript:;">2</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
                        </ul>
                      </div>
                    </li>
                    <li class="nextlink">
                      <a class="page-link" href="javascript:;">Next <i class="fas fa-regular fa-arrow-right ms-2"></i></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <!-- Right Map -->
          <div class="col-xl-4 col-lg-12 map-right grid-list-map">
            <div class="map-listing">
              <GoogleMap
                api-key="YOUR_GOOGLE_MAPS_API_KEY"
                :center="center"
                :zoom="14"
                style="width: 100%; height: 500px"
              >
                <Marker
                  v-for="loc in locations"
                  :key="loc.id"
                  :options="{ position: { lat: loc.lat, lng: loc.lng } }"
                  @click="selectMarker(loc)"
                />
                <InfoWindow
                  v-if="activeMarker"
                  :options="{ position: { lat: activeMarker.lat, lng: activeMarker.lng } }"
                  @closeclick="activeMarker = null"
                >
                  <div class="listing-item" style="width: 250px;">
                    <div class="listing-img mb-2">
                      <a :href="activeMarker.profile_link">
                        <img :src="activeMarker.carImageUrl" class="img-fluid" alt="car" />
                      </a>
                      <div class="fav-item justify-content-end">
                        <a href="javascript:void(0)" class="fav-icon">
                          <i class="feather-heart"></i>
                        </a>
                      </div>
                      <span class="featured-text">{{ activeMarker.car_brand }}</span>
                    </div>
                    <div class="listing-content">
                      <div class="listing-features d-flex justify-content-between align-items-center mb-2">
                        <div>
                          <h6 class="mb-0">
                            <a :href="activeMarker.profile_link">{{ activeMarker.car_name }}</a>
                          </h6>
                          <div class="list-rating text-warning small">
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star"></i>
                            <span class="text-muted"> {{ activeMarker.reviews }}</span>
                          </div>
                        </div>
                        <img :src="activeMarker.userImageUrl" class="rounded-circle" width="40" />
                      </div>
                      <div class="listing-details-group">
                        <ul class="d-flex flex-wrap list-unstyled gap-2 small">
                          <li><img :src="activeMarker.partManual" width="16" /> Manual</li>
                          <li><img :src="activeMarker.partKM" width="16" /> 10 KM</li>
                          <li><img :src="activeMarker.partFuel" width="16" /> Petrol</li>
                          <li><img :src="activeMarker.partPower" width="16" /> Power</li>
                        </ul>
                      </div>
                      <div class="listing-location-details d-flex justify-content-between mt-2">
                        <span><i class="feather-map-pin"></i> {{ activeMarker.address }}</span>
                        <h6 class="text-end mb-0">{{ activeMarker.amount }}<span>/ Day</span></h6>
                      </div>
                      <div class="listing-button text-center mt-2">
                        <a :href="activeMarker.profile_link" class="btn btn-sm btn-primary">
                          <i class="feather-calendar me-1"></i> Rent Now
                        </a>
                      </div>
                    </div>
                  </div>
                </InfoWindow>
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import Listing_Map from "@/assets/json/listing-map.json";

export default {
  components: {
    GoogleMap,
    Marker,
    InfoWindow,
  },
  data() {
    return {
      title: "Car Listings",
      text: "Listings",
      text1: "Listings Map",
      Listing_Map,
      center: { lat: 53.470692, lng: -2.220328 },
      activeMarker: null,
      locations: [
        {
          id: "01",
          car_name: "Ferrari 458 MM Special",
          car_image: "car-list-1.jpg",
          image: "avatar-04.jpg",
          car_brand: "Ferrari",
          profile_link: "/listing/listing-details",
          reviews: "(4.0) 160",
          address: "New York, USA",
          amount: "$160",
          lat: 53.470692,
          lng: -2.220328,
        },
        {
          id: "02",
          car_name: "BMW 640 XI Gran Turismo",
          car_image: "car-list-2.jpg",
          image: "avatar-03.jpg",
          car_brand: "BMW",
          profile_link: "/listing/listing-details",
          reviews: "(4.0) 165",
          address: "Pattaya, Thailand",
          amount: "$160",
          lat: 53.469189,
          lng: -2.199262,
        },
      ],
    };
  },
  methods: {
    toggleSelected(item) {
      item.isSelected = !item.isSelected;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/${imageName}`, import.meta.url).href;
    },
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
    },
    selectMarker(marker) {
      this.activeMarker = {
        ...marker,
        carImageUrl: new URL(`/src/assets/img/${marker.car_image}`, import.meta.url).href,
        userImageUrl: new URL(`/src/assets/img/profiles/${marker.image}`, import.meta.url).href,
        pinIcon: new URL(`/src/assets/img/icons/map-pin.svg`, import.meta.url).href,
        partManual: new URL(`/src/assets/img/icons/car-parts-05.svg`, import.meta.url).href,
        partKM: new URL(`/src/assets/img/icons/car-parts-02.svg`, import.meta.url).href,
        partFuel: new URL(`/src/assets/img/icons/car-parts-03.svg`, import.meta.url).href,
        partPower: new URL(`/src/assets/img/icons/car-parts-04.svg`, import.meta.url).href,
      };
    },
  },
};
</script>