import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const Button = styled(TouchableOpacity)`
  padding: 10px;
`;

const BackButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.goBack()}>
      <Svg width="100%" height="100%" viewBox="0 0 48 76" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.9796 74.3714C46.6613 74.6408 46.2831 74.8546 45.8668 75.0004C45.4505 75.1462 45.0042 75.2213 44.5535 75.2213C44.1027 75.2213 43.6564 75.1462 43.2401 75.0004C42.8238 74.8546 42.4457 74.6408 42.1274 74.3714L1.00664 39.658C0.687524 39.3893 0.434342 39.0701 0.26159 38.7186C0.0888411 38.3672 -8.33635e-05 37.9904 -8.33967e-05 37.6099C-8.343e-05 37.2294 0.0888409 36.8526 0.261589 36.5012C0.434342 36.1497 0.687523 35.8305 1.00664 35.5618L42.1273 0.848343C42.7708 0.305153 43.6435 3.79662e-07 44.5535 3.00109e-07C45.4634 2.20557e-07 46.3361 0.305153 46.9796 0.848343C47.623 1.39153 47.9845 2.12826 47.9845 2.89644C47.9845 3.66462 47.623 4.40134 46.9796 4.94453L8.27815 37.6099L46.9796 70.2753C47.2987 70.544 47.5519 70.8632 47.7247 71.2146C47.8974 71.5661 47.9863 71.9429 47.9863 72.3234C47.9863 72.7039 47.8974 73.0806 47.7247 73.4321C47.5519 73.7835 47.2987 74.1027 46.9796 74.3714Z"
          fill="#D9D9D9"
        />
      </Svg>
    </Button>
  );
};

export default BackButton;
