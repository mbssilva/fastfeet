import styled from 'styled-components';

import logo from '../../assets/fastfeet-logo@2x.png';

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
      /* margin-top: 10px; */
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
      background: #7159c1;
      width: 100%;
      height: 60px;
      margin: 25px 0 15px;

      border: 0;
      border-radius: 8px;

      font-size: 16px;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const Image = styled.img.attrs({
  src: logo,
  alt: 'Fast Feet',
  height: '62',
  width: '364',
})``;
