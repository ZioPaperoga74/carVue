import { createApp } from "vue";
import { router } from "@/router";
import App from "./App.vue";
import VueFeather from "vue-feather";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import VueSelect from "vue3-select-component";
import FlagIcon from "vue-flag-icon";
import VueApexCharts from "vue3-apexcharts";
import DatePicker from "vue3-datepicker";
import Vue3Autocounter from "vue3-autocounter";
import SimpleLineIcons from "vue-simple-line";

/********* components **********/
import Breadcrumb from "@/components/breadcrumb.vue";
import UserBreadcrumb from "@/components/user-breadcrumb.vue";
import CarCard from "@/components/car-card.vue";

/********* Layouts components **********/
import Footer from "@/views/frontend/layouts/footer.vue";
import Auth_Footer from "@/views/frontend/layouts/auth-footer.vue";
import BlogSidebar from "@/views/frontend/layouts/blog-sidebar.vue";
import Scroll from "@/views/frontend/layouts/scroll.vue";
import UserTabset from "@/views/frontend/layouts/user-tabset.vue";
import BookingTabset from "@/views/frontend/layouts/booking-tabset.vue";
import SettingsSidebar from "@/views/frontend/layouts/settings-sidebar.vue";
import LayoutsHeader from "@/views/frontend/layouts/layouts-header.vue";

import MenuHeader from "@/views/frontend/layouts/menu-header.vue";

import Index_2_Banner from "@/views/frontend/pages/index-2/index-2-banner.vue";
import Banner_Carousel from "@/views/frontend/pages/index-2/banner-carousel.vue";
import Yacht_Categories from "@/views/frontend/pages/index-2/yacht-categories.vue";
import Renting_Yacht from "@/views/frontend/pages/index-2/renting-yacht.vue";
import Charter_Company from "@/views/frontend/pages/index-2/charter-company.vue";
import Top_Feature from "@/views/frontend/pages/index-2/top-feature.vue";
import Boat_Info from "@/views/frontend/pages/index-2/boat-info.vue";
import Poplar_Location from "@/views/frontend/pages/index-2/poplar-location.vue";
import Index_Yacht from "@/views/frontend/pages/index-2/index-yacht.vue";
import More_Boat from "@/views/frontend/pages/index-2/more-boat.vue";
import Boat_Market from "@/views/frontend/pages/index-2/boat-market.vue";
import Client_Review from "@/views/frontend/pages/index-2/client-review.vue";
import Faq_Section from "@/views/frontend/pages/index-2/faq-section.vue";
import Seasonal_Section from "@/views/frontend/pages/index-2/seasonal-section.vue";
import News_Section from "@/views/frontend/pages/index-2/news-section.vue";
import Index_2_Footer from "@/views/frontend/pages/index-2/index-2-footer.vue";

import IndexThreeBanner from "@/views/frontend/pages/index-3/home-three-banner.vue";
import IndexThreeCategory from "@/views/frontend/pages/index-3/home-three-category.vue";
import IndexThreeFeatured from "@/views/frontend/pages/index-3/home-three-featured.vue";
import IndexThreeChoose from "@/views/frontend/pages/index-3/home-three-choose.vue";
import IndexThreePopular from "@/views/frontend/pages/index-3/home-three-popular.vue";
import IndexThreeQuote from "@/views/frontend/pages/index-3/home-three-quote.vue";
import IndexThreeRecommended from "@/views/frontend/pages/index-3/home-three-recommended.vue";
import IndexThreeFaq from "@/views/frontend/pages/index-3/home-three-faq.vue";
import IndexThreePricing from "@/views/frontend/pages/index-3/home-three-pricing.vue";
import IndexThreeAbout from "@/views/frontend/pages/index-3/home-three-about.vue";
import IndexThreeBlog from "@/views/frontend/pages/index-3/home-three-blog.vue";
import IndexThreeFooter from "@/views/frontend/pages/index-3/index-three-footer.vue";

