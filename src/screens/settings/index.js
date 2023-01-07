import { View, Text } from "react-native";
import React from "react";
import { SafeAreaContainer } from "../../components/utility/safeAreaContainer";

export default function SettingsScreen() {
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <SafeAreaContainer>
      <Text>Settings</Text>
    </SafeAreaContainer>
  );
}
