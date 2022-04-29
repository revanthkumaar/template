import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
// import axios from "axios";
import axios from "../../../../../Uri";
const useStyles = makeStyles({
  root: {
    paddingLeft:140
  },
  date:{
    paddingLeft:90
  },
  header: {
    paddingLeft:20
  },
  transaction:{
    paddingLeft:20
  },
  amount:{
    paddingLeft:120
  }
});

// const [tableData,setTableData] = useState([])

export default function TransactionHistory(props) {
  //console.log(props.guestdetails.id);
  const [history, setHistory] = useState([]);
  
  function ChangeFormateDate(transactionDate){
    let day=transactionDate.split("-").reverse().join("-");
    return day;

 }
 const classes = useStyles();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `/payment/getTrasactionHistoryByGuestId/${props.guestdetails.id}`
      )
      console.log(response.data);
      setHistory(response.data);
 
    }
    fetchData();
  }, []);
  // var s = history.transactionDate.toLocaleString("ko-KR", {
  //   timeZone: "Asia/Kolkata",
  // });
  // console.log(s);
  // var da = formatDate(s)
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  return (
//     <div className="payBox">
// <TableContainer sx={{ alignContent: "center" }} component={Paper}>
//       <Table sx={{ minWidth: 500 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>PAYMENT ID</TableCell>
//             <TableCell>TRANSACTION DATE</TableCell>

//             <TableCell align="center">AMOUNT</TableCell>
//             <TableCell align="center">PAYMENT PURPOSE</TableCell>
//             <TableCell align="center">TRANSACTION ID</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {history.map((row) => 
//             // var date = row.transactionDate;
//             // year =date[0],
//             // month = date[1],
//             // day = date[2];
//             // var finaldate= day+month+year

//             (
              
//             <TableRow sx={{ alignContent: "center" }}>
//               <TableCell component="th" scope="row">
              
//                 {row.paymentId}
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//                 {row.transactionDate.split("-").reverse().join("-")}
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 {row.amountPaid}
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 {row.paymentPurpose}
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 {row.transactionId}
//               </TableCell>
//             </TableRow>
//           )
        
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
<Grid>

  <TableHead>
    <TableRow>
    <TableCell >PAYMENT ID</TableCell>
    <TableCell className={classes.header}>TRANSACTION DATE</TableCell>
    <TableCell align="center" className={classes.header}>AMOUNT</TableCell>
    <TableCell align="center" className={classes.header}>PAYMENT PURPOSE</TableCell>
    <TableCell align="center"className={classes.header}>TRANSACTION ID</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {history.map((row) => (
      <TableRow
        key={row.paymentId}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.paymentId}
        </TableCell>
        <TableCell align="right" padding='normal' className={classes.date} >{row.transactionDate}</TableCell>
        <TableCell align="right" padding='normal' className={classes.amount}>{row.amountPaid}</TableCell>
        <TableCell align="right" padding='normal'className={classes.root}>{row.paymentPurpose}</TableCell>
        <TableCell align="right" padding='normal' className={classes.transaction}>{row.transactionId}</TableCell>
      </TableRow>
    ))}
  </TableBody>

</Grid>
    
  );
}
