import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import RestaurantInfoCard from "./RestaurantInfoCard";
import { Spacer } from "../../components/spacer";
import Loader from "../../components/loader";
import { SafeAreaContainer } from "../../components/utility/safeAreaContainer";
import { RestaurantContext } from "../../context/restaurants/RestaurantsContext";

const SearchView = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;
const RestaurantFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurants, isLoading } = useContext(RestaurantContext);

  const onChangeSearch = (query) => setSearchQuery(query);
  const renderRestItem = ({ item }) => (
    <Spacer position="bottom" size="large">
      <RestaurantInfoCard restaurant={item} />
    </Spacer>
  );

  return (
    <SafeAreaContainer>
      <SearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchView>
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
