import React, { useState } from 'react';
import {
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import { useTheme } from 'styled-components/native';
import * as Yup from 'yup';

import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';

import { Container, Header, Title, Subtitle, Form, Footer } from './styles';

export function SignIn() {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required('A senha é obrigatória'),
        email: Yup.string()
          .required('O e-mail é obrigatório')
          .email('Digite um e-mail válido')
      });

      await schema.validate({ email, password });

      // Login here
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Ops', error.message);
      } else {
        Alert.alert(
          'Erro ao autenticar',
          'Verifique se as credencias são válidas'
        );
      }
    }
  }

  return (
    <ScrollView scrollEnabled={false}>
      <KeyboardAvoidingView behavior='position'>
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
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title='Login'
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />
            <Button
              title='Criar conta gratuita'
              onPress={() => null}
              enabled={true}
              loading={false}
              light
              color={theme.colors.background_secondary}
            />
          </Footer>
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
