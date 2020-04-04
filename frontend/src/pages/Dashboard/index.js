import React from 'react';

import { Container } from './styles';

import api from '../../services/api';

export default function dashboard() {
  api.get('/recipients');

  return (
    <Container>
      <h1>Hello World!</h1>
    </Container>
  );
}
