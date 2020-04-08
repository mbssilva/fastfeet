import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';

import { Wrapper, Container, Button } from './styles';

import { closeEditOrderPage } from '../../../../store/modules/application/actions';

export default function EditOrder() {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.application.editOrderPage);

  useEffect(() => {
    return () => {
      dispatch(closeEditOrderPage());
    };
  }, [dispatch]);

  function handleGoBack() {
    dispatch(closeEditOrderPage());
  }

  function handleSubmit(event) {
    const data = {
      deliverer: document.getElementById('deliverer').value,
      ...event,
    };

    // eslint-disable-next-line no-console
    console.log(data);
    dispatch(closeEditOrderPage());
  }

  return (
    <Wrapper>
      <Form initialData={order} onSubmit={handleSubmit}>
        <header>
          <h1>Edição de encomendas</h1>
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
                <option value="volvo" selected={false}>
                  Volvo
                </option>
                <option value="saab" selected={false}>
                  Saab
                </option>
                <option value="mercedes" selected={false}>
                  Mercedes
                </option>
                <option value="audi" selected={false}>
                  Audi
                </option>
                <option value="Matheus Bernardi" selected>
                  Matheus Bernardi
                </option>
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
