import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CheckBox from '@mui/material/Checkbox'

const columns = [

  {
    field: 'firstName',
    headerName: 'Room Number',
    width: 160,
    editable: true,
  },
 
  {
    field: 'age',
    headerName: 'A/c',
    type: 'number',
    width: 160,
    editable: true,
  },
  {
    field: 'bed_id',
    headerName: 'Bed Number',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
   
  },
  
  {
    field: 'shelf',
    headerName: 'Shelf Number',
    type: 'number',
    width: 160,
    editable: true,
  },
  {
    field: 'monthlyrent',
    headerName: 'Monthly Rent',
    type: 'number',
    width: 160,
    editable: true,
  },
  {
    field: 'dailyrent',
    headerName: 'Daily Rent',
    type: 'number',
    width: 160,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: '18,000', firstName: 'B101', age: "Yes",bed_id:"G12",shelf:3,monthlyrent:"20000",dailyrent:800},
  { id: 2, lastName: '10,000', firstName: 'A101', age: "Yes",bed_id:"P1C",shelf:4 ,monthlyrent:"11500",dailyrent:600},
  { id: 3, lastName: '7,500', firstName: 'C102', age: "Yes",bed_id:"G1A" ,shelf:5,monthlyrent:"8500",dailyrent:500},
  { id: 4, lastName: '6,500', firstName: 'D100', age: "No",bed_id:"B1A",shelf:1,monthlyrent:"7500",dailyrent:400},
  { id: 5, lastName: '7,500', firstName: 'C101', age: "Yes",bed_id:"B2A",shelf:2,monthlyrent:"8500",dailyrent:500},
  { id: 6, lastName: '6,500', firstName: 'A101', age: "No",bed_id:"B2A",shelf:3,monthlyrent:"7500",dailyrent:400},
  { id: 7, lastName: '6,500', firstName: 'P101', age: "Yes",bed_id:"B2B",shelf:4,monthlyrent:"8500",dailyrent:600},
  { id: 8, lastName: '6,500', firstName: 'G101', age: "No",bed_id:"B22",shelf:1,monthlyrent:"7500",dailyrent:400},
  { id: 9, lastName: '6,500', firstName: 'F101', age: "Yes",bed_id:"D2A",shelf:2,monthlyrent:"6500",dailyrent:500},

]

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      
      <DataGrid
        rows={rows}
        checkboxSelection
        columns={columns}

        pageSize={15}
        rowsPerPageOptions={[15]}
       
        disableSelectionOnClick
      />
      
     
    </div>
  );
}
