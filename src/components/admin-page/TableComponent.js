import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import FormDialog from "./Dialog";

export const TableComponent = ({ cols, rows }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dailog, setDailog] = useState(false);
  const [dailogData, setDailogData] = useState([]);
  const arr = new Array(10).fill("he");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowClick = (e) => {
    let dataArr = e.target.parentElement.childNodes;
    dataArr = Object.keys(dataArr).map((el) => dataArr[el].innerText);
    console.log(dataArr);
    setDailogData(dataArr);
    setDailog(true);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: "100%" }}>
      <FormDialog open={dailog} setOpen={setDailog} data={dailogData} />

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {cols.map((col) => (
                <TableCell
                  key={col.id}
                  style={{
                    minWidth: col.minWidth,
                  }}
                >
                  {col.lable}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length == 0
              ? arr.map((row, index) => {
                  return (
                    <TableRow
                      key={row.id + index.toString()}
                      hover
                      role="checkbox"
                      tabIndex="-1"
                      selected
                    >
                      {cols.map((col) => {
                        return (
                          <TableCell key={col.id + col.lable}>
                            <Skeleton
                              variant="text"
                              animation="wave"
                              width={col.width}
                            />
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
              : rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        key={row.id + index.toString()}
                        hover
                        role="checkbox"
                        tabIndex="-1"
                      >
                        {cols.map((col) => {
                          return (
                            <TableCell
                              key={row.id + col.id}
                              onClick={(e) => handleRowClick(e)}
                            >
                              {row[col.id]}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="subtitle2">
        Select Any Row To Update The Item
      </Typography>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
