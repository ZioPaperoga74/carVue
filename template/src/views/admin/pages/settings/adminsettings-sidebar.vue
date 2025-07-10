<template>
  <div class="settings-sidebar slimscroll">
    <simplebar id="scrollbar" class="h-100" ref="scrollbar">
      <div class="sidebar-menu">
        <ul>
          <li class="menu-title"><span>ACCOUNT SETTING</span></li>
          <li>
            <ul class="sidebar-links pb-3 mb-3 border-bottom">
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/account-settings/profile-setting',
                }"
              >
                <router-link to="/admin-template/account-settings/profile-setting">
                  <i class="ti ti-user-edit me-2"></i><span>Profile</span
                  ><span class="track-icon"></span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/account-settings/security-setting',
                }"
              >
                <router-link to="/admin-template/account-settings/security-setting">
                  <i class="ti ti-lock me-2"></i><span>Security</span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path ===
                    '/admin-template/account-settings/notifications-setting',
                }"
              >
                <router-link to="/admin-template/account-settings/notifications-setting">
                  <i class="ti ti-bell me-2"></i><span>Notifications</span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path ===
                    '/admin-template/account-settings/integrations-settings',
                }"
              >
                <router-link to="/admin-template/account-settings/integrations-settings">
                  <i class="ti ti-device-nintendo me-2"></i><span>Integrations</span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/account-settings/tracker-setting',
                }"
              >
                <router-link to="/admin-template/account-settings/tracker-setting">
                  <i class="ti ti-brand-stackshare me-2"></i><span>Tracker</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="menu-title"><span>WEBSITE SETTING</span></li>
          <li>
            <ul class="sidebar-links pb-3 mb-3 border-bottom">
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/website-settings/company-setting',
                }"
              >
                <router-link to="/admin-template/website-settings/company-setting">
                  <i class="ti ti-building me-2"></i><span>Company Settings</span
                  ><span class="track-icon"></span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path ===
                    '/admin-template/website-settings/localization-setting',
                }"
              >
                <router-link to="/admin-template/website-settings/localization-setting">
                  <i class="ti ti-settings-2 me-2"></i><span>Localization</span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/website-settings/prefixes',
                }"
              >
                <router-link to="/admin-template/website-settings/prefixes">
                  <i class="ti ti-corner-up-left-double me-2"></i><span>Prefixes</span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/website-settings/seo-setup',
                }"
              >
                <router-link to="/admin-template/website-settings/seo-setup">
                  <i class="ti ti-seo me-2"></i><span>SEO Setup</span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/website-settings/language-setting',
                }"
              >
                <router-link to="/admin-template/website-settings/language-setting">
                  <i class="ti ti-language me-2"></i><span>Language</span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/website-settings/maintenance-mode',
                }"
              >
                <router-link to="/admin-template/website-settings/maintenance-mode">
                  <i class="ti ti-color-filter me-2"></i><span>Maintenance Mode</span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/website-settings/login-setting',
                }"
              >
                <router-link to="/admin-template/website-settings/login-setting">
                  <i class="ti ti-lock-bolt me-2"></i><span>Login & Register</span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/website-settings/ai-configuration',
                }"
              >
                <router-link to="/admin-template/website-settings/ai-configuration">
                  <i class="ti ti-grain me-2"></i><span>AI Configuration</span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/website-settings/plugin-managers',
                }"
              >
                <router-link to="/admin-template/website-settings/plugin-managers">
                  <i class="ti ti-car-crash me-2"></i><span>Plugin Managers</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="menu-title"><span>RENTAL SETTINGS</span></li>
          <li>
            <ul class="sidebar-links pb-3 mb-3 border-bottom">
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/rental-settings/rental-setting',
                }"
              >
                <router-link to="/admin-template/rental-settings/rental-setting">
                  <i class="ti ti-file-invoice me-2"></i><span>Rental</span
                  ><span class="track-icon"></span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/app-settings/insurance-setting',
                }"
              >
                <router-link to="/admin-template/rental-settings/insurance-setting">
                  <i class="ti ti-file-delta me-2"></i><span>Insurance</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="menu-title"><span>APP SETTINGS</span></li>
          <li>
            <ul class="sidebar-links pb-3 mb-3 border-bottom">
              <li
                :class="{
                  active: $route.path === '/admin-template/app-settings/invoice-setting',
                }"
              >
                <router-link to="/admin-template/app-settings/invoice-setting">
                  <i class="ti ti-file-invoice me-2"></i><span>Invoice Settings</span
                  ><span class="track-icon"></span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/app-settings/invoice-template',
                }"
              >
                <router-link to="/admin-template/app-settings/invoice-template">
                  <i class="ti ti-template me-2"></i><span>Invoice Templates</span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/app-settings/signatures-setting',
                }"
              >
                <router-link to="/admin-template/app-settings/signatures-setting">
                  <i class="ti ti-signature me-2"></i><span>Signatures</span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/app-settings/custom-fields',
                }"
              >
                <router-link to="/admin-template/app-settings/custom-fields">
                  <i class="ti ti-forms me-2"></i><span>Custom Fields</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="menu-title"><span>SYSTEM SETTINGS</span></li>
          <li>
            <ul class="sidebar-links pb-3 mb-3 border-bottom">
              <li
                :class="{
                  active: $route.path === '/admin-template/system-settings/email-setting',
                }"
              >
                <router-link to="/admin-template/system-settings/email-setting">
                  <i class="ti ti-mail me-2"></i><span>Email Settings</span
                  ><span class="track-icon"></span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/system-settings/email-templates',
                }"
              >
                <router-link to="/admin-template/system-settings/email-templates">
                  <i class="ti ti-mail-fast me-2"></i><span>Email Templates</span
                  ><span class="track-icon"></span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/system-settings/sms-gateways',
                }"
              >
                <router-link to="/admin-template/system-settings/sms-gateways">
                  <i class="ti ti-messages me-2"></i><span>SMS Gateways</span
                  ><span class="track-icon"></span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/system-settings/gdpr-cookies',
                }"
              >
                <router-link to="/admin-template/system-settings/gdpr-cookies">
                  <i class="ti ti-cookie me-2"></i><span>GDPR Cookies</span
                  ><span class="track-icon"></span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="menu-title"><span>FINANCE SETTINGS</span></li>
          <li>
            <ul class="sidebar-links pb-3 mb-3 border-bottom">
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/finance-settings/payment-methods',
                }"
              >
                <router-link to="/admin-template/finance-settings/payment-methods">
                  <i class="ti ti-currency-dollar me-2"></i><span>Payment Methods</span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/finance-settings/bank-accounts',
                }"
              >
                <router-link to="/admin-template/finance-settings/bank-accounts">
                  <i class="ti ti-file-dollar me-2"></i><span>Bank Accounts</span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/finance-settings/tax-rates',
                }"
              >
                <router-link to="/admin-template/finance-settings/tax-rates">
                  <i class="ti ti-file-percent me-2"></i><span>Tax Rates</span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/finance-settings/currencies',
                }"
              >
                <router-link to="/admin-template/finance-settings/currencies">
                  <i class="ti ti-world-dollar me-2"></i><span>Currencies</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="menu-title"><span>OTHER SETTINGS</span></li>
          <li>
            <ul class="sidebar-links">
              <li
                :class="{
                  active: $route.path === '/admin-template/other-settings/sitemap',
                }"
              >
                <router-link to="/admin-template/other-settings/sitemap">
                  <i class="ti ti-map me-2"></i><span>Sitemap</span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/other-settings/clear-cache',
                }"
              >
                <router-link to="/admin-template/other-settings/clear-cache">
                  <i class="ti ti-database-x me-2"></i><span>Clear Cache</span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/other-settings/storage',
                }"
              >
                <router-link to="/admin-template/other-settings/storage">
                  <i class="ti ti-database me-2"></i><span>Storage</span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/other-settings/cronjob',
                }"
              >
                <router-link to="/admin-template/other-settings/cronjob">
                  <i class="ti ti-clock-cog me-2"></i><span>Cronjob</span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/other-settings/system-backup',
                }"
              >
                <router-link to="/admin-template/other-settings/system-backup">
                  <i class="ti ti-file-check me-2"></i><span>System Backup</span>
                </router-link>
              </li>
              <li
                :class="{
                  active:
                    $route.path === '/admin-template/other-settings/database-backup',
                }"
              >
                <router-link to="/admin-template/other-settings/database-backup">
                  <i class="ti ti-file-database me-2"></i><span>Database Backup</span>
                </router-link>
              </li>
              <li
                :class="{
                  active: $route.path === '/admin-template/other-settings/system-update',
                }"
              >
                <router-link to="/admin-template/other-settings/system-update">
                  <i class="ti ti-refresh-dot me-2"></i><span>System Update</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </simplebar>
  </div>
</template>
<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
export default {
  components: {
    simplebar,
  },
  data() {
    return {
    };
  },
};
</script>
