import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";

// import axios from "axios";
import axios from "../../../Uri";
// import { height, width } from "@mui/system";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function Build() {
  
  const [data, setData] = useState([]);
 
  const columns = [
    // {
    // 	title: 'ID',
    // 	field: 'id',
    // 	editable:false,
    // 	headerStyle: {
    // 		backgroundColor: '#1E90FF',
    // 		color: 'white',
    // 		height:'20px',
    // 		width:'1px'
    // 	}
    // },

    {
      title: "Building Name",
      field: "building_name",
    
   
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white"},
        validate:rowData =>{
          if(rowData.building_name === undefined||rowData.building_name=== ""){
            return "Required"
          }else if(rowData.building_name.length<3){
            return" Building name should contains atleast 3 alphabets"
          }
          return true
        }
      
    },
    {
      title: "Role",
      field: "userType",
      lookup:{manager:"Manager",},
    
   
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white"
      }
    },

    {
      title: "Manger Name",
      field: "userName",
      
     // lookup: { true: "Not Allocated", false: "Allocated" },
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white"},
        validate:rowData =>{
          if(rowData.userName === undefined||rowData.userName=== ""){
            return "Required"
          }else if(rowData.userName.length<3){
            return" Manager name should contains atleast 3 alphabets"
          }
          return true
        }
      },
      {
        title: "Email",
        field: "email",
        type:"email",
     
        headerStyle: {
          backgroundColor: "#1E90FF",
          color: "white"
        }
      },
      // {
      //   title: "Password",
      //   field: "password",
      //   type:"password",
      
     
      //   headerStyle: {
      //     backgroundColor: "#1E90FF",
      //     color: "white"
      //   }
      // },
     
    {
      title: "Phone Number",
      field: "userPhoneNumber",
      
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
      validate: rowData => {
        if (rowData.userPhoneNumber === undefined || rowData.userPhoneNumber === "") {
          return "Required"
        } else if (rowData.userPhoneNumber.length < 10 || rowData.userPhoneNumber.length > 10) {
          return "Phone number should contains 10 digits"
          //  return {isValid:false,helperText:"Phone number should contains 10 digits"}
        }
        return true
      },
    }
  ];

  useEffect(() => {
    axios

      .get("/bed/getAllMasterData")

      .then((res) => {
        setData(res.data);

        //console.log(res.data);
      })

      .catch((err) => {
        console.log(err)
        toast.error("Server Error")
      });
  }, []);

 


 
  

  return (
    <div className="App">
      <Grid container>
        {/* <h1 align="center"></h1>
      <h4 align='center'></h4> */}
        <Grid xs={12}>
          <MaterialTable
            title="Manage Buildings"
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
                    //console.log(newRow);
                    toast.success("New Buiding added")
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
                    const res = axios.delete(`/bed/deleteBuilding/${index}`);
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
              actionsColumnIndex: -1,
              grouping:true,
              addRowPosition: "first",
              headerStyle: {
                backgroundColor: "#1E90FF",
                color: "white",
                fontSize: "15px",
                //height: "10px",
                //fontWeight: 'bold'
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
    </div>
  );
}

export default Build;
