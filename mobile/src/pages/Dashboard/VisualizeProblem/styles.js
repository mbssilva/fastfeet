import styled from 'styled-components/native';

export const Header = styled.View`
  align-self: stretch;
  background: transparent;
  align-items: center;
  margin: 60px 0 20px;
`;

export const Problem = styled.View`
  background: #fff;
  margin: 10px 20px;
  align-self: stretch;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px 10px;
  min-height: 60px;
  flex-direction: row;
  align-items: center;
`;

export const Left = styled.View`
  margin-left: 0;
  margin-right: 90px;
`;

export const Right = styled.View`
  margin-right: 0;
  margin-left: auto;
  width: 80px;
`;
