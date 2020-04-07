import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import { Wrapper, Container, Image } from './styles';

import { closeOrderVisualizeContainer } from '../../store/modules/application/actions';

export default function OrderVisualize({ visible, order }) {
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeOrderVisualizeContainer());
  }, [dispatch]);

  return (
    <Wrapper type="button" visible={visible} onClick={handleClose}>
      <Container>
        <header>
          <h1>Informações da encomenda</h1>
        </header>
        <div>
          <small>Rua Beethoven, 1729</small>
          <small>Diadema - SP</small>
          <small>09960-580</small>
          <br />
          <strong>Datas</strong>
          <strong>
            Retirada: <small>28/12/2019</small>
          </strong>
          <strong>
            Entrega: <small>25/11/2020</small>
          </strong>
        </div>
        <footer>
          <strong>Assinatura do destinatário</strong>
          <Image src="" />
        </footer>
      </Container>
    </Wrapper>
  );
}

OrderVisualize.propTypes = {
  visible: propTypes.bool.isRequired,
  order: propTypes.object,
};

OrderVisualize.defaultProps = {
  order: {},
};
