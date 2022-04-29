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
  var initiatedDate = null
var plannedcheckoutdate = null

    var guestdueamount = props.GuestDueAmount
  OccupancyType = props.guestdetails.occupancyType

  const [dates, setDates] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [managerPayment, setManagerPayment] = useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dt = null;
  const [cdate, setDate] = useState(dt);


  const initiateCheckoutProcess = () => {
     axios.get(`guest/get/${props.guestdetails.id}`).then((res) => setDates(res.data))

    // setCheckOutDate(formatDate(props.guestdetails.checkOutDate));
    // setDate(dt);
  }
  console.log(dates)


  const finalCheckOutHandler = () => {

    axios.get(`guest/checkOutGuest/${props.guestdetails.id}`).then((res) => console.log(res.data))
  }
  return (
    <>
     
      
        <Grid container>
          {props.guestdetails.guestStatus == "InNotice" ? (<div></div>)  : (<Grid xs={5} sx={{pt:"30px",pr:"40px"}}>
    <Button variant="contained" color="primary" onClick={initiateCheckoutProcess} style={{color:"white"} }>INITIATE THE CHECKOUT PROCESS</Button>
    </Grid>)}


        

    {/* <p className="Text-CheckOut">Checkout Initiated on: {cdate}</p> */}
   
         

         
          { }


          {props.guestdetails.guestStatus== "InNotice" && guestdueamount == 0 ? (<Grid xs={4} sx={{ pt: "30px", pl: "90px" }} >
            <Button variant="contained" color="primary" style={{ color: "white" }} onClick={finalCheckOutHandler}>Final CheckOut</Button>
            </Grid>) : (<div></div>)}
            {/* <p className="Text-CheckOut">Checkout Date:{checkOutDate}</p> */}

    
          
        </Grid>

        { guestdueamount < 0 ? (<ManagerPaymentsinPopup guestdetails={props.guestdetails} />) : (<div></div>)} 
        { guestdueamount > 0 ? (<GuestpaymentsinPopUp guestdetails={props.guestdetails}/>) : (<div></div>)}
       
    </>
  )
}

export default CheckOut;
