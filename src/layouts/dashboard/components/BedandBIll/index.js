// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import IconButton from '@mui/material/IconButton';
import { CardContent, Divider } from '@mui/material';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

function BedandBill(props) {
	return (
    <div>
      <Grid item xs={12} md={6} lg={3}>
        <h4>Overall Monthly Summary</h4>
      </Grid>
	  <br/>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <Card sx={{ minWidth: 275, minHeight: 100, background: "#A52A2A" }}>
              <CardContent sx={{ align: "center" }}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ fontSize: "2em" }}
                >
                  1000
                </MDTypography>
                <MDTypography color="light" fontWeight="light">
                  Total Beds
                </MDTypography>
                <Divider variant="insent" fullWidth />
                <MDTypography
                  color="light"
                  align="center"
                  textTransform="capitalize"
                  fontWeight="regular"
                >
                  More Info
                  <IconButton>
                    <ArrowCircleRightRoundedIcon fontSize="medium" />
                  </IconButton>
                </MDTypography>
              </CardContent>
            </Card>
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <Card sx={{ minWidth: 275, minHeight: 100, background: "#2E8B57" }}>
              <CardContent sx={{ align: "center" }}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ fontSize: "2em" }}
                >
                  423
                </MDTypography>
                <MDTypography color="light" fontWeight="light">
                  Available Beds
                </MDTypography>
                <Divider variant="insent" fullWidth />
                <MDTypography
                  color="light"
                  align="center"
                  textTransform="capitalize"
                  fontWeight="regular"
                >
                  More Info
                  <IconButton>
                    <ArrowCircleRightRoundedIcon fontSize="medium" />
                  </IconButton>
                </MDTypography>
              </CardContent>
            </Card>
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <Card sx={{ minWidth: 275, minHeight: 100, background: "#FF6347" }}>
              <CardContent sx={{ align: "center" }}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ fontSize: "2em" }}
                >
                  302
                </MDTypography>
                <MDTypography color="light" fontWeight="light">
                 Advance Bookings
                </MDTypography>
                <Divider variant="insent" fullWidth />
                <MDTypography
                  color="light"
                  align="center"
                  textTransform="capitalize"
                  fontWeight="regular"
                >
                  More Info
                  <IconButton>
                    <ArrowCircleRightRoundedIcon fontSize="medium" />
                  </IconButton>
                </MDTypography>
              </CardContent>
            </Card>
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <Card sx={{ minWidth: 275, minHeight: 100, background: "#800080" }}>
              <CardContent sx={{ align: "center" }}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ fontSize: "2em" }}
                >
                  125
                </MDTypography>
                <MDTypography color="light" fontWeight="light">
                  Pending payments
                </MDTypography>
                <Divider variant="insent" fullWidth />
                <MDTypography
                  color="light"
                  align="center"
                  textTransform="capitalize"
                  fontWeight="regular"
                >
                  More Info
                  <IconButton>
                    <ArrowCircleRightRoundedIcon fontSize="medium" />
                  </IconButton>
                </MDTypography>
              </CardContent>
            </Card>
          </MDBox>
        </Grid>
      </Grid>
    </div>
  );
}
export default BedandBill;
