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
  StatusText,
  OrdersList,
  List,
} from './styles';

export default function Orders({ navigation, route }) {
  const dispatch = useDispatch();
  const { id, avatar, name } = useSelector((state) => state.user.profile);
  const [orders, setOrders] = useState([]);
  const [statusPending, setStatusPending] = useState(true);
  const [forceRefresh, setForceRefresh] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      try {
        if (statusPending) {
          const response = await api.get(`/deliveryman/${id}`);
          setOrders(response.data);
        } else {
          const response = await api.get(`/deliveryman/${id}/deliveries`);
          setOrders(response.data);
        }
      } catch (err) {}
    }
    loadOrders();
  }, [id, avatar, statusPending, forceRefresh, route.params]);

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
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Title style={{ marginRight: 5 }}>Entregas</Title>
              <TouchableOpacity
                onPress={() => {
                  setForceRefresh(!forceRefresh);
                }}
              >
                <View>
                  <Icon name="autorenew" size={23} color="red" />
                </View>
              </TouchableOpacity>
            </View>
            <Switch>
              <TouchableOpacity
                onPress={() => {
                  setStatusPending(true);
                }}
              >
                <View>
                  <StatusText
                    pending={statusPending}
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                  >
                    Pendentes
                  </StatusText>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setStatusPending(false);
                }}
              >
                <View>
                  <StatusText
                    pending={!statusPending}
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                  >
                    Entregues
                  </StatusText>
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
  route: propTypes.shape({
    params: propTypes.object,
  }),
};

Orders.defaultProps = {
  route: {},
};
