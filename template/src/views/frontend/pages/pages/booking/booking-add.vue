<template>
  <div class="booking-info-body">
    <ul class="adons-lists">
      <li>
        <div class="adons-types">
          <div class="d-flex align-items-center adon-name-info">
            <span class="adon-icon"><i class="bx bx-map-pin"></i></span>
            <div class="adon-name">
              <h6>GPS Navigation Systems</h6>
              <a
                href="javascript:void(0);"
                class="d-inline-flex align-items-center adon-info-btn"
                @click="toggleMoreInfo"
              >
                <i class="bx bx-info-circle me-2"></i>More information
                <i class="bx bx-chevron-down ms-2 arrow-icon"></i>
              </a>
            </div>
          </div>
          <span class="adon-price">$25</span>
          <a href="javascript:;" class="btn btn-secondary remove-adon-btn"
            ><i class="bx bx-minus-circle me-2"></i>Remove</a
          >
        </div>
        <div class="more-adon-info" v-show="showMoreInfo">
          <p>
            Provide GPS navigation devices as add-ons for customers who need assistance
            with directions and navigation during their rental period.
          </p>
        </div>
      </li>
      <li>
        <div class="adons-types">
          <div class="d-flex align-items-center adon-name-info">
            <span class="adon-icon"><i class="bx bx-wifi"></i></span>
            <div class="adon-name">
              <h6>Wi-Fi Hotspot</h6>
              <a
                href="javascript:void(0);"
                class="d-inline-flex align-items-center adon-info-btn"
                @click="toggleMoreInfoOne"
              >
                <i class="bx bx-info-circle me-2"></i>
                More information
                <i class="bx bx-chevron-down ms-2 arrow-icon"></i>
              </a>
            </div>
          </div>
          <span class="adon-price">$25</span>
          <a href="javascript:;" class="btn btn-secondary remove-adon-btn"
            ><i class="bx bx-minus-circle me-2"></i>Remove</a
          >
        </div>
        <div class="more-adon-info" v-show="showMoreInfoOne">
          <p>
            Provide GPS navigation devices as add-ons for customers who need assistance
            with directions and navigation during their rental period.
          </p>
        </div>
      </li>
      <li>
        <div class="adons-types">
          <div class="d-flex align-items-center adon-name-info">
            <span class="adon-icon"><i class="bx bx-wifi"></i></span>
            <div class="adon-name">
              <h6>Child Safety Seats</h6>
              <a
                href="javascript:void(0);"
                class="d-inline-flex align-items-center adon-info-btn"
                @click="toggleMoreInfoTwo"
              >
                <i class="bx bx-info-circle me-2"></i>
                More information
                <i class="bx bx-chevron-down ms-2 arrow-icon"></i>
              </a>
            </div>
          </div>
          <span class="adon-price">$50</span>
          <a href="javascript:;" class="btn btn-secondary remove-adon-btn"
            ><i class="bx bx-minus-circle me-2"></i>Remove</a
          >
        </div>
        <div class="more-adon-info" v-show="showMoreInfoTwo">
          <p>
            Provide GPS navigation devices as add-ons for customers who need assistance
            with directions and navigation during their rental period.
          </p>
        </div>
      </li>
      <li>
        <div class="adons-types">
          <div class="d-flex align-items-center adon-name-info">
            <span class="adon-icon"><i class="bx bxs-droplet"></i></span>
            <div class="adon-name">
              <h6>Fuel Options</h6>
              <a
                href="javascript:void(0);"
                class="d-inline-flex align-items-center adon-info-btn"
                @click="toggleMoreInfoThree"
              >
                <i class="bx bx-info-circle me-2"></i>
                More information
                <i class="bx bx-chevron-down ms-2 arrow-icon"></i>
              </a>
            </div>
          </div>
          <span class="adon-price">$75</span>
          <a href="javascript:;" class="btn add-addon-btn"
            ><i class="bx bx-plus-circle me-2"></i>Add</a
          >
        </div>
        <div class="more-adon-info" v-show="showMoreInfoThree">
          <p>
            Provide GPS navigation devices as add-ons for customers who need assistance
            with directions and navigation during their rental period.
          </p>
        </div>
      </li>
      <li class="view-more-adons">
        <div class="more-adons" v-if="isExpanded">
          <ul>
            <li>
              <div class="adons-types">
                <div class="d-flex align-items-center adon-name-info">
                  <span class="adon-icon"><i class="bx bx-collection"></i></span>
                  <div class="adon-name">
                    <h6>Toll Passes</h6>
                    <a
                      href="javascript:void(0);"
                      class="d-inline-flex align-items-center adon-info-btn"
                      @click="toggleMoreInfoFour"
                    >
                      <i class="bx bx-info-circle me-2"></i>
                      More information
                      <i class="bx bx-chevron-down ms-2 arrow-icon"></i>
                    </a>
                  </div>
                </div>
                <span class="adon-price">$125</span>
                <a href="javascript:;" class="btn add-addon-btn"
                  ><i class="bx bx-plus-circle me-2"></i>Add</a
                >
              </div>
              <div class="more-adon-info" v-show="showMoreInfoFour">
                <p>
                  Provide GPS navigation devices as add-ons for customers who need
                  assistance with directions and navigation during their rental period.
                </p>
              </div>
            </li>
            <li>
              <div class="adons-types">
                <div class="d-flex align-items-center adon-name-info">
                  <span class="adon-icon"><i class="bx bx-broadcast"></i></span>
                  <div class="adon-name">
                    <h6>Roadside Assistance</h6>
                    <a
                      href="javascript:void(0);"
                      class="d-inline-flex align-items-center adon-info-btn"
                      @click="toggleMoreInfoFive"
                    >
                      <i class="bx bx-info-circle me-2"></i>
                      More information
                      <i class="bx bx-chevron-down ms-2 arrow-icon"></i>
                    </a>
                  </div>
                </div>
                <span class="adon-price">$60</span>
                <a href="javascript:;" class="btn add-addon-btn"
                  ><i class="bx bx-plus-circle me-2"></i>Add</a
                >
              </div>
              <div class="more-adon-info" v-show="showMoreInfoFive">
                <p>
                  Provide GPS navigation devices as add-ons for customers who need
                  assistance with directions and navigation during their rental period.
                </p>
              </div>
            </li>
            <li>
              <div class="adons-types">
                <div class="d-flex align-items-center adon-name-info">
                  <span class="adon-icon"><i class="bx bx-radio"></i></span>
                  <div class="adon-name">
                    <h6>Satellite Radio</h6>
                    <a
                      href="javascript:void(0);"
                      class="d-inline-flex align-items-center adon-info-btn"
                      @click="toggleMoreInfoSix"
                    >
                      <i class="bx bx-info-circle me-2"></i>
                      More information
                      <i class="bx bx-chevron-down ms-2 arrow-icon"></i>
                    </a>
                  </div>
                </div>
                <span class="adon-price">$42</span>
                <a href="javascript:;" class="btn add-addon-btn"
                  ><i class="bx bx-plus-circle me-2"></i>Add</a
                >
              </div>
              <div class="more-adon-info" v-show="showMoreInfoSix">
                <p>
                  Provide GPS navigation devices as add-ons for customers who need
                  assistance with directions and navigation during their rental period.
                </p>
              </div>
            </li>
            <li>
              <div class="adons-types">
                <div class="d-flex align-items-center adon-name-info">
                  <span class="adon-icon"><i class="bx bx-radar"></i></span>
                  <div class="adon-name">
                    <h6>Additional Accessories</h6>
                    <a
                      href="javascript:void(0);"
                      class="d-inline-flex align-items-center adon-info-btn"
                      @click="toggleMoreInfoSeven"
                    >
                      <i class="bx bx-info-circle me-2"></i>
                      More information
                      <i class="bx bx-chevron-down ms-2 arrow-icon"></i>
                    </a>
                  </div>
                </div>
                <span class="adon-price">$30</span>
                <a href="javascript:;" class="btn add-addon-btn"
                  ><i class="bx bx-plus-circle me-2"></i>Add</a
                >
              </div>
              <div class="more-adon-info" v-show="showMoreInfoSeven">
                <p>
                  Provide GPS navigation devices as add-ons for customers who need
                  assistance with directions and navigation during their rental period.
                </p>
              </div>
            </li>
            <li>
              <div class="adons-types">
                <div class="d-flex align-items-center adon-name-info">
                  <span class="adon-icon"><i class="bx bx-rename"></i></span>
                  <div class="adon-name">
                    <h6>Express Check-in/Check-out</h6>
                    <a
                      href="javascript:void(0);"
                      class="d-inline-flex align-items-center adon-info-btn"
                      @click="toggleMoreInfoEight"
                    >
                      <i class="bx bx-info-circle me-2"></i>
                      More information
                      <i class="bx bx-chevron-down ms-2 arrow-icon"></i>
                    </a>
                  </div>
                </div>
                <span class="adon-price">$54</span>
                <a href="javascript:;" class="btn add-addon-btn"
                  ><i class="bx bx-plus-circle me-2"></i>Add</a
                >
              </div>
              <div class="more-adon-info" v-show="showMoreInfoEight">
                <p>
                  Provide GPS navigation devices as add-ons for customers who need
                  assistance with directions and navigation during their rental period.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <a href="javascript:void(0);" class="view-adon-btn" @click="toggleAdons">
          <i class="bx bx me-2"></i
          >{{ !isExpanded ? "View More Add-Ons" : "Less Add-Ons" }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMoreInfo: false,
      showMoreInfoOne: false,
      showMoreInfoTwo: false,
      showMoreInfoThree: false,
      showMoreInfoFour: false,
      showMoreInfoFive: false,
      showMoreInfoSix: false,
      showMoreInfoSeven: false,
      showMoreInfoEight: false,
      // buttonLabel: "View More Add-Ons",
      isExpanded: false,
    };
  },

  methods: {
    toggleAdons() {
      this.isExpanded = !this.isExpanded;
    },
    toggleMoreInfo() {
      this.showMoreInfo = !this.showMoreInfo;
    },
    toggleMoreInfoOne() {
      this.showMoreInfoOne = !this.showMoreInfoOne;
    },
    toggleMoreInfoTwo() {
      this.showMoreInfoTwo = !this.showMoreInfoTwo;
    },
    toggleMoreInfoThree() {
      this.showMoreInfoThree = !this.showMoreInfoThree;
    },
    toggleMoreInfoFour() {
      this.showMoreInfoFour = !this.showMoreInfoFour;
    },
    toggleMoreInfoFive() {
      this.showMoreInfoFive = !this.showMoreInfoFive;
    },
    toggleMoreInfoSix() {
      this.showMoreInfoSix = !this.showMoreInfoSix;
    },
    toggleMoreInfoSeven() {
      this.showMoreInfoSeven = !this.showMoreInfoSeven;
    },
    toggleMoreInfoEight() {
      this.showMoreInfoEight = !this.showMoreInfoEight;
    },
  },
};
</script>
