import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEllipsisH, FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import propTypes from 'prop-types';

import { Status, OptionsMenu } from './styles';

import { openOrderVisualizeContainer } from '../../store/modules/application/actions';

import getInitialLetters from '../../utils/getInitialLetters';

export default function OrderRow({ order, index }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const applicationReduxlState = useSelector((state) => state.application);

  function handleMenuVisible() {
    setVisible(!visible);
  }

  function handleShowOrderVisualize() {
    if (applicationReduxlState.orderVisualizeContainerOpened) return;

    setVisible(!visible);
    dispatch(openOrderVisualizeContainer(order));
  }

  return (
    <tr>
      <td>
        <div className="LeftestTd">{`#${
          index + 1 < 10 ? `0${index + 1}` : index
        }`}</div>
      </td>
      <td>
        <div>Destinatário</div>
      </td>
      <td>
        <div>
          <span className="profilePicture">
            {getInitialLetters('Matheus Bernardi')}
          </span>
          {/* <img
            className="profilePicture"
            src=""
            alt={getInitialLetters('Matheus Bernardi')}
          /> */}
          <aside>Matheus Bernardi</aside>
        </div>
      </td>
      <td>
        <div>Toledo</div>
      </td>
      <td>
        <div>Paraná</div>
      </td>
      <td>
        <div>
          <Status status="delivered">
            <div />
            <aside>ENTREGUE</aside>
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
              <button type="button">
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
  order: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};
