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
import './buildingLayout.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';





const BuildingsLayout = (props) => {


    const [buildingInfo, setBuildingInfo] = React.useState([]);
    //  const [Floors, setFloors] = React.useState([]);
    const [loading , setLoading ] = React.useState(false)
    //  const handleToggle = () => {
    //      setLoading(!loading);
    //  }
    useEffect(() => {
        const GetData = async () => {
            const url = "http://localhost:8085/room/getBedsByBuildings";
            try {
                const resp = await fetch(url);
                const build = await resp.json();
                setBuildingInfo(build);
                setLoading(true)
                // setFloors(build.floors)
            }
            catch (err) {
                console.error(err);
            }
        }
        GetData();
    }, []);

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    

    const BuildingInfo = buildingInfo.filter(post => {
        return post.buildingName === props.buildingName
    })
  

    return (
        <>
            <GuestPopUp open={open} handleClose={handleClose} />
            <MDBox bgColor="white" padding="30px" sx={{ border: 3 }} >
                {loading ? 
                BuildingInfo.map(post => {
                    return (
                        <>
                            <Grid container spacing={2} >
                                <Grid item xs={12}> <h4>{post.buildingName}</h4> </Grid>
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
                                                                        <Grid item xs>
                                                                        <Grid container  rowSpacing={1}>
                                                                            
                                                                        <Grid item xs={12} align="center">
                                                                        {/* <HotelOutlinedIcon color="success" /> */}
                                                                        {(() => {
                                                                            if (bdno.bedStatus === true) {
                                                                                return (<HotelOutlinedIcon className = "click"   color="success" />)
                                                                            }
                                                                            else {
                                                                                return (<HotelOutlinedIcon color="error" className = "click"     onClick={() => { setOpen(true) }} />)
                                                                            }

                                                                        })()}
                                                                        </Grid>




                                                                                {/* {bdno.bedStatus === true ? 
                                                                                             (<IconButton><HotelOutlinedIcon color="success" /></IconButton>)
                                                                                    :
                                                                                            (<IconButton onClick={() => { setOpen(true) }}><HotelOutlinedIcon color="error" /></IconButton>) }                                                                                                                                                                                                                                                             */}
                                                                                        
                                                                                        <Grid item xs={12} align="center" ><h6 align="center"  >{bdno.bedName}</h6></Grid>
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
                })


           : 
            // "loading...."
           <Backdrop
           sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
           open
           onClick={handleClose}
         >
           <CircularProgress color="inherit" />
         </Backdrop>
         }


            </MDBox>



        </>
    )
}
export default BuildingsLayout
