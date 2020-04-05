import React, { useState } from 'react';

import { Container } from './styles';

// import api from '../../services/api';

export default function Orders() {
  const [orders, setOrders] = useState([
    '1',
    '2',
    '3',
    '1',
    '2',
    '3',
    '1',
    '2',
    '3',
    '1',
    '2',
    '3',
    '1',
    '2',
    '3',
    '1',
    '2',
    '3',
  ]);

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
          {orders.map((order) => (
            <tr key={order}>
              <td>
                <div className="LeftestTh">{`#0${order}`}</div>
              </td>
              <td>
                <div>Destinatário</div>
              </td>
              <td>
                <div>Entregador</div>
              </td>
              <td>
                <div>Cidade</div>
              </td>
              <td>
                <div>Estado</div>
              </td>
              <td>
                <div>Status</div>
              </td>
              <td>
                <div className="RightestTh">...</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
