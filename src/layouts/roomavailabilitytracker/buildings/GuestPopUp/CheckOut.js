import React from 'react'
//import Button from "layouts/profile/GuestLoginForm/components/Button";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./guest.css";
//import { Button } from '@mui/material';
import Button from '@mui/material/Button';
import { Container, Grid, InputLabel } from "@mui/material";
import { useState, useEffect } from 'react';
import axios from "../../../../Uri";
import Refund from "./Refund";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: 500,
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
      <h2 className='head-1-checkOut'>CheckOut</h2>

      <div className=' checkOutBox'>
        <Grid container>
          {OccupancyType == "daily" || OccupancyType == "monthly" ? (<div></div>) : (
          
          <Grid xs={5} sx={{ pt: "30px", pr: "40px" }}>
            <Button variant="contained" color="primary" style={{ color: "white" }} onClick={handelDate}>Initiate CheckOut</Button>
            <p className="Text-CheckOut">Checkout Initiated on: {cdate}</p>
          </Grid>)}

          { }


          {dueAmount == null ? (<div></div>) : (<Grid xs={3} sx={{}}>
            <Button variant="outlined" color="primary" style={{ color: "black" }}>DueAmount:  {dueAmount}</Button>
            <br />
            <br />
            {dueAmount < 0 ? (
              <Button variant="contained" color="primary" style={{ color: "white" }} onClick={() => { setManagerPayment(true) }}>Refund Payment</Button>
            ) : (<Grid>  </Grid>)}

          </Grid>)}
          <Grid xs={4} sx={{ pt: "30px", pl: "90px" }} >
            <Button variant="contained" color="primary" style={{ color: "white" }} onClick={finalCheckOutHandler}>Final CheckOut</Button>
            <p className="Text-CheckOut">Checkout Date:{checkOutDate}</p>

          </Grid>
        </Grid>

      </div>
    </>
  )
}

export default CheckOut;
