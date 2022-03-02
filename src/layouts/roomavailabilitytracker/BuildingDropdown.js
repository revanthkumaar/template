import React from 'react';
import BuildingOneTracker from './buildings/buildingOne';
import BuildingTwoTracker from './buildings/buildingTwo';
import BuildingThreeTracker from './buildings/buildingThree';
import BuildingFourTracker from './buildings/buildingFour';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Select from '@mui/material/Select';

let API_DATA = [ { building: 'Building-1' }, { building: 'Building-2' }, { building: 'Building-3' } ];

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
				name="country"
				displayEmpty
				
			>
				
				<MenuItem value="Building-1" component={Link} to = "/layouts/roomavailabilitytracker/buildings/buildingOne">Building-1</MenuItem>
				<MenuItem value="Building-2" component={Link} to = "/layouts/roomavailabilitytracker/buildings/buildingTwo">Building-2</MenuItem>
				<MenuItem value="Building-3" component={Link} to = "/layouts/roomavailabilitytracker/buildings/buildingThree">Building-3</MenuItem>
				<MenuItem value="Building-4"   component={Link} to = "/layouts/roomavailabilitytracker/buildings/buildingFour">Building-4</MenuItem>
			</Select>
		</div>
	);
}

export default BuildingDropdown;
