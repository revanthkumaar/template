import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBox from '@mui/material/Checkbox'
import { Grid } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, '1 Sharing', 18000, 20000),
  createData(2, '2 Sharing', 10000, 11500),
  createData(3, '3 Sharing', 7500, 8500),
  createData(4, '4 Sharing', 6500, 7500),
  
];

export default function Payments() {
  return (
    <Grid container spacing={2} columns={16}>
    <Grid item xs={3}>

    </Grid>
    <Grid item xs={12}>
    <TableContainer component={Paper} display="flex" justifyContent="flex-end">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl No</TableCell>
            <TableCell align="right">Room</TableCell>
            <TableCell align="right">Non A/C Room&nbsp;</TableCell>
            <TableCell align="right">A/C Room&nbsp;</TableCell>
            <TableCell align="right">Room &nbsp;</TableCell>
            <TableCell align="right">BED &nbsp;</TableCell>
            <TableCell align="right">SHELF&nbsp;</TableCell>
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
              <TableCell align="right">{row.fat}<CheckBox/></TableCell>
              <TableCell align="right">{row.carbs}<CheckBox/></TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     
    </Grid>
  
   
    </Grid>

  );
}
