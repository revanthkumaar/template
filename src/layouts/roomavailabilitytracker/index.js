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
// import Layout from './components/Layout'
import ChartOne from './buildings/buildingspieCharts/buildingChartOne';
import ChartTwo from './buildings/buildingspieCharts/buildingChartTwo';
import BuildingDropdown from './BuildingDropdown'
import BuildingsTracker from './buildings';
const Tracker = () => {
    return (
        

                <BuildingsTracker />

                
           
    )
}

export default Tracker;