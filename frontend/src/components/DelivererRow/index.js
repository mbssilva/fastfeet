import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEllipsisH, FaPen, FaTrashAlt } from 'react-icons/fa';
import propTypes from 'prop-types';

import api from '../../services/api';
import history from '../../config/history';

import { OptionsMenu } from './styles';

import { openEditDelivererPage } from '../../store/modules/application/actions';

import getInitialLetters from '../../utils/getInitialLetters';

export default function DelivererRow({ deliverer, index }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  function handleMenuVisible() {
    setVisible(!visible);
  }

  function handleOpenEditDeliverer() {
    setVisible(!visible);
    dispatch(openEditDelivererPage(deliverer));
  }

  async function handleDeleteDeliverer() {
    setVisible(!visible);

    if (!window.confirm('Tem certeza que você deseja deletar esse entregador?'))
      return;

    try {
      const settings = {
        id: deliverer.id,
      };

      await api.delete('/deliverers', { data: settings });
      history.push('/dashboard/deliverers');
    } catch (err) {}
  }

  return (
    <tr>
      <td>
        <div className="LeftestTd">{`#${
          index + 1 < 10 ? `0${index + 1}` : index + 1
        }`}</div>
      </td>
      <td>
        <div>
          {deliverer.avatar.url ? (
            <img className="profilePicture" src={deliverer.avatar.url} alt="" />
          ) : (
            <span className="profilePicture">
              {getInitialLetters(deliverer.name)}
            </span>
          )}
        </div>
      </td>
      <td>
        <div>{deliverer.name}</div>
      </td>
      <td>
        <div>{deliverer.email}</div>
      </td>
      <td>
        <div className="RightestTd">
          <button type="button" onClick={handleMenuVisible}>
            <FaEllipsisH size={15} color="#999" />
          </button>

          <OptionsMenu visible={visible}>
            <div>
              <button type="button" onClick={handleOpenEditDeliverer}>
                <FaPen size={17} color="#33e" />
                <h6>Editar</h6>
              </button>
              <button type="button" onClick={handleDeleteDeliverer}>
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

DelivererRow.propTypes = {
  deliverer: propTypes.shape().isRequired,
  index: propTypes.number.isRequired,
};
