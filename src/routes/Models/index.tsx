import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationStackProps = {
  Home: undefined;
  CarDetails: undefined;
  Scheduling: undefined;
  SchedulingDetails: undefined;
  SchedulingComplete: undefined;
};

export type StackProps = NativeStackNavigationProp<NavigationStackProps>;
