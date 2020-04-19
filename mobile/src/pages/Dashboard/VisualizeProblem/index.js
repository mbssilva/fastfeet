import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { TouchableOpacity, View, Text, StatusBar } from 'react-native';
import { format, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';

import Background from '../../../components/layouts/Signed';

import { Header, Problem, Left, Right } from './styles';

export default function VisualizeProblem({ route }) {
  const { index } = route.params;
  const { id: order_id } = route.params.order;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      try {
        const response = await api.get(`/problems/${order_id}`);

        await setProblems(response.data);
      } catch (err) {}
    }

    loadProblems();
  }, [order_id]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      {problems && (
        <Background>
          <Header>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fff',
              }}
            >
              {`Encomenda ${index + 1}`}
            </Text>
          </Header>
          {problems.map((problem) => (
            <Problem key={problem.id}>
              <Left>
                <Text
                  style={{
                    color: '#666',
                  }}
                >
                  {problem.description}
                </Text>
              </Left>

              <Right>
                <Text
                  style={{
                    color: '#666',
                  }}
                >
                  {format(parseISO(problem.created_at), 'dd/MM/yyyy')}
                </Text>
              </Right>
            </Problem>
          ))}
        </Background>
      )}
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

VisualizeProblem.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func,
  }).isRequired,
  route: propTypes.shape({
    params: propTypes.shape({
      order: propTypes.shape({
        id: propTypes.number,
      }),
      index: propTypes.number,
    }),
  }).isRequired,
};
