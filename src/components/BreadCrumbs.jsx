import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

export default function BreadCrumbs() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      {/* we can get this typography from useParams later. */}
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Shoes
      </Typography>
      <Box sx={{ display: "flex", m: 2 }}>
        <Breadcrumbs aria-label="breadcrumb" separator=">" fontSize="20px">
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Typography color="text.primary">Shop</Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
}
