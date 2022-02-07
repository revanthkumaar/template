import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import Actions from './components/Actions';
//import Branch from './components/Branch';
//import CreateBranch from './components/CreateBranch';
//import TabBar from "./GuestLoginForm/components/TabBar";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
	// const { sales, tasks } = reportsLineChartData;

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<br/>
			<MDBox borderRadius="lg"
                coloredShadow="info" py={0.01} >
				<MDBox>
					<Grid container spacing={6}>
						<Grid item xs={12} md={10} lg={20}>
							<Actions />
						</Grid>
					</Grid>
				</MDBox>
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default Dashboard;
