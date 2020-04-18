import React, { useState } from 'react';
import propTypes from 'prop-types';
import { TouchableOpacity, View, Text, StatusBar, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';

import { Input, SubmitButton } from './styles';

import Background from '../../../components/layouts/Signed';

export default function InformProblem({ navigation, route }) {
  const [problem, setProblem] = useState('');
  const { order } = route.params;

  async function handleSubmit() {
    if (problem !== '') {
      try {
        const response = await api.post('/problems', {
          delivery_id: order.id,
          description: problem,
        });

        console.tron.log(response.data);
        setProblem('');
        Alert.alert('Sucesso', 'Problema reportado com sucesso');
        navigation.navigate('Details');
      } catch (err) {
        Alert.alert(
          'Houve um imprevisto',
          'Infelizmente o sue problema com a entrega não pôde ser reportado, pois ocorreu um erro interno. Tente mais tarde.'
        );
      }
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Background>
        <Input value={problem} onChangeText={setProblem} />
        <SubmitButton onPress={handleSubmit}>
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

InformProblem.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func,
  }).isRequired,
  route: propTypes.shape({
    params: propTypes.shape({
      order: propTypes.shape({
        id: propTypes.number,
      }),
    }),
  }).isRequired,
};
