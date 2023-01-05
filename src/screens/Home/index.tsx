import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  ListRenderItemInfo,
  StyleSheet,
  BackHandler
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring
} from 'react-native-reanimated';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { CarDTO } from '../../dtos/CarDTO';
import { StackProps } from '../../routes/Models';
import { api } from '../../services/api';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
  PlaceholderScrollContainer,
  MySchedules
} from './styles';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { CarPlaceHolder } from '../../components/CarPlaceHolder';

const AnimatedButton = Animated.createAnimatedComponent(RectButton);

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const mySchedulesButtonStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: positionX.value },
      { translateY: positionY.value }
    ]
  }));
  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, context: { positionX: number; positionY: number }) {
      context.positionX = positionX.value;
      context.positionY = positionY.value;
    },
    onActive(event, context: { positionX: number; positionY: number }) {
      positionX.value = context.positionX + event.translationX;
      positionY.value = context.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
    onCancel() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    }
  });

  const navigation = useNavigation<StackProps>();
  const theme = useTheme();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleOpenMySchedules() {
    navigation.navigate('MySchedules');
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
      const response = await api.get('/cars');
      setCars(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();

    // prevent user from leaving the screen
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
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

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            { position: 'absolute', bottom: 13, right: 22 },
            mySchedulesButtonStyle
          ]}
        >
          <AnimatedButton
            style={[styles.button, { backgroundColor: theme.colors.main }]}
            onPress={handleOpenMySchedules}
          >
            <Ionicons
              name='ios-car-sport'
              size={32}
              color={theme.colors.background_secondary}
            />
          </AnimatedButton>
        </Animated.View>
      </PanGestureHandler>
      {/* <MySchedules onPress={handleOpenMySchedules}>
        <Ionicons
          name='ios-car-sport'
          size={32}
          color={theme.colors.background_secondary}
        />
      </MySchedules> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
