/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider } from 'styled-components';
import StartScreen from './screens/StartScreen';
import { theme } from './styles/theme';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ThemeProvider theme={theme}>
          <NavigationContainer>
            <StartScreen />
          </NavigationContainer>
        </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
