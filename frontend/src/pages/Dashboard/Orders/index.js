import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FaSearch, FaPlus } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import { Container } from './styles';

// import api from '../../services/api';

import OrderVisualize from '../../../components/OrderVisualize';
import OrderRow from '../../../components/OrderRow';

export default function Orders() {
  const [orderSearch, setOrderSearch] = useState('');
  const [orders, setOrders] = useState(['1']);

  const applicationReduxlState = useSelector((state) => state.application);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setOrderSearch('');
  }, []);

  return (
    <>
      <Container>
        <h1>Gerenciamento de encomendas</h1>

        <form>
          <div>
            <FaSearch size={18} color="#888" />
            <input
              type="text"
              placeholder="Buscar por encomendas"
              value={orderSearch}
              onChange={(event) => {
                setOrderSearch(event.target.value);
              }}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            <FaPlus size={17} />
            <p>CADASTRAR</p>
          </button>
        </form>

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
              <OrderRow key={order} order={order} index={index} />
            ))}
          </tbody>
        </table>
      </Container>
      <OrderVisualize
        visible={applicationReduxlState.orderVisualizeContainerOpened}
        order={applicationReduxlState.order}
      />
    </>
  );
}
