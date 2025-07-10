<template>
  <div class="page-wrapper">
    <div class="content me-4">
      <div class="mb-3">
        <router-link
          to="/admin-template/finance/invoices"
          class="d-inline-flex align-items-center fw-medium"
          ><i class="ti ti-arrow-narrow-left me-2"></i>Back to List</router-link
        >
      </div>
      <div class="filterbox mb-3 d-flex align-items-center invoice-title">
        <h4 class="me-3"><i class="ti ti-menu-2 me-2"></i>Edit Invoice</h4>
      </div>
      <div class="card mb-0">
        <div class="card-body">
          <div class="border-bottom mb-3">
            <div class="row">
              <div class="col-lg-6">
                <div class="me-lg-3">
                  <h5 class="mb-3">Invoice Details</h5>
                  <div class="row gx-3">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Invoice Number</label>
                        <input type="text" class="form-control" value="5432" readonly />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Car</label>
                        <vue-select
                          :options="TruckSele"
                          v-model="selected"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">From Date</label>
                        <div class="input-icon-end position-relative">
                          <a-date-picker
                            v-model="valueOne"
                            class="form-control"
                            placeholder="dd/mm/yyyy"
                          />
                          <span class="input-icon-addon">
                            <i class="ti ti-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Due Date</label>
                        <div class="input-icon-end position-relative">
                          <a-date-picker
                            v-model="valueTwo"
                            class="form-control"
                            placeholder="dd/mm/yyyy"
                          />
                          <span class="input-icon-addon">
                            <i class="ti ti-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Currency</label>
                        <vue-select
                          :options="CurreSele"
                          v-model="selectedTwo"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Status</label>
                        <vue-select
                          :options="PendSele"
                          v-model="selectedThree"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="ms-lg-3">
                  <h5 class="mb-3">Billing Details</h5>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label class="form-label">From</label>
                        <vue-select
                          :options="TruckSeleOne"
                          v-model="selectedFour"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                          <label class="form-label">To</label>
                          <a href="javascript:void(0);" class="text-info d-block mb-1"
                            >Add New</a
                          >
                        </div>
                        <vue-select
                          :options="TruckHartmann"
                          v-model="selectedFive"
                          placeholder="Select Customer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 class="mb-3">Rental Details</h5>
            <div class="table-responsive border border-gray br-10 mb-3">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th class="w-50">DESCRIPTION</th>
                    <th>QUANTITY</th>
                    <th>NET PRICE</th>
                    <th>TAX</th>
                    <th>TOTAL PRICE</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pe-0">
                      <div>
                        <input
                          type="text"
                          class="form-control"
                          value="Car Rental (Toyota Camry 2024)"
                        />
                      </div>
                    </td>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="5 Days" />
                      </div>
                    </td>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="50.00" />
                      </div>
                    </td>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="12.50" />
                      </div>
                    </td>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="262.50" />
                      </div>
                    </td>
                    <td>
                      <div>
                        <a href="" class="btn btn-icon btn-sm text-danger"
                          ><i class="ti ti-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="GPS Navigation" />
                      </div>
                    </td>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="1 Unit" />
                      </div>
                    </td>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="10.00" />
                      </div>
                    </td>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="1.50" />
                      </div>
                    </td>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="11.50" />
                      </div>
                    </td>
                    <td>
                      <div>
                        <a href="" class="btn btn-icon btn-sm text-danger"
                          ><i class="ti ti-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="pe-0">
                      <div>
                        <input
                          type="text"
                          class="form-control"
                          value="Additional Driver"
                        />
                      </div>
                    </td>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="1 Person" />
                      </div>
                    </td>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="15.00" />
                      </div>
                    </td>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="2.25" />
                      </div>
                    </td>
                    <td class="pe-0">
                      <div>
                        <input type="text" class="form-control" value="17.25" />
                      </div>
                    </td>
                    <td>
                      <div>
                        <a href="" class="btn btn-icon btn-sm text-danger"
                          ><i class="ti ti-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="d-flex align-items-center border-bottom pb-3 mb-3">
              <a
                href="javascript:void(0);"
                class="btn btn-secondary d-inline-flex align-items-center me-2"
                ><i class="ti ti-plus me-1"></i>Add More</a
              >
              <a
                href="javascript:void(0);"
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#link_reservation"
                >Link Reservation</a
              >
            </div>
            <div class="border-bottom mb-3">
              <div class="row">
                <div class="col-lg-9">
                  <div class="me-lg-4">
                    <h5 class="mb-3">Others</h5>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Payment Method</label>
                          <vue-select
                            :options="PaymentSele"
                            v-model="selectedSix"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="mb-3">
                          <label class="form-label"
                            >Terms & Conditions <span class="text-danger">*</span></label
                          >
                          <textarea class="form-control" rows="3">
