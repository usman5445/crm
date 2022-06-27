import { AddCircle } from "@mui/icons-material";
import { Box, Divider, Fab, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTicketsThunk } from "../../reduxSetup/ticketDataSlice";
import { fetchUsersThunk } from "../../reduxSetup/userDataSlice";
import Sidebaar from "../common-components/Sidebaar";
import { TicketStatusCard } from "../common-components/TicketStatusCard";
import FormDialog from "./DailogCust";
import TabPanelCustComponent from "./TabsPanelCust";
export const Customer = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const ticketData = useSelector((state) => state.ticketsData);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  function handleNewTicket() {
    setOpen(true);
  }
  useEffect(() => {
    dispatch(fetchTicketsThunk());
  }, []);
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "reletive",
        display: "flex",
      }}
    >
      <Sidebaar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" color="primary">
          Welcome, {user.name}
        </Typography>
        <Typography variant="subtitle1">
          Take a quick looks at your ticket stats below.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "fit-content",
            alignItems: "space-between",
            justifyContent: "center",
            boxSizing: "border-box",
            marginTop: 3,
            marginBottom: 3,
          }}
        >
          <TicketStatusCard
            cardData={{
              variant: "Open",
              number: ticketData.data.filter((item) => item.status == "OPEN")
                .length,
              total: ticketData.data.length,
            }}
          />
          <TicketStatusCard
            cardData={{
              variant: "Progress",
              number: ticketData.data.filter(
                (item) => item.status == "IN_PROGRESS"
              ).length,
              total: ticketData.data.length,
            }}
          />
          <TicketStatusCard
            cardData={{
              variant: "Closed",
              number: ticketData.data.filter((item) => item.status == "CLOSED")
                .length,
              total: ticketData.data.length,
            }}
          />
          <TicketStatusCard
            cardData={{
              variant: "Blocked",
              number: ticketData.data.filter((item) => item.status == "BLOCKED")
                .length,
              total: ticketData.data.length,
            }}
          />
        </Box>
        <Divider sx={{ width: "100%" }} />
        <TabPanelCustComponent />
      </Box>
      <Fab
        onClick={handleNewTicket}
        variant="extended"
        sx={{ position: "absolute", bottom: 30, right: 20 }}
        color="primary"
      >
        <AddCircle sx={{ mr: 1 }} />
        New Ticket
      </Fab>
      <FormDialog open={open} setOpen={setOpen} data={{}} />
    </Box>
  );
};
