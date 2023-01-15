import React, { useState, useEffect } from "react";
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/theme";

import { RestaurantContextProvider } from "./src/context/restaurants/RestaurantsContext";
import { LocationContextProvider } from "./src/context/location/locationContext";
import Navigation from "./src/navigation";
import { FavouritesContextProvider } from "./src/context/favourites/favouritesContext";
import { AuthenticationContextProvider } from "./src/context/authentication/authContext";

// import { auth } from "./src/firebase/config";
// import { signInWithEmailAndPassword } from "firebase/auth";

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   signInWithEmailAndPassword(auth, "Alex@gmail.com", "qwerty123")
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(user, "aa");
  //       setIsAuthenticated(true);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       console.log("🚀 ~ file: App.js:49 ~ useEffect ~ errorCode", errorCode);
  //       const errorMessage = error.message;
  //       console.log(
  //         "🚀 ~ file: App.js:51 ~ useEffect ~ errorMessage",
  //         errorMessage
  //       );
  //     });
  // }, []);

  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <ExpoStatusBar style="auto" />
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </PaperProvider>
    </ThemeProvider>
  );
}
