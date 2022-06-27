import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import FormDialog from "./DailogCust";

export const TicketDetailsCardCust = ({ dataObj }) => {
  const [open, setOpen] = useState(false);
  const [dailogData, setDailogData] = useState({});

  const dispatch = useDispatch();
  function handleUpdate(data) {
    console.log(data);
    setDailogData(data);
    setOpen(true);
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
          Assigned To:~ {dataObj?.assignee}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={() => handleUpdate(dataObj)}>
          Update
        </Button>
      </CardActions>
      <FormDialog open={open} setOpen={setOpen} data={dailogData} />
    </Card>
  );
};
