import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #fff;

  align-items: center;
  padding: 10px 15px;
`;

export const Header = styled.View`
  background: transparent;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;

  margin-left: 20px;
  margin-right: 0;
`;

export const ContentView = styled.View`
  justify-content: center;

  margin-left: -60px;
`;

export const UpperText = styled.Text`
  color: #999;
  font-size: 15px;
`;

export const BottomText = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
`;

export const Container = styled.View`
  flex: 1;
  align-self: stretch;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  color: #444;
  font-size: 25px;
  font-weight: bold;
`;

export const Switch = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
`;

export const OrdersList = styled.View`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 5px;
`;
