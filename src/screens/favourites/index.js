import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../context/favourites/favouritesContext";
import RestaurantInfoCard from "../restaurants/RestaurantInfoCard";
import { Spacer } from "../../components/spacer";
import { SafeAreaContainer } from "../../components/utility/safeAreaContainer";
import StyledText from "../../components/typography";
import { RestaurantFlatList } from "../restaurants/RestaurantsStyles";
import { NoFavWrapper } from "./FavouritesStyles";

export default function FavouritesScreen({ navigation }) {
  const { favourites } = useContext(FavouritesContext);

  const renderRestItem = ({ item }) => (
    <Spacer position="bottom" size="large">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantDetail", { restaurant: item })
        }
      >
        <RestaurantInfoCard restaurant={item} />
      </TouchableOpacity>
    </Spacer>
  );

  if (!favourites.length) {
    return (
      <NoFavWrapper>
        <StyledText>No favourites yet</StyledText>
      </NoFavWrapper>
    );
  }
  return (
    <SafeAreaContainer>
      <RestaurantFlatList
        data={favourites}
        renderItem={renderRestItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaContainer>
  );
}
