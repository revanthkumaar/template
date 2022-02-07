import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{ field: 'id', headerName: 'BED ID', width: 80 },
	{ field: 'name', headerName: 'NAME', width: 150 },
	{
		field: 'doj',
		headerName: 'DOJ',
		width: 90
	},
	{ field: 'rent', headerName: 'RENT', width: 80 },
	{ field: 'received', headerName: 'RECEIVED', width: 130 }
];

const rows = [
	{
		id: '203A',
		name: 'Vinay Mhatre',
		doj: '01-oct-2021',
		rent: '10000',
		received: '10000',
	},
	{
		id: '307A',
		name: 'Om Pandey',
		doj: '26-July-21',
		rent: '7000',
		received: '7000',
	},
	{
		id: '206B',
		name: 'Nelson George',
		doj: '31-July-21',
		rent: '7500',
		received: '7500',
	},
	{
		id: '108A',
		name: 'V. Charan',
		doj: '10-July-21',
		rent: '8500',
		received: '8500',
	},
	{
		id: '109C',
		name: 'Kishore Reddy',
		doj: '30-Sep-21',
		rent: '9000',
		received: '9000',
	},
	{
		id: '305C',
		name: 'Ashish Onkala',
		doj: '02-Oct-21',
		rent: '7500',
		received: '5000',
	},
	{
		id: 'P3A',
		name: 'A.Shanmukh Rao',
		doj: '04-Jul-21',
		rent: '6500',
		received: '6500',
	}
];

export default function RecentTransactions() {
	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[ 5 ]} />
		</div>
	);
}
