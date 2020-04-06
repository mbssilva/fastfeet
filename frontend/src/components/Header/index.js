import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import { Container, Logo, Switch, Text, Control } from './styles';

import Orders from '../../pages/Dashboard/Orders';
import Deliverers from '../../pages/Dashboard/Deliverers';
import Recipients from '../../pages/Dashboard/Recipients';
import Problems from '../../pages/Dashboard/Problems';

import history from '../../config/history';

import { signOut } from '../../store/modules/session/actions';

export default function Header({ currentPage }) {
  const dispatch = useDispatch();

  const handleChangePage = useCallback(
    (selectedPage) => {
      if (selectedPage === currentPage) return;
      history.push(`/dashboard/${selectedPage.name.toLowerCase()}`);
    },
    [currentPage]
  );

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, []);

  return (
    <Container>
      <Logo />
      <Switch>
        <button
          type="button"
          onClick={() => {
            handleChangePage(Orders);
          }}
        >
          <Text inPage={currentPage === Orders}>ENCOMENDAS</Text>
        </button>
        <button
          type="button"
          onClick={() => {
            handleChangePage(Deliverers);
          }}
        >
          <Text inPage={currentPage === Deliverers}>ENTREGADORES</Text>
        </button>
        <button
          type="button"
          onClick={() => {
            handleChangePage(Recipients);
          }}
        >
          <Text inPage={currentPage === Recipients}>DESTINATÁRIOS</Text>
        </button>
        <button
          type="button"
          onClick={() => {
            handleChangePage(Problems);
          }}
        >
          <Text inPage={currentPage === Problems}>PROBLEMAS</Text>
        </button>
      </Switch>
      <Control>
        <h2>Admin FastFeet</h2>
        <button type="button" onClick={handleSignOut}>
          <h3>Sair do sistema</h3>
        </button>
      </Control>
    </Container>
  );
}

Header.propTypes = {
  currentPage: propTypes.oneOfType([propTypes.func, propTypes.element])
    .isRequired,
};
