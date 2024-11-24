import React from 'react';
import styled from 'styled-components/native';
import GenericTextInput from '../atoms/GenericTextInput';
import GenericTextLabel from '../atoms/GenericTextLabel';

const Container = styled.View`
  margin-bottom: 15px;
  width: 100%;
`;

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (e: string | React.ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  secureTextEntry?: boolean;
}

const FormField: React.FC<FormFieldProps> = (props) => (
  <Container>
    <GenericTextLabel>{props.label}</GenericTextLabel>
    <GenericTextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
      secureTextEntry={props.secureTextEntry}
    />
  </Container>
);

export default FormField;
