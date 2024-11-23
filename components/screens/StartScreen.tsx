import React from 'react';
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

const StartScreen: React.FC = () => {
  //const navigation = useNavigation();

  return (
    <Background colors={['#00B4C5', '#D9D9D9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <DivContainer>
        <LogoWithLabel label="Your Label Here" />
        <RoundedButton text={'FAZER LOGIN'} onPress={() => console.log('FAZER LOGIN')/*navigation.navigate('Another')*/} />
        <RoundedButton text={'CRIAR CONTA'} onPress={() => console.log('CRIAR CONTA')/*navigation.navigate('Another')*/} />
        <DivGlassWater>
          <GlassWater />
        </DivGlassWater>
      </DivContainer>
    </Background>
  );
};

export default StartScreen;
