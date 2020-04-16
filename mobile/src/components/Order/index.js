import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import propTypes from 'prop-types';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import ProgressBar from '../ProgressBar';

import {
  Container,
  Header,
  ProgressContainer,
  Subtitle,
  SubtitleText,
  BottomContent,
} from './styles';

export default function Order({ navigation }) {
  // const dateParsed = useMemo(() => {
  //   return formatDistance(parseISO(data.date), new Date(), {
  //     locale: pt,
  //     addSuffix: true,
  //   });
  // }, [data.date]);

  function goToDetailsPage() {
    navigation.navigate('Details');
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
          Encomenda 01
        </Text>
      </Header>
      <ProgressContainer>
        <ProgressBar status="pending" />
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
            14/01/2020
          </Text>
        </View>
        <View>
          <Text style={{ color: '#bbb', fontSize: 14 }}>Cidade</Text>
          <Text style={{ color: '#444', fontSize: 16, fontWeight: 'bold' }}>
            Curitiba
          </Text>
        </View>
        <TouchableOpacity onPress={goToDetailsPage}>
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
};
