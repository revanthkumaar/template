import React from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';

import { Grid, Card, CardContent, Typography } from '@mui/material';

import BuildingFourLayout from './buildingFourLayout'
import BuildingFourChartOne from './buildingFourPieCharts/buildingFourChartOne';
import BuildingFourChartTwo from './buildingFourPieCharts/buildingFourChartTwo';


import BuildingDropdown from 'layouts/roomavailabilitytracker/BuildingDropdown';

const BuildingFourTracker = () => {
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
                        <Grid item xs={6} ><BuildingFourChartOne /></Grid>
                        <Grid item xs={6}  ><BuildingFourChartTwo /></Grid>
                    </Grid>
                    <Grid item xs={12}  ><BuildingFourLayout /></Grid>
                </Grid>
            </MDBox>
            {/* </Grid> */}
        </DashboardLayout>
    )
}

export default BuildingFourTracker;