import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '../../../services/api';

import { Container } from './styles';

import ProblemVisualize from '../../../components/ProblemVisualize';
import ProblemRow from '../../../components/ProblemRow';

export default function Problems() {
  const [problems, setProblems] = useState([]);

  const { problemVisualizeContainerOpened } = useSelector(
    (state) => state.application.problemVisualize
  );

  useEffect(() => {
    async function loadProblems() {
      try {
        const response = await api.get('/problems');

        setProblems(response.data);
      } catch (err) {
        console.tron.log(err);
      }
    }

    loadProblems();
  }, []);

  return (
    problems && (
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
                <ProblemRow key={problem.id} problem={problem} index={index} />
              ))}
            </tbody>
          </table>
        </Container>
        <ProblemVisualize visible={problemVisualizeContainerOpened} />
      </>
    )
  );
}
