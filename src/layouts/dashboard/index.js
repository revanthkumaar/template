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
import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
// import IconButton from '@mui/material/IconButton';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from 'examples/Cards/StatisticsCards/ComplexStatisticsCard';

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from 'layouts/dashboard/components/OrdersOverview';
import BuildingTwo from 'layouts/dashboard/components/BuildingTwo';
import BuildingThree from 'layouts/dashboard/components/BuildingThree';
import BuildingFour from 'layouts/dashboard/components/BuildingFour';
import FinancialDetails from 'layouts/dashboard/components/FinancialDetails';
import SecurityDeposit from 'layouts/dashboard/components/SecurityDeposit';
import BedandBill from 'layouts/dashboard/components/BedandBIll';
import Expenditures from 'layouts/dashboard/components/expenditures';

function Dashboard() {
	// const { sales, tasks } = reportsLineChartData;

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox py={3}>
				<BedandBill total="7" info="Total Beds" more="More Info" />
				<Expenditures />
				<h4 style={{ paddingBottom: '10px' }}> Building Wise Summary</h4>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<OrdersOverview />
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<BuildingTwo />
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<BuildingThree />
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<BuildingFour />
						</MDBox>
					</Grid>
				</Grid>
				<h4>Financial Details</h4>
				<MDBox mt={1}>
					<MDBox mt={2}>
						<Grid container spacing={5}>
							<Grid item xs={12}>
								<FinancialDetails name="Rent Payments" />
							</Grid>
							<Grid item xs={12}>
								<FinancialDetails name="Day-Wise Payments" />
							</Grid>
							<Grid item xs={12}>
								<SecurityDeposit name="Security Deposit" />
							</Grid>
						</Grid>
					</MDBox>
				</MDBox>
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default Dashboard;
