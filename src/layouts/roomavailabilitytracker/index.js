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

const Tracker = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox py={1} mb={4} bgColor="white" padding="8px">
                <Building />
            </MDBox>
            {/* <MDBox bgColor="white" padding="20px"> */}
                  
                            <Layout />
            {/* </MDBox> */}
        </DashboardLayout>
    )
}

export default Tracker;