import styled from 'styled-components';

export const Wrapper = styled.button`
  border: none;
  z-index: +3;
  min-height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.7);

  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;

export const Container = styled.div`
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 220px);
  z-index: +5;

  background: #fff;
  border: 2px solid #eee;
  border-radius: 5px;
  padding: 15px;

  height: 300px;
  min-width: 400px;
  max-width: 450px;

  display: flex;
  flex-direction: column;
  align-content: left;

  header {
    margin: 10px 0;
    width: 100%;

    h1 {
      text-align: left;
      font-size: 13px;
      font-weight: bold;
      color: #333;
      margin-left: 0;
    }
  }

  p {
    text-align: left;
    color: #666;
  }
`;
