import { useState, useEffect } from "react";
import axios from "axios";
// import "./App.css";
import CardList from "./components/CardList";
import { Typography } from "@mui/material";
// import Pagination from "@mui/material/Pagination";
// import Container from "@mui/material/Container";
import PaginationComp from "./components/PaginationComp";
import Footer from "./components/Footer";
import Offers from "./components/Offers";
import HeroImage from "./components/HeroImage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        await axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          )
          .then((response) => {
            setCoinsData(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoins();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="app">
      <ResponsiveAppBar />
      <Typography
        variant="h1"
        sx={{
          fontSize: "70px",
          color: "#ffe400",
          textAlign: "center",
          textDecoration: "underline",
          margin: "1rem 0",
        }}
      >
        Crypto Gallery
      </Typography>
      <HeroImage />
      <CardList coinsData={currentPosts} />
      <PaginationComp
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
