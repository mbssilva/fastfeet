import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';

import api from '../../../../services/api';
import history from '../../../../config/history';

import { Wrapper, Container, Button } from './styles';

import { closeEditRecipientPage } from '../../../../store/modules/application/actions';

export default function EditRecipient() {
  const dispatch = useDispatch();
  const { recipient } = useSelector(
    (state) => state.application.editRecipientPage
  );

  useEffect(() => {
    return () => {
      dispatch(closeEditRecipientPage());
    };
  }, [dispatch]);

  function handleGoBack() {
    dispatch(closeEditRecipientPage());
  }

  async function handleSubmit(event) {
    try {
      const settings = {
        ...event,
        id: recipient.id,
      };

      await api.put('/recipients', settings);
    } catch (err) {}

    history.push('/dashboard/recipients');
  }

  return (
    recipient && (
      <Wrapper>
        <Form initialData={recipient} onSubmit={handleSubmit}>
          <header>
            <h1>Edição de destinatário</h1>
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
    )
  );
}
