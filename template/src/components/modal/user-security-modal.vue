<template>
  <!-- Change Password Modal -->
  <div
    class="modal new-modal fade"
    id="change_password"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Change Password</h4>
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="javascript:;">
            <div class="row">
              <div class="col-md-12">
                <div class="modal-form-group">
                  <label>Old Password <span class="text-danger">*</span></label>
                  <div class="pass-group">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control pass-input-three"
                      placeholder="............."
                    />
                    <span @click="toggleShow" class="toggle-password-three">
                      <i
                        :class="{
                          'fas fa-eye': showPassword,
                          'fas fa-eye-slash': !showPassword,
                        }"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="modal-form-group">
                  <label>New Password <span class="text-danger">*</span></label>
                  <div class="pass-group">
                    <input
                      :type="showPassword1 ? 'text' : 'password'"
                      class="form-control pass-input-four"
                      placeholder="............."
                    />
                    <span @click="toggleShow1" class="toggle-password-four">
                      <i
                        :class="{
                          'fas fa-eye': showPassword1,
                          'fas fa-eye-slash': !showPassword1,
                        }"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="modal-form-group">
                  <label>Confirm Password <span class="text-danger">*</span></label>
                  <div class="pass-group">
                    <input
                      :type="showPassword2 ? 'text' : 'password'"
                      class="form-control pass-input-five"
                      placeholder="............."
                    />
                    <span @click="toggleShow2" class="toggle-password-five">
                      <i
                        :class="{
                          'fas fa-eye': showPassword2,
                          'fas fa-eye-slash': !showPassword2,
                        }"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-btn modal-btn-sm">
              <button type="submit" class="btn btn-secondary">Cancel</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Change Password Modal -->

  <!-- Change Phone Number Modal -->
  <div
    class="modal new-modal multi-step fade"
    id="change_phone_number"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Change Phone Number</h4>
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="javascript:;">
            <div class="modal-form-group">
              <label>Current Phone Number <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="modal-form-group">
              <label>New Phone Number <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="modal-form-group">
              <p>
                <i class="feather-alert-circle"></i> New Phone Number Only Updated Once
                You Verified
              </p>
            </div>
          </form>
          <div class="modal-btn modal-btn-sm">
            <a
              href="javascript:void(0);"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </a>
            <a
              href="javascript:void(0);"
              class="btn btn-primary"
              data-bs-target="#otp_verification"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              Change Number
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Change Phone Number Modal -->

  <!-- OTP Verification Modal -->
  <div
    class="modal new-modal multi-step fade"
    id="otp_verification"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header justify-content-center">
          <h4 class="modal-title">OTP Verification</h4>
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="otp-number">
            <p>Enter OTP Send to your Mobile number <span>+1 454445 45544</span></p>
          </div>
          <form
            method="get"
            class="digit-group login-form-control"
            data-group-name="digits"
            data-autosubmit="false"
            autocomplete="off"
            action="#"
          >
            <div class="otp-box">
              <input
                type="text"
                id="digit-1"
                name="digit-1"
                data-next="digit-2"
                maxlength="1"
              />
              <input
                type="text"
                id="digit-2"
                name="digit-2"
                data-next="digit-3"
                data-previous="digit-1"
                maxlength="1"
              />
              <input
                type="text"
                id="digit-3"
                name="digit-3"
                data-next="digit-4"
                data-previous="digit-2"
                maxlength="1"
              />
              <input
                type="text"
                id="digit-4"
                name="digit-4"
                data-next="digit-5"
                data-previous="digit-3"
                maxlength="1"
              />
            </div>
            <div class="otp-resend">
              <a href="javascript:void(0);">Resend Again</a>
              <p>Remaining 00:30s</p>
            </div>
          </form>
          <div class="modal-btn modal-btn-group">
            <div class="row">
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  class="btn btn-secondary w-100"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
              </div>
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  class="btn btn-primary w-100"
                  data-bs-dismiss="modal"
                  data-bs-target="#verification_success"
                  data-bs-toggle="modal"
                >
                  Verify
                </a>
              </div>
            </div>
          </div>
          <div class="verified-box">
            <p>
              <i class="feather-check"></i> Your Phone Number has been Successfully
              Verified
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /OTP Verification Modal -->

  <!-- Verification Success Modal -->
  <div
    class="modal new-modal verification-success-modal fade"
    id="verification_success"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="order-success-info">
            <span class="order-success-icon">
              <img src="@/assets/img/icons/check-icon.svg" alt="Icon" />
            </span>
            <h4>Successful</h4>
            <p>You Phone number has been successfully Verified.</p>
            <div class="modal-btn">
              <router-link to="/user/user-security" class="btn btn-secondary">
                Back to Settings <i class="feather-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Verification Success Modal -->

  <!-- Change Email Modal -->
  <div
    class="modal new-modal multi-step fade"
    id="change_email"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Change Email Address</h4>
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="javascript:;">
            <div class="modal-form-group">
              <label>Current Email Address <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="modal-form-group">
              <label>New Email Address <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="modal-form-group">
              <p>
                <i class="feather-alert-circle"></i> New Email Address Only Updated Once
                You Verified
              </p>
            </div>
          </form>
          <div class="modal-btn modal-btn-sm">
            <a
              href="javascript:void(0);"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </a>
            <a
              href="javascript:void(0);"
              class="btn btn-primary"
              data-bs-target="#email_verification"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              Change Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Change Email Modal -->

  <!-- Email Verification Modal -->
  <div
    class="modal new-modal multi-step fade"
    id="email_verification"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header justify-content-center">
          <h4 class="modal-title">Email Verification</h4>
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="otp-number">
            <p>
              Please click the verification link send to your email address
              <span>Triddse3w@example.com</span>
            </p>
          </div>
          <div class="otp-resend">
            <a href="javascript:void(0);">Resend Again</a>
          </div>
          <div class="modal-btn">
            <div class="row">
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  class="btn btn-secondary w-100"
                  data-bs-dismiss="modal"
                >
                  Close
                </a>
              </div>
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  class="btn btn-primary w-100"
                  data-bs-dismiss="modal"
                  data-bs-target="#email_verification_success"
                  data-bs-toggle="modal"
                >
                  Verify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Email Verification Modal -->

  <!-- Email Verification Success Modal -->
  <div
    class="modal new-modal verification-success-modal fade"
    id="email_verification_success"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="order-success-info">
            <span class="order-success-icon">
              <img src="@/assets/img/icons/check-icon.svg" alt="Icon" />
            </span>
            <h4>Successful</h4>
            <p>You Email has been successfully Verified.</p>
            <div class="modal-btn">
              <router-link to="/user/user-security" class="btn btn-secondary">
                Back to Settings <i class="feather-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Email Verification Success Modal -->

  <!-- Deactive Account Modal -->
  <div
    class="modal new-modal fade"
    id="deactive_account"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Deactivate Account</h4>
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="deactive-content">
            <p>
              Are you sureyou want to delete This Account? To delete your account, Type
              your password.
            </p>
          </div>
          <form action="javascript:;">
            <div class="modal-form-group">
              <label>Password <span class="text-danger">*</span></label>
              <div class="pass-group">
                <input
                  :type="showPassword3 ? 'text' : 'password'"
                  class="form-control pass-input-six"
                  placeholder="............."
                />
                <span @click="toggleShow3" class="toggle-password-six">
                  <i
                    :class="{
                      'fas fa-eye': showPassword3,
                      'fas fa-eye-slash': !showPassword3,
                    }"
                  ></i>
                </span>
              </div>
            </div>
            <div class="modal-btn modal-btn-sm">
              <button type="submit" class="btn btn-secondary">Cancel</button>
              <button type="submit" class="btn btn-primary">Delete Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Deactive Account Modal -->

  <!-- Delete Modal -->
  <div
    class="modal new-modal fade"
    id="delete_two_factor"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="delete-action">
            <div class="delete-header">
              <h4>Delete Two Factor</h4>
              <p>Are you sure want to delete?</p>
            </div>
            <div class="modal-btn">
              <div class="row">
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    class="btn btn-secondary w-100"
                  >
                    Delete
                  </a>
                </div>
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    class="btn btn-primary w-100"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->

  <!-- Delete Modal -->
  <div
    class="modal new-modal fade"
    id="delete_account"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="delete-action">
            <div class="delete-header">
              <h4>Delete Account</h4>
              <p>Are you sure want to delete?</p>
            </div>
            <div class="modal-btn">
              <div class="row">
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    class="btn btn-secondary w-100"
                  >
                    Delete
                  </a>
                </div>
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    class="btn btn-primary w-100"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
      showPassword1: false,
      showPassword2: false,
      showPassword3: false,
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow1() {
      this.showPassword1 = !this.showPassword1;
    },
    toggleShow2() {
      this.showPassword2 = !this.showPassword2;
    },
    toggleShow3() {
      this.showPassword3 = !this.showPassword3;
    },
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
    buttonLabe2() {
      return this.showPassword1 ? "Hide" : "Show";
    },
    buttonLabe3() {
      return this.showPassword2 ? "Hide" : "Show";
    },
    buttonLabe4() {
      return this.showPassword4 ? "Hide" : "Show";
    },
  },
};
</script>
