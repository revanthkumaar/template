import React, { useState } from "react";

import MaterialTable from "material-table";
import { Grid } from "@mui/material";

const empList = [
  {
    guestId: "2020A051019",
    paymentTowards: "PG",
    amount: 10000,
    paymentMethod: "UPI",
    paymentId:"1jwjjwwj",
    transactionId: "237UH287423",
    transactionDate: "19-10-2020",
  },
  {
    guestId: "2020A051019",
    paymentTowards: "PG",
    amount: 10000,
    paymentMethod: "UPI",
    paymentId:"wuwsju211",
    transactionId: "237UH287423",
    transactionDate: "19-10-2020",
  },
  {
    guestId: "2020A051019",
    paymentTowards: "PG",
    amount: 10000,
    paymentMethod: "UPI",
    transactionId: "237UH287423",
    transactionDate: "19-10-2020",
  },
  {
    guestId: "2020A051019",
    paymentTowards: "PG",
    amount: 10000,
    paymentMethod: "UPI",
    transactionId: "237UH287423",
    transactionDate: "19-10-2020",
  },
  {
    guestId: "2020A051019",
    paymentTowards: "PG",
    amount: 10000,
    paymentMethod: "UPI",
    transactionId: "237UH287423",
    transactionDate: "19-10-2020",
  },
  {
    guestId: "2020A051019",
    paymentTowards: "PG",
    amount: 10000,
    paymentMethod: "UPI",
    transactionId: "237UH287423",
    transactionDate: "19-10-2020",
  },
  {
    guestId: "2020A051019",
    paymentTowards: "PG",
    amount: 10000,
    paymentMethod: "UPI",
    transactionId: "237UH287423",
    transactionDate: "19-10-2020",
  },
  {
    guestId: "2020A051019",
    paymentTowards: "PG",
    amount: 10000,
    paymentMethod: "UPI",
    transactionId: "237UH287423",
    transactionDate: "19-10-2020",
  },
];

function PaymentReport() {
  const [data, setData] = useState(empList);
  const columns = [
    {
      title: " GUEST ID",
      field: "guestId",
      editable: false,
      headerStyle: {
        backgroundColor: "#0096FF",
        color: "white",
      },
    },
    {
      title: "Payment Towards",
      field: "paymentTowards",
      headerStyle: {
        backgroundColor: "#0096FF",
        color: "white",
      },
    },
    {
      title: "Amount",
      field: "amount",
      headerStyle: {
        backgroundColor: "#0096FF",
        color: "white",
      },
    },
    {
      title: "Payment Method",
      field: "paymentMethod",
      headerStyle: {
        backgroundColor: "#0096FF",
        color: "white",
      },
    },
    {
      title: " Payment ID",
      field: "paymentId",
      editable: false,
      headerStyle: {
        backgroundColor: "#0096FF",
        color: "white",
      },
    },
    {
      title: "Transaction Id",
      field: "transactionId",
      headerStyle: {
        backgroundColor: "#0096FF",
        color: "white",
      },
    },
    {
      title: "Transaction Date",
      field: "transactionDate",
      headerStyle: {
        backgroundColor: "#0096FF",
        color: "white",
      },
    },
  ];

  return (
    <div className="App">
      <Grid container>
        <Grid xs={12}>
          <MaterialTable
            title="Record Payments"
            data={data}
            sx={{ color: "white" }}
            columns={columns}
            editable={{
              onRowAdd: (newRow) =>
                new Promise((resolve, reject) => {
                  const updatedRows = [
                    ...data,
                    { id: Math.floor(Math.random() * 100), ...newRow },
                  ];
                  setTimeout(() => {
                    setData(updatedRows);
                    resolve();
                  }, 2000);
                }),
              onRowDelete: (selectedRow) =>
                new Promise((resolve, reject) => {
                  const index = selectedRow.tableData.id;
                  const updatedRows = [...data];
                  updatedRows.splice(index, 1);
                  setTimeout(() => {
                    setData(updatedRows);
                    resolve();
                  }, 2000);
                }),
              onRowUpdate: (updatedRow, oldRow) =>
                new Promise((resolve, reject) => {
                  const index = oldRow.tableData.id;
                  const updatedRows = [...data];
                  updatedRows[index] = updatedRow;
                  setTimeout(() => {
                    setData(updatedRows);
                    resolve();
                  }, 2000);
                }),
            }}
            options={{
              actionsColumnIndex: -1,
              addRowPosition: "first",
              headerStyle: {
                backgroundColor: "#0096FF",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
              },
              rowStyle: {
                fontSize: 16,
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default PaymentReport;
