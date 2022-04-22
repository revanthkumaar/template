import React from 'react'
//import Button from "layouts/profile/GuestLoginForm/components/Button";

import "./guest.css";
//import { Button } from '@mui/material';
import Button from '@mui/material/Button';
import { Container, Grid, InputLabel } from "@mui/material";
import { useState,useEffect } from 'react';
import axios from "../../../../Uri";



  
const CheckOut = (props) => {
    const[dueAmount,setDueAmount]=useState(null)
    const[checkOutDate,setCheckOutDate]=useState(null)
  const dt = null;
  const [cdate,setDate] = useState(dt); 
  const handelDate = () =>{
    let dt = new Date().toLocaleDateString();
    setDate(dt);
    console.log(props.guestdetails.id)

    axios.get( `guest/getFinalDueAmountForCheckout/${props.guestdetails.id}`).then((res)=>setDueAmount(res.data))

  }
 const  finalCheckOutHandler=()=>{

    axios.get( `guest/checkOutGuest/${props.guestdetails.id}`).then((res)=>setDueAmount(res.data))
 } 
      //setHistory(response.data);
   return (
      <>
      <h2 className='head-1-checkOut'>CheckOut</h2>
     
    <div className=' checkOutBox'>
        <Grid container>
<Grid xs={5} sx={{pt:"30px",pr:"40px"}}>
    <Button variant="contained" color="primary" style={{color:"white"}} onClick={handelDate}>Initiate CheckOut</Button>
    <p className="Text-CheckOut">Checkout Initiated on: {cdate}</p>
    </Grid>

    {dueAmount == null ? (<div></div>) :  ( <Grid xs={3} sx={{}}>
       
       <Button variant="outlined" color="primary" style={{color:"black"}}>DueAmount:  {dueAmount}</Button>
          </Grid>)}
    <Grid xs={4}  sx={{pt:"30px" ,pl:"90px"}} >
        <Button variant="contained" color="primary" style={{color:"white"}} onClick={finalCheckOutHandler}>Final CheckOut</Button>
        <p className="Text-CheckOut">Checkout Date:{checkOutDate}</p>

        </Grid>   
        </Grid>
    </div>
    </>
  )
}

export default CheckOut;