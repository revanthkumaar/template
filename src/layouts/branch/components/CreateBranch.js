import * as React from "react";
//import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
import { TextField, Grid, MenuItem } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import MDButton from "components/MDButton";
//import { useFormikContext } from 'formik';
import * as Yup from "yup"; 
import { Formik,Form} from "formik";
const INITIAL_FORM_STATE = {
  buildingName:"",
  buildingNumber:"",
  manager:"",
  mobileNumber:""
};

const SCHEMA = Yup.object().shape({
  buildingName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid FirstName ")
    .required("Required"),
    buildingNumber:Yup.string().required("Required"),
    manager:Yup.string().required("Required"),
  mobileNumber:Yup.string()
  .matches(/^[6-9]\d{9}$/, {
    message: "Please enter Valid Mobile Number",
    excludeEmptyString: false,
  })
  .required("Required"),


});

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
// const managers = [
//   {
//     value: "AlluArjun",
//     label: "Allu Arjun",
//   },
//   {
//     value: "RamCharan",
//     label: "Ram Charan",
//   },
//   {
//     value: "ntr",
//     label: "NTR",
//   },
//   {
//     value: "Prabhas",
//     label: "Prabhas",
//   },
// ];

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [manager, setManager] = React.useState("Manager");
  

  const handleChange = (event) => {
    setManager(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  return (
    <div>
      <Grid container spacing={100} columns={16}>
        <Grid item xs={8}></Grid>
        <Grid item xs={8}>
          <MDButton
            variant="outlined"
            color="info"
            size="large"
            onClick={handleClickOpen}
            
          >
            CreateBuilding
          </MDButton>
        </Grid>
      </Grid>

      {/* <Button >+ Create Building</Button> */}
      <br />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Building</DialogTitle>
        <DialogContent>
          <Grid container>
          <Formik
              initialValues={INITIAL_FORM_STATE}
              validationSchema={SCHEMA}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
            <TextField
              margin="dense"
              id="outlined-basic"
              name="buildingName"
              label="Building Name"
              variant="outlined"
              fullWidth
            />

            <TextField
              margin="dense"
              id="outlined-basic1"
              label="Building Number"
              name="buildinguNumber"
              variant="outlined"
              fullWidth
            />

            <FormControl fullWidth margin="dense">
              <InputLabel id="demo-simple-select-label">
                Select Manager
              </InputLabel>
              <Select
                sx={{ minHeight: 44 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={manager}
                label="Select Manager"
                name="manager"
                onChange={handleChange}
              >
                <MenuItem value={10}>Allu Arjun</MenuItem>
                <MenuItem value={20}>Prabhas</MenuItem>
                <MenuItem value={30}>NTR</MenuItem>
                <MenuItem value={40}>MaheshBabu</MenuItem>
                <MenuItem value={50}>Samantha</MenuItem>
              </Select>
            </FormControl>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="mobileNumber"
              label="Mobile Number"
              type="number"
              fullWidth
              variant="outlined"
            />
            </Form>
            </Formik>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
