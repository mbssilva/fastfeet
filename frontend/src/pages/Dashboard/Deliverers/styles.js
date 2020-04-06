import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 30px 60px;

  background-color: #eeed;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 24px;
    margin: 0 0 20px;
    color: #333;
    margin-left: 0;
    margin-right: auto;
  }

  form {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: row;

      position: relative;
      background-color: #fff;
      height: 40px;

      border: 1px solid #ccc;
      border-radius: 6px;

      svg {
        border-radius: 6px 0 0 6px;
        left: 0px;
        margin: 8px 1px 1px 10px;
      }

      input {
        margin: 0 0 15px 5px;
        border: 0;
        border-radius: 0 6px 6px 0;
        height: 100%;
        width: 350px;
        padding: 2px 10px;

        &::placeholder {
          color: #666;
          font-size: 15px;
        }
      }
    }

    button {
      background: #7159c1;
      margin: 0 5px 15px 0;
      border: none;
      border-radius: 4px;
      height: 40px;
      padding: 2px 10px;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;

      display: flex;
      flex-direction: row;
      align-items: center;

      svg {
        margin: 0 4px;
      }

      p {
        margin: 0 4px;
      }
    }
  }

  table {
    border-collapse: collapse;

    tr {
      border: 10px solid #eee;
    }

    thead {
      > tr {
        color: #333;
        font-size: 16px;
        font-weight: bold;
      }
    }

    tbody {
      tr {
        color: #444;

        td {
          height: 55px;

          > div {
            height: 100%;
            width: 100%;
            padding: 5px 0;

            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;

            .profilePicture {
              font-size: 16px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-align: center;
              background: #ddd;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              color: #7159c1;
            }
          }
        }

        .LeftestTd {
          border-radius: 7px 0 0 7px;
        }

        .RightestTd {
          border-radius: 0 7px 7px 0;
          position: relative;

          > button {
            background: none;
            border: none;
            padding: 0 3px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
