import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from "axios";


// const [tableData,setTableData] = useState([])

const columns = [
	{ field: 'id', headerName: 'DATE', width:180 },
	{ field: 'amount', headerName: 'AMOUNT', width: 180 },
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
		amount: '8000',
		reason: 'Room rent',
		paymentid: '01',
		transactionid: 'T220327100934876354605',
        
	},
	{
		id: '08-12-2021',
		amount: '7000',
		reason: 'Room rent',
		paymentid: '02',
		transactionid: 'T220327100934876354605',
	},
	{
		id:'20-02-2022',
		amount: '10000',
		reason: 'Room rent',
		paymentid: '03',
		transactionid: 'T220327100934876354605',
	},
	{
		id: '03-03-2022',
		amount: '11000',
		reason: 'Room rent',
		paymentid: '04',
		transactionid: 'T220327100934876354605',
	},
	{
		id: '12-12-2019',
		amount: '8000',
		reason: 'Room rent',
		paymentid: '05',
		transactionid: 'T220327100934876354605',
	},
	{
		id: '01-08-2021',
		amount: '7000',
		reason: 'Room rent',
		paymentid: '06',
		transactionid: 'T220327100934876354605',
	},
	{
		id: '04-09-2021',
		amount: '7000',
		reason: 'Room rent',
		paymentid: '07',
		transactionid: 'T220327100934876354605',
	}
];

export default function TransactionHistory() {
	useEffect(() => {
		async function fetchData() {
	   const response = await axios.get('http://localhost:8086/payment/getTrasactionHistoryByGuestId/SLH0001')
		console.log(response.data)  
		//  .then((data) => setTableData(data))  
		//  console.log(tableData)
	 }
	 fetchData();
	}, []);
	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[ 5 ]} />
		</div>
	);
}
