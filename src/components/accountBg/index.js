import React from "react";
import styled from "styled-components";

const AccountBg = styled.ImageBackground.attrs({
  source: require("../../../assets/pexels-lina-kivaka-1458680.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AccountBgLight = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const AccountBackground = ({ children }) => (
  <AccountBg>
    <AccountBgLight />
    {children}
  </AccountBg>
);
