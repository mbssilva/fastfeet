import React from 'react';
import propTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TextInput } from './styles';

function Input({ style, icon, ...rest }) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />}
      <TextInput {...rest} />
    </Container>
  );
}

Input.propTypes = {
  icon: propTypes.string,
  style: propTypes.oneOfType([propTypes.object, propTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default Input;
