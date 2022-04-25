//import { Grid } from "@mui/material";
import * as React from "react";
import "./guest.css";
import Box from "@mui/material/Box";
//import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
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

  return (
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

    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={10}>
          <React.Fragment>
            <Grid item xs={4} container spacing={1}>
              <Grid item xs={3}>
                <h4>GuestId</h4>
              </Grid>
              <Grid item xs={0}>
                :
              </Grid>
              <Grid item xs={3}>
                <h4>{props.guestdetails.id}</h4>
              </Grid>
            </Grid>
            <Grid item xs={4} container spacing={1}>
              <Grid item xs={5}>
                <h4>Bed ID</h4>
              </Grid>
              <Grid item xs={0}>
                :
              </Grid>
              <Grid item xs={6}>
                <h4>{props.guestdetails.bedId}</h4>
              </Grid>
            </Grid>
            <Grid item xs={4} container spacing={1}>
              <Grid item xs={6}>
                <h4>Duration</h4>
              </Grid>
              <Grid item xs={0}>
                :
              </Grid>
              <Grid item xs={3}>
                <h4>{props.guestdetails.duration}</h4>
              </Grid>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid container item spacing={10}>
          <React.Fragment>
            <Grid item xs={4} container spacing={1}>
              <Grid item xs={3}>
                <h4> Name</h4>
              </Grid>
              <Grid item xs={0}>
                :
              </Grid>
              <Grid item xs={7}>
                <h4>{props.guestdetails.firstName}</h4>
              </Grid>
            </Grid>
            <Grid item xs={4} container spacing={1}>
              <Grid item xs={6}>
                <h4>SecurityDeposit</h4>
              </Grid>
              <Grid item xs={0}>
                :
              </Grid>
              <Grid item xs={4}>
                <h4>{props.guestdetails.securityDeposit}</h4>
              </Grid>
            </Grid>
            <Grid item xs={4} container spacing={1}>
              <Grid item xs={6}>
                <h4>occupancyType</h4>
              </Grid>
              <Grid item xs={0}>
                :
              </Grid>
              <Grid item xs={3}>
                <h4>{props.guestdetails.occupancyType}</h4>
              </Grid>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid container item spacing={10}>
          <React.Fragment>
            <Grid item xs={4} container spacing={1}>
              <Grid item xs={3}>
                <h4>Email</h4>
              </Grid>
              <Grid item xs={0}>
                :
              </Grid>
              <Grid item xs={7}>
                <h5>{props.guestdetails.email}</h5>
              </Grid>
            </Grid>
            <Grid item xs={4} container spacing={1}>
              <Grid item xs={5}>
                <h4>Amount Paid</h4>
              </Grid>
              <Grid item xs={0}>
                :
              </Grid>
              <Grid item xs={3}>
                <h4>{props.guestdetails.amountPaid}</h4>
              </Grid>
            </Grid>
            <Grid item xs={4} container spacing={1}>
              <Grid item xs={6}>
                <h4>CheckOutDate</h4>
              </Grid>
              <Grid item xs={0}>
                :
              </Grid>
              <Grid item xs={3}>
                <h4>{props.guestdetails.dueAmount}</h4>
              </Grid>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid container item spacing={10}>
          <React.Fragment>
            <Grid item xs={4} container spacing={1}>
              <Grid item xs={3}>
                <h4>Mobile</h4>
              </Grid>
              <Grid item xs={0}>
                :
              </Grid>
              <Grid item xs={3}>
                <h4>{props.guestdetails.personalNumber}</h4>
              </Grid>
            </Grid>
            <Grid item xs={4} container spacing={1}>
              <Grid item xs={5}>
                <h4>DueAmount</h4>
              </Grid>
              <Grid item xs={0}>
                :
              </Grid>
              <Grid item xs={3}>
                <h4>{props.guestdetails.dueAmount}</h4>
              </Grid>
            </Grid>
            <Grid item xs={4} container spacing={1}>
              <Grid item xs={6}>
                <h4>CheckInDate</h4>
              </Grid>
              <Grid item xs={0}>
                :
              </Grid>
              <Grid item xs={5}>
                <h4>{formatDate(props.guestdetails.checkInDate)}</h4>
              </Grid>
            </Grid>
          </React.Fragment>
        </Grid>

      </Grid>
    </Box>

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
