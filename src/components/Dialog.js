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
import { useDispatch } from "react-redux";
import { updateTicketThunk } from "../reduxSetup/ticketDataSlice";
import { updateUsersThunk } from "../reduxSetup/userDataSlice";

export default function FormDialog({ open, setOpen, data }) {
  //   const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [userIdRef, userNameRef, emailRef, userStatusRef, userTypeRef] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const [
    ticketIdRef,
    ticketTitleRef,
    ticketDiscriptionRef,
    ticketPriorityRef,
    ticketStatusRef,
    ticketAssigneeRef,
    ticketReporterRef,
  ] = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const handleSubmit = () => {
    if (Object.keys(data).length == 9) {
      const updatedDataObj = {
        title: ticketTitleRef.current.value,
        description: ticketDiscriptionRef.current.value,
        ticketPriority: ticketPriorityRef.current.value,
        status: ticketStatusRef.current.value,
        assignee: ticketAssigneeRef.current.value,
        ticketId: ticketIdRef.current.value,
      };
      dispatch(updateTicketThunk(updatedDataObj));
      setOpen(false);
    } else {
      const updatedUserDataObj = {
        userId: userIdRef.current.value,
        userName: userNameRef.current.value,
        userStatus: userStatusRef.current.value,
        userType: userTypeRef.current.value,
      };
      dispatch(updateUsersThunk(updatedUserDataObj));
      setOpen(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {Object.keys(data).length == 9 ? "Edit Ticket Data" : "Edit User Data"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Change the values below and click on Submit button.
        </DialogContentText>
        {Object.keys(data).length != 9 ? (
          <FormGroup sx={{ padding: 2 }}>
            <TextField
              sx={{ margin: 1 }}
              inputRef={userIdRef}
              variant="outlined"
              label="UserId"
              defaultValue={data.userId}
              disabled
            />
            <TextField
              sx={{ margin: 1 }}
              inputRef={userNameRef}
              variant="outlined"
              label="UserName"
              defaultValue={data.name}
            />
            <TextField
              sx={{ margin: 1 }}
              inputRef={emailRef}
              variant="outlined"
              label="Email"
              disabled
              defaultValue={data.email}
            />
            <FormControl fullWidth sx={{ margin: 1 }}>
              <InputLabel id="demo-simple-select-label">User Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="User Type"
                inputRef={userTypeRef}
                defaultValue={data.userTypes}
              >
                <MenuItem value={"CUSTOMER"}>CUSTOMER</MenuItem>
                <MenuItem value={"ENGINEER"}>ENGINEER</MenuItem>
                <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ margin: 1 }}>
              <InputLabel id="demo-simple-select-label">User Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="User Type"
                inputRef={userStatusRef}
                defaultValue={data.userStatus}
              >
                <MenuItem value={"PENDING"}>PENDING</MenuItem>
                <MenuItem value={"APPROVED"}>APPROVED</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
        ) : (
          <FormGroup sx={{ padding: 2 }}>
            <TextField
              sx={{ margin: 1 }}
              inputRef={ticketIdRef}
              variant="outlined"
              label="Ticket Id"
              disabled
              defaultValue={data.id}
            />
            <TextField
              sx={{ margin: 1 }}
              inputRef={ticketTitleRef}
              variant="outlined"
              label="Title"
              defaultValue={data.title}
            />
            <TextField
              sx={{ margin: 1 }}
              inputRef={ticketDiscriptionRef}
              variant="outlined"
              label="Description"
              defaultValue={data.description}
            />
            <TextField
              sx={{ margin: 1 }}
              inputRef={ticketPriorityRef}
              variant="outlined"
              type={"number"}
              label="Ticket Priority"
              defaultValue={data.ticketPriority}
            />
            <FormControl fullWidth sx={{ margin: 1 }}>
              <InputLabel id="demo-simple-select-label">
                Ticket Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Ticket Status"
                inputRef={ticketStatusRef}
                defaultValue={data.status}
              >
                <MenuItem value={"CLOSED"}>CLOSED</MenuItem>
                <MenuItem value={"OPEN"}>OPEN</MenuItem>
                <MenuItem value={"BLOCKED"}>BLOCKED</MenuItem>
                <MenuItem value={"IN_PROGRESS"}>PROGRESS</MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={{ margin: 1 }}
              inputRef={ticketAssigneeRef}
              variant="outlined"
              label="Ticket Assignee"
              defaultValue={data.assignee}
            />
            <TextField
              sx={{ margin: 1 }}
              inputRef={ticketReporterRef}
              variant="outlined"
              label="Ticket Reporter"
              disabled
              defaultValue={data.reporter}
            />
          </FormGroup>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
