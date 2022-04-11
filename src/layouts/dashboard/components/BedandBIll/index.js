import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import IconButton from '@mui/material/IconButton';
import { CardContent, Divider } from '@mui/material';

// import axios from 'axios';
import axios from '../../../../Uri'
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

function BedandBill(props) {
  const [build, setBuild] = React.useState([])

  useEffect(() => {
    axios
      .get("/bed/getAllBedsCount")
      .then((res) => {

        console.log(res.data);
        setBuild(res.data)
     
       
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
console.log(build.totalAvailbleBeds);
const [payments, setPayments] = React.useState([])

  useEffect(() => {
    axios
      .get("/payment/pendingPayments")
      .then((res) => {

        console.log(res.data);
        setPayments(res.data)
      
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(payments.pendingPayments);
  const [overDue, setOverDue] =React.useState([])

  useEffect(() =>{
    axios
    .get('/payment/fetchingOverAllDueAmount')
    .then((res) =>{
      console.log(res.data)
      setOverDue(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  },[]);
  console.log(overDue.overAllDue)

  return (
    <div>
      <Grid item xs={12} md={6} lg={3}>
        <h4>Overall Monthly Summary</h4>
      </Grid>
      <br />
      <Grid container spacing={3} >
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <Card sx={{ minWidth: 240, minHeight: 100, background: "#A52A2A" }}>
              <CardContent sx={{ align: "center" }}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ fontSize: "2em" }}
                >
                  {build.totalBeds}
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
            <Card sx={{ minWidth: 240, minHeight: 100, background: "#2E8B57" }}>
              <CardContent sx={{ align: "center" }}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ fontSize: "2em" }}
                >
                  {build.totalAvailbleBeds}
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
						<Card sx={{ minWidth: 240, minHeight: 100, background: '#00008B' }}>
							<CardContent sx={{ align: 'center' }}>
								<MDTypography color="light" mt={1} fontWeight="regular" style={{ fontSize: '2em' }}>
									{overDue.overAllDue}
								</MDTypography>
								<MDTypography color="light" fontWeight="light">
								Overdue amount
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
            <Card sx={{ minWidth: 240, minHeight: 100, background: "#800080" }}>
              <CardContent sx={{ align: "center" }}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ fontSize: "2em" }}
                >
                   {payments.pendingPayments}
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
