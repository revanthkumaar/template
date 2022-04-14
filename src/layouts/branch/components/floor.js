import React, { useState ,useEffect} from "react";
import MaterialTable from "material-table";
// import axios from "axios";
import { Grid,InputLabel} from "@mui/material";
import Select from "../../profile/GuestLoginForm/components/Select"
// import Select from "@mui/material/Select"

import axios from "../../../Uri";
import { getGridNumericOperators } from "@mui/x-data-grid";
import { Formik } from "formik";
const INITIAL_FORM_STATE = {
  occupancyType: ""
}





function Floor() {
  const [data, setData] = useState([]);
  const [building,setBuilding] =useState([])
  const [buildings,setBuildings]=useState([])
  const [buildName,setBuildName]=useState([])
  
  let buildingNames =[]
  useEffect(()=>{
    axios.get("/bed/getBuildingIdAndName")
    .then((res)=>{
      console.log(res.data)
      localStorage.setItem("buildInfo",JSON.stringify(res.data))
      setBuilding(res.data)
      res.data.map((post)=>{
        buildingNames.push(post.buildingName)
      })
      console.log(buildingNames)
      setBuildings(buildingNames)
      
})
    .catch((err)=>{
      console.log(err)
    })
  },[])
  // console.log(building)
  // building.map((item)=>{
  //   console.log(item.buildingName)
  //   buildingNames.push(item.buildingName)
  //   setBuildings(buildingNames)

  // })
  var obj = building.reduce(function(acc,cur,i) {
    acc[cur.buildingId] = cur.buildingName;

    return acc;
  }, {});
  console.log(obj);
  localStorage.setItem("buildinfo",JSON.stringify(obj))
  useEffect(() => {
    axios

      .get("/bed/getAllFloors")

      .then((res) => {
        setData(res.data);

        console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  const selectBuild =(i)=>{
    setBuildName(i.target.outerText)
    console.log(i.target.dataset.value)
  }
  //JSON.parse(localStorage.getItem('rowinfo'))
 let userData= sessionStorage.getItem('rowinfo')
 console.log(userData);

  return (
    
      
    
    
    <Grid container>
        <Grid xs={30}>
          <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}>
          <Grid item xs={12}>
                      <InputLabel >
                        
                        Select Building
                      </InputLabel>
                      <Select
                       
                        name="occupancyType"
                        options={obj}
                        onClick={selectBuild}
                        
                      />
                    </Grid>
          </Formik>
        <br/>
        <MaterialTable
          title="Manage Floors"
          columns = {[
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
            title: "Floor Number",
            field: "floorNumber",
            type:getGridNumericOperators,
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
             
                
                },
                validate:rowData =>{
                  if(rowData.floorNumber===undefined){
                 return  "Floor Number is Required"
               
              }
              return true
             }} ,
            {
              title: "Floor ID",
              editable:false,
             
              field: "floorId",
              headerStyle: {
                backgroundColor: "#1E90FF",
                color: "white",
              },
              
            
        
              
            },
            
           
        
          ]}
          data={data}
          sx={{ color: "white" }}
          // columns={columns}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                const updatedRows = [
                  ...data,
                  { id: Math.floor(Math.random() * 100), ...newRow },
                ];
                setTimeout(() => {
                  const res = axios.post(
                    "/bed/addFloor",

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
export default Floor;
