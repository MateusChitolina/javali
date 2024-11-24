import React from 'react';
import styled from 'styled-components/native';
import Logo from '../atoms/Logo';

const Container = styled.View`
  align-items: center;
  margin: 20px;
`;

const DivLogo = styled.View`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const LogoName = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: #5928ED;
`;

const LogoWithLabel: React.FC = () => {
  return (
    <Container>
      <DivLogo>
        <Logo />
      </DivLogo>
      <LogoName>{'JAVA-LI'}</LogoName>
    </Container>
  );
};

export default LogoWithLabel;
