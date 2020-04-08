import React from 'react';
import propTypes from 'prop-types';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';

import { Wrapper, Container, Button } from './styles';
import history from '../../../../config/history';

export default function NewOrder({ order }) {
  function handleGoBack() {
    history.push('/dashboard/orders');
  }

  function handleSubmit(event) {
    const data = {
      deliverer: document.getElementById('deliverer').value,
      ...event,
    };

    // eslint-disable-next-line no-console
    console.log(data);
    history.push('/dashboard/orders');
  }

  return (
    <Wrapper>
      <Form initialData={{ product: order }} onSubmit={handleSubmit}>
        <header>
          <h1>Cadastro de encomendas</h1>
          <span>
            <Button back type="button" onClick={handleGoBack}>
              <FaChevronLeft color="#fff" />
              <h3>VOLTAR</h3>
            </Button>
            <Button type="submit">
              <FaCheck color="#fff" />
              <h3>SALVAR</h3>
            </Button>
          </span>
        </header>

        <Container>
          <span>
            <div id="recipientName">
              <h3>Destinatário</h3>
              <Input name="recipient" />
            </div>
            <div>
              <h3>Entregador</h3>
              <select id="deliverer">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </span>
          <span>
            <div>
              <h3>Nome do produto</h3>
              <Input name="product" />
            </div>
          </span>
        </Container>
      </Form>
    </Wrapper>
  );
}

NewOrder.propTypes = {
  order: propTypes.string.isRequired,
};
