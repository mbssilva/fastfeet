import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import { Container } from './styles';

// import api from '../../services/api';

import OrderRow from '../../../components/OrderRow';

export default function Orders() {
  const [orders, setOrders] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
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
          {orders.map((order, index) => (
            <OrderRow order={order} index={index} />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
