import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled(TouchableOpacity)`
  padding: 16px 96px;
  border-radius: 10px;
  background-color: #FFF;
  elevation: 5; /* Sombra para Android */
  shadow-color: #000; /* Sombra para iOS */
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

interface GenericButtonProps {
  text: string;
  onPress: () => void;
}

const GenericButton: React.FC<GenericButtonProps> = ({ text, onPress }) => {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
};

export default GenericButton;
