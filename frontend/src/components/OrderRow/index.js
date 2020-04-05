import React, { useState } from 'react';
import { FaEllipsisH, FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import propTypes from 'prop-types';

import { Status, OptionsMenu } from './styles';

export default function OrderRow({ order, index }) {
  const [visible, setVisible] = useState(false);

  function handleMenuVisible() {
    setVisible(!visible);
  }

  return (
    <tr key={order}>
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
          <span>MB</span>
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
          <Status status="pending">
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
              <button type="button">
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
