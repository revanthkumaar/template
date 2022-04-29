// import React from 'react'
import * as React from "react";

import Box from "@mui/material/Box";
//import Paper from '@mui/material/Paper';
//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function ActregGuestDetails(props) {
    function formatDate(checkInDate) {
        var datePart = checkInDate.match(/\d+/g),
          year = datePart[0].substring(2), // get only two digits
          month = datePart[1],
          day = datePart[2];
    
        return day + "-" + month + "-" + year;
      }
      
     
     
      
      function createData(name, calories) {
        return { name, calories };
      }
      
      const rows = [
        createData('GuestId', props.guestdetails.id),
        createData('GuestName', props.guestdetails.firstName),
        createData('Mobile', props.guestdetails.personalNumber),
        createData('Email', props.guestdetails.email),
        createData('BedID', props.guestdetails.bedId),
        createData('Guest Status', props.guestdetails.guestStatus),
        
        createData('Occupency Type', props.guestdetails.occupancyType),
        
    
      ];
      const rows1=[
        
        createData('Check-In Date', formatDate(props.guestdetails.checkInDate)),
        createData('Due Amount', 'Rs.'+props.GuestDueAmount),
       
        
       
        createData('AmountPaid', 'Rs.'+ props.guestdetails.amountPaid),
        
        createData('SecurityDeposit','Rs.'+ props.guestdetails.securityDeposit ),
        createData('Default Rent','Rs.'+ props.guestdetails.defaultRent )
    
      ]
  return (
    <Grid container spacing={2} columns={16}>
    <Grid item xs={8}>
{/* <TableContainer component={Paper}> */}
  <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
    <TableHead>
      <TableRow>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          {/* <TableCell align="right">{row.carbs}</TableCell> */}
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
{/* </TableContainer> */}
</Grid>
<Grid item xs={8}>
{/* <TableContainer component={Paper}> */}
  <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
    <TableHead>
      <TableRow>
  
      </TableRow>
    </TableHead>
    <TableBody>
      {rows1.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
{/* </TableContainer> */}
</Grid>
</Grid>
  )
}

export default ActregGuestDetails