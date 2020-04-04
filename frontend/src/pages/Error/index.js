import React from 'react';
import { FaFighterJet } from 'react-icons/fa';

import { Container } from './styles';

export default function Error() {
  return (
    <Container>
      <FaFighterJet size={100} />
      <h1>Hm, parece que essa rota não existe :/</h1>
    </Container>
  );
}
