import { useState, useEffect } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");

    return storedFavorites
      ? JSON.parse(storedFavorites)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const addFavorite = (game) => {
    const exists = favorites.some(
      (item) => item.id === game.id
    );

    if (!exists) {
      setFavorites([...favorites, game]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(
      favorites.filter(
        (game) => game.id !== id
      )
    );
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
}

export default useFavorites;