/********* Pages components **********/
import IndexBanner from "@/views/frontend/pages/index/index-banner.vue";
import IndexService from "@/views/frontend/pages/index/index-service.vue";
import IndexPopular from "@/views/frontend/pages/index/index-popular.vue";
import Mazda from "@/views/frontend/pages/index/mazda.vue";
import Audi from "@/views/frontend/pages/index/audi.vue";
import Honda from "@/views/frontend/pages/index/honda.vue";
import Toyota from "@/views/frontend/pages/index/toyota.vue";
import Acura from "@/views/frontend/pages/index/acura.vue";
import Tesla from "@/views/frontend/pages/index/tesla.vue";
import IndexCartypes from "@/views/frontend/pages/index/index-cartypes.vue";
import IndexRental from "@/views/frontend/pages/index/index-rental.vue";
import IndexChoose from "@/views/frontend/pages/index/index-choose.vue";
import HomeFaq from "@/views/frontend/pages/index/home-faq.vue";
import HomePricing from "@/views/frontend/pages/index/home-pricing.vue";
import IndexBlog from "@/views/frontend/pages/index/index-blog.vue";

import indexfourBanner from "@/views/frontend/pages/index-4/indexfour-banner.vue";
import categoryFour from "@/views/frontend/pages/index-4/category-four.vue";
import featureFour from "@/views/frontend/pages/index-4/feature-four.vue";
import carFour from "@/views/frontend/pages/index-4/car-four.vue";
import brandFour from "@/views/frontend/pages/index-4/brand-four.vue";
import rentalFour from "@/views/frontend/pages/index-4/rental-four.vue";
import popularFour from "@/views/frontend/pages/index-4/popular-four.vue";
import testimonialFour from "@/views/frontend/pages/index-4/testimonial-four.vue";
import priceFour from "@/views/frontend/pages/index-4/price-four.vue";

import AboutExperiences from "@/views/frontend/pages/pages/about-us/aboutexperiences.vue";
import Service from "@/views/frontend/pages/pages/about-us/service.vue";
import Factnumbers from "@/views/frontend/pages/pages/about-us/factnumbers.vue";
import Testimonial from "@/views/frontend/pages/pages/about-us/testimonial.vue";
import Faq from "@/views/frontend/pages/pages/about-us/faq.vue";
import Choose_Us from "@/views/frontend/pages/pages/about-us/choose-us.vue";
import Map_Filter from "@/views/frontend/pages/listing/listing-map/map-filter.vue";
import Map_Sort from "@/views/frontend/pages/listing/listing-map/map-sort.vue";
import Listing_Filter from "@/views/frontend/pages/listing/listing-filter.vue";
import Listing_Sidebar from "@/views/frontend/pages/listing/listing-sidebar.vue";
import Listing_Head from "@/views/frontend/pages/listing/listing-details/listing-head.vue";
import Listing_CarPhoto from "@/views/frontend/pages/listing/listing-details/listing-carphoto.vue";
import Listing_Specifications from "@/views/frontend/pages/listing/listing-details/listing-specifications.vue";
import Listing_Gallery from "@/views/frontend/pages/listing/listing-details/listing-gallery.vue";
import Listing_Features from "@/views/frontend/pages/listing/listing-details/listing-features.vue";
import Listing_Description from "@/views/frontend/pages/listing/listing-details/listing-description.vue";
import Listing_Review from "@/views/frontend/pages/listing/listing-details/listing-review.vue";
import Listingdetails_Sidebar from "@/views/frontend/pages/listing/listing-details/listingdetails-sidebar.vue";
import Listing from "@/views/frontend/pages/listing/listing-details/listing.vue";
import UserTable from "@/views/frontend/pages/user/user-wallet/user-table.vue";
import Booking_Add from "@/views/frontend/pages/pages/booking/booking-add.vue";

/********* Modal components **********/

