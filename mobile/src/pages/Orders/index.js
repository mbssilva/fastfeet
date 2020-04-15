import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import propTypes from 'prop-types';

import api from '../../services/api';

import Appointment from '../../components/Appointment';
import SignedLayout from '../../components/layouts/Signed';

import { Container, Title } from './styles';

export default function Dashboard() {
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
    <SignedLayout>
      <Container>
        <Title>Agendamentos</Title>
      </Container>
    </SignedLayout>
  );
}

function DashboardTabIcon({ color }) {
  return <Icon name="reorder" size={25} color={color} />;
}

Dashboard.navigationOptions = {
  tabBarLabels: 'Entregas',
  tabBarIcon: DashboardTabIcon,
};

DashboardTabIcon.propTypes = {
  color: propTypes.string.isRequired,
};
