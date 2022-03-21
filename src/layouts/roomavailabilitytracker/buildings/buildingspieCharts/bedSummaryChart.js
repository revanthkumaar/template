import React from "react";
import { Chart } from "react-google-charts";
import BuildingsLayout from "../buildingsLayout";
import  { useEffect, useState } from 'react'



// const DynamicData =  


export const data = [
  ["Task", "Hours per Day"] ,
  ["AvailableBeds", 1],
  ["OccupiedBeds", 6],
 
];

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

//   const [data, setData] = React.useState([]);
  
//   useEffect(() => {
//       const GetData = async () => {
//           const url = "http://localhost:8085/bed/getAvailableBedsByBuildings";
//           try {
//               const resp = await fetch(url);
//               const build = await resp.json();
//               setData(build);
//               // setFloors(build.floors)
//               // const data = buildingInfo.
//               console.log(data)
//           }
//           catch (err) {
//               console.error(err);
//           }
//       }
//       GetData();
//   }, []);

//   const Data = data.filter(post => {
//     return post.buildingName === props.buildingName
// });


  return (<>


    {/* {console.log(Data)} */}
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  </>);
}
