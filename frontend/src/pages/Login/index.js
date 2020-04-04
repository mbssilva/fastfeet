import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';

import { Container, Image } from './styles';

import { createSessionRequest } from '../../store/modules/session/actions';

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.session.loading);

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

        <button type="submit" onClick={handleSubmit} disabled={loading}>
          {loading ? <FaSpinner size={25} /> : ''}
          <h6>Entrar no sistema</h6>
        </button>
      </form>
    </Container>
  );
}
