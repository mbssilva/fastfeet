import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import propTypes from 'prop-types';

import api from '../../../services/api';

import Appointment from '../../../components/Appointment';

import { Wrapper, Container, Title } from './styles';

export default function Orders() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      try {
        const response = await api.get('/appointments');

        // setAppointments(response.data.rows);
      } catch (err) {}
    }

    // loadAppointments();
  }, []);

  return (
    <Wrapper>
      <Container>{/* <Title>Agendamentos</Title> */}</Container>
    </Wrapper>
  );
}

Orders.navigationOptions = {
  headerTransparent: true,
  headerLeft: () => <Icon name="chevron-left" size={30} color="#7159c1" />,
};