import Booking_Modal from "@/components/modal/booking-modal.vue";
import Booking_Payment_Modal from "@/components/modal/booking-payment-modal.vue";
import Listing_Modal from "@/components/modal/listing-modal.vue";
import UserBookingsModal from "@/components/modal/user-bookings-modal.vue";
import UserPaymentModal from "@/components/modal/user-payment-modal.vue";
import UserSecurityModal from "@/components/modal/user-security-modal.vue";
import UserReviewsModal from "@/components/modal/user-reviews-modal.vue";
import UserWalletModal from "@/components/modal/user-wallet-modal.vue";
import UserMessagesModal from "@/components/modal/user-messages-modal.vue";

/******** Admin Module  *******/
import Inputsize from "@/views/admin/pages/uiinterface/forms/form-elements/formbasic/input-size.vue";
import Carouselthree from "@/views/admin/pages/uiinterface/baseui/carousel/carousel-three.vue";
import Carouseltwo from "@/views/admin/pages/uiinterface/baseui/carousel/carousel-two.vue";
import Carouselone from "@/views/admin/pages/uiinterface/baseui/carousel/carousel-one.vue";
import LightBoxOne from "@/views/admin/pages/uiinterface/baseui/lightbox/lightbox-one.vue";
import LightBoxTwo from "@/views/admin/pages/uiinterface/baseui/lightbox/lightbox-two.vue";

import IncomeTable from "@/views/admin/pages/reports/income-report/income-table.vue";
import ExpenseTable from "@/views/admin/pages/reports/income-report/expense-table.vue";
import earningsTable from "@/views/admin/pages/reports/earnings-report/earnings-table.vue";
import rentalTable from "@/views/admin/pages/reports/rental-report/rental-table.vue";
import activeCoupons from "@/views/admin/pages/others/active-coupons.vue";
import completedCoupons from "@/views/admin/pages/others/completed-coupons.vue";
import carGallery from "@/views/admin/pages/rental/car-gallery.vue";
import videoGallery from "@/views/admin/pages/rental/video-gallery.vue";

/************ Admin Modal  *************/
import sitemapModal from "@/components/modal/admin/sitemap-modal.vue";
import storageModal from "@/components/modal/admin/storage-modal.vue";
import SystemBackupModal from "@/components/modal/admin/system-backup-modal.vue";
import paymentMethodsModal from "@/components/modal/admin/payment-methods-modal.vue";
import BankAccountsModal from "@/components/modal/admin/bank-accounts-modal.vue";
import taxRatesModal from "@/components/modal/admin/tax-rates-modal.vue";
import currenciesModal from "@/components/modal/admin/currencies-modal.vue";
import emailSettingsModal from "@/components/modal/admin/email-settings-modal.vue";
import securitySettingModal from "@/components/modal/admin/security-setting-modal.vue";
import languageSettingModal from "@/components/modal/admin/language-setting-modal.vue";
import smsGatewayModal from "@/components/modal/admin/sms-gateway-modal.vue";
import invoiceTemplateModal from "@/components/modal/admin/invoice-template-modal.vue";
import customFieldsModal from "@/components/modal/admin/custom-fields-modal.vue";
import insuranceModal from "@/components/modal/admin/insurance-modal.vue";
import loginModal from "@/components/modal/admin/login-modal.vue";
import pluginModal from "@/components/modal/admin/plugin-modal.vue";
import ticketsModal from "@/components/modal/admin/tickets-modal.vue";
import menuModal from "@/components/modal/admin/menu-modal.vue";
import blogCategoriesModal from "@/components/modal/admin/blog-categories-modal.vue";
import blogTagsModal from "@/components/modal/admin/blog-tags-modal.vue";
import countriesModal from "@/components/modal/admin/countries-modal.vue";
import cityModal from "@/components/modal/admin/city-modal.vue";
import stateModal from "@/components/modal/admin/state-modal.vue";
import testimonialsModal from "@/components/modal/admin/testimonials-modal.vue";
import couponsModal from "@/components/modal/admin/coupons-modal.vue";
import invoiceModal from "@/components/modal/admin/invoice-modal.vue";
import faqModal from "@/components/modal/admin/faq-modal.vue";
import pricingModal from "@/components/modal/admin/pricing-modal.vue";
import maintenanceModal from "@/components/modal/admin/maintenance-modal.vue";
import inspectionsModal from "@/components/modal/admin/inspections-modal.vue";
import featuresModal from "@/components/modal/admin/features-modal.vue";
import doorModal from "@/components/modal/admin/door-modal.vue";
import cylindersModal from "@/components/modal/admin/cylinders-modal.vue";
import seatsModal from "@/components/modal/admin/seats-modal.vue";
import steeringModal from "@/components/modal/admin/steering-modal.vue";
import fuelModal from "@/components/modal/admin/fuel-modal.vue";
import transmissionsModal from "@/components/modal/admin/transmissions-modal.vue";
import modelsModal from "@/components/modal/admin/models-modal.vue";
import typesModal from "@/components/modal/admin/types-modal.vue";
import brandsModal from "@/components/modal/admin/brands-modal.vue";
import safetyFeaturesModal from "@/components/modal/admin/safety-features-modal.vue";
import extraServicesModal from "@/components/modal/admin/extra-services-modal.vue";
import faqcategoriesModal from "@/components/modal/admin/faq-categories-modal.vue";
import AddReservationModal from "@/components/modal/admin/add-reservation-modal.vue";
import CalendarModal from "@/components/modal/admin/calendar-modal.vue";
import rolesModal from "@/components/modal/admin/roles-modal.vue";
import AddQuotationsModal from "@/components/modal/admin/add-quotations-modal.vue";
import CustomerModal from "@/components/modal/admin/customer-modal.vue";
import CustomersCompanyModal from "@/components/modal/admin/customers-company-modal.vue";
import CompanyDetailsModal from "@/components/modal/admin/company-details-modal.vue";
import DriversModal from "@/components/modal/admin/drivers-modal.vue";
import LocationsModal from "@/components/modal/admin/locations-modal.vue";
import AddCarModal from "@/components/modal/add-car-modal.vue";
import CustomerDetailsModal from "@/components/modal/admin/customer-details-modal.vue";

