import React, { useState } from "react";

import MaterialTable from "material-table";
import { Grid } from "@mui/material";

const empList = [
  {
    id:1,
    roomNo: 101,
    a_c: 10000,
   mode: "UPI",
    shelfNo: "S4",
    Date: "20-10-2020",
   
  },
  {
    id:2,
    roomNo: 102,
    a_c: 6500,
    mode: "UPI",
    shelfNo: "S4",
    Date: "12-05-2020",
  
  },
  {
    id:3,
    roomNo: 103,
    a_c: 8000,
    mode: "UPI",
    shelfNo: "S3",
    Date:"22-09-2020",
 
  },
  {
    id:4,
    roomNo: 104,
    a_c: 8000,
    mode: "UPI",
    shelfNo: "S1",
    Date: "22-09-2020",
    
  },
  {
    id:5,
    roomNo: 101,
    a_c: 8000,
    mode: "UPI",
    shelfNo: "S4",
    Date: "02-09-2021",
    
  },
  {
    id:6,
    roomNo: 102,
    a_c: 8000,
    mode: "UPI",
    shelfNo: "S4",
    Date: "22-11-2021",
   
  },
  {
    id:7,
    roomNo: 103,
    a_c: 8000,
    mode: "UPI",
    shelfNo: "S3",
    Date: "29-09-2021",
    
  },
  {
    id:8,
    roomNo: 104,
    a_c: 8000,
    mode: "UPI",
    shelfNo: "S1",
    Date:"14-07-2021",
    
  },
];

function PaymentReport() {
  const [data, setData] = useState(empList);
  const columns = [
    { title: " GUEST ID", field: "id", editable: false,headerStyle: {
        backgroundColor: "#87CEFA",color:"white"
      } },
    { title: "Payment Towards", field: "roomNo", headerStyle: {
      backgroundColor: "#87CEFA",color:"white"
    } },
    { title: "Amount", field: "a_c" , headerStyle: {
      backgroundColor: "#87CEFA",color:"white"
    }},
    { title: "Payment Method", field: "mode" ,headerStyle: {
      backgroundColor: "#87CEFA",color:"white"
    }},
    { title: "Transaction Id", field: "shelfNo" ,headerStyle: {
      backgroundColor: "#87CEFA",color:"white"
    }},
    { title: "Transaction Date", field: "Date" ,headerStyle: {
      backgroundColor: "#87CEFA",color:"white"
    }},
    
  ];

  return (
    <div className="App">
    <Grid container>
      {/* <h1 align="center"></h1>
      <h4 align='center'></h4> */}
      <Grid xs={12}>
        <MaterialTable
          title="Record Payments"
          data={data}
        
          sx={{color:"white"}}
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
              backgroundColor: "#87CEFA",color:"white",fontSize:"20px",fontWeight:"bold"
              
            },
            rowStyle: {
                fontSize: 16,
              }
          }}
        />
      </Grid>
    </Grid>
    </div>
  );
}

export default PaymentReport;
