import React, { useState ,useEffect} from "react";
import MaterialTable from "material-table";
// import axios from "axios";
import { Grid } from "@mui/material";
import axios from "../../../Uri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'





function Room() {
  const [data, setData] = useState([]);
  
  const columns = [
    {
      title: "Room Id",
      editable:false,
      field: "roomId",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
  
    },
    {
      title: "Room Number",
      field: "roomNumber",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
      validate:rowData =>{
        if(rowData.roomNumber===undefined){
       return  "Room Number is Required"
     
    }
    return true
      }
      
    },
    {
      title: "Floor Id",
      field: "floorId",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
      validate:rowData =>{
        if(rowData.floorId===undefined){
       return  "floor id is Required"
     
    }
    return true
      }
    },

  ];

  useEffect(() => {
    axios

      .get("/bed/getAllRooms")

      .then((res) => {
        setData(res.data);

        //console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
        toast.error("Server error");
      });
  }, []);
  const owner="Super Admin"
  const obje = { createdBy: owner };

  return (
    
      
    
    
    <Grid container>
        <Grid xs={30}>
      
        <MaterialTable
          title="Manage Rooms"
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
                  const newRow1= Object.assign(newRow,obje)
                  const res = axios.post(
                    "/bed/addRoom",

                    newRow1
                  )
                  .catch((err) => {
                    toast.error("Server error");
                  });
                  //console.log(newRow);
              
                  toast.success("New Room added")
                  //console.log(newRow1);
                  
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
                  // console.log(res);
                  // console.log(updatedRows);
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

                  //console.log(updatedRows);
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
           <ToastContainer  maxWidth="sx"
               position="top-right"
               autoClose={3000}
               type="toast.TYPE.SUCCESS"
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               />
      </Grid>
      </Grid>
    
 
);
}
export default Room;
