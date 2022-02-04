import React, { useState } from "react";
//import Header from '../Components/Header';
import { Formik, Form } from "formik";
import * as Yup from "yup";
//import { createStyles, makeStyles } from '@mui/styles';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, Container, Grid, Typography } from "@mui/material";
import Textfield from "./Components/Textfield";

import moment from "moment";
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
  shelfNo: ""
  
};

const FORM_VALIDATION = Yup.object().shape({
  roomNo: Yup.number(),
  bedNo: Yup.number(),
});

const RoomAvailabilityForm = () => {
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

  const [bedNo, setBedNo] = React.useState("");

  const handleChangeBedNo = (event) => {
    setBedNo(event.target.value);
  };

  const [shelfNo, setShelfNo] = React.useState("");

  const handleChangeShelfNo = (event) => {
    setShelfNo(event.target.value);
  };
  return (
    <>
      <Grid container>
        <Grid  item xs={12}>
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
                    <Grid item xs={3}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Property
                        </InputLabel>
                        <Select
                          sx={{ minHeight: 44 }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={property}
                          label="Property"
                          name="property"
                          onChange={handleChangeOption}
                        >
                          <MenuItem value={10}>Building A</MenuItem>
                          <MenuItem value={20}>Building B</MenuItem>
                          <MenuItem value={30}>Building C</MenuItem>
                          <MenuItem value={40}>Building D</MenuItem>
                          <MenuItem value={50}>Building E</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={3}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Room Type
                        </InputLabel>
                        <Select
                          sx={{ minHeight: 44 }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={roomType}
                          label="Room Type"
                          name="roomType"
                          onChange={handleChangeRoomType}
                        >
                          <MenuItem value={11}>AC Room</MenuItem>
                          <MenuItem value={12}>Non AC Room</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={3}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Sharing
                        </InputLabel>
                        <Select
                          sx={{ minHeight: 44 }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={sharing}
                          label="Sharing"
                          name="sharing"
                          onChange={handleChangeSharing}
                        >
                          <MenuItem value={13}>1 sharing</MenuItem>
                          <MenuItem value={14}>2 sharing</MenuItem>
                          <MenuItem value={15}>3 sharing</MenuItem>
                          <MenuItem value={16}>4 sharing</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Room No.
                        </InputLabel>
                        <Select
                          sx={{ minHeight: 44 }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={roomNo}
                          label="Room No."
                          name="roomNo"
                          onChange={handleChangeRoomNo}
                        >
                          <MenuItem value={17}>A1</MenuItem>
                          <MenuItem value={18}>A2</MenuItem>
                          <MenuItem value={19}>A3</MenuItem>
                          <MenuItem value={21}>A4</MenuItem>
                          <MenuItem value={22}>A5</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Bed No.
                        </InputLabel>
                        <Select
                          sx={{ minHeight: 44 }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={bedNo}
                          label="Bed No."
                          name="bedNo"
                          onChange={handleChangeBedNo}
                        >
                          <MenuItem value={2}>A1-B1</MenuItem>
                          <MenuItem value={23}>A1-B2</MenuItem>
                          <MenuItem value={24}>A1-B3</MenuItem>
                          <MenuItem value={25}>A1-B4</MenuItem>
                          <MenuItem value={26}>A1-B5</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={3}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Shelf No.
                        </InputLabel>
                        <Select
                          sx={{ minHeight: 44 }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={shelfNo}
                          label="Shelf No."
                          name="shelfNo"
                          onChange={handleChangeShelfNo}
                        >
                          <MenuItem value={27}>A1-S1</MenuItem>
                          <MenuItem value={28}>A1-S2</MenuItem>
                          <MenuItem value={29}>A1-S3</MenuItem>
                          <MenuItem value={30}>A1-S4</MenuItem>
                          <MenuItem value={31}>A1-S5</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                      <Textfield name="roomNo" label="Room No." />
                    </Grid>
                    <Grid item xs={3}>
                      <Textfield name="bedNo" label="Bed No." />
                    </Grid>

                    <Divider variant="middle" />
                    <Grid item xs={12} align="right">
                      <MDButton variant="outlined" color="info" size="medium">
                        ADD ROOM
                      </MDButton>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </div>
          </Container>
        </Grid>
      </Grid>

    </>
  );
};
export default RoomAvailabilityForm;
