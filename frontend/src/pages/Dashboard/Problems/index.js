import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import ProblemVisualize from '../../../components/ProblemVisualize';
import ProblemRow from '../../../components/ProblemRow';

export default function Problems() {
  const [problems, setProblems] = useState(['1', '2', '3', '4', '5', '6']);

  const problemVisualizeReduxState = useSelector(
    (state) => state.application.problemVisualize
  );

  return (
    <>
      <Container>
        <h1>Problemas na entrega</h1>

        <table>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, index) => (
              <ProblemRow key={problem} problem={problem} index={index} />
            ))}
          </tbody>
        </table>
      </Container>
      <ProblemVisualize
        visible={problemVisualizeReduxState.problemVisualizeContainerOpened}
        problem={problemVisualizeReduxState.problem}
      />
    </>
  );
}
