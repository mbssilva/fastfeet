import React, { useState, useCallback } from 'react';

import { Container, Image } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    try {
      // DISPARAR UMA ACTION PARA TENTAR CRIAR UMA SESSÃO
    } catch (err) {
    } finally {
      setEmail('');
      setPassword('');
    }
  }, []);

  return (
    <Container>
      <Image />

      <form>
        <h1>SEU E-MAIL</h1>
        <input
          type="email"
          placeholder="Digite seu login"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <h1>SUA SENHA</h1>
        <input
          type="password"
          placeholder="Digite sua senha"
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
