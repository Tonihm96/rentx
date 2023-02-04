import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.header};

  padding-top: 96px;

  flex: 1;
`;

export const Content = styled.View`
  padding-bottom: 80px;

  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;

  margin-top: 40px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  text-align: center;
  line-height: ${RFValue(25)}px;

  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  margin: 80px 0;

  align-items: center;
`;
