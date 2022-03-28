
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
import { Grid } from '@mui/material';
import { borderRadius } from '@mui/system';
import { Link } from 'react-router-dom';
import RecentTransactions from 'layouts/dashboard/components/summaryTables/Recenttransactions';
import TransactionHistory from './TransactionHistory';

export default function GuestPopUp({ open, handleClose, }) {
    const [guest, setGuest] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8989/guest/getGuestByGuestId/SLH000002`).then(res => setGuest(res.data))

    }, [])


    return (
        <div>

            <Dialog open={open} onClose={handleClose} maxWidth='lg'>
                <DialogTitle>GUEST DETAILS</DialogTitle>

                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            ><p >Guest Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  :   {guest.id}</p></MDTypography>
                        </Grid>
                        <Grid item xs={12}>
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            ><p>Guest Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  : {guest.firstName}</p></MDTypography>
                        </Grid>
                        <Grid item xs={12} >
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            ><p>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {guest.email}</p></MDTypography>

                        </Grid>
                        <Grid item xs={12} >
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            ><p>Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {guest.personalNumber}</p></MDTypography>
                        </Grid>
                        <Grid item xs={12} >
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            ><p>Father's Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 9030211709</p></MDTypography>
                        </Grid>

                        <Grid item xs={4}></Grid>
                        <Grid item xs={5} >
                            <MDTypography >
                                <h3 style={{ color: 'red', }}
                                >Due amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 5000</h3></MDTypography>
                        </Grid>
                        <Grid item xs={3}></Grid>
                        <DialogTitle >TRANSACTION HISTORY</DialogTitle>
                        <TransactionHistory />
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
