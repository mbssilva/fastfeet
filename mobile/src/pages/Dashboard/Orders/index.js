import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  List,
} from './styles';

export default function Orders({ navigation }) {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.user.profile);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await api.get(`/deliveryman/${id}`);
        setOrders(response.data);
      } catch (err) {}
    }
    loadOrders();
  }, [id]);

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
              <TouchableOpacity onPress={() => {}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#7159c1',
                      textDecorationLine: 'underline',
                    }}
                  >
                    Pendentes
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#808080',
                    }}
                  >
                    Entregues
                  </Text>
                </View>
              </TouchableOpacity>
            </Switch>
          </ContainerHeader>
          <OrdersList>
            <List
              data={orders}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item, index }) => (
                <Order navigation={navigation} order={item} index={index} />
              )}
            />
          </OrdersList>
        </Container>
      </Wrapper>
    </>
  );
}

Orders.navigationOptions = {
  headerShown: false,
};

Orders.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func,
  }).isRequired,
};
