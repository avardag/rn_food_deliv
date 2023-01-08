import React, { useState, createContext, useEffect } from "react";
import {
  locationRequest,
  locationTransform,
} from "../../services/location/locationServices";

export const LocationContext = createContext();

export function LocationContextProvider({ children }) {
  const [searchKeyword, setSearchKeyword] = useState("Antwerp");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchLocation(keyword) {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((data) => {
        setIsLoading(false);
        setLocation(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }

  useEffect(() => {
    fetchLocation(searchKeyword);
  }, [searchKeyword]);

  function onSearch(keyword) {
    setIsLoading(true);
    setSearchKeyword(keyword);
  }
  return (
    <LocationContext.Provider
      value={{
        location,
        search: onSearch,
        searchKeyword,
        isLoading,
        error,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