/********* Admin Layouts components **********/

import AdminHeader from "@/views/admin/layouts/admin-header.vue";
import AdminSidebar from "@/views/admin/layouts/admin-sidebar.vue";
import SidebarMenu from "@/views/admin/layouts/sidebar-menu.vue";
import adminsettingsSidebar from "@/views/admin/pages/settings/adminsettings-sidebar.vue";

/********* Admin Pages components **********/

import LiveTracking from "@/views/admin/pages/dashboard/live-tracking.vue";
import ExtraService from "@/views/admin/pages/bookings/reservation/add-reservation/extra-service.vue";
import BillingDetails from "@/views/admin/pages/bookings/reservation/add-reservation/billing-details.vue";
import EditExtraService from "@/views/admin/pages/bookings/reservation/edit-reservation/edit-extra-service.vue";
import EditBillingDetails from "@/views/admin/pages/bookings/reservation/edit-reservation/edit-billing-details.vue";

// plugins
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "ionicons-npm/css/ionicons.css";
import "typicons.font/src/font/typicons.css";
import "weathericons/css/weather-icons.css";
import "pe7-icon/dist/dist/pe-icon-7-stroke.css";
import "boxicons/css/boxicons.min.css";
import "@/assets/css/feather.css";
import "@/assets/admin/css/sticky.css";

if (window.location.href.includes("/admin-template/")) {
  import("@/assets/admin/scss/main.scss");
  import("@/assets/admin/css/tabler-icons.css");
} else {
  import("@/assets/scss/main.scss");
}

const app = createApp(App);

/********* components **********/
app.component("breadcrumb", Breadcrumb);
app.component("user-breadcrumb", UserBreadcrumb);

/********* Layouts components **********/
app.component("layout-footer", Footer);
app.component("auth-footer", Auth_Footer);
app.component("blog-sidebar", BlogSidebar);
app.component("scroll", Scroll);
app.component("user-tabset", UserTabset);
app.component("booking-tabset", BookingTabset);
app.component("settings-sidebar", SettingsSidebar);

app.component("menu-header", MenuHeader);
app.component("layouts-header", LayoutsHeader);

