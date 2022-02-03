/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
 =========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components

import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import Divider from '@mui/material/Divider';

function BuildingFour() {
  return (
    <Card sx={{ height: "100%" }}>
       <MDBox pt={3} px={3}>
        {/* <MDTypography variant="h6" fontWeight="medium">
          Orders overview
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            this month
          </MDTypography>
        </MDBox> */}
      </MDBox>
      
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="home"
          title="Building 4"
        
        />
        
        <TimelineItem
          color="error"
          icon="beds"
          title=" Available Beds    "
          dateTime="17"
        />
        <TimelineItem
          color="info"
          icon="checkout"
          title="Check-outs (this month) "
          dateTime="16"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="Due Payments"
          dateTime="20"
        />
        <TimelineItem
          color="primary"
          icon="money"
          title="Counts"
          dateTime="12000"
         
        />
      </MDBox> 
    </Card>
  );
}

export default BuildingFour;