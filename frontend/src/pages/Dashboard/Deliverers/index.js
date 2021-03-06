import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaSearch, FaPlus } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import { Container } from './styles';

import api from '../../../services/api';

import DelivererRow from '../../../components/DelivererRow';
import NewDeliverer from './NewDeliverer';
import EditDeliverer from './EditDeliverer';

export default function Deliverers() {
  const [delivererSearch, setDelivererSearch] = useState('');
  const [deliverers, setDeliverers] = useState([]);
  const [newDelivererPageOpened, setNewDelivererPageOpened] = useState(false);

  const { editDelivererPageOpened } = useSelector(
    (state) => state.application.editDelivererPage
  );

  useEffect(() => {
    async function loadDeliverers() {
      try {
        const response = await api.get('/deliverers', {
          params: {
            deliverer: delivererSearch,
          },
        });

        setDeliverers(response.data);
      } catch (err) {}
    }

    loadDeliverers();
  }, [delivererSearch]);

  useEffect(() => {
    async function loadDeliverers() {
      try {
        const response = await api.get('/deliverers');

        setDeliverers(response.data);
      } catch (err) {}
    }

    loadDeliverers();
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setNewDelivererPageOpened(!newDelivererPageOpened);
    },
    [newDelivererPageOpened]
  );

  if (editDelivererPageOpened) return <EditDeliverer />;

  return !newDelivererPageOpened ? (
    deliverers && (
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
            {deliverers.map((deliverer, index) => (
              <DelivererRow
                key={deliverer.id}
                deliverer={deliverer}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </Container>
    )
  ) : (
    <NewDeliverer name={delivererSearch} />
  );
}
