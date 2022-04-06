import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Container, Grid, Typography, InputLabel, Alert } from '@mui/material';

import { makeStyles } from '@mui/styles';

import Textfield from 'layouts/profile/GuestLoginForm/components/TextField';
import Select from 'layouts/profile/GuestLoginForm/components/Select';
import Purpose from './Purpose';

import Button from 'layouts/profile/GuestLoginForm/components/Button';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { height } from '@mui/system';

const useStyles = makeStyles({
	root: {
		height: 40
	},
	size: {
		width: 40,
		height: 30
	},
	gap: {
		paddingLeft: 20,
		height: 100
	}
});

const FORM_VALIDATION = Yup.object().shape({
	paymentPurpose: Yup.string().required('Required'),
	amountPaid: Yup.number().required('Required'),
	transactionId: Yup.string().required('Required')
});

const RecordpaymentsinPopUp = (props) => {
	var GuestID = props.guestdetails.id;
	var INITIAL_FORM_STATE = {
		paymentPurpose: '',
		amountPaid: '',
		transactionId: '',
		guestId: GuestID
	};

	const classes = useStyles();

	return (
		<Grid container>
			<Grid item xs={12}>
				<Container maxWidth="md">
					<div>
						<Formik
							initialValues={{ ...INITIAL_FORM_STATE }}
							validationSchema={FORM_VALIDATION}
							onSubmit={async (guest, { resetForm }) => {
								console.log(guest);

								const res = await axios.post('http://localhost:8989/payment/addAfterOnBoard', guest);
								console.log(res);
								setTimeout(() => {
									resetForm();
								}, 50);
							}}
						>
							{(formProps) => (
								<Form>
									<Grid container spacing={2}>
										<Grid item xs={6}>
											<Textfield name="amountPaid" label="Amount Paid" />
										</Grid>
										<Grid item xs={6}>
											<Textfield name="transactionId" label="Transaction ID" />
										</Grid>

										<Grid item xs={6}>
											<InputLabel id="demo-simple-select-label">
												&nbsp; Payment Purpose
											</InputLabel>

											<Select
												IconComponent={(Purpose) => (
													<ArrowDropDownIcon className={classes.size} />
												)}
												name="paymentPurpose"
												options={Purpose}
												className={classes.root}
											/>
										</Grid>

										<Grid item xs={6} sx={{ marginTop: 2 }}>
											<Button>Record Payment</Button>
										</Grid>
									</Grid>
								</Form>
							)}
						</Formik>
					</div>
				</Container>
			</Grid>
		</Grid>
	);
};

export default RecordpaymentsinPopUp;
