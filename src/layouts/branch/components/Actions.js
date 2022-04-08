import React, { useState ,useEffect} from "react";
import MaterialTable from "material-table";
// import axios from "axios";
import axios from '../../../Uri'
import { Grid } from "@mui/material"


// const empList = [
//   {
//     id: 1,
//     buildingName: "Building-1",
//     buildingNumber: "A12",
//     managerName: "Sivayya",
//     mobile: 9876543210,
//   },
//   {
//     id: 2,
//     buildingName: "Building-2",
//     buildingNumber: "B11",
//     managerName: "Subramanyam",
//     mobile: 9812345678,
//   },
//   {
//     id: 3,
//     buildingName: "Building-3",
//     buildingNumber: "C03",
//     managerName: "HariBabu",
//     mobile: 7896536289,
//   },
//   {
//     id: 4,
//     buildingName: "Building-4",
//     buildingNumber: "B11",
//     managerName: "Suresh",
//     mobile: 9087654321,
//   },
//   {
//     id: 5,
//     buildingName: "Building-1",
//     buildingNumber: "A12",
//     managerName: "Sivayya",
//     mobile: 9876543210,
//   },
//   {
//     id: 6,
//     buildingName: "Building-2",
//     buildingNumber: "B11",
//     managerName: "Subramanyam",
//     mobile: 9812345678,
//   },
//   {
//     id: 7,
//     buildingName: "Building-3",
//     buildingNumber: "C03",
//     managerName: "HariBabu",
//     mobile: 7896536289,
//   },
//   {
//     id: 8,
//     buildingName: "Building-4",
//     buildingNumber: "B11",
//     managerName: "Suresh",
//     mobile: 9087654321,
//   },
//   {
//     id: 9,
//     buildingName: "Building-1",
//     buildingNumber: "A12",
//     managerName: "Sivayya",
//     mobile: 9876543210,
//   },
//   {
//     id: 10,
//     buildingName: "Building-2",
//     buildingNumber: "B11",
//     managerName: "Subramanyam",
//     mobile: 9812345678,
//   },
//   {
//     id: 11,
//     buildingName: "Building-3",
//     buildingNumber: "C03",
//     managerName: "HariBabu",
//     mobile: 7896536289,
//   },
//   {
//     id: 12,
//     buildingName: "Building-4",
//     buildingNumber: "B11",
//     managerName: "Suresh",
//     mobile: 9087654321,
//   },
// ];

function Actions() {
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "Building Name",
      field: "building_name",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    },
    {
      title: "Manager Name",
      field: "manager_name",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    },
    {
      title: "Phone Number",
      field: "phone_number",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    },

  ];

  useEffect(() => {
    axios

      .get("/bed/getAllBuildings")

      .then((res) => {
        setData(res.data);

        console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    
      
    
    
    <Grid container>
        <Grid xs={30}>
      
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
                setTimeout(() => {
                  const res = axios.post(
                    "/bed/addBuilding",

                    newRow
                  );
                  console.log(newRow);
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                const index = selectedRow.building_id;
                const updatedRows = [...data];
                updatedRows.splice(index, 1);
                setTimeout(() => {
                  const res = axios.delete(
                    `/bed/deleteBuilding/${index}`
                  );
                  console.log(res);
                  console.log(updatedRows);
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                const index = oldRow.building_id;
                const updatedRows = [...data];
                updatedRows[index] = updatedRow;
                setTimeout(() => {
                  const res = axios.put(
                    `/bed/updateBuildingById/${index}`,
                    updatedRow
                  );

                  console.log(updatedRows);
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
          }}
          options={{
            exportButton:true,
            grouping:true,
            actionsColumnIndex: -1,
            addRowPosition: "first",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
              fontSize: "15px",
              height: "10px",
              fontWeight: 'bold'
            },
            rowStyle: {
              fontSize: 16,
            },
          }}
        />
      </Grid>
      </Grid>
    
 
);
}
export default Actions;
