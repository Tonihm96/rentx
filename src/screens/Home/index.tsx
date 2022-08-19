import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Header, HeaderContent, TotalCars } from './styles';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

export function Home() {
  const carData = [
    {
      brand: 'audi',
      name: 'RS 5 Coupe',
      rent: {
        period: 'Ao dia',
        price: 140
      },
      thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
    },
    {
      brand: 'audi',
      name: 'RS 5 Coupe',
      rent: {
        period: 'Ao dia',
        price: 140
      },
      thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
    },
    {
      brand: 'audi',
      name: 'RS 5 Coupe',
      rent: {
        period: 'Ao dia',
        price: 140
      },
      thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
    },
    {
      brand: 'audi',
      name: 'RS 5 Coupe',
      rent: {
        period: 'Ao dia',
        price: 140
      },
      thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
    }
  ];

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
      {carData.map((item, index) => (
        <Car data={item} key={index} />
      ))}
    </Container>
  );
}
