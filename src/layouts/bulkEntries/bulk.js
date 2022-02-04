import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import Footer from "examples/Footer";
import Main from "./TabBar/Main";


function RoomAvailability() {
  // const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <MDBox
      mx={2}>
        
          <Grid container spacing={2}>
            <Grid item xs={20} md={10} lg={20}>
              <Main display="flex" justifyContent="flex-end" />
            </Grid>
          </Grid>
        
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default RoomAvailability;
