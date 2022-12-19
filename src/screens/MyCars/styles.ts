import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};

  flex: 1;
  align-items: center;
`;

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
  font-size: ${RFValue(30)}px;

  margin-top: 24px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;

  margin-top: 24px;
`;

export const Content = styled.View`
  flex: 1;

  width: 100%;
  padding: 0 16px;
`;

export const Appointments = styled.View`
  width: 100%;
  padding: 24px 0;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AppointmentsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;

export const PlaceholderScrollContainer = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false
})`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};

  width: 100%;
  padding: 12px;

  margin-top: -10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CarFooterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarFooterDate = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(13)}px;
`;
