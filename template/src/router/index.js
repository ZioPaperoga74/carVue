import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/frontend/pages/home-index.vue";
import Index from "@/views/frontend/pages/index/index.vue";
import Index_2 from "@/views/frontend/pages/index-2/index-2.vue";
import Index_3 from "@/views/frontend/pages/index-3/index-3.vue";
import Index_4 from "@/views/frontend/pages/index-4/index-4.vue";
// import Faq from '@/views/frontend/pages/pages/faq.vue'
// import Coming_Soon from '@/views/frontend/pages/pages/coming-soon.vue'
// import Maintenance from '@/views/frontend/pages/pages/maintenance.vue'
// import Privacy_Policy from '@/views/frontend/pages/pages/privacy-policy.vue'
// import Terms_Condition from '@/views/frontend/pages/pages/terms-condition.vue'
// import Testimonial from '@/views/frontend/pages/pages/testimonial.vue'
// import Our_Team from '@/views/frontend/pages/pages/our-team.vue'
// import Gallery from '@/views/frontend/pages/pages/gallery.vue'
// import Pricing from '@/views/frontend/pages/pages/pricing.vue'
// import Error_404 from '@/views/frontend/pages/pages/error/error-404.vue'
// import Error_500 from '@/views/frontend/pages/pages/error/error-500.vue'
// import Booking_Payment from '@/views/frontend/pages/pages/booking/booking-payment.vue'
// import Booking_Checkout from '@/views/frontend/pages/pages/booking/booking-checkout.vue'
// import Booking_Adon from '@/views/frontend/pages/pages/booking/booking-adon.vue'
// import Booking_Success from '@/views/frontend/pages/pages/booking/booking-success.vue'
// import Booking_Detail from '@/views/frontend/pages/pages/booking/booking-detail.vue'
// import BookingContent from '@/views/frontend/pages/pages/booking/booking-content.vue'
// import Booking_Index from '@/views/frontend/pages/pages/booking/booking.vue'
// import Invoice_Details from '@/views/frontend/pages/pages/booking/invoice-details.vue'
// import Reset_Password from '@/views/frontend/pages/pages/auth/reset-password.vue'
// import Forgot_Password from '@/views/frontend/pages/pages/auth/forgot-password.vue'
// import Register from '@/views/frontend/pages/pages/auth/register.vue'
import Login from "@/views/frontend/pages/pages/auth/login.vue";
// import About_Us from '@/views/frontend/pages/pages/about-us/about-us.vue'
// import ContactUs from '@/views/frontend/pages/contact-us.vue'
// import Listing_Grid from '@/views/frontend/pages/listing/listing-grid/listing-grid.vue'
// import Listing_List from '@/views/frontend/pages/listing/listing-list/listing-list.vue'
// import Listing_Deatils from '@/views/frontend/pages/listing/listing-details/listing-details.vue'
// import Listing_Map from '@/views/frontend/pages/listing/listing-map/listing-map.vue'
// import addListing from '@/views/frontend/pages/listing/add-listing.vue'
// import BlogList from '@/views/frontend/pages/blog/blog-list.vue';
// import BlogGrid from '@/views/frontend/pages/blog/blog-grid.vue';
// import BlogDetails from '@/views/frontend/pages/blog/blog-details.vue';
// import Blog from '@/views/frontend/pages/blog/blog.vue'
// import Listing from '@/views/frontend/pages/listing/listing.vue'
// import Pages from '@/views/frontend/pages/pages/pages.vue'
// import Authentication from '@/views/frontend/pages/pages/auth/authentication.vue'
// import Error from '@/views/frontend/pages/pages/error/error.vue'
// import User from '@/views/frontend/pages/user/user.vue'
// import UserDashboard from '@/views/frontend/pages/user/user-dashboard.vue'
// import UserBookings from '@/views/frontend/pages/user/booking/user-bookings.vue'
// import UserBookingUpcoming from '@/views/frontend/pages/user/booking/user-booking-upcoming.vue'
// import UserBookingInprogress from '@/views/frontend/pages/user/booking/user-booking-inprogress.vue'
// import UserBookingCompletes from '@/views/frontend/pages/user/booking/user-booking-complete.vue'
// import UserBookingCancelled from '@/views/frontend/pages/user/booking/user-booking-cancelled.vue'
// import UserSettings from '@/views/frontend/pages/user/settings/user-settings.vue'
// import UserSecurity from '@/views/frontend/pages/user/settings/user-security.vue'
// import UserPreferences from '@/views/frontend/pages/user/settings/user-preferences.vue'
// import UserNotifications from '@/views/frontend/pages/user/settings/user-notifications.vue'
// import UserIntegration from '@/views/frontend/pages/user/settings/user-integration.vue'
// import UserPayment from '@/views/frontend/pages/user/user-payment.vue'
// import UserReviews from '@/views/frontend/pages/user/user-reviews.vue'
// import UserWishlist from '@/views/frontend/pages/user/user-wishlist.vue'
// import UserWallet from '@/views/frontend/pages/user/user-wallet/user-wallet.vue'
// import UserMessages from '@/views/frontend/pages/user/user-messages.vue'

// // **************  Admin   ************** //
// import AdminLogin from '@/views/admin/pages/authentication/admin-login.vue';
// import AdminresetPassword from '@/views/admin/pages/authentication/reset-password.vue';
// import AdminforgotPassword from '@/views/admin/pages/authentication/forgot-password.vue';
// import Adminotp from '@/views/admin/pages/authentication/otp.vue';
// import AdminDashboard from '@/views/admin/pages/dashboard/admin-dashboard.vue';

