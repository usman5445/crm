import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRef } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { updateUsers } from "../utils/updateUser";

export default function FormDialog({ open, setOpen, data }) {
  //   const [open, setOpen] = React.useState(false);
  const [userIdRef, userNameRef, emailRef, userStatusRef, userTypeRef] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const handleSubmit = () => {
    const updatedDataObj = {
      name: userNameRef.current.value,
      userId: userIdRef.current.value,
      email: emailRef.current.value,
      userType: userTypeRef.current.value,
    };
    (async function () {
      await updateUsers(updatedDataObj)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    })();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {data.length == 7 ? "Edit Ticket Data" : "Edit User Data"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Change the values below and click on Submit button.
        </DialogContentText>
        {data.length != 7 ? (
          <FormGroup sx={{ padding: 2 }}>
            <TextField
              sx={{ margin: 1 }}
              inputRef={userIdRef}
              variant="outlined"
              label="UserId"
              defaultValue={data[2]}
              disabled
            />
            <TextField
              sx={{ margin: 1 }}
              inputRef={userNameRef}
              variant="outlined"
              label="UserName"
              defaultValue={data[0]}
            />
            <TextField
              sx={{ margin: 1 }}
              inputRef={emailRef}
              variant="outlined"
              label="Email"
              defaultValue={data[1]}
            />
            <FormControl fullWidth sx={{ margin: 1 }}>
              <InputLabel id="demo-simple-select-label">UserType</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="User Type"
                inputRef={userTypeRef}
                defaultValue={data[4]}
              >
                <MenuItem value={"CUSTOMER"}>CUSTOMER</MenuItem>
                <MenuItem value={"ENGINEER"}>ENGINEER</MenuItem>
                <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ margin: 1 }}>
              <InputLabel id="demo-simple-select-label">UserType</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="User Type"
                inputRef={userStatusRef}
                defaultValue={data[3]}
              >
                <MenuItem value={"PENDING"}>PENDING</MenuItem>
                <MenuItem value={"APPROVED"}>APPROVED</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
