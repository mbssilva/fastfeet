import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEllipsisH, FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import propTypes from 'prop-types';

import { Status, OptionsMenu } from './styles';

import {
  openOrderVisualizeContainer,
  openEditOrderPage,
} from '../../store/modules/application/actions';

import getInitialLetters from '../../utils/getInitialLetters';

export default function OrderRow({ order, index }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  function handleMenuVisible() {
    setVisible(!visible);
  }

  function handleShowOrderVisualize() {
    setVisible(!visible);
    dispatch(openOrderVisualizeContainer(order));
  }

  function handleOpenEditOrder() {
    setVisible(!visible);
    dispatch(openEditOrderPage(order));
  }

  return (
    <tr>
      <td>
        <div className="LeftestTd">{`#${
          index + 1 < 10 ? `0${index + 1}` : index + 1
        }`}</div>
      </td>
      <td>
        <div>{order.recipient.name}</div>
      </td>
      <td>
        <div>
          {order.deliverer.avatar.url ? (
            <img
              className="profilePicture"
              src={order.deliverer.avatar.url}
              alt=""
            />
          ) : (
            <span className="profilePicture">
              {getInitialLetters(order.deliverer.name)}
            </span>
          )}
          <aside>{order.deliverer.name}</aside>
        </div>
      </td>
      <td>
        <div>{order.recipient.city}</div>
      </td>
      <td>
        <div>{order.recipient.state}</div>
      </td>
      <td>
        <div>
          <Status
            status={
              order.canceled_at
                ? 'canceled'
                : order.start_date
                ? 'took'
                : order.signature && order.end_date
                ? 'delivered'
                : 'pending'
            }
          >
            <div />
            <aside>
              {order.canceled_at
                ? 'CANCELADA'
                : order.start_date
                ? 'RETIRADA'
                : order.signature && order.end_date
                ? 'ENTREGUE'
                : 'PENDENTE'}
            </aside>
          </Status>
        </div>
      </td>
      <td>
        <div className="RightestTd">
          <button type="button" onClick={handleMenuVisible}>
            <FaEllipsisH size={15} color="#999" />
          </button>

          <OptionsMenu visible={visible}>
            <div>
              <button type="button" onClick={handleShowOrderVisualize}>
                <FaEye size={17} color="#7159c1" />
                <h6>Visualizar</h6>
              </button>
              <button type="button" onClick={handleOpenEditOrder}>
                <FaPen size={17} color="#33e" />
                <h6>Editar</h6>
              </button>
              <button type="button">
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

OrderRow.propTypes = {
  order: propTypes.shape().isRequired,
  index: propTypes.number.isRequired,
};
