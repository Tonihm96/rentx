import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.main : 'transparent'};

  flex-direction: row;
`;

export const IconContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};

  height: 56px;
  width: 55px;
  margin-right: 2px;

  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 23px;

  flex: 1;
`;

export const ToggleVisibilityButton = styled(BorderlessButton)`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;
