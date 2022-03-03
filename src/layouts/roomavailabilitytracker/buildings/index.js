import React from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';

import { Grid, Card, CardContent, Typography } from '@mui/material';

import BuildingsLayout from './buildingsLayout'
import BuildingsChartOne from './buildingspieCharts/buildingChartOne';
import BuildingsChartTwo from './buildingspieCharts/buildingChartTwo';

import BuildingDropdown from 'layouts/roomavailabilitytracker/BuildingDropdown';

const BuildingsTracker = (props) => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            
            <MDBox bgColor="white" padding="8px"   >
                <BuildingDropdown />
            </MDBox>
           
            <br />
            <MDBox bgColor="white" padding="4px" >
               
                    <Grid container direction="row" justifyContent="left" alignItems="left" >
                        <Grid item xs={6} ><BuildingsChartOne /></Grid>
                        <Grid item xs={6}  ><BuildingsChartTwo /></Grid>
                    </Grid>
                    </MDBox>

                    <BuildingsLayout buildingname={props.buildingname}/>
                
            
            
        </DashboardLayout>
    )
}

export default BuildingsTracker;