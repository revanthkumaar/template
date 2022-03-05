import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Gender() {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 530 }}>
        <InputLabel htmlFor="grouped-native-select">Gender</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">/;
            <option value={1}>Male</option>
            <option value={2}>Female</option> 
           
        </Select>
      </FormControl>
      
    </div>
  );
}
