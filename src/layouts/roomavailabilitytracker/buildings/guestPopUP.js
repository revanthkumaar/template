
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

export default function GuestPopUp ({open , handleClose}) {

    return (
        <div>
           
<Dialog open={open} onClose={handleClose} maxWidth='lg'>
                <DialogTitle>GUEST DETAILS</DialogTitle>
                <br />
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={4} >
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <MDTypography
                                     id="outlined-textarea"
                                    //   label="Guest Id"
                                      style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                                      > Name :</MDTypography> 
                                </Grid>
                            <Grid item xs={12}>
                                <MDTypography
                                id="outlined-textarea"
                                label="Amount"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px' }}
                            >Building  :</MDTypography>
                            </Grid>
                            <Grid item xs={12}>
                                <MDTypography
                                id="outlined-textarea"
                                label="Payment Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px' }}
                            >Aadhar  :</MDTypography>
                            </Grid>
                            <Grid item xs={12}>
                                <MDTypography
                                id="outlined-textarea"
                                label="Transaction Date"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px' }}
                            >Parents phone  :</MDTypography>
                            </Grid>

                            </Grid>
                            </Grid>

                            <Grid item xs={4} >
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <MDTypography
                                     id="outlined-textarea"
                                      label="Guest Id"
                                     style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                                      > Room NO :</MDTypography> 
                                </Grid>
                            <Grid item xs={12}>
                                <MDTypography
                                id="outlined-textarea"
                                label="Amount"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px' }}
                            >Phone  :</MDTypography>
                            </Grid>
                            <Grid item xs={12}>
                                <MDTypography
                                id="outlined-textarea"
                                label="Payment Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px' }}
                            >Email Id  :</MDTypography>
                            </Grid>
                            

                            </Grid>
                            </Grid>
                            <Grid item xs={4} sx={{ border: 1 }}><div>
                                                                      </div></Grid>

                      <Grid item xs={4}>
                        <MDTypography
                                id="outlined-textarea"
                                label="Payment Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px' }}
                            >Due amount :</MDTypography>
                        </Grid>
                        
                       
                        {/* <Grid item xs={6} alignItems="right">
                        
                        </Grid> */}
                        
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
                            style={{ borderRadius: 10 , float: 'right'}}
                           
                            >
                                <MDTypography color='white'>Pay</MDTypography>
                                </MDButton></Grid>
                        
                    </Grid>

                </DialogActions>
            </Dialog>
        </div>
    );
}
