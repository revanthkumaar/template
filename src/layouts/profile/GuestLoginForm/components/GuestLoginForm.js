import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import axios from "axios";
import axios from '../../../../Uri'
import { Container, Grid, Typography, InputLabel, Alert } from "@mui/material";
import moment from "moment";
//import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import Occupancytype from "./OccupancyType";
import Textfield from "./TextField";
import Select from "./Select";
import Gender from "./Gender";
import state from "./State";
//import Checkbox from "./CheckBox";
import DateTimePicker from "./DataTimePicker";
import Button from "./Button";
//import MDButton from "components/MDButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import days from "./Days";
import months from "./Months"
//import Button from "@mui/material/Button"


const useStyles = makeStyles({
  root: {
    height: 35,
  },
  size: {
    width: 40,
    height: 30,
  },
});

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  personalNumber: "",
  secondaryPhoneNumber: "",
  fatherName: "",
  fatherNumber: "",
  // localGuardianName: "",
  // localGuardianPhoneNumber: "",
  bloodGroup: "",
  occupation: "",
  gender: "",
  aadharNumber: "",
  buildingName: "",
  bedId: "",
  occupancyType: "",
  duration:"",
  amountTopay:"",
  amountPaid: "",
  transactionId: "",
  addressLine1: "",
  addressLine2: "",
  pincode: "",
  city: "",
  state: "",
  amountTopay:"",
  // workPhone: "",
  // workAddressLine1: "",
  // workAddressLine2: "",
  checkinNotes: "",
  //termsOfService: false,
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
      (date) => moment().diff(moment(date), "years") >= 12 &&  moment().diff(moment(date), "years") <= 80
    ),
  // gender: Yup.string().required("Required"),
  // localGuardianName: Yup.string()
  //   .matches(/^[aA-zZ\s]+$/, "Invalid Name ")
  //   .required("Required"),

  // localGuardianPhoneNumber: Yup.string()
  //   .matches(/^[6-9]\d{9}$/, {
  //     message: "Please enter Valid Mobile Number",
  //     excludeEmptyString: false,
  //   })
  //   .required("Required"),
  personalNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter Valid Mobile Number",
      excludeEmptyString: false,
    })
    .required("Required"),
  // secondaryPhoneNumber: Yup.string()
  //   .matches(/^[6-9]\d{9}$/, {
  //     message: "Please enter Valid Mobile Number",
  //     excludeEmptyString: false,
  //   })
  //   .required("Required"),
  aadharNumber: Yup.string()
    .matches(/^\d{4}\d{4}\d{4}$/, "Invalid Aadhar Number")
    .required("Required"),
  // fatherName: Yup.string()
  //   .matches(/^[aA-zZ\s]+$/, "Invalid FatherName ")
  //   .required("Required"),
  // fatherNumber: Yup.string()
  //   .matches(/^[6-9]\d{9}$/, {
  //     message: "Please enter valid Mobile number.",
  //     excludeEmptyString: false,
  //   })
  //   .required("Required"),
  pincode: Yup.string()
    .matches(/^\d{2}\d{2}\d{2}$/, "Invalid PinCode Number")
    .required("Required"),
  // workPhone: Yup.string()
  //   .matches(/^[6-9]\d{9}$/, {
  //     message: "Please enter valid Mobile number.",
  //     excludeEmptyString: false,
  //   })
  //   .required("Required"),

  bedId: Yup.string().required("Required"),
  // bloodGroup: Yup.string()
  //   .matches(/^(A|B|AB|O)[+-]$/, {
  //     message: "Please enter valid Blood Group.",
  //     excludeEmptyString: false,
  //   })
  //   .required("Required"),
  // occupation: Yup.string()
  //   .matches(/^[aA-zZ\s]+$/, "Occuaption ")
  //   .required("Required"),

  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string().required("Required"),
  city: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid City Name")
    .required("Required"),
  state: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid State ")
    .required("Required"),
  // workAddressLine1: Yup.string().required("Required"),
  // workAddressLine2: Yup.string().required("Required"),
  buildingName: Yup.string().required("Required"),
  occupancyType: Yup.string().required("Required"),
  amountPaid: Yup.number().required("Required"),
  // transactionId: Yup.string().required("Required"),
});

