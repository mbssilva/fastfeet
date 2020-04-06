import React, { useState, useCallback } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import { Container } from './styles';

// import api from '../../services/api';

import DelivererRow from '../../../components/DelivererRow';

export default function Orders() {
  const [delivererSearch, setDelivererSearch] = useState('');
  const [orders, setOrders] = useState(['1', '2', '3', '4', '5', '6', '7']);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setDelivererSearch('');
  }, []);

  return (
    <Container>
      <h1>Gerenciamento de entregadores</h1>

      <form>
        <div>
          <FaSearch size={18} color="#888" />
          <input
            type="text"
            placeholder="Buscar por entregadores"
            value={delivererSearch}
            onChange={(event) => {
              setDelivererSearch(event.target.value);
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
            <th>Foto</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <DelivererRow key={order} order={order} index={index} />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
