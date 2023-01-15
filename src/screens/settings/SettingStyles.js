import { Button } from "react-native-paper";
import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Btn = styled(Button).attrs({
  buttonColor: colors.brand.secondary,
})`
  padding: ${({ theme }) => theme.space[2]};
  border-radius: 8px;
  max-width: 300px;
`;

export const SettingsContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.6);
  padding: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[2]};
`;
