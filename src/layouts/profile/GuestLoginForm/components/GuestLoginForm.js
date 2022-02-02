import React from "react";
// import Header from '../Components/Header';
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { createStyles, makeStyles } from '@mui/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Grid, Typography } from "@mui/material";
import moment from "moment";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Textfield from "./TextField";
import Select from "../../../../Select";
import Checkbox from "./CheckBox";
import DateTimePicker from "./DataTimePicker";
import Button from "./Button";
import countries from "./countries.json";
// import Divider from '@mui/material/Divider';

// const useStyles = makeStyles((theme) => createStyles({
//     root: {
//       marginTop: theme.spacing(5),
//       marginBottom: theme.spacing(8),
//     },
// }),
// )
// const theme = createTheme();

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  phone: "",
  secondaryPhone: "",
  fatherName: "",
  fatherPhone: "",
  localGaurdianName: "",
  bloodGroup: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  workPhone: "",
  workAddressLine1: "",
  workAddressLine2: "",
  Idproof: "",
  passport: "",
  workCity: "",
  workState: "",
  bookingDate: "",
  checkoutDate: "",
  arrivalDate: "",
  roomRent: "",
  securityDeposit: "",
  checkinNotes: "",
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid FirstName ")
    .required("Required"),
  lastName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid LastName ")
    .required("Required"),
  fatherName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid FatherName ")
    .required("Required"),
  localGaurdianName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid FatherName ")
    .required("Required"),
  email: Yup.string().email("Invalid email.").required("Required"),
  bloodGroup: Yup.string().matches(/^(A|B|AB|O)[+-]$/, {
    message: "Please enter valid Blood Group.",
    excludeEmptyString: false,
  }),
  phone: Yup.string().matches(/^[6-9]\d{9}$/, {
    message: "Please enter Valid Mobile Number",
    excludeEmptyString: false,
  }),
  secondaryPhone: Yup.string().matches(/^[6-9]\d{9}$/, {
    message: "Please enter Valid Mobile Number",
    excludeEmptyString: false,
  }),
  securityDeposit: Yup.number(),
  roomRent: Yup.number(),
  fatherPhone: Yup.string().matches(/^[6-9]\d{9}$/, {
    message: "Please enter valid Mobile number.",
    excludeEmptyString: false,
  }),
  localGaurdianPhone: Yup.string().matches(/^[6-9]\d{9}$/, {
    message: "Please enter valid Mobile number.",
    excludeEmptyString: false,
  }),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid City Name")
    .required("Required"),
  state: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid State ")
    .required("Required"),
  workCity: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid City Name")
    .required("Required"),
  workState: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid State ")
    .required("Required"),
  country: Yup.string().required("Required"),
  arrivalDate: Yup.date().required("Required"),
  dateOfBirth: Yup.string()
    .required("DOB is Required")
    .test(
      "DOB",
      "Please choose a valid date of birth",
      (date) => moment().diff(moment(date), "years") >= 12
    ),
  departureDate: Yup.date().required("Required"),
  checkinNotes: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
  Idproof: Yup.mixed().required("File is required"),
  passport: Yup.mixed().required("File is required"),
});

const GuestLoginForm = () => {
  // const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div>
            <Formik
              initialValues={INITIAL_FORM_STATE}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>
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
                    <DateTimePicker
                      maxDate={new Date()}
                      name="dateOfBirth"
                      label="Date of Birth"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="phone" label="Personal Phone" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="secondaryPhone" label="Secondary Phone" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="fatherName" label="Father's Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="fatherPhone" label="Father's Phone" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="localGaurdianName"
                      label="Local Gaurdian's Name"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield
                      name="localGaurdianPhone"
                      label="Local Gaurdian's Phone"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="bloodGroup" label="Blood Group" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      <h4 align="center">Permanent Address</h4>
                      <br />
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="addressLine1" label="Address Line 1" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="addressLine2"
                      label="Address Line 2 With PinCode"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="city" label="City" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="state" label="State" />
                  </Grid>

                  <Grid item xs={12}>
                    <h6>Country</h6>
                    <Select name="country" options={countries} />
                  </Grid>
                  <Divider variant="middle" />
                  <Grid item xs={12}>
                    <Typography>
                      <h4 align="center">Work Related Information</h4>
                    </Typography>
                    <br />
                    <Grid item xs={6}>
                      <Textfield name="workPhone" label="Work Phone Number" />
                    </Grid>
                    {/* <Grid item xs={6}>
                      
                      <Select onChange="if(this.options[this.selectedIndex].value=='customOption'){toggleField(this, this.nextSibling); this.selectedIndex='0';}"// value={selectedAnswer}
  >
                      <option value="0" name="optionA">
                        Salaried Employee
                      </option><option value="1" name="optionB">
                        Self Employee</option><option value="customOption" name="customInput">
                        CustomInput
                      </option><option value="-1" name="landing">
                        Select one
                      </option>
                    </Select> 
                    



                  </Grid> */}{" "}
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="workAddressLine1"
                      label="Work Address Line 1"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="workAddressLine2"
                      label="Work Address Line 2 "
                    />
                  </Grid>

                  <Divider variant="middle" />
                  <Grid item xs={12}>
                    <Typography>
                      <h4 align="center">Upload Documents</h4>
                      <br />
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <h6>
                      ID Proof:(Pancard/AadharCard/VoterID/DrivingLicence)
                    </h6>
                    <Textfield
                      name="Idproof"
                      helperText="Govt ID Proof"
                      type="file"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="passport"
                      helperText="upload passport size photo"
                      type="file"
                    />
                  </Grid>

                  <Divider variant="middle" />
                  <Grid item xs={12}>
                    <Typography>
                      <h4 align="center">Booking Details</h4>
                      <br />
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker name="bookingDate" label="Booking Date" />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker
                      name="checkoutDate"
                      label="Check-Out date"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker name="arrivalDate" label="Check-In date" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="duration" label="Duration" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="roomRent" label="Room Rent" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield
                      name="securityDeposit"
                      label="Security Deposit"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="checkinNotes"
                      label="Check-in Notes"
                      multiline
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="Terms of service"
                      label="I agree"
                    />
                  </Grid>
                  <Divider variant="middle" />
                  <Grid item xs={4} justifyContent="center">
                    <Button variant="contained" disableElevation>
                      Submit
                    </Button>
                  </Grid>
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
