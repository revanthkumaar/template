
import * as React from 'react';
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

export default function GuestPopUp({ open, handleClose }) {

    return (
        <div>

            <Dialog open={open} onClose={handleClose} maxWidth='lg'>
                <DialogTitle>GUEST DETAILS</DialogTitle>
                <br />
                <DialogContent>
                    <Grid container spacing={1}>
                        
                                <Grid item xs={12}>
                                    <MDTypography
                                        // id="outlined-textarea"
                                        //   label="Guest Id"
                                        style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                                    >Guest Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  :   SLH0001</MDTypography>
                                </Grid>
                                <Grid item xs={12}>
                                    <MDTypography
                                        // id="outlined-textarea"
                                        //   label="Guest Id"
                                        style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                                    >Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  : Mahesh Babu</MDTypography>
                                </Grid>
                                <Grid item xs={12} >
                                    <MDTypography
                                        // id="outlined-textarea"
                                        //   label="Guest Id"
                                        style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                                    >Adhaar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 504299167462</MDTypography>

                                </Grid>
                                <Grid item xs={12} >
                                    <MDTypography
                                        // id="outlined-textarea"
                                        //   label="Guest Id"
                                        style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                                    >Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 9908216181</MDTypography>
                                </Grid>
                                <Grid item xs={12} >
                                    <MDTypography
                                        // id="outlined-textarea"
                                        //   label="Guest Id"
                                        style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                                    >Due amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 5000</MDTypography>
                                </Grid>
                                <Grid item xs={12} >
                                    <MDTypography
                                        // id="outlined-textarea"
                                        //   label="Guest Id"
                                        style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                                    >Transaction Id &nbsp;: 0001173938@ybl</MDTypography>
                                </Grid>
                                <Grid item xs={12} >
                                    <MDTypography
                                        // id="outlined-textarea"
                                        //   label="Guest Id"
                                        style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                                    >Payment Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 9373711000183@HDFC</MDTypography>
                                
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Grid container style={{ display: "flex" }} >
                        <Grid item xs={6} ><MDButton
                            width='20%'
                            variant="contained"
                            color="error" size="large"
                            justify="center"
                            style={{ borderRadius: 10 }}
                            onClick={handleClose}>
                            Close</MDButton></Grid>
                        <Grid item xs={6} alignItems="right" ><MDButton
                            width='20%'
                            variant="gradient"
                            color="info" size="large"
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
