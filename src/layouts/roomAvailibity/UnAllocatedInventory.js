import React, { useState } from "react";

import MaterialTable from "material-table";
import { Grid } from "@mui/material";

const List = [
  {
    id: 1,
    bedNumber: "A12",
  },
  {
    id: 2,
    bedNumber: "A12",
  },
  {
    id: 3,
    bedNumber: "A12",
  },
  {
    id: 4,
    bedNumber: "A12",
  },
  {
    id: 5,
    bedNumber: "A12",
  },
  {
    id: 6,
    bedNumber: "A12",
  },
  {
    id: 7,
    bedNumber: "A12",
  },
  {
    id: 8,
    bedNumber: "A12",
  },
];

function UnAllocatedInventory() {
  const [data, setData] = useState(List);
  const columns = [
    {
      title: "ID",
      field: "id",
      editable: false,
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    },

    {
      title: "Bed Number",
      field: "bedNumber",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    },
  ];

  return (
    <div className="App">
      <Grid container>
        {/* <h1 align="center"></h1>
      <h4 align='center'></h4> */}
        <Grid xs={12}>
          <MaterialTable
            title="Unallocated Inventory"
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
                backgroundColor: "#1E90FF",
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

export default UnAllocatedInventory;
