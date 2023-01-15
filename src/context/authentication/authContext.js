import React, { useState, createContext } from "react";
import { loginRequest } from "../../services/authentication/authenticationService";

export const AuthenticationContext = createContext({});

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userCredential) => {
        // Signed in
        const firebaseUser = userCredential.user;
        setUser(firebaseUser);
        setIsLoading(false);
      })
      .catch((err) => {
        // const errorCode = err.code;
        // const errorMessage = err.message;
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, setUser, isLoading, error, onLogin }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
