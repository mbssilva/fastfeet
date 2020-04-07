import React, { useState, useCallback } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';

import { Container } from './styles';

import RecipientRow from '../../../components/RecipientRow';
import NewRecipient from './NewRecipient';

export default function Recipients() {
  const [recipientSearch, setRecipientSearch] = useState('');
  const [recipients, setRecipients] = useState(['1', '2', '3', '4', '5', '6']);
  const [newRecipientPageOpened, setNewRecipientPageOpened] = useState(false);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setNewRecipientPageOpened(!newRecipientPageOpened);
    },
    [newRecipientPageOpened]
  );

  return !newRecipientPageOpened ? (
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
            <RecipientRow key={recipient} recipient={recipient} index={index} />
          ))}
        </tbody>
      </table>
    </Container>
  ) : (
    <NewRecipient name={recipientSearch} />
  );
}
