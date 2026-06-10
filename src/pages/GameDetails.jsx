import { useLocation } from "react-router-dom";
import "../styles/GameDetails.css";
import Footer from "../components/Footer.jsx";
function GameDetails() {
  const location = useLocation();
  const game = location.state?.game;

  if (!game) {
    return (
      <div className="details-page">
        <h2>Game Not Found</h2>
      </div>
    );
  }

  return (
    <div className="details-page">
      <img
        src={game.image}
        alt={game.name}
      />

      <div className="details-content">
        <h1>{game.name}</h1>

        <p>
          <strong>Genre:</strong> {game.genre}
        </p>

        <p>
          <strong>Description:</strong>
          {" "}
          {game.description}
        </p>

        <a
          href={game.website}
          target="_blank"
          rel="noreferrer"
          className="play-btn"
        >
          Official Website
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default GameDetails;