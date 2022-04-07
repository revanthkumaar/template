import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Grid, MenuItem, InputLabel, Select } from "@mui/material";
import { borderRadius } from "@mui/system";
import { Link } from "react-router-dom";
import RecentTransactions from "layouts/dashboard/components/summaryTables/Recenttransactions";
import TransactionHistory from "./TransactionHistory";
import RecordpaymentsinPopUp from "./RecordpaymentsinPopUp";
import Guestdetails from "./guestdetails";

export default function GuestPopUp({ open, handleClose, ...props }) {
  return (
    <div>
      {props.GuestDetails.occupancyType === "regular" ? (
        <Dialog open={open} onClose={handleClose} maxWidth="lg">
          <DialogContent>
            <Guestdetails guestdetails={props.GuestDetails} />
            <br />
            <br />
            <br />
            <RecordpaymentsinPopUp guestdetails={props.GuestDetails} />
            <DialogTitle>
              <br />
              TRANSACTION HISTORY
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
          <DialogTitle>GUEST DETAILS</DialogTitle>
          <DialogContent>
            <Guestdetails guestdetails={props.GuestDetails} />

            <DialogTitle>
              <br />
              TRANSACTION HISTORY
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
      )}
    </div>
  );
}
