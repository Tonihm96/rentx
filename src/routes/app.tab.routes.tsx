import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions
} from '@react-navigation/bottom-tabs';

import { AppTabParamList } from './Models';

import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';

const { Navigator, Screen } = createBottomTabNavigator<AppTabParamList>();

const screenOptions = ({
  route
}: {
  route: RouteProp<AppTabParamList, keyof AppTabParamList>;
}): BottomTabNavigationOptions => ({
  headerShown: false
});

export function AppTabRoutes() {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name='Home' component={Home} />
      <Screen name='Profile' component={Home} />
      <Screen name='MyCars' component={MyCars} />
    </Navigator>
  );
}
