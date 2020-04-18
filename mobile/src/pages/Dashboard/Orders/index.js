import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import propTypes from 'prop-types';

import api from '../../../services/api';
import getInitialLetters from '../../../utils/getInitialLetters';

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
  const { id, avatar, name } = useSelector((state) => state.user.profile);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await api.get(`/deliveryman/${id}`);
        setOrders(response.data);
      } catch (err) {}
    }
    console.tron.warn(avatar);
    loadOrders();
  }, [id, avatar]);

  function handleLogout() {
    dispatch(Logout());
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Wrapper>
        <Header>
          {avatar ? (
            <Avatar
              source={{
                // uri: `https://api.adorable.io/avatar/200/profile.png`,
                uri: `${avatar.url}`,
              }}
            />
          ) : (
            <View
              style={{
                backgroundColor: '#ddd',
                height: 80,
                width: 80,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: '#7159c1',
                  fontSize: 32,
                }}
              >
                {getInitialLetters(name)}
              </Text>
            </View>
          )}

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
