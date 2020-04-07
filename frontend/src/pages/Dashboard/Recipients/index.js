import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FaSearch, FaPlus } from 'react-icons/fa';

import { Container } from './styles';

import RecipientRow from '../../../components/RecipientRow';
import NewRecipient from './NewRecipient';
import EditRecipient from './EditRecipient';

export default function Recipients() {
  const [recipientSearch, setRecipientSearch] = useState('');
  const [recipients, setRecipients] = useState([
    {
      name: 'Matheus',
      street: 'Rua do teste',
      number: '1155',
      cep: '85903450',
      city: 'toledocity',
      state: 'rússia',
      complement: 'sibéria tupiniquim',
    },
  ]);
  const [newRecipientPageOpened, setNewRecipientPageOpened] = useState(false);

  const editRecipientPageReduxState = useSelector(
    (state) => state.application.editRecipientPage
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setNewRecipientPageOpened(!newRecipientPageOpened);
    },
    [newRecipientPageOpened]
  );

  if (editRecipientPageReduxState.editRecipientPageOpened)
    return <EditRecipient />;

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
