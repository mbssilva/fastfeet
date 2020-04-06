import styled from 'styled-components';
import { lighten } from 'polished';

export const Status = styled.div.attrs((props) => {
  return {
    color:
      props.status === 'delivered'
        ? '#1a1' // Entregue - delivered (Verde)
        : props.status === 'took'
        ? '#33e' // Retirada - took (Azul)
        : props.status === 'canceled'
        ? '#f12' // Cancelada - canceled (Vermelho)
        : '#e4b100', // Pendente - pending (Amarelo)
    lighteningAmount:
      props.status === 'delivered'
        ? 0.53 // Entregue - delivered (Verde)
        : props.status === 'took'
        ? 0.3 // Retirada - took (Azul)
        : props.status === 'canceled'
        ? 0.38 // Cancelada - canceled (Vermelho)
        : 0.44, // Pendente - pending (Amarelo)
  };
})`
  padding: 5px 6px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: baseline;
  background-color: ${(props) => lighten(props.lighteningAmount, props.color)};

  > div {
    height: 10px;
    width: 10px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  }

  > aside {
    color: ${(props) => props.color};
    font-size: 15px;
    font-weight: bold;
  }
`;

export const OptionsMenu = styled.div`
  position: absolute;
  width: 140px;
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
    left: calc(50% - 20px);
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
