import React, { useEffect, useState } from 'react';
import { StatusBar, ListRenderItemInfo } from 'react-native';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

import { CarDTO } from '../../dtos/CarDTO';
import { AppStackProps } from '../../routes/Models';
import { api } from '../../services/api';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
  PlaceholderScrollContainer
} from './styles';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { CarPlaceHolder } from '../../components/CarPlaceHolder';
import { ErrorBoundary } from '../../components/ErrorBoundary';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<AppStackProps>();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function renderItem({ item }: ListRenderItemInfo<CarDTO>) {
    return <Car data={item} onPress={() => handleCarDetails(item)} />;
  }

  function keyExtractor({ id }: CarDTO) {
    return String(id);
  }

  async function fetchCars() {
    setLoading(true);
    try {
      const response = await api.get('cars');
      setCars(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { message, name, cause, code, response } = error;
        const axiosErrorLog =
          `name: ${name}\n` +
          `message: ${message}\n` +
          `cause: ${cause}\n` +
          `code: ${code}\n` +
          `response: ${(response as any)._response as any}`;

        console.log(axiosErrorLog);
      } else console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
  }, []);

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
          <TotalCars>
            {!loading ? `Total de ${cars.length} Carros` : ` `}
          </TotalCars>
        </HeaderContent>
      </Header>
      <ErrorBoundary>
        {loading ? (
          <PlaceholderScrollContainer>
            {Array.from(Array(6).keys()).map(index => (
              <CarPlaceHolder key={index} />
            ))}
          </PlaceholderScrollContainer>
        ) : (
          <CarList
            keyExtractor={keyExtractor}
            data={cars}
            renderItem={renderItem}
            onRefresh={fetchCars}
            refreshing={loading}
          />
        )}
      </ErrorBoundary>
    </Container>
  );
}
