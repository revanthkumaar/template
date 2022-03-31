import React from 'react'
import { Grid ,MenuItem,InputLabel,Select} from '@mui/material';
import TextField from '@mui/material/TextField';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';


function RecordpaymentsinPopUp() {
  return (
    <div><Grid container spacing={1}>
    <Grid item xs={6} sx={{ pl: 6 }}>

        <TextField
            id="outlined-textarea"
            label="Amount Paid"
            style={{ width: '65%', marginLeft: '50px', marginBottom: '20px' }}
        /></Grid>
    <Grid item xs={6}>
        <TextField
            id="outlined-textarea"
            label="Transaction Id"
            style={{ width: '65%', marginBottom: '20px' }}
        /></Grid>
    <Grid item xs={6}>

<InputLabel id="Payment Purpose"  style={{ width: '65%',marginLeft: '60px', marginBottom: '5px' }}
>Payment Purpose</InputLabel>
<Select
labelId="Payment Purpose"
id="Payment Purpose"
style={{ width: '65%',marginLeft: '50px', marginBottom: '20px' ,height:40}}
value={onselect}
label="Payment Purpose"

>
<MenuItem>Rent</MenuItem>
<MenuItem>Security Deposit</MenuItem>

</Select>
</Grid>

    <Grid item xs={5}>
       
       
        
        <MDButton
            variant="contained"
            color="info"
            size="small"
            justify="right"
            style={{ borderRadius: 10, float: 'right', height: 40 }}



            >



                <MDTypography color='white'>Record Payment</MDTypography>        </MDButton>
    </Grid>
    
    </Grid></div>
  )
}

export default RecordpaymentsinPopUp