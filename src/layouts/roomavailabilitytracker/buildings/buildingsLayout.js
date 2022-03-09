import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import MDBox from 'components/MDBox'
// import buildingsData from './buildingsData';
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
import MDButton from 'components/MDButton';
import axios from 'axios';

const BuildingsLayout = (props) => {
    const [buildingInfo, setBuildingInfo] = React.useState({});
    const [Floors, setFloors] = React.useState([]);

    const [open, setOpen] = React.useState(false);
         const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

    useEffect(() => {
        const GetData = async () => {
            const url = "http://localhost:8084/bed/getBedsByBuildingId/1";
            try {
                const resp = await fetch(url);
                const build = await resp.json();
                setBuildingInfo(build);
                setFloors(build.floors)


            }
            catch (err) {
                console.error(err);
            }
        }
        GetData();
    }, []);



    return (
        <>

            <MDBox bgColor="white" padding="30px" sx={{ border: 3 }} >
                <Grid container  spacing={2} >
                    <Grid item xs={12}>
                        <h4>{buildingInfo.buildingName}</h4>
                    </Grid>

                    {Floors.map(item => {
                        return (
                            <>
                                <Grid item xs={12}>
                                    <h6 align="center">{item.floorName}</h6></Grid>

                                {item.rooms.map(rm => {
                                    return (
                                        <>
                                            <Grid item xs={3}>
                                                <Grid spacing={-3} container rowSpacing={1} sx={{ border: 1 }}>
                                                    <Grid item xs={12}>{rm.roomNumber}</Grid>

                                                    {rm.beds.map(bd => {
                                                        return (
                                                            <>
                                                                <Grid item xs >
                                                                <Grid container Spacing={1} direction="column" alignItems="center" justifyContent="center"  >
                                                                    <Grid item xs={12} align='center'>  {bd.available ?
                                                                            <IconButton><HotelOutlinedIcon color='success' /></IconButton>
                                                                            : <>
                                                                                <IconButton onClick={handleOpen}><HotelOutlinedIcon color='error' /></IconButton>
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
                                                                        <Grid item xs={12}> <h6 align='center'>{bd.bedNumber}</h6></Grid>
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
            </MDBox>
        </>
    )
}
export default BuildingsLayout;
