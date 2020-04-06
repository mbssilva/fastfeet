import React, { useState } from 'react';
import { FaEllipsisH, FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import propTypes from 'prop-types';

import { OptionsMenu } from './styles';

export default function DelivererRow({ order, index }) {
  const [visible, setVisible] = useState(false);

  function handleMenuVisible() {
    setVisible(!visible);
  }

  return (
    <tr>
      <td>
        <div className="LeftestTd">{`#${
          index + 1 < 10 ? `0${index + 1}` : index
        }`}</div>
      </td>
      <td>
        <div>
          <span className="profilePicture">MB</span>
        </div>
      </td>
      <td>
        <div>Matheus Bernardi</div>
      </td>
      <td>
        <div>matheus@hotmail.com</div>
      </td>
      <td>
        <div className="RightestTd">
          <button type="button" onClick={handleMenuVisible}>
            <FaEllipsisH size={15} color="#999" />
          </button>

          <OptionsMenu visible={visible}>
            <div>
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

DelivererRow.propTypes = {
  order: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};
