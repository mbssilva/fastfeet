import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import { Wrapper, Container } from './styles';

import { closeProblemVisualizeContainer } from '../../store/modules/application/actions';

export default function ProblemVisualize({ visible }) {
  const dispatch = useDispatch();
  const { problem } = useSelector(
    (state) => state.application.problemVisualize
  );

  const handleClose = useCallback(() => {
    dispatch(closeProblemVisualizeContainer());
  }, [dispatch]);

  return (
    problem && (
      <Wrapper type="button" visible={visible} onClick={handleClose}>
        <Container>
          <header>
            <h1>VISUALIZAR PROBLEMA</h1>
          </header>
          <p>{problem.description}</p>
        </Container>
      </Wrapper>
    )
  );
}

ProblemVisualize.propTypes = {
  visible: propTypes.bool.isRequired,
};
