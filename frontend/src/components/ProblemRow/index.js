import React, { useState } from 'react';
import { FaEllipsisH, FaEye, FaTrashAlt } from 'react-icons/fa';
import propTypes from 'prop-types';

import { OptionsMenu } from './styles';

export default function ProblemRow({ problem, index }) {
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
          Infelizmente sofri um acidente e a mercadoria do cliente foi
          totalmente danificada
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
                <FaEye size={17} color="#33e" />
                <h6>Visualizar</h6>
              </button>
              <button type="button">
                <FaTrashAlt size={17} color="#f12" />
                <h6>Cancelar encomenda</h6>
              </button>
            </div>
          </OptionsMenu>
        </div>
      </td>
    </tr>
  );
}

ProblemRow.propTypes = {
  problem: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};
