import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

import { CarDTO } from '../../dtos/CarDTO';

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

export const CarList = styled(FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showVerticalScrollIndicator: false
})`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const PlaceholderScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24
  },
  showVerticalScrollIndicator: false
})`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const MySchedules = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.main};

  position: absolute;
  bottom: 13px;
  right: 22px;

  width: 60px;
  height: 60px;

  border-radius: 30px;

  justify-content: center;
  align-items: center;
`;
