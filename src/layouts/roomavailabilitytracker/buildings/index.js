import React from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';

import { Grid, Card, CardContent, Typography } from '@mui/material';

import BuildingsLayout from './buildingsLayout/buildingsLayout'
import BedSummaryChart from './buildingspieCharts/bedSummaryChart';
import PaymentSummaryChart from './buildingspieCharts/paymentSummaryChart';

import BuildingDropdown from 'layouts/roomavailabilitytracker/buildings/BuildingDropdown';

const BuildingsTracker = (props) => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            
            <MDBox bgColor="white" padding="8px"   >
                <BuildingDropdown buildingName={props.buildingName} />
            </MDBox>
           
            <br />
            <MDBox bgColor="white" padding="4px" >
               
                    <Grid container direction="row" justifyContent="left" alignItems="left" >
                        <Grid item xs={6} ><BedSummaryChart buildingName={props.buildingName} /></Grid>
                        <Grid item xs={6}  ><PaymentSummaryChart /></Grid>
                    </Grid>
                    </MDBox>

                    <BuildingsLayout buildingName={props.buildingName}/>
                
            
            
        </DashboardLayout>
    )
}

export default BuildingsTracker;