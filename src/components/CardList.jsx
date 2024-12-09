import { Container } from "@mui/material";
//import ImageCard from "./ImageCard";
import CardWithLabel from "./CardWithLabel";

export default function CardList({ coinsData }) {
  return (
    <Container
      sx={{
        mb: 8,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Auto-fit avoids extra gaps
        gridAutoColumns: "250px", // Fix base column size
        justifyContent: "center",
        gap: "20px", // Uniform gap
        width: "auto",
        minWidth: "80vw",
        maxWidth: "1080px", // Limits overall container width
        // "@media (min-width: 1000px)": {
        //   gridTemplateColumns: "repeat(4, 1fr)", // Lock to 4 columns on large screens
        // },
      }}
    >
      {coinsData.map((coin, index) => {
        return (
          <CardWithLabel
            key={index}
            label={coin.market_cap_rank}
            image={coin.image}
            name={coin.name}
            price={coin.current_price}
          />
        );
      })}
    </Container>
  );
}
