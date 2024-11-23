import React from 'react';
import styled from 'styled-components/native';
import GenericTextInput from '../atoms/GenericTextInput';
import GenericTextLabel from '../atoms/GenericTextLabel';

const Container = styled.View`
  margin-bottom: 15px;
  width: 100%;
`;

const FormField: React.FC<{ label: string; placeholder: string }> = ({ label, placeholder }) => (
  <Container>
    <GenericTextLabel>{label}</GenericTextLabel>
    <GenericTextInput placeholder={placeholder} />
  </Container>
);

export default FormField;
