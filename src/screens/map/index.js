import React, { useContext, useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components";
import { SafeAreaContainer } from "../../components/utility/safeAreaContainer";
import { LocationContext } from "../../context/location/locationContext";
import { RestaurantContext } from "../../context/restaurants/RestaurantsContext";
import MapCallout from "./MapCallout";
import MapSearch from "./MapSearch";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;
export default function MapScreen({ navigation }) {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);
  //for inital zoom level
  const [latitudeDelta, setLatitudeDelta] = useState(0);
  const { viewport, lng, lat } = location;
  //set initial zoom level for map on render
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatitudeDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <SafeAreaContainer>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta,
          longitudeDelta: 0.0421,
        }}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.placeId}
            coordinate={{
              longitude: restaurant.geometry.location.lng,
              latitude: restaurant.geometry.location.lat,
            }}
          >
            <Callout
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant })
              }
            >
              <MapCallout restaurant={restaurant} />
            </Callout>
          </Marker>
        ))}
      </Map>
    </SafeAreaContainer>
  );
}

// const rest = {
//   ...
//   "geometry": {
//     "location": {
//       "lat": 51.2132707,
//       "lng": 4.4168305
//     },
//     "viewport": {
//       "northeast": {
//         "lat": 51.2145994302915,
//         "lng": 4.418074130291502
//       },
//       "southwest": {
//         "lat": 51.2119014697085,
//         "lng": 4.415376169708497
//       }
//     }
//   },
//   ...
// }
