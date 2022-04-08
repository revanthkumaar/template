import  React, {useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import axios from 'axios';
import axios from '../../../../Uri'

const columns = [
	{ field: 'id', headerName: 'ID', width: 80 },
	{ field: 'bedId', headerName: 'BedId', width: 130 },
	{ field: 'roomId', headerName: 'RoomId', width: 80 },
	{ field: 'floorId', headerName: 'FloorId', width: 40 },
	{ field: 'buildingId', type: 'number', headerName: 'BuildingId', width: 80 },
	{ field: 'bedStatus', headerName: 'BedStatus', width: 80 },
	{ field: 'bedName', headerName: 'BedName', width: 80 },
	{ field: 'defaultRent', type: 'number', headerName: 'DefaultRent', width: 80 },
	{ field: 'ac', headerName: 'Ac', width: 80 },
	{ field: 'securityDeposit', headerName: 'SecurityDeposit', width: 80 },
];



export default function AvailableRooms() {
	
	const [table,setTable]=React.useState([])

	useEffect(() => {
		axios
		  .get("/bed/getAvailableBeds")
		  .then((res) => {
			setTable(res.data);
			console.log(res.data);
		  })
	
		  .catch((err) => {
			console.log(err);
		  });
	  }, []);
	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid rows={table} columns={columns} pageSize={5} rowsPerPageOptions={[ 5 ]} />
		</div>
	);
}
