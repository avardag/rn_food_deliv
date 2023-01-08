import React, { useEffect, useState, createContext, useContext } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "../../services/restaurants/restaurantServices";
import { LocationContext } from "../location/locationContext";

export const RestaurantContext = createContext();

export function RestaurantContextProvider({ children }) {
  const { location } = useContext(LocationContext);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchRestaurants(loc) {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((data) => {
          setIsLoading(false);
          setRestaurants(data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1500);
  }

  useEffect(() => {
    if (location) {
      fetchRestaurants(`${location.lat},${location.lng}`);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}
