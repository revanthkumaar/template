import Grid from '@mui/material/Grid';


import MDBox from 'components/MDBox';


import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import Actions from './components/Actions';


function Dashboard() {


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
