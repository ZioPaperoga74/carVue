<template>
  <!-- Add Card Modal -->
  <div
    class="modal new-modal fade"
    id="add_card"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Card</h4>
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="javascript:void(0);">
            <div class="modal-form-group">
              <label>Card Number <span class="text-danger">*</span></label>
              <input type="text" class="form-control" placeholder="Enter Card Number" />
            </div>
            <div class="modal-form-group">
              <label>Name on Card <span class="text-danger">*</span></label>
              <input type="text" class="form-control" placeholder="Enter Card Name" />
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="modal-form-group">
                  <label>CVV <span class="text-danger">*</span></label>
                  <div class="form-icon">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter CVV Number"
                    />
                    <span class="cus-icon">
                      <img src="@/assets/img/icons/lock-icon.svg" alt="Icon" />
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="modal-form-group">
                  <label>Expiry Date <span class="text-danger">*</span></label>
                  <div class="form-icon">
                    <datepicker
                      v-model="startdate"
                      class="form-control datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                      placeholder="04/11/2023"
                    />
                    <span class="cus-icon">
                      <img src="@/assets/img/icons/calendar-icon.svg" alt="Icon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-form-group">
              <label class="custom_check">
                <input type="checkbox" name="rememberme" class="rememberme" />
                <span class="checkmark"></span>
                Save this account for future transaction
              </label>
            </div>
            <div class="modal-btn">
              <button type="submit" @click="redirectReload" class="btn btn-secondary w-100">Pay $4700</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Card Modal -->

  <!-- Add Payment Modal -->
  <div
    class="modal new-modal multi-step fade"
    id="add_payment"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Payment</h4>
          <button type="button" class="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="total-payment">
            <p>Total Amount</p>
            <h6>$22314</h6>
          </div>
          <div class="choose-payment-info">
            <h5>Choose your Payment Method</h5>
            <div class="choose-payment">
              <label class="custom_radio">
                <input type="radio" name="payment_one" value="wallet_one" />
                <span class="checkmark"></span>
                <img src="@/assets/img/icons/payment-1.svg" alt="Icon" />
              </label>
              <label class="custom_radio">
                <input type="radio" name="payment_one" value="wallet_one" />
                <span class="checkmark"></span>
                <img src="@/assets/img/icons/payment-2.svg" alt="Icon" />
              </label>
              <label class="custom_radio">
                <input type="radio" name="payment_one" value="wallet_one" checked="" />
                <span class="checkmark"></span>
                <img src="@/assets/img/icons/payment-3.svg" alt="Icon" />
              </label>
            </div>
            <div class="add-payment-table-info">
              <div class="wallet-table add-payment-table">
                <div class="table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <label class="custom_radio">
                            <input
                              type="radio"
                              name="payment_two"
                              value="wallet_two"
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
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="wallet-table add-payment-table">
                <div class="table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <label class="custom_radio">
                            <input type="radio" name="payment_two" value="wallet_two" />
                            <span class="checkmark"></span>
                            <img src="@/assets/img/icons/wallet-02.svg" alt="Icon" />
                          </label>
                        </td>
                        <td>
                          <h6>7847 **** **** **78</h6>
                          <p>Card Number</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="wallet-table add-payment-table">
                <div class="table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <label class="custom_radio">
                            <input type="radio" name="payment_two" value="wallet_two" />
                            <span class="checkmark"></span>
                            <img src="@/assets/img/icons/wallet-03.svg" alt="Icon" />
                          </label>
                        </td>
                        <td>
                          <h6>4710 **** **** **64</h6>
                          <p>Card Number</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-btn">
            <button
              class="btn btn-secondary w-100"
              data-bs-target="#order_success"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              Add to Wallet
            </button>
            <button class="btn btn-outline-cancel" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Payment Modal -->

  <!-- Order Success Modal -->
  <div
    class="modal new-modal order-success-modal fade"
    id="order_success"
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
            <p>
              You Amount “$1000” has been successfully added. Order id :
              <span>#50641</span>
            </p>
            <div class="modal-btn">
              <router-link @click="redirectReload" to="/user/user-wallet" class="btn btn-secondary">
                Back to My Wallet <i class="feather-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Order Success Modal -->

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
              <h4>Delete Wallet History</h4>
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
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
    };
  },
  methods: {
    redirectReload() {
      this.$router.push({ path: "/user/user-wallet" }).then(() => {
        this.$router.go();
      });
    },
  },
};
</script>
