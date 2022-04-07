import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";

// const [tableData,setTableData] = useState([])

export default function TransactionHistory(props) {
  console.log(props.guestdetails.id);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:8989/payment/getTrasactionHistoryByGuestId/${props.guestdetails.id}`
      );
      console.log(response.data);
      setHistory(response.data);
      //  .then((data) => setTableData(data))
      //  console.log(tableData)
    }
    fetchData();
  }, []);
  return (
    <TableContainer sx={{ alignContent: "center" }} component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PAYMENT ID</TableCell>
			<TableCell >TRANSACTION DATE</TableCell>
            
            <TableCell align="center">AMOUNT</TableCell>
            <TableCell align="center">PAYMENT PURPOSE</TableCell>
            <TableCell align="center">TRANSACTION ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((row) => (
            <TableRow key={row.paymentId} key={row.transactionDate} key={row.amountPaid}key={row.paymentPurpose} key={row.transactionId}sx={{ alignContent: "center" }}>
              <TableCell component="th" scope="row">
                {row.paymentId}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.transactionDate}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.amountPaid}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.paymentPurpose}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.transactionId}
              </TableCell>
  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
