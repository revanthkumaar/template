// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
import BulkEntries from "./BulkEntries";
import Branch from "./Branch";
import CreateBranch from "./CreateExpense"

function Tables() {
  // const { columns, rows } = authorsTableData();
  const { columns, rows } = BulkEntries();

  return (
    <DashboardLayout>
     
      <CreateBranch colour="inherit"/>
      
      <MDBox pt={6} pb={3}>
      <Branch/>
        <Grid container spacing={-6}>
          <Grid item xs={12}>
            
          </Grid>

          <Grid item xs={12}>
            <Card>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      
    </DashboardLayout>
  );
}

export default Tables;
