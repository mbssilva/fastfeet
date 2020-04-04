import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import logo from '../../assets/fastfeet-logo@2x.png';

const rotateFaSpinner = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  min-width: 450px;
  min-height: 450px;

  height: 50%;
  width: 25%;

  max-width: 600px;
  max-height: 600px;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 15px;
  border-radius: 1%;
  box-shadow: 0 0 25px 1px #555;

  form {
    height: 100%;
    width: 100%;

    h1 {
      font-weight: bold;
      font-size: 18px;
      color: #333;
    }

    input {
      margin: 10px 0;
      width: 100%;
      height: 45px;
      padding: 3px 10px;

      border: 1px solid #ccc;
      border-radius: 4px;

      font-size: 16px;
      color: #333;
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      background: #7159c1;
      width: 100%;
      height: 60px;
      margin: 25px 0 15px;
      padding: 5px;

      border: 0;
      border-radius: 8px;

      h6 {
        font-size: 18px;
      }

      color: #fff;
      font-weight: bold;
      cursor: pointer;

      svg {
        margin-right: 20px;
        animation: ${rotateFaSpinner} 2s linear infinite;
      }

      &:disabled {
        cursor: not-allowed;
        background: ${darken(0.15, '#7159c1')};
      }
    }
  }
`;

export const Image = styled.img.attrs({
  src: logo,
  alt: 'Fast Feet',
  height: '62',
  width: '364',
})``;
