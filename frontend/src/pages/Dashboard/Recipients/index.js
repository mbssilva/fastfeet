import React, { useState, useCallback } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import { Container } from './styles';

// import api from '../../services/api';

import RecipientRow from '../../../components/RecipientRow';

export default function Orders() {
  const [recipientSearch, setRecipientSearch] = useState('');
  const [recipients, setRecipients] = useState(['1', '2', '3', '4', '5', '6']);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setRecipientSearch('');
  }, []);

  return (
    <Container>
      <h1>Gerenciamento de destinatários</h1>

      <form>
        <div>
          <FaSearch size={18} color="#888" />
          <input
            type="text"
            placeholder="Buscar por destinatários"
            value={recipientSearch}
            onChange={(event) => {
              setRecipientSearch(event.target.value);
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
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((recipient, index) => (
            <RecipientRow key={recipient} order={recipient} index={index} />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
