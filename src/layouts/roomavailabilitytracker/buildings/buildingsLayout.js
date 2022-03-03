import React from 'react'
import { Grid } from '@mui/material'
import MDBox from 'components/MDBox'
import buildingsData from './buildingsData';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import IconButton from '@material-ui/core/IconButton';
import { pink } from '@mui/material/colors';
import MDTypography from 'components/MDTypography';

import Modal from '@mui/material/Modal';
import { useState } from 'react';

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
                                                                                           <Modal
                                                                                             keepMounted
                                                                                             open={open}
                                                                                              onClose={handleClose}
                                                                                            aria-labelledby="keep-mounted-modal-title"
                                                                                            aria-describedby="keep-mounted-modal-description"
                                                                                              >
                                                                                            <MDBox sx={style}>
                                                                                             <MDTypography id="keep-mounted-modal-title" variant="h6" component="h2">
                                                                                                      {bdno.guestId}
                                                                                               </MDTypography>
                                                                                               <MDTypography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                                                                                     Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                                                                               </MDTypography>
                                                                                                     </MDBox>
                                                                                                 </Modal></>}
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
