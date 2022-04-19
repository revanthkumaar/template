import React, { useEffect } from "react";

import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Select from "@mui/material/Select";
import axios from "../../../Uri";
import BuildingsLayout from "./buildingsLayout/buildingsLayout";
import BedSummaryChart from "./buildingspieCharts/bedSummaryChart";
import PaymentSummaryChart from "./buildingspieCharts/paymentSummaryChart";
import { Grid } from "@mui/material";

function MgrBuildingDropdown(props) {
  const [selected, setSelected] = React.useState("");
  const [building, setBuilding] = React.useState([]);
  

  function handleChange(event) {
    console.log(event.target.outerText);
    setSelected(event.target.outerText)
  }
  let userData = JSON.parse(sessionStorage.getItem('userdata'))
  let buildingsId = userData.data.buildingId;
    console.log(buildingsId)

  useEffect(() => {
    
    axios.get(`bed/getBuildingsById/${buildingsId}`).then((res) => {
      console.log(res.data);
      setBuilding(res.data);

    });
  }, []);
  console.log(building);

  return (
    <>
      
      <label value="Select Building: ">Select Building: </label>
      <Select
        sx={{ minHeight: 44 }}
        style={{ width: "30%", height: "10%" }}
        defaultValue={building.building_name}
        name="building"
      >
        
            <MenuItem
              value={building.building_name}
              onClick={handleChange}
            >
              {" "}
              {building.building_name}{" "}
            </MenuItem>
         
      </Select>
      {building.building_name === selected ? (
        <Grid>
        <Grid container direction="row" justifyContent="left" alignItems="left">
        <Grid item xs={6}>
          <BedSummaryChart buildingId={buildingsId} />
        </Grid>
        <Grid item xs={6}>
          <PaymentSummaryChart buildingId={buildingsId} />
        </Grid>
      </Grid>
        <BuildingsLayout buildingId={buildingsId} /> 
        </Grid>

      ):(
        console.log("hi")
      ) }

         
      

      {console.log(building)}
    </>
  );
}

export default MgrBuildingDropdown;
