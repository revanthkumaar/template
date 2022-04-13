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
  console.log(props.guestdetails.id);
  const [history, setHistory] = useState([]);
  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, '0');
  // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // var yyyy = today.getFullYear();
  // today = mm + '-' + dd + '-' + yyyy;
  function formatDate (transactionDate) {
    var datePart = transactionDate.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];
  
    return day+'-'+month+'-'+year;
  }
  
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `/payment/getTrasactionHistoryByGuestId/${props.guestdetails.id}`
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
                {/* ()=>{
                  var datePart =transactionDate.match(/\d+/g),
                  year = datePart[0].substring(2),
                  month = datePart[1], day = datePart[2];
                }
                  return day+'/'+month+'/'+year;} */}
                {/* {date} */}
                {formatDate(props.guestdetails.transactionDate)}
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
