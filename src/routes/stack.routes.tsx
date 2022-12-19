import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { MyCars } from '../screens/MyCars';

import { NavigationStackProps } from './Models';

const { Navigator, Screen } = createNativeStackNavigator<NavigationStackProps>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false
};

export function StackRoutes() {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name='Home' component={Home} />
      <Screen name='CarDetails' component={CarDetails} />
      <Screen name='Scheduling' component={Scheduling} />
      <Screen name='SchedulingDetails' component={SchedulingDetails} />
      <Screen name='SchedulingComplete' component={SchedulingComplete} />
      <Screen name='MySchedules' component={MyCars} />
    </Navigator>
  );
}
