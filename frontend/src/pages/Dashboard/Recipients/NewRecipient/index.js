import React from 'react';
import propTypes from 'prop-types';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';

import { Wrapper, Container, Button } from './styles';
import history from '../../../../config/history';

export default function NewRecipient({ name }) {
  function handleGoBack() {
    history.push('/dashboard/recipients');
  }

  function handleSubmit(event) {
    // eslint-disable-next-line no-console
    console.log(event);
    history.push('/dashboard/recipients');
  }

  return (
    <Wrapper>
      <Form initialData={{ name }} onSubmit={handleSubmit}>
        <header>
          <h1>Cadastro de destinatários</h1>
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
              <h3>Nome</h3>
              <Input name="name" />
            </div>
          </span>
          <span>
            <div id="recipientStreet">
              <h3>Rua</h3>
              <Input name="street" />
            </div>
            <div id="recipientNumber">
              <h3>Número</h3>
              <Input name="number" />
            </div>
            <div id="recipientCep">
              <h3>CEP</h3>
              <Input name="cep" />
            </div>
          </span>
          <span>
            <div id="recipientCity">
              <h3>Cidade</h3>
              <Input name="city" />
            </div>
            <div id="recipientState">
              <h3>Estado</h3>
              <Input name="state" />
            </div>
            <div id="recipientComplement">
              <h3>Complemento</h3>
              <Input name="complement" />
            </div>
          </span>
        </Container>
      </Form>
    </Wrapper>
  );
}

NewRecipient.propTypes = {
  name: propTypes.string,
};

NewRecipient.defaultProps = {
  name: '',
};
