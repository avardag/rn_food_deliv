import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export function FavouritesContextProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("error storing favourites", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favourites");
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log("error loading favorites", e);
    }
  };

  useEffect(() => {
    loadFavourites().then((data) => setFavourites(data));
  }, []);
  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

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
