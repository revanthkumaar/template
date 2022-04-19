import  React, {useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import axios from 'axios';
import axios from '../../../../Uri'

const columns = [
	{ field: 'id', headerName: 'ID', width: 100 },
	{ field: 'bedId', headerName: 'BedId', width: 130 },
	{ field: 'roomId', headerName: 'RoomId', width: 100 },
	{ field: 'floorId', headerName: 'FloorId', width: 100 },
	{ field: 'buildingId', type: 'number', headerName: 'BuildingId', width: 150 },
	{ field: 'bedStatus', headerName: 'BedStatus', width: 150, },
	{ field: 'bedName', headerName: 'BedName', width: 150 },
	{ field: 'defaultRent', type: 'number', headerName: 'DefaultRent', width: 180 },
	{ field: 'ac', headerName: 'Ac', width: 100 },
	{ field: 'securityDeposit', headerName: 'SecurityDeposit', width: 180 },
];



export default function AvailableRooms() {
	
	const [table,setTable]=React.useState([])

	useEffect(() => {
		axios
		  .get("/bed/getAvailableBeds")
		  .then((res) => {
			setTable(res.data);
			//console.log(res.data);
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
