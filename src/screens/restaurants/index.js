import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import RestaurantInfoCard from "./RestaurantInfoCard";
import { Spacer } from "../../components/spacer";
import Loader from "../../components/loader";
import { SafeAreaContainer } from "../../components/utility/safeAreaContainer";
import { RestaurantContext } from "../../context/restaurants/RestaurantsContext";
import Search from "../../components/search";

const RestaurantFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export default function RestaurantsScreen({ navigation }) {
  const { restaurants, isLoading } = useContext(RestaurantContext);

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

  return (
    <SafeAreaContainer>
      <Search />
      {isLoading && <Loader />}
      <RestaurantFlatList
        data={restaurants}
        renderItem={renderRestItem}
        keyExtractor={(item) => item.name}
        // contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaContainer>
  );
}
