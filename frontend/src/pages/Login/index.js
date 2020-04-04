import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Image } from './styles';

import { createSessionRequest } from '../../store/modules/session/actions';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      try {
        dispatch(createSessionRequest(email, password));
      } catch (err) {
      } finally {
        setEmail('');
        setPassword('');
      }
    },
    [email, password, dispatch]
  );

  return (
    <Container>
      <Image />

      <form>
        <h1>SEU E-MAIL</h1>
        <input
          type="email"
          placeholder="exemplo@email.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <h1>SUA SENHA</h1>
        <input
          type="password"
          placeholder="***********"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button type="submit" onClick={handleSubmit}>
          Entrar no sistema
        </button>
      </form>
    </Container>
  );
}
