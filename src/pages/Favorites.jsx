import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Favorites.css";
import Footer from "../components/Footer.jsx";
function Favorites() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(
      (game) => game.id !== id
    );

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  return (
    <>
      <Navbar />

      <div className="favorites-page">
        <h1>My Favorites</h1>

        {favorites.length === 0 ? (
          <h2>No Favorite Games Added Yet ❤️</h2>
        ) : (
          <div className="favorite-list">
            {favorites.map((game) => (
              <div
                className="game-card"
                key={game.id}
              >
                <img
                  src={game.image}
                  alt={game.name}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x180?text=Game+Image";
                  }}
                />

                <div className="card-content">
                  <h3>{game.name}</h3>

                  <p>{game.genre}</p>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFavorite(game.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Favorites;