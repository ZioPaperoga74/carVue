<template>
  <!-- FAQ  -->
  <section class="section faq-section-three">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <!-- Heading title-->
          <div class="section-heading heading-three" data-aos="fade-down">
            <h2>Frequently Asked Questions</h2>
            <p>
              Feel free to customize them further to align with your specific
              policies
            </p>
          </div>
          <!-- /Heading title -->
          <div class="faq-info">
            <div class="faq-card" data-aos="fade-down">
              <h4 class="faq-title">
                <a
                  class="collapseds"
                  data-bs-toggle="collapse"
                  href="#faqOne"
                  aria-expanded="true"
                  >How old do I need to be to rent a Bike ?</a
                >
              </h4>
              <div id="faqOne" class="card-collapse collapse show">
                <p>
                  We offer a diverse fleet of vehicles to suit every need,
                  including compact cars, sedans, SUVs and luxury vehicles. You
                  can browse our selection online or contact us for assistance
                  in choosing the right vehicle for you
                </p>
              </div>
            </div>
            <div class="faq-card" data-aos="fade-down">
              <h4 class="faq-title">
                <a
                  class="collapsed"
                  data-bs-toggle="collapse"
                  href="#faqTwo"
                  aria-expanded="false"
                  >What documents do I need to rent a Bike?</a
                >
              </h4>
              <div id="faqTwo" class="card-collapse collapse">
                <p>
                  We offer a diverse fleet of vehicles to suit every need,
                  including compact cars, sedans, SUVs and luxury vehicles. You
                  can browse our selection online or contact us for assistance
                  in choosing the right vehicle for you
                </p>
              </div>
            </div>
            <div class="faq-card" data-aos="fade-down">
              <h4 class="faq-title">
                <a
                  class="collapsed"
                  data-bs-toggle="collapse"
                  href="#faqThree"
                  aria-expanded="false"
                  >What types of vehicles are available for rent?</a
                >
              </h4>
              <div id="faqThree" class="card-collapse collapse">
                <p>
                  We offer a diverse fleet of vehicles to suit every need,
                  including compact cars, sedans, SUVs and luxury vehicles. You
                  can browse our selection online or contact us for assistance
                  in choosing the right vehicle for you
                </p>
              </div>
            </div>
            <div class="faq-card" data-aos="fade-down">
              <h4 class="faq-title">
                <a
                  class="collapsed"
                  data-bs-toggle="collapse"
                  href="#faqFour"
                  aria-expanded="false"
                  >Can I rent a Bike with a debit card?</a
                >
              </h4>
              <div id="faqFour" class="card-collapse collapse">
                <p>
                  We offer a diverse fleet of vehicles to suit every need,
                  including compact cars, sedans, SUVs and luxury vehicles. You
                  can browse our selection online or contact us for assistance
                  in choosing the right vehicle for you
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="customer-content">
            <p>
              Overall, car rental counters serve as the primary point of contact
              for customers to pick up their rental vehicles and complete the
              necessary paperwork before embarking on their journey. The rental
              agents are there to assist customers every step of the way and
              ensure a smooth and seamless rental experience.
            </p>
            <div class="row">
              <div class="col-md-6">
                <div class="count-box">
                  <span class="counts-icon">
                    <img
                      src="@/assets/img/icons/count-01.svg"
                      class="img-fluid"
                      alt="img"
                    />
                  </span>
                  <div class="count-info">
                    <h3>
                      <vue3-autocounter
                        class="counterUp"
                        ref="counter"
                        :startAmount="0"
                        :delay="3"
                        :endAmount="625"
                        :duration="5"
                        separator=","
                        :autoinit="true"
                      />+
                    </h3>
                    <p>Locations to Pickup</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="count-box">
                  <span class="counts-icon">
                    <img
                      src="@/assets/img/icons/count-02.svg"
                      class="img-fluid"
                      alt="img"
                    />
                  </span>
                  <div class="count-info">
                    <h3>
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
                    </h3>
                    <p>Count of Bikes</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="count-box">
                  <span class="counts-icon">
                    <img
                      src="@/assets/img/icons/count-03.svg"
                      class="img-fluid"
                      alt="img"
                    />
                  </span>
                  <div class="count-info">
                    <h3>
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
                    </h3>
                    <p>Total Kilometers</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="count-box">
                  <span class="counts-icon">
                    <img
                      src="@/assets/img/icons/count-04.svg"
                      class="img-fluid"
                      alt="img"
                    />
                  </span>
                  <div class="count-info">
                    <h3>
                      <vue3-autocounter
                        class="counterUp"
                        ref="counter"
                        :startAmount="0"
                        :delay="3"
                        :endAmount="16"
                        :duration="5"
                        separator=","
                        :autoinit="true"
                      />
                      +
                    </h3>
                    <p>Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="faq-bg">
      <img
        src="@/assets/img/bg/ban-bg-01.png"
        class="img-fluid shape-01"
        alt="img"
      />
      <img
        src="@/assets/img/bg/faq-bg-01.png"
        class="img-fluid shape-02"
        alt="img"
      />
      <img
        src="@/assets/img/bg/faq-bg-02.png"
        class="img-fluid shape-03"
        alt="img"
      />
    </div>
  </section>
  <!-- /FAQ -->

  <!-- Bike Section -->
  <section class="section bike-section">
    <div class="container">
      <div class="bike-wrap">
        <div class="bike-content">
          <h2>Want to add your Bike for rent in Dreams rent</h2>
        </div>
        <div class="bike-btn">
          <router-link to="/authentication/register" class="btn btn-theme"
            >Add your Listing</router-link
          >
        </div>
      </div>
    </div>
    <div class="bike-bg">
      <img
        class="img-fluid shape-01"
        src="@/assets/img/bg/ban-bg-05.png"
        alt="Image"
      />
      <img
        class="img-fluid shape-02"
        src="@/assets/img/bg/ban-bg-06.png"
        alt="Image"
      />
      <img
        class="img-fluid shape-03"
        src="@/assets/img/bg/shape-bg.png"
        alt="Image"
      />
      <img
        class="img-fluid shape-04"
        src="@/assets/img/bg/ban-bg-06.png"
        alt="Image"
      />
    </div>
  </section>
  <!-- /Bike Section -->
</template>