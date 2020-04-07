import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEllipsisH, FaEye, FaTrashAlt } from 'react-icons/fa';
import propTypes from 'prop-types';

import { OptionsMenu } from './styles';

import { openProblemVisualizeContainer } from '../../store/modules/application/actions';

export default function ProblemRow({ problem, index }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  function handleMenuVisible() {
    setVisible(!visible);
  }

  function handleShowProblemVisualize() {
    setVisible(!visible);
    dispatch(openProblemVisualizeContainer(problem));
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
              <button type="button" onClick={handleShowProblemVisualize}>
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
