import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
const RestaurantCardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ui.primary};
`;
const RestaurantAddress = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;
const InfoWrapper = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Napoli",
    icon = "silverware-fork-knife",
    photos = ["https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"],
    address = "1426 Lenina str",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <View>
      <RestaurantCard mode="elevated" elevation={5}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <InfoWrapper>
          <RestaurantCardTitle>{name}</RestaurantCardTitle>
          <RestaurantAddress>{address}</RestaurantAddress>
        </InfoWrapper>
      </RestaurantCard>
      {/* <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="black" /> */}
    </View>
  );
}
