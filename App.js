import React from "react";
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import RestaurantsScreen from "./src/screens/restaurants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <ExpoStatusBar style="auto" />
      <RestaurantsScreen />
    </PaperProvider>
  );
}
