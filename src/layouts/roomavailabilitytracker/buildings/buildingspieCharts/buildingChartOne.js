import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
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
