import React from "react";
import { Box, Typography } from "@mui/material";

export default function ProductTag() {
  return (
    <Box
      sx={{
        width: 80, // Diameter of the circle
        height: 80,
        bgcolor: "secondary.main", // Background color
        color: "white", // Text color
        borderRadius: "50%", // Makes it a perfect circle
        display: "flex", // Flexbox for centering content
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 3, // Adds subtle shadow
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        -30%
      </Typography>
    </Box>
  );
}
