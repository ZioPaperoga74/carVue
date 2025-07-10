<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <div class="page-wrapper">
    <div class="content me-0 pb-0">
      <!-- Breadcrumb -->
      <div
        class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3"
      >
        <div class="my-auto mb-2">
          <h2 class="mb-1">Settings</h2>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin-template/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Settings</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <div class="row">
        <div class="col-xl-3">
          <!-- inner sidebar -->
          <adminsettings-sidebar></adminsettings-sidebar>
          <!-- /inner sidebar -->
        </div>
        <div class="col-xl-9">
          <div class="card">
            <div class="card-header">
              <h5>System Settings</h5>
            </div>
            <div class="card-body pb-0">
              <div class="d-flex align-items-center justify-content-between">
                <h6 class="mb-3">Email Settings</h6>
                <a
                  href="javascript:void(0);"
                  class="btn btn-primary mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#sendgrid"
                  ><i class="ti ti-send me-1"></i>Send Test Email</a
                >
              </div>
              <div class="row">
                <div class="col-md-6 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="border-bottom mb-3">
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <div class="d-flex align-items-center">
                            <span class="avatar avatar-lg bg-light me-2 p-2">
                              <img
                                src="@/assets/admin/img/settings/phpmail.svg"
                                class="img-fluid"
                                alt="img"
                              />
                            </span>
                            <p class="text-gray-9">PHP Mailer</p>
                          </div>
                          <span class="badge badge-dark-transparent text-gray-9">
                            <i class="ti ti-point-filled text-success"></i>
                            Connected
                          </span>
                        </div>
                        <p class="fs-13 mb-3">
                          Used to send emails safely and easily via PHP code from a web
                          server.
                        </p>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <a
                          href="javascript:coid(0);"
                          class="fw-medium text-gray-9 d-flex align-items-center mb-0"
                          data-bs-toggle="modal"
                          data-bs-target="#phpmailersettings"
                        >
                          <i class="ti ti-settings me-1"></i>
                          Configure
                        </a>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="border-bottom mb-3">
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <div class="d-flex align-items-center">
                            <span class="avatar avatar-lg bg-light me-2 p-2">
                              <img
                                src="@/assets/admin/img/settings/smtp.svg"
                                class="img-fluid"
                                alt="img"
                              />
                            </span>
                            <p class="text-gray-9">SMTP</p>
                          </div>
                          <span class="badge badge-dark-transparent text-gray-9">
                            <i class="ti ti-point-filled text-success"></i>
                            Connected
                          </span>
                        </div>
                        <p class="fs-13 mb-3">
                          SMTP is used to send, relay or forward messages from a mail
                          client.
                        </p>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <a
                          href="javascript:coid(0);"
                          class="fw-medium text-gray-9 d-flex align-items-center mb-0"
                          data-bs-toggle="modal"
                          data-bs-target="#smtpsettings"
                        >
                          <i class="ti ti-settings me-1"></i>
                          Configure
                        </a>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="border-bottom mb-3">
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <div class="d-flex align-items-center">
                            <span class="avatar avatar-lg bg-light me-2 p-2">
                              <img
                                src="@/assets/admin/img/settings/sendgrid.svg"
                                class="img-fluid"
                                alt="img"
                              />
                            </span>
                            <p class="text-gray-9">Send Grid</p>
                          </div>
                          <span class="badge badge-dark-transparent text-gray-9">
                            <i class="ti ti-point-filled text-success"></i>
                            Connected
                          </span>
                        </div>
                        <p class="fs-13 mb-3">
                          Cloud-based email marketing tool that assists marketers and
                          developers .
                        </p>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <a
                          href="javascript:coid(0);"
                          class="fw-medium text-gray-9 d-flex align-items-center mb-0"
                        >
                          <i class="ti ti-settings me-1"></i>
                          Configure
                        </a>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer d-sm-flex align-items-center justify-content-between bg-white p-3">
      <p class="mb-0">
        <a href="javascript:void(0);">Privacy Policy</a>
        <a href="javascript:void(0);" class="ms-4">Terms of Use</a>
      </p>
      <p>
        &copy; 2025 Dreamsrent, Made with <span class="text-danger">❤</span> by
        <a href="javascript:void(0);" class="text-secondary">Dreams</a>
      </p>
    </div>
  </div>
  <email-settings-modal></email-settings-modal>
</template>
