// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import Tables from "layouts/tables";
import Main from "layouts/main"
import Payments from "layouts/payments"
import Inventory from "layouts/inventory"
import Issues from "layouts/issues"
import Announcements from "layouts/announcements"
import Employees from "layouts/employees"
// import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

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
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/main",
    component: <main />,
  },
  {
    type: "collapse",
    name: "Payments",
    key: "payments",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/payments",
    component: <payments />,
  },
  {
    type: "collapse",
    name: "Inventory",
    key: "inventory",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/inventory",
    component: <inventory />,
  },
  {
    type: "collapse",
    name: "Issues",
    key: "payments",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/issues",
    component: <issues />,
  },
  {
    type: "collapse",
    name: "Announcements",
    key: "announcements",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/announcements",
    component: <announcements />,
  },
  {
    type: "collapse",
    name: "Employees",
    key: "emplolyees",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/employees",
    component: <employees />,
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
    name: "Upcoming Check-outs",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Tables/>,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "notifications",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
{
  type: "main",
  name: "Sign In",
  key: "sign-in",
  icon: <Icon fontSize="small">login</Icon>,
  route: "/authentication/sign-in",
  component: <SignIn />,
} ];
export  default routes ;
