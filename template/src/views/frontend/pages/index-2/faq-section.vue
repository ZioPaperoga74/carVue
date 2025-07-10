<template>
  <section class="faq-sec-two">
    <div class="sec-round-colors">
      <span class="bg-orange round-small"></span>
      <span class="bg-orange round-small"></span>
      <span class="bg-dark-blue round-small"></span>
      <span class="bg-dark-blue round-big"></span>
    </div>
    <div class="sec-bg">
      <img src="@/assets/img/bg/anchor-img.png" alt="Bg" />
      <img src="@/assets/img/bg/ship-part-bg-02.png" alt="Bg" />
      <img src="@/assets/img/bg/ship-part-bg-03.png" alt="Bg" />
      <img src="@/assets/img/bg/sec-bg-wave.png" alt="Bg" />
    </div>
    <div class="container">
      <div class="counter-group counter-group-two">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12 d-flex">
            <div class="count-group flex-fill">
              <div class="customer-count d-flex align-items-center">
                <div class="count-img">
                  <img
                    src="@/assets/img/icons/counter-icon-01.svg"
                    alt="Icon"
                  />
                </div>
                <div class="count-content">
                  <h4>
                    <vue3-autocounter
                      class="counterUp"
                      ref="counter"
                      :startAmount="0"
                      :delay="3"
                      :endAmount="2547"
                      :duration="5"
                      separator=","
                      :autoinit="true"
                    />+
                  </h4>
                  <p>Count of Yachts</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 d-flex">
            <div class="count-group flex-fill">
              <div class="customer-count d-flex align-items-center">
                <div class="count-img">
                  <img
                    src="@/assets/img/icons/counter-icon-02.svg"
                    alt="Icon"
                  />
                </div>
                <div class="count-content">
                  <h4>
                    <vue3-autocounter
                      class="counterUp"
                      ref="counter"
                      :startAmount="0"
                      :delay="3"
                      :endAmount="16"
                      :duration="5"
                      separator=","
                      :autoinit="true"
                    />k
                  </h4>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 d-flex">
            <div class="count-group flex-fill">
              <div class="customer-count d-flex align-items-center">
                <div class="count-img">
                  <img
                    src="@/assets/img/icons/counter-icon-03.svg"
                    alt="Icon"
                  />
                </div>
                <div class="count-content">
                  <h4>
                    <vue3-autocounter
                      class="counterUp"
                      ref="counter"
                      :startAmount="0"
                      :delay="3"
                      :endAmount="15000"
                      :duration="5"
                      separator=","
                      :autoinit="true"
                    />
                  </h4>
                  <p>Total Nauticles</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 d-flex">
            <div class="count-group flex-fill">
              <div class="customer-count d-flex align-items-center">
                <div class="count-img">
                  <img
                    src="@/assets/img/icons/counter-icon-04.svg"
                    alt="Icon"
                  />
                </div>
                <div class="count-content">
                  <h4>
                    <vue3-autocounter
                      class="counterUp"
                      ref="counter"
                      :startAmount="0"
                      :delay="3"
                      :endAmount="5000"
                      :duration="5"
                      separator=","
                      :autoinit="true"
                    />
                    +
                  </h4>
                  <p>Booking Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="faq-items">
        <div class="section-header-two">
          <h2>Frequently Asked Questions</h2>
          <p>
            Feel free to customize them further to align with your specific
            policies
          </p>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="faq-main-items" id="faq-details">
              <!-- FAQ Item -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <a
                    href="javascript:void(0);"
                    class="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What documents do I need to rent a Yacht?
                  </a>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faq-details"
                >
                  <div class="accordion-body">
                    <div class="accordion-content">
                      <p>
                        We offer a diverse fleet of vehicles to suit every need,
                        including compact yachts. You can browse our selection
                        online or contact us for assistance in choosing the
                        right vehicle for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /FAQ Item -->
              <!-- FAQ Item -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <a
                    href="javascript:void(0);"
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What types of Yacht’s are available for rent?
                  </a>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faq-details"
                >
                  <div class="accordion-body">
                    <div class="accordion-content">
                      <p>
                        We offer a diverse fleet of vehicles to suit every need,
                        including compact yachts. You can browse our selection
                        online or contact us for assistance in choosing the
                        right vehicle for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /FAQ Item -->
              <!-- FAQ Item -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <a
                    href="javascript:void(0);"
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Can I rent a yacht for more than one week?
                  </a>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faq-details"
                >
                  <div class="accordion-body">
                    <div class="accordion-content">
                      <p>
                        We offer a diverse fleet of vehicles to suit every need,
                        including compact yachts. You can browse our selection
                        online or contact us for assistance in choosing the
                        right vehicle for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /FAQ Item -->
              <!-- FAQ Item -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <a
                    href="javascript:void(0);"
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How old do I need to be to rent a Yacht ?
                  </a>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faq-details"
                >
                  <div class="accordion-body">
                    <div class="accordion-content">
                      <p>
                        We offer a diverse fleet of vehicles to suit every need,
                        including compact yachts. You can browse our selection
                        online or contact us for assistance in choosing the
                        right vehicle for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /FAQ Item -->
              <!-- FAQ Item -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <a
                    href="javascript:void(0);"
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Can I rent a Yacht with a debit card?
                  </a>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faq-details"
                >
                  <div class="accordion-body">
                    <div class="accordion-content">
                      <p>
                        We offer a diverse fleet of vehicles to suit every need,
                        including compact yachts. You can browse our selection
                        online or contact us for assistance in choosing the
                        right vehicle for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /FAQ Item -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
