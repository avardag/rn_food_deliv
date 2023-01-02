import React from "react";
import { View } from "react-native";

import { SvgXml } from "react-native-svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import star from "../../../assets/star";
import openSvg from "../../../assets/openSvg";
import { Spacer } from "../../components/spacer";
import StyledText from "../../components/spacer/typography";
import {
  RestaurantCard,
  RestaurantCardCover,
  RestaurantAddress,
  InfoWrapper,
  RatingStars,
  MiddleSection,
  SectionEnd,
} from "./RestaurantInfoCard.styles";

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
                <MaterialCommunityIcons name={icon} size={24} color="black" />
              </Spacer>
            </SectionEnd>
          </MiddleSection>

          <RestaurantAddress>{address}</RestaurantAddress>
        </InfoWrapper>
      </RestaurantCard>
    </View>
  );
}
