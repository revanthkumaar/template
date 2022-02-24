import React from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';
import Building from 'layouts/profile/GuestLoginForm/components/Building';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import MDTypography from 'components/MDTypography';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import { IconButton } from '@mui/material';
import Layout from './components/Layout'
import ChartOne from './components/ChartOne';
import ChartTwo from './components/ChartTwo';

const Tracker = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox bgColor="white" padding="8px"   >
                <Building  />
            </MDBox>
            <br/>

            <MDBox bgColor="white" padding="4px" border={1}>
                <Grid Container direction="row" justifyContent="center" alignItems="center">

                    <Grid container direction="row" justifyContent="center" alignItems="center" >

                        <Grid item xs={6} sx={{ pl: 20}}><ChartOne /></Grid>
                        <Grid item xs={6}  ><ChartTwo /></Grid>

                    </Grid>
                    <Grid item xs={12}  ><Layout /></Grid>

                </Grid>
            </MDBox>
        </DashboardLayout>
    )
}

export default Tracker;