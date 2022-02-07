import React, { useState } from "react";
//import './App.css';
import MaterialTable from "material-table";
import { Grid } from "@mui/material";

const empList = [
  {
    id: 1,
    name: "Building-1",
    email: "A12",
    city: "Sivayya",
    phone: 9876543210,
  },
  {
    id: 2,
    name: "Building-2",
    email: "B11",
    city: "Subramanyam",
    phone: 9812345678,
  },
  {
    id: 3,
    name: "Building-3",
    email: "C03",
    city: "HariBabu",
    phone: 7896536289,
  },
  {
    id: 4,
    name: "Building-4",
    email: "B11",
    city: "Suresh",
    phone: 9087654321,
  },
];

function Actions() {
  const [data, setData] = useState(empList);
  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Building Name", field: "name" },
    { title: "Building Number", field: "email" },
    { title: "Manager Name", field: "city" },
    { title: "Phone Number", field: "phone" },
  ];

  return (
    <Grid container>
      {/* <h1 align="center"></h1>
      <h4 align='center'></h4> */}
      <Grid xs={12}>
        <MaterialTable
          title="Managers Data"
          data={data}
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
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Actions;
