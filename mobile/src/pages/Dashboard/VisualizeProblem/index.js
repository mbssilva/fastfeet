import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignedLayout from '../../../components/layouts/Signed';

import api from '../../../services/api';

import { Container, ProvidersList, Provider, Avatar, Name } from './styles';

export default function VisualizeProblem({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      try {
        const response = await api.get('/providers');

        setProviders(response.data);
      } catch (err) {}
    }

    loadProviders();
  }, []);

  return (
    <SignedLayout>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={(provider) => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() => {
                navigation.navigate('SelectDateTime', { provider });
              }}
            >
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${
                        provider.name + String(provider.id)
                      }.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </SignedLayout>
  );
}

VisualizeProblem.navigationOptions = ({ navigation }) => {
  return {
    title: 'Selecione o prestador',
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
      >
        <View>
          <Icon name="chevron-left" size={25} color="#fff" />
        </View>
      </TouchableOpacity>
    ),
  };
};
