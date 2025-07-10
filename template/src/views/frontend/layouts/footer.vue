<template>
  <!-- Footer -->
  <footer class="footer">
    <!-- Footer Top -->
    <div class="footer-top aos" data-aos="fade-down">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <!-- Footer Widget -->
                <div class="footer-widget footer-menu">
                  <h5 class="footer-title">Info</h5>
                  <ul>
                    <li>
                      <router-link to="/pages/about-us">Chi Siamo</router-link>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Contatti</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">FAQ</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Recensioni</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Pagamenti</a>
                    </li>
                  </ul>
                </div>
                <!-- /Footer Widget -->
              </div>
              <div class="col-lg-4 col-md-6">
                <!-- Footer Widget -->
                <div class="footer-widget footer-menu">
                  <h5 class="footer-title">Auto</h5>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Home</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Tutte le auto</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Termini e condizioni</a>
                    </li>
                  </ul>
                </div>
                <!-- /Footer Widget -->
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="footer-contact footer-widget">
              <h5 class="footer-title">Contatti</h5>
              <div class="footer-contact-info">
                <div class="footer-address">
                  <span><i class="feather-phone-call"></i></span>
                  <div class="addr-info">
                    <a href="tel:+1(888)7601940">+ 1 (888) 760 1940</a>
                  </div>
                </div>
                <div class="footer-address">
                  <span><i class="feather-mail"></i></span>
                  <div class="addr-info">
                    <a href="mailto:support@example.com">support@example.com</a>
                  </div>
                </div>
                <div class="update-form">
                  <form action="javascript:;">
                    <span><i class="feather-mail"></i></span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter You Email Here"
                    />
                    <button type="submit" class="btn btn-subscribe">
                      <span><i class="feather-send"></i></span>
                    </button>
                  </form>
                </div>
              </div>
              <div class="footer-social-widget">
                <ul class="nav-social">
                  <li>
                    <a href="javascript:void(0)"
                      ><i
                        class="fa-brands fa-facebook-f fa-facebook fi-icon"
                      ></i
                    ></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"
                      ><i class="fab fa-instagram fi-icon"></i
                    ></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"
                      ><i class="fab fa-behance fi-icon"></i
                    ></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"
                      ><i class="fab fa-twitter fi-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"
                      ><i class="fab fa-linkedin fi-icon"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Footer Top -->

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <!-- Copyright -->
        <div class="copyright">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="copyright-text">
                <p>
                  © {{ new Date().getFullYear() }} MultiCars. All Rights
                  Reserved.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <!-- Copyright Menu -->
              <!-- <div class="copyright-menu">
                <div class="vistors-details">
                  <ul class="d-flex">
                    <li>
                      <a href="javascript:void(0)"
                        ><img
                          class="img-fluid"
                          src="@/assets/img/icons/paypal.svg"
                          alt="Paypal"
                      /></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"
                        ><img
                          class="img-fluid"
                          src="@/assets/img/icons/visa.svg"
                          alt="Visa"
                      /></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"
                        ><img
                          class="img-fluid"
                          src="@/assets/img/icons/master.svg"
                          alt="Master"
                      /></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"
                        ><img
                          class="img-fluid"
                          src="@/assets/img/icons/applegpay.svg"
                          alt="applegpay"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div> -->
              <!-- /Copyright Menu -->
            </div>
          </div>
        </div>
        <!-- /Copyright -->
      </div>
    </div>
    <!-- /Footer Bottom -->
  </footer>
  <!-- /Footer -->
</template>
