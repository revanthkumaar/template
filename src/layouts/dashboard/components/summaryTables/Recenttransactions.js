import  React, {useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import axios from 'axios';

import axios from "../../../../Uri"



const columns = [
	{ field: 'id', headerName: ' PAYMENT ID', width: 80 },
	{ field: 'amountPaid', headerName: 'AMOUNT PAID', width: 130 },
	{ field: 'transactionId', headerName: 'TRANSACTION ID', width: 80 },
	{ field: 'transactionDate', headerName: 'TRANSACTION DATE', width: 40 },
	{ field: 'paymentPurpose', headerName: 'PAYMENT PURPOSE', width: 80 },
	{ field: 'guestId', headerName: 'GUEST ID', width: 80 },
	



];



export default function AvailableRooms() {
	
	
	const [transaction,setTransaction]=React.useState([])

	useEffect(() => {
		axios
		  .get("/payment/getRecentPayments?field=date")
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
