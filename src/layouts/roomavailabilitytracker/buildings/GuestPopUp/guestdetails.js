import React from "react";
import { Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
import "./guest.css";

function Guestdetails(props) {
  return (
    <div class="float-container">
       
      <div class="float-child">
        <Grid container spacing={2} columns={16}>
          <Grid item xs={12}>
            <h4
              // id="outlined-textarea"
              //   label="Guest Id"
              style={{ width: "65%",  marginBottom: "5px" }}
            >
              Guest Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{props.guestdetails.id}
            </h4>
          </Grid>
          <Grid item xs={12}>
            <h4
              // id="outlined-textarea"
              //   label="Guest Id"
              style={{ width: "65%",  marginBottom: "5px" }}
            >
              Guest Name : {props.guestdetails.firstName}
            </h4>
          </Grid>
          <Grid item xs={12}>
            <h4
              // id="outlined-textarea"
              //   label="Guest Id"
              style={{ width: "150%",  marginBottom: "5px" }}
            >
              Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {props.guestdetails.email}
            </h4>
          </Grid>
          <Grid item xs={12}>
            <h4
              // id="outlined-textarea"
              //   label="Guest Id"
              style={{ width: "100%", marginBottom: "5px" }}
            >
              Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {props.guestdetails.personalNumber}
            </h4>
          </Grid>
         
          <Grid item xs={12}>
            <h4
              // id="outlined-textarea"
              //   label="Guest Id"
              style={{ width: "80%", marginBottom: "10px" }}
            >
              CheckIn Date&nbsp;: {props.guestdetails.checkInDate}
            </h4>
          </Grid>

       
        </Grid>
      </div>
     
      <div class="float-child">
        <Grid item xs={12}>
          <h4
            // id="outlined-textarea"
            //   label="Guest Id"
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >

            Occupency Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; {props.guestdetails.occupancyType}

          </h4>
        </Grid>
        <Grid item xs={12}>
          <h4
            
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >

            

            Bed ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {props.guestdetails.bedId}

          </h4>
        </Grid>
        <Grid item xs={12}>
          <h4
            
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >
            Security Deposit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {props.guestdetails.securityDeposit}
          </h4>
        </Grid>
        <Grid item xs={12}>
          <h4
            // id="outlined-textarea"
            //   label="Guest Id"
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >
            Amount Paid &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {props.guestdetails.amountPaid}
          </h4>
        </Grid>
        <Grid item xs={12}>
          <h4
            // id="outlined-textarea"
            //   label="Guest Id"
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >
            Due Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {props.guestdetails.dueAmount}
          </h4>
        </Grid>
      </div>
    </div>
  );
}

export default Guestdetails;
