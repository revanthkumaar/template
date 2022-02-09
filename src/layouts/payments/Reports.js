import React, { useState } from "react";

import MaterialTable from "material-table";
import { Grid } from "@mui/material";

const empList = [
  {
    id:"2020A051019",
    roomNo: "PG",
    a_c: 10000,
   mode: "UPI",
    shelfNo: "237UH287423",
    Date: "19-10-2020",
   remark:""
  },
  {
    id:"2020A051012",
    roomNo: "PG",
    a_c: 6500,
    mode: "UPI",
    shelfNo: "5583TF957385",
    Date: "12-05-2020",
    remark:""
  },
  {
    id:"2020A050922",
    roomNo: "PG",
    a_c: 8000,
    mode: "UPI",
    shelfNo: "7867DE759387",
    Date:"22-09-2020",
    remark:""
  },
  {
    id:"2020A050922",
    roomNo: "PG",
    a_c: 8000,
    mode: "UPI",
    shelfNo: "6756KI735433",
    Date: "22-09-2020",
    remark:""
  },
  {
    id:"2021A050902",
    roomNo: "PG",
    a_c: 8000,
    mode: "UPI",
    shelfNo: "2342ML653475",
    Date: "02-09-2021",
    remark:""
  },
  {
    id:"2021A051122",
    roomNo: "PG",
    a_c: 8000,
    mode: "UPI",
    shelfNo: "7878HU657343",
    Date: "22-11-2021",
    remark:""
  },
  {
    id:"2021A050929",
    roomNo: "PG",
    a_c: 8000,
    mode: "UPI",
    shelfNo: "8989GY734564",
    Date: "29-09-2021",
    remark:""
  },
  {
    id:"2021A050714",
    roomNo:"PG",
    a_c: 8000,
    mode: "UPI",
    shelfNo: "4542NA634587",
    Date:"14-07-2021",
    remark:""
  },
];

function PaymentReport() {
  const [data, setData] = useState(empList);
  const columns = [
    { title: " GUEST ID", field: "id", editable: false,headerStyle: {
        backgroundColor: "#0096FF",color:"white"
      } },
    { title: "Payment Towards", field: "roomNo", headerStyle: {
      backgroundColor: "#0096FF",color:"white"
    } },
    { title: "Amount", field: "a_c" , headerStyle: {
      backgroundColor: "#0096FF",color:"white"
    }},
    { title: "Payment Method", field: "mode" ,headerStyle: {
      backgroundColor: "#0096FF",color:"white"
    }},
    { title: "Transaction Id", field: "shelfNo" ,headerStyle: {
      backgroundColor: "#0096FF",color:"white"
    }},
    { title: "Transaction Date", field: "Date" ,headerStyle: {
      backgroundColor: "#0096FF",color:"white"
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
              backgroundColor: "#0096FF",color:"white",fontSize:"20px",fontWeight:"bold"
              
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
