import React, { useState, useCallback } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import { Container } from './styles';

// import api from '../../services/api';

import ProblemRow from '../../../components/ProblemRow';

export default function Problems() {
  const [problems, setProblems] = useState(['1', '2', '3', '4', '5', '6']);

  return (
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
  );
}
