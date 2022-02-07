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
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Billing page components
import Finance from 'layouts/dashboard/components/Finance';

function FinancialDetails({ name }) {
	return (
		<Card id="delete-account">
			<MDBox px={2}>
				<MDTypography align="center" variant="h5" fontWeight="medium">
					{name}
				</MDTypography>
			</MDBox>
			<MDBox>
				<MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
					<Finance />
				</MDBox>
			</MDBox>
		</Card>
	);
}

export default FinancialDetails;
