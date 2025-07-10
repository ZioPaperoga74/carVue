<template>
  <section class="news-insights-sec">
    <div class="sec-round-colors">
      <span class="bg-orange round-small"></span>
      <span class="bg-orange round-small"></span>
      <span class="bg-orange round-small"></span>
      <span class="bg-dark-blue round-small"></span>
      <span class="bg-dark-blue round-big"></span>
      <span class="bg-dark-blue round-big"></span>
    </div>
    <div class="sec-bg">
      <img src="@/assets/img/bg/ship-part-bg-01.png" alt="Img" />
    </div>
    <div class="container">
      <div class="section-header-two">
        <h2>News & Insights For You</h2>
        <p>
          This blog post provides valuable insights into the benefits of yacht rentals and
          offers practical tips for planning the perfect charter.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="article-grid-card">
            <div class="article-img">
              <router-link to="/blog/blog-grid"
                ><img
                  src="@/assets/img/blog/article-01.jpg"
                  class="img-fluid"
                  alt="Img"
              /></router-link>
              <span class="date-info"
                ><i class="bx bx-calendar me-2"></i>Apr 21, 2024</span
              >
            </div>
            <div class="user-head">
              <a href="javascript:void(0);" class="img-avatar"
                ><img src="@/assets/img/profiles/avatar-14.jpg" alt="Img" />By
                Sanax</a
              >
              <div class="user-head-right">
                <span class="me-3"
                  ><i class="bx bx-comment-detail me-2"></i>25 Comments</span
                >
                <span><i class="bx bx-like me-2"></i>25 Likes</span>
              </div>
            </div>
            <div class="article-title">
              <h4>
                <router-link to="/blog/blog-grid"
                  >The Ultimate Guide to Yacht Rentals: Experience
                  Luxury</router-link
                >
              </h4>
              <p>
                Are you dreaming of a vacation where luxury meets adventure? Look no
                further
              </p>
              <router-link to="/blog/blog-details" class="read-more"
                >Read More <i class="bx bx-right-arrow-alt ms-2"></i
              ></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="article-grid-card">
            <div class="article-img">
              <router-link to="/blog/blog-grid"
                ><img
                  src="@/assets/img/blog/article-02.jpg"
                  class="img-fluid"
                  alt="Img"
              /></router-link>
              <span class="date-info"
                ><i class="bx bx-calendar me-2"></i>Apr 25, 2024</span
              >
            </div>
            <div class="user-head">
              <a href="javascript:void(0);" class="img-avatar"
                ><img src="@/assets/img/profiles/avatar-15.jpg" alt="Img" />By
                Adrian</a
              >
              <div class="user-head-right">
                <span class="me-3"
                  ><i class="bx bx-comment-detail me-2"></i>25 Comments</span
                >
                <span><i class="bx bx-like me-2"></i>25 Likes</span>
              </div>
            </div>
            <div class="article-title">
              <h4>
                <router-link to="/blog/blog-grid"
                  >Planning Your Yacht Charter this Summer
                </router-link>
              </h4>
              <p>
                Start planning your yacht charter today and experience the magic of luxury
                travel....
              </p>
              <router-link to="/blog/blog-details" class="read-more"
                >Read More <i class="bx bx-right-arrow-alt ms-2"></i
              ></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="article-grid-card">
            <div class="article-img">
              <router-link to="/blog/blog-grid"
                ><img
                  src="@/assets/img/blog/article-03.jpg"
                  class="img-fluid"
                  alt="Img"
              /></router-link>
              <span class="date-info"
                ><i class="bx bx-calendar me-2"></i>Apr 30, 2024</span
              >
            </div>
            <div class="user-head">
              <a href="javascript:void(0);" class="img-avatar"
                ><img src="@/assets/img/profiles/avatar-16.jpg" alt="Img" />By
                Hendrita</a
              >
              <div class="user-head-right">
                <span class="me-3"
                  ><i class="bx bx-comment-detail me-2"></i>25 Comments</span
                >
                <span><i class="bx bx-like me-2"></i>25 Likes</span>
              </div>
            </div>
            <div class="article-title">
              <h4>
                <router-link to="/blog/blog-grid"
                  >Experience the Magic of Yacht Rentals in your
                  Location</router-link
                >
              </h4>
              <p>
                Whether you're cruising the Caribbean, exploring the Mediterranean, or
                discovering the...
              </p>
              <router-link to="/blog/blog-details" class="read-more"
                >Read More <i class="bx bx-right-arrow-alt ms-2"></i
              ></router-link>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="view-more text-center">
            <router-link to="/blog/blog-grid" class="btn btn-secondary"
              >View all Articles</router-link
            >
          </div>
        </div>
      </div>
      <div class="yacht-owner-card party-rental-yacht">
        <div class="sec-bg">
          <img src="@/assets/img/bg/sec-bg-wave.png" alt="Img" />
        </div>
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-8">
            <div class="yacht-owner-title">
              <h3>Special Offers on Party rental Yachts!!!</h3>
              <p>View all the yachts under the Offer</p>
              <router-link to="/listing/listing-details" class="btn btn-primary"
                >View Yachts</router-link
              >
            </div>
          </div>
        </div>
        <div class="yacht-owner-img">
          <img src="@/assets/img/bg/yacht-owner-bg-02.png" alt="Img" />
        </div>
      </div>
    </div>
  </section>
</template>
