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
						<Card sx={{ minWidth: 275, minHeight: 100, background: '#00008B' }}>
							<CardContent sx={{ align: 'center' }}>
								<MDTypography color="light" mt={1} fontWeight="bold" style={{ fontSize: '2em' }}>
									3
								</MDTypography>
								<MDTypography color="light" fontWeight="bold">
									Total Complaints
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
						<Card sx={{ minWidth: 275, minHeight: 100, background: '#2F4F4F' }}>
							<CardContent sx={{ align: 'center' }}>
								<MDTypography color="light" mt={1} fontWeight="bold" style={{ fontSize: '2em' }}>
									4
								</MDTypography>
								<MDTypography color="light" fontWeight="bold">
									Total Maintenance
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
						<Card sx={{ minWidth: 275, minHeight: 100, background: '#DC143C' }}>
							<CardContent sx={{ align: 'center' }}>
								<MDTypography color="light" mt={1} fontWeight="bold" style={{ fontSize: '2em' }}>
									175500
								</MDTypography>
								<MDTypography color="light" fontWeight="bold">
									Income
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
						<Card sx={{ minWidth: 275, minHeight: 100, background: '#4B0082' }}>
							<CardContent sx={{ align: 'center' }}>
								<MDTypography color="light" mt={1} fontWeight="bold" style={{ fontSize: '2em' }}>
									25400
								</MDTypography>
								<MDTypography color="light" fontWeight="bold">
									Expenses
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
