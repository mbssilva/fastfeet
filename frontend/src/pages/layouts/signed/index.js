import React from 'react';
import propTypes from 'prop-types';

import { Wrapper, Container } from './styles';

import Header from '../../../components/Header';

export default function GlobalLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
    </Wrapper>
  );
}

GlobalLayout.propTypes = {
  children: propTypes.oneOfType([propTypes.func, propTypes.element]).isRequired,
};
