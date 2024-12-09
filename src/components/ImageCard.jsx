// I need to be able to specify the size of the card, that of the image, the description, and spaces between them.
// wrap the entire card in a CardActionArea component
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ImageCard({ image, name, price }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={image}
          sx={{ objectFit: "contain", mt: 2 }}
        />
        <CardContent sx={{ textAlign: "left" }} bgcolor="grey">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Stylish cafe chair
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
