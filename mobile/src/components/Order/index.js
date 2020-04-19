import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import propTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

import ProgressBar from '../ProgressBar';

import {
  Container,
  Header,
  ProgressContainer,
  Subtitle,
  SubtitleText,
  BottomContent,
} from './styles';

export default function Order({ navigation, order, index }) {
  function getStatus() {
    return order.end_date ? 'delivered' : order.start_date ? 'took' : 'pending';
  }

  return (
    <Container>
      <Header>
        <Icon name="car" size={21} color="#7159c1" />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#7159c1',
            marginLeft: 10,
          }}
        >
          {`Encomenda ${index + 1}`}
        </Text>
      </Header>
      <ProgressContainer>
        <ProgressBar status={getStatus()} />
        <Subtitle>
          <SubtitleText>Aguardando{'\n'} Retirada</SubtitleText>
          <SubtitleText style={{ marginLeft: '-4%' }}>Retirada</SubtitleText>
          <SubtitleText>Entregue</SubtitleText>
        </Subtitle>
      </ProgressContainer>
      <BottomContent>
        <View>
          <Text style={{ color: '#bbb', fontSize: 14 }}>Data</Text>
          <Text style={{ color: '#444', fontSize: 16, fontWeight: 'bold' }}>
            {format(parseISO(order.created_at), 'dd/MM/yyyy')}
          </Text>
        </View>
        <View>
          <Text style={{ color: '#bbb', fontSize: 14 }}>Cidade</Text>
          <Text style={{ color: '#444', fontSize: 16, fontWeight: 'bold' }}>
            {order.recipient.city}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              order,
              status: getStatus(),
              index,
            })
          }
        >
          <View>
            <Text
              style={{ color: '#7159c1', fontSize: 15, fontWeight: 'bold' }}
            >
              Ver detalhes
            </Text>
          </View>
        </TouchableOpacity>
      </BottomContent>
    </Container>
  );
}

Order.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func,
  }).isRequired,
  order: propTypes.shape({
    recipient: propTypes.shape({
      city: propTypes.string,
    }),
    created_at: propTypes.string,
  }).isRequired,
  index: propTypes.number.isRequired,
};
