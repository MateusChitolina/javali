import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFormik } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import * as Yup from 'yup';
import BackButton from '../atoms/BackButton';
import CapybaraImage from '../atoms/CapybaraImage';
import GenericButton from '../atoms/GenericButton';
import FormField from '../molecules/FormField';

const Background = styled(LinearGradient)`
  background-color: ${({ theme }) => theme.colors.gradientBackground};
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const DivContainer = styled(View)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gradientBackground};
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
`;

const DivForm = styled(View)`
  width: 80%;
  height: 100%;
  gap: 30px;
  align-items: center;
`;

const DivCapybaraImage = styled(View)`
  width: 80%;
  height: 35%;
  align-items: center;
`;

const DivField = styled(View)`
  width: 100%;
`;

const WelcomeText = styled(Text)`
  font-size: 23px;
  font-weight: bold;
`;

const DivBackButton = styled(View)`
  width: 10%;
  height: 6%;
`;

const LoginScreen = () => {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Email inválido!').required('Campo obrigatório!'),
      password: Yup.string().required('Campo obrigatório!'),
    }),
    onSubmit: async values => {
      try {
        const response = await fetch('https://endpoint.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          // Sucesso na autenticação
          console.log('Usuário autenticado:', data);
          // Armazena o token de autenticação no AsyncStorage
          await AsyncStorage.setItem('authToken', data.token);
        } else {
          // Erro na autenticação
          console.error('Erro na autenticação:', data);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    },
  });

  return (
    <Background colors={['#00B4C5', '#D9D9D9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <DivBackButton>
        <BackButton />
      </DivBackButton>
      <DivContainer>
        <DivForm>
          <WelcomeText>{'BEM-VINDO DE VOLTA'}</WelcomeText>
          <DivField>
            <FormField
              label="E-MAIL"
              placeholder=""
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <Text style={{ color: 'red' }}>{formik.errors.email}</Text>
            ) : null}
            <FormField
              label="SENHA"
              placeholder=""
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              secureTextEntry
            />
            {formik.touched.password && formik.errors.password ? (
              <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
            ) : null}
          </DivField>
          <GenericButton text="LOGAR" onPress={() => formik.handleSubmit()} />
          <DivCapybaraImage>
            <CapybaraImage />
          </DivCapybaraImage>
        </DivForm>
      </DivContainer>
    </Background>
  );
};

export default LoginScreen;
