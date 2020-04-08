import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { Wrapper, Container, Image } from './styles';

import { closeOrderVisualizeContainer } from '../../store/modules/application/actions';

export default function OrderVisualize({ visible }) {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.application.orderVisualize.order);

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
          <small>{order && order.recipient.street}</small>
          <small>
            {order && `${order.recipient.city} - ${order.recipient.state}`}
          </small>
          <small>{order && order.recipient.cep}</small>
          <br />
          <strong>Datas</strong>
          <strong>
            Retirada: <small>{order && order.start_date}</small>
          </strong>
          <strong>
            Entrega: <small>{order && order.end_date}</small>
          </strong>
        </div>
        <footer>
          <strong>Assinatura do destinatário</strong>
          <Image src={order && order.signature} />
        </footer>
      </Container>
    </Wrapper>
  );
}

OrderVisualize.propTypes = {
  visible: propTypes.bool.isRequired,
};
