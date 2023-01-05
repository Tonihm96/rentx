import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';

import { Container, Header, Title, Subtitle, Form, Footer } from './styles';

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

      <Form>
        <Input
          iconName='mail'
          placeholder='E-mail'
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
        />
        <PasswordInput iconName='lock' placeholder='Senha' />
      </Form>

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
