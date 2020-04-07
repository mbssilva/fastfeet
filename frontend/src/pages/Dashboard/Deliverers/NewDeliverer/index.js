import React from 'react';
import propTypes from 'prop-types';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';

import { Wrapper, Container, Button } from './styles';
import history from '../../../../config/history';

export default function newDeliverer({ name }) {
  function handleGoBack() {
    history.push('/dashboard/deliverers');
  }

  return (
    <Wrapper>
      <header>
        <h1>Cadastro de entregadores</h1>
        <span>
          <Button back onClick={handleGoBack}>
            <FaChevronLeft color="#fff" />
            <h3>VOLTAR</h3>
          </Button>
          <Button>
            <FaCheck color="#fff" />
            <h3>SALVAR</h3>
          </Button>
        </span>
      </header>

      <Container>
        <h1>Aqui ficará a seção de cadastro de novos entregadores</h1>
        <h2>Nome do novo entregador: {name}</h2>
      </Container>
    </Wrapper>
  );
}

newDeliverer.propTypes = {
  name: propTypes.string.isRequired,
};
