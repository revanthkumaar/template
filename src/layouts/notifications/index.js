/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import { Card } from '@mui/material';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

//DataTable
import TransactionDetails from './data/TransactionDetails';
import GuestDetails from './data/GuestDetails';
import Occupancy from './data/Occupancy';
import Notices from './data/Notices';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`
	};
}

export default function FullWidthTabs() {
	const theme = useTheme();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<Card mt={2}>
				<MDBox p={2} lineHeight={0}>
					<MDTypography variant="h5">All Reports</MDTypography>
					<MDTypography variant="button" color="text" fontWeight="regular">
						Check all the reports of your properties here
					</MDTypography>
				</MDBox>
				<AppBar position="static">
					<MDBox p={2}>
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor="secondary"
							textColor="inherit"
							variant="fullWidth"
							aria-label="full width tabs example"
							style={{ background: '#4169E1' }}
						>
							<Tab label="Transactions" {...a11yProps(0)} />
							<Tab label="Guest Master" {...a11yProps(1)} />
							<Tab label="Occupancy" {...a11yProps(2)} />
							<Tab label="Notices" {...a11yProps(3)} />
						</Tabs>
					</MDBox>
				</AppBar>
			</Card>
			<MDBox mt={3}>
				<Card>
					<TabPanel value={value} index={0} dir={theme.direction}>
						<TransactionDetails />
					</TabPanel>

					<TabPanel value={value} index={1} dir={theme.direction}>
						<GuestDetails />
					</TabPanel>
					<TabPanel value={value} index={2} dir={theme.direction}>
						<Occupancy />
					</TabPanel>
					<TabPanel value={value} index={3} dir={theme.direction}>
						<Notices />
					</TabPanel>
				</Card>
			</MDBox>
		</DashboardLayout>
	);
}
