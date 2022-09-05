import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StackProps } from '../../routes/Models';

import { Container, Header, HeaderContent, TotalCars, CarList } from './styles';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

export function Home() {
  const navigation = useNavigation<StackProps>();
  const carData = {
    brand: 'audi',
    name: 'RS 5 Coupe',
    rent: {
      period: 'Ao dia',
      price: 140
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  };

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={108} height={12} />
          <TotalCars>Total de 12 Carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        keyExtractor={item => String(item)}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={item => <Car data={carData} onPress={handleCarDetails} />}
      />
    </Container>
  );
}
