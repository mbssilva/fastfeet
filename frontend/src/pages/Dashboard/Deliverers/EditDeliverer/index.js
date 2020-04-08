import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';

import api from '../../../../services/api';

import { closeEditDelivererPage } from '../../../../store/modules/application/actions';

import { Wrapper, Container, Button } from './styles';

export default function NewDeliverer() {
  const dispatch = useDispatch();
  const [urlState, setUrlState] = useState('');

  async function handleChange(event) {
    try {
      const data = new FormData();

      data.append('file', event.target.files[0]);

      // const response = await api.post('/', data);

      // const { id, url } = response.data;

      // setUrlState(url);
    } catch (err) {}
  }

  const { deliverer } = useSelector(
    (state) => state.application.editDelivererPage
  );

  useEffect(() => {
    return () => {
      dispatch(closeEditDelivererPage());
    };
  }, [dispatch]);

  function handleGoBack() {
    dispatch(closeEditDelivererPage());
  }

  function handleSubmit(event) {
    dispatch(closeEditDelivererPage());

    // eslint-disable-next-line no-console
    console.log(event);
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <header>
          <h1>Edição de entregadores</h1>
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
          <label htmlFor="avatar">
            <img
              src={
                urlState ||
                'https://api.adorable.io/avatars/400/abott@adorable.io.png'
              }
              alt="Adicionar Foto"
            />

            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleChange}
            />
          </label>

          <h1>Nome</h1>
          <Input name="name" />
          <h1>E-mail</h1>
          <Input name="email" />
        </Container>
      </Form>
    </Wrapper>
  );
}
