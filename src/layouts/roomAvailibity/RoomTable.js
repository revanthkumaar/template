import React, { useState } from 'react';

import MaterialTable from 'material-table';
import { Grid } from '@mui/material';

const empList = [
	{
		id: 1,
		roomNo: 101,
		a_c: 'Yes',
		bedNumber: 'A12',
		
		monthlyRent: "18,000",
		dailyRent: 200
	},
	{
		id: 2,
		roomNo: 102,
		a_c: 'Yes',
		bedNumber: 'A12',
	
		monthlyRent: "15,000",
		dailyRent: 200
	},
	{
		id: 3,
		roomNo: 103,
		a_c: 'No',
		bedNumber: 'A12',
		
		monthlyRent: "9,870",
		dailyRent: 200
	},
	{
		id: 4,
		roomNo: 104,
		a_c: 'Yes',
		bedNumber: 'A12',
	
		monthlyRent: "10,000",
		dailyRent: 300
	},
	{
		id: 5,
		roomNo: 101,
		a_c: 'Yes',
		bedNumber: 'A12',
	
		monthlyRent: "12,000",
		dailyRent: 400
	},
	{
		id: 6,
		roomNo: 102,
		a_c: 'Yes',
		bedNumber: 'A12',
	
		monthlyRent: 987,
		dailyRent: 200
	},
	{
		id: 7,
		roomNo: 103,
		a_c: 'No',
		bedNumber: 'A12',
	
		monthlyRent: "17,000",
		dailyRent: 200
	},
	{
		id: 8,
		roomNo: 104,
		a_c: 'Yes',
		bedNumber: 'A12',
	
		monthlyRent: "18,000",
		dailyRent: 200
	}
];

function RoomTable() {
	const [ data, setData ] = useState(empList);
	const columns = [
		{
			title: 'ID',
			field: 'id',
			editable: false,
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Room No',
			field: 'roomNo',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'A/C',
			field: 'a_c',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
			
		},
		{
			title: 'Bed Number',
			field: 'bedNumber',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		
	
		{
			title: 'Monthly Rent',
			field: 'monthlyRent',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Daily Rent',
			field: 'dailyRent',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		}
	];

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
										setData(updatedRows);
										resolve();
									}, 2000);
								}),
							onRowDelete: (selectedRow) =>
								new Promise((resolve, reject) => {
									const index = selectedRow.tableData.id;
									const updatedRows = [ ...data ];
									updatedRows.splice(index, 1);
									setTimeout(() => {
										setData(updatedRows);
										resolve();
									}, 2000);
								}),
							onRowUpdate: (updatedRow, oldRow) =>
								new Promise((resolve, reject) => {
									const index = oldRow.tableData.id;
									const updatedRows = [ ...data ];
									updatedRows[index] = updatedRow;
									setTimeout(() => {
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
