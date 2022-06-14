import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { Svg404 } from "../assets/svg404";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Svg404 size={60} />
      <Typography variant="h4">
        mmm...! Looks like you should not be here!
      </Typography>
      <Button onClick={() => navigate(-1)} variant="outlined">
        Go Back
      </Button>
    </Box>
  );
};

export default Unauthorized;
