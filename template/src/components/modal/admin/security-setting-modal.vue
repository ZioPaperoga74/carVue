<template>
  <!-- Change-password -->
  <div class="modal fade" id="change_password">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Change Password</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label"
              >Current Password <span class="text-danger">*</span></label
            >
            <div class="pass-group">
              <input type="password" class="pass-inputs form-control" />
              <span class="ti toggle-passwords ti-eye-off"></span>
            </div>
          </div>
          <div class="input-block mb-3">
            <div class="mb-3">
              <label class="form-label"
                >New Password <span class="text-danger">*</span></label
              >
              <div class="pass-group" id="passwordInput">
                <input type="password" class="form-control pass-input" />
                <span class="ti toggle-password ti-eye-off"></span>
              </div>
            </div>
            <div class="password-strength d-flex" id="passwordStrength">
              <span id="poor"></span>
              <span id="weak"></span>
              <span id="strong"></span>
              <span id="heavy"></span>
            </div>
            <div id="passwordInfo" class="mb-2"></div>
            <p class="fs-12">
              Use 8 or more characters with a mix of letters, numbers & symbols.
            </p>
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Confirm Password <span class="text-danger">*</span></label
            >
            <div class="pass-group">
              <input type="password" class="pass-inputa form-control" />
              <span class="ti toggle-passworda ti-eye-off"></span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/admin-template/account-settings/security-setting"
              class="btn btn-primary"
              >Save Changes</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Change-password -->

  <!-- Change-phone-number -->
  <div class="modal fade" id="change_phonenumber">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Change Phone Number</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label"
              >Current Phone Number<span class="text-danger">*</span></label
            >
            <div>
              <input type="password" class="form-control" id="phone" />
            </div>
          </div>
          <div class="mb-3">
            <div class="mb-3">
              <label class="form-label"
                >New Phone Number <span class="text-danger">*</span></label
              >
              <div>
                <input type="password" class="form-control" id="phone2" />
              </div>
            </div>
            <p class="d-flex align-items-center">
              <i class="ti ti-info-circle me-1"></i>New phone number only updated once you
              verified
            </p>
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Current Password <span class="text-danger">*</span></label
            >
            <div class="pass-group">
              <input type="password" class="pass-inputa form-control" />
              <span class="ti toggle-passworda ti-eye-off"></span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/admin-template/account-settings/security-setting"
              class="btn btn-primary"
              >Save Changes</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Change-phone-number -->

  <!-- Change-email -->
  <div class="modal fade" id="change_email">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Change Email Address</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label"
              >Current Email Address <span class="text-danger">*</span></label
            >
            <div>
              <input type="password" class="form-control" />
            </div>
          </div>
          <div class="mb-3">
            <div class="mb-3">
              <label class="form-label"
                >New Email Address <span class="text-danger">*</span></label
              >
              <div>
                <input type="password" class="form-control" />
              </div>
            </div>
            <p class="d-flex align-items-center">
              <i class="ti ti-info-circle me-1"></i>New email address only updated once
              you verified
            </p>
          </div>
          <div class="mb-3">
            <label class="form-label"
              >Current Password <span class="text-danger">*</span></label
            >
            <div class="pass-group">
              <input type="password" class="pass-inputa form-control" />
              <span class="ti toggle-passworda ti-eye-off"></span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/admin-template/account-settings/security-setting"
              class="btn btn-primary"
              >Save Changes</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Change-email -->

  <!-- Delete Account -->
  <div class="modal fade" id="delete_account">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Delete Account</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <p class="text-gray-9 fw-medium mb-0">Why Are You Deleting Your Account?</p>
            <span class="fs-13"
              >We're sorry to see you go! To help us improve, please let us know your
              reason for deleting your account</span
            >
          </div>
          <label class="d-flex align-items-center mb-3 form-check-label">
            <input class="form-check-input me-2" type="radio" name="flexRadioDefault" />
            <div>
              <p class="text-gray-9 fw-medium mb-0">No longer using the service</p>
              <span class="fs-13"
                >I no longer need this service and won’t be using it in the future.</span
              >
            </div>
          </label>
          <label class="d-flex align-items-center mb-3 form-check-label">
            <input class="form-check-input me-2" type="radio" name="flexRadioDefault" />
            <div>
              <p class="text-gray-9 fw-medium mb-0">Privacy concerns</p>
              <span class="fs-13"
                >I am concerned about how my data is handled and want to remove</span
              >
            </div>
          </label>
          <label class="d-flex align-items-center mb-3 form-check-label">
            <input class="form-check-input me-2" type="radio" name="flexRadioDefault" />
            <div>
              <p class="text-gray-9 fw-medium mb-0">Too many notifications/emails</p>
              <span class="fs-13"
                >I’m overwhelmed by the volume of notifications or emails</span
              >
            </div>
          </label>
          <label class="d-flex align-items-center mb-3 form-check-label">
            <input class="form-check-input me-2" type="radio" name="flexRadioDefault" />
            <div>
              <p class="text-gray-9 fw-medium mb-0">Poor user experience</p>
              <span class="fs-13"
                >I’ve had difficulty using the platform, and it didn’t meet my
                expectations</span
              >
            </div>
          </label>
          <label class="d-flex align-items-center mb-3 form-check-label">
            <input
              class="form-check-input mt-0 me-2"
              type="radio"
              name="flexRadioDefault"
            />
            <div>
              <p class="text-gray-9 fw-medium mb-0">Other (Please specify)</p>
            </div>
          </label>
          <div class="mb-0">
            <label class="form-label"
              >Reason<span class="text-danger ms-1">*</span></label
            >
            <textarea class="form-control" rows="3"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a href="javascript:void(0);" class="btn btn-primary">Confirm & Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Account -->
</template>
