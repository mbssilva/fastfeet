import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
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
    order && (
      <Wrapper type="button" visible={visible} onClick={handleClose}>
        <Container signed={!!order.signature}>
          <header>
            <h1>Informações da encomenda</h1>
          </header>
          <div>
            <small>{order.recipient.street}</small>
            <small>
              {`${order.recipient.city} - ${order.recipient.state}`}
            </small>
            <small>{order.recipient.cep}</small>
            <br />
            <strong>
              Produto: <small>{order.product}</small>
            </strong>
            <strong>Datas</strong>
            <strong>
              Retirada:{' '}
              <small>
                {order.start_date &&
                  format(parseISO(order.start_date), 'dd/MM/yyyy')}
              </small>
            </strong>
            <strong>
              Entrega:{' '}
              <small>
                {order.end_date &&
                  format(parseISO(order.end_date), 'dd/MM/yyyy')}
              </small>
            </strong>
          </div>
          <footer>
            <strong>Assinatura do destinatário</strong>
            <Image src={order.signature && order.signature.url} />
          </footer>
        </Container>
      </Wrapper>
    )
  );
}

OrderVisualize.propTypes = {
  visible: propTypes.bool.isRequired,
};
