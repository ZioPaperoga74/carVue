<template>
  <section class="category-section-four">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- Heading title-->
          <div class="section-heading heading-four" data-aos="fade-down">
            <h2>Featured Categories</h2>
            <p>Know what you’re looking for? Browse our extensive selection of cars</p>
          </div>
          <!-- /Heading title -->

          <div class="row row-gap-4">
            <!-- Category Item -->
            <div class="col-xl-2 col-md-4 col-sm-6 d-flex">
              <div class="category-item flex-fill">
                <div
                  class="category-info d-flex align-items-center justify-content-between"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/listing/listing-grid"
                        >Sports Coupe</router-link
                      >
                    </h6>
                    <p>14 Cars</p>
                  </div>
                  <router-link to="/listing/listing-grid" class="link-icon"
                    ><i class="bx bx-right-arrow-alt"></i
                  ></router-link>
                </div>
                <div class="category-img">
                  <img
                    src="@/assets/img/category/category-01.png"
                    alt="img"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <!-- /Category Item -->

            <!-- Category Item -->
            <div class="col-xl-2 col-md-4 col-sm-6 d-flex">
              <div class="category-item flex-fill">
                <div
                  class="category-info d-flex align-items-center justify-content-between"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/listing/listing-grid"
                        >Sedan</router-link
                      >
                    </h6>
                    <p>12 Cars</p>
                  </div>
                  <router-link to="/listing/listing-grid" class="link-icon"
                    ><i class="bx bx-right-arrow-alt"></i
                  ></router-link>
                </div>
                <div class="category-img">
                  <img
                    src="@/assets/img/category/category-02.png"
                    alt="img"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <!-- /Category Item -->

            <!-- Category Item -->
            <div class="col-xl-2 col-md-4 col-sm-6 d-flex">
              <div class="category-item flex-fill">
                <div
                  class="category-info d-flex align-items-center justify-content-between"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/listing/listing-grid"
                        >Sports Car</router-link
                      >
                    </h6>
                    <p>35 Cars</p>
                  </div>
                  <router-link to="/listing/listing-grid" class="link-icon"
                    ><i class="bx bx-right-arrow-alt"></i
                  ></router-link>
                </div>
                <div class="category-img">
                  <img
                    src="@/assets/img/category/category-03.png"
                    alt="img"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <!-- /Category Item -->

            <!-- Category Item -->
            <div class="col-xl-2 col-md-4 col-sm-6 d-flex">
              <div class="category-item flex-fill">
                <div
                  class="category-info d-flex align-items-center justify-content-between"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/listing/listing-grid"
                        >Pickup</router-link
                      >
                    </h6>
                    <p>35 Cars</p>
                  </div>
                  <router-link to="/listing/listing-grid" class="link-icon"
                    ><i class="bx bx-right-arrow-alt"></i
                  ></router-link>
                </div>
                <div class="category-img">
                  <img
                    src="@/assets/img/category/category-04.png"
                    alt="img"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <!-- /Category Item -->

            <!-- Category Item -->
            <div class="col-xl-2 col-md-4 col-sm-6 d-flex">
              <div class="category-item flex-fill">
                <div
                  class="category-info d-flex align-items-center justify-content-between"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/listing/listing-grid"
                        >Family MPV</router-link
                      >
                    </h6>
                    <p>35 Cars</p>
                  </div>
                  <router-link to="/listing/listing-grid" class="link-icon"
                    ><i class="bx bx-right-arrow-alt"></i
                  ></router-link>
                </div>
                <div class="category-img">
                  <img
                    src="@/assets/img/category/category-05.png"
                    alt="img"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <!-- /Category Item -->

            <!-- Category Item -->
            <div class="col-xl-2 col-md-4 col-sm-6 d-flex">
              <div class="category-item flex-fill">
                <div
                  class="category-info d-flex align-items-center justify-content-between"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/listing/listing-grid"
                        >Crossover</router-link
                      >
                    </h6>
                    <p>30 Cars</p>
                  </div>
                  <router-link to="/listing/listing-grid" class="link-icon"
                    ><i class="bx bx-right-arrow-alt"></i
                  ></router-link>
                </div>
                <div class="category-img">
                  <img
                    src="@/assets/img/category/category-06.png"
                    alt="img"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <!-- /Category Item -->
          </div>

          <div class="view-all-btn text-center aos" data-aos="fade-down">
            <router-link to="/listing/listing-grid" class="btn btn-secondary"
              >View All<i class="bx bx-right-arrow-alt ms-1"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