// import Tables from '@/views/admin/pages/uiinterface/tables/ui-tables'
// import Tables_Basic from '@/views/admin/pages/uiinterface/tables/tables-basic.vue'
// import Data_Tables from '@/views/admin/pages/uiinterface/tables/data-tables.vue'
// import Chartapex from '@/views/admin/pages/uiinterface/charts/apex/chart-apex.vue'
// import Chartc3 from '@/views/admin/pages/uiinterface/charts/c3/chart-c3.vue'
// import Chartflot from '@/views/admin/pages/uiinterface/charts/flot/chart-flot.vue'
// import Chartjs from '@/views/admin/pages/uiinterface/charts/js/chart-js.vue'
// import Chartmorris from '@/views/admin/pages/uiinterface/charts/morris/chart-morris.vue'
// import Charts from '@/views/admin/pages/uiinterface/charts/ui-charts.vue'
// import Forms from '@/views/admin/pages/uiinterface/forms/ui-forms.vue'
// import Formbasicinput from '@/views/admin/pages/uiinterface/forms/form-elements/formbasic/formbasic-input.vue'
// import Formcheckboxradios from '@/views/admin/pages/uiinterface/forms/form-elements/form-checkbox-radios.vue'
// import Formgridgutters from '@/views/admin/pages/uiinterface/forms/form-elements/form-grid-gutters.vue'
// import Formselect from '@/views/admin/pages/uiinterface/forms/form-elements/form-select.vue'
// import FormInput from '@/views/admin/pages/uiinterface/forms/form-elements/forminput/form-input.vue'
// import Formmask from '@/views/admin/pages/uiinterface/forms/form-elements/formmask/formmask.vue'
// import Formfileupload from '@/views/admin/pages/uiinterface/forms/form-elements/formfile-upload.vue'
// import FormHorizontal from '@/views/admin/pages/uiinterface/forms/layouts/form-horizontal.vue'
// import Formvertical from '@/views/admin/pages/uiinterface/forms/layouts/form-vertical.vue'
// import Formfloatinglabels from '@/views/admin/pages/uiinterface/forms/layouts/form-floating-labels.vue'
// import Formvalidation from '@/views/admin/pages/uiinterface/forms/form-validation.vue'
// import Formselect2 from '@/views/admin/pages/uiinterface/forms/form-select2.vue'
// import Formwizard from '@/views/admin/pages/uiinterface/forms/form-wizard.vue'
// import FormPickers from '@/views/admin/pages/uiinterface/forms/form-pickers.vue';
// import Advancedui from '@/views/admin/pages/uiinterface/advancedUI/advanced-ui.vue'
// import UI_Ribbon from '@/views/admin/pages/uiinterface/advancedUI/ui-ribbon.vue'
// import UI_Clipboard from '@/views/admin/pages/uiinterface/advancedUI/ui-clipboard.vue'
// import UI_Drag_Drop from '@/views/admin/pages/uiinterface/advancedUI/ui-drag-drop.vue'
// import UI_Text_Editor from '@/views/admin/pages/uiinterface/advancedUI/ui-text-editor.vue'
// import UI_Counter from '@/views/admin/pages/uiinterface/advancedUI/ui-counter.vue'
// import UI_Scrollbar from '@/views/admin/pages/uiinterface/advancedUI/ui-scrollbar.vue'
// import UI_Rating from '@/views/admin/pages/uiinterface/advancedUI/ui-rating.vue'
// import UI_Stickynote from '@/views/admin/pages/uiinterface/advancedUI/ui-stickynote.vue'
// import UI_Timeline from '@/views/admin/pages/uiinterface/advancedUI/ui-timeline.vue'
// import BaseUi from '@/views/admin/pages/uiinterface/baseui/base-ui.vue'
// import UI_Alerts from '@/views/admin/pages/uiinterface/baseui/ui-alerts.vue'
// import UI_Accordion from '@/views/admin/pages/uiinterface/baseui/ui-accordion.vue'
// import UI_Avatar from '@/views/admin/pages/uiinterface/baseui/ui-avatar.vue'
// import UI_Badges from '@/views/admin/pages/uiinterface/baseui/ui-badges.vue'
// import UI_Borders from '@/views/admin/pages/uiinterface/baseui/ui-borders.vue'
// import UI_Buttons from '@/views/admin/pages/uiinterface/baseui/ui-buttons.vue'
// import UI_Buttons_group from '@/views/admin/pages/uiinterface/baseui/ui-buttons-group.vue'
// import UI_Breadcrumb from '@/views/admin/pages/uiinterface/baseui/ui-breadcrumb.vue'
// import UI_Cards from '@/views/admin/pages/uiinterface/baseui/ui-cards.vue'
// import UI_Carousel from '@/views/admin/pages/uiinterface/baseui/carousel/ui-carousel.vue'
// import UI_Colors from '@/views/admin/pages/uiinterface/baseui/ui-colors.vue'
// import UI_Dropdowns from '@/views/admin/pages/uiinterface/baseui/ui-dropdowns.vue'
// import UI_Grid from '@/views/admin/pages/uiinterface/baseui/ui-grid.vue'
// import UI_Images from '@/views/admin/pages/uiinterface/baseui/ui-images.vue'
// import UI_Lightbox from '@/views/admin/pages/uiinterface/baseui/lightbox/ui-lightbox.vue'
// import UI_Media from '@/views/admin/pages/uiinterface/baseui/ui-media.vue'
// import UI_Modals from '@/views/admin/pages/uiinterface/baseui/ui-modals.vue'
// import UI_Offcanvas from '@/views/admin/pages/uiinterface/baseui/ui-offcanvas.vue'
// import UI_Pagination from '@/views/admin/pages/uiinterface/baseui/ui-pagination.vue'
// import UI_Popovers from '@/views/admin/pages/uiinterface/baseui/ui-popovers.vue'
// import UI_Progress from '@/views/admin/pages/uiinterface/baseui/ui-progress.vue'
// import UI_Placeholders from '@/views/admin/pages/uiinterface/baseui/ui-placeholders.vue'
// import UI_Rangeslider from '@/views/admin/pages/uiinterface/baseui/ui-rangeslider.vue'
// import UI_navTabs from '@/views/admin/pages/uiinterface/baseui/ui-nav-tabs.vue'
// import UI_Spinner from '@/views/admin/pages/uiinterface/baseui/ui-spinner.vue'
// import UI_Sortable from '@/views/admin/pages/uiinterface/baseui/ui-sortable.vue'
// import UI_Sweetalerts from '@/views/admin/pages/uiinterface/baseui/ui-sweetalerts.vue'
// import UI_Tooltips from '@/views/admin/pages/uiinterface/baseui/ui-tooltips.vue'
// import UI_Typography from '@/views/admin/pages/uiinterface/baseui/ui-typography.vue'
// import UI_Video from '@/views/admin/pages/uiinterface/baseui/ui-video.vue'
// import Icons from '@/views/admin/pages/uiinterface/icons/ui-icons.vue'
// import UI_Iconfontawesome from "@/views/admin/pages/uiinterface/icons/icon-fontawesome.vue";
// import UI_Iconfeather from "@/views/admin/pages/uiinterface/icons/icon-feather.vue";
// import UI_Iconionic from "@/views/admin/pages/uiinterface/icons/icon-ionic.vue";
// import UI_Iconmaterial from "@/views/admin/pages/uiinterface/icons/icon-material.vue";
// import UI_Iconpe7 from "@/views/admin/pages/uiinterface/icons/icon-pe7.vue";
// import UI_Iconsimpleline from "@/views/admin/pages/uiinterface/icons/icon-simpleline.vue";
// import UI_Iconthemify from "@/views/admin/pages/uiinterface/icons/icon-themify.vue";
// import UI_Iconweather from "@/views/admin/pages/uiinterface/icons/icon-weather.vue";
// import UI_Icontypicon from "@/views/admin/pages/uiinterface/icons/icon-typicon.vue";
// import UI_Iconflag from "@/views/admin/pages/uiinterface/icons/icon-flag.vue";
// import iconTabler from '@/views/admin/pages/uiinterface/icons/icon-tabler.vue';
// import iconBootstrap from '@/views/admin/pages/uiinterface/icons/icon-bootstrap.vue';
// import iconRemix from '@/views/admin/pages/uiinterface/icons/icon-remix.vue';
// import Ui_Maps from '@/views/admin/pages/uiinterface/maps/ui-maps.vue'
// import MapsVector from '@/views/admin/pages/uiinterface/maps/maps-vector.vue';
// import MapsLeaflet from '@/views/admin/pages/uiinterface/maps/maps-leaflet.vue';

