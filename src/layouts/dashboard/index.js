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
import Card from '@mui/material/Card';
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
// import OrdersOverview from 'layouts/dashboard/components/OrdersOverview';
// import BuildingTwo from 'layouts/dashboard/components/BuildingTwo';
// import BuildingThree from 'layouts/dashboard/components/BuildingThree';
// import BuildingFour from 'layouts/dashboard/components/BuildingFour';
import FinancialDetails from 'layouts/dashboard/components/FinancialDetails';
import SecurityDeposit from 'layouts/dashboard/components/SecurityDeposit';
import BedandBill from 'layouts/dashboard/components/BedandBIll';
import Expenditures from 'layouts/dashboard/components/expenditures';
//import Chart from 'layouts/dashboard/components/charts';
import PendingPayments from 'layouts/dashboard/components/summaryTables/PendingPayments';
import AvailabeRooms from 'layouts/dashboard/components/summaryTables/AvailableRooms';
import UpcomingCheckouts from 'layouts/dashboard/components/summaryTables/UpcomingCheckouts';
import RecentTransactions from 'layouts/dashboard/components/summaryTables/Recenttransactions';

function Dashboard() {
	// const { sales, tasks } = reportsLineChartData;

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox py={3}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<BedandBill total="7" info="Total Beds" more="More Info" />
					</Grid>
					<Grid item xs={12}>
						<Expenditures />
					</Grid>
				</Grid>
				{/* <MDBox>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<Chart title="Available Beds" title2="Occupied Beds" value="50" />
						</Grid>
						<Grid item xs={6}>
							<Chart />
						</Grid>
					</Grid>
				</MDBox> */}
				<h4 style={{ paddingTop: '10px' }}> Building Wise Summary</h4>
				<MDBox mt={5}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<Card>
								<MDBox
									mx={3}
									mt={-3}
									py={1}
									px={2}
									variant="gradient"
									bgColor="info"
									borderRadius="lg"
									coloredShadow="info"
								>
									<MDTypography variant="h6" color="white">
										PENDING TRANSACTIONS
									</MDTypography>
								</MDBox>
								<MDBox pt={3}>
									<PendingPayments />
								</MDBox>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card>
								<MDBox
									mx={3}
									mt={-3}
									py={1}
									px={2}
									variant="gradient"
									bgColor="info"
									borderRadius="lg"
									coloredShadow="info"
								>
									<MDTypography variant="h6" color="white">
										AVAILABLE ROOMS
									</MDTypography>
								</MDBox>
								<MDBox pt={3}>
									<AvailabeRooms />
								</MDBox>
							</Card>
						</Grid>
					</Grid>
				</MDBox>
				<MDBox mt={5}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<Card>
								<MDBox
									mx={3}
									mt={-3}
									py={1}
									px={2}
									variant="gradient"
									bgColor="info"
									borderRadius="lg"
									coloredShadow="info"
								>
									<MDTypography variant="h6" color="white">
										UPCOMING CHECKOUTS
									</MDTypography>
								</MDBox>
								<MDBox pt={3}>
									<UpcomingCheckouts />
								</MDBox>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card>
								<MDBox
									mx={3}
									mt={-3}
									py={1}
									px={2}
									variant="gradient"
									bgColor="info"
									borderRadius="lg"
									coloredShadow="info"
								>
									<MDTypography variant="h6" color="white">
										RECENT TRANSACTIONS
									</MDTypography>
								</MDBox>
								<MDBox pt={3}>
									<RecentTransactions />
								</MDBox>
							</Card>
						</Grid>
					</Grid>
				</MDBox>
				{/* <Grid container spacing={3}>
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
				</Grid> */}
				{/* <h4 style={{ paddingTop: '10px' }}>Financial Details</h4>
				<MDBox mt={1}>
					<MDBox mt={2}>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<FinancialDetails name="Rent Payments" />
							</Grid>
							
							<Grid item xs={6}>
								<SecurityDeposit name="Security Deposit" />
							</Grid>
						</Grid>
					</MDBox>
				</MDBox> */}
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default Dashboard;
