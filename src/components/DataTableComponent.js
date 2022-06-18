import { Box } from "@mui/material";
import { DataGrid, GridToolbarExport } from "@mui/x-data-grid";
import { useState } from "react";
import FormDialog from "./Dialog";

export default function DataTableComponent(props) {
  const [pageSize, setPageSize] = useState(10);
  let cols = [];

  const [dailog, setDailog] = useState(false);
  const [dailogData, setDailogData] = useState({});
  //   Changing colums depending on whether its user table or ticket table.
  switch (props.tableCase) {
    case "UserTable":
      cols = [
        { field: "name", headerName: "Name", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "userId", headerName: "User Id", flex: 1 },
        { field: "userStatus", headerName: "User Status", flex: 1 },
        { field: "userTypes", headerName: "User Type", flex: 1 },
      ];

      break;
    case "TicketTable":
      cols = [
        { field: "id", headerName: "ID", flex: 1 },
        { field: "title", headerName: "Ticket Title", flex: 1 },
        { field: "description", headerName: "Ticket Description", flex: 1 },
        { field: "ticketPriority", headerName: "Ticket Priority", flex: 1 },
        { field: "status", headerName: "Ticket Status", flex: 1 },
        { field: "assignee", headerName: "Ticket Assignee", flex: 1 },
        { field: "reporter", headerName: "Ticket Reporter", flex: 1 },
      ];

      break;
    default:
      break;
  }
  function handleRowClick(data) {
    setDailogData(data);
    setDailog(true);
  }
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <FormDialog open={dailog} setOpen={setDailog} data={dailogData} />

      <DataGrid
        rows={props.rows}
        getRowId={(row) =>
          props.tableCase == "UserTable" ? row.userId : row.id
        }
        columns={cols}
        pageSize={pageSize}
        loading={props.rows.length == 0 && true}
        onPageSizeChange={(pageSize) => setPageSize(pageSize)}
        rowsPerPageOptions={[10, 25, 50]}
        onRowClick={(params) => handleRowClick(params.row)}
        components={{ Toolbar: GridToolbarExport }}
        componentsProps={{
          toolbar: { printOptions: { disableToolbarButton: true } },
        }}
      />
    </Box>
  );
}
