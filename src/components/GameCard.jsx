import { Link } from "react-router-dom";
import "../styles/GameCard.css";

function GameCard({ game }) {
    const addToFavorites = () => {
        const favorites =
            JSON.parse(
                localStorage.getItem("favorites")
            ) || [];

        const exists = favorites.some(
            (item) => item.id === game.id
        );

        if (!exists) {
            localStorage.setItem(
                "favorites",
                JSON.stringify([
                    ...favorites,
                    game
                ])
            );

            alert("Added To Favorites");
        }
    };

    return (
        <div className="game-card">
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
                    className="fav-btn"
                    onClick={addToFavorites}
                >
                    ❤️ Favorite
                </button>

                <Link
                    className="details-btn"
                    to={`/game/${game.id}`}
                    state={{ game }}
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default GameCard;