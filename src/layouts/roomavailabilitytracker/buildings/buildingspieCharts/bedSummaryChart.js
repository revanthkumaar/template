import React from "react";
import { Chart } from "react-google-charts";
import BuildingsLayout from "../buildingsLayout";
import { useEffect, useState } from 'react'



// const DynamicData =  

// export const data = [
//   ["Task", "Hours per Day"] ,
//   ["AvailableBeds", availableBeds],
//   ["OccupiedBeds", occupiedBeds],

// ];

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
  // var Availablebeds = 0;
  // var Occupiedbeds = 0;
  const [apidata, setapiData] = React.useState([]);
  const [Availablebeds, SetAvailablebeds] = React.useState(7);
  const [Occupiedbeds, SetOccupiedbeds] = React.useState(3);

  // const [data, setdata] = React.useState([
  //   ["Task", "Hours per Day"],
  //   ["AvailableBeds", Availablebeds],
  //   ["OccupiedBeds", Occupiedbeds],
  // ])
  useEffect(() => {
    const GetData = async () => {
      const url = "http://localhost:8085/bed/getBedSummaryForPieChartByBuildingId/1";
      try {
        const resp = await fetch(url);
        const build = await resp.json();
        setapiData(build);
        
        apidata.map(obj => {
          SetOccupiedbeds(obj.occupiedBeds)
          SetAvailablebeds(obj.availableBeds)
        })


        // setdata([
        //   ["Task", "Hours per Day"],
        //   ["AvailableBeds", Availablebeds],
        //   ["OccupiedBeds", Occupiedbeds],

        // ])



      }
      catch (err) {
        console.error(err);
      }
    }
    GetData();
  }, []);


  var data=[
       ["Task", "Hours per Day"],
       ["AvailableBeds", Availablebeds],
       ["OccupiedBeds", Occupiedbeds],
     ]

  

  console.log(apidata)
  console.log(data)
  return (<>
   
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  </>);
}
