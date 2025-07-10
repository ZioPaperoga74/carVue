<template>
  <div class="col-lg-4 theiaStickySidebar">
    <div class="stickysidebar">
      <div class="rightsidebar">
        <div class="card">
          <h4>
            <img src="@/assets/img/icons/details-icon.svg" alt="details-icon" />
            Filter
          </h4>
          <div class="filter-content looking-input form-group mb-0">
            <input
              type="text"
              class="form-control"
              placeholder="To Search type and hit enter"
            />
          </div>
        </div>
        <div class="card">
          <h4>
            <img src="@/assets/img/icons/category-icon.svg" alt="details-icon" />
            Categories
          </h4>
          <ul class="blogcategories-list">
            <li><a href="javascript:void(0)">Accept Credit Cards</a></li>
            <li><a href="javascript:void(0)">Smoking Allowed</a></li>
            <li><a href="javascript:void(0)">Bike Parking</a></li>
            <li><a href="javascript:void(0)">Street Parking</a></li>
            <li><a href="javascript:void(0)">Wireless Internet</a></li>
            <li><a href="javascript:void(0)">Pet Friendly</a></li>
          </ul>
        </div>
        <div class="card tags-widget">
          <h4><i class="feather-tag"></i> Tags</h4>
          <ul class="tags">
            <li>Air</li>
            <li>Engine</li>
            <li>Item</li>
            <li>On Road</li>
            <li>Rims</li>
            <li>Speed</li>
            <li>Make</li>
            <li>Transmission</li>
          </ul>
        </div>
        <div class="card">
          <h4><i class="feather-tag"></i>Top Article</h4>
          <div class="article">
            <div class="article-blog">
              <router-link to="/blog/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-3.jpg" alt="Blog" />
              </router-link>
            </div>
            <div class="article-content">
              <h5>
                <router-link to="/blog/blog-details">Great Business Tips in 2023</router-link>
              </h5>
              <div class="article-date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>Jan 6, 2023</span>
              </div>
            </div>
          </div>
          <div class="article">
            <div class="article-blog">
              <router-link to="/blog/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-4.jpg" alt="Blog" />
              </router-link>
            </div>
            <div class="article-content">
              <h5>
                <router-link to="/blog/blog-details">Excited News About Cars.</router-link>
              </h5>
              <div class="article-date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>Feb 5, 2023</span>
              </div>
            </div>
          </div>
          <div class="article">
            <div class="article-blog">
              <router-link to="/blog/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-5.jpg" alt="Blog" />
              </router-link>
            </div>
            <div class="article-content">
              <h5>
                <router-link to="/blog/blog-details"
                  >8 Amazing Tricks About Business</router-link
                >
              </h5>
              <div class="article-date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>March 10, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
