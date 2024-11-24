import React from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textInput};
  padding: 10px;
  border-radius: 5px;
  background-color: #FFF;
  width: 100%; 
  height: 40px;
  elevation: 10; /* Sombra para Android */
  shadow-color: #000; /* Sombra para iOS */
  shadow-offset: 0px 12px;
  shadow-opacity: 0.5;
  shadow-radius: 30px;
`;

const GenericTextInput: React.FC<TextInputProps> = (props) => {
  return <TextInput {...props} />;
};

export default GenericTextInput;
