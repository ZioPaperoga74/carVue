<template>
  <section class="rental-section-four">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="rental-img">
            <img src="@/assets/img/about/rent-car.png" alt="img" class="img-fluid" />
            <div class="grid-img">
              <img src="@/assets/img/about/car-grid.png" alt="img" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="rental-content">
            <div class="section-heading heading-four text-start" data-aos="fade-down">
              <h2>Rent Our Cars in 3 Steps</h2>
              <p>Check how it Works to Rent Cars in DreamsRent</p>
            </div>
            <div class="step-item d-flex align-items-center">
              <span class="step-icon bg-primary me-3">
                <i class="bx bx-calendar-heart"></i>
              </span>
              <div>
                <h5>Choose Date & Locations</h5>
                <p>
                  Determine the date & location for your car rental. Consider factors such
                  as your travel itinerary, pickup/drop-off locations
                </p>
              </div>
            </div>
            <div class="step-item d-flex align-items-center">
              <span class="step-icon bg-secondary-100 me-3">
                <i class="bx bxs-edit-location"></i>
              </span>
              <div>
                <h5>Select Pick-Up & Drop Locations</h5>
                <p>
                  Check the availability of your desired vehicle type for your chosen
                  dates and location. Ensure that the rental rates, taxes, fees, and any
                  additional charges.
                </p>
              </div>
            </div>
            <div class="step-item d-flex align-items-center">
              <span class="step-icon bg-dark me-3">
                <i class="bx bx-coffee-togo"></i>
              </span>
              <div>
                <h5>Book your Car</h5>
                <p>
                  Determine the date & location for your car rental. Consider factors such
                  as your travel itinerary, pickup/drop-off locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="count-sec">
        <div class="row row-gap-4">
          <div class="col-lg-3 col-md-6 d-flex">
            <div class="count-item flex-fill">
              <h3>
                <span class="counterUp"
                  ><vue3-autocounter
                    class="counterUp"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="16"
                    :duration="5"
                    separator=","
                    :autoinit="true" /></span
                >K+
              </h3>
              <p>Happy Customers</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex">
            <div class="count-item flex-fill">
              <h3>
                <span class="counterUp"
                  ><vue3-autocounter
                    class="counterUp"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="2547"
                    :duration="5"
                    separator=","
                    :autoinit="true" /></span
                >K+
              </h3>
              <p>Count of Cars</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex">
            <div class="count-item flex-fill">
              <h3>
                <span class="counterUp"
                  ><vue3-autocounter
                    class="counterUp"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="625"
                    :duration="5"
                    separator=","
                    :autoinit="true" /></span
                >K+
              </h3>
              <p>Locations to Pickup</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex">
            <div class="count-item flex-fill">
              <h3>
                <span class="counterUp"
                  ><vue3-autocounter
                    class="counterUp"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="15000"
                    :duration="5"
                    separator=","
                    :autoinit="true" /></span
                >K+
              </h3>
              <p>Total Kilometers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
