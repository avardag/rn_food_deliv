import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../context/authentication/authContext";
import TabNavigator from "./TabNavigator";
import AccountNavigator from "./AccountNavigator";

export default function Navigation() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
}
