import styled from 'styled-components';

export const Wrapper = styled.form`
  background: none;
  width: 100%;
  min-height: 100%;
  padding: 30px 150px;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      color: #444;
    }

    span {
      display: flex;
      flex-direction: row;

      h3 {
        font-size: 14px;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  margin-left: 20px;
  padding: 2px 10px;
  background: ${(props) => (props.back ? 'grey' : '#7159c1')};
  opacity: ${(props) => (props.back ? 0.8 : 1)};
  border: none;
  border-radius: 6px;
  color: #fff;

  svg {
    margin-right: 5px;
  }
`;

export const Container = styled.div`
  height: 360px;
  width: 100%;

  background: #fff;
  margin-top: 30px;
  padding: 10px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  span {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 40px 0 0;

    div {
      width: 100%;
      margin: 0 5px;
      height: 50px;

      input {
        height: 100%;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 0 10px;
      }
    }
  }
`;
