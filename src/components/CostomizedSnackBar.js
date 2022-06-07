import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function CustomizedSnackbars({ data }) {
  return (
    <Snackbar
      open={data.snackbarState.open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={() => {
        data.setSnackbarState({ open: false, message: "" });
      }}
    >
      <Alert
        onClose={() => {
          data.setSnackbarState({ open: false, message: "" });
        }}
        severity="error"
        sx={{ width: "100%" }}
      >
        {data.snackbarState.message}
      </Alert>
    </Snackbar>
  );
}
