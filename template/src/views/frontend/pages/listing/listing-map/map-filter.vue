<template>
  <div class="section-search page-search">
    <div class="container">
      <div class="search-box-banner">
        <form @submit.prevent="submitForm">
          <ul class="align-items-center">
            <li class="column-group-main">
              <div class="input-block">
                <label>Pickup Location</label>
                <div class="group-img">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter City, Airport, or Address"
                  />
                  <span><i class="feather-map-pin"></i></span>
                </div>
              </div>
            </li>
            <li class="column-group-main">
              <div class="input-block">
                <label>Pickup Date</label>
              </div>
              <div class="input-block-wrapp">
                <div class="input-block date-widget">
                  <div class="group-img">
                    <datepicker
                      v-model="startdate"
                      class="form-control datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span><i class="feather-calendar"></i></span>
                  </div>
                </div>
                <div class="input-block time-widge">
                  <div class="group-img">
                    <a-time-picker
                      class="form-control timepicker"
                      placeholder="  11:00 AM"
                      use12-hours
                      format="h:mm a"
                      type="text"
                    />
                    <span><i class="feather-clock"></i></span>
                  </div>
                </div>
              </div>
            </li>
            <li class="column-group-main">
              <div class="input-block">
                <label>Return Date</label>
              </div>
              <div class="input-block-wrapp">
                <div class="input-block date-widge">
                  <div class="group-img">
                    <datepicker
                      v-model="startdateOne"
                      class="form-control datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span><i class="feather-calendar"></i></span>
                  </div>
                </div>
                <div class="input-block time-widge">
                  <div class="group-img">
                    <a-time-picker
                      class="form-control timepicker"
                      placeholder="  11:00 AM"
                      use12-hours
                      format="h:mm a"
                      type="text"
                    />
                    <span><i class="feather-clock"></i></span>
                  </div>
                </div>
              </div>
            </li>
            <li class="column-group-last">
              <div class="input-block">
                <div class="search-btn">
                  <button class="btn search-button" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>Search
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/listing/listing-grid");
    },
  },
};
</script>
