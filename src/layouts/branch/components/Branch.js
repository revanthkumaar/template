import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';

const columns= [
  

  { field: 'buildingName', headerName: 'Building Name', width: 150 },
  
  {
    field: 'buildingNumber',
    headerName: 'Building Number',
    type: 'number',
    width: 150,
  },
 
  { field: 'manager', headerName: 'Manager', width: 130 },
  {
    field: 'mobile',
    headerName: 'Mobile Number',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    
  },
  {
    field: 'action',
    headerName: 'Action',
    width:300,
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        

        return alert("Deleted");
      };
      const Add =(a)=>{
        a.stopPropagation();
        alert("Addes")
      }
      const Edit =(a)=>{
        a.stopPropagation();
        alert("Edited")
      }

      return (
        <div>
        <Button onClick={onClick}>Delete</Button>
        <Button onClick={Add}>Add</Button>
        <Button onClick={Edit}>Edit</Button>
        </div>
      )
     
    },
  },
];

const rows = [
  { id: 1, buildingName:"Buildig-1",buildingNumber: "B1A" ,manager:"Sivayya",mobile:882828223},
 
];

export default function Branch() {
  return (
    <div style={{ height: 400, width: '100%' }}>
        
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
