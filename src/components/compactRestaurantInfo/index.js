import React from "react";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";
import styled from "styled-components";
import StyledText from "../typography";

const CompactImage = styled.Image`
  border-radius: 5px;
  width: 120px;
  height: 100px;
`;
const CompactWebView = styled(WebView)`
  border-radius: 5px;
  width: 120px;
  height: 100px;
`;
const Item = styled.View`
  padding: 5px;
  max-width: 120px;
  align-items: center;
`;

export default function CompactRestaurantInfo({ restaurant }) {
  return (
    <Item>
      {Platform.OS === "android" ? (
        <CompactWebView source={{ uri: restaurant.photos[0] }} />
      ) : (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}
      <StyledText variant="caption">{restaurant.name}</StyledText>
    </Item>
  );
}
