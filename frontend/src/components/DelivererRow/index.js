import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEllipsisH, FaPen, FaTrashAlt } from 'react-icons/fa';
import propTypes from 'prop-types';

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

  return (
    <tr>
      <td>
        <div className="LeftestTd">{`#${
          index + 1 < 10 ? `0${index + 1}` : index
        }`}</div>
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
              <button type="button" onClick={handleOpenEditDeliverer}>
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
  deliverer: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};
