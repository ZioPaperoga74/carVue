<template>
  <!-- Add php mailer -->
  <div class="modal fade" id="phpmailersettings">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">PHP Mailer</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form action="#">
          <div class="modal-body pb-1">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >From Email Address <span class="text-danger">*</span></label
                  >
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Email Password <span class="text-danger">*</span></label
                  >
                  <input class="form-control" type="text" />
                </div>
              </div>

              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >From Email Name <span class="text-danger">*</span></label
                  >
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end">
              <button type="button" class="btn btn-outline-light border me-3">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add php mailer -->

  <!-- Add sendgrid -->
  <div class="modal fade" id="sendgrid">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Test Mail</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form action="#">
          <div class="modal-body pb-1">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Enter Email Address <span class="text-danger">*</span></label
                  >
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end">
              <button type="button" class="btn btn-outline-light border me-3">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add sendgrid -->

  <!-- Add sendgrid -->
  <div class="modal fade" id="smtpsettings">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">SMTP</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x fs-16"></i>
          </button>
        </div>
        <form action="#">
          <div class="modal-body pb-1">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >From Email Address <span class="text-danger">*</span></label
                  >
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Email Password <span class="text-danger">*</span></label
                  >
                  <input class="form-control" type="text" />
                </div>
              </div>

              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Email Host <span class="text-danger">*</span></label
                  >
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Port <span class="text-danger">*</span></label
                  >
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end">
              <button type="button" class="btn btn-outline-light border me-3">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add sendgrid -->
</template>
