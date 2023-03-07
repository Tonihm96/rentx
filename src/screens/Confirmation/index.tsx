import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { AppStackProps, AppStackParamList } from '../../routes/Models';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { Container, Content, Title, Message, Footer } from './styles';

import { ConfirmButton } from '../../components/ConfirmButton';

export function Confirmation() {
  const navigation = useNavigation<AppStackProps>();
  const route = useRoute<RouteProp<AppStackParamList, 'Confirmation'>>();
  const { title, message, nextScreen } = route.params;
  const { width } = useWindowDimensions();

  function handleConfirm() {
    // @ts-ignore
    navigation.navigate(nextScreen);
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton title='Ok' onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
