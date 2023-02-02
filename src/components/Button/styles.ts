import styled, { css } from 'styled-components/native';
import { ActivityIndicatorProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps {
  color?: string;
  enabled?: boolean;
  loading?: boolean;
}

interface ButtonTextProps {
  light?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.main};
  ${({ enabled, loading }) =>
    (!enabled || loading) &&
    css`
      opacity: 0.5;
    `}

  width: 100%;
  padding: 19px;
  margin-bottom: 8px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.header : theme.colors.background_secondary};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(
  ({ theme }): ActivityIndicatorProps => ({
    color: theme.colors.background_secondary,
    size: RFValue(22)
  })
)``;
