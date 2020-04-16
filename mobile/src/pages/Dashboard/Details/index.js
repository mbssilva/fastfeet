import React from 'react';
import { TouchableOpacity, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../../components/layouts/Signed';

import { Wrapper, Container, Header, Content } from './styles';

export default function Details() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Background>
        <Container>
          <Header>
            <Icon />
          </Header>
          <Content />
        </Container>
      </Background>
    </>
  );
}

Details.navigationOptions = ({ navigation }) => {
  return {
    headerShown: true,
    headerTintColor: '#fff',
    headerTitle: 'Detalhes de encomenda',
    headerTransparent: true,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Orders');
        }}
      >
        <View>
          <Icon name="chevron-left" size={30} color="#fff" />
        </View>
      </TouchableOpacity>
    ),
  };
};
