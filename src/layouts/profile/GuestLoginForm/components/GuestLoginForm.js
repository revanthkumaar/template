import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import MDButton from 'components/MDButton';
import { Container, Grid, Typography } from '@mui/material';
import moment from 'moment';
import Divider from '@mui/material/Divider';
import GroupedSelect from './RoomTypeDropDown';
import BuildingNameDropDown from './BuildingNameDropdown';
import FloorNumberDropDown from './FloorNumberDropDown';
import RoomNumberDropDown from './RoomNumberDropDown';
import CustomizedSnackbars from './PayDialogBox';
import Gender from './Gender';

import Textfield from './TextField';
import Select from './Select';
import Checkbox from './CheckBox';
import DateTimePicker from './DataTimePicker';
import Button from './Button';
// import countries from './countries.json';
import { padding } from '@mui/system';
import BedNumberDropDown from './BedNumberDropDown';

const INITIAL_FORM_STATE = {
	firstName: '',
	lastName: '',
	email: '',
	dateOfBirth: '',
	personalNumber: '',
	secondaryPhoneNumber: '',
	fatherName: '',
	fatherNumber: '',
	localGaurdianName: '',
	localGaurdianPhoneNumber: '',
	bloodGroup: '',
	occupation: '',
	addressLine1: '',
	addressLine2: '',
	city: '',
	state: '',
	country: '',
	workPhone: '',
	workAddressLine1: '',
	workAddressLine2: '',
	Idproof: '',
	passport: '',
	bookingDate: '',
	checkoutDate: '',
	arrivalDate: '',
	roomRent: '',
	securityDeposit: '',
	checkinNotes: '',
	termsOfService: false
};

const FORM_VALIDATION = Yup.object().shape({
	firstName: Yup.string().matches(/^[aA-zZ\s]+$/, 'Invalid FirstName ').required('Required'),
	lastName: Yup.string().matches(/^[aA-zZ\s]+$/, 'Invalid LastName ').required('Required'),
	email: Yup.string().email('Invalid email.').required('Required'),
	dateOfBirth: Yup.date()
		.required('DOB is Required')
		.test('DOB', 'Please choose a valid date of birth', (date) => moment().diff(moment(date), 'years') >= 12),
	personalNumber: Yup.string()
		.matches(/^[6-9]\d{9}$/, {
			message: 'Please enter Valid Mobile Number',
			excludeEmptyString: false
		})
		.required('Required'),
	secondaryPhoneNumber: Yup.string()
		.matches(/^[6-9]\d{9}$/, {
			message: 'Please enter Valid Mobile Number',
			excludeEmptyString: false
		})
		.required('Required'),
	fatherName: Yup.string().matches(/^[aA-zZ\s]+$/, 'Invalid FatherName ').required('Required'),
	fatherNumber: Yup.string()
		.matches(/^[6-9]\d{9}$/, {
			message: 'Please enter valid Mobile number.',
			excludeEmptyString: false
		})
		.required('Required'),
	localGaurdianName: Yup.string().matches(/^[aA-zZ\s]+$/, 'Invalid FatherName ').required('Required'),

	bloodGroup: Yup.string()
		.matches(/^(A|B|AB|O)[+-]$/, {
			message: 'Please enter valid Blood Group.',
			excludeEmptyString: false
		})
		.required('Required'),
	occupation: Yup.string().matches(/^[aA-zZ\s]+$/, 'Occuaption ').required('Required')

	// addressLine1: Yup.string().required('Required'),
	// addressLine2: Yup.string().required('Required'),
	// city: Yup.string().matches(/^[aA-zZ\s]+$/, 'Invalid City Name').required('Required'),
	// state: Yup.string().matches(/^[aA-zZ\s]+$/, 'Invalid State ').required('Required'),
	// country: Yup.string().required('Required'),
	// workPhone: Yup.string()
	// 	.matches(/^[6-9]\d{9}$/, {
	// 		message: 'Please enter Valid Mobile Number',
	// 		excludeEmptyString: false
	// 	})
	// 	.required('Required'),
	// workAddressLine1: Yup.string().required('Required'),

	// workAddressLine2: Yup.string().required('Required'),
	// Idproof: Yup.mixed().required('File is required'),
	// passport: Yup.mixed().required('File is required'),
	// bookingDate: Yup.date().required('Required'),
	// checkoutDate: Yup.date().required('Required'),
	// arrivalDate: Yup.date().required('Required'),
	// roomRent: Yup.number().required('Required'),
	// securityDeposit: Yup.number().required('Required'),
	// checkinNotes: Yup.string().required('Required'),
});