app.component("index-2-banner", Index_2_Banner);
app.component("banner-carousel", Banner_Carousel);
app.component("yacht-categories", Yacht_Categories);
app.component("renting-yacht", Renting_Yacht);
app.component("charter-company", Charter_Company);
app.component("top-feature", Top_Feature);
app.component("boat-info", Boat_Info);
app.component("poplar-location", Poplar_Location);
app.component("index-yacht", Index_Yacht);
app.component("more-boat", More_Boat);
app.component("boat-market", Boat_Market);
app.component("client-review", Client_Review);
app.component("faq-section", Faq_Section);
app.component("seasonal-section", Seasonal_Section);
app.component("news-section", News_Section);
app.component("index-2-footer", Index_2_Footer);

/********* Pages components **********/
app.component("index-banner", IndexBanner);
app.component("index-service", IndexService);
app.component("index-popular", IndexPopular);
app.component("mazda", Mazda);
app.component("audi", Audi);
app.component("honda", Honda);
app.component("toyota", Toyota);
app.component("acura", Acura);
app.component("tesla", Tesla);
app.component("index-cartypes", IndexCartypes);
app.component("index-rental", IndexRental);
app.component("index-choose", IndexChoose);
app.component("home-faq", HomeFaq);
app.component("home-pricing", HomePricing);
app.component("index-blog", IndexBlog);
app.component("indexfour-banner", indexfourBanner);
app.component("category-four", categoryFour);
app.component("feature-four", featureFour);
app.component("car-four", carFour);
app.component("brand-four", brandFour);
app.component("rental-four", rentalFour);
app.component("popular-four", popularFour);
app.component("testimonial-four", testimonialFour);
app.component("price-four", priceFour);

app.component("aboutexperiences", AboutExperiences);
app.component("service", Service);
app.component("factnumbers", Factnumbers);
app.component("choose-us", Choose_Us);
app.component("testimonial", Testimonial);
app.component("faq", Faq);
app.component("map-sort", Map_Sort);
app.component("map-filter", Map_Filter);
app.component("listing-filter", Listing_Filter);
app.component("listing-sidebar", Listing_Sidebar);
app.component("listing-head", Listing_Head);
app.component("listing-carphoto", Listing_CarPhoto);
app.component("listing-specifications", Listing_Specifications);
app.component("listing-gallery", Listing_Gallery);
app.component("listing-features", Listing_Features);
app.component("listing-description", Listing_Description);
app.component("listing-review", Listing_Review);
app.component("listingdetails-sidebar", Listingdetails_Sidebar);
app.component("listing", Listing);
app.component("user-table", UserTable);
app.component("booking-add", Booking_Add);

app.component("index-three-banner", IndexThreeBanner);
app.component("index-three-category", IndexThreeCategory);
app.component("index-three-featured", IndexThreeFeatured);
app.component("index-three-choose", IndexThreeChoose);
app.component("index-three-popular", IndexThreePopular);
app.component("index-three-quote", IndexThreeQuote);
app.component("index-three-recommended", IndexThreeRecommended);
app.component("index-three-faq", IndexThreeFaq);
app.component("index-three-pricing", IndexThreePricing);
app.component("index-three-about", IndexThreeAbout);
app.component("index-three-blog", IndexThreeBlog);
app.component("index-three-footer", IndexThreeFooter);

/********* Modal components **********/

app.component("listing-modal", Listing_Modal);
app.component("booking-modal", Booking_Modal);
app.component("booking-payment-modal", Booking_Payment_Modal);
app.component("user-bookings-modal", UserBookingsModal);
app.component("user-payment-modal", UserPaymentModal);
app.component("user-security-modal", UserSecurityModal);
app.component("user-reviews-modal", UserReviewsModal);
app.component("user-wallet-modal", UserWalletModal);
app.component("user-messages-modal", UserMessagesModal);

/********* Admin Layouts components **********/

app.component("admin-header", AdminHeader);
app.component("admin-sidebar", AdminSidebar);
app.component("sidebar-menu", SidebarMenu);
app.component("adminsettings-sidebar", adminsettingsSidebar);

