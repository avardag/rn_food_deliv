import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/settings";
import FavouritesScreen from "../screens/favourites";

const SettingsStack = createNativeStackNavigator();

export default function SettingsNavigator() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: true,
        animation: "slide_from_right",
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
}
