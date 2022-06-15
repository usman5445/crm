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
} from "@mui/material";
import React from "react";

export const TableComponent = ({ cols, rows }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const arr = new Array(10).fill("he");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {cols.map((col) => (
                <TableCell key={col.id} style={{ minWidth: col.minWidth }}>
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
                            <TableCell key={row.id + col.id}>
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
