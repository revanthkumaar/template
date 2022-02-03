import React, { useState } from "react";
//import Header from '../Components/Header';
import { Formik, Form } from "formik";
import * as Yup from "yup";
//import { createStyles, makeStyles } from '@mui/styles';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, Container, Grid, Typography } from "@mui/material";
import Textfield from "./Components/Textfield";
import DateTimePicker from "./Components/DataTimePicker";

//import Divider from '@mui/material/Divider';
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MDButton from "components/MDButton";

const INITIAL_FORM_STATE = {
  property: "",
  roomType: "",
  sharing: "",
  roomNo: "",
  bedNo: "",
  shelfNo: "",
};

const FORM_VALIDATION = Yup.object().shape({
  roomNo: Yup.number(),
  bedNo: Yup.number(),
});

const ReportGeneratorForm = () => {
  //const classes = useStyles();

  const [property, setProperty] = React.useState("");

  const handleChangeOption = (event) => {
    setProperty(event.target.value);
  };
  const [roomType, setRoomType] = React.useState("");

  const handleChangeRoomType = (event) => {
    setRoomType(event.target.value);
  };

  const [sharing, setSharing] = React.useState("");

  const handleChangeSharing = (event) => {
    setSharing(event.target.value);
  };

  const [roomNo, setRoomNo] = React.useState("");

  const handleChangeRoomNo = (event) => {
    setRoomNo(event.target.value);
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
                <Grid item xs={6} pt={1}>
                  <h6>Select Branch</h6>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Branch
                    </InputLabel>
                    <Select
                      sx={{ minHeight: 44 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={roomType}
                      label="Filter by Branch"
                      name="roomType"
                      onChange={handleChangeRoomType}
                    >
                      <MenuItem value={11}>Madhapur</MenuItem>
                      <MenuItem value={12}>Hi-Tech city</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={6} pt={3}>
                  <h6>Select Report Type</h6>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Report Type
                    </InputLabel>
                    <Select
                      sx={{ minHeight: 44 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={roomType}
                      label="Filter by Report type"
                      name="roomType"
                      onChange={handleChangeRoomType}
                    >
                      <MenuItem value={11}>Static</MenuItem>
                      <MenuItem value={12}>Dynamic</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={6} pt={3}>
                  <h6>Select Payment Status</h6>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                    Filter by Status
                    </InputLabel>
                    <Select
                      sx={{ minHeight: 44 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sharing}
                      label="Filter by Status"
                      name="sharing"
                      onChange={handleChangeSharing}
                    >
                      <MenuItem value={13}>Pending</MenuItem>
                      <MenuItem value={14}>Completed</MenuItem>
                      <MenuItem value={15}>PrePaid</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={6} pt={3}>
                  <h6>Select Guest Status</h6>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                    Filter by Status
                    </InputLabel>
                    <Select
                      sx={{ minHeight: 44 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={roomNo}
                      label="Filter by Guest Status "
                      name="roomNo"
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
                    <Grid item xs={6} pt={2}>
                      <DateTimePicker
                        name="checkoutDate"
                        label="From"
                      />
                    </Grid>
                    <Grid item xs={6} pt={2}>
                      <DateTimePicker
                        name="arrivalDate"
                        label="To"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid item xs={4} justifyContent="center">
                  <MDButton variant="outlined" color="info" size="medium">
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
