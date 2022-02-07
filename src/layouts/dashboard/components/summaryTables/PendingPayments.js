import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{ field: 'id', headerName: 'SLNO', width: 130 },
	{ field: 'bedId', headerName: 'BED ID', width: 130 },
	{ field: 'name', headerName: 'NAME', width: 130 },
	{
		field: 'doj',
		headerName: 'DOJ',
		width: 90
	},
	{ field: 'rent', headerName: 'RENT', width: 130 },
	{ field: 'received', headerName: 'RECEIVED', width: 130 },
	{ field: 'due', headerName: 'DUE', width: 130 }
];

const rows = [
	{
		id: 1,
		name: 'Vinay Mhatre',
		bedId: '203A',
		doj: '01-oct-2021',
		rent: '10000',
		received: '10000',
		due: '0'
	},
	{
		id: 2,
		name: 'Om Pandey',
		bedId: '307A',
		doj: '26-July-21',
		rent: '7000',
		received: '7000',
		due: '0'
	},
	{
		id: 3,
		name: 'Nelson George',
		bedId: '206B',
		doj: '31-July-21',
		rent: '7500',
		received: '7500',
		due: '0'
	},
	{
		id: 4,
		name: 'V. Charan',
		bedId: '108A',
		doj: '10-July-21',
		rent: '8500',
		received: '8500',
		due: '0'
	},
	{
		id: 5,
		name: 'Kishore Reddy',
		bedId: '109C',
		doj: '30-Sep-21',
		rent: '9000',
		received: '9000',
		due: '0'
	},
	{
		id: 6,
		name: 'Ashish Onkala',
		bedId: '305C',
		doj: '02-Oct-21',
		rent: '7500',
		received: '5000',
		due: '2500'
	},
	{
		id: 7,
		name: 'A.Shanmukh Rao',
		bedId: 'P3A',
		doj: '04-Jul-21',
		rent: '6500',
		received: '6500',
		due: '0'
	},
	{
		id: 8,
		name: 'D. Vasram Naik',
		bedId: 'P4B',
		doj: '18-Sep-21',
		rent: '7500',
		received: '5000',
		due: '5500'
	},
	{
		id: 9,
		name: 'N. Srinivas Rao',
		bedId: 'G6C',
		doj: '07-Aug-21',
		rent: '7500',
		received: '1000',
		due: '1000'
	}
];

export default function PendingPayments() {
	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[ 5 ]} />
		</div>
	);
}
