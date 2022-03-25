import React from "react";
import { Chart } from "react-google-charts";
import BuildingsLayout from "../buildingsLayout";
import { useEffect, useState } from 'react';
import axios from "axios";


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

  // const [data, setdata] = React.useState([
  //   ["Task", "Hours per Day"],
  //   ["AvailableBeds", Availablebeds],
  //   ["OccupiedBeds", Occupiedbeds],
  // ])
  const [availableBeds, setAvailablebeds] = React.useState(0);
  const [occupiedBeds, setOccupiedbeds] = React.useState(0);
  const [apidata, setapiData] = React.useState([]);
  const [Apidata, setApiData] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('http://localhost:8085/bed/getBedSummaryForPieChartByAllBuildings')
      setapiData(request.data)
      
       setApiData(apidata.filter(post => {
                 return post.buildingName === props.buildingName
               }))
               Apidata.map(obj => {
                 setOccupiedbeds(obj.occupiedBeds)
                 setAvailablebeds(obj.availableBeds)
               })
    }
    fetchData();
  },[Apidata]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8085/bed/getBedSummaryForPieChartByAllBuildings")
  //     .then((res) => {
  //       setapiData(res.data);
  //       // console.log(apidata)
  //       setApiData(apidata.filter(post => {
  //         return post.buildingName === props.buildingName
  //       }))
  //       Apidata.map(obj => {
  //         setOccupiedbeds(obj.occupiedBeds)
  //         setAvailablebeds(obj.availableBeds)
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);





  // useEffect(() => {


  //   const getData = async () => {
  //     const url = "http://localhost:8085/bed/getBedSummaryForPieChartByAllBuildings";
  //     try {
  //       const resp = await fetch(url);
  //       const build = await resp.json();
  //        setapiData(build);
  //       setApiData(apidata.filter(post => {
  //            return post.buildingName === props.buildingName
  //          }))
  //       Apidata.map(obj => {
  //         setOccupiedbeds(obj.occupiedBeds)
  //         setAvailablebeds(obj.availableBeds)
  //       })
  //     }
  //     catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   getData();
  // }, []);

  var data = [
    ["Task", "Hours per Day"],
    ["AvailableBeds", availableBeds],
    ["OccupiedBeds", occupiedBeds],
  ]




   return (<>
//  { console.log(apidata)}

//     {console.log(props.buildingName)}
    
//      {console.log(Apidata)} 
//     {console.log(data)}
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  </>);
}
