
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Grid ,FormControl,Input,MenuItem,InputLabel,Select} from '@mui/material';
import { borderRadius } from '@mui/system';
import { Link } from 'react-router-dom';
import RecentTransactions from 'layouts/dashboard/components/summaryTables/Recenttransactions';
import TransactionHistory from './TransactionHistory';


export default function GuestPopUp({ open, handleClose, ...props }) {
    // if (props.Guestid == null) {
    //     return null
    // }
    //    let PopUpId = {}
    // const [guest, setGuest] = useState({});
    // const [popupid, setPopupId] = useState([])
    // // const IId = (props.id)
    // useEffect(() => {
    //     setPopupId(props.Guestid)
    //     axios.get(`http://localhost:8989/guest/getGuestByGuestId/${popupid}`)
    //         .then(res => {
    //             setGuest(res.data)

    //         })

    // }, [popupid])

    return (
        <div>
            {/* {console.log(props.Guestid)} */}
            {/* {console.log(popupid)} */}



            <Dialog open={open} onClose={handleClose} maxWidth='lg'>
                <DialogTitle>GUEST DETAILS</DialogTitle>

                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            ><p >Guest Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  :   {props.GuestDetails.id}</p></MDTypography>
                        </Grid>
                        <Grid item xs={12}>
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            ><p>Guest Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {props.GuestDetails.firstName}</p></MDTypography>
                        </Grid>
                        <Grid item xs={12} >
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            ><p>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {props.GuestDetails.email}</p></MDTypography>

                        </Grid>
                        <Grid item xs={12} >
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            ><p>Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {props.GuestDetails.personalNumber}</p></MDTypography>
                        </Grid>
                        <Grid item xs={12} >
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            ><p>Father's Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{props.GuestDetails.fatherNumber}</p></MDTypography>
                        </Grid>

                        <Grid item xs={4}></Grid>
                        <Grid item xs={5} >
                            <MDTypography >
                                <h3 style={{ color: 'red', }}
                                >Due amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 5000</h3></MDTypography>
                        </Grid>
                        <br></br>
                        <br></br>
                        <br></br>

                        <Grid container spacing={1}>
                            <Grid item xs={6} sx={{ pl: 6 }}>

                                <TextField
                                    id="outlined-textarea"
                                    label="Amount Paid"
                                    style={{ width: '65%', marginLeft: '50px', marginBottom: '20px' }}
                                /></Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-textarea"
                                    label="Transaction Id"
                                    style={{ width: '65%', marginBottom: '20px' }}
                                /></Grid>
                            <Grid item xs={6}>
                     
  <InputLabel id="Payment Purpose"  style={{ width: '65%',marginLeft: '60px', marginBottom: '5px' }}
    >Payment Purpose</InputLabel>
  <Select
    labelId="Payment Purpose"
    id="Payment Purpose"
    style={{ width: '65%',marginLeft: '50px', marginBottom: '20px' ,height:40}}
    value={onselect}
    label="Payment Purpose"
  
  >
    <MenuItem>Rent</MenuItem>
    <MenuItem>Security Deposit</MenuItem>
 
  </Select>
</Grid>

                            <Grid item xs={5}>
                                <br></br>
                               
                                
                                <MDButton
                                    variant="contained"
                                    color="info"
                                    size="small"
                                    justify="right"
                                    style={{ borderRadius:9, float: 'left', height: 40,width: '50%' , marginBottom: '20px'}}
                                >
                                  <MDTypography color='white'>Record Payments</MDTypography>
                                </MDButton>
                            </Grid>
                            <Grid item xs={4}></Grid>
                            <Grid item xs={8}>
                                <DialogTitle ><br></br>TRANSACTION HISTORY</DialogTitle></Grid>
                            <TransactionHistory />
                        </Grid>
                    </Grid>



                </DialogContent>
                <DialogActions>
                    <Grid container style={{ display: "flex" }} >
                        <Grid item xs={6} ><MDButton
                            width='20%'
                            variant="contained"
                            color="info" size="large"
                            justify="center"
                            style={{ borderRadius: 10 }}
                            onClick={handleClose}>
                            Close</MDButton></Grid>
                        <Grid item xs={6} alignItems="right" ><MDButton
                            width='20%'
                            variant="gradient"
                            color="error" size="large"
                            justify="center"
                            style={{ borderRadius: 10, float: 'right' }}
                            // onClick={()=>{<PaymentModules/>}}
                            component={Link} to="/payments"
                        >
                            <MDTypography color='white'>Pay</MDTypography>
                        </MDButton></Grid>

                    </Grid>

                </DialogActions>
            </Dialog>
        </div>
    );
}
