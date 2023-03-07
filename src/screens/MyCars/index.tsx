import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { AppStackProps } from '../../routes/Models';

import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { CarPlaceHolder } from '../../components/CarPlaceHolder';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

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
  const navigation = useNavigation<AppStackProps>();

  async function fetchCars() {
    setLoading(true);
    try {
      const response = await api.get('/schedules_byuser?user_id=1');
      setCars(response.data);
    } catch (error) {
      console.log(error);
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
          {loading ? (
            <ShimmerPlaceholder
              height={RFValue(14)}
              width={RFValue(15)}
              style={{ marginVertical: 3 }}
            />
          ) : (
            <Quantity>{cars.length}</Quantity>
          )}
        </Appointments>

        {loading ? (
          <PlaceholderScrollContainer>
            {Array.from(Array(6).keys()).map(index => (
              <CarWrapper key={index}>
                <CarPlaceHolder key={index} />
                <CarFooter>
                  <ShimmerPlaceholder
                    height={RFValue(10)}
                    width={RFValue(40)}
                    style={{ marginVertical: 3 }}
                  />
                  <CarFooterPeriod>
                    <ShimmerPlaceholder
                      height={RFValue(14)}
                      width={RFValue(68)}
                      style={{ marginVertical: 3 }}
                    />
                    <AntDesign
                      name='arrowright'
                      size={20}
                      color={loading ? 'transparent' : theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <ShimmerPlaceholder
                      height={RFValue(14)}
                      width={RFValue(68)}
                      style={{ marginVertical: 3 }}
                    />
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
              <CarWrapper key={`${item.id}-${item.start_date}`}>
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
            onRefresh={fetchCars}
            refreshing={loading}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Content>
    </Container>
  );
}
