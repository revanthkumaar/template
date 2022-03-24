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

  var Availablebeds = 0;
  var Occupiedbeds = 0;

  const [apidata, setapiData] = React.useState([]);
  const [bedsummary, setBedSummary] = React.useState([]);

  //  const [availablebeds, setavailablebeds] = React.useState(0);
  //  const [occupiedbeds, setoccupiedbeds] = React.useState(0);
  const [data, setdata] = React.useState([
    ["Task", "Hours per Day"],
    ["AvailableBeds", Availablebeds],
    ["OccupiedBeds", Occupiedbeds],
  ])
  useEffect(() => {
    const GetData = async () => {
      const url = "http://localhost:8085/bed/bedSummaryForPieChart";
      try {
        const resp = await fetch(url);
        const build = await resp.json();
        setapiData(build);
        apidata.map((bs) => {
          setBedSummary(bs.bedSummary)
        })
        // console.log(bedsummary)
        bedsummary.map((aobeds) => {

          let Occupiedbeds = (aobeds.occupiedBeds)
          let Availablebeds = (aobeds.availableBeds)
          setdata([
            ["Task", "Hours per Day"],
            ["AvailableBeds", Availablebeds],
            ["OccupiedBeds", Occupiedbeds],

          ])
        })


      }
      catch (err) {
        console.error(err);
      }
    }
    GetData();
  }, []);

  {console.log(bedsummary)}
  // {console.log(Availablebeds)}
  // {console.log(Occupiedbeds)}


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
