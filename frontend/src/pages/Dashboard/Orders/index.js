import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FaSearch, FaPlus } from 'react-icons/fa';

import { Container } from './styles';

import OrderVisualize from '../../../components/OrderVisualize';
import OrderRow from '../../../components/OrderRow';
import NewOrder from './NewOrder';

export default function Orders() {
  const [orderSearch, setOrderSearch] = useState('');
  const [orders, setOrders] = useState(['1']);
  const [newOrderPageOpened, setNewOrderPageOpened] = useState(false);

  const orderVisualizeReduxState = useSelector(
    (state) => state.application.orderVisualize
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setNewOrderPageOpened(!newOrderPageOpened);
    },
    [newOrderPageOpened]
  );

  return !newOrderPageOpened ? (
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
        visible={orderVisualizeReduxState.orderVisualizeContainerOpened}
        order={orderVisualizeReduxState.order}
      />
    </>
  ) : (
    <NewOrder order={orderSearch || ''} />
  );
}
