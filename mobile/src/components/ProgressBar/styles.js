import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
`;

export const Dot = styled.View`
  height: ${(props) => (props.progress ? '12px' : '12px')};
  width: ${(props) => (props.progress ? '12px' : '12px')};
  border-radius: 6px;
  border: ${(props) => (props.progress ? 'none' : '2px solid #7159c1')};
  background: ${(props) => (props.progress ? '#7159c1' : '#fff')};
`;
