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
import GuestPopUp from './guestPopUP';
import { setOpenConfigurator } from 'context';

const BuildingsLayout = (props) => {
    
    
    const [buildingInfo, setBuildingInfo] = React.useState({});
    const [Floors, setFloors] = React.useState([]);
    useEffect(() => {
        const GetData = async () => {
            const url = "http://localhost:8085/bed/getBedsByBuildingId/1";
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

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);


    return (
        <>
            <MDBox bgColor="white" padding="30px" sx={{ border: 3 }} >
                <Grid container spacing={2} >
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
                                                                                <IconButton onClick={() => { setOpen(true) }}><HotelOutlinedIcon color='error' /></IconButton>
                                                                                <GuestPopUp open={open} handleClose={handleClose} />
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
