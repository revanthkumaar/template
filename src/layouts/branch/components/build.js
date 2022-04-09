import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
// import axios from "axios";
import axios from '../../../Uri';
import { Grid } from '@mui/material';
// import { Grid } from "@mui/material";
// import axios from "../../../Uri";


function Build() {
  const [data, setData] = useState([]);
  const columns = [
    {
      	title: 'ID',
      	field: 'building_id',
      	editable:false,
      	headerStyle: {
      		backgroundColor: '#1E90FF',
      		color: 'white',
      		height:'20px',
      		width:'1px'
      	}
      },
    {
      title: "Building Name",
      field: "building_name",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    },
    {
      title: "Manager Name",
      field: "manager_name",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    },
    {
      title: "Phone Number",
      field: "phone_number",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    },

function Actions() {
	const [ data, setData ] = useState([]);
	const columns = [
		{
			title: 'Id',
			field: 'building_id',
			editable: 'false',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Building Name',
			field: 'building_name',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Manager Name',
			field: 'manager_name',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		},
		{
			title: 'Phone Number',
			field: 'phone_number',
			headerStyle: {
				backgroundColor: '#1E90FF',
				color: 'white'
			}
		}
	];


	useEffect(() => {
		axios
			.get('/bed/getAllBuildings')
			.then((res) => {
				setData(res.data);

				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Grid container>
			<Grid xs={30}>
				<MaterialTable
					title="Manage Employees"
					data={data}
					sx={{ color: 'white' }}
					columns={columns}
					editable={{
						onRowAdd: (newRow) =>
							new Promise((resolve, reject) => {
								const updatedRows = [ ...data, { id: Math.floor(Math.random() * 100), ...newRow } ];
								setTimeout(() => {
									const res = axios.post('/bed/addBuilding', newRow);
									console.log(newRow);
									setData(updatedRows);
									resolve();
								}, 2000);
							}),
						onRowDelete: (selectedRow) =>
							new Promise((resolve, reject) => {
								const index = selectedRow.building_id;
								const updatedRows = [ ...data ];
								updatedRows.splice(index, 1);
								setTimeout(() => {
									const res = axios.delete(`/bed/deleteBuilding/${index}`);
									console.log(res);
									console.log(updatedRows);
									setData(updatedRows);
									resolve();
								}, 2000);
							}),
						onRowUpdate: (updatedRow, oldRow) =>
							new Promise((resolve, reject) => {
								const index = oldRow.building_id;
								const updatedRows = [ ...data ];
								updatedRows[index] = updatedRow;
								setTimeout(() => {
									const res = axios.put(`/bed/updateBuildingById/${index}`, updatedRow);

									console.log(updatedRows);
									setData(updatedRows);
									resolve();
								}, 2000);
							})
					}}
					options={{
						exportButton: true,
						grouping: true,
						actionsColumnIndex: -1,
						addRowPosition: 'first',
						headerStyle: {
							backgroundColor: '#1E90FF',
							color: 'white',
							fontSize: '15px',
							height: '10px',
							fontWeight: 'bold'
						},
						rowStyle: {
							fontSize: 16
						}
					}}
				/>
			</Grid>
		</Grid>
	);
}
export default Build;
