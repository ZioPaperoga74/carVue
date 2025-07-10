<template>
  <layouts-header></layouts-header>
  <user-breadcrumb :title="title" :text="text" :text1="text1" />

  <user-tabset></user-tabset>
  <div class="content settings-profile-content">
    <div class="container">
      <!-- Content Header -->
      <div class="content-header content-settings-header">
        <h4>Settings</h4>
      </div>
      <!-- /Content Header -->

      <div class="row">
        <settings-sidebar></settings-sidebar>

        <!-- Settings Details -->
        <div class="col-lg-9">
          <div class="settings-info">
            <div class="settings-sub-heading">
              <h4>Preferences</h4>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex">
                <div class="preferences-grid flex-fill">
                  <div class="preferences-heading">
                    <h5>Maintenance Mode</h5>
                    <div class="status-toggle">
                      <input
                        id="maintenance_mode"
                        class="check"
                        type="checkbox"
                        checked
                      />
                      <label for="maintenance_mode" class="checktoggle">checkbox</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 d-flex">
                <div class="preferences-grid flex-fill">
                  <div class="preferences-heading">
                    <h5>Chat</h5>
                    <div class="status-toggle">
                      <input id="chat_mode" class="check" type="checkbox" checked />
                      <label for="chat_mode" class="checktoggle">checkbox</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 d-flex">
                <div class="preferences-grid flex-fill">
                  <div class="preferences-heading">
                    <h5>Wallet</h5>
                    <div class="status-toggle">
                      <input id="wallet_mode" class="check" type="checkbox" checked />
                      <label for="wallet_mode" class="checktoggle">checkbox</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 d-flex">
                <div class="preferences-grid flex-fill">
                  <div class="preferences-heading">
                    <h5>Bookings</h5>
                    <div class="status-toggle">
                      <input id="bookings_mode" class="check" type="checkbox" checked />
                      <label for="bookings_mode" class="checktoggle">checkbox</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 d-flex">
                <div class="preferences-grid flex-fill">
                  <div class="preferences-heading">
                    <h5>Wishlist</h5>
                    <div class="status-toggle">
                      <input id="wishlist_mode" class="check" type="checkbox" checked />
                      <label for="wishlist_mode" class="checktoggle">checkbox</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 d-flex">
                <div class="preferences-grid flex-fill">
                  <div class="preferences-heading">
                    <h5>Payments</h5>
                    <div class="status-toggle">
                      <input id="payments_mode" class="check" type="checkbox" checked />
                      <label for="payments_mode" class="checktoggle">checkbox</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Settings Details -->
      </div>
    </div>
  </div>
  <layout-footer></layout-footer>
</template>
<script>
export default {
  data() {
    return {
      title: "User Settings",
      text: "Home",
      text1: "User Settings",
    };
  },
};
</script>
