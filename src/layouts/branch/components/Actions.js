import React, { useState } from "react";

import MaterialTable from "material-table";
import { Grid } from "@mui/material";

const empList = [
  {
    id: 1,
    buildingName: "Building-1",
    buildingNumber: "A12",
    managerName: "Sivayya",
    mobile: 9876543210,
  },
  {
    id: 2,
    buildingName: "Building-2",
    buildingNumber: "B11",
    managerName: "Subramanyam",
    mobile: 9812345678,
  },
  {
    id: 3,
    buildingName: "Building-3",
    buildingNumber: "C03",
    managerName: "HariBabu",
    mobile: 7896536289,
  },
  {
    id: 4,
    buildingName: "Building-4",
    buildingNumber: "B11",
    managerName: "Suresh",
    mobile: 9087654321,
  },
  {
    id: 5,
    buildingName: "Building-1",
    buildingNumber: "A12",
    managerName: "Sivayya",
    mobile: 9876543210,
  },
  {
    id: 6,
    buildingName: "Building-2",
    buildingNumber: "B11",
    managerName: "Subramanyam",
    mobile: 9812345678,
  },
  {
    id: 7,
    buildingName: "Building-3",
    buildingNumber: "C03",
    managerName: "HariBabu",
    mobile: 7896536289,
  },
  {
    id: 8,
    buildingName: "Building-4",
    buildingNumber: "B11",
    managerName: "Suresh",
    mobile: 9087654321,
  },
  {
    id: 9,
    buildingName: "Building-1",
    buildingNumber: "A12",
    managerName: "Sivayya",
    mobile: 9876543210,
  },
  {
    id: 10,
    buildingName: "Building-2",
    buildingNumber: "B11",
    managerName: "Subramanyam",
    mobile: 9812345678,
  },
  {
    id: 11,
    buildingName: "Building-3",
    buildingNumber: "C03",
    managerName: "HariBabu",
    mobile: 7896536289,
  },
  {
    id: 12,
    buildingName: "Building-4",
    buildingNumber: "B11",
    managerName: "Suresh",
    mobile: 9087654321,
  },
];

function Actions() {
  const [data, setData] = useState(empList);
  const columns = [
    {
      title: "ID",
      field: "id",
      editable: false,
      width: "4%",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
        mt: 2,
        mb: 2,
        height: 10,
      },
    },
    {
      title: "Building Name",
      field: "buildingName",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
        height: 10,
      },
    },
    {
      title: "Building Number",
      field: "buildingNumber",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
        height: 10,
      },
    },
    {
      title: "Manager Name",
      field: "managerName",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
        height: 10,
      },
    },
    {
      title: "Phone Number",
      field: "mobile",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
        height: 10,
      },
    },
  ];

  return (
    <div className="App">
      <Grid container>
        <Grid xs={12}>
          <MaterialTable
            title="Manage Employees"
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
                  console.log(newRow);
                  setTimeout(() => {
                    setData(updatedRows);
                    resolve();
                  }, 2000);
                  console.log(updatedRows);
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
              exportButton: true,
              grouping: true,
              actionsColumnIndex: -1,
              addRowPosition: "first",
              headerStyle: {
                backgroundColor: "#1E90FF",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                height: 10,
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

export default Actions;
