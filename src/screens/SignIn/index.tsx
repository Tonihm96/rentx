import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Button } from '../../components/Button';

import { Container, Header, Title, Subtitle, Footer } from './styles';

export function SignIn() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <Title>Estamos{'\n'}quase lá.</Title>
        <Subtitle>
          Faça login para começar{'\n'}uma experiência incrível
        </Subtitle>
      </Header>

      <Footer>
        <Button
          title='Login'
          onPress={() => null}
          enabled={true}
          loading={false}
        />
        <Button
          title='Criar conta gratuira'
          onPress={() => null}
          enabled={true}
          loading={false}
          light
          color={theme.colors.background_secondary}
        />
      </Footer>
    </Container>
  );
}
