import React, { useState } from "react";
//import Header from '../Components/Header';
import { Formik, Form } from "formik";
import * as Yup from "yup";
//import { createStyles, makeStyles } from '@mui/styles';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, Container, Grid, TextField, Typography } from "@mui/material";
// import Textfield from "./Components/Textfeild/index";


//import Divider from '@mui/material/Divider';
// import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import SampleReport from "./SampleReport"

const INITIAL_FORM_STATE = {

    branch: "",
    reportType: "",
    status: "",
    guestStatu: "",
    checkoutDate: "",
    arrivalDate: "",
};

const FORM_VALIDATION = Yup.object().shape({

    branch: Yup.number().required("Required"),
    roomType: Yup.string().required("Required"),
    status: Yup.number().required("Required"),
    guestStatus: Yup.number().required("Required"),
    checkoutDate: Yup.date().required("Required"),
    arrivalDate: Yup.date().required("Required")

});



const BulkImportForm = () => {
    //const classes = useStyles();

    const [building, setBuilding] = React.useState("");

    const handleChangeBuildingType = (event) => {
        setBuilding(event.target.value);
    };
    const [reportType, setReportType] = React.useState("");

    const handleChangeReportType = (event) => {
        setReportType(event.target.value);
    };

    const [role, setRole] = React.useState("");

    const handleChangeRole = (event) => {
        setRole(event.target.value);
    };

    const [file, setFile] = React.useState("");

    const handleChangeFile = (event) => {
        setFile(event.target.value);
    };


    return (
        <>
            <MDBox><MDBox> <Grid container pt={4} borderRadius={0.5}>
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
                                    <h6> Building</h6>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Select Buildling
                                        </InputLabel>
                                        <Select
                                            sx={{ minHeight: 44 }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={building}
                                            label="Select Building"
                                            name="buliding"
                                            name="bulding"
                                            onChange={handleChangeBuildingType}
                                        >
                                            <MenuItem value={11}>Building-1</MenuItem>
                                            <MenuItem value={12}>Bulding-2</MenuItem>
                                            <MenuItem value={12}>Bulding-3</MenuItem>
                                            <MenuItem value={12}>Bulding-4</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6} pt={3}>
                                    <h6>Report Type</h6>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Select Report Type
                                        </InputLabel>
                                        <Select
                                            sx={{ minHeight: 44 }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={reportType}
                                            label="Select Report type"
                                            name="reportType"

                                            onChange={handleChangeReportType}
                                        >
                                            <MenuItem value={11}>Transaction Report</MenuItem>
                                            <MenuItem value={12}>Guest Master Report</MenuItem>
                                            <MenuItem value={12}>Occupancy Report</MenuItem>
                                            <MenuItem value={12}>Upcoming Check-outs</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6} pt={3}>
                                    <h6> Role</h6>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Select Role
                                        </InputLabel>
                                        <Select
                                            sx={{ minHeight: 44 }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={role}
                                            label="Select Role"
                                            name="role"
                                            onChange={handleChangeRole}
                                        >
                                            <MenuItem value={13}>Manager-1</MenuItem>
                                            <MenuItem value={14}>Manager-2</MenuItem>
                                            <MenuItem value={15}>Admin</MenuItem>
                                            <MenuItem value={16}>Others</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} pt={3}>
                                    <h6> Reason to Upload</h6>
                                    <TextField name="reason to upload"
                                        label="Reason to Upload"
                                        rows={1} fullWidth></TextField>
                                </Grid>
                                <Grid item xs={6} pt={3}>
                                    <h6>Upload File</h6>
                                    <TextField name="file upload"

                                        rows={1} fullWidth
                                        type="file"></TextField>
                                </Grid>
                            </Form>
                        </Formik>
                    </div>
                </Container>
            </Grid>
            </MDBox>
             <MDBox sx={{ ml: -35 }} >
                    <SampleReport />
                </MDBox>
                <br />
                <MDBox display="flex" alignItems="center" sx={{ pl: 3 }} pb={5}>
                    <Grid item xs={1} justifyContent="center">
                        <MDButton variant="gradient" color="info" size="small" >
                            Submit
                        </MDButton>
                    </Grid>

                </MDBox>
            </MDBox>



        </>

    );
};
export default BulkImportForm;
