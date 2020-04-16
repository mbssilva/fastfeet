import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import propTypes from 'prop-types';

import api from '../../../services/api';

import { Logout } from '../../../store/modules/login/actions';

import Order from '../../../components/Order';

import {
  Wrapper,
  Header,
  Avatar,
  ContentView,
  UpperText,
  BottomText,
  Container,
  ContainerHeader,
  Title,
  Switch,
  OrdersList,
} from './styles';

export default function Orders({ navigation }) {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState(['1']);

  useEffect(() => {
    async function loadOrders() {
      try {
        const orders = await api.get('/appointments');

        // setAppointments(response.data.rows);
      } catch (err) {}
    }
    // loadOrders();
  }, []);

  function handleLogout() {
    dispatch(Logout());
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Wrapper>
        <Header>
          <Avatar
            source={{
              uri: `https://api.adorable.io/avatar/200/profile.png`,
            }}
          />
          <ContentView>
            <UpperText>Bem vindo de volta,</UpperText>
            <BottomText>Matheus Bernardi</BottomText>
          </ContentView>
          <TouchableOpacity onPress={handleLogout}>
            <View>
              <Icon name="exit-to-app" size={30} color="red" />
            </View>
          </TouchableOpacity>
        </Header>

        <Container>
          <ContainerHeader>
            <Title>Entregas</Title>
            <Switch>
              <Text
                style={{ fontWeight: 'bold', fontSize: 15, color: '#7159c1' }}
              >
                Pendentes
              </Text>
              <Text
                style={{ fontWeight: 'bold', fontSize: 15, color: '#808080' }}
              >
                Entregues
              </Text>
            </Switch>
          </ContainerHeader>
          <OrdersList>
            <Order navigation={navigation} />
          </OrdersList>
        </Container>
      </Wrapper>
    </>
  );
}

Orders.navigationOptions = {
  headerShown: false,
};

Order.propTypes = {
  navigation: propTypes.shape(propTypes.object).isRequired,
};
