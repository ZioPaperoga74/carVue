<template>
  <div class="listing-page">
    <layouts-header></layouts-header>
    <breadcrumb :title="title" :text="text" :text1="text1" />
    <listing-filter></listing-filter>
    <section class="section car-listing pt-0">
      <div class="container">
        <div class="row">
          <listing-sidebar></listing-sidebar>
          <div class="col-xl-9 col-lg-8 col-sm-12 col-12">
            <div class="row">
              <div
                class="listview-car"
                v-for="item in listing_list"
                :key="item.id"
              >
                <div class="card">
                  <div class="blog-widget d-flex">
                    <div class="blog-img">
                      <router-link
                        to="/listing/listing-details"
                        v-if="item.Slider.length === 1"
                      >
                        <img
                          :src="getImageUrl(item.Slider[0].Image)"
                          class="img-fluid"
                          alt="Audi"
                        />
                      </router-link>
                      <div class="img-slider owl-carousel" v-else>
                        <Carousel
                          :wrap-around="true"
                          :settings="settings"
                          :breakpoints="breakpoints"
                        >
                          <Slide
                            v-for="slideItem in item.Slider"
                            :key="slideItem.id"
                          >
                            <div class="slide-images">
                              <router-link to="/listing/listing-details">
                                <img
                                  :src="getImageUrl(slideItem.Image)"
                                  class="img-fluid"
                                  alt="Toyota"
                                />
                              </router-link>
                            </div>
                          </Slide>
                          <template #addons>
                            <Pagination />
                            <Navigation />
                          </template>
                        </Carousel>
                      </div>
                      <div class="fav-item justify-content-end">
                        <span class="img-count"
                          ><i class="feather-image"></i>04</span
                        >
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
                              <router-link to="/listing/listing-details">{{
                                item.Name
                              }}</router-link>
                            </h3>
                            <h6>
                              Category : <span>{{ item.brand }}</span>
                            </h6>
                          </div>
                          <div class="blog-list-rate">
                            <div class="list-rating">
                              <i class="fas fa-star filled me-1"></i>
                              <i class="fas fa-star filled me-1"></i>
                              <i class="fas fa-star filled me-1"></i>
                              <i class="fas fa-star filled me-1"></i>
                              <i class="fas fa-star filled"></i>
                              <span>{{ item.Reviews }}</span>
                            </div>
                            <h6>{{ item.price }} <span>/ Day</span></h6>
                          </div>
                        </div>
                        <div class="listing-details-group">
                          <ul>
                            <li>
                              <span
                                ><img
                                  src="@/assets/img/icons/car-parts-05.svg"
                                  alt="Auto"
                              /></span>
                              <p>{{ item.transmission }}</p>
                            </li>
                            <li>
                              <span
                                ><img
                                  src="@/assets/img/icons/car-parts-02.svg"
                                  alt="10 KM"
                              /></span>
                              <p>{{ item.mileage }}</p>
                            </li>
                            <li>
                              <span
                                ><img
                                  src="@/assets/img/icons/car-parts-03.svg"
                                  alt="Petrol"
                              /></span>
                              <p>{{ item.fuelType }}</p>
                            </li>
                            <li>
                              <span
                                ><img
                                  src="@/assets/img/icons/car-parts-04.svg"
                                  alt="Power"
                              /></span>
                              <p>{{ item.power }}</p>
                            </li>
                            <li>
                              <span
                                ><img
                                  src="@/assets/img/icons/car-parts-05.svg"
                                  alt="2018"
                              /></span>
                              <p>{{ item.year }}</p>
                            </li>
                            <li>
                              <span
                                ><img
                                  src="@/assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                              /></span>
                              <p>{{ item.passengers }}</p>
                            </li>
                          </ul>
                        </div>
                        <div class="blog-list-head list-head-bottom d-flex">
                          <div class="blog-list-title">
                            <div class="title-bottom">
                              <div class="car-list-icon">
                                <img
                                  src="@/assets/img/profiles/avatar-03.jpg"
                                  alt="user"
                                />
                              </div>
                              <div class="address-info">
                                <h6>
                                  <i class="feather-map-pin"></i
                                  >{{ item.location }}
                                </h6>
                              </div>
                              <div class="list-km">
                                <span class="km-count"
                                  ><img
                                    src="@/assets/img/icons/map-pin.svg"
                                    alt="author"
                                  />{{ item.Meter }}</span
                                >
                              </div>
                            </div>
                          </div>
                          <div class="listing-button">
                            <router-link
                              to="/listing/listing-details"
                              type="sumit"
                              class="btn btn-order"
                              ><span><i class="feather-calendar me-2"></i></span
                              >Rent Now</router-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="feature-text">
                      <span :class="item.RatedClass">{{ item.Rated }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!--Pagination-->
              <div class="blog-pagination">
                <nav>
                  <ul class="pagination page-item justify-content-center">
                    <li class="previtem">
                      <a class="page-link" href="javascript:;"
                        ><i class="fas fa-regular fa-arrow-left me-2"></i>
                        Prev</a
                      >
                    </li>
                    <li class="justify-content-center pagination-center">
                      <div class="page-group">
                        <ul>
                          <li class="page-item">
                            <a class="page-link" href="javascript:;">1</a>
                          </li>
                          <li class="page-item">
                            <a class="active page-link" href="javascript:;"
                              >2
                              <span class="visually-hidden">(current)</span></a
                            >
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="javascript:;">3</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="javascript:;">4</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="javascript:;">5</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nextlink">
                      <a class="page-link" href="javascript:;"
                        >Next <i class="fas fa-regular fa-arrow-right ms-2"></i
                      ></a>
                    </li>
                  </ul>
                </nav>
              </div>
              <!--/Pagination-->
            </div>
          </div>
        </div>
      </div>
    </section>
    <layout-footer></layout-footer>
  </div>
</template>
<script>
import listing_list from "@/assets/json/listing-list.json";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  data() {
    return {
      listing_list: listing_list,
      title: "Trova la tua Auto",
      text: "Auto",
      text1: "Trova la tua Auto",
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        575: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    toggleSelected(item) {
      item.isSelected = !item.isSelected;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
