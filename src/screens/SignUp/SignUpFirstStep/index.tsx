import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StackProps } from '../../../routes/Models';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
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

export function SignUpFirstStep() {
  const navigation = useNavigation<StackProps>();

  function handleNextStep() {
    navigation.navigate('SignUpSecondStep');
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
            <FormTitle>1. Dados</FormTitle>
            <Input iconName='user' placeholder='Nome' />
            <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
            />
            <Input
              iconName='credit-card'
              placeholder='CNH'
              keyboardType='numeric'
            />
          </Form>

          <Button title='Próximo' onPress={handleNextStep} />
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
