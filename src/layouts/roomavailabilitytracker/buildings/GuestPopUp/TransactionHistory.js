import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
// import axios from "axios";
import axios from "../../../../Uri";

// const [tableData,setTableData] = useState([])

export default function TransactionHistory(props) {
  //console.log(props.guestdetails.id);
  const [history, setHistory] = useState([]);
  
  function ChangeFormateDate(transactionDate){
    let day=transactionDate.split("-").reverse().join("-");
    return day;

 }
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `/payment/getTrasactionHistoryByGuestId/${props.guestdetails.id}`
      );
      //.log(response.data);
      setHistory(response.data);
 
    }
    fetchData();
  }, []);
  return (
    <TableContainer sx={{ alignContent: "center" }} component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PAYMENT ID</TableCell>
            <TableCell>TRANSACTION DATE</TableCell>

            <TableCell align="center">AMOUNT</TableCell>
            <TableCell align="center">PAYMENT PURPOSE</TableCell>
            <TableCell align="center">TRANSACTION ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((row) => 
            // var date = row.transactionDate;
            // year =date[0],
            // month = date[1],
            // day = date[2];
            // var finaldate= day+month+year

            (
              
            <TableRow sx={{ alignContent: "center" }}>
              <TableCell component="th" scope="row">
              
                {row.paymentId}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                {row.transactionDate.split("-").reverse().join("-")}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {row.amountPaid}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {row.paymentPurpose}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {row.transactionId}
              </TableCell>
            </TableRow>
          )
        
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
