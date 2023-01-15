import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/account";
import LoginScreen from "../screens/account/LoginScreen";
import RegisterScreen from "../screens/account/RegisterScreen";

const AccountStack = createNativeStackNavigator();

export default function AccountNavigator() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      <AccountStack.Screen name="Account" component={AccountScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
}
