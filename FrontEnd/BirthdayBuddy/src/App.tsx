import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./config/scrollToTop";
import "./App.scss";
import axios from "axios";

// Import Guest Pages
import GuestHomePage from "./Web_Application/Guest Page/components/pages/home-page/guest-home-page";
import GuestRestaurantListPage from "./Web_Application/Guest Page/components/pages/restaurant-list-page/guest-restaurant-list-page";
import GuestRestaurantDetailsPage from "./Web_Application/Guest Page/components/pages/restaurant-details-page/restaurant-details-page";

// Import Authorized Pages
import LoginPage from "./Web_Application/Authorization Page/components/pages/login-page";
import RegisterPage from "./Web_Application/Authorization Page/components/pages/register-page";
import ForgetPassword from "./Web_Application/Authorization Page/components/molecules/forget-password/forgetpw";
import SignUpHostPage from "./Web_Application/Authorization Page/components/pages/signuphost-page";

// Import Customer Pages
import CustomerHome from "./Web_Application/Customer Page/page/home-page/customer-home-page";
import CustomerRestaurantListPage from "./Web_Application/Customer Page/page/restaurant-page/customer-restaurant-page";
import CustomerRestaurantDetailsPage from "./Web_Application/Customer Page/page/customer-restaurant-details-page/customer-restaurant-details-page";
import CustomerCheckoutPage from "./Web_Application/Customer Page/page/checkout-page/customer-checkout-page";
import MomoPaymentPage from "./Web_Application/Customer Page/page/momo-payment-page/momo-payment-page";
import BookingInformationPage from "./Web_Application/Customer Page/page/booking-information-page/booking-information-page";
import BookingSuccessPage from "./Web_Application/Customer Page/page/booking-success-page/booking-success-page";
import BookingListPage from "./Web_Application/Customer Page/page/booking-list-page/booking-list-page";
import PartyNotification from "./Web_Application/Customer Page/molecules/party-notification/party-notification";
import UserInformationPage from "./Web_Application/Customer Page/page/user-information-page/user-information-page";

//import Party Hosts Pages
import CreateFoodMenuPage from "./Web_Application/Party Host Page/components/pages/host-create-food-menu-page/create-food-menu-page";
import HostPartyListPage from "./Web_Application/Party Host Page/components/pages/host-party-list-page/host-party-list-page";
import HostCreatePartyPage from "./Web_Application/Party Host Page/components/pages/host-create-party-page/host-create-party-page";
import HostCreatePartyThemePage from "./Web_Application/Party Host Page/components/pages/host-create-party-theme-page/host-create-party-theme-page";
import HostCreateSpecialServicePage from "./Web_Application/Party Host Page/components/pages/host-create-special-service-page/host-create-special-service-page";
import RestaurantBookingTracking from "./Web_Application/Party Host Page/components/molecules/restaurant-booking-tracking/restaurant-booking-tracking";
import RestaurantBookingSuccess from "./Web_Application/Party Host Page/components/molecules/restaurant-booking-success/restaurant-booking-success";

//import Administator Pages

// Assuming you have a function to check if the user is authenticated
const isAuthenticated = () => {
  const user = sessionStorage.getItem("loginedUser");
  return user !== null; // Return true if the user is logged in, false otherwise
};

function App() {
  const user = JSON.parse(sessionStorage.getItem("loginedUser"));

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Guest */}
        {user && user.roleID === null && (
          <>
            <Route path="/" element={<GuestHomePage />} />
            <Route path="/restaurant-list" element={<GuestRestaurantListPage />} />
            <Route
              path="/restaurant-details/:id"
              element={<GuestRestaurantDetailsPage />}
            />
          </>
        )}

        {/* Authorized */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgetpw" element={<ForgetPassword />} />
        <Route path="/signuphost" element={<SignUpHostPage />} />

        {/* Customer */}
        {user && user.roleID === 3 && (
          <>
            <Route path="/customer" element={<CustomerHome />} />
            <Route
              path="/customer/information"
              element={<UserInformationPage />}
            />
            <Route
              path="/customer/restaurant-list"
              element={<CustomerRestaurantListPage />}
            />
            <Route
              path="/customer/restaurant-details/:id"
              element={<CustomerRestaurantDetailsPage />}
            />
            <Route path="/customer/check-out" element={<CustomerCheckoutPage />} />
            <Route path="/customer/payment" element={<MomoPaymentPage />} />
            <Route
              path="/customer/booking-success"
              element={<BookingSuccessPage />}
            />
            <Route
              path="/customer/booking-information"
              element={<BookingInformationPage />}
            />
            <Route path="/customer/booking-list" element={<BookingListPage />} />
            <Route path="/customer/notification" element={<PartyNotification />} />
          </>
        )}

        {/* Host */}
        {user && user.roleID === 2 && (
          <>
            <Route path="/host/list-party" element={<HostPartyListPage />} />
            <Route path="/host/create-party" element={<HostCreatePartyPage />} />
            <Route
              path="/host/create-party/create-party-theme"
              element={<HostCreatePartyThemePage />}
            />
            <Route
              path="/host/create-party/create-party-theme/create-special-service"
              element={<HostCreateSpecialServicePage />}
            />
            <Route
              path="/host/create-party/create-party-theme/create-special-service/create-food-menu"
              element={<CreateFoodMenuPage />}
            />
            <Route
              path="/host/restaurant-booking-tracking"
              element={<RestaurantBookingTracking />}
            />
            <Route
              path="/host/restaurant-booking-tracking/restaurant-booking-success"
              element={<RestaurantBookingSuccess />}
            />
          </>
        )}

        {/* Administrator */}
        {user && user.roleID === 1 && (
          <>
            {/* Add routes for administrator pages */}
          </>
        )}

        {/* Redirect to login page if not authenticated */}
        {!user && <Route path="*" element={<Navigate to="/login" />} />}
      </Routes>
    </Router>
  );
}

export default App;

