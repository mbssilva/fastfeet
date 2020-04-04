import React from 'react';
import { FaTruckMoving } from 'react-icons/fa';

import { Container } from './styles';

export default function Error() {
  return (
    <Container>
      <FaTruckMoving size={100} />
      <hr />
      <h1>Hmm, parece que não há nada aqui :/</h1>
    </Container>
  );
}
