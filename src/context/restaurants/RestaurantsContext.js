import React, { useEffect, useState, createContext } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "../../services/restaurants/restaurantServices";

export const RestaurantContext = createContext();

export function RestaurantContextProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchRestaurants() {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
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
    fetchRestaurants();
  }, []);

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
