import React from 'react';
import propTypes from 'prop-types';
import { TouchableOpacity, View, Text, StatusBar } from 'react-native';
import { parseISO, format } from 'date-fns';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import MiIcon from 'react-native-vector-icons/MaterialIcons';
import AdIcon from 'react-native-vector-icons/AntDesign';

import Background from '../../../components/layouts/Signed';

import {
  Container,
  Header,
  Content,
  Title,
  Info,
  ButtonDeck,
  Button,
} from './styles';

export default function Details({ navigation, route }) {
  const { order } = route.params;
  const status =
    route.params.status === 'delivered'
      ? 'Entregue' // delivered - Entregue
      : route.params.status === 'took'
      ? 'Retirado' // took - Retirado
      : 'Pendente'; // pending - Pendente

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Background>
        <Container type="info">
          <Header>
            <FaIcon name="car" size={21} color="#7159c1" />
            <Text
              style={{
                marginLeft: 10,
                color: '#7159c1',
                fontWeight: 'bold',
                fontSize: 15,
              }}
            >
              Informações da entrega
            </Text>
          </Header>
          <Content>
            <Title>DESTINATÁRIO</Title>
            <Info>{order.recipient.name}</Info>
            <Title>ENDEREÇO DA ENTREGA</Title>
            <Info>
              {`${order.recipient.street}, ${order.recipient.number}, ${order.recipient.city} - ${order.recipient.state}, ${order.recipient.cep}`}
            </Info>
            <Title>PRODUTO</Title>
            <Info>{order.product}</Info>
          </Content>
        </Container>

        <Container type="status">
          <Header>
            <FaIcon name="exchange" size={21} color="#7159c1" />
            <Text
              style={{
                marginLeft: 10,
                color: '#7159c1',
                fontWeight: 'bold',
                fontSize: 15,
              }}
            >
              Situação da entrega
            </Text>
          </Header>
          <Content>
            <Title>STATUS</Title>
            <Info>{status}</Info>
            <Title>DATA DA RETIRADA</Title>
            <Info>
              {order.start_date
                ? format(parseISO(order.start_date), 'dd/MM/yyyy')
                : '- - / - - / - -'}
            </Info>
            <Title>DATA DA ENTREGA</Title>
            <Info>
              {order.end_date
                ? format(parseISO(order.end_date), 'dd/MM/yyyy')
                : '- - / - - / - -'}
            </Info>
          </Content>
        </Container>

        <ButtonDeck>
          <Button
            onPress={() => {
              navigation.navigate('InformProblem');
            }}
            style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
          >
            <View style={{ alignItems: 'center' }}>
              <AdIcon name="closecircleo" size={22} color="#f11" />
              <Text style={{ textAlign: 'center', marginTop: 5 }}>
                Informar{'\n'}Problema
              </Text>
            </View>
          </Button>

          <Button
            onPress={() => {
              navigation.navigate('VisualizeProblem');
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <AdIcon name="infocirlceo" size={22} color="#a81" />
              <Text style={{ textAlign: 'center', marginTop: 5 }}>
                Visualizar{'\n'}Problemas
              </Text>
            </View>
          </Button>

          <Button
            onPress={() => {
              navigation.navigate('ConfirmOrder');
            }}
            style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
          >
            <View style={{ alignItems: 'center' }}>
              <AdIcon name="checkcircleo" size={22} color="#7159c1" />
              <Text style={{ textAlign: 'center', marginTop: 5 }}>
                Confirmar{'\n'}Entrega
              </Text>
            </View>
          </Button>
        </ButtonDeck>
      </Background>
    </>
  );
}

Details.navigationOptions = ({ navigation }) => {
  return {
    headerShown: true,
    headerTintColor: '#fff',
    headerTitle: 'Detalhes de encomenda',
    headerTransparent: true,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Orders');
        }}
        style={{
          padding: 12,
        }}
      >
        <View>
          <MiIcon name="chevron-left" size={30} color="#fff" />
        </View>
      </TouchableOpacity>
    ),
  };
};

Details.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func,
    params: propTypes.shape(),
  }).isRequired,
  route: propTypes.shape({
    params: propTypes.shape({
      order: propTypes.shape(),
      status: propTypes.string,
    }),
  }).isRequired,
};
