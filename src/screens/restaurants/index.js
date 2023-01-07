import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, Platform, SafeAreaView, FlatList } from "react-native";
import styled from "styled-components/native";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { Spacer } from "../../components/spacer";

//TODO: check the bellow StatusBar.currentHeight on IOS
const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;
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
  const [restaurantList, setRestaurantList] = useState([
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
  ]);

  const onChangeSearch = (query) => setSearchQuery(query);
  const renderRestItem = ({ item }) => (
    <Spacer position="bottom" size="large">
      <RestaurantInfoCard restaurant={item} />
    </Spacer>
  );
  return (
    <Container>
      <SearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchView>
      <RestaurantFlatList
        data={restaurantList}
        renderItem={renderRestItem}
        keyExtractor={(item) => item.name}
        // contentContainerStyle={{ padding: 16 }}
      />
    </Container>
  );
}
