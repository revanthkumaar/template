import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BedNumberDropDown() {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 530 }}>
        <InputLabel htmlFor="grouped-native-select">Bed Id</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">/;
            <option value={1}>A</option>
            <option value={2}>B</option> 
            <option value={2}>C</option> 

            <option value={2}>D</option> 

           
        </Select>
      </FormControl>
      
    </div>
  );
}
