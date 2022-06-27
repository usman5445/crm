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
import { useDispatch, useSelector } from "react-redux";
import {
  newTicketThunk,
  updateTicketThunk,
} from "../../reduxSetup/ticketDataSlice";

export default function FormDialog({ open, setOpen, data }) {
  //   const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.usersData);
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
    if (Object.keys(data).length > 0) {
      const updatedDataObj = {
        title: ticketTitleRef.current.value,
        description: ticketDiscriptionRef.current.value,
        ticketPriority: ticketPriorityRef.current.value,
        status: ticketStatusRef.current.value,
        assignee: ticketAssigneeRef.current.value,
        ticketId: ticketIdRef.current.value,
      };
      dispatch(updateTicketThunk(updatedDataObj));
    } else {
      const updatedDataObj = {
        title: ticketTitleRef.current.value,
        description: ticketDiscriptionRef.current.value,
        status: ticketStatusRef.current.value,
        ticketPriority: ticketPriorityRef.current.value,
      };
      dispatch(newTicketThunk(updatedDataObj));
    }
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {Object.keys(data) != 0 ? "Edit Ticket Data" : "Raise New Ticket"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {Object.keys(data) != 0 ? "Change" : "Add"} the values below and click
          on Submit button.
        </DialogContentText>

        <FormGroup sx={{ padding: 2 }}>
          {Object.keys(data) != 0 && (
            <TextField
              sx={{ margin: 1 }}
              inputRef={ticketIdRef}
              variant="outlined"
              label="Ticket Id"
              disabled
              defaultValue={data?.id}
            />
          )}
          <TextField
            sx={{ margin: 1 }}
            inputRef={ticketTitleRef}
            variant="outlined"
            label="Title"
            defaultValue={data?.title}
          />
          <TextField
            sx={{ margin: 1 }}
            inputRef={ticketDiscriptionRef}
            variant="outlined"
            label="Description"
            defaultValue={data?.description}
          />
          <TextField
            sx={{ margin: 1 }}
            inputRef={ticketPriorityRef}
            variant="outlined"
            type={"number"}
            label="Ticket Priority"
            defaultValue={data?.ticketPriority}
          />

          <FormControl fullWidth sx={{ margin: 1 }}>
            <InputLabel id="demo-simple-select-label">Ticket Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Ticket Status"
              inputRef={ticketStatusRef}
              defaultValue={data?.status || "OPEN"}
            >
              <MenuItem value={"CLOSED"}>CLOSED</MenuItem>
              <MenuItem value={"OPEN"}>OPEN</MenuItem>
              <MenuItem value={"BLOCKED"}>BLOCKED</MenuItem>
              <MenuItem value={"IN_PROGRESS"}>PROGRESS</MenuItem>
            </Select>
          </FormControl>
          {Object.keys(data) != 0 && (
            <TextField
              sx={{ margin: 1 }}
              inputRef={ticketAssigneeRef}
              variant="outlined"
              label="Ticket Assignee"
              disabled
              defaultValue={data?.assignee}
            />
          )}
          {Object.keys(data) != 0 && (
            <TextField
              sx={{ margin: 1 }}
              inputRef={ticketReporterRef}
              variant="outlined"
              label="Ticket Reporter"
              disabled
              defaultValue={data?.reporter}
            />
          )}
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
