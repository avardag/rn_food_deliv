import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { Spacer } from "../../components/spacer";
import Loader from "../../components/loader";
import { SafeAreaContainer } from "../../components/utility/safeAreaContainer";
import { RestaurantContext } from "../../context/restaurants/RestaurantsContext";
import Search from "../../components/search";
import FavouritesBar from "../../components/favouritesBar";
import { FavouritesContext } from "../../context/favourites/favouritesContext";
import { RestaurantFlatList } from "./RestaurantsStyles";
import { FadeInView } from "../../components/animation/fadeAnimation";

export default function RestaurantsScreen({ navigation }) {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isFavBarShown, setIsFavBarShown] = useState(false);

  const renderRestItem = ({ item }) => (
    <Spacer position="bottom" size="large">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantDetail", { restaurant: item })
        }
      >
        <FadeInView>
          <RestaurantInfoCard restaurant={item} />
        </FadeInView>
      </TouchableOpacity>
    </Spacer>
  );

  return (
    <SafeAreaContainer>
      <Search
        onFavToggle={() => setIsFavBarShown(!isFavBarShown)}
        isFavToggled={isFavBarShown}
      />
      {isFavBarShown && (
        <FavouritesBar
          favourites={favourites}
          onPressNavigate={navigation.navigate}
        />
      )}
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
