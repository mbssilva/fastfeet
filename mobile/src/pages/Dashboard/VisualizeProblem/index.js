import React from 'react';
import { TouchableOpacity, View, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../../components/layouts/Signed';

import { Header, Problem, Left, Right, TextContainer, Date } from './styles';

export default function VisualizeProblem() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Background>
        <Header>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            Encomenda 01
          </Text>
        </Header>

        <Problem>
          <Left>
            <Text
              style={{
                color: '#666',
              }}
            >
              Destinatário ausente
            </Text>
          </Left>

          <Right>
            <Text
              style={{
                color: '#666',
              }}
            >
              14/01/2020
            </Text>
          </Right>
        </Problem>
      </Background>
    </>
  );
}

VisualizeProblem.navigationOptions = ({ navigation }) => {
  return {
    headerShown: true,
    headerTintColor: '#fff',
    headerTitle: 'Visualizar problemas',
    headerTransparent: true,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}
        style={{
          padding: 12,
        }}
      >
        <View>
          <Icon name="chevron-left" size={30} color="#fff" />
        </View>
      </TouchableOpacity>
    ),
  };
};
