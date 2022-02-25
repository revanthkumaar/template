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
import BuildingOneLayout from './buildingOneLayout'
import BuildingOneChartOne from './buildingOnepieCharts/buildingOneChartOne';
import BuildingOneChartTwo from './buildingOnepieCharts/buildingOneChartTwo';

import BuildingDropdown from 'layouts/roomavailabilitytracker/BuildingDropdown';

const BuildingOneTracker = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox bgColor="white" padding="8px"   >
                <BuildingDropdown />
            </MDBox>
            <br />
            <MDBox bgColor="white" padding="4px" border={1}>
                <Grid Container direction="row" justifyContent="center" alignItems="center">
                    <Grid container direction="row" justifyContent="center" alignItems="center" >
                        <Grid item xs={6} sx={{ pl: 20 }}><BuildingOneChartOne /></Grid>
                        <Grid item xs={6}  ><BuildingOneChartTwo /></Grid>
                    </Grid>
                    <Grid item xs={12}  ><BuildingOneLayout /></Grid>
                </Grid>
            </MDBox>
        </DashboardLayout>
    )
}

export default BuildingOneTracker;