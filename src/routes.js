// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import Tables from "layouts/tables";
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
