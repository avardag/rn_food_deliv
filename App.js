import React from "react";
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

export default function App() {
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
