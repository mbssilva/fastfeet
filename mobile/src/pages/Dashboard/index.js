import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import propTypes from 'prop-types';

import api from '../../services/api';

import Appointment from '../../components/Appointment';

import { Container, Title } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      try {
        const response = await api.get('/appointments');

        setAppointments(response.data.rows);
      } catch (err) {}
    }

    loadAppointments();
  }, []);

  return (
    <Container>
      <Title>Agendamentos</Title>
    </Container>
  );
}

function DashboardTabIcon({ color }) {
  return <Icon name="event" size={22} color={color} />;
}

Dashboard.navigationOptions = {
  tabBarLabels: 'Entregas',
  tabBarIcon: DashboardTabIcon,
};

DashboardTabIcon.propTypes = {
  color: propTypes.string.isRequired,
};
