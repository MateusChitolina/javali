import React from 'react';
import styled from 'styled-components/native';

const Logo: React.FC = () => {
  return (
    <StyledImage
      source={require('../../assets/Logo.png')}
      resizeMode="contain"
    />
  );
};

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export default Logo;
