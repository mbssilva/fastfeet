import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import Background from './Background';

import { Container, Dot } from './styles';

export default function ProgressBar({ status }) {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    status === 'delivered'
      ? setProgress(3) // delivered - Entregue
      : status === 'took'
      ? setProgress(2) // took - Retirado
      : setProgress(1); // pending - Pendente
  }, [status]);

  return (
    <Background>
      <Container>
        <Dot progress={progress >= 1} />
        <Dot progress={progress >= 2} />
        <Dot progress={progress >= 3} />
      </Container>
    </Background>
  );
}

ProgressBar.propTypes = {
  status: propTypes.string,
};

ProgressBar.defaultProps = {
  status: 'pending',
};
