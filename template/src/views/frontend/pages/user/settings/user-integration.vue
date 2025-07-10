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
              <h4>Integrations</h4>
            </div>
            <div class="row">
              <div class="col-md-5">
                <div class="integration-grid">
                  <div class="integration-calendar">
                    <img src="@/assets/img/icons/integration-icon.svg" alt="Icon" />
                    <div class="status-toggle">
                      <input
                        id="google_calendar"
                        class="check"
                        type="checkbox"
                        checked=""
                      />
                      <label for="google_calendar" class="checktoggle">checkbox</label>
                    </div>
                  </div>
                  <div class="integration-content">
                    <h5>Google Calendar</h5>
                    <p>
                      Powerful & free service to organize your schedule and coordinate
                      events
                    </p>
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
