import styled from 'styled-components';

import logo from '../../assets/fastfeet-logo@2x.png';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 60px;
  padding: 8px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Switch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin-left: 15px;
  border-left: 1px solid #ddd;
  padding-left: 15px;

  h3 {
    color: #444;
    font-size: 15px;
    font-weight: bold;
    margin: 0 10px;
  }
`;

export const Control = styled.div`
  margin-right: 10px;
  margin-left: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #444;
    font-size: 16px;
    font-weight: bold;
    margin: 3px 10px;
  }

  h3 {
    color: #f11;
    font-size: 14px;
    margin: 3px 10px;
  }
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'FastFeet',
  height: '31',
  width: '182',
})``;
