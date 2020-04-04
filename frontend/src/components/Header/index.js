import React from 'react';

import { Container, Logo, Switch, Control } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo />
      <Switch>
        <h3>ENCOMENDAS</h3>
        <h3>ENTREGADORES</h3>
        <h3>DESTINATÁRIOS</h3>
        <h3>PROBLEMAS</h3>
      </Switch>
      <Control>
        <h2>Admin FastFeet</h2>
        <h3>Sair do sistema</h3>
      </Control>
    </Container>
  );
}
