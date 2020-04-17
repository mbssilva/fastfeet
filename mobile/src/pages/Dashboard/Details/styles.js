import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #fff;
  border-radius: 5px;
  border: 1px solid #eee;
  padding: 10px;
  align-self: stretch;
  min-height: 100px;
  margin: ${(props) => (props.type === 'info' ? '90px 30px 0' : '10px 30px 0')};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: column;
  margin: 10px 0;
`;

export const Title = styled.Text`
  color: #999;
  margin-top: 6px;
`;

export const Info = styled.Text`
  margin-bottom: 6px;
  color: #555;
`;

export const ButtonDeck = styled.View`
  flex-direction: row;
  margin: 10px 0;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  border: 1px solid #eee;
  background: rgba(80, 80, 80, 0.02);
  height: 100%;
  width: 27%;
  padding: 10px;
`;
