import React from 'react';

import { Container, Image } from './styles';

export default function Login() {
  return (
    <Container>
      <Image />

      <form>
        <h1>SEU E-MAIL</h1>
        <input placeholder="Digite seu login" />
        <h1>SUA SENHA</h1>
        <input placeholder="Digite sua senha" />

        <button type="submit" to="/">
          Entrar no sistema
        </button>
      </form>
    </Container>
  );
}
