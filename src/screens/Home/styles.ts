import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};

  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.header};

  width: 100%;
  height: 113px;
  padding: 32px 24px;

  justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showVerticalScrollIndicator: false
})`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