const GuestLoginForm = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Container maxWidth="md">
					<div>
						<Formik
							initialValues={{ ...INITIAL_FORM_STATE }}
							validationSchema={FORM_VALIDATION}
							onSubmit={async (guest, payment) => {
								console.log(guest);
								const res = await axios.post('http://localhost:8989/guest-service/addGuest', {
									guest,
									payment
								});
								console.log(res.data);
							}}
						>
							<Form>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<Typography>
											<br />
											<h4 align="center">Guest's Personal Information</h4>
											<br />
										</Typography>
									</Grid>

									<Grid item xs={6}>
										<Textfield name="firstName" label="First Name" />
									</Grid>

									<Grid item xs={6}>
										<Textfield name="lastName" label="Last Name" />
									</Grid>
									<Grid item xs={6}>
										<Textfield name="email" label="Email" />
									</Grid>
									<Grid item xs={6}>
										<DateTimePicker maxDate={new Date()} name="dateOfBirth" label="Date of Birth" />
									</Grid>

									<Grid item xs={6}>
										<Textfield name="personalNumber" label="Personal Phone" />
									</Grid>
									<Grid item xs={6}>
										<Textfield name="secondaryPhoneNumber" label="Secondary Phone" />
									</Grid>
									<Grid item xs={6}>
										<Textfield name="fatherName" label="Father's Name" />
									</Grid>
									<Grid item xs={6}>
										<Textfield name="fatherNumber" label="Father's Phone" />
									</Grid>

									<Grid item xs={6}>
										<Textfield name="localGaurdianName" label="Local Gaurdian's Name" />
									</Grid>
									<Grid item xs={6}>
										<Textfield name="localGaurdianPhoneNumber" label="Local Gaurdian's Phone" />
									</Grid>
									<Grid item xs={6}>
										<Textfield name="bloodGroup" label="Blood Group" />
									</Grid>
									<Grid item xs={6}>
										<Textfield name="occupation" label="Occuaption" />
									</Grid>
									<br />

									<Grid item xs={6}>
										<Gender />
									</Grid>
									<br />
									<Grid item xs={12} />
									<Grid item xs={12}>
										<Typography>
											<h4 align="center">Allocate Room</h4>

											<br />
										</Typography>
									</Grid>

									<Grid item xs={6}>
										<BuildingNameDropDown />
									</Grid>

									<Grid item xs={6}>
										<FloorNumberDropDown />
									</Grid>
									<Grid item xs={6} sx={{ paddingTop: 15 }}>
										<RoomNumberDropDown />
									</Grid>
									<Grid item xs={6}>
										<GroupedSelect />
									</Grid>

									<Grid item xs={6}>
										<BedNumberDropDown />
									</Grid>
									<Grid item xs={2} />
									<Grid item xs={3}>
										<CustomizedSnackbars />
									</Grid>
									<Grid item xs={2} />

									{/* <Grid item xs={12}>
										<Typography>
											<h4 align="center">Permanent Address</h4>
											<br />
										</Typography>
									</Grid> */}

									{/* <Grid item xs={12}>
										<Textfield name="addressLine1" label="Address Line 1" />
									</Grid>

									<Grid item xs={12}>
										<Textfield name="addressLine2" label="Address Line 2 With PinCode" />
									</Grid>

									<Grid item xs={6}>
										<Textfield name="city" label="City" />
									</Grid> */}

									{/* <Grid item xs={6}>
										<Textfield name="state" label="State" />
									</Grid>

									<Grid item xs={6}>
										<h6>Country</h6>
										<Select name="country" options={countries} widht />
									</Grid>
									<Divider variant="middle" /> */}
									{/* <Grid item xs={12}>
										<Typography>
											<h4 align="center">Work Related Information</h4>
										</Typography>
										<br />
										<Grid item xs={6}>
											<Textfield name="workPhone" label="Work Phone Number" />
										</Grid>
									</Grid> */}

									{/* <Grid item xs={12}>
										<Textfield name="workAddressLine1" label="Work Address Line 1" />
									</Grid>

									<Grid item xs={12}>
										<Textfield name="workAddressLine2" label="Work Address Line 2 " />
									</Grid>

									<Divider variant="middle" />
									<Grid item xs={12}>
										<Typography>
											<h4 align="center">Upload Documents</h4>
											<br />
										</Typography>
									</Grid>

									<Grid item xs={12}>
										<h6>ID Proof:(Pancard/AadharCard/VoterID/DrivingLicence)</h6>
										<Textfield name="Idproof" helperText="Govt ID Proof" type="file" />
									</Grid>

									<Grid item xs={12}>
										<Textfield
											name="passport"
											helperText="upload passport size photo"
											type="file"
										/>
									</Grid>

									<Divider variant="middle" /> */}
									{/* <Grid item xs={12}>
										<Typography>
											<h4 align="center">Booking Details</h4>
											<br />
										</Typography>
									</Grid>

									<Grid item xs={6}>
										<DateTimePicker name="bookingDate" label="Booking Date" />
									</Grid>
									<Grid item xs={6}>
										<DateTimePicker name="checkoutDate" label="Check-Out date" />
									</Grid>
									<Grid item xs={6}>
										<DateTimePicker name="arrivalDate" label="Check-In date" />
									</Grid>
									<Grid item xs={6}>
										<Textfield name="duration" label="Duration" />
									</Grid>
									<Grid item xs={6}>
										<Textfield name="roomRent" label="Room Rent" />
									</Grid> */}
									{/* <Grid item xs={6}>
										<Textfield name="securityDeposit" label="Security Deposit" />
									</Grid>

									<Grid item xs={12}>
										<Textfield name="checkinNotes" label="Check-in Notes" multiline rows={4} />
								</Grid>*/}

									<Grid item xs={12}>
										<Checkbox name="termsOfService" legend="Terms of service" label="I agree" />
									</Grid>
									{/* <Divider variant="middle" /> */}

									<Grid item xs={5} />
									{/* <MDButton variant="outlined" color="info" size="medium" value="submit">
                                            Submit
                                            </MDButton> */}
									<Grid item xs={3}>
										<Button>Submit</Button>
									</Grid>
									<Grid item xs={4} />
									<br />
									<br />
									<br />
								</Grid>
							</Form>
						</Formik>
					</div>
				</Container>
			</Grid>
		</Grid>
	);
};

export default GuestLoginForm;
