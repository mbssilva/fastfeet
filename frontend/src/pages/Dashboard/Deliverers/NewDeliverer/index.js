import React, { useState } from 'react';
import propTypes from 'prop-types';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';

import history from '../../../../config/history';
import api from '../../../../services/api';

import { Wrapper, Container, Button } from './styles';

export default function NewDeliverer({ name }) {
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

  function handleGoBack() {
    history.push('/dashboard/deliverers');
  }

  function handleSubmit(event) {
    // eslint-disable-next-line no-console
    console.log(event);
    history.push('/dashboard/deliverers');
  }

  return (
    <Wrapper>
      <Form initialData={{ name }} onSubmit={handleSubmit}>
        <header>
          <h1>Cadastro de entregadores</h1>
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

NewDeliverer.propTypes = {
  name: propTypes.string.isRequired,
};
