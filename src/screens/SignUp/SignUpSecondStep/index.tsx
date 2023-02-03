import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import * as Yup from 'yup';

import { NavigationStackParamList } from '../../../routes/Models';
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

type SignUpSecondStepScreenRouteProp = RouteProp<
  NavigationStackParamList,
  'SignUpSecondStep'
>;

export function SignUpSecondStep() {
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute<SignUpSecondStepScreenRouteProp>();
  const theme = useTheme();

  async function handleRegister() {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required('A senha é obrigatória'),
        repeatedPassword: Yup.string().required(
          'A senha repetida é obrigatória'
        )
      });

      const data = { password, repeatedPassword };
      await schema.validate(data);

      if (password !== repeatedPassword) {
        throw new Error('As senhas devem ser iguais');
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Ops', error.message);
      } else {
        Alert.alert('Ops', String(error));
      }
    }
  }

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
            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName='lock'
              placeholder='Repetir senha'
              onChangeText={setRepeatedPassword}
              value={repeatedPassword}
            />
          </Form>

          <Button
            title='Cadastrar'
            color={theme.colors.success}
            onPress={handleRegister}
          />
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
