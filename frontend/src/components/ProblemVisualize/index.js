import React, { useCallback } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Wrapper, Container, Image } from './styles';

import { closeProblemVisualizeContainer } from '../../store/modules/application/actions';

export default function ProblemVisualize({ visible, problem }) {
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeProblemVisualizeContainer());
  }, [dispatch]);

  return (
    <Wrapper type="button" visible={visible} onClick={handleClose}>
      <Container>
        <header>
          <h1>VISUALIZAR PROBLEMA</h1>
        </header>
        <p>
          WEHFUEWII HERUIH UIUhuurh fiurhf iuerfuyef yro fouerf uer eryer
          fvourfv uyer fue ruyer uer uye vuh efeh vehbeurbuerbuierbuiebv r fuf
          rf yf yr fuf uy fuw
        </p>
      </Container>
    </Wrapper>
  );
}

ProblemVisualize.propTypes = {
  visible: propTypes.bool.isRequired,
  problem: propTypes.object,
};

ProblemVisualize.defaultProps = {
  problem: {},
};
