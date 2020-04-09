import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEllipsisH, FaEye, FaTrashAlt } from 'react-icons/fa';
import propTypes from 'prop-types';

import api from '../../services/api';
import history from '../../config/history';

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

  async function handleDeleteProblem() {
    setVisible(!visible);

    if (!window.confirm('Tem certeza que você deseja deletar essa encomenda?'))
      return;

    try {
      const settings = {
        id: problem.id,
      };

      await api.delete('/problems', { data: settings });
      history.push('/dashboard/problems');
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
        <div>{problem.descriptionrecipients}</div>
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
              <button type="button" onClick={handleDeleteProblem}>
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
