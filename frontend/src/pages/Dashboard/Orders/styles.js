import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 30px 60px;

  background-color: #eeed;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 22px;
    margin: 0 0 20px;
    color: #333;
    margin-left: 0;
    margin-right: auto;
  }

  header {
    display: flex;
    justify-content: space-between;

    input {
      margin: 0 0 15px 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 35px;
      width: 350px;
      padding: 2px 10px;
    }

    button {
      background: #7159c1;
      margin: 0 5px 15px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 35px;
      padding: 2px 10px;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }
  }

  table {
    border-collapse: collapse;

    thead {
      > tr {
        color: #333;
        font-size: 16px;
        font-weight: bold;
      }
    }

    tbody {
      > tr {
        color: #444;
        border: 10px solid #eee;

        td {
          height: 50px;

          div {
            height: 100%;
            width: 100%;

            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .LeftestTh {
          border-radius: 8px 0 0 8px;
        }

        .RightestTh {
          border-radius: 0 8px 8px 0;
        }
      }
    }
  }
`;
