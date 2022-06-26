import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DataTableComponent from "./DataTableComponent";
import { TicketDetailsCard } from "./TicketDetailsCard";
import { useSelector } from "react-redux";
import { CircularProgress, Typography } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, keyName, ...other } = props;

  return (
    <div
      key={keyName}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          key={keyName}
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabPanelEngComponent() {
  const [value, setValue] = React.useState(0);
  const ticketData = useSelector((state) => state.ticketsData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="OPEN" {...a11yProps(0)} />
          <Tab label="PROGRESS" {...a11yProps(1)} />
          <Tab label="CLOSED" {...a11yProps(2)} />
          <Tab label="BLOCKED" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel keyName={"OPEN"} value={value} index={0}>
        {ticketData.loading ? (
          <CircularProgress />
        ) : ticketData.data.filter((t) => t.status === "OPEN").length ? (
          ticketData.data
            .filter((t) => t.status === "OPEN")
            .map((t) => <TicketDetailsCard dataObj={t} />)
        ) : (
          <Typography>Mmm...Look's like nothing here!</Typography>
        )}
      </TabPanel>
      <TabPanel keyName={"IN_PROGRESS"} value={value} index={1}>
        {ticketData.loading ? (
          <CircularProgress />
        ) : ticketData.data.filter((t) => t.status === "IN_PROGRESS").length ? (
          ticketData.data
            .filter((t) => t.status === "IN_PROGRESS")
            .map((t) => <TicketDetailsCard dataObj={t} />)
        ) : (
          <Typography>Mmm...Look's like nothing here!</Typography>
        )}
      </TabPanel>
      <TabPanel keyName={"CLOSED"} value={value} index={2}>
        {ticketData.loading ? (
          <CircularProgress />
        ) : ticketData.data.filter((t) => t.status === "CLOSED").length ? (
          ticketData.data
            .filter((t) => t.status === "CLOSED")
            .map((t) => <TicketDetailsCard dataObj={t} />)
        ) : (
          <Typography>Mmm...Look's like nothing here!</Typography>
        )}
      </TabPanel>
      <TabPanel keyName={"BLOCKED"} value={value} index={3}>
        {ticketData.loading ? (
          <CircularProgress />
        ) : ticketData.data.filter((t) => t.status === "BLOCKED").length ? (
          ticketData.data
            .filter((t) => t.status === "BLOCKED")
            .map((t) => <TicketDetailsCard dataObj={t} />)
        ) : (
          <Typography>Mmm...Look's like nothing here!</Typography>
        )}
      </TabPanel>
    </Box>
  );
}
