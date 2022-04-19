import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";
// import axios from "axios";
import axios from "../../../Uri";
import Select from '../../profile/GuestLoginForm/components/Select'

// import { height, width } from "@mui/system";

function Beds() {

  const [data, setData] = useState([]);
  const [building,setBuilding] =useState([])
  const [buildings,setBuildings]=useState([])
  const [buildName,setBuildName]=useState([])
  let buildingNames =[]
  useEffect(()=>{
    axios.get("/bed/getBuildingIdAndName")
    .then((res)=>{
      //console.log(res.data)
     
      setBuilding(res.data)
      res.data.map((post)=>{
        buildingNames.push(post.buildingName)
      })
      //console.log(buildingNames)
      setBuildings(buildingNames)
      
})
    .catch((err)=>{
      console.log(err)
    })
  },[])
  var obj = building.reduce(function(acc,cur,i) {
    acc[cur.buildingId] = cur.buildingName;

    return acc;
  }, {});
  //console.log(obj);
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
      title: "Bed No",
      field: "bedId",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
      validate:rowData =>{
        if(rowData.bedId===undefined){
       return  "Bed Id is Required"
     
    }
    return true
      },
    },
    {
      title: "Room ID",
      field: "roomId",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white"},
        validate:rowData =>{
          if(rowData.roomId===undefined){
         return  "Room Id is Required"
       
      }
      return true
        },
      },
    
    // {
    //   title: "Floor Number",
    //   field: "floorId",
    //   headerStyle: {
    //     backgroundColor: "#1E90FF",
    //     color: "white",
    //   },
    // },

    {
      title: "Building Name",
      field: "buildingId",
      lookup: obj,
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
      validate:rowData =>{
        if(rowData.buildingId===undefined){
       return  "Building Id is Required"
     
    }
    return true
    }
  },

    {
      title: "Bed Status",
      field: "bedStatus",
     // editable: true,
      lookup: { true: "Not Allocated", false: "Allocated" },
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    },
    {
      title: "Bed Name",
      field: "bedName",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
      validate:rowData =>{
        if(rowData.bedName===undefined){
       return  "Bed Name is Required"
     
    }
    return true
      },
    },
    {
      title: "Default Rent",
      field: "defaultRent",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
      validate:rowData =>{
        if(rowData.defaultRent===undefined){
       return  "Default Rent is Required"
     
    }
    return true
      },
    },
    {
      title: "Security Deposit",
      field: "securityDeposit",
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
      validate:rowData =>{
        if(rowData.bedName===undefined){
       return  "Bed Name is Required"
     
    }
    return true
      },
    },
    {
      title: "Room Type",
      field: "ac",
      lookup: { true: "Ac", false: "Non_Ac" },
      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    },
  ];
  const owner="admin"
  const obje = { createdBy: owner };

  useEffect(() => {
    axios

      .get("/bed/getAllBeds")

      .then((res) => {
        setData(res.data);

        //console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      
      <Grid container>
        {/* <h1 align="center"></h1>
      <h4 align='center'></h4> */}
        <Grid xs={12}>
          <MaterialTable
            title="Manage Beds"
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
                      "/bed/addBed",

                      newRow1
                    );
                    //console.log(newRow1);
                    setData(updatedRows);
                    resolve();
                  }, 2000);
                }),
              onRowDelete: (selectedRow) =>
                new Promise((resolve, reject) => {
                  const index = selectedRow.id;
                  const updatedRows = [...data];
                  updatedRows.splice(index, 1);
                  setTimeout(() => {
                    const res = axios.delete(`/bed/deleteBed/${index}`);
                    // console.log(res);
                    // console.log(updatedRows);
                    setData(updatedRows);
                    resolve();
                  }, 2000);
                }),
              onRowUpdate: (updatedRow, oldRow) =>
                new Promise((resolve, reject) => {
                  const index = oldRow.id;
                  const updatedRows = [...data];
                  updatedRows[index] = updatedRow;
                  setTimeout(() => {
                    const res = axios.put(
                      `/bed/updateBedById/${index}`,
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
        </Grid>
      </Grid>
    </div>
  );
}

export default Beds;
