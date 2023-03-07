import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CarDTO } from '../../dtos/CarDTO';

export type AuthStackParamList = {
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
  Confirmation: {
    title: string;
    message: string;
    nextScreen: keyof AuthStackParamList;
  };
};

export type AuthStackProps = NativeStackNavigationProp<AuthStackParamList>;

export type AppStackParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: string[] };
  Confirmation: {
    title: string;
    message: string;
    nextScreen: keyof AppStackParamList;
  };
  MySchedules: undefined;
};

export type AppStackProps = NativeStackNavigationProp<AppStackParamList>;

export type AppTabParamList = {
  Home: undefined;
  Profile: undefined;
  MyCars: undefined;
};

export type AppTabProps = NativeStackNavigationProp<AppTabParamList>;
