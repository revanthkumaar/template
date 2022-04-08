import  React, {useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

// "id": 0,
//         "amountPaid": 6000.0,
//         "transactionId": "lkjhgfd",
//         "transactionDate": "2022-04-08",
//         "paymentPurpose": "roomrent",
//         "guestId": "SLH000002"

const columns = [
	{ field: 'id', headerName: ' PAYMENT ID', width: 80 },
	{ field: 'amountPaid', headerName: 'AMOUNT PAID', width: 130 },
	{ field: 'transactionId', headerName: 'TRANSACTION ID', width: 80 },
	{ field: 'transactionDate', headerName: 'TRANSACTION DATE', width: 40 },
	{ field: 'paymentPurpose', headerName: 'PAYMENT PURPOSE', width: 80 },
	{ field: 'guestId', headerName: 'GUEST ID', width: 80 },
	



];



export default function AvailableRooms() {
	// const rows = [
	// 	{
	// 		id: 'table',
	// 		buildiing: 'sharan PG',
	// 		floor: 'First Floor',
	// 		roomNumber: '001',
	// 		price: 6000
	// 	},
	// 	{
	// 		id: '307A',
	// 		buildiing: 'sharan PG',
	// 		floor: 'First Floor',
	// 		roomNumber: '001',
	// 		price: 5500
	// 	},
	// 	{
	// 		id: '206B',
	// 		buildiing: 'sharan PG',
	// 		floor: 'Second Floor',
	// 		roomNumber: '002',
	// 		price: 4000
	// 	},
	// 	{
	// 		id: '108A',
	// 		buildiing: 'sharan PG',
	// 		floor: 'Second Floor',
	// 		roomNumber: '003',
	// 		price: 5000
	// 	},
	// 	{
	// 		id: '109C',
	// 		buildiing: 'sharan PG',
	// 		floor: 'Ground Floor',
	// 		roomNumber: '004',
	// 		price: 5000
	// 	}
	// ];
	const [transaction,setTransaction]=React.useState([])

	useEffect(() => {
		axios
		  .get("http://localhost:8989/payment/getRecentPayments?field=date")
		  .then((res) => {
			setTransaction(res.data);
			console.log(res.data);
		  })
	
		  .catch((err) => {
			console.log(err);
		  });
	  }, []);
	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid rows={transaction} columns={columns} pageSize={5} rowsPerPageOptions={[ 5 ]} />
		</div>
	);
}
