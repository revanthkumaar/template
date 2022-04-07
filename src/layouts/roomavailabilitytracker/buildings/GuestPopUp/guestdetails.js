import React from "react";
import { Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
import './guest.css'

function Guestdetails(props) {
  return (
    <div class="float-container">
        
        <div class="float-child">
      <Grid container spacing={2} columns={16}>
         
        <Grid item xs={12}>
          <h4
            // id="outlined-textarea"
            //   label="Guest Id"
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >
            Guest
            Id
            : {props.guestdetails.id}
          </h4>
        </Grid>
        <Grid item xs={12}>
          <h4
            // id="outlined-textarea"
            //   label="Guest Id"
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >
            Guest
            Name
            : {props.guestdetails.firstName}
          </h4>
        </Grid>
        <Grid item xs={12}>
          <h4
            // id="outlined-textarea"
            //   label="Guest Id"
            style={{ width: "65%", marginLeft: "50px", marginBottom: "20px" }}
          >
            Email
            : {props.guestdetails.email}
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
            CheckIn
            Date:
            {props.guestdetails.checkInDate}
          </h4>
        </Grid>

        <Grid item xs={4}></Grid>
        <Grid item xs={5}>
          <MDTypography style={{ color: "red" }}>
            Due amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 5000
          </MDTypography>
        </Grid>
      </Grid>
      </div>
      
      <div class="float-child">
        
      </div>
    </div>
  );
}

export default Guestdetails;