const GuestLoginForm = () => {
  const [building, setBuilding] = React.useState([]);
  const [oneBuilding, setoneBuilding] = React.useState("");
  const [bed, setBed] = React.useState([]);
  const [availableBeds, setAvailableBeds] = React.useState([]);
  const [putBuilding, setPutBuilding] = React.useState([]);
  const [rent, setRent] = React.useState([]);
  const [duration,setDuration]=React.useState([]);
  const [defaultRentofBed,setDefaultRentofBed]=React.useState([])
  const [amountToPay ,setAmountToPay]= React.useState([])
  const [occtype,setOcctype]=React.useState([])
  const [amt,setAmt]=React.useState([])

  let buildingNamesArray = [];
  let availableBedsByBuidlingName = [];
  let empty =[]
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("/bed/getAvailableBedsByBuildings")
      .then((res) => {
        setoneBuilding(res.data);
        console.log(res.data);

        res.data.map((data) => {
          buildingNamesArray.push(data.buildingName);
        });

        setBuilding(buildingNamesArray);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (id) => {
    setPutBuilding(id.target.outerText);
    const bool = oneBuilding.filter(
      (buildingData) => buildingData.buildingName == id.target.outerText
    );

    bool.map((bed) => setAvailableBeds(bed.beds));
  };

  availableBeds.map((item) => {
    availableBedsByBuidlingName.push(item.bedId);
  });
  

 
  const selectBed = (e) => {
    setBed(e.target.outerText);

    const bedRent = availableBeds.filter(
      (bed) => bed.bedId == e.target.outerText
    );
    console.log(bedRent)

    bedRent.map((post) =>
    {
      setRent(post.defaultRent)
      setDefaultRentofBed(post.defaultRent)
    } 
    );
  };
  const occupency = (i) => {
    setOcctype(i.target.outerText)
    if(i.target.outerText=="Daily"){
      setDuration(days)
      var checkInAmount = (amt*((defaultRentofBed)/30))+1000;
      setAmountToPay(checkInAmount.toFixed(2))
      

    }
    else if(i.target.outerText == "Monthly"){
      setDuration(months)
      var checkInAmount = (amt*defaultRentofBed)+3000;
      setAmountToPay(checkInAmount)
      
    }
    else {
      setDuration(empty);
      setAmountToPay(defaultRentofBed);
    }
 

  };


  
  
  const calculateCheckAmount=(a)=>{
    var size = Object.keys(duration).length;
  console.log(size)
    console.log(occtype)
    
    console.log(a.target.outerText)
    setAmt(a.target.outerText)
    
if(size == 12){
  var checkInAmount = (a.target.outerText*defaultRentofBed)+3000;
  setAmountToPay(checkInAmount)
}
else if(size == 15){
  var checkInAmount = (a.target.outerText*((defaultRentofBed)/30))+1000;
  setAmountToPay(checkInAmount.toFixed(2))

}
else{
  setAmountToPay(defaultRentofBed);
}
   

  }
  
  console.log(rent);

  const obj = { bedId: bed };

  const obje = { buildingName: putBuilding };
  const objee = { defaultRent: rent };
  const amountNeedToPay=(n)=>{
    console.log(n.target.value)

  }
  

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div>
            
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
             
              onSubmit={async(guest, { resetForm }) => {
                const guests = Object.assign(guest, obj);

                const gustes = Object.assign(guests, obje);
                
                const gusting = Object.assign(gustes, objee);
                console.log(gusting);
                console.log(gusting.amountPaid);
                console.log(amountToPay)
                if(gusting.amountPaid==amountToPay){
                  alert("Guest On Boarded Successfully")
                  const res = await axios.post(
                    "/guest/addGuest",
  
                    gusting
                     
  
                  );
                  console.log(res.data)
                }
                else{
                  alert("Guest Need to pay The full Amount")
                }
                setTimeout(() => {
                  console.log(rent);
                  
                  
                   
                  resetForm();
                }, 50);
                
             
                 
              }}
            >
              {(formProps) => (
                <Form>
                  <Grid container spacing={2}>
                 
                    <Grid item xs={12}>
                      <Typography>
                        <br />
                        <h4 align="center">Allocate Room</h4>
                        <br />
                      </Typography>
                      <InputLabel id="demo-simple-select-labe">
                        {" "}
                         * indicates fields are Required
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6}>
                      <h6>Select Building *</h6>

                      <Select
                        className={classes.root}
                        name="buildingName"
                        options={building}
                        onClick={handleClick}
                        required
                      ></Select>

                      <Grid item xs={6}></Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <h6>Select Bed *</h6>
                      <Select
                        className={classes.root}
                        name="bedId"
                        options={availableBedsByBuidlingName}
                        onClick={selectBed}
                      ></Select>
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel id="demo-simple-select-labe">
                        {" "}
                        OccupancyType *
                      </InputLabel>
                      <Select
                        className={classes.root}
                        name="occupancyType"
                        options={Occupancytype}
                        onClick={occupency}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel id="demo-simple-select-labe">
                        {" "}
                        Duration
                      </InputLabel>
                      <Select
                        className={classes.root}
                        name="duration"
                        options={duration}
                        onClick={calculateCheckAmount}
                       
                      />
                    </Grid>
                   
                    <Grid item xs={6}>
                      <Textfield
                        name="dueAmount"
                        label="Default Rent"
                        value={defaultRentofBed}
                      />
                      
                    </Grid>
                    <Grid item xs={6}>
                    <Textfield
                        name="amountTopay"
                        label="Amount To Be Paid"
                        value={amountToPay}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                        <br />
                        <h4 align="center">Booking/Payment Details</h4>
                        <br />
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="amountPaid" label="Amount Paid" required onClick={amountNeedToPay} />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="transactionId" label="Transaction ID" />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography>
                        <br />
                        <h4 align="center">Guest's Personal Information</h4>
                        <br />
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="firstName" label="First Name"  required/>
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="lastName" label="Last Name" required />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="email" label="Email" required />
                    </Grid>
                    <Grid item xs={6}>
                      <DateTimePicker
                        maxdate={new Date()}
                        name="dateOfBirth"
                        label="Date of Birth"
                        required
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="personalNumber" label="Personal Phone" required />
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

                    {/* <Grid item xs={6}>
                      <Textfield
                        name="localGuardianName"
                        label="Local Guardian's Name"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield
                        name="localGuardianPhoneNumber"
                        label="Local Guardian's Phone"
                      />
                    </Grid> */}
                    <Grid item xs={6}>
                      <Textfield name="bloodGroup" label="Blood Group" />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="occupation" label="Occupation" />
                    </Grid>
                    <br />

                    <Grid item xs={6}>
                      <InputLabel id="demo-simple-select-label">
                        Select Gender
                      </InputLabel>

                      <Select
                        IconComponent={(Gender) => (
                          <ArrowDropDownIcon className={classes.size} />
                        )}
                        name="gender"
                        options={Gender}
                        className={classes.root}
                      ></Select>
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="aadharNumber" label="Aadhar Number"  required/>
                    </Grid>

                    <Grid item xs={12} />

                    

                    <Grid item xs={12}>
                      <Typography>
                        
                        <h4 align="center">Permanent Address</h4>
                        <br />
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="addressLine1" label="Address Line 1" required/>
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="addressLine2" label="Address Line 2"  required/>
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="pincode" label="Pincode"  required/>
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="city" label="City" required />
                    </Grid>

                    <Grid item xs={6}>
                    <InputLabel id="demo-simple-select-label">
                        Select state *
                      </InputLabel>

                      <Select
                        IconComponent={(Gender) => (
                          <ArrowDropDownIcon className={classes.size} />
                        )}
                        name="state"
                        options={state}
                        className={classes.root}
                      ></Select>
                    </Grid>

                    {/* <Divider variant="middle" />
                    <Grid item xs={12}>
                      <Typography>
                        <br />
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
                    </Grid> */}

                    <Grid item xs={12}>
                      <Textfield
                        name="checkinNotes"
                        label="Check-in Notes"
                        multiline
                        rows={3}
                      />
                    </Grid>

                    {/* <Grid item xs={12}>
                      <Checkbox
                        name="termsOfService"
                        legend="Terms of service"
                        label="I agree"
                      />
                    </Grid> */}

                    <Grid item xs={3} sx={{ paddingBottom: 3 }}>
                      <Button>Submit</Button>
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

export default GuestLoginForm;
