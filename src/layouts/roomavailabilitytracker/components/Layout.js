import React from 'react'
import { Grid } from '@mui/material'
import MDBox from 'components/MDBox'
import allBuildingsData from './Data';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';

import { pink } from '@mui/material/colors';
import MDTypography from 'components/MDTypography';

const Layout = () => {
  return (
    <MDBox bgColor="white" padding="30px" sx={{ boxShadow: 3 }} >
      {allBuildingsData.map(post => {
        return (
          <>
            <Grid container spacing={2} >
              <Grid item xs={12}> <h4>{post.buildingname}</h4> </Grid>
              {post.floors.map(item => {
                return (
                  <>

                    <Grid item xs={12}> <h6 align="center">{item.floorName}</h6></Grid>
                    {item.rooms.map(rmno => {
                      return (
                        <><Grid item xs={3}>
                          <Grid spacing={-3} container rowSpacing={1} sx={{ border: 1, pl: 1 }}  >
                            <Grid item xs={12} >
                              <h5>{rmno.roomNumber}</h5></Grid>
                            {rmno.beds.map(bdno => {
                              return (
                                <>
                                  <Grid item xs={3}>
                                    <Grid container rowSpacing={1} >
                                      <Grid item xs={12}>
                                        {bdno.available ? <HotelOutlinedIcon color="success" />
                                          : <HotelOutlinedIcon sx={{ color: pink[500] }} />}
                                        <Grid item xs={12} ><h6 align="left" >{bdno.bedNumber}</h6></Grid>
                                      </Grid>
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
export default Layout
