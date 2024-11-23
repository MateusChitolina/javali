import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Button = styled(TouchableOpacity)`
  padding: 10px 60px;
  border-radius: 80px;
  background-color: #FFF;
  elevation: 5; /* Sombra para Android */
  shadow-color: #000; /* Sombra para iOS */
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const RoundedButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Button>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default RoundedButton;