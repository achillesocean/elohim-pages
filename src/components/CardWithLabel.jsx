import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Box,
} from "@mui/material";

function CardWithLabel({
  image,
  name,
  price,
  label,
  cardWidth = 285,
  cardHeight = 446,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: cardWidth,
        height: "auto",
      }}
    >
      {/* Circular Label */}
      {label && (
        <Box
          sx={{
            zIndex: 1,
            position: "absolute",
            top: 8,
            right: 8,
            width: 50,
            height: 50,
            bgcolor: "secondary.main",
            color: "white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 3,
          }}
        >
          <Typography variant="body2" fontWeight="bold">
            {label}
          </Typography>
        </Box>
      )}

      {/* Card Content */}
      <Card
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Image */}
          <CardMedia
            component="img"
            alt={name}
            image={image}
            sx={{
              height: "60%",
              objectFit: "contain",
              mt: 2,
            }}
          />
          {/* Text Content */}
          <CardContent
            sx={{
              textAlign: "left",
              px: 2,
              py: 1,
              bgcolor: "#F4F5F7",
              width: "100%",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight="bold"
            >
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stylish cafe chair
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default CardWithLabel;
