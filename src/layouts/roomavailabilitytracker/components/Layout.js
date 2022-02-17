import React from 'react'
import { Card, Grid, CardContent } from '@mui/material'
import MDBox from 'components/MDBox'
import RoomAvailabilityData from './Data';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import { IconButton } from '@mui/material';
import { shadows } from '@mui/system';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';

const Layout = () => {
  return (
    <MDBox bgColor="white" padding="30px" sx={{ boxShadow: 3 }} >
      {RoomAvailabilityData.map(post => {
        return (
          <>
            <Grid container rowSpacing={1} >
              <Grid item xs={12}> <h4>{post.buildingname}</h4> </Grid>
              {post.floors.map(item => {
                return (
                  <>
                    {/* <MDBox sx={{ boxShadow: 3 }}> */}
                    {/* <Box   sx={{ width: 1000 ,boxShadow: 3}}   > */}
                      <Grid item xs={12}> <h4>{item.floor}</h4></Grid>
                      {item.rooms.map(rmno => {
                        return (
                          <><Grid item xs={3}>
                            <Grid container rowSpacing={1} sx={{border:1,pl:1 }} >

                              {/* <MDBox sx={{ boxShadow: 3 }}> */}
                              {/* <Card  sx={{ width: 300 }}   >    */}
                              {/* <Box   sx={{ boxShadow: 3,width: 1000 }}  > */}
                              <Grid item xs={12} > 
                                  <h5>{rmno.roomno}</h5></Grid>
                                {rmno.beds.map(bdno => {
                                  return (
                                    <>

                                      <Grid item xs={3}>
                                        {/* <Card> */}
                                          <Grid container rowSpacing={1} >
                                            <Grid item xs={12}>
                                              {bdno.available ? <HotelOutlinedIcon color="success" />
                                                : <HotelOutlinedIcon sx={{ color: pink[500] }} />}
                                              <Grid item xs={12}><h6 align="left" >{bdno.bedno}</h6></Grid>
                                            </Grid>
                                          </Grid>
                                        {/* </Card> */}
                                      </Grid>

                                    </>
                                  )
                                })}
                              {/* </MDBox> */}
                              {/* </Card>   */}
                              {/* </Box> */}
                            </Grid>
                          </Grid>
                          </>
                        )
                      })}
                    {/* </MDBox> */}
                    {/* </Box> */}
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
export default Layout
