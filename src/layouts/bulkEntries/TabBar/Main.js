import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RoomAvailabilityCheck from '../RoomAvailabilityCheck/RoomAvailabilityCheck'


export default function Main() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}  >
      
        <Typography align='center' sx={{pb:3}} variant='h5'>Room Availability Check</Typography>
     
      <div value={value} index={0}>
        <RoomAvailabilityCheck/>
      </div>
      
     
    </Box>
  );
}
