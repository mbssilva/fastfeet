import styled, { keyframes } from 'styled-components';

const translate = keyframes`
  from {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(200%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 100%;
  align-items: center;
  justify-content: center;

  svg {
    animation: ${translate} 2.5s linear infinite;
    margin-bottom: -12px;
  }

  hr {
    margin-bottom: 5px;
    width: 480px;
  }

  h1 {
    font-size: 25px;
  }
`;
