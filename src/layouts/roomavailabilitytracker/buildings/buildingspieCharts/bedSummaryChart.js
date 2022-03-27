import React from "react";
import { Chart } from "react-google-charts";
import BuildingsLayout from "../buildingsLayout";
import { useEffect, useState } from 'react';
import axios from "axios";


var availableBeds = 0;
var occupiedBeds = 0;
export const options = {
  title: "BedSummary",
  slices: [
    {
      color: "#D2691E"
    },
    {
      color: "#6495ED"
    },

  ],
};

export default function BedSummaryChart(props) {
  
  const [apidata, setapiData] = React.useState([]);
  

  useEffect(() => {
       async function fetchData() {
      const request = await axios.get('http://localhost:8989/bed/getBedSummaryForPieChartByAllBuildings')
       setapiData(request.data)    
    }
    fetchData();
  }, []);

  const filtereddata = apidata.filter(post => {
    return post.buildingName === props.buildingName
  })
  filtereddata.map(obj => {
    occupiedBeds = (obj.occupiedBeds)
      availableBeds  = (obj.availableBeds)
  })

  var data = [
    ["Task", "Hours per Day"],
    ["AvailableBeds", availableBeds],
    ["OccupiedBeds", occupiedBeds],
  ]
  return (<>
    { console.log(apidata)}

     {console.log(props.buildingName)}
    
      {/* {console.log(filterddata)}  */}
     {console.log(data)}
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  </>);
}
