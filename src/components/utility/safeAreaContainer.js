import { StatusBar, Platform } from "react-native";
import styled from "styled-components/native";

//TODO: check the bellow StatusBar.currentHeight on IOS
export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
