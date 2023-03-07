import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack';

import { AppStackParamList } from './Models';

import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';
import { MyCars } from '../screens/MyCars';

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

const screenOptions = ({
  route
}: {
  route: RouteProp<AppStackParamList, keyof AppStackParamList>;
}): NativeStackNavigationOptions => ({
  headerShown: false,
  gestureEnabled: !(route.name === 'Home')
});

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={screenOptions} initialRouteName='Splash'>
      <Screen name='Splash' component={Splash} />
      <Screen name='Home' component={Home} />
      <Screen name='CarDetails' component={CarDetails} />
      <Screen name='Scheduling' component={Scheduling} />
      <Screen name='SchedulingDetails' component={SchedulingDetails} />
      <Screen name='Confirmation' component={Confirmation} />
      <Screen name='MySchedules' component={MyCars} />
    </Navigator>
  );
}
