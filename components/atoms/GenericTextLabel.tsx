import React from 'react';
import styled from 'styled-components/native';

const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textInput};
  margin-bottom: 5px;
`;

const GenericTextLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Label>{children}</Label>;
};

export default GenericTextLabel;
