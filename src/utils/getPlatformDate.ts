import { Platform } from 'react-native';
import { addDays } from 'date-fns';

export function getPlatformDate(date: Date) {
  return Platform.OS === 'android' ? addDays(date, 1) : date;
}
