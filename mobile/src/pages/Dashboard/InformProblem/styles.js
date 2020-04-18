import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs({
  placeholder: 'Inclua aqui o problema que ocorreu na entrega',
  multiline: true,
  textAlignVertical: 'top',
  autoCapitalize: 'sentences',
  autoCorrect: true,
  autoFocus: true,
})`
  height: 250px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 90px 20px 20px;
  padding: 10px;
  align-items: flex-start;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin: 0 20px;
  border-radius: 5px;
  background: #7159c1;
  height: 45px;
  justify-content: center;
  align-items: center;
`;
