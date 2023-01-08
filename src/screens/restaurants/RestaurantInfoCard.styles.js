import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const RestaurantAddress = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;
export const InfoWrapper = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;
export const RatingStars = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[3]};
  padding-bottom: ${({ theme }) => theme.space[3]};
`;
export const IconImage = styled.Image`
  width: 30px;
  height: 30px;
`;
export const MiddleSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;
