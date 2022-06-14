import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Sidebaar from "./Sidebaar";
import { TicketStatusCard } from "./TicketStatusCard";

export const Admin = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
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
          Take a quick looks at your admin stats below.
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
          <TicketStatusCard cardData={{ variant: "Open", number: "6" }} />
          <TicketStatusCard cardData={{ variant: "Progress", number: "6" }} />
          <TicketStatusCard cardData={{ variant: "Closed", number: "6" }} />
          <TicketStatusCard cardData={{ variant: "Blocked", number: "6" }} />
        </Box>
        <Divider sx={{ width: "100%" }} />
      </Box>
    </Box>
  );
};
