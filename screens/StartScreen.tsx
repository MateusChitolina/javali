import React from 'react';
import styled from 'styled-components/native';
import RoundedButton from '../components/RoundedButton';

import LinearGradient from 'react-native-linear-gradient';

const DivContainer = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gradientBackground};
  align-items:center;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

const StartScreen: React.FC = () => {
  return (
    <DivContainer colors={['#00B4C5', '#D9D9D9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <RoundedButton text={'FAZER LOGIN'} />
      <RoundedButton text={'CRIAR CONTA'} />
    </DivContainer>
  );
};

export default StartScreen;
