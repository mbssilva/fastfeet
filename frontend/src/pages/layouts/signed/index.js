import React from 'react';
import propTypes from 'prop-types';

import { Wrapper, Container } from './styles';

import Header from '../../../components/Header';

export default function GlobalLayout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}

GlobalLayout.propTypes = {
  children: propTypes.oneOfType([propTypes.func, propTypes.element]).isRequired,
};
