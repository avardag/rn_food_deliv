import React, { useState, createContext } from "react";
import { getMessageFromErrorCode } from "../../components/utility/firebaseErrorToString";
import {
  loginRequest,
  registerRequest,
} from "../../services/authentication/authenticationService";

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
        setError({
          code: err.code,
          errorMessage: err.message,
          message: getMessageFromErrorCode(err.code),
        });
        setIsLoading(false);
      });
  };
  const onRegister = (email, password, passwordConfirm) => {
    if (password !== passwordConfirm) {
      setError({ message: "Passwords do n0t match" });
      return;
    }
    setIsLoading(true);
    registerRequest(email, password)
      .then((userCredential) => {
        // Signed in
        const firebaseUser = userCredential.user;
        setUser(firebaseUser);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({
          code: err.code,
          errorMessage: err.message,
          message: getMessageFromErrorCode(err.code),
        });
        setIsLoading(false);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        setUser,
        isLoading,
        error,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
