<template>
  <div class="review-sec specification-card">
    <div class="review-header">
      <h4>Specifications</h4>
    </div>
    <div class="card-body">
      <div class="lisiting-featues">
        <div class="row">
          <div
            class="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6"
          >
            <div class="feature-img">
              <img
                src="@/assets/img/specification/specification-icon-1.svg"
                alt="Icon"
              />
            </div>
            <div class="featues-info">
              <span>Body </span>
              <h6>{{ car?.body || "-" }}</h6>
            </div>
          </div>
          <div
            class="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6"
          >
            <div class="feature-img">
              <img
                src="@/assets/img/specification/specification-icon-2.svg"
                alt="Icon"
              />
            </div>
            <div class="featues-info">
              <span>Make </span>
              <h6>{{ car?.brand || "-" }}</h6>
            </div>
          </div>
          <div
            class="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6"
          >
            <div class="feature-img">
              <img
                src="@/assets/img/specification/specification-icon-3.svg"
                alt="Icon"
              />
            </div>
            <div class="featues-info">
              <span>Transmission </span>
              <h6>{{ car?.transmission || "-" }}</h6>
            </div>
          </div>
          <div
            class="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6"
          >
            <div class="feature-img">
              <img
                src="@/assets/img/specification/specification-icon-4.svg"
                alt="Icon"
              />
            </div>
            <div class="featues-info">
              <span>Fuel Type </span>
              <h6>{{ car?.fuel_type || "-" }}</h6>
            </div>
          </div>
          <div
            class="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6"
          >
            <div class="feature-img">
              <img
                src="@/assets/img/specification/specification-icon-5.svg"
                alt="Icon"
              />
            </div>
            <div class="featues-info">
              <span>Mileage </span>
              <h6>{{ car?.mileage || "-" }}</h6>
            </div>
          </div>
          <div
            class="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6"
          >
            <div class="feature-img">
              <img
                src="@/assets/img/specification/specification-icon-6.svg"
                alt="Icon"
              />
            </div>
            <div class="featues-info">
              <span>Drivetrain </span>
              <h6>{{ car?.drivetrain || "-" }}</h6>
            </div>
          </div>
          <div
            class="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6"
          >
            <div class="feature-img">
              <img
                src="@/assets/img/specification/specification-icon-7.svg"
                alt="Icon"
              />
            </div>
            <div class="featues-info">
              <span>Year</span>
              <h6>{{ car?.year || "-" }}</h6>
            </div>
          </div>
          <div
            class="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6"
          >
            <div class="feature-img">
              <img
                src="@/assets/img/specification/specification-icon-8.svg"
                alt="Icon"
              />
            </div>
            <div class="featues-info">
              <span>AC </span>
              <h6>{{ car?.ac ? "Yes" : "No" }}</h6>
            </div>
          </div>
          <div
            class="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6"
          >
            <div class="feature-img">
              <img
                src="@/assets/img/specification/specification-icon-9.svg"
                alt="Icon"
              />
            </div>
            <div class="featues-info">
              <span>VIN </span>
              <h6>{{ car?.vin || "-" }}</h6>
            </div>
          </div>
          <div
            class="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6"
          >
            <div class="feature-img">
              <img
                src="@/assets/img/specification/specification-icon-10.svg"
                alt="Icon"
              />
            </div>
            <div class="featues-info">
              <span>Door </span>
              <h6>{{ car?.doors || "-" }}</h6>
            </div>
          </div>
          <div
            class="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6"
          >
            <div class="feature-img">
              <img
                src="@/assets/img/specification/specification-icon-11.svg"
                alt="Icon"
              />
            </div>
            <div class="featues-info">
              <span>Brake </span>
              <h6>{{ car?.brake || "-" }}</h6>
            </div>
          </div>
          <div
            class="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6"
          >
            <div class="feature-img">
              <img
                src="@/assets/img/specification/specification-icon-12.svg"
                alt="Icon"
              />
            </div>
            <div class="featues-info">
              <span>Engine (Hp) </span>
              <h6>{{ car?.engine_hp || "-" }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    car: { type: Object, required: false },
  },
};
</script>
