import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTicketThunk } from "../../reduxSetup/ticketDataSlice";

export const TicketDetailsCard = ({ dataObj }) => {
  const [ticketStatusRef, ticketPriorityRef] = [useRef(), useRef()];
  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch();
  function handleUpdate(id) {
    // console.log(id);
    dispatch(
      updateTicketThunk({
        ...dataObj,
        status: ticketStatusRef.current.value,
        ticketPriority: ticketPriorityRef.current.value,
        ticketId: id,
      })
    );
    setIsChanged(false);
  }
  return (
    <Card
      key={dataObj?.id}
      sx={{
        width: "60%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        margin: 1,
        paddingX: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h4">{dataObj?.title}</Typography>
        <Typography variant="body1">{dataObj?.description}</Typography>
        <Typography variant="body2" color="text.secondary">
          Reported By:~ {dataObj?.reporter}
        </Typography>
      </CardContent>
      <CardActions>
        <FormGroup>
          <FormControl fullWidth sx={{ margin: 1 }}>
            <InputLabel id="demo-simple-select-label">Ticket Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Ticket Status"
              inputRef={ticketStatusRef}
              defaultValue={dataObj?.status}
              onChange={() => setIsChanged(true)}
            >
              <MenuItem value={"CLOSED"}>CLOSED</MenuItem>
              <MenuItem value={"OPEN"}>OPEN</MenuItem>
              <MenuItem value={"BLOCKED"}>BLOCKED</MenuItem>
              <MenuItem value={"IN_PROGRESS"}>PROGRESS</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ margin: 1 }}
            inputRef={ticketPriorityRef}
            variant="outlined"
            type={"number"}
            label="Ticket Priority"
            defaultValue={dataObj?.ticketPriority}
            onChange={() => setIsChanged(true)}
          />
          {isChanged && (
            <Button
              variant="contained"
              onClick={() => handleUpdate(dataObj.id)}
            >
              Update
            </Button>
          )}
        </FormGroup>
      </CardActions>
    </Card>
  );
};
