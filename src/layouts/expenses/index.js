// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import Actions from "./Actions";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
import Expenses from "./Expenses";
import Branch from "./Branch";
import CreateBranch from "./CreateExpense"

function Tables() {
  // const { columns, rows } = authorsTableData();
  const { columns, rows } = Expenses();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      
      
      <MDBox pt={6} pb={3}>
      <Actions/>
        
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
