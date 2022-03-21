import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import MDButton from "components/MDButton";
import { Container, Grid, Typography } from "@mui/material";
import moment from "moment";
import Divider from "@mui/material/Divider";
//import Select from "@mui/material/Select";
// import GroupedSelect from "./RoomTypeDropDown";
// import BuildingNameDropDown from "./BuildingNameDropdown";
// import FloorNumberDropDown from "./FloorNumberDropDown";
// import RoomNumberDropDown from "./RoomNumberDropDown";
// import CustomizedSnackbars from "./PayDialogBox";

import Occupancytype from "./OccupancyType";
import Textfield from "./TextField";
import Select from "./Select";
//import {Select,MenuItem} from '@mui/material'
import Gender from "./Gender";
import Checkbox from "./CheckBox";
import DateTimePicker from "./DataTimePicker";
import Button from "./Button";
// import countries from './countries.json';
import { padding } from "@mui/system";
//import BedNumberDropDown from './BedNumberDropDown';
//import getDepartmentCollection from './getDepartmentCollection';
//import getDepartmentCollection from './getDepartmentCollection';
import data from "./getDepartmentCollection";
import MenuItem from "assets/theme/components/menu/menuItem";
//import MenuItem from "@mui/material/MenuItem";
import { options } from "layouts/roomavailabilitytracker/buildings/buildingspieCharts/buildingChartOne";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  personalNumber: "",
  secondaryPhoneNumber: "",
  fatherName: "",
  fatherNumber: "",
  localGaurdianName: "",
  localGaurdianPhoneNumber: "",
  bloodGroup: "",
  occupation: "",
  gender: "",
  aadharNumber: "",
  buildingName: "",
  bedId: "",
  occupancytype: "",
  roomRent: "",
  securityDeposit: "",
  transactionId: "",
  addressLine1: "",
  addressLine2: "",
  pincode: "",
  city: "",
  state: "",
  workPhone: "",
  //country: "",

  // country: '',

  //workPhone: '',

  workAddressLine1: "",
  workAddressLine2: "",
  //floorNumber: "",
  //roomNumber: "",

  //amountPaid: "",
  //roomType: "",
  //   checkInDate: "",
  //   transactionDate: "",
  //   noticeDate: "",
  //   checkOutDate: "",
  // workAddressLine2: '',
  // Idproof: '',
  // passport: '',
  // bookingDate: '',
  // checkoutDate: '',
  // arrivalDate: '',
  // roomRent: '',
  // securityDeposit: '',
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
  email: Yup.string().email("Invalid email.").required("Required"),
  dateOfBirth: Yup.date()
    .required("DOB is Required")
    .test(
      "DOB",
      "Please choose a valid date of birth",
      (date) => moment().diff(moment(date), "years") >= 12
    ),
  gender: Yup.string().required("Required"),
  personalNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter Valid Mobile Number",
      excludeEmptyString: false,
    })
    .required("Required"),
  localGaurdianPhoneNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter Valid Mobile Number",
      excludeEmptyString: false,
    })
    .required("Required"),
  secondaryPhoneNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter Valid Mobile Number",
      excludeEmptyString: false,
    })
    .required("Required"),
  aadharNumber: Yup.number().required("Required"),
  fatherName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid FatherName ")
    .required("Required"),
  fatherNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter valid Mobile number.",
      excludeEmptyString: false,
    })
    .required("Required"),

  workPhone: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter valid Mobile number.",
      excludeEmptyString: false,
    })
    .required("Required"),
  localGaurdianName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid FatherName ")
    .required("Required"),

  bloodGroup: Yup.string()
    .matches(/^(A|B|AB|O)[+-]$/, {
      message: "Please enter valid Blood Group.",
      excludeEmptyString: false,
    })
    .required("Required"),
  occupation: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Occuaption ")
    .required("Required"),

  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string().required("Required"),
  city: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid City Name")
    .required("Required"),
  state: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid State ")
    .required("Required"),
  // country: Yup.string().required('Required'),
  // workPhone: Yup.string()
  // 	.matches(/^[6-9]\d{9}$/, {
  // 		message: 'Please enter Valid Mobile Number',
  // 		excludeEmptyString: false
  // 	})
  // 	.required('Required'),
  workAddressLine1: Yup.string().required("Required"),
  workAddressLine2: Yup.string().required("Required"),
  buildingName: Yup.string().required("Required"),

  // workAddressLine2: Yup.string().required('Required'),
  //Idproof: Yup.mixed().required('File is required'),
  //passport: Yup.mixed().required('File is required'),
  //bookingDate: Yup.date().required('Required'),
  //checkoutDate: Yup.date().required('Required'),
  //arrivalDate: Yup.date().required('Required'),
  // roomRent: Yup.number().required('Required'),
  // securityDeposit: Yup.number().required('Required'),
  // checkinNotes: Yup.string().required('Required'),
});

