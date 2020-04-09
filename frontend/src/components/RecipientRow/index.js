import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEllipsisH, FaPen, FaTrashAlt } from 'react-icons/fa';
import propTypes from 'prop-types';

import api from '../../services/api';
import history from '../../config/history';

import { OptionsMenu } from './styles';

import { openEditRecipientPage } from '../../store/modules/application/actions';

export default function RecipientRow({ recipient, index }) {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  function handleMenuVisible() {
    setVisible(!visible);
  }

  function handleOpenEditPage() {
    setVisible(!visible);
    dispatch(openEditRecipientPage(recipient));
  }

  async function handleDeleteRecipient() {
    setVisible(!visible);

    if (
      !window.confirm('Tem certeza que você deseja deletar esse destinatário?')
    )
      return;

    try {
      const settings = {
        id: recipient.id,
      };

      await api.delete('/recipients', { data: settings });
      history.push('/dashboard/recipients');
    } catch (err) {}
  }

  return (
    <tr>
      <td>
        <div className="LeftestTd">{`#${
          index + 1 < 10 ? `0${index + 1}` : index
        }`}</div>
      </td>
      <td>
        <div>{recipient.name}</div>
      </td>
      <td>
        <div>{`${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`}</div>
      </td>
      <td>
        <div className="RightestTd">
          <button type="button" onClick={handleMenuVisible}>
            <FaEllipsisH size={15} color="#999" />
          </button>

          <OptionsMenu visible={visible}>
            <div>
              <button type="button" onClick={handleOpenEditPage}>
                <FaPen size={17} color="#33e" />
                <h6>Editar</h6>
              </button>
              <button type="button" onClick={handleDeleteRecipient}>
                <FaTrashAlt size={17} color="#f12" />
                <h6>Excluir</h6>
              </button>
            </div>
          </OptionsMenu>
        </div>
      </td>
    </tr>
  );
}

RecipientRow.propTypes = {
  recipient: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};
