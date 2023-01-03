import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';

import theme from '../../styles/theme';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { StackProps, RouteParams } from '../../routes/Models';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import {
  Container,
  Header,
  CarImages,
  CarInfoContainer,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
} from './styles';

const SCROLL_EVENT_FIRE_RATE = 16; //1000ms / 60fps

export function CarDetails() {
  const navigation = useNavigation<StackProps>();
  const route = useRoute();
  const { car } = route.params as RouteParams;

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [250, 300],
          [-100, 0],
          Extrapolation.CLAMP
        )
      }
    ]
  }));

  function handleConfirmRental() {
    navigation.navigate('Scheduling', { car });
  }

  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Animated.View style={[headerStyleAnimation, styles.header]}>
        <BackButton onPress={() => navigation.goBack()} />
      </Animated.View>

      <Animated.ScrollView
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={SCROLL_EVENT_FIRE_RATE}
      >
        <Header>
          <BackButton onPress={() => navigation.goBack()} />
        </Header>

        <CarImages>
          <ImageSlider imagesUrl={car.photos} />
        </CarImages>

        <CarInfoContainer>
          <Details>
            <Description>
              <Brand>{car.brand}</Brand>
              <Name>{car.name}</Name>
            </Description>

            <Rent>
              <Period>{car.rent.period}</Period>
              <Price>R$ ${car.rent.price}</Price>
            </Rent>
          </Details>

          <Accessories>
            {car.accessories.map(item => (
              <Accessory
                key={item.type}
                name={item.name}
                icon={getAccessoryIcon(item.type)}
              />
            ))}
          </Accessories>

          <About>{car.about}</About>
        </CarInfoContainer>
      </Animated.ScrollView>

      <Footer>
        <Button
          title='Escolher período do aluguel'
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: '100%',
    paddingTop: getStatusBarHeight() + 18,
    padding: 24,
    backgroundColor: theme.colors.background_secondary,
    elevation: 5,
    zIndex: 999
  }
});
