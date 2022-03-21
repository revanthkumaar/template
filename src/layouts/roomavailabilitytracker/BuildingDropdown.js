import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Select from '@mui/material/Select';

let API_DATA = [ { building: 'Building-1' }, { building: 'ANANDANILAYAM' }, { building: 'Building-3' } ];

function BuildingDropdown() {
	const [ tableData, setTableData ] = React.useState(API_DATA);
	const [ selected, setSelected ] = React.useState('');

	function handleChange(event) {
		setSelected(event.target.value);
		let _vals = event.target.value ? API_DATA.filter((r) => r.building === event.target.value) : API_DATA;
		setTableData(_vals);
	}

	return (
		<div className="App">
			<label value="Select Building: ">Select Building: </label>
			<Select
				sx={{ minHeight: 44 }}
				style={{ width: '30%', height: '10%' }}
				value={selected}
				onChange={handleChange}
				name="building"
				
				
			>
				
				<MenuItem value="SREE KALA NILAYAM" component={Link} to ='/layouts/roomavailabilitytracker/buildings/SreeKalaNilayam'>SREE KALA NILAYAM</MenuItem>
				<MenuItem value="ANANDANILAYAM" component={Link} to ='/layouts/roomavailabilitytracker/buildings/AnandaNilayam'>ANANDA NILAYAM</MenuItem>
				<MenuItem value="SREE NILAYAM" component={Link} to = '/layouts/roomavailabilitytracker/buildings/SreeNilayam'>SREE NILAYAM</MenuItem>
				{/* <MenuItem value="Building-4"   component={Link} to = "/layouts/roomavailabilitytracker/buildings/buildingFour">Building-4</MenuItem> */}
			</Select>
		</div>
	);
}

export default BuildingDropdown;
