<template>
  <layouts-header></layouts-header>
  <breadcrumb :title="title" :text="text" :text1="text1" />

  <!-- Blog Grid-->
  <div class="blog-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div
              class="col-lg-6 col-md-6 d-lg-flex"
              v-for="item in BlogGrid"
              :key="item.id"
            >
              <div class="blog grid-blog">
                <div class="blog-image">
                  <router-link to="/blog/blog-details"
                    ><img
                      class="img-fluid"
                      :src="getImageUrl(item.Image)"
                      alt="Post Image"
                  /></router-link>
                </div>
                <div class="blog-content">
                  <p class="blog-category">
                    <a href="javascript:void(0)"><span>Car Showcase</span></a>
                  </p>
                  <h3 class="blog-title">
                    <router-link to="/blog/blog-details">{{ item.Title }}</router-link>
                  </h3>
                  <p class="blog-description">
                    Everyone has the right to freedom of thought, conscience and religion;
                    this right includes freedom to change his religion or belief, and
                    freedom, either alone...
                  </p>
                  <ul class="meta-item">
                    <li>
                      <div class="post-author">
                        <div class="post-author-img">
                          <img
                            :src="getImageUrlOne(item.Avatar)"
                            alt="author"
                          />
                        </div>
                        <a href="javascript:void(0)">
                          <span> {{ item.Name }} </span></a
                        >
                      </div>
                    </li>
                    <li class="date-icon">
                      <i class="fa-solid fa-calendar-days"></i>
                      <span>{{ item.Day }}</span>
                    </li>
                  </ul>
                  <router-link to="/blog/blog-details" class="viewlink btn btn-primary"
                    >Read More <i class="feather-arrow-right ms-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
          </div>

          <!--Pagination-->
          <div class="pagination">
            <nav>
              <ul class="pagination">
                <li class="previtem">
                  <a class="page-link" href="javascript:;"
                    ><i class="fas fa-regular fa-arrow-left me-2"></i> Prev</a
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
                          >2 <span class="visually-hidden">(current)</span></a
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
        <blog-sidebar></blog-sidebar>
      </div>
    </div>
  </div>
  <!-- /Blog Grid-->
  <layout-footer></layout-footer>
</template>

<script>
import BlogGrid from "@/assets/json/blog-grid.json";
export default {
  data() {
    return {
      title: "Blog Grid",
      text: "Blogs",
      text1: "Blog Grid",
      BlogGrid: BlogGrid,
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/blog/${imageName}`, import.meta.url).href;
    },
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
