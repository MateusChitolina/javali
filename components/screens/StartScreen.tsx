import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import GlassWater from '../atoms/GlassWater';
import RoundedButton from '../atoms/RoundedButton';
import LogoWithLabel from '../molecules/LogoWithName';

const Background = styled(LinearGradient)`
  background-color: ${({ theme }) => theme.colors.gradientBackground};
  align-items: center;
`;

const DivContainer = styled(View)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gradientBackground};
  align-items: center;
  justify-content: start;
  width: 80%;
  height: 100%;
  gap: 30px;
`;

const DivGlassWater = styled(View)`
  width: 90%;
  height: 55%;
`;

interface StartScreenProps {
  navigation: NavigationProp<any>;
}

const StartScreen: React.FC<StartScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const checkAuthToken = async () => {
      const authToken = await AsyncStorage.getItem('authToken');
      if (authToken) {
        console.log('Redirecionar'); // navigation.navigate('');
      }
    };

    checkAuthToken();
  }, [navigation]);

  return (
    <Background colors={['#00B4C5', '#D9D9D9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <DivContainer>
        <LogoWithLabel />
        <RoundedButton text={'FAZER LOGIN'} onPress={() => navigation.navigate('Login')} />
        <RoundedButton text={'CRIAR CONTA'} onPress={() => console.log('CRIAR CONTA')/*navigation.navigate('Another')*/} />
        <DivGlassWater>
          <GlassWater />
        </DivGlassWater>
      </DivContainer>
    </Background>
  );
};

export default StartScreen;
