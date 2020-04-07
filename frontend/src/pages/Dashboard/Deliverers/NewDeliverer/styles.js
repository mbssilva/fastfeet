import styled from 'styled-components';

export const Wrapper = styled.div`
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
  height: 350px;
  width: 100%;

  background: #fff;
  margin-top: 30px;
  padding: 25px 10px;

  border-radius: 8px;

  label {
    cursor: pointer;
    margin-left: calc(50% - 60px);

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background-color: #eee;
    }

    input {
      display: none;
    }
  }

  h1 {
    margin: 15px 10px 3px;
    font-size: 18px;
    color: #333;
  }

  input {
    height: 40px;
    width: 100%;
    margin: 0 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 0 10px;
    color: #333;
  }
`;
