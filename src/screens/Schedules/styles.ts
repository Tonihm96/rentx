import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface DateValueContainerProps {
  selected: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};

  flex: 1;
`;

// Original height: 325px
export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;

  width: 100%;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 18}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(34)}px;

  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 32px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const DateValueContainer = styled.View<DateValueContainerProps>`
  border-bottom-width: 1px;

  padding-bottom: 5px;
  border-bottom-color: ${({ selected, theme }) =>
    !selected ? theme.colors.text : css`transparent`};
`;

export const DateValue = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24
  },
  showVerticalScrollIndicator: false
})``;

export const Footer = styled.View`
  padding: 24px;
`;
