<template>
  <section class="boats-marketplace-sec">
    <div class="sec-round-colors">
      <span class="bg-orange round-small"></span>
      <span class="bg-dark-blue round-small"></span>
      <span class="bg-dark-blue round-small"></span>
      <span class="bg-dark-blue round-big"></span>
    </div>
    <div class="sec-bg">
      <img src="@/assets/img/bg/dotted-round-bg.png" alt="Bg" />
      <img src="@/assets/img/bg/anchor-img.png" alt="Bg" />
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="sec-col-left-imgs">
            <span class="sec-left-one"
              ><img
                src="@/assets/img/bg/sec-modal-img-01.jpg"
                class="img-fluid"
                alt="Img"
            /></span>
            <span class="sec-left-two"
              ><img
                src="@/assets/img/bg/sec-modal-img-02.jpg"
                class="img-fluid"
                alt="Img"
            /></span>
            <div class="experience-info">
              <h5>
                15+
                <span
                  >Years of <br />
                  Experience</span
                >
              </h5>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="section-header-two">
            <h2>
              Providing a large fleet of Boats marketplace for a perfect and
              dreamy experience
            </h2>
            <h4>
              Know what you looking for? Browse our extensive select of charter
              yachts from around the world.
            </h4>
            <p>
              Find and book your dream yacht through Floaty, the world’s leading
              luxury yacht charter comparison site. View all superyachts
              available to rent, get expert advice from our comprehensive
              destination guides and be inspired by our bespoke superyacht
              itineraries.
            </p>
            <router-link to="/listing/listing-details"
              class="btn btn-primary d-flex align-items-center"
              ><i class="bx bx-bar-chart me-2"></i>Learn More</router-link
            >
          </div>
        </div>
      </div>
      <div class="yacht-owner-card">
        <div class="sec-bg">
          <img src="@/assets/img/bg/sec-bg-wave.png" alt="Img" />
        </div>
        <div class="yacht-owner-title">
          <h3>Are you a Yacht Owner ?</h3>
          <p>List your boat on Boataround and earn money.</p>
          <a href="javascript:void(0);" class="btn btn-primary">Get Started</a>
        </div>
        <div class="yacht-owner-img">
          <img src="@/assets/img/bg/yacht-owner-bg-01.png" alt="Img" />
        </div>
      </div>
    </div>
  </section>
</template>
