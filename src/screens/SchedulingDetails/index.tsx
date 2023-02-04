import React, { useEffect, useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { format } from 'date-fns';

import { NavigationStackParamList, StackProps } from '../../routes/Models';
import { api } from '../../services/api';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';

import { Button } from '../../components/Button';

interface RentalPeriod {
  start: string;
  end: string;
}

type SchedulingDetailsScreenRouteProp = RouteProp<
  NavigationStackParamList,
  'SchedulingDetails'
>;

export function SchedulingDetails() {
  const [loading, setLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const navigation = useNavigation<StackProps>();
  const theme = useTheme();
  const route = useRoute<SchedulingDetailsScreenRouteProp>();

  const rentTotal = Number(
    route.params.dates.length * route.params.car.rent.price
  );

  async function handleConfirmRental() {
    setLoading(true);
    const schedulesByCar = await api.get(
      `/schedules_bycars/${route.params.car.id}`
    );
    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...route.params.dates
    ];

    await api.post(`schedules_byuser`, {
      user_id: 1,
      car: route.params.car,
      start_date: format(
        getPlatformDate(new Date(route.params.dates[0])),
        'dd/MM/yyyy'
      ),
      end_date: format(
        getPlatformDate(
          new Date(route.params.dates[route.params.dates.length - 1])
        ),
        'dd/MM/yyyy'
      )
    });

    await api
      .put(`/schedules_bycars/${route.params.car.id}`, {
        id: route.params.car.id,
        unavailable_dates
      })
      .then(() =>
        navigation.navigate('Confirmation', {
          title: 'Carro alugado!',
          message:
            'Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.',
          nextScreen: 'Home'
        })
      )
      .catch(() => {
        setLoading(false);
        Alert.alert('Ocorreu um erro ao confirmar o agendamento.');
      });
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(
        getPlatformDate(new Date(route.params.dates[0])),
        'dd/MM/yyyy'
      ),
      end: format(
        getPlatformDate(
          new Date(route.params.dates[route.params.dates.length - 1])
        ),
        'dd/MM/yyyy'
      )
    });
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={route.params.car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{route.params.car.brand}</Brand>
            <Name>{route.params.car.name}</Name>
          </Description>

          <Rent>
            <Period>{route.params.car.rent.period}</Period>
            <Price>R$ {route.params.car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {route.params.car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(20)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text_detail}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {route.params.car.rent.price} x{route.params.dates.length}{' '}
              diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title='Alugar agora'
          color={theme.colors.success}
          onPress={handleConfirmRental}
          loading={loading}
          enabled={!loading}
        />
      </Footer>
    </Container>
  );
}
