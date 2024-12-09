import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import CustomTextFooter from "./CustomTextFooter";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#DEB37C", color: "white", py: 4, mb: 0 }}>
      {/* Full-width with padding */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr" },
          gap: 4,
          px: 4, // Adds padding on the left and right
        }}
      >
        {/* Section 1: About */}
        <Box>
          <CustomTextFooter />
        </Box>

        {/* Section 2: Links */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Links
          </Typography>
          <Box color={"black"}>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Home
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Products
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              About
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block" }}
            >
              Contact
            </Link>
          </Box>
        </Box>

        {/* Section 3: Contact */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Help
          </Typography>
          <Box color={"black"}>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Payment Methods
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Returns
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Privacy Policies
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom */}
    </Box>
  );
}
