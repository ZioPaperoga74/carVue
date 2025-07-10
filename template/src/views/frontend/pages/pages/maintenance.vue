<template>
  <div class="error-box">
    <img
      src="@/assets/img/maintenance.png"
      class="img-fluid"
      alt="Maintenance"
    />
    <h2 class="coming-soon">We're Down For Maintenance</h2>
    <p>
      Our website is currently undergoing scheduled maintenance, will be right
      back in a few minutes.
    </p>
    <h6>We'll Be Back Shortly</h6>
    <div class="footer-social-links">
      <ul class="nav">
        <li>
          <a href="javascript:;" target="_blank"
            ><i class="feather-instagram hi-icon"></i
          ></a>
        </li>
        <li>
          <a href="javascript:;" target="_blank"
            ><i class="feather-twitter hi-icon"></i>
          </a>
        </li>
        <li>
          <a href="javascript:;" target="_blank"
            ><i class="feather-youtube hi-icon"></i
          ></a>
        </li>
        <li>
          <a href="javascript:;" target="_blank"
            ><i class="feather-facebook hi-icon"></i
          ></a>
        </li>
        <li>
          <a href="javascript:;" target="_blank"
            ><i class="feather-linkedin hi-icon"></i
          ></a>
        </li>
      </ul>
    </div>
    <router-link to="/home/index-2" class="btn-maintance btn btn-primary"
      >Back to Home</router-link
    >
  </div>
</template>
