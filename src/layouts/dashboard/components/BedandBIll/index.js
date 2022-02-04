// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import IconButton from '@mui/material/IconButton';
import { CardContent, Divider } from '@mui/material';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

function BedandBill(props) {
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6} lg={3}>
					<MDBox mb={1.5}>
						<Card sx={{ minWidth: 275, minHeight: 100, background: '#A52A2A' }}>
							<CardContent sx={{ align: 'center' }}>
								<MDTypography color="light" mt={1} fontWeight="bold" style={{fontSize: '2em'}}>
									7
								</MDTypography>
								<MDTypography color="light" fontWeight="bold">
									Total Beds
								</MDTypography>
								<Divider variant="insent" fullWidth />
								<MDTypography
									color="light"
									align="center"
									textTransform="capitalize"
									fontWeight="regular"
								>
									More Info
									<IconButton>
										<ArrowCircleRightRoundedIcon fontSize="medium" />
									</IconButton>
								</MDTypography>
							</CardContent>
						</Card>
					</MDBox>
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
					<MDBox mb={1.5}>
						<Card sx={{ minWidth: 275, minHeight: 100, background: '#2E8B57' }}>
							<CardContent sx={{ align: 'center' }}>
								<MDTypography color="light" mt={1} fontWeight="bold" style={{fontSize: '2em'}}>
									4
								</MDTypography>
								<MDTypography color="light" fontWeight="bold">
									Available Beds
								</MDTypography>
								<Divider variant="insent" fullWidth />
								<MDTypography
									color="light"
									align="center"
									textTransform="capitalize"
									fontWeight="regular"
								>
									More Info
									<IconButton>
										<ArrowCircleRightRoundedIcon fontSize="medium" />
									</IconButton>
								</MDTypography>
							</CardContent>
						</Card>
					</MDBox>
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
					<MDBox mb={1.5}>
						<Card sx={{ minWidth: 275, minHeight: 100, background: '#FF6347' }}>
							<CardContent sx={{ align: 'center' }}>
								<MDTypography color="light" mt={1} fontWeight="bold" style={{fontSize: '2em'}}>
									3
								</MDTypography>
								<MDTypography color="light" fontWeight="bold">
									Total Bills
								</MDTypography>
								<Divider variant="insent" fullWidth />
								<MDTypography
									color="light"
									align="center"
									textTransform="capitalize"
									fontWeight="regular"
								>
									More Info
									<IconButton>
										<ArrowCircleRightRoundedIcon fontSize="medium" />
									</IconButton>
								</MDTypography>
							</CardContent>
						</Card>
					</MDBox>
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
					<MDBox mb={1.5}>
						<Card sx={{ minWidth: 275, minHeight: 100, background: '#800080' }}>
							<CardContent sx={{ align: 'center' }}>
								<MDTypography color="light" mt={1} fontWeight="bold" style={{fontSize: '2em'}}>
									2
								</MDTypography>
								<MDTypography color="light" fontWeight="bold">
									Pending payments
								</MDTypography>
								<Divider variant="insent" fullWidth />
								<MDTypography
									color="light"
									align="center"
									textTransform="capitalize"
									fontWeight="regular"
								>
									More Info
									<IconButton>
										<ArrowCircleRightRoundedIcon fontSize="medium" />
									</IconButton>
								</MDTypography>
							</CardContent>
						</Card>
					</MDBox>
				</Grid>
			</Grid>
		</div>
	);
}
export default BedandBill;
