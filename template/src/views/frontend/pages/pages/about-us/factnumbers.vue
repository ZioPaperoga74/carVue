<template>
  <section class="section facts-number">
    <div class="facts-left">
      <img src="@/assets/img/bg/facts-left.png" class="img-fluid" alt="facts left" />
    </div>
    <div class="facts-right">
      <img src="@/assets/img/bg/facts-right.png" class="img-fluid" alt="facts right" />
    </div>
    <div class="container">
      <!-- Heading title-->
      <div class="section-heading" data-aos="fade-down">
        <h2 class="title text-white">Facts By The Numbers</h2>
        <p class="description text-white">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>
      <!-- /Heading title -->
      <div class="counter-group">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12 d-flex" data-aos="fade-down">
            <div class="count-group flex-fill">
              <div class="customer-count d-flex align-items-center">
                <div class="count-img">
                  <img src="@/assets/img/icons/bx-heart.svg" alt="" />
                </div>
                <div class="count-content">
                  <h4>
                    <vue3-autocounter
                      class="counter-up"
                      ref="counter"
                      :startAmount="0"
                      :delay="3"
                      :endAmount="16"
                      :duration="2"
                      separator=","
                      :autoinit="true"
                    />K+
                  </h4>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 d-flex" data-aos="fade-down">
            <div class="count-group flex-fill">
              <div class="customer-count d-flex align-items-center">
                <div class="count-img">
                  <img src="@/assets/img/icons/bx-car.svg" alt="" />
                </div>
                <div class="count-content">
                  <h4>
                    <vue3-autocounter
                      class="counter-up"
                      ref="counter"
                      :startAmount="0"
                      :delay="3"
                      :endAmount="2547"
                      :duration="2"
                      separator=","
                      :autoinit="true"
                    />+
                  </h4>
                  <p>Count of Cars</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 d-flex" data-aos="fade-down">
            <div class="count-group flex-fill">
              <div class="customer-count d-flex align-items-center">
                <div class="count-img">
                  <img src="@/assets/img/icons/bx-headphone.svg" alt="" />
                </div>
                <div class="count-content">
                  <h4>
                    <vue3-autocounter
                      class="counter-up"
                      ref="counter"
                      :startAmount="0"
                      :delay="3"
                      :endAmount="625"
                      :duration="2"
                      separator=","
                      :autoinit="true"
                    />K+
                  </h4>
                  <p>Car Center Solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 d-flex" data-aos="fade-down">
            <div class="count-group flex-fill">
              <div class="customer-count d-flex align-items-center">
                <div class="count-img">
                  <img src="@/assets/img/icons/bx-history.svg" alt="" />
                </div>
                <div class="count-content">
                  <h4>
                    <vue3-autocounter
                      class="counter-up"
                      ref="counter"
                      :startAmount="0"
                      :delay="3"
                      :endAmount="200"
                      :duration="2"
                      separator=","
                      :autoinit="true"
                    />K+
                  </h4>
                  <p>Total Kilometer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