const GuestLoginForm = () => {
  const [building, setBuilding] = React.useState([]);
  const [oneBuilding, setoneBuilding] = React.useState("");
  const [bed, setBed] = React.useState([]);
  const [build, setBuild] = React.useState([]);

  let buildingNamesArray = [];
  let bedIdArray = [];
  let totalBeds = [];
  //console.log(building)
  const setOneBuilding = (e) => {
    // setBuild(e.target.value)
    console.log(e.target.value);
    setoneBuilding(e.target.value);
  };
  useEffect(() => {
    axios
      .get("http://localhost:8085/bed/getAvailableBedsByBuildings")
      .then((res) => {
        //   const buildingdata = res;
        //   setBuilding(buildingdata);
        //   console.log(buildingdata)
        res.data.map((data) => {
          console.log(data);
          console.log(data.building_name);
          //console.log(data.beds)
          setBuild(data.beds);
          buildingNamesArray.push(data.building_name);
        });
        console.log(buildingNamesArray);
        //  console.log(bedIdArray);
        setBuilding(buildingNamesArray);
        //  setBed(bedIdArray)
        console.log(building);

        //setBuilding(res.data)
        //console.log(building)
        //console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  //totalBeds.push(build)
  build.map((bed) => {
    bedIdArray.push(bed.bedId);
  });

  //setBed(bedIdArray)
  console.log(totalBeds);
  console.log(bedIdArray);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={async (guest) => {
                console.log(guest);

                // console.log(guest.Idproof.name);
                // const res = await axios.post(
                //   "http://localhost:8989/guest-service/addGuest",

                //     guest
                //     //payment,

                // );
                // console.log(res.data);
              }}
            >
              {(formProps) => (
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
                      <DateTimePicker
                        maxDate={new Date()}
                        name="dateOfBirth"
                        label="Date of Birth"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="personalNumber" label="Personal Phone" />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield
                        name="secondaryPhoneNumber"
                        label="Secondary Phone"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="fatherName" label="Father's Name" />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="fatherNumber" label="Father's Phone" />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield
                        name="localGaurdianName"
                        label="Local Gauardian's Name"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield
                        name="localGaurdianPhoneNumber"
                        label="Local Guardian's Phone"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="bloodGroup" label="Blood Group" />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="occupation" label="Occupation" />
                    </Grid>
                    <br />

                    <Grid item xs={6}>
                      <h6>Gender</h6>

                      <Select name="gender" options={Gender} width  />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="aadharNumber" label="Aadhar Number" />
                    </Grid>
                    {/* <Grid item xs={2} />
										<Grid item xs={3}>
											<CustomizedSnackbars />
										</Grid>
										<br /> */}
                    <Grid item xs={12} />
                    <Grid item xs={12}>
                      <Typography>
                        <h4 align="center">Allocate Room</h4>

                        <br />
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      {/* <Gender /> */}

                      {/* <Select name="gender" label="Gender" ><MenuItem value=""></MenuItem>{
						  building.map(item=>(<MenuItem key={item.id} value={item.id}>{item.buildingName}</MenuItem>))

					  }</Select> */}
                      <h6>Select Building</h6>
                      {/* <Select
                        // labelId="demo-simple-select-label"
                        // id="demo-simple-select"
                        value={oneBuilding}
                        name="buildingName"
                        onChange={setOneBuilding}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select> */}
                      <Select
					  name="buildingName"
                        // value={age}

                        options={building}>
					  </Select>
                        
                       {/* // value={Formik.values.buildingName}
                        //onChange={Formik.setOneBuilding} */}
                      
                      {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
                      {/* </Select> */}
                      {/* <option value=""></option>{
          building.map((value)=>(
            <option value={value.id} key={value.id}>
              {value.buildingName}
            </option>
          ))} */}
                      <Grid item xs={6}></Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <h6>Select Bed</h6>
                      <Select
                        
                        name="bedId"
                        // value={age}

                        options={bedIdArray}
                        // onChange={handleChange}
                      ></Select>
                      {/* <Textfield name="duration" label="Duration" /> */}
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                        <h4 align="center">Booking Details</h4>
                        <br />
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <h6>OccupancyType</h6>
                      <Select
                        name="occupancytype"
                        options={Occupancytype}
                        width
                      />
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
                    <Grid item xs={6}>
                      <Textfield name="transactionId" label="Transaction ID" />
                    </Grid>

                    {/* <Grid item xs={6}>
											<FloorNumberDropDown />
										</Grid>
										<Grid item xs={6} sx={{ paddingTop: 15 }}>
											<RoomNumberDropDown />
										</Grid>
										<Grid item xs={6}>
											<GroupedSelect />
										</Grid> */}

                    {/* <Grid item xs={6}>
											<BedNumberDropDown />
										</Grid> */}

                    <Grid item xs={12}>
                      <Typography>
                        <h4 align="center">Permanent Address</h4>
                        <br />
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="addressLine1" label="Address Line 1" />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="addressLine2" label="Address Line 2 " />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="pincode" label="PinCode" />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="city" label="City" />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="state" label="State" />
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

                    {/* <Divider variant="middle" />
                    <Grid item xs={12}>
                      <Typography>
                        <h4 align="center">Upload Documents</h4>
                        <br />
                      </Typography>
                    </Grid> */}

                    {/* <Grid item xs={12}>
											<h6>ID Proof:(Pancard/AadharCard/VoterID/DrivingLicence)</h6>
											<input
												name="Idproof"
												helperText="Govt ID Proof"
												type="file"
												onChange={(event) =>
													formProps.setFieldValue('Idproof', event.target.files[0])}
											/>
										</Grid> */}

                    {/* <Grid item xs={12}>
										<Textfield
											name="passport"
											helperText="upload passport size photo"
											type="file"
										/>
									</Grid> */}

                    {/* <Divider variant="middle" />
                    <Grid item xs={12}>
                      <Typography>
                        <h4 align="center">Booking Details</h4>
                        <br />
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <DateTimePicker
                        name="checkInDate"
                        label="Check-In date"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <DateTimePicker name="noticeDate" label="Notice Date" />
                    </Grid>
                    <Grid item xs={6}>
                      <DateTimePicker
                        name="checkOutDate"
                        label="Check-Out date"
                      />
                    </Grid> */}

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
                    {/* <Divider variant="middle" /> */}

                    {/* <MDButton variant="outlined" color="info" size="medium" value="submit">
                                            Submit
                                            </MDButton> */}
                    <Grid item xs={3} sx={{ paddingBottom: 3 }}>
                      <Button type="submit">Submit</Button>
                    </Grid>

                    {/* <br />
										<br />
										<br /> */}
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

export default GuestLoginForm;
