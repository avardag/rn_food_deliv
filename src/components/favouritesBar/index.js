import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import CompactRestaurantInfo from "../compactRestaurantInfo";
import { Spacer } from "../spacer";
import StyledText from "../typography";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export default function FavouritesBar({ favourites, onPressNavigate }) {
  if (!favourites.length) {
    return (
      <Spacer position="left" size="large">
        <StyledText variant="caption">
          You currently dont have any favourites
        </StyledText>
      </Spacer>
    );
  }
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <StyledText variant="caption">Favourites</StyledText>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((rest) => (
          <Spacer position="left" size="medium" key={rest.name}>
            <TouchableOpacity
              onPress={() =>
                onPressNavigate("RestaurantDetail", { restaurant: rest })
              }
            >
              <CompactRestaurantInfo restaurant={rest} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
}
