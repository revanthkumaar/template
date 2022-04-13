import React from "react";
import { Grid } from "@mui/material";
import "./guest.css";
//import formatDate from "../guestPopUP/formateDate";

function Guestdetails(props) {
  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, "0");
  // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  // var yyyy = today.getFullYear();
  // today = dd + "-" + mm + "-" + yyyy;
   function formatDate (checkInDate) {
    var datePart = checkInDate.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];
  
    return day+'-'+month+'-'+year;
  }
  

  return (
    <Grid>
      <div class="float-container">
        <div class="float-child">
          <Grid container spacing={2} columns={16}>
            <Grid item xs={12}>
              <h4 style={{ width: "65%", marginBottom: "5px" }}>
                Guest Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                &nbsp;{props.guestdetails.id}
              </h4>
            </Grid>
            <Grid item xs={12}>
              <h4 style={{ width: "65%", marginBottom: "5px" }}>
                Guest Name :&nbsp; {props.guestdetails.firstName}
              </h4>
            </Grid>
            <Grid item xs={12}>
              <h4 style={{ width: "150%", marginBottom: "5px" }}>
                Email
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                &nbsp; {props.guestdetails.email}
              </h4>
            </Grid>
            <Grid item xs={12}>
              <h4 style={{ width: "100%", marginBottom: "5px" }}>
                Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                {props.guestdetails.personalNumber}
              </h4>
            </Grid>

            <Grid item xs={12}>
              <h4 style={{ width: "80%", marginBottom: "10px" }}>
                CheckIn Date&nbsp;:{formatDate(props.guestdetails.checkInDate)}
              </h4>
            </Grid>
          </Grid>
        </div>

        <div class="float-child">
          <Grid item xs={12}>
            <h4
              style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
            >
              Occupancy Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{" "}
              {props.guestdetails.occupancyType}
            </h4>
          </Grid>
          <Grid item xs={12}>
            <h4
              style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
            >
              Bed ID
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
              {props.guestdetails.bedId}
            </h4>
          </Grid>
          <Grid item xs={12}>
            <h4
              style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
            >
              Security Deposit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
              {props.guestdetails.securityDeposit}
            </h4>
          </Grid>
          <Grid item xs={12}>
            <h4
              style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
            >
              Amount Paid
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
              {props.guestdetails.amountPaid}
            </h4>
          </Grid>
          <Grid item xs={12}>
            <h4
              style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
            >
              Due
              Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
              {props.guestdetails.dueAmount}
            </h4>
          </Grid>
        </div>
      </div>
    </Grid>
  );
}

export default Guestdetails;
