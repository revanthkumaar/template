import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["AvailableBeds", 16],
  ["OccupiedBeds", 6],
 
];

export const options = {
 
};

export default function BuildingOneChartOne() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
