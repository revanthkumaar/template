import React, { useState } from "react";
//import Header from '../Components/Header';
import { Formik, Form } from "formik";
import * as Yup from "yup";
//import { createStyles, makeStyles } from '@mui/styles';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, Container, Grid, Typography } from "@mui/material";
import DateTimePicker from "./Components/DataTimePicker";

//import Divider from '@mui/material/Divider';
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MDButton from "components/MDButton";

const INITIAL_FORM_STATE = {

  branch: "",
  reportType: "",
  status: "",
  guestStatus: "",
  checkoutDate: "",
  arrivalDate: "",
};

const FORM_VALIDATION = Yup.object().shape({

  branch: Yup.number().required("Required"),
  reportType: Yup.string().required("Required"),
  status: Yup.number().required("Required"),
  guestStatus: Yup.number().required("Required"),
  checkoutDate: Yup.date().required("Required"),
  arrivalDate: Yup.date().required("Required")

});



const ReportGeneratorForm = () => {
  //const classes = useStyles();

  const [guestStatus, setGuestStatus] = React.useState("");

  const handleChangeOption = (event) => {
    setGuestStatus(event.target.value);
  };
  const [branch, setBranch] = React.useState("");

  const handleChangeRoomType = (event) => {
    setBranch(event.target.value);
  };

  const [reportType, setReportType] = React.useState("");

  const handleChangeSharing = (event) => {
    setReportType(event.target.value);
  };

  const [status, setStatus] = React.useState("");

  const handleChangeRoomNo = (event) => {
    setStatus(event.target.value);
  };


  const submitField = () => {
		alert('Confirm to Add Fields');
	};


  return (
    <>
      <Grid container pt={3}>
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
                <Grid item xs={3} pt={1}>
                  <h6>Report Type</h6>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Report Type
                    </InputLabel>
                    <Select
                      sx={{ minHeight: 44 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={branch}
                      label="Filter by Branch"
                      name="branch"
                      onChange={handleChangeRoomType}
                    >
                      <MenuItem value={11}>Transactions</MenuItem>
                      <MenuItem value={12}>Check-In</MenuItem>
                      <MenuItem value={13}>Check-Out</MenuItem>
                      <MenuItem value={14}>Available Beds</MenuItem>
                      <MenuItem value={15}>Available Rooms</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3} pt={3}>
                  <h6>Select Payment Status</h6>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                    Filter by Status
                    </InputLabel>
                    <Select
                      sx={{ minHeight: 44 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={status}
                      label="Filter by Status"
                      name="status"
                      onChange={handleChangeSharing}
                    >
                      <MenuItem value={13}>Pending</MenuItem>
                      <MenuItem value={14}>Completed</MenuItem>
                      <MenuItem value={15}>PrePaid</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={3} pt={3}>
                  <h6>Select Guest Status</h6>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                    Filter by Status
                    </InputLabel>
                    <Select
                      sx={{ minHeight: 44 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={guestStatus}
                      label="Filter by Guest Status "
                      name="guestStatus"
                      onChange={handleChangeRoomNo}
                    >
                      <MenuItem value={17}>available</MenuItem>
                      <MenuItem value={18}>Filled</MenuItem>
                      <MenuItem value={19}>Pending</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Grid item xs={12} pt={3}>
                    <h6>Selcet Report Duration</h6>
                    <Grid item xs={3} pt={2}>
                      <DateTimePicker
                        name="checkoutDate"
                        label="From"
                      />
                    </Grid>
                    <Grid item xs={3} pt={2}>
                      <DateTimePicker
                        name="arrivalDate"
                        label="To"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid item xs={4} justifyContent="center">
                  <MDButton variant="outlined" color="info" size="medium"onClick={submitField}>
                    Generate Report
                  </MDButton>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </>
  );
};
export default ReportGeneratorForm;
