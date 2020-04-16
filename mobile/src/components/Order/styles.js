import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background: #fff;

  align-items: center;
  align-self: stretch;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-bottom: 10px;
  padding: 10px 20px;
`;

export const ProgressBar = styled.View`
  height: 20px;
  align-self: stretch;
  background: yellow;
`;

export const BottomContent = styled.View`
  flex-direction: row;
  background: rgba(80, 80, 80, 0.03);
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 50px;
`;
