<template>
  <admin-header></admin-header>
  <admin-sidebar></admin-sidebar>
  <div class="page-wrapper">
    <div class="content me-4 pb-0">
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
              <div class="payment-section">
                <h6 class="mb-3">Payment Methods</h6>
                <div class="row">
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/paypal-name.svg"
                                alt="image"
                            /></span>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add_paypal"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            PayPal is the faster, safer way to send and receive money
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-success me-1"></i
                            >Connected</span
                          >
                          <div class="form-check form-check-sm form-switch p-0 m-0">
                            <input
                              class="form-check-input form-label m-0"
                              type="checkbox"
                              role="switch"
                              checked
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/stripe-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            APIs to accept cards, manage subscriptions, send money.
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-dark me-1"></i>Not
                            Connected</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/brain-tree.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            Braintree offers more fraud protection and security features.
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-dark me-1"></i>Not
                            Connected</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/Razorpay-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            Razorpay is an India's all in one payment solution.
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-dark me-1"></i>Not
                            Connected</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/2checkout-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            Works stably and reliably and features are valuable
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-success me-1"></i
                            >Connected</span
                          >
                          <div class="form-check form-check-sm form-switch p-0 m-0">
                            <input
                              class="form-check-input form-label m-0"
                              type="checkbox"
                              role="switch"
                              checked
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/skrill-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            Allows send international money transfers and payments quickly
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-dark me-1"></i>Not
                            Connected</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/payu-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            Provide payment solution to individuals to make payments
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-dark me-1"></i>Not
                            Connected</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/apple-pay-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            Replaces your physical cards and cash with private and secure
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-dark me-1"></i>Not
                            Connected</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/payonner-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            Fast, Low-Cost Solution for your International Business.
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-dark me-1"></i>Not
                            Connected</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/mercad-pago-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            Online payment platform that enables to send & receive money
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-dark me-1"></i>Not
                            Connected</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/payment-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            Paytm is a leading Indian digital payments & financial
                            services platform.
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-success me-1"></i
                            >Connected</span
                          >
                          <div class="form-check form-check-sm form-switch p-0 m-0">
                            <input
                              class="form-check-input form-label m-0"
                              type="checkbox"
                              role="switch"
                              checked
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/midtrans-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            Midtrans provides the maximum number of payment methods
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-dark me-1"></i>Not
                            Connected</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/pytorch-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            PyTorch, a network through which your customers transfer funds
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-success me-1"></i
                            >Connected</span
                          >
                          <div class="form-check form-check-sm form-switch p-0 m-0">
                            <input
                              class="form-check-input form-label m-0"
                              type="checkbox"
                              role="switch"
                              checked
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/bank-transfer-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            Direct transfer of funds from one bank account into another.
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-dark me-1"></i>Not
                            Connected</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div>
                          <div class="payment-content">
                            <span
                              ><img
                                src="@/assets/admin/img/icons/cash-delivery-icon.svg"
                                alt="image"
                            /></span>
                            <a href="javascript:void(0);"
                              ><i class="ti ti-settings"></i
                            ></a>
                          </div>
                          <p class="fs-13">
                            Indicating that goods must be paid for at the time of
                            delivery.
                          </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline d-inline-flex align-items-center text-gray-9"
                            ><i class="ti ti-point-filled text-dark me-1"></i>Not
                            Connected</span
                          >
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
  <payment-methods-modal></payment-methods-modal>
</template>
