import React, { useRef, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { updateProfileRequest } from '../../store/modules/user/actions';
// import { signOut } from '../../store/modules/auth/actions';

import {
  Container,
  Title,
  Separator,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const comfirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    // dispatch(
    //   updateProfileRequest({
    //     name,
    //     email,
    //     oldPassword,
    //     password,
    //     confirmPassword,
    //   })
    // );
  }

  function handleLogout() {
    // dispatch(signOut());
  }

  return (
    profile && (
      <Container>
        <Title>Meu Perfil</Title>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            placeholder="Nome completo"
            onSubmitEditing={() => emailRef.current.focus()}
            returnKeyType="next"
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            returnKeyType="next"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Sua senha atual"
            ref={oldPasswordRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            returnKeyType="next"
            value={oldPassword}
            onChangeText={(text) => {
              setOldPassword(text);
            }}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Sua nova senha"
            ref={passwordRef}
            onSubmitEditing={() => comfirmPasswordRef.current.focus()}
            returnKeyType="next"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Confirmação de senha"
            ref={comfirmPasswordRef}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
            }}
          />

          <SubmitButton onPress={handleSubmit}>
            <View>
              <Text style={{ color: '#fff' }}>Atualizar Perfil</Text>
            </View>
          </SubmitButton>

          <LogoutButton onPress={handleLogout}>
            <View>
              <Text style={{ color: '#fff' }}>Fazer Logout</Text>
            </View>
          </LogoutButton>
        </Form>
      </Container>
    )
  );
}

function ProfileTabIcon({ color }) {
  return <Icon name="person" size={22} color={color} />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ProfileTabIcon,
};

ProfileTabIcon.propTypes = {
  color: propTypes.string.isRequired,
};
