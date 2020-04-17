import React from 'react';
import { TouchableOpacity, View, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Input, SubmitButton } from './styles';

import Background from '../../../components/layouts/Signed';

export default function InformProblem({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Background>
        <Input />
        <SubmitButton onPress={() => {}}>
          <View>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
              Enviar
            </Text>
          </View>
        </SubmitButton>
      </Background>
    </>
  );
}

InformProblem.navigationOptions = ({ navigation }) => {
  return {
    headerShown: true,
    headerTintColor: '#fff',
    headerTitle: 'Informar problema',
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
