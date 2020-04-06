import React from 'react';
import propTypes from 'prop-types';

import { Container } from './styles';

import Header from '../../../components/Header';

export default function SignedLayout({ children }) {
  return (
    <>
      <Header currentPage={children.type} />
      <Container>{children}</Container>
    </>
  );
}

SignedLayout.propTypes = {
  children: propTypes.oneOfType([propTypes.func, propTypes.element]).isRequired,
};
