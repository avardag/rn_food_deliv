import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authContext";

export const FavouritesContext = createContext();

export function FavouritesContextProvider({ children }) {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing favourites", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log("error loading favorites", e);
    }
  };

  useEffect(() => {
    if (user) {
      loadFavourites(user.uid).then((data) => setFavourites(data));
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

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
