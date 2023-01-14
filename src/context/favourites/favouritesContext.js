import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export function FavouritesContextProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addToFav = (restaurant) => setFavourites([...favourites, restaurant]);
  const removeFromFav = (restaurant) => {
    const newFavs = favourites.filter(
      (rest) => rest.placeId !== restaurant.placeId
    );
    setFavourites(newFavs);
  };
  return (
    <FavouritesContext.Provider value={{ favourites, addToFav, removeFromFav }}>
      {children}
    </FavouritesContext.Provider>
  );
}
