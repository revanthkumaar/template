import React from 'react'
import { Grid } from '@mui/material'
import MDBox from 'components/MDBox'
import buildingsData from './buildingsData';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import IconButton from '@material-ui/core/IconButton';
import { pink } from '@mui/material/colors';
import MDTypography from 'components/MDTypography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import MDButton from 'components/MDButton';

const BuildingsLayout = (props) => { 

const BuildingsData = buildingsData.filter(post => {
    return post.buildingname === props.buildingname
})

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
       const [open, setOpen] = React.useState(false);
         const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
       
 return (
         <MDBox bgColor="white" padding="30px" sx={{ border: 3 }} >
        
            {BuildingsData.map(post => {
                return (
                    <>
                    <Grid container spacing={2} sx={{ border: 1 }}>
                            <Grid item xs={12}> <h4>{post.buildingname}</h4> </Grid>
                            {post.floors.map(item => {
                                return (
                                    <>

                                        <Grid item xs={12}> <h6 align="center">{item.floorName}</h6></Grid>
                                        {item.rooms.map(rmno => {
                                            return (
                                                <>
                                                <Grid item xs={3}>
                                                    <Grid spacing={-3} container rowSpacing={1} sx={{ border: 1, pl: 1 }}  >
                                                        <Grid item xs={12} >
                                                            <h5>{rmno.roomNumber}</h5></Grid>
                                                        {rmno.beds.map(bdno => {
                                                            return (
                                                                <>
                                                                    <Grid item xs >
                                                                        <Grid container Spacing={1} direction="column" alignItems="center" justifyContent="center"  >
                                                                            <Grid item xs={12} align="center" >
                                                                                {bdno.available ? <IconButton><HotelOutlinedIcon color="success" /></IconButton>
                                                                                    : <><img 
                                                                                          src={bdno.guestimageUrl} 
                                                                                          style={{ width: '30px', height: '40px' }} 
                                                                                          onClick={handleOpen}
                                                                                          />
                                                                                          <Dialog open={open} onClose={handleClose} maxWidth='lg'>
                <DialogTitle>GUEST DETAILS</DialogTitle>
                <br />
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sx={{ pl: 6 }}>
                            <MDTypography
                                id="outlined-textarea"
                                label="Guest Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px', }}
                            > Name :</MDTypography> </Grid>
                        <Grid item xs={6}>
                            <MDTypography
                                id="outlined-textarea"
                                label="Payment Purpose"
                                style={{ width: '65%', marginBottom: '20px' }}
                            >Room No  :</MDTypography></Grid>

                        <Grid item xs={6}>
                            <MDTypography
                                id="outlined-textarea"
                                label="Amount"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px' }}
                            >Building  :</MDTypography></Grid>
                        <Grid item xs={6}>
                            <MDTypography
                                id="outlined-textarea"
                                label="Payment Method"
                                style={{ width: '65%', marginBottom: '20px' }}
                            >phone :</MDTypography></Grid>
                        <Grid item xs={6}>
                            <MDTypography
                                id="outlined-textarea"
                                label="Payment Id"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px' }}
                            >Aadhar  :</MDTypography></Grid>
                        <Grid item xs={6}>
                            <MDTypography
                                id="outlined-textarea"
                                label="Transaction Id"
                                style={{ width: '65%', marginBottom: '20px' }}
                            >Email Id :</MDTypography></Grid>
                        <Grid item xs={6}>
                            <MDTypography
                                id="outlined-textarea"
                                label="Transaction Date"
                                style={{ width: '65%', marginLeft: '50px', marginBottom: '20px' }}
                            >Parents phone  :</MDTypography></Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid container alignItems="center" alignContent="center">
                        <MDButton
                            width='20%'
                            variant="contained"
                            color="primary" size="large"
                            justify="center"
                            style={{ borderRadius: 10 }}
                            onClick={handleClose}>Close</MDButton>
                    </Grid>

                </DialogActions>
            </Dialog>



                                                                                          
                                                                                                 </>}
                                                                            </Grid>
                                                                                <Grid item xs={12} align="center" ><h6 align="center"  >{bdno.bedNumber}</h6></Grid>
                                                                            
                                                                        </Grid>
                                                                    </Grid>
                                                                </>
                                                            )
                                                        })}

                                                    </Grid>
                                                </Grid>
                                                </>
                                            )
                                        })}
                                    </>
                                )
                            })}

                            </Grid>
                    </>
                )
            })}
 
        </MDBox>
        
    )
}
export default BuildingsLayout
