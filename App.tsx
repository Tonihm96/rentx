import React from 'react';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

import theme from './src/styles/theme';

import { Routes } from './src/routes';
import { AppProvider } from './src/hooks';

function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  LogBox.ignoreLogs(['expo-app-loading is deprecated']);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}

export default gestureHandlerRootHOC(App);
