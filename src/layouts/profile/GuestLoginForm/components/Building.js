import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
import MenuItem from '@mui/material/MenuItem'
import Select from "@mui/material/Select";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1)
//   },
//   input: {
//     display: "none"
//   }
// }));

let API_DATA = [
  { building: "Building-1", },
  { building: "Building-2", },
  { building: "Building-3",  }
];

function Building() {
  //const classes = useStyles();
  const [tableData, setTableData] = React.useState(API_DATA);
  const [selected, setSelected] = React.useState("");

  function handleChange(event) {
    setSelected(event.target.value);
    let _vals = event.target.value
      ? API_DATA.filter(r => r.building === event.target.value)
      : API_DATA;
    setTableData(_vals);
  }

  return (
    <div className="App">
      <label value="Select Building: ">Select Building: </label>
      <Select sx={{minHeight:44}}
        style={{ width: "30%",height:"10%" }}
        value={selected}
        onChange={handleChange}
        name="country"
        displayEmpty
        // className={classes.selectEmpty}
      >
        <MenuItem value="">Buildings</MenuItem>
        <MenuItem value="Building-1">Building-1</MenuItem>
        <MenuItem value="Building-2">Building-2</MenuItem>
        <MenuItem value="Building-3">Building-3</MenuItem>
        <MenuItem value="Building-4">Building-4</MenuItem>
      </Select>

      {/* <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Building</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(row => (
            <TableRow key={row.building}>
              <TableCell align="center">{row.building}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </div>
  );
}

export default Building;
