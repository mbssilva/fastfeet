import React from 'react';
import propTypes from 'prop-types';

import { Container } from './styles';

export default function AuthLayout({ children }) {
  return <Container>{children}</Container>;
}

AuthLayout.propTypes = {
  children: propTypes.oneOfType([propTypes.func, propTypes.element]).isRequired,
};
