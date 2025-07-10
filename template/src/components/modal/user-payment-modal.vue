<template>
  <!-- View Invoice Modal -->
  <div
    class="modal new-modal fade"
    id="view_invoice"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header border-0 m-0 p-0">
          <div class="invoice-btns">
            <a href="javascript:void(0)" class="btn me-2">
              <i class="feather-printer"></i> Print
            </a>
            <a href="javascript:void(0)" class="btn">
              <i class="feather-download"></i> Download Invoice
            </a>
          </div>
        </div>
        <div class="modal-body">
          <div class="invoice-details">
            <div class="invoice-items">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="invoice-logo">
                    <img src="@/assets/img/logo.svg" alt="logo" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="invoice-info-text">
                    <h4>Invoice</h4>
                    <p>Invoice Number : <span>In983248782</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="invoice-item-bills">
              <div class="row align-items-center">
                <div class="col-lg-4 col-md-12">
                  <div class="invoice-bill-info">
                    <h6>Billed to</h6>
                    <p>
                      Customer Name <br />
                      9087484288 <br />
                      Address line 1, <br />
                      Address line 2 <br />
                      Zip code ,City - Country
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="invoice-bill-info">
                    <h6>Invoice From</h6>
                    <p>
                      Company Name <br />
                      9087484288 <br />
                      Address line 1, <br />
                      Address line 2 <br />
                      Zip code ,City - Country
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="invoice-bill-info border-0">
                    <p>Issue Date : 27 Jul 2022</p>
                    <p>Due Amount : $1,54,22</p>
                    <p class="mb-0">PO Number : 54515454</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="invoice-table-wrap">
              <div class="row">
                <div class="col-md-12">
                  <div class="table-responsive">
                    <table class="invoice-table table table-center mb-0">
                      <thead>
                        <tr>
                          <th>Rented Car</th>
                          <th>No of days</th>
                          <th>Rental Amount</th>
                          <th class="text-end">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6>Ferrari 458 MM Speciale</h6>
                          </td>
                          <td>7</td>
                          <td>$2000</td>
                          <td class="text-end">$2000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="payment-details-info">
              <div class="row">
                <div class="col-lg-6 col-md-12">
                  <div class="invoice-terms">
                    <h6>Payment Details</h6>
                    <div class="invocie-note">
                      <p>
                        Debit Card<br />
                        XXXXXXXXXXXX-2541<br />
                        HDFC Bank
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="invoice-total-box">
                    <div class="invoice-total-inner">
                      <p>
                        <b>Trip Amount (This does not include fuel)</b> <span>$2592</span>
                      </p>
                      <p>Trip Protection Fees <span>+ $25</span></p>
                      <p>Convenience Fees <span>+ $2</span></p>
                      <p>Refundable Deposit <span>+ $2000</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="invoice-total">
              <h4>Total <span>$4,300.00</span></h4>
            </div>
            <div class="invoice-note-footer">
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                  <div class="invocie-note">
                    <h6>Notes</h6>
                    <p>Enter customer notes or any other details</p>
                  </div>
                  <div class="invocie-note mb-0">
                    <h6>Terms and Conditions</h6>
                    <p>Enter customer notes or any other details</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="invoice-sign">
                    <img
                      class="img-fluid d-inline-block"
                      src="@/assets/img/signature.png"
                      alt="Sign"
                    />
                    <span class="d-block">dreamsrent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Invoice Modal -->

  <!-- Delete Modal -->
  <div
    class="modal new-modal fade"
    id="delete_modal"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="delete-action">
            <div class="delete-header">
              <h4>Delete Payment History</h4>
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
