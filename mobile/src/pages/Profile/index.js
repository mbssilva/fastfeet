import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';

import getInitialLetters from '../../utils/getInitialLetters';

import { Logout } from '../../store/modules/login/actions';

import {
  Wrapper,
  Container,
  Avatar,
  Description,
  Content,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);

  function handleLogout() {
    dispatch(Logout());
  }

  const parsedCreatedAt = useMemo(
    () => format(parseISO(profile.createdAt), 'dd/MM/yyyy'),
    [profile.createdAt]
  );

  return (
    <Wrapper>
      {profile && (
        <>
          {profile.avatar ? (
            <Avatar
              source={{
                uri: `${profile.avatar.url}`,
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
                {getInitialLetters(profile.name)}
              </Text>
            </View>
          )}
          <Container>
            <Description>Nome completo</Description>
            <Content>{profile.name}</Content>

            <Description>E-mail</Description>
            <Content>{profile.email}</Content>

            <Description>Data de cadastro</Description>
            <Content>{parsedCreatedAt}</Content>
          </Container>
        </>
      )}
      <LogoutButton onPress={handleLogout}>
        <View>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
            Logout
          </Text>
        </View>
      </LogoutButton>
    </Wrapper>
  );
}

function ProfileTabIcon({ color }) {
  return <Icon name="account-circle" size={25} color={color} />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ProfileTabIcon,
};

ProfileTabIcon.propTypes = {
  color: propTypes.string.isRequired,
};
