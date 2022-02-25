import React from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';

import { Grid, Card, CardContent, Typography } from '@mui/material';

import BuildingOneLayout from './buildingOneLayout'
import BuildingOneChartOne from './buildingOnepieCharts/buildingOneChartOne';
import BuildingOneChartTwo from './buildingOnepieCharts/buildingOneChartTwo';

import BuildingDropdown from 'layouts/roomavailabilitytracker/BuildingDropdown';

const BuildingOneTracker = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            {/* <Grid Container direction="row" justifyContent="center" alignItems="center"> */}
            <MDBox bgColor="white" padding="8px"   >
                <BuildingDropdown />
            </MDBox>
           
            <br />
            <MDBox bgColor="white" padding="4px" border={1}>
                <Grid Container direction="row" justifyContent="center" alignItems="center">
                    <Grid container direction="row" justifyContent="left" alignItems="left" >
                        <Grid item xs={6} ><BuildingOneChartOne /></Grid>
                        <Grid item xs={6}  ><BuildingOneChartTwo /></Grid>
                    </Grid>
                    <Grid item xs={12}  ><BuildingOneLayout /></Grid>
                </Grid>
            </MDBox>
            {/* </Grid> */}
        </DashboardLayout>
    )
}

export default BuildingOneTracker;