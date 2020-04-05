import React from 'react';

import { Container } from './styles';

// import api from '../../services/api';

export default function dashboard() {
  return (
    <Container>
      <h1>Gerenciamento de encomendas</h1>

      <header>
        <input />
        <button type="button">CADASTRAR</button>
      </header>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="LeftestTh">ID</td>
            <td>Destinatário</td>
            <td>Entregador</td>
            <td>Cidade</td>
            <td>Estado</td>
            <td>Status</td>
            <td className="RightestTh">Ações</td>
          </tr>
          <tr>
            <td className="LeftestTh">ID</td>
            <td>Destinatário</td>
            <td>Entregador</td>
            <td>Cidade</td>
            <td>Estado</td>
            <td>Status</td>
            <td className="RightestTh">Ações</td>
          </tr><tr>
            <td className="LeftestTh">ID</td>
            <td>Destinatário</td>
            <td>Entregador</td>
            <td>Cidade</td>
            <td>Estado</td>
            <td>Status</td>
            <td className="RightestTh">Ações</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
