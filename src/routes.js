// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import Tables from "layouts/tables";

import RoomAvailability from "layouts/roomAvailibity";
//import Payments from "layouts/payments/paymentmodule/payment";

// import Main from "layouts/main"
// import Payments from "layouts/payments"
// import Inventory from "layouts/inventory"
// import Issues from "layouts/issues"

// import Announcements from "layouts/announcements"
// import Employees from "layouts/employees"

// import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import PaymentModules from "layouts/payments";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Main",
    key: "main",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/main",
    component: <main />,
  },
  {
    type: "collapse",
    name: "Guest Onboarding",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Room Availability",
    key: "roomAvailability",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/room_Availability",
    component: <RoomAvailability />,
  },
  {
    type: "collapse",
    name: "Upcoming Checkouts",
    key: "upcoming checkouts",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/upcomingcheckouts",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "notifications",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/allReports",
    component: <Notifications />,
  },

  {
    type: "collapse",
    name: "Payments",
    key: "payments",
    icon: <Icon fontSize="small">payment</Icon>,
    route: "/payments",
    component: <PaymentModules />,
  },
  {
    type: "collapse",
    name: "Inventory",
    key: "inventory",
    icon: <Icon fontSize="small">store</Icon>,
    route: "/inventory",
    component: <inventory />,
  },
  {
    type: "collapse",
    name: "Issues",
    key: "issues",
    icon: <Icon fontSize="small">receipt</Icon>,
    route: "/issues",
    component: <issues />,
  },
  {
    type: "collapse",
    name: "Announcements",
    key: "announcements",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/announcements",
    component: <announcements />,
  },
  {
    type: "collapse",
    name: "Employees",
    key: "employees",
    icon: <Icon fontSize="small">person_add</Icon>,
    route: "/employees",
    component: <employees />,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-out",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];
export default routes;
