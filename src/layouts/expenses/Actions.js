import React, { useState } from "react";

import MaterialTable from "material-table";
import { Grid } from "@mui/material";

const empList = [
  {
    id: 1,
    name: "Building 1",
    title: "Daily Needs",
    date: "12/01/2022",
    amount: 9210,
    reason: "Inventory Report"
  },
  {
    id: 2,
    name: "Building 2",
    title: "Material Change",
    date: "12/02/2022",
    amount: 9910,
    reason: "Material Brokage"
  },
  {
    id: 3,
    name: "Building 3",
    title: "Electrical Repair",
    date: "11/01/2022",
    amount: 9210,
    reason: "Electrical Repair"
  },
  {
    id: 4,
    name: "Building 1",
    title: "Daily Needs",
    date: "12/01/2022",
    amount: 9210,
    reason: "Inventory Report"
  },
  {
    id: 5,
    name: "Building 2",
    title: "Material Change",
    date: "12/02/2022",
    amount: 9910,
    reason: "Material Brokage"
  },
  {
    id: 6,
    name: "Building 3",
    title: "Electrical Repair",
    date: "11/01/2022",
    amount: 9210,
    reason: "Electrical Repair"
  },
  {
    id: 7,
    name: "Building 1",
    title: "Daily Needs",
    date: "12/01/2022",
    amount: 9210,
    reason: "Inventory Report"
  },
  {
    id: 8,
    name: "Building 2",
    title: "Material Change",
    date: "12/02/2022",
    amount: 9910,
    reason: "Material Brokage"
  },
  {
    id: 9,
    name: "Building 3",
    title: "Electrical Repair",
    date: "11/01/2022",
    amount: 9210,
    reason: "Electrical Repair"
  },
  
];

function Actions() {
  const [data, setData] = useState(empList);
  const columns = [
    { title: "Branch Name", field: "name", editable: false,headerStyle: {
      backgroundColor: "#00BFFF",color:"white",
    } },
    { title: "Title", field: "title" , headerStyle: {
      backgroundColor: "#00BFFF",color:"white"
    }},
    { title: "Expense Date", field: "date" ,headerStyle: {
      backgroundColor: "#00BFFF",color:"white"
    }},
    { title: "Amount", field: "amount" ,headerStyle: {
      backgroundColor: "#00BFFF",color:"white"
    }},
    { title: "Reason", field: "reason" ,headerStyle: {
      backgroundColor: "#00BFFF",color:"white"
    }},
  ];

  return (
    <div className="App">
    <Grid container>
      {/* <h1 align="center"></h1>
      <h4 align='center'></h4> */}
      <Grid xs={12}>
        <MaterialTable
          title="Expenses Information"
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
              backgroundColor: "#00BFFF",color:"white",fontSize:"20px",fontWeight:"bold"
            },rowStyle: {
              fontSize: 16,
            }
          }}
        />
      </Grid>
    </Grid>
    </div>
  );
}

export default Actions;
