import styled from "styled-components";
import { colors } from "../../theme/colors";
import { List, Avatar } from "react-native-paper";

export const SettingsContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.6);
  padding: ${({ theme }) => theme.space[3]};
  /* margin-top: ${({ theme }) => theme.space[2]}; */
`;

export const SettingsListItem = styled(List.Item)`
  /* padding: ${({ theme }) => theme.space[3]}; */
`;
export const AvatarIcon = styled(Avatar.Icon)`
  background-color: ${({ theme }) => theme.colors.brand.primary};
`;
export const AvatarWrapper = styled.View`
  align-items: center;
`;
