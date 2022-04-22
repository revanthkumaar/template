import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Button from "@mui/material/Button";
import MDButton from "components/MDButton";
// import MDTypography from "components/MDTypography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
// import { borderRadius } from "@mui/system";
// import { Link } from "react-router-dom";
// import RecentTransactions from "layouts/dashboard/components/summaryTables/Recenttransactions";
import TransactionHistory from "./TransactionHistory";
import RecordpaymentsinPopUp from "./RecordpaymentsinPopUp";
import Guestdetails from "./guestdetails";
// import AppBar from "@mui/material/AppBar";
import CheckOut from "./CheckOut";
import "./guest.css";

import Toolbar from "@mui/material/Toolbar";

export default function GuestPopUp({ open, handleClose, ...props }) {
  return (
    <div>
      {props.GuestDetails.occupancyType === "regular" ? (
        <Dialog open={open} onClose={handleClose} maxWidth="lg">
          <MDButton
            width="100%"
            variant="contained"
            color="info"
            size="large"
            justify="center"
            style={{ borderRadius: 0 }}
          >
            Guest Details
          </MDButton>
          <DialogContent>
            <Guestdetails guestdetails={props.GuestDetails} />
            <br />


            <CheckOut guestdetails={props.GuestDetails} />
            <br/>
            <h2 className='head-1-checkOut'>Payments</h2>
            <br/>
            <RecordpaymentsinPopUp guestdetails={props.GuestDetails} />
            <DialogTitle>
              <br />
              <h3 className='head-1-checkOut'>Transaction History</h3>
            </DialogTitle>
            <TransactionHistory guestdetails={props.GuestDetails} />
          </DialogContent>
          <DialogActions>
            <Grid container style={{ display: "flex" }}>
              <Grid item xs={6}>
                <MDButton
                  width="20%"
                  variant="contained"
                  color="info"
                  size="large"
                  justify="center"
                  style={{ borderRadius: 10 }}
                  onClick={handleClose}
                >
                  Close
                </MDButton>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog open={open} onClose={handleClose} maxWidth="lg">
          <MDButton
            width="20%"
            variant="contained"
            color="info"
            size="large"
            justify="center"
            style={{ borderRadius: 0 }}
          >
            Guest Details
          </MDButton>
          <DialogContent>
            <Guestdetails guestdetails={props.GuestDetails} />
          
            <TransactionHistory guestdetails={props.GuestDetails} />
          </DialogContent>
          <DialogActions>
            <Grid container style={{ display: "flex" }}>
              <Grid item xs={6}>
                <MDButton
                  width="20%"
                  variant="contained"
                  color="info"
                  size="large"
                  justify="center"
                  style={{ borderRadius: 10 }}
                  onClick={handleClose}
                >
                  Close
                </MDButton>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
