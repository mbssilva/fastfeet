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
  top: ${(props) => (props.signed ? 'calc(50% - 250px)' : 'calc(50% - 150px)')};
  left: calc(50% - 220px);
  z-index: +5;

  background: #fff;
  border: 2px solid #eee;
  border-radius: 5px;
  padding: 15px;

  height: ${(props) => (props.signed ? '520px' : '300px')};
  min-width: 400px;
  max-width: 450px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  header {
    display: flex;
    flex-direction: row;
    align-content: center;
    margin: 10px 0;

    h1 {
      font-size: 15px;
      font-weight: bold;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    strong {
      margin: 3px 0;
    }

    small {
      margin: 3px 0;
      font-size: 14px;
      font-weight: initial;
      color: #666;
    }
  }

  footer {
    display: flex;
    flex-direction: column;

    > strong {
      margin: 8px 0;
      font-weight: bold;
    }

    img {
      margin: 10px 0;
    }
  }
`;

export const Image = styled.img.attrs({
  alt: 'Assinatura do destinatário',
})`
  background: #dddf;
  align-self: center;
  border-radius: 3px;
  width: 82%;
  height: 82%;
  max-height: 350px;
  max-width: 420px;
`;
