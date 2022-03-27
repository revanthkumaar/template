import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{ field: 'id', headerName: 'DATE', width:180 },
	{ field: 'name', headerName: 'AMOUNT', width: 180 },
	{
		field: 'reason',
		headerName: 'REASON',
		width: 190
	},
	{ field: 'paymentid', headerName: 'PAYMENT ID', width: 180 },
	{ field: 'transactionid', headerName: 'TRANSACTION ID', width: 180 }
];

const rows = [
	{
		id: '20-12-2021',
		name: 'Vinay Mhatre',
		reason: 'Rent',
		paymentid: '10000',
		transactionid: '10000',
        
	},
	{
		id: '08-12-2021',
		name: 'Om Pandey',
		reason: 'Rent',
		paymentid: '7000',
		transactionid: '7000',
	},
	{
		id: '20-02-2022',
		name: 'Nelson George',
		reason: 'Rent',
		paymentid: '7500',
		transactionid: '7500',
	},
	{
		id: '03-03-2022',
		name: 'V. Charan',
		reason: 'Rent',
		paymentid: '8500',
		transactionid: '8500',
	},
	{
		id: '12-12-2019',
		name: 'Kishore Reddy',
		reason: 'Rent',
		paymentid: '9000',
		transactionid: '9000',
	},
	{
		id: '01-08-2021',
		name: 'Ashish Onkala',
		reason: 'Rent',
		paymentid: '7500',
		transactionid: '5000',
	},
	{
		id: '04--09-2021',
		name: 'A.Shanmukh Rao',
		reason: 'Rent',
		paymentid: '6500',
		transactionid: '6500',
	}
];

export default function TransactionHistory() {
	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[ 5 ]} />
		</div>
	);
}
