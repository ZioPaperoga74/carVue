<template>
  <layouts-header></layouts-header>
  <user-breadcrumb :title="title" :text="text" :text1="text1" />

  <user-tabset></user-tabset>
  <!-- Page Content -->
  <div class="content">
    <div class="container">
      <!-- Content Header -->
      <div class="content-header">
        <h4>Wallet</h4>
      </div>
      <!-- /Content Header -->

      <!-- Wallet Info -->
      <div class="row">
        <div class="col-lg-5 col-md-12 d-flex">
          <div class="card wallet-card flex-fill">
            <div class="card-body">
              <div class="balance-info">
                <div class="balance-grid">
                  <div class="balance-content">
                    <h6>Available Balance</h6>
                    <h4>$4544</h4>
                  </div>
                  <div class="refersh-icon">
                    <a href="javascript:void(0);">
                      <i class="fas fa-arrows-rotate"></i>
                    </a>
                  </div>
                </div>
                <div class="balance-list">
                  <div class="row">
                    <div class="col-lg-4 col-md-6 d-flex">
                      <div class="balance-inner credit-info">
                        <h6>$1,23,464</h6>
                        <p>Total Credit</p>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-flex">
                      <div class="balance-inner debit-info">
                        <h6>$7,357</h6>
                        <p>Total Debit</p>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-flex">
                      <div class="balance-inner transaction-info">
                        <h6>$6,56,415</h6>
                        <p>Total Transaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group wallet-form-group">
                <label>Add Wallet Credits ($)</label>
                <input type="text" class="form-control" placeholder="1000" />
              </div>
              <div class="wallet-btn">
                <a
                  href="javascript:void(0);"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_payment"
                  >Add Payment</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-12 d-flex">
          <div class="card your-card flex-fill">
            <div class="card-body">
              <div class="wallet-header">
                <h4>Your Cards</h4>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#add_card"
                >
                  <i class="feather-plus-circle"></i>
                </a>
              </div>
              <div class="wallet-table">
                <div class="table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <label class="custom_radio">
                            <input
                              type="radio"
                              name="payment"
                              value="wallet"
                              checked=""
                            />
                            <span class="checkmark"></span>
                            <img src="@/assets/img/icons/wallet-01.svg" alt="Icon" />
                          </label>
                        </td>
                        <td>
                          <h6>3210 **** **** **12</h6>
                          <p>Card Number</p>
                        </td>
                        <td>
                          <h6>$3000</h6>
                          <p>Balance</p>
                        </td>
                        <td>
                          <h6>Active</h6>
                          <p>Status</p>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="fas fa-ellipsis-vertical"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="javascript:void(0);">
                                <i class="feather-edit-3 me-1"></i> Edit
                              </a>
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <i class="feather-trash-2 me-1"></i> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="custom_radio">
                            <input type="radio" name="payment" value="wallet" />
                            <span class="checkmark"></span>
                            <img src="@/assets/img/icons/wallet-02.svg" alt="Icon" />
                          </label>
                        </td>
                        <td>
                          <h6>7847 **** **** **78</h6>
                          <p>Card Number</p>
                        </td>
                        <td>
                          <h6>$2300</h6>
                          <p>Balance</p>
                        </td>
                        <td>
                          <h6>Active</h6>
                          <p>Status</p>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="fas fa-ellipsis-vertical"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="javascript:void(0);">
                                <i class="feather-edit-3 me-1"></i> Edit
                              </a>
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <i class="feather-trash-2 me-1"></i> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="custom_radio">
                            <input type="radio" name="payment" value="wallet" />
                            <span class="checkmark"></span>
                            <img src="@/assets/img/icons/wallet-03.svg" alt="Icon" />
                          </label>
                        </td>
                        <td>
                          <h6>4710 **** **** **64</h6>
                          <p>Card Number</p>
                        </td>
                        <td>
                          <h6>$1800</h6>
                          <p>Balance</p>
                        </td>
                        <td>
                          <h6>Active</h6>
                          <p>Status</p>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="fas fa-ellipsis-vertical"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="javascript:void(0);">
                                <i class="feather-edit-3 me-1"></i> Edit
                              </a>
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <i class="feather-trash-2 me-1"></i> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Wallet Info -->

      <!-- Wallet Table -->
      <div class="row">
        <div class="col-lg-12 d-flex">
          <div class="card book-card flex-fill mb-0">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-md-5">
                  <h4>Wallet Usage History</h4>
                </div>
                <div class="col-md-7 text-md-end">
                  <div class="table-search">
                    <div id="tablefilter" class="me-0">
                      <input type="text" class="form-control form-control-sm" placeholder="Search" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <user-table></user-table>
              <div class="table-footer">
                <div class="row">
                  <div class="col-md-6">
                    <div id="tablelength">
                      <div class="dataTables_length" id="DataTables_Table_0_length">
                        <label
                          ><select
                            name="DataTables_Table_0_length"
                            aria-controls="DataTables_Table_0"
                            class="custom-select custom-select-sm form-control form-control-sm"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="-1">All</option>
                          </select></label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 text-md-end">
                    <div id="tablepage">
                      <div
                        class="dataTables_paginate paging_simple_numbers"
                        id="DataTables_Table_0_paginate"
                      >
                        <ul class="pagination">
                          <li
                            class="paginate_button page-item previous disabled"
                            id="DataTables_Table_0_previous"
                          >
                            <a
                              href="javascript:void(0);"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="0"
                              tabindex="0"
                              class="page-link"
                              ><i class="feather-arrow-left"></i> Prev</a
                            >
                          </li>
                          <li class="paginate_button page-item active">
                            <a
                              href="javascript:void(0);"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="1"
                              tabindex="0"
                              class="page-link"
                              >1</a
                            >
                          </li>
                          <li
                            class="paginate_button page-item next disabled"
                            id="DataTables_Table_0_next"
                          >
                            <a
                              href="javascript:void(0);"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="2"
                              tabindex="0"
                              class="page-link"
                              >Next <i class="feather-arrow-right"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Wallet Table -->
    </div>
  </div>
  <!-- /Page Content -->

  <layout-footer></layout-footer>
  <user-wallet-modal></user-wallet-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "User Wallet",
      text: "Home",
      text1: "User Wallet",
    };
  },
};
</script>
