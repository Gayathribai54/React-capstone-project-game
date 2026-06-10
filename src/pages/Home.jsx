import { useState } from "react";
import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import games from "../data/games";
import "../styles/Home.css";
import Footer from "../components/Footer.jsx";
function Home() {
  const [search, setSearch] = useState("");

  const filteredGames = games.filter((game) =>
    game.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="home-container">
        <input
          className="search-box"
          type="text"
          placeholder="Search Games..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <div className="games-grid">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
            />
          ))}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Home;