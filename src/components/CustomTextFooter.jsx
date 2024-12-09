import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTextFooter() {
  return (
    <Box
      sx={{
        width: "535px",
        height: "45px",
        display: "flex",
        alignItems: "center", // Vertically center the text
        justifyContent: "center", // Horizontally center the text
        padding: "0 10px", // Optional padding inside the box
      }}
    >
      <Typography
        variant="h6"
        noWrap // Prevents wrapping of text
        sx={{
          fontSize: "2.2rem", // Adjust the font size as needed
          lineHeight: "45px", // Match the height for proper alignment
          textAlign: "left",
          width: "100%", // Ensure the text spans the full width of the container
        }}
      >
        ELOHIM HOMES & DESIGNS
      </Typography>
    </Box>
  );
}

export default CustomTextFooter;