// import othersSettings from '@/views/admin/pages/settings/other-settings/others-settings.vue';
// import sitemap from '@/views/admin/pages/settings/other-settings/sitemap.vue';
// import ClearCache from '@/views/admin/pages/settings/other-settings/clear-cache.vue';
// import storage from '@/views/admin/pages/settings/other-settings/storage.vue';
// import cronjobSettings from '@/views/admin/pages/settings/other-settings/cronjob-settings.vue';
// import systemBackup from '@/views/admin/pages/settings/other-settings/system-backup.vue';
// import databaseBackup from '@/views/admin/pages/settings/other-settings/database-backup.vue';
// import systemUpdate from '@/views/admin/pages/settings/other-settings/system-update.vue';
// import financialSettings from '@/views/admin/pages/settings/financial-settings/financial-settings.vue';
// import PaymentMethods from '@/views/admin/pages/settings/financial-settings/payment-methods.vue';
// import BankAccounts from '@/views/admin/pages/settings/financial-settings/bank-accounts.vue';
// import TaxRates from '@/views/admin/pages/settings/financial-settings/tax-rates.vue';
// import currencies from '@/views/admin/pages/settings/financial-settings/currencies.vue';
// import systemSettings from '@/views/admin/pages/settings/system-settings/system-settings.vue';
// import emailSetting from '@/views/admin/pages/settings/system-settings/email-setting.vue';
// import emailTemplates from '@/views/admin/pages/settings/system-settings/email-templates.vue';
// import smsGateways from '@/views/admin/pages/settings/system-settings/sms-gateways.vue';
// import gdprCookies from '@/views/admin/pages/settings/system-settings/gdpr-cookies.vue';
// import appSettings from '@/views/admin/pages/settings/app-settings/app-settings.vue';
// import invoiceSetting from '@/views/admin/pages/settings/app-settings/invoice-setting.vue';
// import invoiceTemplate from '@/views/admin/pages/settings/app-settings/invoice-template.vue';
// import signaturesSetting from '@/views/admin/pages/settings/app-settings/signatures-setting.vue';
// import customFields from '@/views/admin/pages/settings/app-settings/custom-fields.vue';
// import Rental from '@/views/admin/pages/settings/rental-settings/rental.vue';
// import RentalSetting from '@/views/admin/pages/settings/rental-settings/rental-setting.vue';
// import insuranceSetting from '@/views/admin/pages/settings/rental-settings/insurance-setting.vue';
// import accountSettings from '@/views/admin/pages/settings/account-settings/account-settings.vue';
// import profileSetting from '@/views/admin/pages/settings/account-settings/profile-setting.vue';
// import securitySetting from '@/views/admin/pages/settings/account-settings/security-settings.vue';
// import notificationsSetting from '@/views/admin/pages/settings/account-settings/notifications-settings.vue';
// import trackerSetting from '@/views/admin/pages/settings/account-settings/tracker-settings.vue';
// import integrationsSetting from '@/views/admin/pages/settings/account-settings/integrations-settings.vue';
// import websiteSettings from '@/views/admin/pages/settings/website-settings/website-settings.vue';
// import companySetting from '@/views/admin/pages/settings/website-settings/company-setting.vue';
// import localizationSetting from '@/views/admin/pages/settings/website-settings/localization-setting.vue';
// import prefixes from '@/views/admin/pages/settings/website-settings/prefixes.vue';
// import seoSetup from '@/views/admin/pages/settings/website-settings/seo-setup.vue';
// import languageSetting from '@/views/admin/pages/settings/website-settings/language-setting.vue';
// import languageSetting2 from '@/views/admin/pages/settings/website-settings/language-setting2.vue';
// import maintenanceMode from '@/views/admin/pages/settings/website-settings/maintenance-mode.vue';
// import loginSetting from '@/views/admin/pages/settings/website-settings/login-setting.vue';
// import aiConfiguration from '@/views/admin/pages/settings/website-settings/ai-configuration.vue';
// import pluginManagers from '@/views/admin/pages/settings/website-settings/plugin-managers.vue';

// import Adminreport from '@/views/admin/pages/reports/admin-report.vue';
// import incomeReport from '@/views/admin/pages/reports/income-report/income-report.vue';
// import earningsReport from '@/views/admin/pages/reports/earnings-report/earnings-report.vue';
// import rentalReport from '@/views/admin/pages/reports/rental-report/rental-report.vue';

// import adminUser from '@/views/admin/pages/user/admin-user.vue';
// import usersList from '@/views/admin/pages/user/users-list.vue';
// import rolesPermissions from '@/views/admin/pages/user/roles-permissions.vue';
// import Permissions from '@/views/admin/pages/user/permissions.vue';

// import adminSupport from '@/views/admin/pages/support/admin-support.vue'
// import contactMessages from '@/views/admin/pages/support/contact-messages.vue'
// import announcements from '@/views/admin/pages/support/announcements.vue'
// import tickets from '@/views/admin/pages/support/tickets.vue'
// import ticketsDetails from '@/views/admin/pages/support/tickets-details.vue'

// import BookingsIndex from '@/views/admin/pages/bookings/bookings-index.vue';
// import ReservationsList from '@/views/admin/pages/bookings/reservation/reservations-list.vue';
// import ReservationDetails from '@/views/admin/pages/bookings/reservation/reservation-details.vue';
// import AddReservation from '@/views/admin/pages/bookings/reservation/add-reservation/add-reservation.vue';
// import EditReservation from '@/views/admin/pages/bookings/reservation/edit-reservation/edit-reservation.vue';
// import Calendar from '@/views/admin/pages/bookings/calendar.vue';
// import AdminCrm from '@/views/admin/pages/crm/admin-crm.vue';
// import AdminPages from '@/views/admin/pages/crm/admin-pages.vue';
// import addPages from '@/views/admin/pages/crm/add-pages.vue';
// import editPages from '@/views/admin/pages/crm/edit-pages.vue';
// import menuManagement from '@/views/admin/pages/crm/menu-management.vue';
// import testimonials from '@/views/admin/pages/crm/testimonials.vue';
// import AdminBlogs from '@/views/admin/pages/crm/blogs/admin-blogs.vue';
// import Blogs from '@/views/admin/pages/crm/blogs/blogs.vue';
// import AddBlog from '@/views/admin/pages/crm/blogs/add-blog.vue';
// import EditBlog from '@/views/admin/pages/crm/blogs/edit-blog.vue';
// import blogCategories from '@/views/admin/pages/crm/blogs/blog-categories.vue';
// import blogComments from '@/views/admin/pages/crm/blogs/blog-comments.vue';
// import blogTags from '@/views/admin/pages/crm/blogs/blog-tags.vue';
// import adminLocations from '@/views/admin/pages/crm/locations/admin-locations.vue';
// import adminCountries from '@/views/admin/pages/crm/locations/countries.vue'
// import adminState from '@/views/admin/pages/crm/locations/state.vue'
// import adminCity from '@/views/admin/pages/crm/locations/city.vue'
// import faqAdmin from '@/views/admin/pages/crm/faq/faq.vue';
// import faqCategories from '@/views/admin/pages/crm/faq/faq-categories.vue';
// import adminFaq from '@/views/admin/pages/crm/faq/admin-faq.vue';

// import chatAdmin from '@/views/admin/pages/others/chat.vue'
// import Admincoupons from '@/views/admin/pages/others/coupons.vue'
// import Adminnewsletters from '@/views/admin/pages/others/newsletters.vue'

// import QuotationsList from '@/views/admin/pages/bookings/quotations/quotations-list.vue';
// import AddQuotations from '@/views/admin/pages/bookings/quotations/add-quotations.vue';
// import EditQuotations from '@/views/admin/pages/bookings/quotations/edit-quotations.vue';
// import QuotationDetails from '@/views/admin/pages/bookings/quotations/quotation-details.vue';
// import EnquiriesList from '@/views/admin/pages/bookings/enquiries-list.vue';
// import ManageIndex from '@/views/admin/pages/manage/manage-index.vue';
// import CustomersList from '@/views/admin/pages/manage/customers-list.vue';
// import CustomersCompanies from '@/views/admin/pages/manage/customers-companies.vue';
// import CompanyDetails from '@/views/admin/pages/manage/company-details.vue';
// import DriversList from '@/views/admin/pages/manage/drivers-list.vue';
// import LocationsList from '@/views/admin/pages/manage/locations-list.vue';

// import CustomerDetails from '@/views/admin/pages/manage/customer-details.vue';

