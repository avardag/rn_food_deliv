import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import openSvg from "../../../assets/openSvg";
import { Spacer } from "../../components/spacer";
import StyledText from "../../components/typography";
import {
  RestaurantCard,
  RestaurantCardCover,
  RestaurantAddress,
  InfoWrapper,
  RatingStars,
  MiddleSection,
  SectionEnd,
  IconImage,
} from "./RestaurantInfoCard.styles";
import FavoutriteBtn from "../../components/favouriteBtn";

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Napoli",
    icon = "silverware-fork-knife",
    photos = ["https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"],
    address = "1426 Lenina str",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArr = Array.from(new Array(Math.floor(rating)));
  return (
    <View>
      <RestaurantCard mode="elevated" elevation={5}>
        <FavoutriteBtn restaurant={restaurant} />
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <InfoWrapper>
          <StyledText variant="label">{name}</StyledText>
          <MiddleSection>
            <RatingStars>
              {ratingArr.map((item, idx) => (
                <SvgXml xml={star} width={20} height={20} key={idx} />
              ))}
            </RatingStars>
            <SectionEnd>
              {isClosedTemporarily && (
                <StyledText variant="error">Closed Temporarily</StyledText>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={openSvg} width={30} height={30} />}
              </Spacer>
              <Spacer position="left" size="large">
                <IconImage source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </MiddleSection>

          <RestaurantAddress>{address}</RestaurantAddress>
        </InfoWrapper>
      </RestaurantCard>
    </View>
  );
}

// const rest = {
//   businessStatus: "OPERATIONAL",
//   geometry: { location: [Object], viewport: [Object] },
//   icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
//   isClosedTemporarily: false,
//   isOpenNow: true,
//   name: "Patxi's Pizza",
//   openingHours: { openNow: true },
//   photos: [[Object]],
//   placeId: "some place id 60",
//   plusCode: { compoundCode: "", globalCode: "" },
//   priceLevel: 2,
//   rating: 4.2,
//   reference: "",
//   scope: "",
//   types: ["restaurant", "food", "point_of_interest", "establishment"],
//   userRatingsTotal: 861,
//   vicinity: "511 Hayes Street, San Francisco",
// };
