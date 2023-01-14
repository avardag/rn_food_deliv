import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { FavouritesContext } from "../../context/favourites/favouritesContext";

const Btn = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export default function FavoutriteBtn({ restaurant }) {
  const { favourites, addToFav, removeFromFav } = useContext(FavouritesContext);

  const isFav = favourites.find((rest) => rest.placeId === restaurant.placeId);

  const handlePress = (rest) => {
    if (isFav) {
      removeFromFav(rest);
    } else if (!isFav) {
      addToFav(rest);
    }
  };
  return (
    <Btn onPress={() => handlePress(restaurant)}>
      <AntDesign
        name={isFav ? "heart" : "hearto"}
        size={24}
        color={isFav ? "red" : "white"}
      />
    </Btn>
  );
}
