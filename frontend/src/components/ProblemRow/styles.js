import styled from 'styled-components';

export const OptionsMenu = styled.div`
  position: absolute;
  width: 225px;
  left: calc(-8%);
  top: calc(50px);
  background: rgba(245, 245, 245, 0.75);
  border-radius: 7px;
  padding: 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  z-index: +1;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: calc(50% + 15px);
    top: calc(-20px);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(245, 245, 245, 0.75);
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 8px 5px;

    button {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin: 8px 10px 0;
      padding: 0 3px;
      border: none;
      background: none;
      cursor: pointer;

      svg {
        margin-right: 10px;
      }

      h6 {
        font-size: 15px;
        color: #888;
      }

      & + button {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid #ddd;
      }
    }
  }
`;
