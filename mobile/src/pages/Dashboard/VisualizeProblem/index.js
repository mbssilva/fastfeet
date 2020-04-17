import React from 'react';
import { TouchableOpacity, View, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../../components/layouts/Signed';

import { Header, Problem, Right, TextContainer, Date } from './styles';

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
          <Right>
            <TextContainer
              style={{
                flexWrap: 'wrap',
              }}
            >
              Destinatário ausente rjnirjnf erj fkr jerk jer erjvbjerkweifn ero nf
            </TextContainer>
          </Right>

          <Date
            style={{
              marginRight: 0,
              marginLeft: 'auto',
            }}
          >
            14/01/2020
          </Date>
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
