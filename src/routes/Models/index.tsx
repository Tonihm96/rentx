import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CarDTO } from '../../dtos/CarDTO';

export type NavigationStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: {
    user: {
      name: string;
      email: string;
      driverLicense: string;
    };
  };
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: string[] };
  SchedulingComplete: undefined;
  MySchedules: undefined;
};

export type StackProps = NativeStackNavigationProp<NavigationStackParamList>;
