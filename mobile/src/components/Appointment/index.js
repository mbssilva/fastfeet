import React, { useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatDistance(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <>
      <Container past={data.past}>
        <Left>
          <Avatar
            source={{
              uri: data.provider.avatar
                ? data.provider.avatar.url
                : `https://api.adorable.io/avatar/50/${
                    data.provider.name + String(data.provider.id)
                  }.png`,
            }}
          />

          <Info>
            <Name>{data.provider.name}</Name>
            <Time>{dateParsed}</Time>
          </Info>
        </Left>

        {data.cancelable && !data.canceled_at && (
          <TouchableOpacity onPress={onCancel}>
            <View>
              <Icon name="event-busy" size={24} color="#f64c75" />
            </View>
          </TouchableOpacity>
        )}
      </Container>
    </>
  );
}
