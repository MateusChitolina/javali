/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import LoginScreen from './components/screens/LoginScreen';
import StartScreen from './components/screens/StartScreen';
import { theme } from './styles/theme';

const Stack = createStackNavigator();

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