/********* Admin Pages components **********/

app.component("live-tracking", LiveTracking);
app.component("extra-service", ExtraService);
app.component("billing-details", BillingDetails);
app.component("edit-extra-service", EditExtraService);
app.component("edit-billing-details", EditBillingDetails);

/******* Admin Module  *******/
app.component("input-size", Inputsize);
app.component("carousel-one", Carouselone);
app.component("carousel-two", Carouseltwo);
app.component("carousel-three", Carouselthree);
app.component("lightbox-one", LightBoxOne);
app.component("lightbox-two", LightBoxTwo);

app.component("income-table", IncomeTable);
app.component("expense-table", ExpenseTable);
app.component("earnings-table", earningsTable);
app.component("rental-table", rentalTable);
app.component("active-coupons", activeCoupons);
app.component("completed-coupons", completedCoupons);
app.component("car-gallery", carGallery);
app.component("video-gallery", videoGallery);

/************ Admin Modal  *************/
app.component("sitemap-modal", sitemapModal);
app.component("storage-modal", storageModal);
app.component("system-backup-modal", SystemBackupModal);
app.component("payment-methods-modal", paymentMethodsModal);
app.component("bank-accounts-modal", BankAccountsModal);
app.component("tax-rates-modal", taxRatesModal);
app.component("currencies-modal", currenciesModal);
app.component("email-settings-modal", emailSettingsModal);
app.component("security-setting-modal", securitySettingModal);
app.component("language-setting-modal", languageSettingModal);
app.component("sms-gateway-modal", smsGatewayModal);
app.component("invoice-template-modal", invoiceTemplateModal);
app.component("custom-fields-modal", customFieldsModal);
app.component("insurance-modal", insuranceModal);
app.component("login-modal", loginModal);
app.component("plugin-modal", pluginModal);
app.component("tickets-modal", ticketsModal);
app.component("menu-modal", menuModal);
app.component("blog-categories-modal", blogCategoriesModal);
app.component("blog-tags-modal", blogTagsModal);
app.component("add-reservation-modal", AddReservationModal);
app.component("countries-modal", countriesModal);
app.component("city-modal", cityModal);
app.component("state-modal", stateModal);
app.component("testimonials-modal", testimonialsModal);
app.component("coupons-modal", couponsModal);
app.component("invoice-modal", invoiceModal);
app.component("faq-modal", faqModal);
app.component("pricing-modal", pricingModal);
app.component("maintenance-modal", maintenanceModal);
app.component("inspections-modal", inspectionsModal);
app.component("features-modal", featuresModal);
app.component("door-modal", doorModal);
app.component("cylinders-modal", cylindersModal);
app.component("seats-modal", seatsModal);
app.component("steering-modal", steeringModal);
app.component("fuel-modal", fuelModal);
app.component("transmissions-modal", transmissionsModal);
app.component("models-modal", modelsModal);
app.component("types-modal", typesModal);
app.component("brands-modal", brandsModal);
app.component("extra-services-modal", extraServicesModal);
app.component("safety-features-modal", safetyFeaturesModal);
app.component("faq-categories-modal", faqcategoriesModal);
app.component("calendar-modal", CalendarModal);
app.component("roles-modal", rolesModal);
app.component("add-quotations-modal", AddQuotationsModal);
app.component("customer-modal", CustomerModal);
app.component("customer-company-modal", CustomersCompanyModal);
app.component("company-details-modal", CompanyDetailsModal);
app.component("drivers-modal", DriversModal);
app.component("locations-modal", LocationsModal);
app.component("add-car-modal", AddCarModal);
app.component("customer-details-modal", CustomerDetailsModal);

app.component(VueFeather.name, VueFeather);
app.component("vue3-autocounter", Vue3Autocounter);
app.component("vue-select", VueSelect);
app.component("datepicker", DatePicker);
app.use(FlagIcon);
app.use(VueApexCharts).use(Antd).use(SimpleLineIcons);
app.use(router).mount("#app");

/********* Components **********/
app.component("car-card", CarCard);
