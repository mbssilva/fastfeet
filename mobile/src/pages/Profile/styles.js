import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #fff;

  align-items: center;
  padding: 10px 20px;
`;

export const Container = styled.View`
  align-self: stretch;
`;

export const Avatar = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 65px;
  align-self: center;
  margin: 50px 0;
`;

export const Description = styled.Text`
  margin: 10px 0 3px;
  color: #888;
  font-size: 15px;
`;

export const Content = styled.Text`
  color: #444;
  font-size: 22px;
  font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 60px;
  height: 50px;
  background: #f64c75;
  border-radius: 5px;
  align-self: stretch;

  align-items: center;
  justify-content: center;
`;
