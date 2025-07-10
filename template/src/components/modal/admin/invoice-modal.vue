<template>
  <div class="modal fade" id="link_reservation">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Link Reservation</h5>
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
          <!-- Custom Data Table -->
          <div class="custom-datatable-filter table-responsive">
            <table class="table datatable">
              <thead class="thead-light">
                <tr>
                  <th class="no-sort">ID</th>
                  <th>CAR</th>
                  <th>CUSTOMER</th>
                  <th>PICK UP DETAILS</th>
                  <th>DROP OFF DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <router-link
                      to="/reservation/reservation-details"
                      class="text-info d-block mb-1"
                      >#BR3466</router-link
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar me-2 flex-shrink-0"
                        ><img src="@/assets/admin/img/car/car-01.jpg" alt=""
                      /></a>
                      <div>
                        <h6 class="fs-14">
                          <a href="javascript:void(0);">Ford Endeavour</a>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-rounded me-2 flex-shrink-0"
                        ><img src="@/assets/admin/img/customer/customer-01.jpg" alt=""
                      /></a>
                      <div>
                        <h6 class="mb-1 fs-14">
                          <a href="javascript:void(0);">Reuben Keen</a>
                        </h6>
                        <span class="badge bg-secondary-transparent rounded-pill"
                          >Client</span
                        >
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="border rounded text-center flex-shrink-0 p-1 me-2">
                        <h5 class="mb-2 fs-16">12</h5>
                        <span
                          class="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9"
                          >Feb, 2025</span
                        >
                      </div>
                      <div>
                        <p class="text-gray-9 mb-0">Newyork</p>
                        <span class="fs-13">01:00 PM</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="border rounded text-center flex-shrink-0 p-1 me-2">
                        <h5 class="mb-2 fs-16">13</h5>
                        <span
                          class="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9"
                          >Feb, 2025</span
                        >
                      </div>
                      <div>
                        <p class="text-gray-9 mb-0">Newyork</p>
                        <span class="fs-13">01:00 PM</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <router-link
                      to="/reservation/reservation-details"
                      class="text-info d-block mb-1"
                      >#FR7321</router-link
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar me-2 flex-shrink-0"
                        ><img src="@/assets/admin/img/car/car-02.jpg" alt=""
                      /></a>
                      <div>
                        <h6 class="fs-14">
                          <a href="javascript:void(0);">Ferrari 458 MM</a>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-rounded me-2 flex-shrink-0"
                        ><img src="@/assets/admin/img/customer/customer-02.jpg" alt=""
                      /></a>
                      <div>
                        <h6 class="mb-1 fs-14">
                          <a href="javascript:void(0);">William Jones</a>
                        </h6>
                        <span class="badge bg-secondary-transparent rounded-pill"
                          >Company</span
                        >
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="border rounded text-center flex-shrink-0 p-1 me-2">
                        <h5 class="mb-2 fs-16">14</h5>
                        <span
                          class="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9"
                          >Feb, 2025</span
                        >
                      </div>
                      <div>
                        <p class="text-gray-9 mb-0">Los Angeles</p>
                        <span class="fs-13">01:00 PM</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="border rounded text-center flex-shrink-0 p-1 me-2">
                        <h5 class="mb-2 fs-16">16</h5>
                        <span
                          class="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9"
                          >Feb, 2025</span
                        >
                      </div>
                      <div>
                        <p class="text-gray-9 mb-0">Newyork</p>
                        <span class="fs-13">01:00 PM</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <router-link
                      to="/reservation/reservation-details"
                      class="text-info d-block mb-1"
                      >#FD8414</router-link
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar me-2 flex-shrink-0"
                        ><img src="@/assets/admin/img/car/car-03.jpg" alt=""
                      /></a>
                      <div>
                        <h6 class="fs-14">
                          <a href="javascript:void(0);">Ford Mustang </a>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-rounded me-2 flex-shrink-0"
                        ><img src="@/assets/admin/img/customer/customer-03.jpg" alt=""
                      /></a>
                      <div>
                        <h6 class="mb-1 fs-14">
                          <a href="javascript:void(0);">Leonard Jandreau</a>
                        </h6>
                        <span class="badge bg-secondary-transparent rounded-pill"
                          >Company</span
                        >
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="border rounded text-center flex-shrink-0 p-1 me-2">
                        <h5 class="mb-2 fs-16">19</h5>
                        <span
                          class="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9"
                          >Feb, 2025</span
                        >
                      </div>
                      <div>
                        <p class="text-gray-9 mb-0">Chicago</p>
                        <span class="fs-13">01:00 PM</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="border rounded text-center flex-shrink-0 p-1 me-2">
                        <h5 class="mb-2 fs-16">22</h5>
                        <span
                          class="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9"
                          >Feb, 2025</span
                        >
                      </div>
                      <div>
                        <p class="text-gray-9 mb-0">Newyork</p>
                        <span class="fs-13">01:00 PM</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Custom Data Table -->
        </div>
        <div class="modal-footer">
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a href="javascript:void(0);" class="btn btn-primary">Create New</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
