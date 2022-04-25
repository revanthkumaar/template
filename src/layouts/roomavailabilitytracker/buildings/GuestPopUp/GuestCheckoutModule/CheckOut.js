import React from 'react'
//import Button from "layouts/profile/GuestLoginForm/components/Button";

import  "./CheckOut.css"
//import { Button } from '@mui/material';
import Button from '@mui/material/Button';
import { Container, Grid, InputLabel } from "@mui/material";

import { useState,useEffect } from 'react';
import axios from "../../../../../Uri";
import ManagerPaymentsinPopup from './managerPaymentModule/managerPaymentinPopUp';
import GuestpaymentsinPopUp from './GuestPaymentModule/GuestpaymentsinPopUp';


function formatDate(checkInDate) {
  var datePart = checkInDate.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];

  return day + '-' + month + '-' + year;
}
var OccupancyType = null

const CheckOut = (props) => {
  OccupancyType = props.guestdetails.occupancyType

  const [dueAmount, setDueAmount] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [managerPayment, setManagerPayment] = useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dt = null;
  const [cdate, setDate] = useState(dt);
  const handelDate = () => {
    let dt = new Date().toLocaleDateString();
    console.log(props.guestdetails.id)
    // console.log(props.guestdetails.occupancyType)
   

    axios.get(`guest/getFinalDueAmountForCheckout/${props.guestdetails.id}`).then((res) => setDueAmount(res.data))
    setCheckOutDate(formatDate(props.guestdetails.checkOutDate));
    setDate(dt);
  }
  const finalCheckOutHandler = () => {

    axios.get(`guest/checkOutGuest/${props.guestdetails.id}`).then((res) => console.log(res.data))
  }
  return (
    <>
     
      {/* <ManagerPaymentsinPopup  guestdetails={props.guestdetails}/> */}
      {/* <GuestpaymentsinPopUp guestdetails={props.guestdetails}/> */}
        <Grid container>

          {OccupancyType == "daily" || OccupancyType == "monthly" ? (<div></div>) : (<Grid xs={5} sx={{pt:"30px",pr:"40px"}}>
    <Button variant="contained" color="primary" style={{color:"white"}} onClick={handelDate}>Initiate CheckOut</Button>
    <p className="Text-CheckOut">Checkout Initiated on: {cdate}</p>
    </Grid>)}

          {}


    {dueAmount == null ? (<div></div>) :  ( <Grid xs={3} sx={{}}>
       
       <Button variant="outlined" color="primary" style={{color:"black"}}>Final Due Amount:  {dueAmount}</Button>
          </Grid>)}

          { }


          
          <Grid xs={4} sx={{ pt: "30px", pl: "90px" }} >
            <Button variant="contained" color="primary" style={{ color: "white" }} onClick={finalCheckOutHandler}>Final CheckOut</Button>
            <p className="Text-CheckOut">Checkout Date:{checkOutDate}</p>

          </Grid>
        </Grid>
        <GuestpaymentsinPopUp guestdetails={props.guestdetails}/>

      {/* </div> */}
    </>
  )
}

export default CheckOut;
