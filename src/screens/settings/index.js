import { Text } from "react-native";
import React, { useContext } from "react";
import { SafeAreaContainer } from "../../components/utility/safeAreaContainer";
import { AuthenticationContext } from "../../context/authentication/authContext";
import { SettingsContainer, Btn } from "./SettingStyles";
import { Spacer } from "../../components/spacer";

export default function SettingsScreen() {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <SafeAreaContainer>
      <SettingsContainer>
        <Text>Settings</Text>
        <Spacer size="large">
          <Btn onPress={() => onLogout()} mode="contained">
            Logout
          </Btn>
        </Spacer>
      </SettingsContainer>
    </SafeAreaContainer>
  );
}
