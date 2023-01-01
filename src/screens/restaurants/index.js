import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";
import RestaurantInfoCard from "./RestaurantInfoCard";

//TODO: check the bellow StatusBar.currentHeight on IOS
const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;
const SearchView = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;
const List = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;
export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <Container>
      <SearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchView>
      <List>
        <RestaurantInfoCard />
      </List>
    </Container>
  );
}
