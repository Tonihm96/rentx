import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CarDTO } from '../../dtos/CarDTO';

export interface RouteParams {
  car: CarDTO;
  dates: string[];
}

export type NavigationStackProps = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: string[] };
  SchedulingComplete: undefined;
  MySchedules: undefined;
};

export type StackProps = NativeStackNavigationProp<NavigationStackProps>;
