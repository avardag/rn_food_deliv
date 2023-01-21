import React, { useContext } from "react";
import { List } from "react-native-paper";
import { SafeAreaContainer } from "../../components/utility/safeAreaContainer";
import { AuthenticationContext } from "../../context/authentication/authContext";
import {
  SettingsContainer,
  SettingsListItem,
  AvatarWrapper,
  AvatarIcon,
} from "./SettingStyles";
import { Spacer } from "../../components/spacer";
import StyledText from "../../components/typography";

export default function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <SafeAreaContainer>
      <SettingsContainer>
        <AvatarWrapper>
          <AvatarIcon size={150} icon="human" />
          <Spacer position="top">
            <StyledText variant="label">{user.email}</StyledText>
          </Spacer>
        </AvatarWrapper>

        <List.Section>
          <SettingsListItem
            title="Favourites"
            description="You favourites list"
            onPress={() => navigation.navigate("Favourites")}
            left={() => <List.Icon icon="folder-star" />}
          />
          <SettingsListItem
            title="Logout"
            onPress={() => onLogout()}
            left={() => <List.Icon icon="logout" />}
          />
        </List.Section>
      </SettingsContainer>
    </SafeAreaContainer>
  );
}
