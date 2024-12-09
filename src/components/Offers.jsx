import { Box, Container, Typography } from "@mui/material";
import EmojiEventsOutlined from "@mui/icons-material/EmojiEventsOutlined";
import {
  LocalShippingOutlined,
  SupportAgentOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
export default function Offers() {
  return (
    <Box
      sx={{
        height: "270px",
        width: "100%",
        bgcolor: "#FAF3EA",
        my: 6,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <EmojiEventsOutlined sx={{ fontSize: "70px", color: "black" }} />
        <Box>
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ fontSize: "25px" }}
          >
            High Quality
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontSize: "20px" }}
          >
            Crafted from top materials
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <VerifiedOutlined sx={{ fontSize: "70px", color: "black" }} />
        <Box>
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ fontSize: "25px" }}
          >
            Warranty Protection
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontSize: "20px" }}
          >
            Over 2 years
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <LocalShippingOutlined sx={{ fontSize: "70px", color: "black" }} />
        <Box>
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ fontSize: "25px" }}
          >
            Free Shipping
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontSize: "20px" }}
          >
            Order over 150$
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <SupportAgentOutlined sx={{ fontSize: "70px", color: "black" }} />
        <Box>
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ fontSize: "25px" }}
          >
            24 / 7 Support
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontSize: "20px" }}
          >
            Dedicated Support
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
