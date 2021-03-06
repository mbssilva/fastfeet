import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaSearch, FaPlus } from 'react-icons/fa';

import api from '../../../services/api';

import { Container } from './styles';

import OrderVisualize from '../../../components/OrderVisualize';
import OrderRow from '../../../components/OrderRow';
import NewOrder from './NewOrder';
import EditOrder from './EditOrder';

export default function Orders() {
  const [orderSearch, setOrderSearch] = useState('');
  const [orders, setOrders] = useState([]);
  const [newOrderPageOpened, setNewOrderPageOpened] = useState(false);

  const { orderVisualizeContainerOpened } = useSelector(
    (state) => state.application.orderVisualize
  );

  const { editOrderPageOpened } = useSelector(
    (state) => state.application.editOrderPage
  );

  useEffect(() => {
    async function fillOrders() {
      try {
        const response = await api.get('/orders', {
          params: {
            product: orderSearch,
          },
        });

        setOrders(response.data);
      } catch (err) {}
    }

    fillOrders();
  }, [orderSearch]);

  useEffect(() => {
    async function fillOrders() {
      try {
        const response = await api.get('/orders');

        setOrders(response.data);
      } catch (err) {}
    }

    fillOrders();
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setNewOrderPageOpened(!newOrderPageOpened);
    },
    [newOrderPageOpened]
  );

  if (editOrderPageOpened) return <EditOrder />;

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
              <OrderRow key={order.id} order={order} index={index} />
            ))}
          </tbody>
        </table>
      </Container>
      <OrderVisualize visible={orderVisualizeContainerOpened} />
    </>
  ) : (
    <NewOrder order={orderSearch || ''} />
  );
}
