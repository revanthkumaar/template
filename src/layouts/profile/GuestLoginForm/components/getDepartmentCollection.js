// const data = ([
//     { id: '1', title: 'Development' },
//     { id: '2', title: 'Marketing' },
//     { id: '3', title: 'Accounting' },
//     { id: '4', title: 'HR' },
// ])

// export default data
import React, { useEffect, useState } from "react";
import axios from "axios";
const data = () => {
  // const[bed ,setBed] = useState([]);
  // useEffect(() => {
  //     axios
  //       .get("http://localhost:8085/bed/getBedsByAllBuildings")
  //       .then((res) => {
  //         setBed(res.data);

  //         console.log(res.data);
  //       })

  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  //   console.log(bed)
  //   return(
  //       <diV>

  //       </diV>
  //   )
  let result = axios
    .get("http://localhost:8085/bed/getBedsByAllBuildings")
    .then((resp) => {
   return resp.data;
    })
    .catch((error) => {
      return error;
    });
  return result;
};
export default data;
