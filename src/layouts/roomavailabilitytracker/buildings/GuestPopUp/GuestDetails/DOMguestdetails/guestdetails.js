//import { Grid } from "@mui/material";
import * as React from "react";

import Box from "@mui/material/Box";
//import Paper from '@mui/material/Paper';
//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//import Grid from '@mui/material/Grid'
//import formatDate from "../guestPopUP/formateDate";

function Guestdetails(props) {
  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, "0");
  // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  // var yyyy = today.getFullYear();
  // today = dd + "-" + mm + "-" + yyyy;
  function formatDate(checkInDate) {
    var datePart = checkInDate.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];

    return day + "-" + month + "-" + year;
  }
  // if (props.guestdetails.noticeDate) {
  //   var myDate = props.guestdetails.noticeDate;
  //   myDate = myDate.split("");
  //   console.log(myDate);
  //   var date = [];
  //   date.push(myDate);
  //   console.log(date);
  // } else {
  //   console.log("");
  // }
  var s = props.guestdetails.plannedCheckOutDate.toLocaleString("ko-KR", {
    timeZone: "Asia/Kolkata",
  });
  console.log(s);
  var da = formatDate(s)
  function createData(name, calories) {
    return { name, calories };
  }
  
  const rows = [
    createData(<h4>Guest Id</h4>, props.guestdetails.id),
    createData(<h4>Guest Name</h4>, props.guestdetails.firstName),
    createData(<h4>Mobile</h4>, props.guestdetails.personalNumber),
    createData(<h4>Email</h4>, props.guestdetails.email),
    createData(<h4>BedID</h4>, props.guestdetails.bedId),
    createData(<h4>Guest Status</h4>, props.guestdetails.guestStatus),
    createData(<h4>Duration</h4>, props.guestdetails.duration),
    createData(<h4>Occupancy Type</h4>, props.guestdetails.occupancyType),
    

  ];
  const rows1=[
    
    createData(<h4>Check-In Date</h4>, formatDate(props.guestdetails.checkInDate)),
    createData(<h4>PlannedCheck-OutDate</h4>,da),
    createData(<h4>Due Amount</h4>, 'Rs.'+props.GuestDueAmount),
    
   
    createData(<h4>AmountPaid</h4>, 'Rs.'+ props.guestdetails.amountPaid),
    
    // createData(<h4>SecurityDeposit</h4>,'Rs.'+ props.guestdetails.securityDeposit ),
    createData(<h4>Default Rent</h4>,'Rs.'+ props.guestdetails.defaultRent )

  ]
 console.log('this is DOM guy')
  return (
    <Grid container spacing={2} columns={16}>
    <Grid item xs={8}>
{/* <TableContainer component={Paper}> */}
  <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
    <TableHead>
      <TableRow>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          {/* <TableCell align="right">{row.carbs}</TableCell> */}
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
{/* </TableContainer> */}
</Grid>
<Grid item xs={8}>
{/* <TableContainer component={Paper}> */}
  <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
    <TableHead>
      <TableRow>
  
      </TableRow>
    </TableHead>
    <TableBody>
      {rows1.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
{/* </TableContainer> */}
</Grid>
</Grid>
    //   <React.Fragment>
    //   <Grid item xs={4} container spacing={1}>
    //     <Grid item xs={5}>Item1</Grid>
    //     <Grid item xs={3}>Item2</Grid>

    //   </Grid>
    //   <Grid item xs={4} container spacing={1}>
    //     <Grid item xs={3}>Item1</Grid>
    //     <Grid item xs={3}>Item2</Grid>

    //   </Grid>
    //   <Grid item xs={4} container spacing={1}>
    //     <Grid item xs={3}>Item1</Grid>
    //     <Grid item xs={3}>Item2</Grid>

    //   </Grid>
    // </React.Fragment>

    // <Box sx={{ flexGrow: 2 }}>
    //   <Grid container spacing={1}>
    //     <Grid container item spacing={10}>
    //       <React.Fragment>
    //         <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={3}>
    //             <h4>GuestId</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={3}>
    //             <h4>{props.guestdetails.id}</h4>
    //           </Grid>
    //         </Grid>
    //         <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={5}>
    //             <h4>Bed ID</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={6}>
    //             <h4>{props.guestdetails.bedId}</h4>
    //           </Grid>
    //         </Grid>
    //         <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={6}>
    //             <h4>Duration</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={3}>
    //             <h4>{props.guestdetails.duration}</h4>
    //           </Grid>
    //         </Grid>
    //       </React.Fragment>
    //     </Grid>
    //     <Grid container item spacing={10}>
    //       <React.Fragment>
    //         <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={3}>
    //             <h4> Name</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={7}>
    //             <h4>{props.guestdetails.firstName}</h4>
    //           </Grid>
    //         </Grid>

    //         <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={6}>
    //             <h4>occupancyType</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={3}>
    //             <h4>{props.guestdetails.occupancyType}</h4>
    //           </Grid>
    //         </Grid>
    //         <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={6}>
    //             <h4>SecurityDeposit</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={4}>
    //             <h4>{props.guestdetails.securityDeposit}</h4>
    //           </Grid>
    //         </Grid>
    //       </React.Fragment>
    //     </Grid>
    //     <Grid container item spacing={10}>
    //       <React.Fragment>
    //         <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={3}>
    //             <h4>Email</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={7}>
    //             <h5>{props.guestdetails.email}</h5>
    //           </Grid>
    //         </Grid>
    //         <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={6}>
    //             <h4>CheckInDate</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={5}>
    //             <h4>{formatDate(props.guestdetails.checkInDate)}</h4>
    //           </Grid>
    //         </Grid>

    //         <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={5}>
    //             <h4>Amount Paid</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={3}>
    //             <h4>{props.guestdetails.amountPaid}</h4>
    //           </Grid>
    //         </Grid>
    //       </React.Fragment>
    //     </Grid>
    //     <Grid container item spacing={10}>
    //       <React.Fragment>
    //         <Grid item xs={3} container spacing={1}>
    //           <Grid item xs={3}>
    //             <h4>Mobile:</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={2}>
    //             <h4>{props.guestdetails.personalNumber}</h4>
    //           </Grid>
    //         </Grid>
    //         {props.guestdetails.guestStatus == "InNotice" ? (
    //           <Grid item xs={5} container spacing={1}>
    //             <Grid item xs={6}>
    //               <h4>CheckOutInitiatedDate</h4>
    //             </Grid>
    //             <Grid item xs={0}>
    //               :
    //             </Grid>
    //             <Grid item xs={4}>
    //               <h4>{formatDate(props.guestdetails.noticeDate)}</h4>
    //             </Grid>
    //           </Grid>
    //         ) : (
    //           <div></div>
    //         )}

    //         {/* <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={6}>
    //             <h4>CheckOut Initiated Date</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={3}>
    //             <h4>{props.guestdetails.dueAmount}</h4>
    //           </Grid>
    //         </Grid> */}

    //         {/* {props.guestdetails.guestStatus == !Active ? ()} */}
    //         {props.guestdetails.guestStatus == "InNotice" ? (
    //           <Grid item xs={4} container spacing={1}>
    //             <Grid item xs={6}>
    //               <h4>CheckOut Date</h4>
    //             </Grid>
    //             <Grid item xs={0}>
    //               :
    //             </Grid>
    //             <Grid item xs={3}>
    //               <h4>{date}</h4>
    //             </Grid>
    //           </Grid>
    //         ) : (
    //           <div></div>
    //         )}
    //       </React.Fragment>
    //     </Grid>

    //     <Grid container item spacing={10}>
    //       <React.Fragment>
    //         <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={5}>
    //             <h4>Guest status</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={3}>
    //             <h4>{props.guestdetails.guestStatus}</h4>
    //           </Grid>
    //         </Grid>

    //         <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={6}>
    //             {}
    //           </Grid>
    //           <Grid item xs={0}>
    //             {}
    //           </Grid>
    //           <Grid item xs={3}>
    //             {}
    //           </Grid>
    //         </Grid>
    //         <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={5}>
    //             <h4>DueAmount</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={3}>
    //             <h4>{props.GuestDueAmount}</h4>
    //           </Grid>
    //         </Grid>

    //         {/* <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={6}>
    //             <h4>CheckOut Date</h4>
    //           </Grid>
    //           <Grid item xs={0}>
    //             :
    //           </Grid>
    //           <Grid item xs={3}>
    //             <h4>{props.guestdetails.dueAmount}</h4>
    //           </Grid>
    //         </Grid> */}

    //         {/* <Grid item xs={4} container spacing={1}>
    //           <Grid item xs={5}>
    //             {}
    //           </Grid>
    //           <Grid item xs={0}>
    //             {}
    //           </Grid>
    //           <Grid item xs={3}>
    //             {}
    //           </Grid> */}
    //         {/* </Grid> */}
    //       </React.Fragment>
    //     </Grid>
    //   </Grid>
    // </Box>

    //     <Grid>
    //       <h2 className="header-p">Personal Details </h2>
    //       <div class="float-container">
    //         <div class="float-child-1">
    //           <Grid container spacing={2} columns={16}>
    //             <Grid item xs={12}>
    //               <h4 style={{ width: "65%", marginBottom: "5px" }}>
    //                 Guest Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
    //                 &nbsp;{props.guestdetails.id}
    //               </h4>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <h4 style={{ width: "65%", marginBottom: "5px" }}>
    //                 Guest Name :&nbsp; {props.guestdetails.firstName}
    //               </h4>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <h4 style={{ width: "150%", marginBottom: "5px" }}>
    //                 Email
    //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
    //                 &nbsp; {props.guestdetails.email}
    //               </h4>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <h4 style={{ width: "100%", marginBottom: "5px" }}>
    //                 Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
    //                 {props.guestdetails.personalNumber}
    //               </h4>
    //             </Grid>

    //             <Grid item xs={12}>
    //               <h4 style={{ width: "80%", marginBottom: "10px" }}>
    //                 CheckIn Date&nbsp;:{formatDate(props.guestdetails.checkInDate)}
    //               </h4>
    //             </Grid>
    //             {props.guestdetails.checkOutDate == "regular" ? (
    //                            <Grid item xs={12}>
    //                            <h4 style={{ width: "80%", marginBottom: "10px" }}>
    //                              CheckOut Date&nbsp;:{(props.guestdetails.checkOutDate)}
    //                            </h4>
    //                          </Grid>

    //             ):(
    //               <Grid item xs={12}>
    //               {/* <h4 style={{ width: "80%", marginBottom: "10px" }}>
    //                 CheckOut Date&nbsp; : Not Applicable
    //               </h4> */}
    //               </Grid>
    //             )}

    //           </Grid>
    //         </div>

    //         <div class="float-child-2">
    //           <Grid item xs={12}>
    //             <h4
    //               style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
    //             >
    //               Occupancy Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{" "}
    //               {props.guestdetails.occupancyType}
    //             </h4>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <h4
    //               style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
    //             >
    //               Bed ID
    //               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
    //               {props.guestdetails.bedId}
    //             </h4>
    //           </Grid>
    //           <Grid item xs={12}>

    //             <h4

    //               style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}

    //             >

    //               Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}

    //               {props.guestdetails.duration}

    //             </h4>

    //           </Grid>
    //           {/* <Grid item xs={12}>
    //             <h4
    //               style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
    //             >
    //               Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
    //               {props.guestdetails.duration}
    //             </h4>
    //           </Grid> */}
    //           <Grid item xs={12}>
    //             <h4
    //               style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
    //             >
    //               Security Deposit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
    //               {props.guestdetails.securityDeposit}
    //             </h4>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <h4
    //               style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
    //             >
    //               Amount Paid
    //               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
    //               {props.guestdetails.amountPaid}
    //             </h4>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <h4
    //               style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
    //             >
    //               Due
    //               Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
    //               {props.guestdetails.dueAmount}
    //             </h4>
    //           </Grid>
    //         </div>
    //       </div>
    //     </Grid>
  );
}

export default Guestdetails;
