import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';

import {
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle
} from './styles';

export function SignUpSecondStep() {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <ScrollView scrollEnabled={false}>
      <KeyboardAvoidingView behavior='position'>
        <Container>
          <Header>
            <BackButton onPress={() => navigation.goBack()} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua{'\n'}conta</Title>
          <Subtitle>Faça seu cadastro de{'\n'}forma rápida e fácil</Subtitle>

          <Form>
            <FormTitle>2. Dados</FormTitle>
            <PasswordInput iconName='lock' placeholder='Senha' />
            <PasswordInput iconName='lock' placeholder='Repetir senha' />
          </Form>

          <Button title='Cadastrar' color={theme.colors.success} />
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
