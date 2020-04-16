import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

import SignedLayout from '../../../components/layouts/Signed';

export default function InformProblem({ route }) {
  useEffect(() => {
    console.tron.warn(route.params);
  }, [route]);

  return <SignedLayout />;
}

InformProblem.navigationOptions = ({ navigation }) => {
  return {
    title: 'Selecione o prestador',
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SelectProvider');
        }}
      >
        <View>
          <Icon name="chevron-left" size={25} color="#fff" />
        </View>
      </TouchableOpacity>
    ),
  };
};
