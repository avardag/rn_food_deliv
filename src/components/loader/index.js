import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export default function Loader({ size = 50, color = "#696AC3" }) {
  return (
    <LoadingContainer>
      <Loading size={size} color={color} />
    </LoadingContainer>
  );
}
