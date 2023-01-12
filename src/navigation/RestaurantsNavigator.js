import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantsScreen from "../screens/restaurants";
import { Text } from "react-native";
import RestaurantDetail from "../screens/restaurants/screens/restaurantDetail";

const RestaurantsStack = createNativeStackNavigator();

export default function RestaurantsNavigator() {
  return (
    //<NavigationContainer> // No need for this. TabNavigator is our main NavContainer
    <RestaurantsStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      <RestaurantsStack.Screen
        name="RestaurantsHome"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantsStack.Navigator>
  );
}
