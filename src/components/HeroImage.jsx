import Box from "@mui/material/Box";
import bgImage from "../assets/images/hero.jpg";
import BreadCrumbs from "./BreadCrumbs";

export default function HeroImage() {
  return (
    <Box
      sx={{
        width: "100vw", // Full viewport width
        height: "400px", // fixed height
        overflow: "hidden", // Ensures only a slice of the image is visible
        position: "relative",
        mb: 5,
      }}
    >
      <Box
        component="img"
        src={bgImage}
        alt="Background"
        sx={{
          opacity: 0.8,
          filter: "blur(5px)", // Adjust the value to control the blur effect
          position: "absolute",
          top: "-1230px", // lock the vertical slice
          left: "0",
          width: "auto", // ensure the image doesn't stretch horizontally
          height: "auto", // Maintain aspect ratio
          minHeight: "100vw", // Ensures enough height to fill the box
        }}
      />
      <BreadCrumbs />
    </Box>
  );
}
