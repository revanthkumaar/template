import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Payments from "./paymentmodule/payment";
import PendingPayments from "layouts/dashboard/components/summaryTables/PendingPayments"
import PaymentReport from "./Reports";


function PaymentModules() {
  // const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={1}>
        <MDBox mt={4}>
          <MDBox bgColor="white">
            <Grid container spacing={6}>
              <Grid item xs={20} md={10} lg={20}>
                <Payments />
              </Grid>
              <Grid item xs={20} md={10} lg={20}>
              
              </Grid>
            </Grid>
            <MDBox 
								mx={3}
								mt={-3}
								py={2}
								px={2}
								variant="gradient"
								
								borderRadius="lg"
								coloredShadow="info"
							 >
            <PaymentReport/>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default PaymentModules;