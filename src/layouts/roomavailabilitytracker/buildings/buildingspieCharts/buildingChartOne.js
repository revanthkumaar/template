import React from "react";
import { Chart } from "react-google-charts";

// const [buildingInfo, setBuildingInfo] = React.useState({});
//     const [Floors, setFloors] = React.useState([]);

//     useEffect(() => {
//       const GetData = async () => {
//           const url = "http://localhost:8084/bed/getBedsByBuildingId/1";
//           try {
//               const resp = await fetch(url);
//               const build = await resp.json();
//               setBuildingInfo(build);
//               setFloors(build.floors)
//           }
//           catch (err) {
//               console.error(err);
//           }
//       }
//       GetData();
//   }, []);

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

export default function BuildingsChartOne() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      idth={"100%"}
      height={"400px"}
    />
  );
}
