import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import RestaurantsNavigator from "./RestaurantsNavigator";
import SettingsNavigator from "./SettinsNavigator";
import MapScreen from "../screens/map";
import { FavouritesContextProvider } from "../context/favourites/favouritesContext";
import { LocationContextProvider } from "../context/location/locationContext";
import { RestaurantContextProvider } from "../context/restaurants/RestaurantsContext";
const Tab = createBottomTabNavigator();

//{route.name: ionicons}
const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const renderTabIcon =
  (route) =>
  ({ color, size }) => {
    // You can return any component that you like here!
    return <Ionicons name={TAB_ICON[route.name]} size={size} color={color} />;
  };

export default function TabNavigator() {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: renderTabIcon(route),
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
}
