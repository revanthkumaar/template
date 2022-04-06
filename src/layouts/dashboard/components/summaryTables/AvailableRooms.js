import  React, {useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
	{ field: 'id', headerName: 'ID', width: 80 },
	{ field: 'bedId', headerName: 'BedId', width: 130 },
	{ field: 'roomId', headerName: 'RoomId', width: 130 },
	{ field: 'floorId', headerName: 'FloorId', width: 130 },
	{ field: 'buildingId', type: 'number', headerName: 'BuildingId', width: 80 },
	{ field: 'buildingName',  headerName: 'BuildingName', width: 80 },
	{ field: 'bedStatus', headerName: 'BedStatus', width: 80 },
	{ field: 'bedName', headerName: 'BedName', width: 80 },
	{ field: 'defaultRent', type: 'number', headerName: 'DefaultRent', width: 80 },
	{ field: 'ac', headerName: 'Ac', width: 80 },
	{ field: 'securityDeposit', headerName: 'SecurityDeposit', width: 80 },



];



export default function AvailableRooms() {
	const rows = [
		{
			id: 'table',
			buildiing: 'sharan PG',
			floor: 'First Floor',
			roomNumber: '001',
			price: 6000
		},
		{
			id: '307A',
			buildiing: 'sharan PG',
			floor: 'First Floor',
			roomNumber: '001',
			price: 5500
		},
		{
			id: '206B',
			buildiing: 'sharan PG',
			floor: 'Second Floor',
			roomNumber: '002',
			price: 4000
		},
		{
			id: '108A',
			buildiing: 'sharan PG',
			floor: 'Second Floor',
			roomNumber: '003',
			price: 5000
		},
		{
			id: '109C',
			buildiing: 'sharan PG',
			floor: 'Ground Floor',
			roomNumber: '004',
			price: 5000
		}
	];
	const [table,setTable]=React.useState([])

	useEffect(() => {
		axios
		  .get("http://localhost:8085/bed/getAvailableBeds")
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
