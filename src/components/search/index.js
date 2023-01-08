import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../context/location/locationContext";

const SearchView = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export default function Search() {
  const { searchKeyword, search } = useContext(LocationContext);

  const [searchQuery, setSearchQuery] = useState(searchKeyword);

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SearchView>
      <Searchbar
        placeholder="Search for a city"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={() => search(searchQuery)}
      />
    </SearchView>
  );
}
