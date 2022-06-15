import {
  BlockRounded,
  BoltRounded,
  CheckCircleRounded,
  CreateRounded,
} from "@mui/icons-material";
import {
  alpha,
  Box,
  Card,
  CircularProgress,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

export const TicketStatusCard = ({ cardData }) => {
  const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
    circle: {
      backgroundColor: "#fff",
    },
  }));
  switch (cardData.variant) {
    case "Open":
      return (
        <Card
          sx={{
            borderBottom: "3px solid ",
            borderBottomColor: "primary.main",
            color: "primary.main",
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            minWidth: "fit-content",
            width: "15em",
            height: "10em",
            position: "relative",
            margin: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "30%",
            }}
          >
            <CreateRounded />
            <Typography color="text.primary" variant="body1">
              Open
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "70%",
            }}
          >
            <Typography variant="h2" color="text.secondary">
              {cardData.number}
            </Typography>
            <CircularProgress
              color="primary"
              variant="determinate"
              value={(cardData.number / cardData.total) * 100}
            />
          </Box>
        </Card>
      );
    case "Closed":
      return (
        <Card
          sx={{
            borderBottom: "3px solid ",
            borderBottomColor: "success.main",
            color: "success.main",
            backgroundColor: (theme) => alpha(theme.palette.success.main, 0.1),
            minWidth: "fit-content",
            width: "15em",
            height: "10em",
            position: "relative",
            margin: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "30%",
            }}
          >
            <CheckCircleRounded />
            <Typography color="text.primary" variant="body1">
              Closed
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "70%",
            }}
          >
            <Typography variant="h2" color="text.secondary">
              {cardData.number}
            </Typography>
            <StyledCircularProgress
              color="success"
              variant="determinate"
              value={(cardData.number / cardData.total) * 100}
            />
          </Box>
        </Card>
      );
    case "Progress":
      return (
        <Card
          sx={{
            borderBottom: "3px solid ",
            borderBottomColor: "warning.main",
            color: "warning.main",
            backgroundColor: (theme) => alpha(theme.palette.warning.main, 0.1),
            minWidth: "fit-content",
            width: "15em",
            height: "10em",
            position: "relative",
            margin: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "30%",
            }}
          >
            <BoltRounded />
            <Typography color="text.primary" variant="body1">
              Progress
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "70%",
            }}
          >
            <Typography variant="h2" color="text.secondary">
              {cardData.number}
            </Typography>
            <CircularProgress
              color="warning"
              variant="determinate"
              value={(cardData.number / cardData.total) * 100}
            />
          </Box>
        </Card>
      );
    case "Blocked":
      return (
        <Card
          sx={{
            borderBottom: "3px solid ",
            borderBottomColor: "error.main",
            color: "error.main",
            backgroundColor: (theme) => alpha(theme.palette.error.main, 0.1),
            minWidth: "fit-content",
            width: "15em",
            height: "10em",
            position: "relative",
            margin: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "30%",
            }}
          >
            <BlockRounded />
            <Typography color="text.primary" variant="body1">
              Blocked
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "70%",
            }}
          >
            <Typography variant="h2" color="text.secondary">
              {cardData.number}
            </Typography>
            <CircularProgress
              color="error"
              variant="determinate"
              value={(cardData.number / cardData.total) * 100}
            />
          </Box>
        </Card>
      );

    default:
      break;
  }
};
