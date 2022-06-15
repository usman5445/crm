import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchTickets } from "../utils/fetchTickets";
import { fetchUsers } from "../utils/fetchUsers";
import Sidebaar from "./Sidebaar";
import TabPanelComponent from "./TabsPanel";
import { TicketStatusCard } from "./TicketStatusCard";

export const Admin = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [usersList, setUsersList] = useState([]);
  const [usersListCols, setUsersListCols] = useState([]);
  const [ticketsList, setTicketsList] = useState([]);
  const [ticketsListCols, setTicketsListCols] = useState([
    { id: "id", lable: "Id" },
    { id: "title", lable: "Title" },
    {
      id: "description",
      lable: "Description",
    },
    { id: "ticketPriority", lable: "Priority" },
    { id: "status", lable: "Status" },
    { id: "assignee", lable: "Assignee" },
    { id: "reporter", lable: "Reporter" },
  ]);
  useEffect(() => {
    (async () => {
      await fetchUsers()
        .then((response) => {
          console.log(response);
          setUsersListCols([
            { id: "name", lable: "Name" },
            { id: "email", lable: "Email" },
            { id: "userId", lable: "UserId" },
            { id: "userStatus", lable: "UserStatus" },
            { id: "userTypes", lable: "UserType" },
          ]);
          setUsersList(response.data);
        })
        .catch((error) => console.log(error));

      await fetchTickets()
        .then((response) => {
          console.log(response);
          setTicketsListCols([
            { id: "id", lable: "Id" },
            { id: "title", lable: "Title" },
            {
              id: "description",
              lable: "Description",
            },
            { id: "ticketPriority", lable: "Priority" },
            { id: "status", lable: "Status" },
            { id: "assignee", lable: "Assignee" },
            { id: "reporter", lable: "Reporter" },
          ]);
          setTicketsList(response.data);
        })
        .catch((error) => console.log(error));
    })();
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
          <TicketStatusCard
            cardData={{
              variant: "Open",
              number: ticketsList.filter((item) => item.status == "OPEN")
                .length,
              total: ticketsList.length,
            }}
          />
          <TicketStatusCard
            cardData={{
              variant: "Progress",
              number: ticketsList.filter((item) => item.status == "IN_PROGRESS")
                .length,
              total: ticketsList.length,
            }}
          />
          <TicketStatusCard
            cardData={{
              variant: "Closed",
              number: ticketsList.filter((item) => item.status == "CLOSED")
                .length,
              total: ticketsList.length,
            }}
          />
          <TicketStatusCard
            cardData={{
              variant: "Blocked",
              number: ticketsList.filter((item) => item.status == "BLOCKED")
                .length,
              total: ticketsList.length,
            }}
          />
        </Box>
        <Divider sx={{ width: "100%" }} />
        <TabPanelComponent
          ticketList={{ cols: ticketsListCols, rows: ticketsList }}
          userList={{ cols: usersListCols, rows: usersList }}
        />
      </Box>
    </Box>
  );
};