const routes = [
  {
    path: "/",
    redirect: "/home/index-2",
  },

  // Rotta di test per forgot password
  {
    path: "/test-forgot",
    component: () =>
      import("@/views/frontend/pages/pages/auth/forgot-password.vue"),
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: () => import("@/views/frontend/pages/contact-us.vue"),
  },
  {
    path: "/authentication",
    component: () =>
      import("@/views/frontend/pages/pages/auth/authentication.vue"),
    children: [
      { path: "", redirect: "/authentication/register" },
      {
        path: "register",
        component: () =>
          import("@/views/frontend/pages/pages/auth/register.vue"),
      },
      {
        path: "login",
        component: () => import("@/views/frontend/pages/pages/auth/login.vue"),
      },
      {
        path: "forgot-password",
        component: () =>
          import("@/views/frontend/pages/pages/auth/forgot-password.vue"),
      },
      {
        path: "reset-password",
        component: () =>
          import("@/views/frontend/pages/pages/auth/reset-password.vue"),
      },
      {
        path: "test-forgot",
        component: () =>
          import("@/views/frontend/pages/pages/auth/test-forgot.vue"),
      },
    ],
  },
  {
    path: "/home",
    component: () => import("@/views/frontend/pages/home-index.vue"),
    children: [
      { path: "", redirect: "/home/index" },
      {
        path: "index",
        component: () => import("@/views/frontend/pages/index-4/index-4.vue"),
      },
      {
        path: "index-2",
        component: () => import("@/views/frontend/pages/index/index.vue"),
      },
      {
        path: "index-3",
        component: () => import("@/views/frontend/pages/index-3/index-3.vue"),
      },
      {
        path: "index-4",
        component: () => import("@/views/frontend/pages/index-2/index-2.vue"),
      },
    ],
  },
  {
    path: "/blog",
    component: () => import("@/views/frontend/pages/blog/blog.vue"),
    children: [
      { path: "", redirect: "/blog/blog-list" },
      {
        path: "blog-list",
        component: () => import("@/views/frontend/pages/blog/blog-list.vue"),
      },
      {
        path: "blog-grid",
        component: () => import("@/views/frontend/pages/blog/blog-grid.vue"),
      },
      {
        path: "blog-details",
        component: () => import("@/views/frontend/pages/blog/blog-details.vue"),
      },
    ],
  },
  {
    path: "/listing",
    component: () => import("@/views/frontend/pages/listing/listing.vue"),
    children: [
      { path: "", redirect: "/listing/listing-grid" },
      {
        path: "listing-grid",
        component: () =>
          import(
            "@/views/frontend/pages/listing/listing-grid/listing-grid.vue"
          ),
      },
      {
        path: "listing-list",
        component: () =>
          import(
            "@/views/frontend/pages/listing/listing-list/listing-list.vue"
          ),
      },
      {
        path: "listing-details/:id?",
        component: () =>
          import(
            "@/views/frontend/pages/listing/listing-details/listing-details.vue"
          ),
      },
      {
        path: "listing-map",
        component: () =>
          import("@/views/frontend/pages/listing/listing-map/listing-map.vue"),
      },
      {
        path: "add-listing",
        component: () =>
          import("@/views/frontend/pages/listing/add-listing.vue"),
      },
      {
        path: "magic-filter",
        component: () =>
          import("@/views/frontend/pages/listing/magic-filter.vue"),
      },
    ],
  },
  {
    path: "/pages",
    component: () => import("@/views/frontend/pages/pages/pages.vue"),
    children: [
      { path: "", redirect: "/pages/about-us" },
      {
        path: "about-us",
        component: () =>
          import("@/views/frontend/pages/pages/about-us/about-us.vue"),
      },
      {
        path: "pricing",
        component: () => import("@/views/frontend/pages/pages/pricing.vue"),
      },
      {
        path: "faq",
        component: () => import("@/views/frontend/pages/pages/faq.vue"),
      },
      {
        path: "gallery",
        component: () => import("@/views/frontend/pages/pages/gallery.vue"),
      },
      {
        path: "our-team",
        component: () => import("@/views/frontend/pages/pages/our-team.vue"),
      },
      {
        path: "testimonial",
        component: () => import("@/views/frontend/pages/pages/testimonial.vue"),
      },
      {
        path: "terms-condition",
        component: () =>
          import("@/views/frontend/pages/pages/terms-condition.vue"),
      },
      {
        path: "privacy-policy",
        component: () =>
          import("@/views/frontend/pages/pages/privacy-policy.vue"),
      },
      {
        path: "maintenance",
        component: () => import("@/views/frontend/pages/pages/maintenance.vue"),
      },
      {
        path: "coming-soon",
        component: () => import("@/views/frontend/pages/pages/coming-soon.vue"),
      },
    ],
  },
  {
    path: "/pages-booking",
    component: () => import("@/views/frontend/pages/pages/booking/booking.vue"),
    children: [
      { path: "", redirect: "/pages-booking/booking-checkout" },
      {
        path: "booking-checkout",
        component: () =>
          import("@/views/frontend/pages/pages/booking/booking-checkout.vue"),
      },
      {
        path: "booking-addon",
        component: () =>
          import("@/views/frontend/pages/pages/booking/booking-adon.vue"),
      },
      {
        path: "booking-detail",
        component: () =>
          import("@/views/frontend/pages/pages/booking/booking-detail.vue"),
      },
      {
        path: "booking-success",
        component: () =>
          import("@/views/frontend/pages/pages/booking/booking-success.vue"),
      },
      {
        path: "booking-order",
        component: () =>
          import("@/views/frontend/pages/pages/booking/booking-content.vue"),
      },
      {
        path: "booking-payment",
        component: () =>
          import("@/views/frontend/pages/pages/booking/booking-payment.vue"),
      },
      {
        path: "invoice-details",
        component: () =>
          import("@/views/frontend/pages/pages/booking/invoice-details.vue"),
      },
    ],
  },
  {
    path: "/error",
    component: () => import("@/views/frontend/pages/pages/error/error.vue"),
    children: [
      { path: "", redirect: "/error/error-404" },
      {
        path: "error-404",
        component: () =>
          import("@/views/frontend/pages/pages/error/error-404.vue"),
      },
      {
        path: "error-500",
        component: () =>
          import("@/views/frontend/pages/pages/error/error-500.vue"),
      },
    ],
  },
  {
    path: "/user",
    component: () => import("@/views/frontend/pages/user/user.vue"),
    children: [
      { path: "", redirect: "/user/user-dashboard" },
      {
        path: "user-dashboard",
        component: () =>
          import("@/views/frontend/pages/user/user-dashboard.vue"),
      },
      {
        path: "user-bookings",
        component: () =>
          import("@/views/frontend/pages/user/booking/user-bookings.vue"),
      },
      {
        path: "user-booking-upcoming",
        component: () =>
          import(
            "@/views/frontend/pages/user/booking/user-booking-upcoming.vue"
          ),
      },
      {
        path: "user-booking-inprogress",
        component: () =>
          import(
            "@/views/frontend/pages/user/booking/user-booking-inprogress.vue"
          ),
      },
      {
        path: "user-booking-complete",
        component: () =>
          import(
            "@/views/frontend/pages/user/booking/user-booking-complete.vue"
          ),
      },
      {
        path: "user-booking-cancelled",
        component: () =>
          import(
            "@/views/frontend/pages/user/booking/user-booking-cancelled.vue"
          ),
      },
      {
        path: "user-settings",
        component: () =>
          import("@/views/frontend/pages/user/settings/user-settings.vue"),
      },
      {
        path: "user-security",
        component: () =>
          import("@/views/frontend/pages/user/settings/user-security.vue"),
      },
      {
        path: "user-payment",
        component: () => import("@/views/frontend/pages/user/user-payment.vue"),
      },
      {
        path: "user-preferences",
        component: () =>
          import("@/views/frontend/pages/user/settings/user-preferences.vue"),
      },
      {
        path: "user-notifications",
        component: () =>
          import("@/views/frontend/pages/user/settings/user-notifications.vue"),
      },
      {
        path: "user-integration",
        component: () =>
          import("@/views/frontend/pages/user/settings/user-integration.vue"),
      },
      {
        path: "user-reviews",
        component: () => import("@/views/frontend/pages/user/user-reviews.vue"),
      },
      {
        path: "user-wishlist",
        component: () =>
          import("@/views/frontend/pages/user/user-wishlist.vue"),
      },
      {
        path: "user-wallet",
        component: () =>
          import("@/views/frontend/pages/user/user-wallet/user-wallet.vue"),
      },
      {
        path: "user-messages",
        component: () =>
          import("@/views/frontend/pages/user/user-messages.vue"),
      },
      {
        path: "user-upload",
        component: () => import("@/views/frontend/pages/user/user-upload.vue"),
      },
      {
        path: "user-uploaded-cars",
        component: () =>
          import("@/views/frontend/pages/user/user-uploaded-cars.vue"),
      },
    ],
  },

  // // **************  Admin   ************** //

  {
    path: "/admin-template/",
    name: "admin-template/",
    component: () =>
      import("@/views/admin/pages/authentication/admin-login.vue"),
  },
  {
    path: "/admin-template/reset-password",
    name: "admin-template/reset-password",
    component: () =>
      import("@/views/admin/pages/authentication/reset-password.vue"),
  },
  {
    path: "/admin-template/forgot-password",
    name: "admin-template/forgot-password",
    component: () =>
      import("@/views/admin/pages/authentication/forgot-password.vue"),
  },
  {
    path: "/admin-template/otp",
    name: "admin-template/otp",
    component: () => import("@/views/admin/pages/authentication/otp.vue"),
  },
  {
    path: "/admin-template/index",
    name: "admin-template/index",
    component: () =>
      import("@/views/admin/pages/dashboard/admin-dashboard.vue"),
  },
  {
    path: "/admin-template/bookings",
    component: () => import("@/views/admin/pages/bookings/bookings-index.vue"),
    children: [
      { path: "", redirect: "/admin-template/bookings/reservations" },
      {
        path: "reservations",
        component: () =>
          import(
            "@/views/admin/pages/bookings/reservation/reservations-list.vue"
          ),
      },
      {
        path: "reservation-details",
        component: () =>
          import(
            "@/views/admin/pages/bookings/reservation/reservation-details.vue"
          ),
      },
      {
        path: "add-reservation",
        component: () =>
          import(
            "@/views/admin/pages/bookings/reservation/add-reservation/add-reservation.vue"
          ),
      },
      {
        path: "edit-reservation",
        component: () =>
          import(
            "@/views/admin/pages/bookings/reservation/edit-reservation/edit-reservation.vue"
          ),
      },
      {
        path: "calendar",
        component: () => import("@/views/admin/pages/bookings/calendar.vue"),
      },
      {
        path: "quotations",
        component: () =>
          import("@/views/admin/pages/bookings/quotations/quotations-list.vue"),
      },
      {
        path: "add-quotations",
        component: () =>
          import("@/views/admin/pages/bookings/quotations/add-quotations.vue"),
      },
      {
        path: "edit-quotations",
        component: () =>
          import("@/views/admin/pages/bookings/quotations/edit-quotations.vue"),
      },
      {
        path: "quotation-details",
        component: () =>
          import(
            "@/views/admin/pages/bookings/quotations/quotation-details.vue"
          ),
      },
      {
        path: "enquiries",
        component: () =>
          import("@/views/admin/pages/bookings/enquiries-list.vue"),
      },
    ],
  },
  {
    path: "/admin-template/manage",
    component: () => import("@/views/admin/pages/manage/manage-index.vue"),
    children: [
      { path: "", redirect: "/admin-template/manage/customers" },
      {
        path: "customers",
        component: () =>
          import("@/views/admin/pages/manage/customers-list.vue"),
      },
      {
        path: "customers-companies",
        component: () =>
          import("@/views/admin/pages/manage/customers-companies.vue"),
      },
      {
        path: "company-details",
        component: () =>
          import("@/views/admin/pages/manage/company-details.vue"),
      },
      {
        path: "drivers",
        component: () => import("@/views/admin/pages/manage/drivers-list.vue"),
      },
      {
        path: "locations",
        component: () =>
          import("@/views/admin/pages/manage/locations-list.vue"),
      },
      {
        path: "customer-details",
        component: () =>
          import("@/views/admin/pages/manage/customer-details.vue"),
      },
    ],
  },
  {
    path: "/admin-template/icons",
    component: () =>
      import("@/views/admin/pages/uiinterface/icons/ui-icons.vue"),
    children: [
      { path: "", redirect: "/admin-template/icons/icon-fontawesome" },
      {
        path: "icon-fontawesome",
        component: () =>
          import("@/views/admin/pages/uiinterface/icons/icon-fontawesome.vue"),
      },
      {
        path: "icon-feather",
        component: () =>
          import("@/views/admin/pages/uiinterface/icons/icon-feather.vue"),
      },
      {
        path: "icon-ionic",
        component: () =>
          import("@/views/admin/pages/uiinterface/icons/icon-ionic.vue"),
      },
      {
        path: "icon-material",
        component: () =>
          import("@/views/admin/pages/uiinterface/icons/icon-material.vue"),
      },
      {
        path: "icon-pe7",
        component: () =>
          import("@/views/admin/pages/uiinterface/icons/icon-pe7.vue"),
      },
      {
        path: "icon-simpleline",
        component: () =>
          import("@/views/admin/pages/uiinterface/icons/icon-simpleline.vue"),
      },
      {
        path: "icon-weather",
        component: () =>
          import("@/views/admin/pages/uiinterface/icons/icon-weather.vue"),
      },
      {
        path: "icon-typicon",
        component: () =>
          import("@/views/admin/pages/uiinterface/icons/icon-typicon.vue"),
      },
      {
        path: "icon-flag",
        component: () =>
          import("@/views/admin/pages/uiinterface/icons/icon-flag.vue"),
      },
      {
        path: "icon-tabler",
        component: () =>
          import("@/views/admin/pages/uiinterface/icons/icon-tabler.vue"),
      },
      {
        path: "icon-bootstrap",
        component: () =>
          import("@/views/admin/pages/uiinterface/icons/icon-bootstrap.vue"),
      },
      {
        path: "icon-remix",
        component: () =>
          import("@/views/admin/pages/uiinterface/icons/icon-remix.vue"),
      },
    ],
  },
  {
    path: "/admin-template/baseui",
    component: () =>
      import("@/views/admin/pages/uiinterface/baseui/base-ui.vue"),
    children: [
      { path: "", redirect: "/admin-template/baseui/ui-alerts" },
      {
        path: "ui-alerts",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-alerts.vue"),
      },
      {
        path: "ui-accordion",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-accordion.vue"),
      },
      {
        path: "ui-avatar",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-avatar.vue"),
      },
      {
        path: "ui-badges",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-badges.vue"),
      },
      {
        path: "ui-borders",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-borders.vue"),
      },
      {
        path: "ui-buttons",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-buttons.vue"),
      },
      {
        path: "ui-buttons-group",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-buttons-group.vue"),
      },
      {
        path: "ui-breadcrumb",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-breadcrumb.vue"),
      },
      {
        path: "ui-cards",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-cards.vue"),
      },
      {
        path: "ui-carousel",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/baseui/carousel/ui-carousel.vue"
          ),
      },
      {
        path: "ui-colors",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-colors.vue"),
      },
      {
        path: "ui-dropdowns",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-dropdowns.vue"),
      },
      {
        path: "ui-grid",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-grid.vue"),
      },
      {
        path: "ui-images",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-images.vue"),
      },
      {
        path: "ui-lightbox",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/baseui/lightbox/ui-lightbox.vue"
          ),
      },
      {
        path: "ui-media",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-media.vue"),
      },
      {
        path: "ui-modals",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-modals.vue"),
      },
      {
        path: "ui-offcanvas",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-offcanvas.vue"),
      },
      {
        path: "ui-pagination",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-pagination.vue"),
      },
      {
        path: "ui-popovers",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-popovers.vue"),
      },
      {
        path: "ui-progress",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-progress.vue"),
      },
      {
        path: "ui-placeholders",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-placeholders.vue"),
      },
      {
        path: "ui-rangeslider",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-rangeslider.vue"),
      },
      {
        path: "ui-nav-tabs",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-nav-tabs.vue"),
      },
      {
        path: "ui-spinner",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-spinner.vue"),
      },
      {
        path: "ui-sortable",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-sortable.vue"),
      },
      {
        path: "ui-tooltips",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-tooltips.vue"),
      },
      {
        path: "ui-typography",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-typography.vue"),
      },
      {
        path: "ui-video",
        component: () =>
          import("@/views/admin/pages/uiinterface/baseui/ui-video.vue"),
      },
    ],
  },
  {
    path: "/admin-template/advancedui",
    component: () =>
      import("@/views/admin/pages/uiinterface/advancedUI/advanced-ui.vue"),
    children: [
      { path: "", redirect: "/admin-template/advancedui/ui-ribbon" },
      {
        path: "ui-ribbon",
        component: () =>
          import("@/views/admin/pages/uiinterface/advancedUI/ui-ribbon.vue"),
      },
      {
        path: "ui-clipboard",
        component: () =>
          import("@/views/admin/pages/uiinterface/advancedUI/ui-clipboard.vue"),
      },
      {
        path: "ui-text-editor",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/advancedUI/ui-text-editor.vue"
          ),
      },
      {
        path: "ui-counter",
        component: () =>
          import("@/views/admin/pages/uiinterface/advancedUI/ui-counter.vue"),
      },
      {
        path: "ui-scrollbar",
        component: () =>
          import("@/views/admin/pages/uiinterface/advancedUI/ui-scrollbar.vue"),
      },
      {
        path: "ui-rating",
        component: () =>
          import("@/views/admin/pages/uiinterface/advancedUI/ui-rating.vue"),
      },
      {
        path: "ui-stickynote",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/advancedUI/ui-stickynote.vue"
          ),
      },
      {
        path: "ui-timeline",
        component: () =>
          import("@/views/admin/pages/uiinterface/advancedUI/ui-timeline.vue"),
      },
    ],
  },
  {
    path: "/admin-template/tables",
    component: () =>
      import("@/views/admin/pages/uiinterface/tables/ui-tables.vue"),
    children: [
      { path: "", redirect: "/admin-template/tables/data-tables" },
      {
        path: "data-tables",
        component: () =>
          import("@/views/admin/pages/uiinterface/tables/data-tables.vue"),
      },
      {
        path: "tables-basic",
        component: () =>
          import("@/views/admin/pages/uiinterface/tables/tables-basic.vue"),
      },
    ],
  },
  {
    path: "/admin-template/charts",
    component: () =>
      import("@/views/admin/pages/uiinterface/charts/ui-charts.vue"),
    children: [
      { path: "", redirect: "/admin-template/charts/chart-apex" },
      {
        path: "chart-apex",
        component: () =>
          import("@/views/admin/pages/uiinterface/charts/apex/chart-apex.vue"),
      },
      {
        path: "chart-c3",
        component: () =>
          import("@/views/admin/pages/uiinterface/charts/c3/chart-c3.vue"),
      },
      {
        path: "chart-flot",
        component: () =>
          import("@/views/admin/pages/uiinterface/charts/flot/chart-flot.vue"),
      },
      {
        path: "chart-js",
        component: () =>
          import("@/views/admin/pages/uiinterface/charts/js/chart-js.vue"),
      },
      {
        path: "chart-morris",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/charts/morris/chart-morris.vue"
          ),
      },
    ],
  },
  {
    path: "/admin-template/forms",
    component: () =>
      import("@/views/admin/pages/uiinterface/forms/ui-forms.vue"),
    children: [
      { path: "", redirect: "/admin-template/forms/form-basic-inputs" },
      {
        path: "form-basic-inputs",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/forms/form-elements/formbasic/formbasic-input.vue"
          ),
      },
      {
        path: "form-checkbox-radios",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/forms/form-elements/form-checkbox-radios.vue"
          ),
      },
      {
        path: "form-grid-gutters",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/forms/form-elements/form-grid-gutters.vue"
          ),
      },
      {
        path: "form-input-groups",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/forms/form-elements/forminput/form-input.vue"
          ),
      },
      {
        path: "form-select",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/forms/form-elements/form-select.vue"
          ),
      },
      {
        path: "form-mask",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/forms/form-elements/formmask/formmask.vue"
          ),
      },
      {
        path: "form-fileupload",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/forms/form-elements/formfile-upload.vue"
          ),
      },
      {
        path: "form-horizontal",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/forms/layouts/form-horizontal.vue"
          ),
      },
      {
        path: "form-vertical",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/forms/layouts/form-vertical.vue"
          ),
      },
      {
        path: "form-floating-labels",
        component: () =>
          import(
            "@/views/admin/pages/uiinterface/forms/layouts/form-floating-labels.vue"
          ),
      },
      {
        path: "form-validation",
        component: () =>
          import("@/views/admin/pages/uiinterface/forms/form-validation.vue"),
      },
      {
        path: "form-select2",
        component: () =>
          import("@/views/admin/pages/uiinterface/forms/form-select2.vue"),
      },
      {
        path: "form-wizard",
        component: () =>
          import("@/views/admin/pages/uiinterface/forms/form-wizard.vue"),
      },
      {
        path: "form-pickers",
        component: () =>
          import("@/views/admin/pages/uiinterface/forms/form-pickers.vue"),
      },
    ],
  },
  {
    path: "/admin-template/maps",
    component: () => import("@/views/admin/pages/uiinterface/maps/ui-maps.vue"),
    children: [
      { path: "", redirect: "/admin-template/maps/maps-vector" },
      {
        path: "maps-vector",
        component: () =>
          import("@/views/admin/pages/uiinterface/maps/maps-vector.vue"),
      },
      {
        path: "maps-leaflet",
        component: () =>
          import("@/views/admin/pages/uiinterface/maps/maps-leaflet.vue"),
      },
    ],
  },
  {
    path: "/admin-template/other-settings",
    component: () =>
      import("@/views/admin/pages/settings/other-settings/others-settings.vue"),
    children: [
      { path: "", redirect: "/admin-template/other-settings/sitemap" },
      {
        path: "sitemap",
        component: () =>
          import("@/views/admin/pages/settings/other-settings/sitemap.vue"),
      },
      {
        path: "clear-cache",
        component: () =>
          import("@/views/admin/pages/settings/other-settings/clear-cache.vue"),
      },
      {
        path: "storage",
        component: () =>
          import("@/views/admin/pages/settings/other-settings/storage.vue"),
      },
      {
        path: "cronjob",
        component: () =>
          import(
            "@/views/admin/pages/settings/other-settings/cronjob-settings.vue"
          ),
      },
      {
        path: "system-backup",
        component: () =>
          import(
            "@/views/admin/pages/settings/other-settings/system-backup.vue"
          ),
      },
      {
        path: "database-backup",
        component: () =>
          import(
            "@/views/admin/pages/settings/other-settings/database-backup.vue"
          ),
      },
      {
        path: "system-update",
        component: () =>
          import(
            "@/views/admin/pages/settings/other-settings/system-update.vue"
          ),
      },
    ],
  },
  {
    path: "/admin-template/finance-settings",
    component: () =>
      import(
        "@/views/admin/pages/settings/financial-settings/financial-settings.vue"
      ),
    children: [
      {
        path: "",
        redirect: "/admin-template/finance-settings/payment-methods",
      },
      {
        path: "payment-methods",
        component: () =>
          import(
            "@/views/admin/pages/settings/financial-settings/payment-methods.vue"
          ),
      },
      {
        path: "bank-accounts",
        component: () =>
          import(
            "@/views/admin/pages/settings/financial-settings/bank-accounts.vue"
          ),
      },
      {
        path: "tax-rates",
        component: () =>
          import(
            "@/views/admin/pages/settings/financial-settings/tax-rates.vue"
          ),
      },
      {
        path: "currencies",
        component: () =>
          import(
            "@/views/admin/pages/settings/financial-settings/currencies.vue"
          ),
      },
    ],
  },
  {
    path: "/admin-template/system-settings",
    component: () =>
      import(
        "@/views/admin/pages/settings/system-settings/system-settings.vue"
      ),
    children: [
      { path: "", redirect: "/admin-template/system-settings/email-setting" },
      {
        path: "email-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/system-settings/email-setting.vue"
          ),
      },
      {
        path: "email-templates",
        component: () =>
          import(
            "@/views/admin/pages/settings/system-settings/email-templates.vue"
          ),
      },
      {
        path: "sms-gateways",
        component: () =>
          import(
            "@/views/admin/pages/settings/system-settings/sms-gateways.vue"
          ),
      },
      {
        path: "gdpr-cookies",
        component: () =>
          import(
            "@/views/admin/pages/settings/system-settings/gdpr-cookies.vue"
          ),
      },
    ],
  },
  {
    path: "/admin-template/app-settings",
    component: () =>
      import("@/views/admin/pages/settings/app-settings/app-settings.vue"),
    children: [
      { path: "", redirect: "/admin-template/app-settings/invoice-setting" },
      {
        path: "invoice-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/app-settings/invoice-setting.vue"
          ),
      },
      {
        path: "invoice-template",
        component: () =>
          import(
            "@/views/admin/pages/settings/app-settings/invoice-template.vue"
          ),
      },
      {
        path: "signatures-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/app-settings/signatures-setting.vue"
          ),
      },
      {
        path: "custom-fields",
        component: () =>
          import("@/views/admin/pages/settings/app-settings/custom-fields.vue"),
      },
    ],
  },
  {
    path: "/admin-template/rental-settings",
    component: () =>
      import("@/views/admin/pages/settings/rental-settings/rental.vue"),
    children: [
      { path: "", redirect: "/admin-template/rental-settings/rental-setting" },
      {
        path: "rental-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/rental-settings/rental-setting.vue"
          ),
      },
      {
        path: "insurance-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/rental-settings/insurance-setting.vue"
          ),
      },
    ],
  },
  {
    path: "/admin-template/account-settings",
    component: () =>
      import(
        "@/views/admin/pages/settings/account-settings/account-settings.vue"
      ),
    children: [
      {
        path: "",
        redirect: "/admin-template/account-settings/profile-setting",
      },
      {
        path: "profile-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/account-settings/profile-setting.vue"
          ),
      },
      {
        path: "security-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/account-settings/security-settings.vue"
          ),
      },
      {
        path: "notifications-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/account-settings/notifications-settings.vue"
          ),
      },
      {
        path: "tracker-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/account-settings/tracker-settings.vue"
          ),
      },
      {
        path: "integrations-settings",
        component: () =>
          import(
            "@/views/admin/pages/settings/account-settings/integrations-settings.vue"
          ),
      },
    ],
  },
  {
    path: "/admin-template/website-settings",
    component: () =>
      import(
        "@/views/admin/pages/settings/website-settings/website-settings.vue"
      ),
    children: [
      {
        path: "",
        redirect: "/admin-template/website-settings/company-setting",
      },
      {
        path: "company-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/website-settings/company-setting.vue"
          ),
      },
      {
        path: "localization-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/website-settings/localization-setting.vue"
          ),
      },
      {
        path: "prefixes",
        component: () =>
          import("@/views/admin/pages/settings/website-settings/prefixes.vue"),
      },
      {
        path: "seo-setup",
        component: () =>
          import("@/views/admin/pages/settings/website-settings/seo-setup.vue"),
      },
      {
        path: "language-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/website-settings/language-setting.vue"
          ),
      },
      {
        path: "language-setting2",
        component: () =>
          import(
            "@/views/admin/pages/settings/website-settings/language-setting2.vue"
          ),
      },
      {
        path: "maintenance-mode",
        component: () =>
          import(
            "@/views/admin/pages/settings/website-settings/maintenance-mode.vue"
          ),
      },
      {
        path: "login-setting",
        component: () =>
          import(
            "@/views/admin/pages/settings/website-settings/login-setting.vue"
          ),
      },
      {
        path: "ai-configuration",
        component: () =>
          import(
            "@/views/admin/pages/settings/website-settings/ai-configuration.vue"
          ),
      },
      {
        path: "plugin-managers",
        component: () =>
          import(
            "@/views/admin/pages/settings/website-settings/plugin-managers.vue"
          ),
      },
    ],
  },
  {
    path: "/admin-template/reports",
    component: () => import("@/views/admin/pages/reports/admin-report.vue"),
    children: [
      { path: "", redirect: "/admin-template/reports/income-report" },
      {
        path: "income-report",
        component: () =>
          import("@/views/admin/pages/reports/income-report/income-report.vue"),
      },
      {
        path: "earnings-report",
        component: () =>
          import(
            "@/views/admin/pages/reports/earnings-report/earnings-report.vue"
          ),
      },
      {
        path: "rental-report",
        component: () =>
          import("@/views/admin/pages/reports/rental-report/rental-report.vue"),
      },
    ],
  },
  {
    path: "/admin-template/users",
    component: () => import("@/views/admin/pages/user/admin-user.vue"),
    children: [
      { path: "", redirect: "/admin-template/users/users-list" },
      {
        path: "users-list",
        component: () => import("@/views/admin/pages/user/users-list.vue"),
      },
      {
        path: "roles-permissions",
        component: () =>
          import("@/views/admin/pages/user/roles-permissions.vue"),
      },
      {
        path: "permissions",
        component: () => import("@/views/admin/pages/user/permissions.vue"),
      },
    ],
  },
  {
    path: "/admin-template/support",
    component: () => import("@/views/admin/pages/support/admin-support.vue"),
    children: [
      { path: "", redirect: "/admin-template/others/chat" },
      {
        path: "contact-messages",
        component: () => import("@/views/admin/pages/others/chat.vue"),
      },
      {
        path: "announcements",
        component: () =>
          import("@/views/admin/pages/support/announcements.vue"),
      },
      {
        path: "tickets",
        component: () => import("@/views/admin/pages/support/tickets.vue"),
      },
      {
        path: "tickets-details",
        component: () =>
          import("@/views/admin/pages/support/tickets-details.vue"),
      },
    ],
  },
  {
    path: "/admin-template/cms",
    component: () => import("@/views/admin/pages/crm/admin-crm.vue"),
    children: [
      { path: "", redirect: "/admin-template/crm/admin-crm" },
      {
        path: "pages",
        component: () => import("@/views/admin/pages/crm/admin-pages.vue"),
      },
      {
        path: "add-pages",
        component: () => import("@/views/admin/pages/crm/add-pages.vue"),
      },
      {
        path: "edit-pages",
        component: () => import("@/views/admin/pages/crm/edit-pages.vue"),
      },
      {
        path: "menu-management",
        component: () => import("@/views/admin/pages/crm/menu-management.vue"),
      },
      {
        path: "testimonials",
        component: () => import("@/views/admin/pages/crm/testimonials.vue"),
      },
    ],
  },
  {
    path: "/admin-template/blogs",
    component: () => import("@/views/admin/pages/crm/blogs/admin-blogs.vue"),
    children: [
      { path: "", redirect: "/admin-template/blogs/blogs" },
      {
        path: "blogs",
        component: () => import("@/views/admin/pages/crm/blogs/blogs.vue"),
      },
      {
        path: "add-blog",
        component: () => import("@/views/admin/pages/crm/blogs/add-blog.vue"),
      },
      {
        path: "edit-blog",
        component: () => import("@/views/admin/pages/crm/blogs/edit-blog.vue"),
      },
      {
        path: "blog-categories",
        component: () =>
          import("@/views/admin/pages/crm/blogs/blog-categories.vue"),
      },
      {
        path: "blog-comments",
        component: () =>
          import("@/views/admin/pages/crm/blogs/blog-comments.vue"),
      },
      {
        path: "blog-tags",
        component: () => import("@/views/admin/pages/crm/blogs/blog-tags.vue"),
      },
    ],
  },
  {
    path: "/admin-template/locations",
    component: () =>
      import("@/views/admin/pages/crm/locations/admin-locations.vue"),
    children: [
      { path: "", redirect: "/admin-template/locations/countries" },
      {
        path: "countries",
        component: () =>
          import("@/views/admin/pages/crm/locations/countries.vue"),
      },
      {
        path: "state",
        component: () => import("@/views/admin/pages/crm/locations/state.vue"),
      },
      {
        path: "city",
        component: () => import("@/views/admin/pages/crm/locations/city.vue"),
      },
    ],
  },
  {
    path: "/admin-template/faq",
    component: () => import("@/views/admin/pages/crm/faq/admin-faq.vue"),
    children: [
      { path: "", redirect: "/admin-template/faq/faq" },
      {
        path: "faq",
        component: () => import("@/views/admin/pages/crm/faq/faq.vue"),
      },
      {
        path: "faq-category",
        component: () =>
          import("@/views/admin/pages/crm/faq/faq-categories.vue"),
      },
    ],
  },
  {
    path: "/admin-template/others",
    component: () => import("@/views/admin/pages/others/others.vue"),
    children: [
      { path: "", redirect: "/admin-template/others/chat" },
      {
        path: "chat",
        component: () => import("@/views/admin/pages/others/chat.vue"),
      },
      {
        path: "coupons",
        component: () => import("@/views/admin/pages/others/coupons.vue"),
      },
      {
        path: "newsletters",
        component: () => import("@/views/admin/pages/others/newsletters.vue"),
      },
    ],
  },
  {
    path: "/admin-template/finance",
    component: () => import("@/views/admin/pages/finance/finance.vue"),
    children: [
      { path: "", redirect: "/admin-template/finance/invoices" },
      {
        path: "invoices",
        component: () => import("@/views/admin/pages/finance/invoices.vue"),
      },
      {
        path: "add-invoice",
        component: () => import("@/views/admin/pages/finance/add-invoice.vue"),
      },
      {
        path: "edit-invoice",
        component: () => import("@/views/admin/pages/finance/edit-invoice.vue"),
      },
      {
        path: "payments",
        component: () => import("@/views/admin/pages/finance/payments.vue"),
      },
      {
        path: "invoice-details",
        component: () =>
          import("@/views/admin/pages/finance/invoice-details.vue"),
      },
    ],
  },
  {
    path: "/admin-template/rentals",
    component: () => import("@/views/admin/pages/rental/rental.vue"),
    children: [
      { path: "", redirect: "/admin-template/rentals/reviews" },
      {
        path: "reviews",
        component: () => import("@/views/admin/pages/rental/reviews.vue"),
      },
      {
        path: "maintenance",
        component: () => import("@/views/admin/pages/rental/maintenance.vue"),
      },
      {
        path: "tracking",
        component: () => import("@/views/admin/pages/rental/tracking.vue"),
      },
      {
        path: "inspections",
        component: () => import("@/views/admin/pages/rental/inspections.vue"),
      },
      {
        path: "pricing",
        component: () => import("@/views/admin/pages/rental/pricing.vue"),
      },
      {
        path: "extra-services",
        component: () =>
          import("@/views/admin/pages/rental/extra-services.vue"),
      },
      {
        path: "cars",
        component: () =>
          import("@/views/admin/pages/rental/cars/cars-list.vue"),
      },
      {
        path: "pending-cars",
        component: () =>
          import("@/views/admin/pages/rental/cars/pending-cars.vue"),
      },
      {
        path: "add-car",
        component: () => import("@/views/admin/pages/rental/cars/add-car.vue"),
      },
      {
        path: "edit-car/:id",
        component: () => import("@/views/admin/pages/rental/cars/edit-car.vue"),
      },
      {
        path: "car-details/:id",
        component: () => import("@/views/admin/pages/rental/car-details.vue"),
      },
    ],
  },
  {
    path: "/admin-template/car-attributes",
    component: () =>
      import("@/views/admin/pages/rental/car-attributes/car-attributes.vue"),
    children: [
      { path: "", redirect: "/admin-template/car-attributes/brands" },
      {
        path: "safety-features",
        component: () =>
          import(
            "@/views/admin/pages/rental/car-attributes/safety-features.vue"
          ),
      },
      {
        path: "features",
        component: () =>
          import("@/views/admin/pages/rental/car-attributes/features.vue"),
      },
      {
        path: "doors",
        component: () =>
          import("@/views/admin/pages/rental/car-attributes/doors.vue"),
      },
      {
        path: "cylinders",
        component: () =>
          import("@/views/admin/pages/rental/car-attributes/cylinders.vue"),
      },
      {
        path: "seats",
        component: () =>
          import("@/views/admin/pages/rental/car-attributes/seats.vue"),
      },
      {
        path: "steering",
        component: () =>
          import("@/views/admin/pages/rental/car-attributes/steering.vue"),
      },
      {
        path: "color",
        component: () =>
          import("@/views/admin/pages/rental/car-attributes/color.vue"),
      },
      {
        path: "fuel",
        component: () =>
          import("@/views/admin/pages/rental/car-attributes/fuel.vue"),
      },
      {
        path: "transmissions",
        component: () =>
          import("@/views/admin/pages/rental/car-attributes/transmissions.vue"),
      },
      {
        path: "models",
        component: () =>
          import("@/views/admin/pages/rental/car-attributes/models.vue"),
      },
      {
        path: "types",
        component: () =>
          import("@/views/admin/pages/rental/car-attributes/types.vue"),
      },
      {
        path: "brands",
        component: () =>
          import("@/views/admin/pages/rental/car-attributes/brands.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory("/vue/template/"),
  linkActiveClass: "active",
  routes,
});

// Importa il composable di autenticazione
import { useAuth } from "@/composables/useAuth";

router.beforeEach((to, from, next) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Inizializza l'utente se non è già fatto
  const { initUser, requireAuth, requireAdmin } = useAuth();
  initUser();

  // Proteggi le route admin
  if (to.path.startsWith("/admin-template/")) {
    if (!requireAdmin()) {
      return; // La guardia gestisce il reindirizzamento
    }
  }

  // Proteggi le route user
  if (to.path.startsWith("/user/")) {
    if (!requireAuth()) {
      return; // La guardia gestisce il reindirizzamento
    }
  }

  next();
});
