import React from 'react';
import styled from 'styled-components/native';

const CapybaraImage: React.FC = () => {
  return (
    <StyledImage
      source={require('../../assets/CapybaraImage.png')}
      resizeMode="contain"
    />
  );
};

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export default CapybaraImage;
