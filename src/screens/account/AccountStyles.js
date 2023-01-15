import styled from "styled-components";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../theme/colors";
import StyledText from "../../components/typography";

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.6);
  padding: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[2]};
`;

export const AuthBtn = styled(Button).attrs({
  buttonColor: colors.brand.secondary,
})`
  padding: ${({ theme }) => theme.space[2]};
  border-radius: 8px;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(StyledText)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
