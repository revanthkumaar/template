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
import ChartOne from './buildings/buildingOne/buildingOnepieCharts/buildingOneChartOne';
import ChartTwo from './buildings/buildingOne/buildingOnepieCharts/buildingOneChartTwo';
import BuildingDropdown from './BuildingDropdown'
import BuildingOneTracker from './buildings/buildingOne';
const Tracker = () => {
    return (
        

                <BuildingOneTracker />

                
           
    )
}

export default Tracker;