
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
import { Grid ,MenuItem,InputLabel,Select} from '@mui/material';
import { borderRadius } from '@mui/system';
import { Link } from 'react-router-dom';
import RecentTransactions from 'layouts/dashboard/components/summaryTables/Recenttransactions';
import TransactionHistory from './TransactionHistory';
import RecordpaymentsinPopUp from "./RecordpaymentsinPopUp";

export default function GuestPopUp({ open, handleClose, ...props }) {
   

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
                            >Guest Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  :   {props.GuestDetails.id}</MDTypography>
                        </Grid>
                        <Grid item xs={12}>
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            >Guest Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {props.GuestDetails.firstName}</MDTypography>
                        </Grid>
                        <Grid item xs={12} >
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            >Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {props.GuestDetails.email}</MDTypography>

                        </Grid>
                        <Grid item xs={12} >
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            >Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {props.GuestDetails.personalNumber}</MDTypography>
                        </Grid>
                        <Grid item xs={12} >
                            <MDTypography
                                // id="outlined-textarea"
                                //   label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            >Father's Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{props.GuestDetails.fatherNumber}</MDTypography>
                        </Grid>

                        <Grid item xs={4}></Grid>
                        <Grid item xs={5} >
                            <MDTypography style={{ color: 'red', }} >
                                
                                Due amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 5000</MDTypography>
                        </Grid>
                        <br></br>
                        <br></br>
                        <br></br>
                        <RecordpaymentsinPopUp />

                        <Grid item xs={8}>
                                <DialogTitle ><br></br>TRANSACTION HISTORY</DialogTitle></Grid>
                                
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
                        

                    </Grid>

                </DialogActions>
            </Dialog>
        </div>
    );
}