The car must be returned in the same condition as rented. Additional charges may apply for damages, late returns, or excessive mileage.</textarea
                          >
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="mb-3">
                          <label class="form-label"
                            >Notes <span class="text-danger">*</span></label
                          >
                          <textarea class="form-control" rows="3">
All charges are final and include applicable taxes, fees, and additional costs incurred during the rental period.</textarea
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="card bg-light">
                    <div class="card-body">
                      <div class="border-bottom mb-3">
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <span>Subtotal</span>
                          <h6>$290.27</h6>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <span>Discount (0%)</span>
                          <h6 class="text-danger fs-14 fw-medium">$0.00</h6>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <span>TAX (0%)</span>
                          <h6>$30.30</h6>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <h4>Total Amount</h4>
                        <h4>$320.27</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <a href="javascript:void(0);" class="btn btn-light me-2">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary">Save & Send</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer-->
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
    <!-- /Footer-->
  </div>
  <invoice-modal></invoice-modal>
</template>
<script>
import { ref } from "vue";
const valueOne = ref(null);
const valueTwo = ref(null);
export default {
  data() {
    return {
      valueOne,
      valueTwo,
      selected: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      PaymentSele: [
        { label: "Select", value: "select" },
        { label: "Bank Transfer", value: "Bank Transfer" },
        { label: "Paypal", value: "paypal" },
      ],
      TruckSele: [
        { label: "Select", value: "select" },
        { label: "Ford Endeavour", value: "Ford Endeavour" },
        { label: "Ferrari 458 MM", value: "Ferrari 458 MM" },
        { label: "Ford Mustang", value: "Ford Mustang" },
        { label: "Toyota Tacoma 4", value: "Toyota Tacoma 4" },
        { label: "Chevrolet Truck", value: "Chevrolet Truck" },
      ],
      TruckHartmann: [
        { label: "Select Customer", value: "select" },
        { label: "Andrew Simons", value: "Andrew Simons" },
        { label: "David Steiger", value: "David Steiger" },
        { label: "Virginia Phu", value: "Virginia Phu" },
        { label: "Walter Hartmann", value: "Walter Hartmann" },
        { label: "Andrea Jermaine", value: "Andrea Jermaine" },
      ],
      CurreSele: [
        { label: "Select", value: "select" },
        { label: "Dollar", value: "Dollar" },
      ],
      PendSele: [
        { label: "Select", value: "select" },
        { label: "Paid", value: "Paid" },
        { label: "Pending", value: "Pending" },
        { label: "Overdue", value: "Overdue" },
        { label: "Unpaid", value: "Unpaid" },
      ],
      TruckSeleOne: [
        { label: "Dreams Rent", value: "Dreams Rent" },
        { label: "Ford Endeavour", value: "Ford Endeavour" },
        { label: "Ferrari 458 MM", value: "Ferrari 458 MM" },
        { label: "Ford Mustang", value: "Ford Mustang" },
        { label: "Toyota Tacoma 4", value: "Toyota Tacoma 4" },
        { label: "Chevrolet Truck", value: "Chevrolet Truck" },
      ],
    };
  },
};
</script>
