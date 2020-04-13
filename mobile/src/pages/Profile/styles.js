import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;
export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 10px 30px;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 20 },
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 5px;
  height: 50px;
  background: #3b9eff;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 25px;
  height: 50px;
  background: #f64c75;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;
