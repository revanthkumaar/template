import React, { useState } from 'react';
//import Header from '../Components/Header';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
//import { createStyles, makeStyles } from '@mui/styles';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Container,
    Grid,
    Typography
} from '@mui/material';
import Textfield from './Components/Textfield';
import Button from './Components/Button';

import moment from 'moment'
//import Divider from '@mui/material/Divider';
import Divider from '@mui/material/Divider';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// const useStyles = makeStyles((theme) => createStyles({
//     root: {
//       marginTop: theme.spacing(5),
//       marginBottom: theme.spacing(8),
//     },
//   }),
//   )
//   const theme = createTheme();
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(1, '1 Sharing', 18000, 20000),
    createData(2, '2 Sharing', 10000, 11500),
    createData(3, '3 Sharing', 7500, 8500),
    createData(4, '4 Sharing', 6500, 7500),

];

const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    bedNum: '',
    secondaryPhone: '',
    fatherName: '',
    fatherPhone: '',
    localGaurdianName: '',
    bloodGroup: '',
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
    workCity: '',
    workState: '',
    bookingDate: '',
    checkoutDate: '',
    arrivalDate: '',
    roomRent: '',
    securityDeposit: '',
    checkinNotes: '',
    termsOfService: false
};

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid FirstName ")
        .required('Required'),
    lastName: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid LastName ")
        .required('Required'),
    fatherName: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid FatherName ")
        .required('Required'),
    localGaurdianName: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid FatherName ")
        .required('Required'),
    email: Yup.string()
        .email('Invalid email.')
        .required('Required'),
    bloodGroup: Yup.string().matches(/^(A|B|AB|O)[+-]$/, { message: "Please enter valid Blood Group.", excludeEmptyString: false }),
    bedNum: Yup.string().matches(/^[6-9]\d{9}$/, { message: "Please enter valid Bed number", excludeEmptyString: false }),
    secondaryPhone: Yup.string().matches(/^[6-9]\d{9}$/, { message: "Please enter Valid Mobile Number", excludeEmptyString: false }),
    securityDeposit: Yup.number(),
    roomRent: Yup.number(),
    fatherPhone: Yup.string().matches(/^[6-9]\d{9}$/, { message: "Please enter valid Mobile number.", excludeEmptyString: false }),
    localGaurdianPhone: Yup.string().matches(/^[6-9]\d{9}$/, { message: "Please enter valid Mobile number.", excludeEmptyString: false }),
    addressLine1: Yup.string()
        .required('Required'),
    addressLine2: Yup.string(),
    city: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid City Name")
        .required('Required'),
    state: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid State ")
        .required('Required'),
    workCity: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid City Name")
        .required('Required'),
    workState: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid State ")
        .required('Required'),
    country: Yup.string()
        .required('Required'),
    arrivalDate: Yup.date()
        .required('Required'),
    dateOfBirth: Yup.string()
        .required("DOB is Required")
        .test(
            "DOB",
            "Please choose a valid date of birth",
            (date) => moment().diff(moment(date), "years") >= 12
        ),
    departureDate: Yup.date()
        .required('Required'),
    checkinNotes: Yup.string(),
    termsOfService: Yup.boolean()
        .oneOf([true], 'The terms and conditions must be accepted.')
        .required('The terms and conditions must be accepted.'),
    Idproof: Yup.mixed().required('File is required'),
    passport: Yup.mixed().required('File is required'),
});

const GuestLoginForm = () => {
    //const classes = useStyles();

    const [property, setProperty] = React.useState('');

    const handleChangeOption = (event) => {
        setProperty(event.target.value);
    }
    const [roomType, setRoomType] = React.useState('');

    const handleChangeRoomType = (event) => {
        setRoomType(event.target.value);
    }

    const [sharing, setSharing] = React.useState('');

    const handleChangeSharing = (event) => {
        setSharing(event.target.value);
    }

    const [roomNo, setRoomNo] = React.useState('');

    const handleChangeRoomNo = (event) => {
        setRoomNo(event.target.value);
    }

    const [bedNo, setBedNo] = React.useState('');

    const handleChangeBedNo = (event) => {
        setBedNo(event.target.value);
    }

    const [shelfNo, setShelfNo] = React.useState('');

    const handleChangeShelfNo = (event) => {
        setShelfNo(event.target.value);
    }
    return (

    <Grid container>
        <Grid item xs={12}>
            <Container maxWidth="md">
                <div >

                    <Formik
                        initialValues={
                            INITIAL_FORM_STATE
                        }
                        validationSchema={FORM_VALIDATION}
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >


                        <Form>

                            <Grid container spacing={2}>

                                <Grid item xs={3}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Property</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={property}
                                            label="Property"
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
                                        <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={roomType}
                                            label="Room Type"
                                            onChange={handleChangeRoomType}
                                        >
                                            <MenuItem value={11}>AC Room</MenuItem>
                                            <MenuItem value={12}>Non AC Room</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>



                                <Grid item xs={3}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Sharing</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={sharing}
                                            label="Sharing"
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
                                        <InputLabel id="demo-simple-select-label">Room No.</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={roomNo}
                                            label="Room No."
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
                                        <InputLabel id="demo-simple-select-label">Bed No.</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={bedNo}
                                            label="Bed No."
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
                                        <InputLabel id="demo-simple-select-label">Shelf No.</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={shelfNo}
                                            label="Shelf No."
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
                                    <Textfield
                                        name="secondaryPhone"
                                        label="Room No."

                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <Textfield
                                        name="bedNum"
                                        label="Bed No."
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Textfield
                                        name="checkinNotes"

                                        label="Remarks"
                                        multiline={true}
                                        rows={4}
                                    />
                                </Grid>


                                <Divider variant="middle" />
                                <Grid item xs={4} justifyContent='center'>
                                    <Button>
                                        <Divider>

                                        </Divider>
                                        Submit
                                    </Button>
                                </Grid>


                            </Grid>

                        </Form>


                    </Formik>

                </div>

            </Container>
            {/* <Container>
                    <div>
                    <Grid container spacing={2} columns={16}>
    <Grid item xs={3}>

    </Grid>
    <Grid item xs={12}>
    <TableContainer component={Paper} display="flex" justifyContent="flex-end">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl No</TableCell>
            <TableCell align="right">Room</TableCell>
            <TableCell align="right">Non A/C Room&nbsp;</TableCell>
            <TableCell align="right">A/C Room&nbsp;</TableCell>
            <TableCell align="right">Room &nbsp;</TableCell>
            <TableCell align="right">BED &nbsp;</TableCell>
            <TableCell align="right">SHELF&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}<CheckBox/></TableCell>
              <TableCell align="right">{row.carbs}<CheckBox/></TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     
    </Grid>
  
   
    </Grid>
                    </div>
                </Container> */}
        </Grid>
    </Grid >

    );

};
export default GuestLoginForm;