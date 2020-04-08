import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';

import history from '../../../../config/history';
import api from '../../../../services/api';

import { Wrapper, Container, Button } from './styles';

export default function NewOrder({ order }) {
  const [deliverers, setDeliverers] = useState([]);
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loader() {
      try {
        const responseDeliverers = await api.get('/deliverers');
        const responseRecipients = await api.get('/recipients');

        setDeliverers(responseDeliverers.data);
        setRecipients(responseRecipients.data);
      } catch (err) {}
    }

    loader();
  }, []);

  function handleGoBack() {
    history.push('/dashboard/orders');
  }

  async function handleSubmit(event) {
    try {
      const settings = {
        recipient_id: document.getElementById('recipient').value,
        deliveryman_id: document.getElementById('deliverer').value,
        ...event,
      };

      await api.post('/orders', settings);
    } catch (err) {}

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
            <div>
              <h3>Destinatário</h3>
              <select id="recipient">
                {recipients.map((recipient) => (
                  <option key={recipient.id} value={recipient.id}>
                    {recipient.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h3>Entregador</h3>
              <select id="deliverer">
                {deliverers.map((deliverer) => (
                  <option key={deliverer.id} value={deliverer.id}>
                    {deliverer.name}
                  </option>
                ))}
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
