import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
//import Main from "./Main";
import RoomTable from "./RoomTable";
import UnAllocatedInventory from "./UnAllocatedInventory";



function RoomAvailability() {
  // const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={1} bgColor="white">
        <MDBox>
          <Grid container spacing={6}>
            <Grid item xs={20} md={10} lg={20}>
            <RoomTable display="flex" justifyContent="flex-end" />
            </Grid>
            <Grid item xs={20} md={10} lg={20} pt={3}>
            <UnAllocatedInventory display="flex" justifyContent="flex-end" />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default RoomAvailability;
//checking