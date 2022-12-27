import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  runOnJS
} from 'react-native-reanimated';

import { StackProps } from '../../routes/Models';
import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import { Container } from './styles';

const ANIMATION_VALUE = 100;
const ANIMATION_DURATION = 1500;

export function Splash() {
  const navigation = useNavigation<StackProps>();
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, ANIMATION_VALUE], [1, 0]),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, ANIMATION_VALUE],
          [0, -150],
          Extrapolate.CLAMP
        )
      }
    ]
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, ANIMATION_VALUE], [0, 1]),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, ANIMATION_VALUE],
          [150, 0],
          Extrapolate.CLAMP
        )
      }
    ]
  }));

  function startApp() {
    navigation.navigate('Home');
  }

  useEffect(() => {
    setTimeout(() => {
      splashAnimation.value = withTiming(
        100,
        {
          duration: ANIMATION_DURATION,
          easing: Easing.bezier(0, 0.5, 0.5, 1)
        },
        () => {
          'worklet';
          runOnJS(startApp)();
        }
      );
    }, 1000);
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Animated.View
        style={[brandStyle, { position: 'absolute', paddingBottom: 85 }]}
      >
        <BrandSvg width={80} height={50} />
      </Animated.View>
      <Animated.View
        style={[logoStyle, { position: 'absolute', paddingBottom: 85 }]}
      >
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}
