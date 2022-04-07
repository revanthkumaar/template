import React from "react";
import { Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
import "./guest.css";

function Guestdetails(props) {
  return (
    <div class="float-container">
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guest Details</h2>
      <div class="float-child">
        <Grid container spacing={2} columns={16}>
          <Grid item xs={12}>
            <h4
              // id="outlined-textarea"
              //   label="Guest Id"
              style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
            >
              Guest Id : {props.guestdetails.id}
            </h4>
          </Grid>
          <Grid item xs={12}>
            <h4
              // id="outlined-textarea"
              //   label="Guest Id"
              style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
            >
              Guest Name : {props.guestdetails.firstName}
            </h4>
          </Grid>
          <Grid item xs={12}>
            <h4
              // id="outlined-textarea"
              //   label="Guest Id"
              style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
            >
              Email : {props.guestdetails.email}
            </h4>
          </Grid>
          <Grid item xs={12}>
            <h4
              // id="outlined-textarea"
              //   label="Guest Id"
              style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
            >
              Mobile:
              {props.guestdetails.personalNumber}
            </h4>
          </Grid>
          {/* <Grid item xs={12}>
          <h4
            // id="outlined-textarea"
            //   label="Guest Id"
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >
            Father's Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            {props.guestdetails.fatherNumber}
          </h4>
        </Grid> */}
          <Grid item xs={12}>
            <h4
              // id="outlined-textarea"
              //   label="Guest Id"
              style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
            >
              CheckIn Date:
              {props.guestdetails.checkInDate}
            </h4>
          </Grid>

          {/* <Grid item xs={4}></Grid>
          <Grid item xs={5}>
            <MDTypography style={{ color: "red" }}>
              Due amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 5000
            </MDTypography>
          </Grid> */}
        </Grid>
      </div>
     <h2> Bed Details</h2>
      <div class="float-child">
        <Grid item xs={12}>
          <h4
            // id="outlined-textarea"
            //   label="Guest Id"
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >
            Occupancy Type:
            {props.guestdetails.occupancyType}
          </h4>
        </Grid>
        <Grid item xs={12}>
          <h4
            // id="outlined-textarea"
            //   label="Guest Id"
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >
            Occupancy Type:
            {props.guestdetails.bedId}
          </h4>
        </Grid>
        <Grid item xs={12}>
          <h4
            // id="outlined-textarea"
            //   label="Guest Id"
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >
            Security Deposit:
            {props.guestdetails.securityDeposit}
          </h4>
        </Grid>
        <Grid item xs={12}>
          <h4
            // id="outlined-textarea"
            //   label="Guest Id"
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >
            Amount Paid:
            {props.guestdetails.amountPaid}
          </h4>
        </Grid>
        <Grid item xs={12}>
          <h4
            // id="outlined-textarea"
            //   label="Guest Id"
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >
            Due Amount:
            {props.guestdetails.dueAmount}
          </h4>
        </Grid>
      </div>
    </div>
  );
}

export default Guestdetails;
