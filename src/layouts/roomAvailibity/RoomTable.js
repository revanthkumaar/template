import React, { useState,useEffect } from 'react';

import MaterialTable from 'material-table';
import { Grid } from '@mui/material';
import axios from 'axios'


function RoomTable() {
	const [ data, setData ] = useState([]);
	const columns = [
		{
			title: 'ID',
			field: 'id',
			editable:false,
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Bed No',
			field: 'bedId',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Room Number',
			field: 'roomId',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
			
		},
		{
			title: 'Floor Number',
			field: 'floorId',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		
	
		{
			title: 'Building Number',
			field: 'buildingId',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Building Name',
			field: 'buildingName',
			lookup:{SriKalaNilayam:'Sri Kala Nilayam',SriNilayam:'Sri Nilayam'},
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Bed Status',
			field: 'bedStatus',
			lookup:{true:"Yes",false:"No"},
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Guest ID',
			field: 'guestId',
			editable:false,
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Bed Name',
			field: 'bedName',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Default Rent',
			field: 'defaultRent',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Room Type',
			field: 'ac',
			lookup:{True:"TRUE",False:"False"},
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Security Deposit',
			field: 'securityDeposit',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		

	];

	useEffect(() => {

		axios
	
		  .get("http://localhost:8085/bed/getAllBeds")
	
		  .then((res) => {
	
			setData(res.data);
	
	
	
			console.log(res.data);
	
		  })
	
	
	
		  .catch((err) => {
	
			console.log(err);
	
		  });
	
	  }, []);


	return (
		<div className="App">
			<Grid container>
				{/* <h1 align="center"></h1>
      <h4 align='center'></h4> */}
				<Grid xs={12}>
					<MaterialTable
						title="Room Details"
						data={data}
						sx={{ color: 'white' }}
						columns={columns}
						editable={{
							onRowAdd: (newRow) =>
								new Promise((resolve, reject) => {
									const updatedRows = [ ...data, { id: Math.floor(Math.random() * 100), ...newRow } ];
									setTimeout(() => {
										
										const res = axios.post(
											"http://localhost:8085/bed/addBed",
					  
											newRow
										  );
										console.log(newRow)
										setData(updatedRows);
										resolve();
									}, 2000);
								}),
							onRowDelete: (selectedRow) =>
								new Promise((resolve, reject) => {
									const index = selectedRow.id;
									const updatedRows = [ ...data ];
									updatedRows.splice(index, 1);
									setTimeout(() => {
										 const res = axios.delete(
											`http://localhost:8085/bed/deleteBed/${index}`
										   );
										   console.log(res);
										  console.log(updatedRows);
										setData(updatedRows);
										resolve();
									}, 2000);
								}),
							onRowUpdate: (updatedRow, oldRow) =>
								new Promise((resolve, reject) => {
									const index = oldRow.id;
									const updatedRows = [ ...data ];
									updatedRows[index] = updatedRow;
									setTimeout(() => {
										const res = axios.put(
											`http://localhost:8085/bed/updateBedById/${index }`,updatedRow
										  );
										  
										  
										  console.log(updatedRows);
										setData(updatedRows);
										resolve();
									}, 2000);
								})
						}}
						options={{
							actionsColumnIndex: -1,
							addRowPosition: 'first',
							headerStyle: {
								backgroundColor: '#1E90FF',
								color: 'white',
								fontSize: '20px',
								fontWeight: 'bold'
							},
							rowStyle: {
								fontSize: 16
							}
						}}
					/>
				</Grid>
			</Grid>
		</div>
	);
}

export default RoomTable;
