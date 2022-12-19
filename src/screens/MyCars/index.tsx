import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import { StackProps } from '../../routes/Models';

import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { CarPlaceHolder } from '../../components/CarPlaceHolder';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Appointments,
  AppointmentsTitle,
  Quantity,
  PlaceholderScrollContainer,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate
} from './styles';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  start_date: string;
  end_date: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const navigation = useNavigation<StackProps>();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

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
        <BackButton
          color={theme.colors.shape}
          onPress={() => navigation.goBack()}
        />

        <Title>Seus agendamentos,{'\n'}estão aqui.</Title>
        <Subtitle>Conforto, segurança e praticidade.</Subtitle>
      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <Quantity>{cars.length}</Quantity>
        </Appointments>

        {1 ? (
          <PlaceholderScrollContainer>
            {Array.from(Array(6).keys()).map(index => (
              <CarWrapper>
                <CarPlaceHolder key={index} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>-</CarFooterDate>
                    <AntDesign
                      name='arrowright'
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>-</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            ))}
          </PlaceholderScrollContainer>
        ) : (
          <FlatList
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.start_date}</CarFooterDate>
                    <AntDesign
                      name='arrowright'
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.start_date}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Content>
    </Container>
  );
}
